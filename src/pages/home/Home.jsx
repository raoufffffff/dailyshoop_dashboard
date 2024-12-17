import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItemCard from '../../components/itemcard/Item'
import PlaceholderList from '../../components/loading'
const Home = () => {
  const [loading, setloading] = useState(true)
  const [items, setitems] = useState([])
  useEffect(()=>{
const getitems = async ()=>{
  try {
    await axios.get("https://daily-api.onrender.com/item")
    .then(res => {
      console.log(res.data);
      
      setitems(res.data.result)
      setloading(false)
    })
  } catch (error) {
    console.log(error);
    
  }
}
getitems()
  },[])
  console.log(items);
  
  return (
    <div
    className='w-full h-screen overflow-x-hidden'
    >
      <Link 
      to={'/add'}
      className='bg-[#dd2a5b] mx-auto flex w-fit my-2 text-white px-3 py-1 rounded-lg'
      >
      add new</Link>
          
           <div
           className='w-full flex flex-wrap'
           >
 {loading ?
 <PlaceholderList />
 :
 items.map((e, i)=>(
  <ItemCard item={e} key={i}/>
  ))}
 
           </div>
   
    </div>
  )
}

export default Home