import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/loading'
import axios from 'axios'

const Edite = () => {
const {id} = useParams()  
const red = useNavigate()

const [loading, setloading] = useState(true) 
const [Item, setItem] = useState({})
useEffect(()=>{
    const handleDelete = async () => {
        try {
          await axios.get(`https://daily-api.onrender.com/item/${id}`).then(res =>{
            setItem(res.data.result)
            setloading(false)
          })
        } catch (error) {
          console.error('Error while deleting:', error);
          alert('Failed to delete the item.');
        }
      };
      handleDelete()
},[id])
if(loading)return <LoadingSpinner /> 
const handleSubmit = async (e) => {
    e.preventDefault();
try {
  await axios.put(`https://daily-api.onrender.com/item/${id}`, Item)
  .then(()=> {
red('/')
  })
} catch (error) {
  console.log('a');
  
}
  };
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-gray-50">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white p-5 w-11/12 md:w-6/12 rounded-2xl shadow-2xl border border-gray-300"
    >
      {/* Name Input */}
      <input
        value={Item.name}
        onChange={(e) => setItem({ ...Item, name: e.target.value })}
        type="text"
        placeholder="Enter item name"
        className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
      />

      {/* Price Input */}
      <input
        value={Item.price}
        onChange={(e) => setItem({ ...Item, price: Number(e.target.value) })}
        type="number"
        placeholder="Enter item price"
        className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
      />
      <input
        value={Item.g}
        onChange={(e) => setItem({ ...Item, g: e.target.value })}
        type="text"
        placeholder="Enter item size"
        className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
      />

      {/* Offer Checkbox */}
      <label className="flex items-center my-2">
        <input
          checked={Item.offer}
          onChange={(e) => setItem({ ...Item, offer: e.target.checked })}
          type="checkbox"
          className="mr-2"
        />
        <span>Is this item on offer?</span>
      </label>

      {/* New Price Input */}
      {Item.offer && (
        <input
          value={Item.newprice}
          onChange={(e) =>
            setItem({ ...Item, newprice: Number(e.target.value) })
          }
          type="number"
          placeholder="Enter new price"
          className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
        />
      )}

      {/* Category Selector */}
     

      {/* Image Upload */}
    
      {Item.img && (
        <img
          src={Item.img}
          alt="Uploaded"
          className="w-24 h-24 object-cover rounded mt-2"
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#dd2a5b] text-white font-semibold py-2 rounded-2xl hover:bg-[#c0254e] transition duration-300"
      >
        Put
      </button>
    </form>
  </div>
  )
}

export default Edite