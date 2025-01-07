import React from "react";
import { Fade } from "react-awesome-reveal";
import Heading from "./Heading";

const FAQ = () => {
  return (
    <div className="space-y-3" id="faq">
      <Heading title="Frequently Asked Questions" />
      <Fade direction="down">
        <div className="collapse collapse-arrow border border-text">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl text-text font-medium">
            What is crowdfunding?
          </div>
          <div className="collapse-content text-text opacity-50">
            <p>
              Crowdfunding is the practice of raising small amounts of money
              from a large number of people, typically via the internet.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-text">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-text font-medium">
            How does this crowdfunding platform work?
          </div>
          <div className="collapse-content text-text opacity-50">
            <p>
              Our platform allows creators to launch campaigns and raise funds
              for their projects. Supporters (backers) can browse various
              campaigns and contribute to those they believe in. Campaigns can
              offer rewards, equity, or simply seek donations, depending on the
              model chosen by the creator.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-text">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-text font-medium">
            Can I create a campaign on this platform?
          </div>
          <div className="collapse-content text-text opacity-50">
            <p>
              Yes! If you have a project, idea, or cause you want to fund, you
              can create a campaign by signing up and following the steps to
              submit your campaign details. Once approved, you can start
              collecting pledges from backers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-text">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-text font-medium">
            How do I contribute to a campaign?
          </div>
          <div className="collapse-content text-text opacity-50">
            <p>
              You can browse the available campaigns on our platform, choose one
              you'd like to support, and contribute directly through a secure
              payment system. Most platforms accept credit/debit cards, PayPal,
              and other payment methods.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border border-text">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl text-text font-medium">
            Is my payment secure?
          </div>
          <div className="collapse-content text-text opacity-50">
            <p>
              Yes! We use secure payment gateways to process transactions and
              ensure your financial information is protected. Your contributions
              are encrypted and handled in compliance with the latest security
              standards.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FAQ;
