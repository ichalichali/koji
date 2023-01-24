import Image from "next/image";
import React from "react";
import MyBanner from "../public/bannerx-500px.png";

function Banner() {
  return (
    <div className="relative h-[500px]">
      <Image src={MyBanner} fill objectFit="cover" />
    </div>
  );
}

export default Banner;
