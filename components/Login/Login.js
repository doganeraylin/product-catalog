import styles from "./Login.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

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
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}/>
                            <input 
                                type="email" 
                                name="email" className={styles.email} 
                                placeholder="Email Address">
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className={styles.password}>
                            </input>
                        </div>
                        <button type="submit" className={styles.loginBtn}>Login</button>
                    </form>
                </div>
                <div className={styles.forgotAndRemember}>
                    <p className={styles.forgotPassword}>Forgot Password</p>
                    <label className={styles.rememberMe}>
                        <input type="checkbox" className={styles.rememberMe}/> Remember me
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Login