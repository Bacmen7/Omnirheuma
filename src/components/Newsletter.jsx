function Newsletter({ variant = "light" }) {
  return null

  const isDark = variant === "dark"

  return (
    <section className="relative z-10 pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="block mb-10"
          style={{
            fontFamily: "var(--font-base)",
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: isDark ? "rgba(255,255,255,0.40)" : "#5a6577",
          }}
        >
          From our rheumatology experts to your inbox
        </span>

        {/* Heading */}
        <h2
          className="mx-auto !mb-16 max-w-[300px] sm:max-w-[860px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            fontWeight: 400,
            color: isDark ? "#ffffff" : "var(--color-navy-deep)",
          }}
        >
          Get{" "}
          <span className="relative inline-block">
            joint-friendly
            <svg
              className="absolute -bottom-1 left-0 w-full"
              style={{ height: "6px" }}
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 400 12"
            >
              <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </span>{" "}
          tips, news, and more&#8202;&#8212;&#8202;delivered weekly.
        </h2>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full sm:w-2/3 px-6 py-3.5 md:py-4 rounded-full border border-[#dadfe8] bg-white text-navy-deep placeholder:text-[#a0a4ac] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#1AA3B5]/30 focus:border-[#1AA3B5] transition-all"
            placeholder="Email Address*"
            type="email"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-1/3 px-6 py-3.5 md:py-4 rounded-full text-sm md:text-base font-medium hover:opacity-90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ backgroundColor: "#e86531", color: "#ffffff" }}
          >
            Subscribe
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
