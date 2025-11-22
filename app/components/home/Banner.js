import Image from "next/image";
import React from "react";
import banner1 from "@/public/images/banner1.png";
import CommonBtn from "@/app/ui/CommonBtn";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-softprimary/40 via-white to-softprimary/20 pb-14 pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(43,212,125,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(14,124,79,0.18),transparent_35%)]"
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary_color/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-hardprimary">
              Fresh Vagitable
              <span className="h-1 w-1 rounded-full bg-hardprimary" />
              Farm to home
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[115%] text-black_main">
              Real-season produce, zero shortcuts, delivered chilled.
            </h1>

            <p className="max-w-xl text-base leading-[160%] text-secondary_color">
              Curated harvest boxes and pantry staples from our partner growers.
              Tracked cold-chain, honest sourcing, and next-day delivery in your
              city.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <CommonBtn rightIcon={<FaArrowRight />} href={"/shop"}>
                Shop fresh picks
              </CommonBtn>
              <div className="rounded-full border border-softprimary/70 bg-white/80 px-4 py-3 text-sm font-semibold text-hardprimary shadow-sm">
                Save 20% on your first harvest box
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Partner farms", value: "48" },
                { label: "Avg. rating", value: "4.9" },
                { label: "Hours to ship", value: "<12" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-softprimary/60 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-black_main">
                    {item.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-secondary_color">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-softprimary/60 bg-white/70 shadow-2xl backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary_color/10 via-transparent to-transparent"
                aria-hidden
              />
              <Image
                src={banner1}
                alt="Basket of fresh organic vegetables"
                className="h-full w-full object-contain"
                priority
              />

              <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-black_main shadow-md">
                Cold-chain tracked
                <p className="text-[11px] font-normal text-secondary_color">
                  Temperature logs in your order details.
                </p>
              </div>

              <div className="absolute bottom-5 right-5 rounded-2xl bg-black_main/85 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur">
                Seasonal box ready
                <p className="text-[11px] font-normal text-white/75">
                  Ships in under 6 hours today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
