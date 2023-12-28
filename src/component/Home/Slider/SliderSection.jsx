import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import data from "../../dummy/dummyProducts.json";

const SliderSection = () => {
  const { popularProducts } = data;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="md:bg-[#131c31] max-w-xs md:max-w-none  md:border md:border-gray-800 md:rounded-md md:shadow-sm md:p-5 grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="col-span-1  md:space-y-3 max-w-sm ">
        <p className="text-[#b9e0f2] text-xl  font-bold mt-2 md:mt-0 ml-5 md:ml-0 ">
          Technology Stack
        </p>
        <p className="text-[#b9e0f2] font-semibold text-sm mt-2 md:mt-0 ml-5 md:ml-0 ">
          Key Tools for Modern Web Development
        </p>

        <div className="text-gray-200 md:flex gap-3 md:visible hidden">
          <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer ">
            <BiLeftArrowAlt size={20} />
          </span>
          <span className="p-1 border border-gray-600 rounded-full bg-[#1d222e] hover:bg-[#0dcaf0] cursor-pointer">
            <BiRightArrowAlt size={20} />
          </span>
        </div>
      </div>
      <div className="col-span-1 p-10 md:p-0 md:ml-0 ml-10  max-w-xs md:max-w-none md:col-span-4 md:pr-2">
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
                  <h3 className="text-lg h-[80%] w-[80%]  font-mono font- text-white">
                    {data?.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
