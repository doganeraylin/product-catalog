import { useState } from "react"
import axios from "axios"
import styles from "./Login.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Login = () => {

    const [ data, setData ] = useState({
        email: "",
        password: "",
        });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        {
            axios.post("https://assignment-api.piton.com.tr/api/v1/user/login", {
                email: "",
                password: ""
            })
            .then((res) => {
                console.log("Server response: ", res);
            })
            .catch((err) => {
                console.log("Server respondend with error: ", err);
            })
        } 
    } 

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
                    <form className={styles.form} onSubmit={onSubmit}>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}/>
                            <input 
                                type="email" 
                                name="email" className={styles.email} 
                                placeholder="Email Address"
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className={styles.password}
                                onChange={handleChange}>
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