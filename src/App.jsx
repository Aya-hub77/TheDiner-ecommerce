import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

   const [showLogin, setShowLogin] = useState(false)

   return (
      <div>
         {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
         <div className='app'>
          <ScrollToTop />
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
        </div>
        <Footer/>
      </div>
   )
}

export default App