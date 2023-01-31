// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaMale,
  FaFemale,
  FaRestroom,
  FaPeopleArrows,
  FaBus,
  FaTrain,
  FaSchool,
  FaCarAlt,
  FaMotorcycle,
  FaPizzaSlice,
  FaSnowflake,
  FaSun,
  FaBath,
  FaWifi,
  FaSearchLocation,
  FaSlidersH,
  FaSwimmingPool,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <div className=" grid grid-cols-6 align-middle p-5">
      <div className=" items-center col-span-5 cursor-pointer my-5">
        <Swiper
          spaceBetween={50}
          slidesPerView={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaMale className="  h-6 w-6" />
              Male
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaFemale className="  h-6 w-6" />
              Female
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaRestroom className="  h-6 w-6" />
              Mix
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaPeopleArrows className="  h-6 w-6" />
              Couple
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaCarAlt className="  h-6 w-6" />
              Car Park
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaMotorcycle className="  h-6 w-6" />
              Motorbike Park
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaBus className="  h-6 w-6" />
              Bus Stop
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaTrain className="  h-6 w-6" />
              MRT Stop
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaPizzaSlice className="  h-6 w-6" />
              Nearby Food
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaSchool className="  h-6 w-6" />
              Nearby Campus
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaBath className="  h-6 w-6" />
              Bathroom inside
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaSnowflake className="  h-6 w-6" />
              Air Conditioner
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaSun className="  h-6 w-6" />
              Water Heater
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaWifi className="  h-6 w-6" />
              Wifi
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className=" grid justify-items-center text-center">
              <FaSwimmingPool className="  h-6 w-6" />
              Swimming Pool
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" flex items-center place-content-end space-x-10 col-span-1">
        {/* right side */}
        <p className=" cursor-pointer"> More Filter</p>
        <div className="flex items-center p-2 space-x-6 rounded-full cursor-pointer">
          <FaSlidersH />
          <FaSearchLocation className="h-8 w-8 p-2" />
        </div>
      </div>
    </div>
  );
};
