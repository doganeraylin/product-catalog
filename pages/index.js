import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Header from "../components/Header/Header"
import Products from '../components/Products/Products'
import ProductDetails from "../components/ProductDetails/ProductDetail"

export default function Home() {
  return (
    <>
    <Register />  
      {/* <Login /> */}
       {/* <Products />  */}
       {/* <ProductDetails />     */}
    </>
  )
}
