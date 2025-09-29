"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { testimonialList } from "@/lib/data";
import { createAvatarFallback } from "@/lib/utils";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="h-60 md:h-80"
    >
      {testimonialList.map(({ id, image, message, name, location }) => (
        <SwiperSlide className="h-fit md:h-full" key={id}>
          <div className="rounded-2xl bg-white p-5 md:p-10 cursor-pointer">
            <div className="mb-6 flex items-center gap-x-4 min-h-full">
              <Avatar>
                <AvatarImage src={image} />
                <AvatarFallback className="font-primary">
                  {createAvatarFallback(name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4>{name}</h4>
                <p className="text-secondary text-sm">{location}</p>
              </div>
            </div>
            <p className="line-clamp-5 text-secondary">{message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
