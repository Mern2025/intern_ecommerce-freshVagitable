import ProductCard from "@/app/ui/ProductCard";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const products = async () => {
  const random = Math.floor(Math.random() * 99) + 1;
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=4&skip=${random}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const FeatureProduct = async () => {
  const data = await products();
  return (
    <section className="featureProduct bg-gradient-to-b from-white via-softprimary/30 to-white py-20">
      <div className="container">
        <div className="heading mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hardprimary">
              Fresh this week
            </p>
            <h3 className="text-[36px] font-semibold leading-[120%] text-black_main">
              Featured harvest picks
            </h3>
            <p className="text-sm text-secondary_color">
              Curated crates that sold out last week—now back in stock.
            </p>
          </div>
          <Link
            href={"/shop"}
            className="flex items-center gap-2 rounded-full border border-softprimary/60 bg-white px-4 py-2 text-sm font-semibold text-hardprimary shadow-sm transition hover:-translate-y-0.5 hover:border-primary_color hover:text-primary_color"
          >
            View All
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.products?.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
