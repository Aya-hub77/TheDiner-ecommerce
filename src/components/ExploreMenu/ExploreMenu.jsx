import React from 'react'
import './ExploreMenu.css'
import cake from '../../assets/cake.png'
import dessert from '../../assets/dessert.png'
import noodles from '../../assets/noodles.png'
import pasta from '../../assets/pasta.png'
import salad from '../../assets/salad.png'
import sandwich from '../../assets/sandwich.png'
import fastfood from '../../assets/fastfood.png'

const ExploreMenu = ({category, setCategory}) => {
   return (
      <div className='explore-menu' id="explore-menu">
        <h2>Explore our Menu</h2>
        <div className='explore-items'>
            <div onClick={() => setCategory(prev=>prev==='salad'?'All':'salad')}>
                <img className={category==='salad'?'active':''} src={salad} alt="text" loading='lazy'/>
                <p>Salad</p>
            </div>
            <div onClick={() => setCategory(prev=>prev==='pasta'?'All':'pasta')}>
                <img className={category==='pasta'?'active':''} src={pasta} alt="text" loading='lazy'/>
                <p>Pasta</p>
            </div>
            <div onClick={() => setCategory(prev=>prev==='fastfood'?'All':'fastfood')}>
                <img className={category==='fastfood'?'active':''} src={fastfood} alt="text" loading='lazy'/>
                <p>Fast Food</p>
            </div>
            <div onClick={() => setCategory(prev=>prev==='sandwich'?'All':'sandwich')}>
                <img className={category==='sandwich'?'active':''} src={sandwich} alt="text" loading='lazy'/>
                <p>Sandwich</p>
            </div>
            <div onClick={() => setCategory(prev=>prev==='cake'?'All':'cake')}>
                <img className={category==='cake'?'active':''} src={cake} alt="text" loading='lazy'/>
                <p>Cake</p>
            </div>
            <div onClick={() => setCategory(prev=>prev==='dessert'?'All':'dessert')}>
                <img className={category==='dessert'?'active':''} src={dessert} alt="text" loading='lazy'/>
                <p>Dessert</p>
            </div>
            <div onClick={() => setCategory(prev=>prev==='noodles'?'All':'noodles')}>
                <img className={category==='noodles'?'active':''} src={noodles} alt="text" loading='lazy'/>
                <p>Noodles</p>
            </div>
        </div>
      </div>
   )
}

export default ExploreMenu