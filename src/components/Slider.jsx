import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    <section>
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary md-4 md:mb-6 lg:mb-8">
          Our Initiatives
        </h2>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
