import React, {useContext, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../StoreContext';
import dot from '../../assets/dot.png'

const Navbar = ({setShowLogin}) => {

   const [menu, setMenu] = useState("home");
   const [open, setOpen] = useState(false);
   const {getTotalCartAmount} = useContext(StoreContext);
   const totalAmount = getTotalCartAmount();
   const [showSearch, setShowSearch] = useState(false)
   const [searchQuery, setSearchQuery] = useState("")
   const navigate = useNavigate()


   return (
      <div className="navbar">
         <a href='/#home'><h1 >The Diner</h1></a> 
         <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
          <ul className={`nav-menu ${open ? "open" : ""}`}>
             <a href='/#home' onClick={()=>{setMenu("home"); setOpen(false);}} className={menu === "home"?"active":""}>Home</a>
             <a href='/#explore-menu' onClick={()=>{setMenu("menu"); setOpen(false);}} className={menu === "menu"?"active":""}>Menu</a>
             <a href='/#contact' onClick={()=>{setMenu("contact"); setOpen(false);}} className={menu === "contact"?"active":""}>Contact</a>
          </ul>

            <div className={`actions ${open ? "open" : ""}`}>
               <div className='search'>
               <button className="search-icon" onClick={() => setShowSearch(s => !s)} >
               <SearchIcon className='icon' sx={{fontSize:'36px'}} /> </button>
               <input
                  className={`search-input ${showSearch ? 'open' : ''}`}
                  type="search"
                  placeholder="Search menu"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter') {
                        const q = searchQuery.trim();
                        if (!q) return;
                        navigate(`/search?q=${encodeURIComponent(q)}`)
                        setShowSearch(false)
                        setOpen(false);
                     }
                  }}
               />
           
            </div>
            <div>
            <Link to='/cart'><ShoppingBasketIcon className='icon' onClick={()=> setOpen(false)} sx={{fontSize:'36px'}} /></Link>
            {totalAmount > 0 && <img src={dot} alt="cart-dot" className="dot" />}</div>
            <AccountBoxIcon className='icon' onClick={() => {setShowLogin(true); setOpen(false)}} sx={{fontSize:'36px', cursor:'pointer'}} />
         </div>
           </div>
   )
}

export default Navbar