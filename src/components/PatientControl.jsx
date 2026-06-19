function PatientControl() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="leading-[1.1] font-normal text-navy-deep"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Helping Patients Take Control of
          <br />
          Arthritis and Autoimmune Disease
        </h2>

        {/* Two points in one row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Point 1 */}
          <div className="flex-1">
            <h3
              className="text-[18px] font-semibold text-navy-deep"
              style={{ fontFamily: "var(--font-base)", marginBottom: "12px" }}
            >
              Early Diagnosis Matters
            </h3>
            <p className="text-[15px] leading-[1.65] text-navy-muted font-light tracking-[0.3px]">
              Patients diagnosed early have significantly better long-term joint outcomes.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex-1">
            <h3
              className="text-[18px] font-semibold text-navy-deep"
              style={{ fontFamily: "var(--font-base)", marginBottom: "12px" }}
            >
              Personalized Therapy Works
            </h3>
            <p className="text-[15px] leading-[1.65] text-navy-muted font-light tracking-[0.3px]">
              Modern biologic and targeted treatments help many patients achieve disease control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientControl
