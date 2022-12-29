import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import styles from "./Register.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faLock,
    faPhone
  } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"


const Register = () => {

    const [ data, setData ] = useState({
        name: "",
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        {
            axios.post("https://assignment-api.piton.com.tr/api/v1/user/register", {
                name: data.name,
                password: data.password,
                email: data.email
            })
            .then((res) => {
                console.log("Server response: ", res);
                console.log(data.name)
            })
            .catch((err) => {
                console.log("Server respondend with error: ", err);
            })
        } 
    } 

    let router = useRouter()

    const redirect = () => {
        router.push('/products')
    }
 
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
                    <form className={styles.form} onSubmit={onSubmit}>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faUser} className={styles.faIcon}/>
                            <input 
                                value={data.name}
                                type="text" 
                                name="name" 
                                placeholder="Full Name" 
                                className={styles.fullName}
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faPhone} className={styles.faIcon}/>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    className={styles.phoneNumber} 
                                    onChange={handleChange}>
                                </input>
                            </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}/>
                                <input 
                                    value={data.email}
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address" 
                                    className={styles.email}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                value={data.password}
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                pattern="[a-zA-Z0-9]{6,20}"
                                minLength={6}
                                maxLength={20}
                                className={styles.password}
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                placeholder="Confirm Password" 
                                pattern="[a-zA-Z0-9]{6,20}"
                                minLength={6}
                                maxLength={20}
                                className={styles.password}
                                onChange={handleChange}>
                            </input>
                        </div>
                        <button type="submit" className={styles.loginBtn} onClick={redirect}>Register</button>
                    </form>
                </div>  
            </div>
        </div>
    )
}
export default Register





