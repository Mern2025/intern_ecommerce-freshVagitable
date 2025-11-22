"use client";

import CategoryCard from "@/app/ui/CategoryCard";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import cate1 from "@/public/images/cate1.png";
import cate2 from "@/public/images/cate2.png";
import cate3 from "@/public/images/cate3.png";
import cate4 from "@/public/images/cate4.png";
import cate5 from "@/public/images/cate5.png";
import cate6 from "@/public/images/cate6.png";

const categories = [
  { icon: cate1, title: "Vegetables", count: 165 },
  { icon: cate2, title: "Fresh Fruits", count: 120 },
  { icon: cate3, title: "Meat & Fish", count: 80 },
  { icon: cate4, title: "Bakery", count: 60 },
  { icon: cate5, title: "Juices", count: 40 },
  { icon: cate6, title: "Snacks", count: 100 },
  { icon: cate1, title: "Vegetables", count: 165 },
  { icon: cate2, title: "Fresh Fruits", count: 120 },
  { icon: cate3, title: "Meat & Fish", count: 80 },
  { icon: cate4, title: "Bakery", count: 60 },
  { icon: cate5, title: "Juices", count: 40 },
  { icon: cate6, title: "Snacks", count: 100 },
];

const ShopByCategory = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-softprimary/25 to-white py-20">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hardprimary">
              Browse by craving
            </p>
            <h3 className="text-[36px] font-semibold leading-[120%] text-black_main">
              Shop by top categories
            </h3>
            <p className="text-sm text-secondary_color">
              Quick shortcuts to what you cook the most.
            </p>
          </div>
          <Link
            href="/shop"
            className="flex items-center gap-2 rounded-full border border-softprimary/60 bg-white px-4 py-2 text-sm font-semibold text-hardprimary shadow-sm transition hover:-translate-y-0.5 hover:border-primary_color hover:text-primary_color"
          >
            View All <FaArrowRight />
          </Link>
        </div>

        <div className="relative">
          <button className="custom-prev absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-primary_color shadow-lg shadow-primary_color/10 transition hover:-translate-y-[60%] hover:bg-primary_color hover:text-white">
            <FaChevronLeft />
          </button>

          <button className="custom-next absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-primary_color shadow-lg shadow-primary_color/10 transition hover:-translate-y-[60%] hover:bg-primary_color hover:text-white">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-10"
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <CategoryCard
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
