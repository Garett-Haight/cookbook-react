import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </Layout>
  )
}
