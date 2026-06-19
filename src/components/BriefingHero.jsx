function BriefingHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Volume IV &bull; Q4 2023</span>
          </div>
          <h2 className="text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-8">
            The State of Biologic Innovation
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed mb-10 font-light">
            A high-level synthesis of therapeutic shifts, regulatory tailwinds, and the evolving landscape of value-based rheumatology care.
          </p>
          <div className="flex items-center gap-8 text-xs uppercase tracking-widest font-bold">
            <span className="text-teal-soft">8 Min Synthesis</span>
            <span className="text-navy-deep/30">|</span>
            <span className="text-teal-soft">Strategic Implications Inside</span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div
            className="aspect-[16/10] rounded-sm overflow-hidden bg-slate-100 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/featured-main.webp')" }}
          />
        </div>
      </div>
    </section>
  )
}

export default BriefingHero
