import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <nav>
          <a href='/'>Home</a> | <a href='/catalog'>Catalog</a>
        </nav>
        <h1 className={styles.title}>
          Catalog:Hello World!
        </h1>
        <h2>Welcome to my store</h2>
      </main>
    </div>
  )
}
