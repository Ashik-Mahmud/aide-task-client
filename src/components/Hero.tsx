import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
type Props = {};

const slides = [
  {
    id: 1,
    title: "The Freedom to Create the Websites You Want",
    description:
      "A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online",
    image: "",
  },
  {
    id: 2,
    title: "The Freedom to Create the Websites You Want",
    description:
      "A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online",
    image: "",
  },
  {
    id: 3,
    title: "The Freedom to Create the Websites You Want",
    description:
      "A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online",
    image: "",
  },
];

const Hero = (props: Props) => {
  const [show, setShow] = useState(false);

  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <div className="mb-10">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full p-10 flex items-center justify-center text-center"
            >
              <div className="container mx-auto flex flex-col items-center py-12 sm:py-40">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                    The Freedom to Create the
                    <span className="text-indigo-700">Websites</span> You Want
                  </h1>
                  <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                    A professonal website drives sales. Create a beautiful
                    website to impress and engage new customers and establish
                    your business online{" "}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    href={"/login"}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
                  >
                    Get Started
                  </Link>
                  <Link
                    href={"/products"}
                    className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
