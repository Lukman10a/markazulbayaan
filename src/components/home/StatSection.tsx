import Image from "next/image";
import quran from "/public/assets/quran.svg";
import volume from "/public/assets/volume.svg";
import moon from "/public/assets/moon.svg";

export default function StatSection() {
  return (
    <section className="px-4 md:px-10 py-8 md:py-16">
      <div className="mx-auto container">
        <div className="text-center space-y-6">
          <h3 className="text-[#760808] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Platform to Learn the Qur&apos;an & Sunnah
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-medium max-w-4xl mx-auto">
            Gain mastery in Quranic recitation (Tajweed) and immerse yourself in
            the teachings of Prophet Muhammad (PBUH), with a focus on the Sunnah
            and Islamic practices.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16">
          <StatItem
            icon={quran}
            alt="Quran Icon"
            number="1000+"
            text="Quranic Lessons Delivered"
          />
          <StatItem
            icon={volume}
            alt="Tajweed Icon"
            number="50,000+"
            text="Hours of Learning"
          />
          <StatItem
            icon={moon}
            alt="Community Icon"
            number="29m+"
            text="Active Learners"
          />
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
