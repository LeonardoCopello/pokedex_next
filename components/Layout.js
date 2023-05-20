import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="../../favicon.ico"/>
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main className={styles.mainContainer}>{children}</main>
            <Footer/> 
        </>
    )
}