import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ThumbnailProps {
  title: string;
  imageUrl?: string | StaticImageData;
  width?: number;
  height?: number;
  className?: string;
}

const DefaultThumbnail: React.FC<ThumbnailProps> = ({
  title,
  imageUrl,
  width = 300,
  height = 200,
  className,
}) => {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className={cn("rounded-lg object-cover", className)}
      />
    );
  }

  // Function to generate a color based on the title
  const generateColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor(
      Math.abs((Math.sin(hash) * 16777215) % 1) * 16777215
    ).toString(16);
    return "#" + "0".repeat(6 - color.length) + color;
  };

  const color1 = generateColor(title);
  const color2 = generateColor(title.split("").reverse().join(""));

  return (
    <div
      className={cn("relative rounded-lg overflow-hidden w-full", className)}
      style={{
        height: height ? `${height}px` : undefined,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, ${color1}, ${color2})`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h3 className="text-white text-center font-bold text-lg line-clamp-3">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default DefaultThumbnail;
