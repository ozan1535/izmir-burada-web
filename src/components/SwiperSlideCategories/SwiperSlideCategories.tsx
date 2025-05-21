"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBox from "../CategoryBoxes/CategoryBox/CategoryBox";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ISwiperSlideCategory } from "./swiperSlideCategories.types";

function SwiperSlideCategories({
  items,
  canAutoPlay = false,
}: {
  items: ISwiperSlideCategory[];
  canAutoPlay?: boolean;
}) {
  return (
    <Swiper
      slidesPerView={1} // Default for mobile
      spaceBetween={10} // Space between slides
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      autoplay={canAutoPlay}
      breakpoints={{
        640: {
          slidesPerView: 2, // Tablets show 2 slides
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3, // Small laptops show 3 slides
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4, // Desktops show 4 slides
          spaceBetween: 30,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide className="mb-5" key={item.id}>
          <CategoryBox item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSlideCategories;
