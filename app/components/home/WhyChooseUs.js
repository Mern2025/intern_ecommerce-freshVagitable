"use client";

import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

import farmer1 from "@/public/images/farmer1.png";
import farmer2 from "@/public/images/farmer2.png";
import CommonBtn from "@/app/ui/CommonBtn";

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-softprimary/35 via-white to-softprimary/30 py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="w-full sm:w-1/2">
            <Image
              src={farmer1}
              alt="Farmer 1"
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="w-full sm:w-1/2 sm:mt-10">
            <Image
              src={farmer2}
              alt="Farmer 2"
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-primary_color/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-hardprimary">
              Our promise
            </span>
            <span className="rounded-full bg-white/80 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.15em] text-secondary_color">
              Verified farms only
            </span>
          </div>
          <h2 className="mb-6 text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[120%] text-black_main">
            We partner with growers we know by first name.
          </h2>

          <p className="mb-6 max-w-xl text-sm leading-relaxed text-secondary_color">
            Every farm we work with shares transparent practices—clean soil,
            zero synthetic sprays, and fair labor. We visit often, taste
            everything, and track harvest dates before they ship.
          </p>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Harvested at dawn and chilled within an hour.",
              "Traceable batches with QR codes on every box.",
              "Rotating seasonal picks to keep nutrients high.",
              "Packaged in compostable, low-waste materials.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary_color text-white">
                  <FaCheck />
                </span>
                <p className="text-sm font-semibold text-black_main">{item}</p>
              </div>
            ))}
          </div>

          <CommonBtn
            variant="primary"
            size="md"
            rightIcon={<FaArrowRight />}
            href={"/shop"}
          >
            Shop Now
          </CommonBtn>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
