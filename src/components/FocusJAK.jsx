function FocusJAK() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Focus 01</h2>
          <h3 className="text-3xl leading-tight">JAK Inhibitor Market Dynamics</h3>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <p className="text-lg leading-relaxed text-slate-500">
            Post-marketing surveillance and subsequent FDA labeling updates have recalibrated the JAK inhibitor pathway. For policy makers, the shift represents a transition from broad utilization to targeted secondary intervention.
          </p>
          <div className="pl-6 border-l-2 border-primary text-lg leading-relaxed text-teal-soft">
            &ldquo;The strategic pivot toward precision selection in refractory RA will redefine payer-provider negotiations in the next 18 months.&rdquo;
          </div>
        </div>
        <div className="lg:col-span-4 bg-navy-deep text-white p-8 rounded-sm">
          <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-primary">Executive Summary</p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="text-primary text-2xl leading-none">01</span>
              <p className="text-sm leading-relaxed text-white/80">Regulatory clarity is driving a resurgence in specialist confidence despite historical safety signals.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-primary text-2xl leading-none">02</span>
              <p className="text-sm leading-relaxed text-white/80">Biosimilar erosion in TNF-alphas is creating budgetary headroom for next-gen oral therapies.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FocusJAK
