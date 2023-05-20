import Image from 'next/image'
import styles from '../../styles/About.module.css'
export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <Image src="/images/charizard.png" width="300" height="300" alt="charizard"/>
        </div>
    )
}