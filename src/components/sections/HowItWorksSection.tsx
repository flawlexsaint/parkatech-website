import Container from "../Container";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Register quickly to join our network of sales agents.",
    },
    {
      id: 2,
      title: "Browse Products",
      description: "Explore our extensive catalog of smartphones and more.",
    },
    {
      id: 3,
      title: "Sell to Customer",
      description: "Explore our extensive catalog of smartphones and more.",
    },
    {
      id: 4,
      title: "Facilitate Financing",
      description: "Assist customers with flexible payment options.",
    },
    {
      id: 5,
      title: "Earn Commissions",
      description: "Receive competitive payouts for every successful sale.",
    },
  ];

  return (
    <div id="how-it-works">
      <Container className="bg-[#D2F3F9] py-[55px] md:py-[118px]">
        <div className="px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[56px] font-bold text-[#031317]">
              How it Works
            </h2>
          </div>
          <div className="mt-12 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[60px] bottom-[60px] h-[80%] w-[1px] bg-[#4BCDE7] block"></div>
            <Container className="w-[90%] xl:w-[55%] 3xl:w-[40%]">
              <div className="flex flex-col space-y-10 relative">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center w-[40%] 3xl:w-[30%] lg:w-[50%]${
                      index % 2 === 0
                        ? "mr-auto pl-0 text-right"
                        : "pl-10 ml-auto"
                    }`}
                  >
                    {/* Step Number Indicator */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full text-[24px] font-bold text-[#031317]">
                      {step.id}
                    </div>

                    {/* Step Content */}
                    <div className="max-w-sm text-[#031317]">
                      <h3 className="font-semibold text-[16px] md:text-[24px]">
                        {step.title}
                      </h3>
                      <p className="text-[16px] md:text-[24px] text-[#031317]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
}
