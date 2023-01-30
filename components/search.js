import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaSlidersH, FaUserAlt } from "react-icons/fa";

export default class RoomSearch extends Component {
  render() {
    return (
      <div className="p-10 h-50">
        <div>
          <Carousel>
            <div>
              <img src="/user1.png" alt="image1" />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img src="/user2.png" alt="image2" />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img src="/user3.png" alt="image3" />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img src="/user1.png" alt="image4" />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img src="/user2.png" alt="image5" />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
        <div className=" flex items-center p-5 place-content-end space-x-10">
          <p className=" cursor-pointer"> Become a host</p>
          <div className="flex items-center border-2 p-2 space-x-6 rounded-full cursor-pointer">
            <FaSlidersH />
            <FaUserAlt className=" bg-blue-500 text-white rounded-full h-8 w-8 p-2" />
          </div>
        </div>
      </div>
    );
  }
}
