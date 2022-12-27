import axios from "axios"
import  Link  from "next/link"
import styles from "./Products.module.scss"
import Header from "../Header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart as faFileSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faFileRegular } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react";

const Products = () => {

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsImlhdCI6MTY0OTg2MDExMiwiZXhwIjoxNjc1NzgwMTEyfQ.z8XYELsP1GBKkGpyvI14WzJKQAAbtQUwCl3hlLs_U4M"
    const baseURL = 'https://assignment-api.piton.com.tr/api/v1/product/all';
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
        const config = {
            headers: {
                "access-token" : accessToken
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
                    <Link href={"/products/" + product.id} key={product.id}>
                        <div className={styles.productContainer}>
                            <FontAwesomeIcon icon={faFileRegular} className={styles.heartIconRegular}/>
                            <a>
                                <img src={product.image}className={styles.productImg}></img>
                            </a>
                         
                            <p className={styles.productName}>{product.name}</p>
                            <hr></hr>
                            <p className={styles.productPrice}>{`${product.price} ₺`}</p>
                        </div>
                    </Link>
                )
            })}
        </div> 
        </>
    )
}

export default Products


