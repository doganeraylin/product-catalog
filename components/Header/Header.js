import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.logo}>Piton<span className={styles.logoSpan}>Shop</span></h1>
            <button className={styles.logOut}>Logout</button>
        </div>
    )
}

export default Header