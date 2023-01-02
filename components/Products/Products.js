import Header from "../Header/Header"
import styles from "./Products.module.scss"
import axios from "axios"
import  Link  from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faFileSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faFileRegular } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react";

const Products = () => {

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsImlhdCI6MTY0OTg2MDExMiwiZXhwIjoxNjc1NzgwMTEyfQ.z8XYELsP1GBKkGpyvI14WzJKQAAbtQUwCl3hlLs_U4M"
    const baseURL = 'https://assignment-api.piton.com.tr/api/v1/product/all';
    const [products, setProducts] = useState([]);
    const [icon, setIcon] = useState(faFileRegular)

    const handleLike = () => {
        if (icon === faFileRegular) {
            setIcon(faFileSolid);
        } else {
            setIcon(faFileRegular);
        }
    }

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
                    <div className={styles.productContainer}>
                        <FontAwesomeIcon 
                            icon={icon} 
                            onClick={handleLike} 
                            className={icon === faFileSolid ? styles.heartIconSolid : styles.heartIconRegular}
                        />
                        <Link href={"/products/" + product.id} key={product.id} legacyBehavior>
                            <a className={styles.aLink}>
                                <img src={product.img} className={styles.productImg}></img>
                            </a>
                        </Link>
                        <Link href={"/products/" + product.id} key={product.id} legacyBehavior>
                            <a className={styles.aLink}>
                                <p className={styles.productName}>{product.name}</p>
                            </a>
                        </Link>
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


