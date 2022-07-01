
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import CartSection from './pages/cartsection/CartSection';
import Home from './pages/home/Home';
// import Login from '../login/Login';

const App= ()=> {
  return (
    <div className="App">
     <Home/>
{/* <BrowserRouter>
     <CartSection/>
     </BrowserRouter> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;
