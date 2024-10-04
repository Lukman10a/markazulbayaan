import Image from "next/image";
import React from "react";

interface CommunityCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
  imageSrc,
  altText,
  link,
}) => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg relative shadow-lg border-2 border-yellow-500">
      {/* Icon */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <Image
          src={imageSrc}
          alt={altText}
          width={64}
          height={64}
          className="rounded-full bg-white p-2"
        />
      </div>

      <h3 className="mt-12 text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <a href={link} className="text-yellow-400 underline font-bold">
        Learn more
      </a>
    </div>
  );
};

export default CommunityCard;
