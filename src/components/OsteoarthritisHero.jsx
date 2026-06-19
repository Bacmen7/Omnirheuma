const navTabs = [
  { label: "Symptoms &\nCauses", active: true },
  { label: "Diagnosis &\nTreatment", active: false },
  { label: "Doctors &\nDepartments", active: false },
]

function OsteoarthritisHero() {
  return (
    <header>
      {/* Top Section */}
      <div style={{ backgroundColor: "#0f616e" }} className="text-white">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-10 md:pt-10 md:pb-12 flex flex-col items-start">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2" style={{ marginBottom: "24px" }}>
            <span className="material-symbols-outlined text-[16px]" style={{ color: "#a0e2e4" }}>chevron_left</span>
            <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4" }}>Diseases &amp; Conditions</span>
          </div>

          {/* Title */}
          <h1
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-0.5px",
              color: "#ffffff",
              maxWidth: "1120px",
            }}
          >
            Osteoarthritis Symptoms and Causes
          </h1>

          {/* Appointment Link hidden by request */}
          {/* <a
            href="#"
            className="inline-flex items-center text-white text-[15px] font-semibold hover:opacity-80 transition-opacity hover:underline"
          >
            <Calendar className="w-[22px] h-[22px] mr-3" strokeWidth={1.5} />
            Request an Appointment
          </a> */}
        </div>
      </div>

      <div style={{ backgroundColor: "#0a4f5a" }} className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] py-6 flex justify-start gap-5 overflow-x-auto">
          {navTabs.map((tab) => (
            <a
              key={tab.label}
              href="#"
              className={`inline-block rounded-full px-5 py-2.5 text-[13px] font-medium leading-tight text-left whitespace-nowrap transition-colors ${
                tab.active
                  ? "bg-white text-navy-deep"
                  : "bg-white/[0.12] text-white hover:bg-white/20"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default OsteoarthritisHero
