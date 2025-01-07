import { Link } from "react-router-dom";
import Heading from "./Heading";

const SupportUs = () => {
  return (
    <section id="support-us">
      <div className="container mx-auto px-6 text-center">
        <Heading title="Support Us" />
        <p className="max-w-[600px] text-text opacity-50 mx-auto mt-4">
          Your support helps us continue making a difference in the lives of
          those in need. Every contribution, no matter how small, makes a big
          impact.
        </p>
        <div className="mt-6">
          <Link
            to="/allCampaign"
            className="btn-primary px-6 py-3 rounded-full shadow-md transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
