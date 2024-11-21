import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Hero from '../components/hero/Hero'
import Cards from '../components/cards/Cards'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Collection from '../components/collection/Collection'

export default function Home() {
  return (
    <>
   <Navigation/>
   <Hero/>
   <Cards/>
   <Collection/>
   <Contact/>
   <Footer/>
    </>
  )
}
