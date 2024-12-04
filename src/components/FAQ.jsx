import React from "react";

const FAQ = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary md-4 md:mb-6 lg:mb-8">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is crowdfunding?
        </div>
        <div className="collapse-content">
          <p>
            Crowdfunding is the practice of raising small amounts of money from
            a large number of people, typically via the internet.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How does this crowdfunding platform work?
        </div>
        <div className="collapse-content">
          <p>
            Our platform allows creators to launch campaigns and raise funds for
            their projects. Supporters (backers) can browse various campaigns
            and contribute to those they believe in. Campaigns can offer
            rewards, equity, or simply seek donations, depending on the model
            chosen by the creator.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I create a campaign on this platform?
        </div>
        <div className="collapse-content">
          <p>
            Yes! If you have a project, idea, or cause you want to fund, you can
            create a campaign by signing up and following the steps to submit
            your campaign details. Once approved, you can start collecting
            pledges from backers.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I contribute to a campaign?
        </div>
        <div className="collapse-content">
          <p>
            You can browse the available campaigns on our platform, choose one
            you'd like to support, and contribute directly through a secure
            payment system. Most platforms accept credit/debit cards, PayPal,
            and other payment methods.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is my payment secure?
        </div>
        <div className="collapse-content">
          <p>
            Yes! We use secure payment gateways to process transactions and
            ensure your financial information is protected. Your contributions
            are encrypted and handled in compliance with the latest security
            standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
