function SymptomChecker() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy-deep rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>person_search</span>
          </div>
          <div className="relative z-10 lg:w-2/3">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">Unsure about your symptoms?</h2>
            <p className="text-xl text-teal-soft mb-8 leading-relaxed">
              Use our interactive tool to identify common signs of rheumatologic conditions and learn which doctor to see next.
            </p>
            <button className="bg-primary text-navy-deep px-7 py-3 rounded-full font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg">
              Start Symptom Checker
            </button>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <img
              className="rounded-2xl shadow-2xl rotate-3 w-64 h-80 object-cover"
              alt="Medical imaging on a screen"
              src="/images/symptom-checker.webp"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SymptomChecker
