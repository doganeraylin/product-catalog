import styles from "./Register.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faEnvelope,
    faLock,
    faPhone

  } from "@fortawesome/free-solid-svg-icons"

const Register = () => {
    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.introContainer}>
                <h1 className={styles.storeName}>PitonShop</h1>
                <p className={styles.description}>The most popular book shop for IT</p>
            </div>
            <div className={styles.loginContainer}>
                <p className={styles.loginTitle}>Hello!</p>
                <p className={styles.loginSubtitle}>Sign Up to Get Started</p>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faUser} className={styles.faIcon}/>
                            <input 
                                type="text" name="fullName" 
                                placeholder="Full Name" 
                                className={styles.fullName}>
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                        <FontAwesomeIcon icon={faPhone} className={styles.faIcon}/>
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Phone Number" 
                                className={styles.phoneNumber} 
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}/>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                className={styles.email}>
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                pattern="[a-zA-Z0-9]{6,20}"
                                minLength={6}
                                maxLength={20}
                                className={styles.password}>
                            </input>
                        </div>
                       
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Confirm Password" 
                                pattern="[a-zA-Z0-9]{6,20}"
                                minLength={6}
                                maxLength={20}
                                className={styles.password}>
                            </input>
                        </div>
                        <button type="submit" className={styles.loginBtn}>Register</button>
                    </form>
                </div>  
            </div>
        </div>
    )
}
export default Register