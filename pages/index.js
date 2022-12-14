import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../src/Component/Login'




export default function Home() {
  return (

    <div>
      <Head>
        <title>SIP Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Login />
      </main>

      <footer >
        <p></p>
      </footer>
    </div>
  )
}
