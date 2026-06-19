const insurers = [
  { name: "Aetna", logo: "aetna" },
  { name: "Blue Cross Blue Shield", logo: "bluecross" },
  { name: "Cigna", logo: "cigna" },
  { name: "UnitedHealthcare", logo: "united" },
  { name: "Humana", logo: "humana" },
  { name: "Medicare", logo: "medicare" },
]

function InsurancePartners() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left -Text */}
          <div>
            <h2 className="text-[2rem] md:text-[3rem] leading-[1.08] tracking-[-1.2px] text-navy-deep mb-6">
              In-network with most major{" "}
              <span className="relative inline-block">
                insurance
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 12"
                >
                  <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
                </svg>
              </span>
            </h2>
            <button className="bg-primary hover:bg-primary-hover text-navy-deep px-7 py-3 rounded-full font-semibold text-sm transition-colors">
              Check Insurance
            </button>
          </div>

          {/* Right -Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {insurers.map((ins) => (
              <div
                key={ins.name}
                className="bg-ghost rounded-xl py-5 sm:py-6 px-3 sm:px-4 flex items-center justify-center"
              >
                <span className="text-xs sm:text-sm font-semibold text-navy-deep/70 text-center leading-tight">
                  {ins.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsurancePartners
