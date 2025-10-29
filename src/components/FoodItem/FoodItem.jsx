import React, {useContext} from 'react'
import './FoodItem.css'
import counter from '../../assets/counter.png'
import add from '../../assets/add.png'
import remove from '../../assets/remove.png'
import { StoreContext } from '../StoreContext'


const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

   return (
      <div className='food-item'>
        <img src={image} alt={name || 'food item'} loading='lazy' />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={counter} alt="counter" loading='lazy'/>
            :<div className='counter'>
                <img onClick={()=>removeFromCart(id)} src={remove} alt="remove" loading='lazy'/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={add} alt="add" loading='lazy'/>
            </div>
        }
        <div className='food-item-info'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        </div>
      </div>
   )
}

export default FoodItem