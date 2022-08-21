import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'



import Staff from '../components/Staff'
import Steps from '../components/Steps'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className='gradient overflow-hidden'>
      <Head>
        <title>KonohavenSmp - Minecraft Community</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>

      <Header />
      

      <main >
        <Hero />
        <Steps />
        
        <Staff/>
        <Banner />
        <Features/>
        
      </main>

      <Footer/>
    </div>
  )
}

export default Home
