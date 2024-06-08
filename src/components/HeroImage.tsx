import React from "react";

interface HeroImageProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <div
      className="parallax h-96 px-4 text-center flex justify-center flex-col items-center mb-8 text-white mx-auto max-w-[1640px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="md:text-4xl text-3xl lg:text-5xl">{title}</div>
      <div className="md:text-lg text-base font-medium">{subtitle}</div>
    </div>
  );
};

export default HeroImage;
