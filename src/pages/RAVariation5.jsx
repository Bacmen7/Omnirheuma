import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope, ChevronDown } from "lucide-react"
import { raIntro, whatIsRA, symptoms, stages, causes, riskFactors, diagnosis, treatment, daily, earlyResponse, whenToSee, faqs } from "../data/raContent"

/* V5 - Accordion / expandable sections. Each major topic is a collapsible panel. */

const SECTIONS = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "symptoms", label: "Symptoms" },
  { id: "stages", label: "Stages" },
  { id: "causes", label: "Causes & Risk" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "managing-ra", label: "Living with RA" },
]

function Panel({ id, num, title, isOpen, onToggle, children }) {
  return (
    <div id={id} style={{ borderBottom: "1px solid #e6ecf1", scrollMarginTop: "80px" }}>
      <button
        onClick={onToggle}
        className="nav-tab w-full text-left flex items-center gap-5 transition-colors"
        style={{ padding: "26px 8px", background: "transparent" }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, color: isOpen ? "#0f616e" : "#c3cdd6", lineHeight: 1, minWidth: "58px" }}>{num}</span>
        <span style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 400, color: "#0f616e", letterSpacing: "-0.5px", lineHeight: 1.2 }}>{title}</span>
        <span style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: isOpen ? "#0f616e" : "#E8F4F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
          <ChevronDown size={20} color={isOpen ? "#ffffff" : "#0f616e"} style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: "0 8px 40px", paddingLeft: "clamp(8px, 6vw, 78px)" }}>
          {children}
        </div>
      )}
    </div>
  )
}

