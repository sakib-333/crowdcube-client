import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Heading from "./Heading";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Crowdcube",
      description: "Help me to complete this project",
      image: "/slide-1.jpg",
    },
    {
      id: 2,
      title: "Neural Networks",
      description: "Comprehensive idea Neural Networks",
      image: "/slide-2.jpg",
    },
    {
      id: 3,
      title: "Medical Assistance",
      description: "Donate something for treatment",
      image: "/slide-3.jpg",
    },
  ];

  return (
    <div className="mx-auto">
      <Heading title="Our Initiatives" />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Auto change every 3 seconds
          disableOnInteraction: false, // Keeps autoplay running even after manual interaction
        }}
        className="px-2 mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-text">{slide.title}</h3>
                <p className="text-text opacity-50 mt-4">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
