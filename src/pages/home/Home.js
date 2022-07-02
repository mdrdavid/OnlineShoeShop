import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ShopSection from '../../components/homeComponents/shopsection/ShopSection'
import Footer from '../../components/profileComponents/footer/Footer';
import Header from '../../components/profileComponents/mainheader/Header'
import CalltoActionSection from '../../components/homeComponents/calltoAction/CalltoActionSection';
import ContactInfo from '../../components/homeComponents/contactInfo/ContactInfo';
// import Login from '../login/Login';

const Home= ()=> {
  return (
    <div>
    <Header/>
    <ShopSection/>
        <CalltoActionSection/>
        <ContactInfo/>
        {/* <Login/> */}
        <Footer/>
    </div>
  )
}
export default Home
