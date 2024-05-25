import React from "react";
import { Typography } from "./ui/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const QnA: React.FC = () => {
  const accordionValue = [
    {
      title: "How do you find different criteria in your process? ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor dicta eum quasi facilis. Eveniet, reiciendis sit? Consequatur neque rem facere! Est omnis laborum quasi, totam eaque consequuntur quisquam corrupti.",
    },
    {
      title: "What do you look for a founding team? ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor dicta eum quasi facilis. Eveniet, reiciendis sit? Consequatur neque rem facere! Est omnis laborum quasi, totam eaque consequuntur quisquam corrupti.",
    },
    {
      title: "What do I get for my $0 plan? ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor dicta eum quasi facilis. Eveniet, reiciendis sit? Consequatur neque rem facere! Est omnis laborum quasi, totam eaque consequuntur quisquam corrupti.",
    },
    {
      title: "How do you find different criteria in your process? ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor dicta eum quasi facilis. Eveniet, reiciendis sit? Consequatur neque rem facere! Est omnis laborum quasi, totam eaque consequuntur quisquam corrupti.",
    },
    {
      title: "What do you look for a founding team? ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor dicta eum quasi facilis. Eveniet, reiciendis sit? Consequatur neque rem facere! Est omnis laborum quasi, totam eaque consequuntur quisquam corrupti.",
    },
    {
      title: "What do I get for my $0 plan? ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor dicta eum quasi facilis. Eveniet, reiciendis sit? Consequatur neque rem facere! Est omnis laborum quasi, totam eaque consequuntur quisquam corrupti.",
    },
  ];
  return (
    <div className="pt-20 px-20">
      <Typography
        label="Questions & Answers"
        variant="h3"
        weight="bold"
        className="text-center pb-6"
      />
      {accordionValue.map((item) => (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Typography weight="semibold">{item.title}</Typography>
            </AccordionTrigger>
            <AccordionContent className="text-gray">
              <Typography weight="light">{item.content}</Typography>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <div className="flex my-4 pt-4 justify-center  ">
        <div className="bg-teal_300 flex px-8 py-1 rounded-full">
          <Typography
            label="Don't find the answer? We can help."
            weight="semibold"
          />
          <Typography
            label="Click here"
            weight="semibold"
            className="text-teal_700 underline underline-offset-4 ml-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default QnA;
