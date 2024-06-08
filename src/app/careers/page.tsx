import React from "react";
import HeroImage from "@/components/HeroImage";
import CardComponent from "@/components/CardComponent";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <section className="mx-auto max-w-[1640px]">
      <div>
        <Navbar />
      </div>
      <HeroImage title="Careers" subtitle="Careers Page" backgroundImage="careers-bg.jpg" />
      <div className="">
        <CardComponent /> <CardComponent /> <CardComponent /> <CardComponent />{" "}
        <CardComponent /> <CardComponent /> <CardComponent /> <CardComponent />
      </div>
    </section>
  );
};

export default Page;
