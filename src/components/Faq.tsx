import { useState } from "react";

const faqs = [
  {
    question: "How does slice work?",
    answer: "Slice is a tool that allows you to break down...",
  },
  {
    question: "Is my data course?",
    answer: "Yes, your data is handled with utmost security...",
  },
  {
    question: "Does slice work well with large teams?",
    answer: "Slice is highly scalable and works well with teams of any size...",
  },
  {
    question: "How do I create a new account?",
    answer: "To create a new account, you simply click on the signup button...",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto my-10 px-4 lg:px-36">
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
                className="flex justify-between items-center w-full text-left text-gray-700 text-lg font-medium focus:outline-none">
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
