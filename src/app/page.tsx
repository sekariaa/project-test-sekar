import React from "react";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import CardList from "@/components/Card/CardList";

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
        <CardList />
      </div>
    </section>
  );
};

export default Page;
