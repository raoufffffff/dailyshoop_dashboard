import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Import the array of objects
const categories = [
  {
    name: " Dairy & Eggs ",
    img: "https://cdn.instashop.ae/3e6bd122ab3d7867cb4b7b9650bf05d2_res_CIB_Dairy_and_Eggs_2024.jpg",
  },
  {
    name: " Nuts & Seeds ",
    img: "https://cdn.instashop.ae/e6168349efe4eaeb5d98a2398608a7d1_SupermarketNew_NutsSeeds.jpg",
  },
  {
    name: " Chips & Snacks ",
    img: "https://cdn.instashop.ae/a729b084857486ec4e38d88537a71ad4_res_CIB_PepsiCo.jpg",
  },
  {
    name: " Chocolates ",
    img: "https://cdn.instashop.ae/5c4898d67282efab09cb15622365e002_res_CC_CIB.jpeg",
  },
  {
    name: " Soft Drinks & Juices ",
    img: "https://cdn.instashop.ae/47cd3cc5e83da34251db252e60a6e2bc_res_CIB_Soft_Drinks_Juices.jpg",
  },
  {
    name: " Household Care ",
    img: "https://cdn.instashop.ae/3d6a5d9b5ab55f637c2e45a9ffbe3f63_res_CIB_PG_Household-Care.jpg",
  },
  {
    name: " Cans & Jars ",
    img: "https://cdn.instashop.ae/1a93f0f0bf917f0a3e04a8bcc5b290e6_res_cib.jpg",
  },
  {
    name: " Baby Care ",
    img: "https://cdn.instashop.ae/d001b5a655a013e6017a6cefe5179844_res_Pharmacy_CIB_500x500.jpg",
  },
];

const Add = () => {
  const red = useNavigate()
  const [Item, setItem] = useState({
    name: "",
    price: 0,
    newprice: 0,
    offer: false,
    type: "",
    img: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Handle Image Upload to ImgBB
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      setIsUploading(true);
      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=6b2e09466d2a7f9022678000fe90fe67",
          formData
        );
        setItem({ ...Item, img: response.data.data.url });
        console.log("Image uploaded successfully:", response.data.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
try {
  await axios.post('https://daily-api.onrender.com/item', Item)
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
        <label className="my-2">
          <span>Select Category:</span>
          <select
            value={Item.category}
            onChange={(e) => setItem({ ...Item, type: e.target.value })}
            className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
          >
            <option value="" disabled>
              -- Select a category --
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        {/* Image Upload */}
        <label className="my-2">
          <span>Upload an image:</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1"
          />
        </label>
        {isUploading && <p className="text-blue-600 text-sm">Uploading image...</p>}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
