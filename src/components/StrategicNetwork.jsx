function StrategicNetwork() {
  return (
    <section className="bg-navy-deep text-white py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-[0.5em] font-bold text-white mb-8">The Strategic Network</span>
        <h2 className="text-5xl lg:text-6xl mb-12 max-w-3xl leading-tight text-white">
          Join the leadership circle shaping future clinical pathways.
        </h2>
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
          <input
            className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary"
            placeholder="Executive Email Address"
            type="email"
          />
          <button className="bg-primary text-navy-deep px-7 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">
            Subscribe to Briefing
          </button>
        </form>
        <p className="mt-8 text-white/40 text-[10px] uppercase tracking-widest">
          Distributed bi-weekly to 15,000+ Healthcare Leaders
        </p>
      </div>
    </section>
  )
}

export default StrategicNetwork
