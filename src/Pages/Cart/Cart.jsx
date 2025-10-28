import React, {useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/storeContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

   const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
   const navigate = useNavigate();

   return (
      <div className='cart'>
         <div className='cart-items'>
         <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>X</p>
         </div>
         {food_list.map((item) => {
            const qty = cartItems?.[item._id] || 0;
            if (qty > 0) {
               return (
                  <div key={item._id} className='cart-item'>
                     <img src={item.image} alt={item.name} loading='lazy'/>
                     <p>{item.name}</p>
                     <p>${item.price.toFixed(2)}</p>
                     <p>{qty}</p>
                     <p>${(item.price * qty).toFixed(2)}</p>
                     <p className='remove' onClick={() => removeFromCart(item._id)}>x</p>
                  </div>
               )
            }
            return null;
         })}
         </div>
         <div className='cart-bottom'>
            <div className='cart-totals'>
               <h3>Cart Totals</h3>
               <div><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
               <div><p>Delivery Fee</p><p>${getTotalCartAmount()===0?0:2}</p></div>
               <div><p>Total</p><p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p></div>
               <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart-promo'>
               <p>If you have a promo code, Enter it here</p>
               <div><input type="text" placeholder='promo code'/>
               <button type='submit'>Submit</button></div>
            </div>
         </div>
      </div>
   )
}

export default Cart