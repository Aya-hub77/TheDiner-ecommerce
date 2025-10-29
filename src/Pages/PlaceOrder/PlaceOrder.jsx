import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/StoreContext'

const PlaceOrder = () => {

   const {getTotalCartAmount} = useContext(StoreContext);

   return (
      <form className='place-order'>
         <div className='order-info'>
         <h3>Delivery Information</h3>
         <div className='a'><input type="text" placeholder='First name'/>
         <input type="text" placeholder='Last name'/></div>
         <div className='b'><input type="email" placeholder='Email address'/>
         <input type="text" placeholder='Street'/></div>
         <div className='c'><input type="text" placeholder='City'/>
         <input type="text" placeholder='State'/></div>
         <div className='d'><input type="number" placeholder='Zip code'/>
         <input type="text" placeholder='Country'/></div>
         <input type="number" placeholder='Phone'/>
         </div>

         <div className='cart-totals'>
            <h3>Cart Totals</h3>
            <div><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
            <div><p>Delivery Fee</p><p>${getTotalCartAmount()===0?0:2}</p></div>
            <div><p>Total</p><p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p></div>
            <button>PROCEED TO PAYEMENT</button>
         </div>
      </form>
   )
}

export default PlaceOrder