import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Offer {
  title: string;
  description: string;
  link: string;
  imageSrc:string;
  imageAlt:string;
}

interface OfferSectionProps {
  offers: Offer[];
}

const OfferSection: React.FC<OfferSectionProps> = ({ offers }) => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 font-serif max-w-7xl mx-auto">
      <div className="flex justify-between sm:flex-col py-6  items-center">
        <h2 className="text-6xl sm:text-2xl font-medium text-center mb-8">What we offer</h2>
        <p className="max-w-2xl text-lg sm:text-sm text-left">At <span className="text-yellow-500">Markazul-Bayan,</span> we provide access to a wealth of resources, including 
            authentic <span className="block sm:inline">texts, multimedia materials, and interactive sessions, fostering 
            an environment </span> conducive to holistic learning.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="">
            <Image src={offer.imageSrc} alt={offer.imageAlt} width={200} height={200} className="h-40 bg-gray-300 mb-4 rounded-md w-full" />
            <h3 className="text-3xl sm:text-lg font-medium mb-2 px-2">{offer.title}</h3>
            <p className="text-gray-600 text-xl sm:sm mb-4 px-2">{offer.description}</p>
            <Link
              href={offer.link}
              className="text-neutral-600 font-medium font-sans hover:underline hover:text-yellow-500 px-2"
            >
              Learn more &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
