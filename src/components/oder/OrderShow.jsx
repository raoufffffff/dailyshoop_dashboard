import React, { useState } from "react";
import { motion } from "framer-motion";
import CancelOrder from "../orderActions/CancelOrder";
import { useSearchParams } from "react-router-dom";
import TakeOrder from "../orderActions/TakeOrder";
import DaneOrder from "../orderActions/DaneOrder";

const AnimatedTable = ({order}) => {
  const [searchparams] = useSearchParams(); // No need to setsearchparams here
  const [showcancel, setshowcancel] = useState(false)
  const [showtake, setshowtake] = useState(false)
  const [showdone, setshowdone] = useState(false)
  const hidecancel = ()=> setshowcancel(false)
  const hidetake = ()=> setshowtake(false)
  const hidedone = ()=> setshowdone(false)
  return (
   <>
   {showcancel && <CancelOrder hide={hidecancel} id={order._id} />}
   {showdone && <DaneOrder hide={hidedone} id={order._id} />}
   {showtake && <TakeOrder hide={hidetake} id={order._id} />}
          <motion.tr
            whileHover={{ scale: 1.02 }}
            className="hover:bg-gray-50 transition"
            >
            <td className="px-4 py-2 border border-gray-200 text-center">
            {searchparams.get("about") != "cancel" && searchparams.get("about") != "done"  && <button  className="w-4 h-4 bg-red-500"
              value={false}
              onClick={()=> setshowcancel(true)}
              ></button>}
               {searchparams.get("about") == "take" &&  <button  className="w-4 h-4 bg-green-500"
              value={false}
              onClick={()=> setshowdone(true)}
              ></button>}
             {(!searchparams.get("about") || searchparams.get("about") == "cancel" ) &&  <>
               <button  className="w-4 h-4 bg-blue-500"
              value={false}
              onClick={()=> setshowtake(true)}
              ></button></>}
            </td>
            <td className="px-4 py-2 border border-gray-200 flex items-center gap-3">
              <a 
              target="_blank"
              href={`https://www.google.com/maps?q=${order.location?.location[0]},${order.location?.location[1]}`}
              className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src="https://banner2.cleanpng.com/20240210/uvo/transparent-location-icon-map-with-users-location-and-nearby-1710881914600.webp"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </a>
              <div>
                <p className="font-semibold">{order.user}</p>
                <a
                 href={`tel:${order.phone}`} aria-label="Call Us at +1234567890"
                className="text-sm text-gray-500">{order.phone}</a>
              </div>
            </td>
            <td className="px-4 py-2 border border-gray-200">
             {order.items.map(e =>{
              return <a
              key={e._id}
              className="flex"
              target="_blank"
              href={`https://stor-eb3h.onrender.com/?item=${e._id}`}
              ><b
              className="mr-2"
              >* </b>  {e.name} ({e.offer ? e.newprice  : e.price} DA * {e.q})</a>
             })}
            </td>
            <td className="px-4 py-2 border border-gray-200">{order.price} DA</td>
            <td className="px-4 py-2 border border-gray-200 text-center">
             {order.ride} DA
            </td>
            <td className="px-4 py-2 border border-gray-200 text-center">
             {order.ride + order.price} DA
            </td>
          </motion.tr>

        
                  </>
     
  );
};

export default AnimatedTable;