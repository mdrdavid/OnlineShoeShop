import logo from './logo.svg';
import './App.css';
import CalltoActionSection from './components/homeComponents/calltoAction/CalltoActionSection';
import ContactInfo from './components/homeComponents/ContactInfo';
import Pagination from './components/homeComponents/Pagination';

function App() {
  return (
    <div className="App">
     <CalltoActionSection/>
     <ContactInfo/>
     {/* <Pagination/> */}
    </div>
  );
}

export default App;
