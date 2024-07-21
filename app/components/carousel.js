import React from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <CarouselItem
        id="slide1"
        imgSrc="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        prevSlide="#slide4"
        nextSlide="#slide2"
      />
      <CarouselItem
        id="slide2"
        imgSrc="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        prevSlide="#slide1"
        nextSlide="#slide3"
      />
      <CarouselItem
        id="slide3"
        imgSrc="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        prevSlide="#slide2"
        nextSlide="#slide4"
      />
      <CarouselItem
        id="slide4"
        imgSrc="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        prevSlide="#slide3"
        nextSlide="#slide1"
      />
    </div>
  );
};

export default Carousel;
