import React from "react";
import CommunityCard, { CommunityCardProps } from "./CommityCard";
import { Clock, Users, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

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

// Animation Variants for section header
const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Animation Variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2, // Stagger the appearance of each card
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.05, // Slightly zoom the card on hover
    transition: { type: "spring", stiffness: 300 },
  },
};

// Animation for the icon
const iconVariants = {
  hover: {
    rotate: [0, 10, -10, 0], // Subtle rotation effect
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const CommunitySection = () => {
  return (
    <section className="bg-gray-900 py-16 xl:mx-[5vw] xl:rounded-lg px-[5vw] mb-20 bg-[url('../../public/assets/mask-group.png')]">
      <div className="mx-auto text-center">
        {/* Header Section */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <h2 className="text-[6.5vmin] text-white font-serif mb-2">
            Why Choose Markazul-Bayan?
          </h2>
          <p className="text-white text-xl font-normal mb-2">
            Join our Community of Islamic Learners
          </p>
        </motion.div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[100%] mx-auto">
          {/* Map over the cardDataArray to generate the Card components */}
          {communityCardDataArray.map((communityCardData, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
            >
              <CommunityCard
                title={communityCardData.title}
                description={communityCardData.description}
                icon={
                  <motion.div variants={iconVariants}>
                    {communityCardData.icon}
                  </motion.div>
                }
                link={communityCardData.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
