import OrganicFood1 from "@/app/components/aboutus/OrganicFood1";
import Breadcrumb from "@/app/ui/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-softprimary/10 via-white to-white">
      <Breadcrumb items={[{ label: "About Us" }]} />
      <OrganicFood1 />
    </div>
  );
};

export default page;
