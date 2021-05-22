import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/layout/Header'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainPage from '../components/main/MainPage'

export default function Home() {
  return (
    <>
    <Head>
      <title>our bissines page</title>
    </Head>
    <div className={styles.container}>

      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <MainPage />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
    </>
  )
}
