import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import data from "../dummy/dummyProducts.json";

const Caurosel = () => {
  const { popularProducts } = data;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
  };
  return (
    <div className="  flex justify-center">
      <div className="bg-[#131c31]   w-[900px] border border-gray-800  rounded-md shadow-sm p-5 grid grid-cols-5">
        <div className="col-span-1 space-y-3">
          <p className="text-[#b9e0f2] text-xl font-sans font-bold">
            Hot Topics
          </p>
          <p className="text-[#b9e0f2] font-semibold text-sm w-2/3">
            Don't miss out on the latest news about Travel tips, Hotels review,
            Food guide...
          </p>

          <div className="text-gray-200 flex gap-3 ">
            <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer ">
              <BiLeftArrowAlt size={20} />
            </span>
            <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer">
              <BiRightArrowAlt size={20} />
            </span>
          </div>
        </div>
        <div className="col-span-4 pr-2">
          <Slider {...settings}>
            {popularProducts?.slice(0, 4).map((data, i) => {
              return (
                <div className="" key={i}>
                  <div className="flex  flex-col justify-center item-center text-center cursor-pointer  mx-[5%] ">
                    <img
                      src={data?.img}
                      alt=""
                      className="hover:outline outline-2 m-1 outline-[rgb(13,173,230)] rounded-lg h-[80%] w-[80%]"
                    />
                    <h3 className="text-lg h-[80%] w-[80%]  font-mono font-semibold text-white">
                      {data?.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Caurosel;
