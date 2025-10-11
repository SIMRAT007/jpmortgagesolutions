import { useState, forwardRef } from 'react';

const MortgageCalculator = forwardRef((props, ref) => {

  const [loanAmount, setLoanAmount] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [interestRate, setInterestRate] = useState(2.99);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const propertyTax = (loanAmount * 0.01) / 12; // 1% annually
  const insurance = (loanAmount * 0.006) / 12; // 0.6% annually
  const totalMonthly = monthlyPayment + propertyTax + insurance;

  return (
    <section ref={ref} id="mortgage-calculator" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6">
            Free Mortgage Calculator
          </h2>
          <p className="text-base md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Calculate your monthly mortgage payments instantly. Adjust the values below to see how different loan amounts, 
            down payments, and interest rates affect your monthly payment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Calculator Form */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-1">
            <div className="bg-[#EDE8D1] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-6 md:mb-8">Loan Details</h3>
              
              {/* Loan Amount */}
              <div className="mb-4 md:mb-6">
                <label className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Home Price: ${loanAmount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-[#152945]/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs md:text-sm text-[#152945]/60 mt-1 md:mt-2">
                  <span>$100K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div className="mb-4 md:mb-6">
                <label className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Down Payment: ${downPayment.toLocaleString()} ({((downPayment/loanAmount) * 100).toFixed(1)}%)
                </label>
                <input
                  type="range"
                  min="0"
                  max={loanAmount * 0.3}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-[#152945]/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs md:text-sm text-[#152945]/60 mt-1 md:mt-2">
                  <span>$0</span>
                  <span>${(loanAmount * 0.3).toLocaleString()}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-4 md:mb-6">
                <label className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Interest Rate: {interestRate}%
                </label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-[#152945]/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs md:text-sm text-[#152945]/60 mt-1 md:mt-2">
                  <span>2%</span>
                  <span>8%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Loan Term: {loanTerm} years
                </label>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-[#152945]/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs md:text-sm text-[#152945]/60 mt-1 md:mt-2">
                  <span>10 years</span>
                  <span>40 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
            <div className="bg-gradient-to-br from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Monthly Payment Breakdown</h3>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
                <div className="text-[#EDE8D1] text-sm md:text-lg mb-1 md:mb-2">Total Monthly Payment</div>
                <div className="text-2xl md:text-4xl font-black mb-1 md:mb-2">${totalMonthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                <div className="text-[#EDE8D1]/80 text-xs md:text-base">for ${loanAmount.toLocaleString()} home</div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between text-[#EDE8D1] text-sm md:text-base">
                  <span>Principal & Interest</span>
                  <span className="font-bold">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-[#EDE8D1] text-sm md:text-base">
                  <span>Property Tax (est.)</span>
                  <span className="font-bold">${propertyTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-[#EDE8D1] text-sm md:text-base">
                  <span>Home Insurance (est.)</span>
                  <span className="font-bold">${insurance.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="border-t border-white/30 pt-3 md:pt-4 flex justify-between text-white font-black text-lg md:text-xl">
                  <span>Total Monthly</span>
                  <span>${totalMonthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-[#EDE8D1] rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="text-lg md:text-2xl font-black text-[#152945] mb-1">
                  ${((loanAmount - downPayment) * loanTerm * 12 * (interestRate/100/12)).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs md:text-sm text-[#152945]/70 font-semibold">Total Interest</div>
              </div>
              <div className="bg-[#E7CD87] rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="text-lg md:text-2xl font-black text-[#152945] mb-1">
                  ${(loanAmount - downPayment).toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-[#152945]/70 font-semibold">Loan Amount</div>
              </div>
            </div>

            {/* CTA */}
            <a 
              href="tel:+17803627172"
              className="w-full bg-[#E7CD87] text-[#152945] font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:bg-[#152945] hover:text-white transition-all duration-300 shadow-lg text-sm md:text-lg inline-block text-center cursor-pointer"
            >
              Call Us: +1-780-362-7172
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #152945;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        @media (min-width: 768px) {
          .slider::-webkit-slider-thumb {
            height: 24px;
            width: 24px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #152945;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        @media (min-width: 768px) {
          .slider::-moz-range-thumb {
            height: 24px;
            width: 24px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
    </section>
  );
});

MortgageCalculator.displayName = 'MortgageCalculator';
export default MortgageCalculator;