function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top wave -white to navy */}
      <svg
        className="absolute top-0 left-0 w-full"
        style={{ height: "120px" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="none"
      >
        <path
          d="M0 0H1440V40C1200 120 900 80 600 100C300 120 100 60 0 80V0Z"
          fill="#F5F5F5"
        />
      </svg>

      <div className="bg-navy-deep pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left -Text + CTA */}
          <div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.08] tracking-[-1.2px] text-white mb-8">
              Ready to get started?
            </h2>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-base transition-colors"
              >
                Schedule An Appointment
              </a>
              <span className="text-white/70 text-base">
                or{" "}
                <a href="#" className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors">
                  let&apos;s get in touch
                </a>
              </span>
            </div>
          </div>

          {/* Right -Image */}
          <div className="hidden md:block rounded-2xl overflow-hidden">
            <img
              className="w-full h-[360px] object-cover object-center"
              src="/images/hero-doctor.webp"
              alt="Patient using phone for virtual consultation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
