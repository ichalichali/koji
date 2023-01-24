import Image from "next/image";
import React from "react";
import MyBanner from "../public/index.png";

function Banner() {
  return (
    <div>
      <Image src={MyBanner} />
    </div>
  );
}

export default Banner;
