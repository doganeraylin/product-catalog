import styles from "./Login.module.scss"


const Login = () => {
    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.introContainer}>
                <h1 className={styles.storeName}>PitonShop</h1>
                <p className={styles.description}>The most popular book shop for IT</p>
            </div>
            <div className={styles.loginContainer}>
                <p className={styles.loginTitle}>Hello Again!</p>
                <p className={styles.loginSubtitle}>Welcome Back</p>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <input type="email" name="email" className={styles.email} placeholder="Email Address"></input>
                        <input type="password" name="password" placeholder="Password" className={styles.password}></input>
                        <button type="submit" className={styles.loginBtn}>Login</button>
                    </form>
                </div>  
                <p className={styles.forgotPassword}>Forgot Password</p>
            </div>
        </div>
    )
}

export default Login