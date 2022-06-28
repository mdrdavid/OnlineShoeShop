import logo from './logo.svg';
import './App.css';
import CalltoActionSection from './components/homeComponents/calltoAction/CalltoActionSection';
import ContactInfo from './components/homeComponents/ContactInfo';
import Pagination from './components/homeComponents/Pagination';
import Footer from './components/profileComponents/Footer';
import Header from './components/profileComponents/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
     <CalltoActionSection/>
     <ContactInfo/>
     {/* <Pagination/> */}
     <Footer/>
    </div>
  );
}

export default App;
