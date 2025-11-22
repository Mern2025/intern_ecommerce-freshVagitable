import FeatureCard from "@/app/ui/FeatureCard";
import React from "react";
import feature1 from "@/public/images/feature1.png";
import feature2 from "@/public/images/feature2.png";
import feature3 from "@/public/images/feature3.png";
import feature4 from "@/public/images/feature4.png";

const Feature = () => {
  const features = [
    {
      icon: feature1,
      title: "Chill-chain delivery",
      body: "Cooled vans keep greens crisp until your doorstep.",
    },
    {
      icon: feature2,
      title: "Real humans 24/7",
      body: "Message us anytime—farmers and support reply fast.",
    },
    {
      icon: feature3,
      title: "Secure checkout",
      body: "Trusted payments with instant confirmations.",
    },
    {
      icon: feature4,
      title: "Freshness guarantee",
      body: "If it is not great, we replace or refund right away.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8 flex flex-col gap-2 text-center">
          <span className="mx-auto rounded-full bg-primary_color/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-hardprimary">
            Why shop with us
          </span>
          <h3 className="text-3xl font-semibold text-black_main">
            Built for freshness, supported by people
          </h3>
          <p className="mx-auto max-w-3xl text-sm text-secondary_color">
            We obsess over every mile from farm to your kitchen—so you do not
            have to.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
