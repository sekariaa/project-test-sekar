import React from "react";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import CardList from "@/components/Card/CardList";

const Page: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1640px]">
      <Navbar />
      <HeroImage
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="/ideas-bg.jpg"
      />
      <CardList />
    </section>
  );
};

export default Page;
