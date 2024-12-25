import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Import the array of objects
const categories = [
  {
    name: "Dairy & Eggs",
    types: ["Milk_yogurt", "soft_cheese", "yaourt", "egg", "dry_milk_powder", "Various_cheeses","Fresh_cream_and_bechamel", "other"]
},
{
    name: "Soft Drinks & Juices",
    types: ["Mineral_and_sparkling_water", "Juices", "Soft_drinks", "Energy_drinks", "other"]
},
{
    name: "Cans & Jars",
    types: ["tomate", "harisa_and_hmis", "thon", "corn_and_mais", "canned_fruits_and_vegetables", "Canned_meat", "other"]
},
{
    name: "Nuts & Seeds",
    types: ["Beans", "Lentils", "Hummus", "Peas", "other"]
},
{
    name: "Chocolates",
    types: ["Chocolates", "biscuit", "Madeleine", "gofrit","Cakes", "Nuts", "Cereal_flakes", "other"]
},
{
    name: "Household Care",
    types: ["javal", "Hand_wash","Machine_wash", "wash_the_dishes", "Surface_cleaning", "Air_freshener","fabric_softener", "other"]
},
{
    name: "Baby Care",
    types: ["Baby_diapers", "baby_milk", "Clean_and_care_for_children", "other"]
}, 
{
    name: "body",
    types: ["shampoing","shower_gel","deodorant","scented_soap","Liquid_soap","Oral_and_dental_care","other"]
},
{
    name: "Pastries",
    types: ["spagity","riz","macaroni","Traditional_Pastries","other"]
},
{
    name: "coffe",
    types: ["coffe", "coffee_capsule", "tea", "Drinks_to_prepare", "other"]
},
{
    name: "candy",
    types: ["Chocolate_and_cream", "semolina", "oil", "flour", "margarine", "starch","Sugar_and_honey","jam", "other"]
},
{
    name: "sals",
    types: []
}

];

const Add = () => {
  const red = useNavigate()
  const [Item, setItem] = useState({
    name: "",
    price: 0,
    g: "",
    typeoftype: "",
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
console.log(Item);

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
        <label className="my-2">
          <span>Select Category:</span>
          <select
            value={Item.type}
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
        <label className="my-2">
          <span>Select Category:</span>
          <select
            value={Item.typeoftype}
            onChange={(e) => setItem({ ...Item, typeoftype: e.target.value })}
            className="w-full bg-gray-100 px-5 py-2 rounded-2xl border border-gray-400 my-2"
          >
            <option value="" disabled>
              -- Select a category --
            </option>
            {categories.find(e => Item.type == e.name)?.types.map((category, index) => (
              <option key={index} value={category}>
                {category}
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
