import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { set, useForm } from "react-hook-form"
import styles from "./Register.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faLock,
    faPhone
  } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"


const Register = () => {

    const router = useRouter()
    const [redirect, setRedirect] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const registerAccount = (data) => {
        {
            axios.post("https://assignment-api.piton.com.tr/api/v1/user/register", {
                name: data.name,
                password: data.password,
                email: data.email,
            })
            .then((res) => {
                console.log("Server response: ", res);
                setRedirect(true)
                router.push('/products')
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
                <p className={styles.loginTitle}>Hello!</p>
                <p className={styles.loginSubtitle}>Sign Up to Get Started</p>
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit(registerAccount)}>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faUser} className={styles.faIcon}/>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className={styles.fullName}
                                {...register("name", {
                                    required: true,
                                })}>
                            </input>
                        </div>
                        {/* <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faPhone} className={styles.faIcon}/>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    className={styles.phoneNumber} 
                                    // onChange={handleChange}
                                    >
                                </input>
                        </div> */}
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}/>
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className={styles.email}
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                    })}>
                                </input>
                                {errors.email && (
                                    <p className={styles.errorMsg}>Please enter a valid email address</p>
                                )}
                            </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className={styles.password}
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{6,20}$/

                                })}
                                >
                            </input>
                            {errors.password && (
                                <p className={styles.errorMsg}>It must be between 6-20 characters, use at least one letter and one number</p>
                            )}
                        </div>
                        {/* <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.faIcon}/>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                placeholder="Confirm Password" 
                                className={styles.password}
                                // onChange={handleChange}
                                >
                            </input>
                        </div> */}
                        <button type="submit" className={styles.loginBtn}>Register</button>
                    </form>
                </div>  
            </div>
        </div>
    )
}
export default Register





