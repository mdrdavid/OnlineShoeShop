// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CalltoActionSection from './components/homeComponents/calltoAction/CalltoActionSection';
import ContactInfo from './components/homeComponents/contactInfo/ContactInfo';
// import Pagination from './components/homeComponents/Pagination';
import Footer from './components/profileComponents/footer/Footer';
import Header from './components/profileComponents/Headerssss';

function App() {
  return (
    <div className="App">
    <BrowserRouter>  
    <Header/>
    </BrowserRouter>
  
     
     <CalltoActionSection/>
     <ContactInfo/>
     {/* <Pagination/> */}
     <Footer/>
    </div>
  );
}

export default App;
