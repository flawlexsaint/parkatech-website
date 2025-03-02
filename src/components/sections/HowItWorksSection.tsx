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
    <Container className="bg-[#D2F3F9] py-[118px]">
      <div className="px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[56px] font-bold text-[#031317]">How it Works</h2>
        </div>
        <div className="mt-12 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[60px] bottom-[60px] h-[80%] w-1 bg-[#4BCDE7] hidden md:block"></div>

          <div className="flex flex-col space-y-10 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center w-full md:w-1/2 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pl-[23.4%] text-right"
                    : "md:ml-auto md:pl-10"
                }`}
              >
                {/* Step Number Indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full text-[24px] font-bold text-[#031317]">
                  {step.id}
                </div>

                {/* Step Content */}
                <div className="max-w-sm text-[24px] text-[#031317]">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-[24px] text-[#031317]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
