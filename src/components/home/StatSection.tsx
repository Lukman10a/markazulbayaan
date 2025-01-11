import Image from "next/image";
import quran from "/public/assets/quran.svg";
import volume from "/public/assets/volume.svg";
import moon from "/public/assets/moon.svg";
import image1 from "/public/assets/statquran.jpg";
import image2 from "/public/assets/statimage2.png";
import image3 from "/public/assets/statimage3.png";

export default function StatSection() {
  return (
    <section className=" bg-slate-100 py-32 ">
      <div className="w-9/10 max-w-[1200px] mx-auto grid grid-cols-3 gap-6">
        <div className=" h-auto min-h-[130px]">
          <p className="text-4xl font-medium">
            A Platform to Learn the Quran & Sunnah
          </p>
        </div>

        <div className="col-span-2 ">
          <p className="text-sm w-[70%] ml-auto">
            Master the recitation of the Quran (with Tajweed) and immerse
            yourself in the teachings of Prophet Muhammad (peace and blessing of
            Allah be upon him) through the Sunnah. Additionally, our curriculum
            offers in-depth learning of Hadith, Arabic language (reading and
            writing), Fiqh, Tafsir, and other essential Islamic sciences.
          </p>
        </div>

        <div className="row-span-2 col-span-1 relative rounded-lg overflow-hidden">
          <Image
            src={image1}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute bottom-4 text-right w-full flex flex-col items-center justify-center rounded-lg overflow-hidden">
            <div className="text-[#DFB203] text-6xl w-[90%] border-b border-[#DFB203] pb-4">
              100+
            </div>

            <div className="text-[#DFB203] my-2 w-[90%] text-right">
              Quranic Lessons Delivered
            </div>
          </div>
        </div>

        <div className="row-span-1 col-span-1 relative bg-[#B1BAC0] rounded-lg overflow-hidden">
          <div className="absolute bottom-4 text-right w-full flex flex-col items-center justify-center">
            <div className="text-black text-6xl w-[90%] border-b border-black pb-4">
              500+
            </div>

            <div className="text-black my-2 w-[90%] text-right">
              Students have benefited
            </div>
          </div>
        </div>

        <div className="row-span-1 col-span-1 relative rounded-lg overflow-hidden">
          <Image
            src={image2}
            alt="image"
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="row-span-1 col-span-1 relative rounded-lg overflow-hidden">
          <Image
            src={image3}
            alt="image"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="row-span-1 col-span-1 relative bg-[#f5e7b1] rounded-lg overflow-hidden">
          <div className="absolute bottom-4 text-right w-full flex flex-col items-center justify-center">
            <div className="text-black text-6xl w-[90%] border-b border-black pb-4">
              100+
            </div>

            <div className="text-black my-2 w-[90%] text-right">
              Hours of Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  icon,
  alt,
  number,
  text,
}: {
  icon: any;
  alt: string;
  number: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={icon} alt={alt} className="w-16 h-16 md:w-20 md:h-20" />
      <div className="mt-4 space-y-2">
        <p className="text-[#E8B33F] font-bold text-3xl md:text-4xl">
          {number}
        </p>
        <p className="text-[#3F2E07] text-sm md:text-base font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}
