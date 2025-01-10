import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

const WhyChoose: FC = () => {
  const items = [
    {
      icon: "⏰",
      title: "Flexible Learning",
      description:
        "Learn at your own pace, from the comfort of your home, with access to all learning materials.",
    },
    {
      icon: "🎓",
      title: "Expert Guidance",
      description:
        "Our highly qualified instructors are passionate about helping you succeed in your Islamic education journey.",
    },
    {
      icon: "👥",
      title: "Community of Learners",
      description:
        "Join a vibrant, supportive community of like-minded learners who share your passion for gaining knowledge.",
    },
    {
      icon: "📜",
      title: "Certification on Completion",
      description:
        "Earn a recognized certificate upon the successful completion of your course, demonstrating your achievement.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Choose Markazul-Bayan?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                Learn more <IoIosArrowForward className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
