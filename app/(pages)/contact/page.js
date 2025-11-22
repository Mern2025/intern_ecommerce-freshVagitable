import ContactForm from "@/app/components/contact/ContactForm";
import ContactInfo from "@/app/components/contact/ContactInfo";
import Breadcrumb from "@/app/ui/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-softprimary/10 via-white to-softprimary/5">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="container py-14">
        <div className="rounded-[28px] border border-softprimary/30 bg-white/80 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-10 px-6 py-10 lg:px-12">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.25em] text-secondary_color">
                Contact
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h1 className="text-3xl font-semibold text-black_main">
                  Let&apos;s shape your next storefront experience
                </h1>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary_color/10 px-4 py-2 text-sm font-medium text-hardprimary">
                  Same-day replies - Dedicated strategist
                </span>
              </div>
              <p className="max-w-3xl text-sm text-secondary_color">
                Share the goals you have in mind and we will outline the design,
                build, or optimization plan that gets you there.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {/* ====== left side info box ============= */}
              <ContactInfo />

              {/* ====== right side form ============= */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
