"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { ISwiperItems } from "./SwiperItems.types";

function SwiperItems({
  swiperClassName,
  swiperSlideClassName,
  items,
}: ISwiperItems) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      rewind
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className={swiperClassName}
      mousewheel
      pagination={{ clickable: true }}
    >
      {items.map((item) => (
        <SwiperSlide className={swiperSlideClassName}>
          <Image alt="image" src={item.source} fill className="object-cover" />
          {item.imageTitle && (
            <p className="absolute w-full h-full flex justify-center items-center text-white text-3xl font-black z-10 bg-black/25">
              {item.imageTitle}
            </p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperItems;
