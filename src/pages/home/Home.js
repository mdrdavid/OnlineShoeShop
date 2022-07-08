import React from 'react'
import ShopSection from '../../components/homeComponents/shopsection/ShopSection'
import Footer from '../../components/profileComponents/footer/Footer';
import Header from '../../components/profileComponents/mainheader/Header'
import CalltoActionSection from '../../components/homeComponents/calltoAction/CalltoActionSection';
import ContactInfo from '../../components/homeComponents/contactInfo/ContactInfo';
import "./home.css"


const Home= ()=> {
  return (
    <div className='home'>
    <Header/>
    <ShopSection/>
        <CalltoActionSection/>
        <ContactInfo/>
        <Footer/>
    </div>
  )
}
export default Home
