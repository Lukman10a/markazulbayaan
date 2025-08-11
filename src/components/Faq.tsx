import { useState } from "react";
import Button from "./button";
import { useTheme } from "@/lib/theme-context";

const faqs = [
  {
    question: "What courses does Markazul-Bayan offer?",
    answer:
      "Markazul-Bayan offers courses in Islamic monotheism (Tawhid) Arabic language, Quranic studies, Fiqh, Tafsir, Reading and Writing, etc designed to cater to different proficiency levels.",
  },
  {
    question: "Are there classes for kids?",
    answer:
      "Markazul-Bayan offers courses for kids like: reading and writing, basic arabic conversations, adhkaar, etc",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, simply visit our Courses page, select the course you're interested in, and follow the registration instructions.",
  },
  {
    question: "Are the courses beginner-friendly?",
    answer:
      "Yes, we offer beginner, intermediate, and advanced levels to ensure that students at any stage of learning can benefit from our courses.",
  },
  {
    question: "Is there a certification upon course completion?",
    answer:
      "Yes, upon successful completion of your course, you will receive a certificate that acknowledges your achievement.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. Our courses are designed with flexibility in mind, allowing students to learn at their own pace.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`mx-auto container my-10 p-10 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
        {/* Left Side: FAQ Description */}
        <div>
          <h2 className={`text-6xl sm:text-4xl font-serif mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Frequently asked Questions
          </h2>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to know about{" "}
            <span className="text-yellow-500">Markazul Bayan. </span>
            Find answers to the most common questions below.
          </p>
          <Button text="Start Now" />
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b pb-4 ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
            }`}>
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center w-full text-left font-serif focus:outline-none transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="text-3xl sm:text-xl">{faq.question}</span>
                <span className={`text-2xl sm:text-xl ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-gray-600'
                }`}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className={`mt-2 sm:text-xs ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
