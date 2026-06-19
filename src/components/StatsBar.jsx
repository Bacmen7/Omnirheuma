function StatsBar() {
  return (
    <section className="py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] items-start gap-9 md:gap-[60px]">
        {/* Left -Heading */}
        <div className="flex-[1.5] text-center md:text-left">
          <h2
            className="leading-[1.12] font-normal mb-4 text-navy-deep text-[2.25rem] sm:text-[3.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Clinically Proven
            <br />
            Rheumatology Care
          </h2>
          <p
            className="text-[13px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-navy-muted max-w-md mx-auto md:mx-0"
            style={{ marginTop: "24px", marginBottom: "20px" }}
          >
            Our approach focuses on early diagnosis, personalized treatment plans, and modern therapies to control inflammation, prevent joint damage, and improve long-term quality of life.
          </p>

        </div>

        {/* Stat 1 */}
        <div className="self-start pt-1 flex flex-col items-center text-center md:items-start md:text-left">
          <div
            className="leading-none mb-3 text-navy-deep font-semibold"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 96px)", fontWeight: 700 }}
          >
            90%+
          </div>
          <p className="max-w-[240px] md:max-w-[260px] text-[13px] sm:text-[15px] leading-[1.55] sm:leading-[1.6] font-light tracking-[0.3px] text-navy-muted mx-auto md:mx-0">
            of patients find relief in{" "}
            <strong className="font-semibold tracking-[0.1px] text-navy-deep">10 weeks or less</strong>
          </p>
        </div>

        {/* Stat 2 */}
        <div className="self-start pt-1 flex flex-col items-center text-center md:items-start md:text-left">
          <div
            className="leading-none mb-3 text-navy-deep font-semibold"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 96px)", fontWeight: 700 }}
          >
            86%
          </div>
          <p className="max-w-[240px] md:max-w-[260px] text-[13px] sm:text-[15px] leading-[1.55] sm:leading-[1.6] font-light tracking-[0.3px] text-navy-muted mx-auto md:mx-0">
            of undiagnosed patients get a{" "}
            <strong className="font-semibold tracking-[0.1px] text-navy-deep">clear diagnosis within 3 months</strong>
          </p>
        </div>
      </div>

    </section>
  )
}

export default StatsBar
