import React, {useContext, useState, useRef, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/storeContext';
import dot from '../../assets/dot.png'

const Navbar = ({setShowLogin}) => {

   const [menu, setMenu] = useState("home");
   const [open, setOpen] = useState(false);
   const {getTotalCartAmount} = useContext(StoreContext);
   const totalAmount = getTotalCartAmount();
   const [showSearch, setShowSearch] = useState(false)
   const [searchQuery, setSearchQuery] = useState("")
   const searchRef = useRef(null)
   const navigate = useNavigate()


   useEffect(() => {
      if (showSearch) {
         // focus the input when it appears
         searchRef.current?.focus()
      }
   }, [showSearch])

   return (
      <div className="navbar">
         <Link to='/#home'>
            <h1 >The Diner</h1>
         </Link> 
         <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
          <ul className={`nav-menu ${open ? "open" : ""}`}>
             <Link to='/#home' onClick={()=>{setMenu("home"); setOpen(false);}} className={menu === "home"?"active":""}>Home</Link>
             <Link to='/#explore-menu' onClick={()=>{setMenu("menu"); setOpen(false);}} className={menu === "menu"?"active":""}>Menu</Link>
             <Link to='/#contact' onClick={()=>{setMenu("contact"); setOpen(false);}} className={menu === "contact"?"active":""}>Contact</Link>
          </ul>

            <div className={`actions ${open ? "open" : ""}`}>
               <div className='search'>
               <button
               type="button"
               className="icon-btn"
               aria-label={showSearch ? "Close search" : "Open search"}
               onClick={() => setShowSearch(s => !s)}
               onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowSearch(s => !s); }}
            >
               <SearchIcon className='icon' sx={{fontSize:'36px'}} />
            </button>
               <input
                  ref={searchRef}
                  className={`navbar-search-input ${showSearch ? 'open' : ''}`}
                  type="search"
                  placeholder="Search menu or items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                     if (e.key === 'Escape') {
                        setShowSearch(false)
                        return
                     }
                     if (e.key === 'Enter') {
                        const q = searchQuery.trim()
                        if (!q) return
                        // navigate to a search results page with query param
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