import styles from "./ProductDetails.module.scss"
import Header  from "../Header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faHeart as faFileSolid} from "@fortawesome/free-solid-svg-icons"

import {faHeart as faFileRegular} from "@fortawesome/free-regular-svg-icons"

const ProductDetails = () => {
    return (
        <>  
            <Header />
            <div className={styles.productDetailsContainer}>
            <img src="/book-cover.jpg"></img>
            <div className={styles.productTextContainer}>
                 <p className={styles.heartIconSolid}>5 likes<span><FontAwesomeIcon icon={faFileSolid} className={styles.heartIconSolid}/></span></p>
                 <p className={styles.productName}>The Art of Computer Programming</p>
                 <p className={styles.productDescription}>he Art of Computer Programming (TAOCP) is a comprehensive monograph written by the computer scientist Donald Knuth presenting programming algorithms and their analysis. Volumes 1–5 are intended to represent the central core of computer programming for sequential machines.
                 When Knuth began the project in 1962, he originally conceived of it as a single book with twelve chapters. The first three volumes of what was then expected to be a seven-volume set were published in 1968, 1969, and 1973. Work began in earnest on Volume 4 in 1973, but was suspended in 1977 for work on typesetting prompted by the second edition of Volume 2. Writing of the final copy of Volume 4A began in longhand in 2001, and the first online pre-fascicle, 2A, appeared later in 2001</p>
                 <p className={styles.productPrice}>35.00 ₺</p>
            </div>
        </div>
        </> 
    )
}

export default ProductDetails