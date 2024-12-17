import React from "react";
import { motion } from "framer-motion";

const PlaceholderCard = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="min-w-[40%] animate-pulse pb-1.5 relative my-2 mx-0.5 flex flex-col md:min-w-[15%] md:mx-2 border bg-gray-200 border-gray-300 rounded-lg overflow-hidden max-h-[200px] min-h-[200px] hover:shadow-xl hover:scale-105"
    >
      {/* Top Badge Placeholder */}
      <div className="absolute top-2 left-0 w-full flex justify-between px-1">
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-10 bg-gray-300 rounded-full"></div>
      </div>

      {/* Image Placeholder */}
      <div className="min-h-[80px] max-h-[80px] w-full bg-gray-300"></div>

      {/* Text Placeholder */}
      <div className="mt-3 px-5 flex flex-col space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Price Placeholder */}
      <div className="mt-auto flex flex-col px-3 space-y-1">
        <div className="h-4 bg-gray-300 rounded w-1/2 ml-auto"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3 ml-1"></div>
      </div>

      {/* Floating Button Placeholder */}
      <div className="absolute right-1 top-[55%] h-6 w-6 bg-gray-300 rounded-full"></div>
    </motion.div>
  );
};

const PlaceholderList = () => {
  return (
    <>
      {/* Render 5 placeholders */}
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <PlaceholderCard key={index} />
        ))}
    </>
  );
};

export default PlaceholderList;
