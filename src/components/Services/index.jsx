import cardLogo from "../../assets/img/services/Vector.svg";
import skripkaLogo from "../../assets/img/services/Vector (1).svg";
import diogramLogo from "../../assets/img/services/Vector (2).svg";

const Services = () => {
  return (
    <div className="container mx-auto my-0">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-background">
        <div className="mb-4 md:mb-0">
          <h1 className="md:text-[44px] text-[26px] sm:text-[32px] font-bold text-foreground leading-[65px] my-12">
            Seamless Banking Experience
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <img undefinedhidden="true" alt="server-icon" src={cardLogo} />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Virtual Card & Instant Transfers
          </h3>
          <p className="text-muted-foreground mb-4">
            Get custom and secure virtual card and Transfer money between
            different accounts effortlessly.
          </p>
        </div>

        <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-4 px-6 rounded-full">
              <img
                undefinedhidden="true"
                alt="paperclip-icon"
                src={skripkaLogo}
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Centralized History
          </h3>
          <p className="text-muted-foreground mb-6">
            View everything in one place, no more digging through multiple apps
          </p>
        </div>

        <div className="flex-1 bg-card p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <img undefinedhidden="true" alt="chart-icon" src={diogramLogo} />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Expense Tracking & Budget Planning
          </h3>
          <p className="text-muted-foreground mb-4">
            Track spending habits and stay on top of your budget or Plan for the
            future with insights tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
