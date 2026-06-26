import { Link } from "react-router-dom"

function CtaBanner({ spacerColor = "#ffffff" }) {
  return (
    <section className="custom-approach-section w-full flex flex-col overflow-visible" style={{ backgroundColor: spacerColor }}>
      {/* Spacer */}
      <div style={{ height: "80px", backgroundColor: spacerColor }} />
      {/* Wave SVG */}
      <svg
        className="w-full h-[24px] sm:h-[90px] md:h-[120px] text-[#0f616e] block"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
          fill="currentColor"
        />
      </svg>

      {/* Content Area */}
      <div className="bg-[#0f616e] w-full overflow-visible">
        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-12 pt-6 sm:pt-10">
          <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-16">
            {/* Left -Text */}
            <div className="flex-[1.1] flex flex-col items-center md:items-start justify-center py-4">
              <h2
                className="text-[2.25rem] md:text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] font-normal !mb-5 md:!mb-6 text-center md:text-left"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                }}
              >
                Take the First Step Toward Relief from Arthritis
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "28px",
                  textAlign: "center",
                  fontFamily: "var(--font-base)",
                }}
                className="md:!text-left"
              >
                Early diagnosis and treatment can prevent long-term joint damage. Consult a rheumatology specialist and start a personalized treatment plan today.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full border border-transparent bg-primary px-8 py-4 text-[15px] font-semibold text-white no-underline transition-all duration-200 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f616e] active:scale-[0.99]"
                  style={{ fontFamily: "var(--font-base)", backgroundColor: "#e86531" }}
                >
                  Schedule Specialist Appointment
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </span>
                </Link>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[15px] text-white/60 opacity-90">or</span>
                  <a
                    href="#"
                    className="text-[15px] font-semibold text-white underline underline-offset-[6px] transition-opacity hover:opacity-80 focus:outline-none"
                    style={{ fontFamily: "var(--font-base)", textDecorationThickness: "2px" }}
                  >
                    let&apos;s get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* Right -Image (overflow into wave) */}
            <div className="flex-1 relative min-h-[200px] md:min-h-[250px]">
              <img
                src="/images/hero-consult.webp"
                alt="Doctor consulting with patient"
                className="w-full block rounded-[4px] absolute bottom-0"
                style={{
                  height: "clamp(300px, 50vw, 520px)",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
