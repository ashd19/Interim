import { CircleStop } from "lucide-react";
import Faqcomp from "../subcomponents/Faqcomp";
import { useState } from "react";

const Faq = () => {
  const [show, setShow] = useState(false);
  const answers = [
    {
      id: 1,
      answer:[
        "We offer a range of interior design ",
        "services including space planning, 3D rendering, furniture selection, color consultation, lighting design, custom cabinetry, ","and full project management from concept to completion.",
      ]
      },
    
    {
      id: 2,
      answer:
        "To start a project with Interim, simply reach out to us via our contact form or give us a call. We'll schedule an initial consultation to discuss your needs, preferences, and project scope.",
    },
    {
      id: 3,
      answer:
        "The typical timeline for a project varies depending on its scope and complexity. However, most projects take between 8 to 16 weeks from the initial consultation to final implementation.",
    },
    {
      id: 4,
      answer:
        "We charge for our services based on the project scope, which can include a flat fee, hourly rate, or a percentage of the total project cost. We provide a detailed proposal outlining all costs before starting any work.",
    },
    {
      id: 5,
      answer:
        "Yes, we are happy to work within your budget. During our initial consultation, we'll discuss your budget constraints and tailor our services to meet your financial needs while still achieving your design goals.",
    },
    {
      id: 6,
      answer:
        "Yes, we handle the purchasing of furniture and materials as part of our full-service interior design offerings. We work with trusted suppliers to source high-quality items that fit your design vision and budget.",
    },
    {
      id: 7,
      answer:
        "Absolutely! We provide 3D renderings and mood boards during the design phase, allowing you to visualize the proposed design before implementation. This ensures that you are completely satisfied with the design direction.",
    },
  ];
  const questions = [
    {
      id: 1,
      question: "What services do you offer?",
    },
    {
      id: 2,
      question: "How do I start a project with Interim?",
    },
    {
      id: 3,
      question: "What is the typical timeline for a project?",
    },
    {
      id: 4,
      question: "How do you charge for your services?",
    },
    {
      id: 5,
      question: "Can you work within my budget?",
    },
    {
      id: 6,
      question: "Do you handle the purchasing  of furniture and materials?",
    },
    {
      id: 7,
      question: "Will I be able to see the design before its implemented?",
    },
  ];
   
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex gap-5  justify-between">
        <div className="flex flex-col justify-start  ">
          <div className="flex justify-start   ">
            <CircleStop height={15} width={15} />
            <h1 className="text-sm ml-1  ">FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <h1 className="font-bold text-faq  leading-10 text-[#1d332c] tracking-tighter">
            Your questions,our answers
          </h1>
        </div>
        <div className="flex flex-col gap-2" onClick={()=>{setShow(!show)}}>
          {questions.map(({ id, question }) => (
            <div
              key={id}
              className="faq-item"
              onClick={() => {
                setShow(!show);
              }}
            >
              {/* Render the question */}
              <Faqcomp text={question} show={show} />

              {show && (
                <div className="p-5 overflow-hidden text-xl">
                  <p>{answers.find((answer) => answer.id === id)?.answer}</p>
                </div> 
                
              )}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
