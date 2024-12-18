import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IoCloseSharp } from 'react-icons/io5';
import L from 'leaflet';
const MyMap = ({location, hide}) => {
    const initialPosition = [36.752887, 3.042048]; // Algiers coordinates
    const customIcon = new L.icon({
        iconUrl: "https://i.ibb.co/vQ66KCL/png-clipart-johnston-red-ginger-location-port-of-south-louisiana-computer-icons-location-people-hear.png", // Replace with a valid image URL
        iconSize: [30, 30],
      });
  return (
    <div className="fixed w-full bg-[#0007] h-screen flex justify-center items-center top-0 left-0">
      <div className="w-10/12 h-[65%] md:h-[85%] relative rounded-xl overflow-hidden">
        {/* Header Section */}
        <span onClick={hide} className="absolute right-2 top-1 cursor-pointer">
          <IoCloseSharp className="text-white" size={25} />
        </span>
        <div className="text-white flex flex-col items-center justify-center h-[15%] bg-[#dd2a5b] py-1.5">
          <h3 className="text-center font-bold md:text-xl">Fine-tune your location</h3>
          <p className="text-center px-5 text-xs md:text-lg my-1 font-[100]">
            Please move the map to set the exact delivery location
          </p>
        </div>
        {/* Map Section */}
        <div className="w-full h-[85%] relative overflow-hidden">
          <MapContainer
            center={initialPosition}
            zoom={10}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {location.map((location) => (
        <Marker icon={customIcon} key={location.name} position={[location.lat, location.lng]}>
          <Popup>
            <h1>{location.name}</h1>
            <h2>{location.price} DA</h2>
            <a
            target='_blank'
            href={`tel:${location.phone}`} aria-label="Call Us at +1234567890"
            >{location.phone}</a>
          </Popup>
        </Marker>
      ))}
          </MapContainer>
         
        </div>
        {/* Footer Section */}
       
      </div>
    </div>
  )
}

export default MyMap