function RAVariation5() {
  const [open, setOpen] = useState({ "what-is-ra": true })

  useEffect(() => {
    document.title = "Rheumatoid Arthritis - Explore | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }))

  const openAndScroll = (id) => {
    setOpen((o) => ({ ...o, [id]: true }))
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }, 60)
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 pt-8 pb-12">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.65)", marginBottom: "2.5rem" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/conditions" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Diseases &amp; Conditions</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#a0e2e4", marginBottom: "14px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 7vw, 66px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-1px", color: "#ffffff", marginBottom: "1rem", maxWidth: "800px" }}>
              Rheumatoid Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 2vw, 23px)", lineHeight: 1.3, color: "rgba(255,255,255,0.9)", marginBottom: 0 }}>
              What It Is, Symptoms, Causes &amp; Treatment Options
            </p>
          </div>
        </header>

        {/* ═══════════ INTRO + QUICK NAV ═══════════ */}
        <section className="bg-ghost">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 py-10">
            <p className="text-[19px] leading-[1.7]" style={{ color: "#0f616e", fontFamily: "var(--font-display)", marginBottom: "1.5rem", maxWidth: "760px" }}>{raIntro.hook}</p>
            {raIntro.paras.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.2rem", maxWidth: "760px" }}>{p}</p>
            ))}
            {/* quick nav chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {SECTIONS.map((s) => (
                <button key={s.id} onClick={() => openAndScroll(s.id)} className="nav-tab transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid #d6e0e6", color: "#0f616e", padding: "9px 18px", borderRadius: "9999px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ACCORDION PANELS ═══════════ */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 py-8" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>
            <div style={{ borderTop: "2px solid #0f2e33" }}>

              <Panel id="what-is-ra" num="01" title={whatIsRA.heading} isOpen={!!open["what-is-ra"]} onToggle={() => toggle("what-is-ra")}>
                {whatIsRA.paras.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < whatIsRA.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                ))}
              </Panel>

              <Panel id="symptoms" num="02" title={symptoms.heading} isOpen={!!open["symptoms"]} onToggle={() => toggle("symptoms")}>
                <p className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{symptoms.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {symptoms.list.map((s, i) => (
                    <div key={i} style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-[15px] leading-[1.6] text-navy-deep">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[17px] leading-[1.85] text-navy-deep">{symptoms.outro}</p>
                <div style={{ marginTop: "2rem" }}><ReviewedConsultationCta /></div>
              </Panel>

              <Panel id="stages" num="03" title={stages.heading} isOpen={!!open["stages"]} onToggle={() => toggle("stages")}>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-left min-w-[620px]">
                    <thead>
                      <tr style={{ backgroundColor: "#e0f3f5" }}>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Stage</th>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Area affected</th>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Symptoms</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stages.list.map((item) => (
                        <tr key={item.stage} className="border-b border-[#dadfe8]">
                          <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{item.stage}</td>
                          <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item.area}</td>
                          <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item.symptoms}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "4px" }}>
                  <p className="text-[14px] leading-[1.65] text-navy-deep">{stages.note}</p>
                </div>
              </Panel>

              <Panel id="causes" num="04" title={causes.heading} isOpen={!!open["causes"]} onToggle={() => toggle("causes")}>
                {causes.paras.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < causes.paras.length - 1 ? "1.25rem" : "2rem" }}>{p}</p>
                ))}
                <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1.25rem" }}>{riskFactors.heading}</h3>
                <div className="flex flex-col gap-0">
                  {riskFactors.list.map((r, i) => (
                    <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", padding: "14px 0", borderBottom: "1px solid #eef2f5" }}>
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#0f616e", minWidth: "170px" }}>{r.title}</span>
                      <span className="text-[15px] leading-[1.6] text-navy-muted" style={{ flex: 1 }}>{r.desc}</span>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel id="diagnosis" num="05" title={diagnosis.heading} isOpen={!!open["diagnosis"]} onToggle={() => toggle("diagnosis")}>
                {diagnosis.paras.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < diagnosis.paras.length - 1 ? "1.25rem" : "2rem" }}>{p}</p>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", padding: "24px" }}>
                    <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e", fontSize: "1.15rem" }}>{diagnosis.bloodTests.heading}</h3>
                    <p className="text-[15px] leading-[1.7] text-navy-muted" style={{ marginBottom: "0.9rem" }}>{diagnosis.bloodTests.intro}</p>
                    <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
                      {diagnosis.bloodTests.list.map((t, i) => (<li key={i} className="text-[15px] leading-[1.6] text-navy-deep pl-1">{t}</li>))}
                    </ul>
                  </div>
                  <div style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", padding: "24px" }}>
                    <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e", fontSize: "1.15rem" }}>{diagnosis.imaging.heading}</h3>
                    <p className="text-[15px] leading-[1.7] text-navy-muted" style={{ marginBottom: "0.9rem" }}>{diagnosis.imaging.intro}</p>
                    <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
                      {diagnosis.imaging.list.map((t, i) => (<li key={i} className="text-[15px] leading-[1.6] text-navy-deep pl-1">{t}</li>))}
                    </ul>
                  </div>
                </div>
              </Panel>

              <Panel id="treatment" num="06" title={treatment.heading} isOpen={!!open["treatment"]} onToggle={() => toggle("treatment")}>
                {treatment.paras.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < treatment.paras.length - 1 ? "1.4rem" : "2rem" }}>{p}</p>
                ))}
                <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1.25rem" }}>{treatment.medications.heading}</h3>
                <div className="flex flex-col gap-3 mb-8">
                  {treatment.medications.list.map((med, i) => (
                    <div key={i} style={{ borderLeft: "3px solid #1AA3B5", paddingLeft: "18px" }}>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", marginBottom: "4px" }}>{med.name}</p>
                      <p className="text-[15px] leading-[1.65] text-navy-muted">{med.desc}</p>
                    </div>
                  ))}
                </div>
                <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.nonMed.heading}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {treatment.nonMed.list.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-[15px] leading-[1.6] text-navy-deep"><strong className="font-semibold">{item.title}:</strong> {item.desc}</span>
                    </div>
                  ))}
                </div>
                <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.surgery.heading}</h3>
                {treatment.surgery.paras.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: "0.5rem" }}>{p}</p>
                ))}
              </Panel>

              <Panel id="managing-ra" num="07" title={daily.heading} isOpen={!!open["managing-ra"]} onToggle={() => toggle("managing-ra")}>
                <p className="text-[17px] leading-[1.85] text-navy-deep mb-8">{daily.para}</p>
                <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{daily.diet.heading}</h3>
                {daily.diet.paras.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-navy-deep mb-4">{p}</p>
                ))}
              </Panel>

            </div>

            {/* EARLY RESPONSE */}
            <div style={{ marginTop: "3.5rem", background: "#0f616e", borderRadius: "4px", padding: "clamp(28px, 4vw, 44px)", color: "#fff" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#5fdae8", marginBottom: "18px" }}>{earlyResponse.heading}</p>
              {earlyResponse.paras.map((p, i) => (
                <p key={i} className={`text-[16px] leading-[1.8] ${i === earlyResponse.paras.length - 1 ? "font-semibold" : ""}`} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "12px" }}>{p}</p>
              ))}
            </div>

            {/* WHEN TO SEE */}
            <div style={{ marginTop: "2.5rem" }}>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: "4px", padding: "clamp(24px, 4vw, 36px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>{whenToSee.cardTitle}</p>
                </div>
                <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {whenToSee.list.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "4px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#E86531" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontSize: "15px", lineHeight: 1.7, color: "#1a1a1a" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/book-appointment" className="group" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none" }}>
                  Book a Specialist Visit
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-ghost flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      {faq.a.split("\n").map((line, j) => (<p key={j}>{line}</p>))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default RAVariation5
