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
        title="Contact"
        subtitle="Contact Page"
        backgroundImage="contact-bg.jpeg"
      />
    </section>
  );
};

export default Page;
