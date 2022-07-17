
import './App.css';
import "./responsive.css"
// import "react-toastify/dist/react-toastify.css"
import { Routes, Route} from 'react-router-dom';
import CartSection from './pages/cartsection/CartSection';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SingleProduct from './pages/singleproduct/SingleProduct';
import Register from './pages/register/Register';
import Shipping from './pages/shipping/Shipping';
import PlaceOrder from './pages/placeorder/PlaceOrder'
import ProfilePage from "./pages/profile/ProfilePage"
import OrderSection from './pages/orders/OrderSection';
import NotFound from "./pages/notfound/NotFound"
import Payments from "./pages/payments/Payments"


const App= ()=> {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ="/register" element={<Register/>}/>
          <Route path ="/profile" element={<ProfilePage/>}/>
          {/* <Route path ="api/products" element={<SingleProduct/>}/> */}
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path ="/cart/:id" element={<CartSection/>}/>
          <Route path ="/shipping" element={<Shipping/>}/>
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="order" element={<OrderSection/>}/>
          <Route PATH ="notfound" element={<NotFound/>}/>
          <Route path="/cart:productid" element={<CartSection/>} />
          <Route path="/cart" element={<CartSection />} />
         <Route path="/payments" element={<Payments />} >
         <Route path=":productid" element={<Payments />} />
         </Route>
         <Route path="/singleproduct" element={<SingleProduct/>}/>
         <Route path="#" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
