import React, {useState} from 'react'
import Hero from '../../components/Hero/Hero'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

   const [category, setCategory] = useState('All');


   return (
      <div>
        <Hero/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} setCategory={setCategory}/>
      </div>
   )
}

export default Home