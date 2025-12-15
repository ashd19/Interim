import { CircleStop, Plus } from "lucide-react";
import { useState } from "react";

const Faqcomp = ({ text, isOpen, onClick }) => {
  return (
    <div
      className="rounded-xl cursor-pointer w-full min-h-[70px] sm:h-[80px] p-3 sm:p-4 flex justify-between items-center bg-black/4 group transition ease-in duration-300 "
      onClick={onClick}
    >
      <h1 className="text-base sm:text-lg md:text-xl text-[#1d332c] font-medium pr-2 leading-snug inter-nav">{text}</h1>
      <div className={`bg-[#fefff2] group-hover:bg-orange-400/50 rounded-full min-w-[40px] w-[40px] h-[40px] sm:min-w-[50px] sm:w-[50px] sm:h-[50px] flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45 bg-orange-400/50' : ''}`}>
        <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    </div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a range of interior design services including space planning, 3D rendering, furniture selection, color consultation, lighting design, custom cabinetry, and full project management from concept to completion.",
    },
    {
      id: 2,
      question: "How do I start a project with Interim?",
      answer: "To start a project with Interim, simply reach out to us via our contact form or give us a call. We'll schedule an initial consultation to discuss your needs, preferences, and project scope.",
    },
    {
      id: 3,
      question: "What is the typical timeline for a project?",
      answer: "The typical timeline for a project varies depending on its scope and complexity. However, most projects take between 8 to 16 weeks from the initial consultation to final implementation.",
    },
    {
      id: 4,
      question: "How do you charge for your services?",
      answer: "We charge for our services based on the project scope, which can include a flat fee, hourly rate, or a percentage of the total project cost. We provide a detailed proposal outlining all costs before starting any work.",
    },
    {
      id: 5,
      question: "Can you work within my budget?",
      answer: "Yes, we are happy to work within your budget. During our initial consultation, we'll discuss your budget constraints and tailor our services to meet your financial needs while still achieving your design goals.",
    },
    {
      id: 6,
      question: "Do you handle the purchasing of furniture and materials?",
      answer: "Yes, we handle the purchasing of furniture and materials as part of our full-service interior design offerings. We work with trusted suppliers to source high-quality items that fit your design vision and budget.",
    },
    {
      id: 7,
      question: "Will I be able to see the design before its implemented?",
      answer: "Absolutely! We provide 3D renderings and mood boards during the design phase, allowing you to visualize the proposed design before implementation. This ensures that you are completely satisfied with the design direction.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f6f7e9] p-4 sm:p-6 lg:p-8 mb-20 pb-1">
      <div className="max-w-8xl mx-auto mb-15 ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start">
          {/* Left side - Header */}
          <div className="flex flex-col justify-start w-full lg:w-[600px]">
            <div className="flex items-center  mb-4">
              <CircleStop height={15} width={15} className="text-[#1d332c]" />
              <h2 className="text-[0.8rem]    inter   tracking-wider text-[#1d332c]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold md:leading-12  leading-none text-[#1d332c] tracking-tighter md:whitespace-nowrap">
              Your questions,our answers
            </h1>
          </div>

          {/* Right side - FAQ Items */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px]">
            {faqs.map((faq) => (
              <div key={faq.id} className="w-full ">
                <Faqcomp
                  text={faq.question}
                  isOpen={openId === faq.id}
                  onClick={() => toggleFaq(faq.id)}
                />

                {/* Answer with smooth animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-96 mt-2' : 'max-h-0'
                    }`}
                >
                  <div className=" p-4 sm:p-6 text-[#1d332c] text-sm sm:text-base leading-relaxed inter-faq ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;