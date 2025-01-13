import { useState } from "react";
import Button from "./button";

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto container my-10 px-10 lg:px-36">
      <div className="grid mdgrid-cols-1 grid-cols-2 gap-8">
        {/* Left Side: FAQ Description */}
        <div>
          <h2 className="text-[54px] font-serif  mb-4">
            Frequently asked Questions
          </h2>
          <p className="text-gray-600  mb-6">
            Everything you need to know about{" "}
            <span className="text-[#DFB203]">Markazul Bayan. </span>
            Find answers to the most common questions below.
          </p>
          <Button text="Start Now" />
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-gray-700 text-3xl font-serif focus:outline-none"
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
