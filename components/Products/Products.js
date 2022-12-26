import axios from "axios"
import styles from "./Products.module.scss"
import Header from "../Header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart as faFileSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faFileRegular } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react";




const Products = () => {

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsImlhdCI6MTY0OTg2MDExMiwiZXhwIjoxNjc1NzgwMTEyfQ.z8XYELsP1GBKkGpyvI14WzJKQAAbtQUwCl3hlLs_U4M"
    const baseURL = 'https://assignment-api.piton.com.tr/api/v1/product/all';
    const [products, setProducts] = useState(null);

    const fetchData = async () => {
        try {
        const config = {
            headers: {
                "access-token" : accessToken
                // Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axios.get(baseURL, config);
        console.log(response);
        setProducts(response.data.products)
        } catch (error) {
        console.log(error.response);
        }
    };
  

useEffect(() => {
    fetchData()
}, [])

    return (
        <>
        <Header />
        <div className={styles.productList}>
            {products.map((product) => {
                return (
                    <div className={styles.productContainer}>
                        <FontAwesomeIcon icon={faFileRegular} className={styles.heartIconRegular}/>
                        <img src={product.image}className={styles.productImg}></img>
                        <p className={styles.productName}>{product.name}</p>
                        <hr></hr>
                        <p className={styles.productPrice}>{`${product.price} ₺`}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Products


// useEffect(() => {

//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     };

//     axios.get(baseURL, config)
//         .then((response) => {
//         setPost(response.data);
//     });
//   }, []);

//      if (!post) return null;
 


