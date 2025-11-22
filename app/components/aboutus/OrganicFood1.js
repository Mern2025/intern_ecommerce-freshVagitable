import Image from "next/image";
import React from "react";
import {
  FaBottleDroplet,
  FaLeaf,
  FaSeedling,
  FaTruckFast,
} from "react-icons/fa6";
import about1 from "@/public/images/about1.png";

const OrganicFood1 = () => {
  return (
    <section className="relative py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-softprimary/15 via-white to-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-primary_color/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-softprimary/20 blur-[120px]"
        aria-hidden
      />

      <div className="container relative">
        <div className="grid h-fit grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary_color/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-hardprimary">
              About our farm-to-cart promise
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-[48px] font-semibold leading-[120%] text-black_main">
              Rooted in real farms. Delivered with zero shortcuts.
            </h2>
            <p className="text-base sm:text-lg leading-[160%] text-secondary_color max-w-[620px]">
              We partner with small organic growers, harvest at the right hour,
              and keep every crate cold-chain tracked. Your pantry gets vibrant,
              chemical-free produce that tastes like it came straight from the
              field—because it did.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary_color px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary_color/20 transition hover:-translate-y-0.5 hover:bg-hardprimary">
                Explore our organic picks
              </button>
              <button className="rounded-full border border-softprimary/70 bg-white px-6 py-3 text-sm font-semibold text-black_main shadow-sm transition hover:-translate-y-0.5 hover:border-hardprimary hover:shadow">
                Meet our growers
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
              {[
                { label: "Years organic sourcing", value: "12+" },
                { label: "Partner farms", value: "48" },
                { label: "Customer reviews", value: "4.9/5" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-softprimary/40 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-black_main">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-secondary_color">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-softprimary/40 bg-gradient-to-br from-white via-softprimary/15 to-white shadow-xl">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-softprimary/30 via-transparent to-transparent"
                aria-hidden
              />
              <Image
                src={about1}
                alt="Fresh organic vegetables in crates"
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute left-5 top-5 rounded-2xl bg-white/85 px-4 py-3 shadow-md backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary_color">
                  Certified organic
                </p>
                <p className="text-lg font-semibold text-black_main">
                  No pesticides. No compromises.
                </p>
              </div>

              <div className="absolute bottom-5 right-5 flex flex-col gap-2 rounded-2xl bg-black_main/80 px-4 py-3 text-white shadow-lg backdrop-blur">
                <p className="text-sm font-semibold">Cold-chain tracked</p>
                <p className="text-xs text-white/80">
                  Temperature-logged from farm to doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: <FaLeaf className="text-lg" />,
              title: "Clean soil, clean food",
              desc: "Regenerative farming methods that keep nutrients in the ground and on your plate.",
            },
            {
              icon: <FaSeedling className="text-lg" />,
              title: "Season-first sourcing",
              desc: "We harvest in peak season windows so flavors stay bold and textures stay crisp.",
            },
            {
              icon: <FaBottleDroplet className="text-lg" />,
              title: "Zero artificial anything",
              desc: "No synthetic fertilizers, additives, or coloring—ever.",
            },
            {
              icon: <FaTruckFast className="text-lg" />,
              title: "Same-day dispatch",
              desc: "Orders leave the farm hub within hours to lock in freshness.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex h-full gap-3 rounded-2xl border border-softprimary/40 bg-white/85 p-5 shadow-sm backdrop-blur"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary_color/10 text-primary_color">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-black_main">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-secondary_color">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-softprimary/40 bg-white/85 p-6 shadow-md backdrop-blur lg:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "We grow",
                copy: "Seed to soil with partner farms that rotate crops, conserve water, and protect pollinators.",
              },
              {
                title: "We test",
                copy: "Every batch is checked for freshness, cleanliness, and traceability before it ships.",
              },
              {
                title: "You enjoy",
                copy: "Packed to arrive crisp, flavorful, and ready to cook—no prep surprises.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-softprimary/30 bg-white p-5 shadow-sm"
              >
                <span className="absolute -top-3 left-5 rounded-full bg-primary_color px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md">
                  Step {index + 1}
                </span>
                <p className="mt-3 text-lg font-semibold text-black_main">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-secondary_color">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicFood1;
