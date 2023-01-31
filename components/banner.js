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
            <Image src={"/banner_sample.png"} fill />
            <p>30% discount</p>
          </div>
          <div>
            <Image src={"/room2.jpg"} fill />
            <p>Female</p>
          </div>
          <div>
            <Image src={"/room3.jpg"} fill />
            <p className="legend">Male</p>
          </div>
          <div>
            <Image src={"/room4.jpg"} fill />
          </div>
          <div>
            <Image src={"/room5.jpg"} fill />
          </div>
        </Carousel>
      </div>
    );
  }
}
