const treatments = [
  {
    icon: "pill",
    title: "JAK Inhibitors",
    description: "Safety profiles, monitoring requirements, and comparative efficacy in clinical practice.",
  },
  {
    icon: "medication",
    title: "NSAID Management",
    description: "Balancing cardiovascular and GI risks in long-term osteoarthritis management.",
  },
  {
    icon: "biotech",
    title: "Biosimilar Protocols",
    description: "Evidence-based transition strategies and patient communication guides.",
  },
]

function TreatmentDeepDives() {
  return (
    <section className="relative overflow-hidden bg-[#171d2b] px-5 pt-10 pb-[100px] md:pt-16 md:pb-[120px] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-[22%] h-72 w-72 rounded-full bg-[#25354d]/42 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[30%] h-80 w-80 rounded-full bg-[#1f2940]/46 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-normal mb-4 text-white">Treatment Deep-dives</h2>
          <p className="text-[#9a9faa] max-w-3xl text-[18px] leading-[1.65]">
            Detailed clinical pathways and prescribing information for the most critical therapies in modern rheumatology.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((item) => (
            <div
              key={item.title}
              className="bg-[#1f2635]/90 border border-white/10 p-8 rounded-3xl hover:bg-[#252f42] transition-colors cursor-pointer group"
            >
              <div className="bg-primary text-navy-deep w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-white/85 mb-6 leading-relaxed">{item.description}</p>
              <span className="text-white font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Read Guide <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatmentDeepDives
