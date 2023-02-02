import React from "react";
import Image from "next/image";

function SmallCard({ id, img, location, distance }) {
  return (
    <div className="flex items-center m-2 space-x-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/*left */}
      <div className="relative h-24 w-24 ">
        <Image
          src={img}
          fill
          className=" rounded-lg shadow-sm"
          alt="smallpic"
        />
      </div>

      {/*Right */}
      <div>
        <h2> {location}</h2>
        <h3> {distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
