import Header  from "../Header/Header"
import styles from "./ProductDetails.module.scss"
import { useState, useEffect } from "react";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as faFileSolid} from "@fortawesome/free-solid-svg-icons"
import {faHeart as faFileRegular} from "@fortawesome/free-regular-svg-icons"

const ProductDetails = (props) => {

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
                <div className={styles.productDetailsContainer} key={props.id}>
                <img src={props.img} className={styles.productImg}></img>
                <div className={styles.productTextContainer}>
                    <p className={styles.heartIconSolid}>{props.likes} likes<span><FontAwesomeIcon icon={faFileSolid} className={styles.heartIconSolid}/></span></p>
                    <p className={styles.productName}>{props.name}</p>
                    <p className={styles.productDescription}>{props.description}</p>
                    <p className={styles.productPrice}>{props.price} ₺</p>
                </div>
            </div>
                
        </> 
    )
}

export default ProductDetails