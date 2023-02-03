import React from "react";
import Image from "next/image";

function SmallCard({
  id,
  img,
  distance,
  location,
  price,
  availability,
  availableRoom,
  internet,
  AC,
  WaterHeater,
}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer">
      <Image
        src={img}
        alt="Room card"
        width={300}
        height={300}
        className=" w-full h-auto"
        style={{ objectFit: "contain" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Location: {location}</div>
        <p className="text-gray-700 text-base">Distance: {distance}</p>
        <h3> Distance: {distance}</h3>
        <h3> Price: {price}</h3>
        <h3> Availability: {availability}</h3>
        <h3> NUmber of available Room: {availableRoom}</h3>
        <h3> Does it has internet? {internet}</h3>
        <h3> How about AC? {AC}</h3>
        <h3> How about water heater? {WaterHeater}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
