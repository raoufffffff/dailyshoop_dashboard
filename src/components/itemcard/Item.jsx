import React, { useState } from "react";
import { motion } from "motion/react";
import Remove from "../remove/Remove";


const ItemCard = ({ item }) => {
  const [animate, setAnimate] = useState(false);
const hide = ()=> {
    setAnimate(false)
}
  const handleAddItem = () => {
    setAnimate(true)
  };

  
  return (
    <motion.div
      onClick={handleAddItem}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="w-[45%] pb-1.5 relative my-2 mx-0.5 flex flex-col md:w-3/12 lg:w-[21%] md:mx-2 border bg-white border-gray-200 rounded-lg overflow-hidden max-h-[280px] min-h-[280px] hover:shadow-xl hover:scale-105"
    >
     {animate && <Remove id={item._id} hide={hide} />}
      <img
        src={item.img}
        alt={item.name}
        className="min-h-[160px] max-h-[160px] w-full"
      />
      <p className="one-line mt-3 text-center font-medium px-5">{item.name}</p>
      <div className="flex mt-auto flex-col">
        <div className="flex items-center px-3">
          <span
            className={`ml-auto font-normal ${
              item.offer ? "line-through text-sm text-gray-600 font-medium" : ""
            }`}
          >
            {item.price} DA
          </span>
          {item.offer && (
            <span className="ml-2 underline">{item.newprice} DA</span>
          )}
        </div>
      </div>
     
    </motion.div>
  );
};

export default ItemCard;
