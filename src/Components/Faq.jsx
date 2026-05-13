import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Most orders are delivered within 3-7 business days depending on your location. You’ll also receive live tracking updates after shipping.",
    },
    {
      question: "Do you offer Cash on Delivery?",
      answer:
        "Yes, Cash on Delivery (COD) is available on selected products and locations across India.",
    },
    {
      question: "Can I return a product if I don’t like it?",
      answer:
        "Yes! We offer an easy 7-day return policy on eligible products. The item should be unused and in original packaging.",
    },
    {
      question: "Are your products original?",
      answer:
        "Absolutely. Every product on Apex Store is 100% authentic and quality checked before shipping.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you’ll receive a tracking link through email or SMS to monitor your package in real time.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support UPI, Debit Cards, Credit Cards, Net Banking, Wallets, and Cash on Delivery.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#020617] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-sm font-medium border border-indigo-500/20">
            FAQ
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-6 leading-tight">
            Questions? <br />
            We’ve Got Answers.
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Everything you need to know about orders, payments,
            shipping, returns, and support at Apex Store.
          </p>
        </div>

        {/* FAQ BOX */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl
              ${
                openIndex === index
                  ? "bg-indigo-500/10 border-indigo-500/40"
                  : "bg-white/5 border-white/10 hover:border-indigo-400/30"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left p-6 sm:p-7"
              >
                <h3 className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                  {faq.question}
                </h3>

                <div
                  className={`min-w-[42px] h-[42px] rounded-full flex items-center justify-center border transition-all duration-300
                  ${
                    openIndex === index
                      ? "bg-indigo-500 border-indigo-500 rotate-180"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <ChevronDown className="text-white w-5 h-5" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out
                ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed px-6 sm:px-7 pb-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}

export default FAQ;