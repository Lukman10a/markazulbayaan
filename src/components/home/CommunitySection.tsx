import React from "react";
import CommunityCard from "./CommityCard";

const communityCardDataArray = [
  {
    title: "Flexible Learning",
    description:
      "We understand that life is busy, and that’s why our courses are designed to accommodate your schedule. Learn at your own pace, from the comfort of your home, with access to all learning materials whenever you need them.",
    imageSrc: "/assets/flexible.svg", // Replace with actual icon path
    altText: "Flexible Learning Icon",
    link: "/flexible-learning", // Replace with actual link
  },
  {
    title: "Expert Guidance",
    description:
      "Our highly qualified instructors are passionate about helping you succeed. With years of experience and a deep understanding of Islamic education, they are dedicated to making your learning experience enriching and rewarding.",
    imageSrc: "/assets/guidance.svg", // Replace with actual icon path
    altText: "Expert Guidance Icon",
    link: "/expert-guidance", // Replace with actual link
  },
  {
    title: "Community of Learners",
    description:
      "Join a vibrant, supportive community of like-minded learners who share your passion for gaining knowledge. Connect, interact, and grow together on your journey of Islamic education.",
    imageSrc: "/assets/community.svg", // Replace with actual icon path
    altText: "Community of Learners Icon",
    link: "/community-learners", // Replace with actual link
  },
  {
    title: "Certification on Completion",
    description:
      "Earn a recognized certificate upon the successful completion of your course, demonstrating your dedication and achievement in Arabic language studies, Quranic recitation, or Islamic monotheism.",
    imageSrc: "/assets/certificate.svg", // Replace with actual icon path
    altText: "Certification Icon",
    link: "/certification", // Replace with actual link
  },
];

export const CommunitySection = () => {
  return (
    <div className="bg-gray-900 py-16 xl:mx-[5vw] xl:rounded-lg px-[5vw] mb-20">
      <div className="mx-auto text-center">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[6.5vmin] text-white font-semibold mb-2">
            Why Choose Markazul-Bayan?
          </h2>
          <p className="text-white text-xl font-normal mb-2">
            Join our Community of Islamic Learners
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[100%] mx-auto">
          {/* Map over the cardDataArray to generate the Card components */}
          {communityCardDataArray.map((communityCardData, index) => (
            <CommunityCard
              key={index}
              title={communityCardData.title}
              description={communityCardData.description}
              imageSrc={communityCardData.imageSrc}
              altText={communityCardData.altText}
              link={communityCardData.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
