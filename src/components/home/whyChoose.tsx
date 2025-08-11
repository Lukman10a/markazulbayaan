import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTheme } from "@/lib/theme-context";

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

const WhyChoose: FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-serif mb-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          Why Choose Markazul-Bayan?
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={`font-serif text-3xl mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                {item.title}
              </h3>
              <p className={`font-normal font-inter mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
              <a href="#" className={`inline-flex items-center hover:underline transition-colors duration-200 ${
                theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-blue-600 hover:text-blue-700'
              }`}>
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
