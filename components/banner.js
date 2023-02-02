import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class RoomSearch extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div className=" h-[500px]">
            <Image src={"/banner_sample.png"} fill alt="ppromotion1" />
            <p>30% discount</p>
          </div>
          <div>
            <Image src={"/room2.jpg"} fill alt="promotion2" />
            <p>Female</p>
          </div>
          <div>
            <Image src={"/room3.jpg"} fill alt="promotion3" />
            <p className="legend">Male</p>
          </div>
          <div>
            <Image src={"/room4.jpg"} fill alt="promotion4" />
          </div>
          <div>
            <Image src={"/room5.jpg"} fill alt="promotion5" />
          </div>
        </Carousel>
      </div>
    );
  }
}
