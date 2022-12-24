import styles from "./Products.module.scss"
import Header from "../Header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearch,
    faAmbulance,
    faAnchor
  } from "@fortawesome/free-solid-svg-icons"


const Products = () => {
    return (
        <>
        <Header />
        <div className={styles.productsContainer}>
            <div className={styles.singleProductContainer}>
                <p>+</p>
                <img src="/book-cover.jpg" className={styles.productImg}></img>
                <p className={styles.productName}>The Art of Computer Programming</p>
                <hr></hr>
                <p className={styles.productPrice}>35.00 ₺</p>
            </div>
        </div>
        </>
    )
}

export default Products