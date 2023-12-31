import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  const head=props.data.attributes.supportHead.heading
  const subHeading=props.data.attributes.supportHead.search.placeholder

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        

         <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            {head}
            </h2>
            <p>
              {subHeading}
            </p>
          </a>

         

        
        </div>
      </main>
    </>
  )
}


export const getStaticProps=async()=> {

  //http://localhost:1339/api/support-section?populate=deep

  const res = await fetch('http://localhost:1339/api/support-section?populate=deep')
  const data = await res.json()

  return {
    props:data,
    revalidate:60
  }
  
}