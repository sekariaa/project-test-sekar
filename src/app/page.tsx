import React from "react";
import HeroImage from "@/components/HeroImage";
import CardComponent from "@/components/CardComponent";
import Navbar from "@/components/Navbar";

const Page: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1640px]">
      <div>
        <Navbar />
      </div>
      <HeroImage
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="/ideas-bg.jpg"
      />
      <div className="">
        <CardComponent /> <CardComponent /> <CardComponent /> <CardComponent />{" "}
        <CardComponent /> <CardComponent /> <CardComponent /> <CardComponent />
      </div>
    </section>
  );
};

export default Page;
