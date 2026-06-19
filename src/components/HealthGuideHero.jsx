function HealthGuideHero() {
  return (
    <section className="relative bg-white overflow-hidden" style={{ marginTop: "-2px" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="pt-8 pb-4 md:py-6 relative z-10">
            <h1 className="text-4xl md:text-5xl text-navy-deep leading-tight" style={{ letterSpacing: "-0.8px" }}>
              Explore Health Guide<br />
              <span className="text-navy-muted">Reliable, rheumatology-focused medical<br />information.</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <img
              alt="Medical professional consulting patient"
              className="w-full h-full object-cover object-center"
              src="/images/mango.webp"
            />
          </div>
        </div>
      </div>
      {/* Mobile background image */}
      <div className="absolute right-0 top-0 h-full w-full md:hidden opacity-20">
        <img
          alt=""
          className="h-full w-full object-cover object-center"
          src="/images/mango.webp"
        />
      </div>
    </section>
  )
}

export default HealthGuideHero
