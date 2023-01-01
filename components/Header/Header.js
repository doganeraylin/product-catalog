import styles from "./Header.module.scss"
import { useRouter } from "next/router"

const Header = () => {

    const router = useRouter()

    const logOut = () => {
        router.push('/login')
    }

    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.logo}>Piton<span className={styles.logoSpan}>Shop</span></h1>
            <button className={styles.logOut} onClick={logOut}>Logout</button>
        </div>
    )
}

export default Header