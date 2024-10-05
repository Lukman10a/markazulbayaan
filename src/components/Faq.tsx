import { useState } from "react";

const faqs = [
  {
    question: "What courses does Markazul-Bayan offer?",
    answer:
      "Markazul-Bayan offers courses in Arabic language, Quranic studies, and Islamic monotheism, designed to cater to different proficiency levels.",
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto my-10 px-4 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: FAQ Description */}
        <div>
          <h2 className="text-yellow-600 text-3xl font-bold mb-4">
            Frequently asked Questions
          </h2>
          <p className="text-gray-600 text-[3vmin] md:text-[2.3vmin] mb-6">
            Whether you aspire to become a proficient Arabic speaker, deepen
            your understanding of the Quran, or strengthen your connection to
            Islamic monotheism, Markazul-Bayan is your premier destination. Let
            us accompany you on your quest for wisdom, insight, and
            enlightenment. Begin your journey with us today.
          </p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-gray-700 text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
