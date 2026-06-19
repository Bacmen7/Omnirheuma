function FocusDiagnostic() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Focus 02</h2>
          <h3 className="text-3xl leading-tight">Diagnostic Precision &amp; Payer Alignment</h3>
        </div>
        <div className="lg:col-span-5 space-y-8">
          <div
            className="aspect-square w-full grayscale opacity-80 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/ultrasound.webp')" }}
          />
          <p className="text-lg leading-relaxed text-slate-500">
            Advanced MSK ultrasound integration is no longer a diagnostic luxury. It has become a prerequisite for early intervention strategies that demonstrably reduce long-term disability claims.
          </p>
        </div>
        <div className="lg:col-span-4 self-center">
          <div className="border-y border-navy-deep/10 py-12">
            <p className="text-4xl text-navy-deep leading-tight mb-6">
              &ldquo;Diagnostic latency remains the single greatest cost driver in rheumatology.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-widest font-bold text-teal-soft">&mdash; Health Policy Review Board</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FocusDiagnostic
