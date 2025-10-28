import React, {useState, useEffect} from 'react'
import Hero from '../../components/Hero/Hero'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { useLocation } from 'react-router-dom';

const Home = () => {
   
   const [category, setCategory] = useState('All');
   const location = useLocation();

   useEffect(() => {
      // if there is a hash (e.g. /#explore-menu) scroll to the element after render
      if (location.hash) {
         const id = location.hash.replace('#', '');
         const el = document.getElementById(id);
         if (el) {
            // small timeout to ensure layout finished
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
         }
      }
   }, [location]);

   return (
      <div>
        <Hero/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} setCategory={setCategory}/>
      </div>
   )
}

export default Home