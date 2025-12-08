import { CircleStop } from "lucide-react";
import React from "react";
import Faqcomp from "../subcomponents/Faqcomp";

const Faq = () => {
  return (
    <div className="h-screen">
      <div className="flex gap-5  justify-between">
        <div className="flex flex-col justify-start  ">
          <div className="flex justify-start  ">
            <CircleStop height={15} width={15} />
            <h1 className="text-sm ml-1 ">FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <h1 className="font-bold text-5xl text-[#1d332c] tracking-tighter">
            Your questions,our answers
          </h1>
        </div>
        <div className="flex flex-col gap-2">
        <Faqcomp text={"What services do you offer?"}/>
        <Faqcomp text={"How do I start a project with Interim?"}/>
        <Faqcomp text={"What is the typical timeline for a project?"}/>
        <Faqcomp text={"How do you charge for your services?"}/>
        <Faqcomp text={"Can you work within my budget?"}/>
        <Faqcomp text={"Do you handle the purchasing  of furniture and materials?"}/>
        <Faqcomp text={"Will I be able to see the design before its implemented?"}/>
        </div>
      </div>
    </div>
  );
};

export default Faq;
