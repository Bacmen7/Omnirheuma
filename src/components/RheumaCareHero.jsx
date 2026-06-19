function RheumaCareHero() {
  return (
    <section className="relative bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Explore Health Guide
            <br />
            <span className="text-gray-500 font-normal">Reliable, rheumatology-focused medical information.</span>
          </h1>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-20 md:opacity-100">
        <img
          alt="Medical professional consulting patient"
          className="h-full w-full object-cover object-center"
          src="/images/hero-consult.webp"
        />
      </div>
    </section>
  )
}

export default RheumaCareHero
