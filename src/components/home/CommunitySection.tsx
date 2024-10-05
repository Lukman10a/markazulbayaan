import React from "react";
import CommunityCard, { CommunityCardProps } from "./CommityCard";
import { Clock, Users, GraduationCap, Award } from "lucide-react";

const communityCardDataArray: CommunityCardProps[] = [
  {
    title: "Flexible Learning",
    description:
      "Learn at your own pace, from the comfort of your home, with access to all learning materials whenever you need them.",
    icon: <Clock className="w-6 h-6 text-gray-800" />,
    link: "/flexible-learning",
  },
  {
    title: "Expert Guidance",
    description:
      "Our highly qualified instructors are passionate about helping you succeed in your Islamic education journey.",
    icon: <GraduationCap className="w-6 h-6 text-gray-800" />,
    link: "/expert-guidance",
  },
  {
    title: "Community of Learners",
    description:
      "Join a vibrant, supportive community of like-minded learners who share your passion for gaining knowledge.",
    icon: <Users className="w-6 h-6 text-gray-800" />,
    link: "/community-learners",
  },
  {
    title: "Certification on Completion",
    description:
      "Earn a recognized certificate upon the successful completion of your course, demonstrating your dedication and achievement.",
    icon: <Award className="w-6 h-6 text-gray-800" />,
    link: "/certification",
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
              icon={communityCardData.icon}
              link={communityCardData.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
