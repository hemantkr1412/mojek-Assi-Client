
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../src/Component/Navbar'
import SIPinput from '../src/Component/SIPInput';
import { PieChart } from '../src/Component/PieChart';





export default function Home() {
  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main >
        <SIPinput
         />
      </main>

      <footer >
        <p></p>
      </footer>
    </div>
  )
}

