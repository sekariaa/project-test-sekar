import React from "react";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <section className="mx-auto max-w-[1640px]">
      <div>
        <Navbar />
      </div>
      <HeroImage
        title="About"
        subtitle="About Page"
        backgroundImage="about-bg.jpg"
      />
    </section>
  );
};

export default Page;
