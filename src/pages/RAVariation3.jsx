import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"
import { raIntro, whatIsRA, symptoms, stages, causes, riskFactors, diagnosis, treatment, daily, earlyResponse, whenToSee, faqs } from "../data/raContent"

const navItems = [
  { id: "what-is-ra", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "stages", label: "Stages" },
  { id: "causes", label: "Causes" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "managing-ra", label: "Living with RA" },
  { id: "faq", label: "FAQs" },
]

function RAVariation3() {
  const [activeSection, setActiveSection] = useState("what-is-ra")

  useEffect(() => {
    document.title = "Rheumatoid Arthritis Guide | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-7xl mx-auto px-5 pt-6 pb-10 sm:px-6 md:pt-8">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium sm:text-[14px]" style={{ color: "rgba(255,255,255,0.68)", marginBottom: "2rem" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none" }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/conditions" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none" }}>Diseases &amp; Conditions</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#ffffff", marginBottom: "0.85rem", maxWidth: "760px" }}>
              Rheumatoid Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.25, color: "rgba(255,255,255,0.92)", marginBottom: 0 }}>
              What It Is, Symptoms, Causes &amp; Treatment Options
            </p>
          </div>
        </header>

        {/* ═══════════ STICKY TOP NAV ═══════════ */}
        <div className="sticky top-0 z-40" style={{ backgroundColor: "#0a4f5a" }}>
          <div className="max-w-7xl mx-auto flex gap-2 px-4 py-3 overflow-x-auto sm:px-6" style={{ scrollbarWidth: "none" }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-[14px]"
                  style={{ backgroundColor: isActive ? "#ffffff" : "rgba(255,255,255,0.12)", color: isActive ? "#0f616e" : "#ffffff" }}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ═══════════ CONTENT - wide, centered ═══════════ */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-12 pb-16" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* Reviewer strip */}
            <div className="flex items-center gap-3 pb-8 mb-2" style={{ borderBottom: "1px solid #eaeef3" }}>
              <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-11 h-11 rounded-full object-cover object-top shrink-0" />
              <div>
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#8a94a6" }}>Medically reviewed by</p>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#0f616e" }}>Dr. Raghavendra H · Consultant Rheumatologist</p>
              </div>
            </div>

            {/* OVERVIEW */}
            <div style={{ marginTop: "2.5rem", marginBottom: "3.5rem" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{raIntro.hook}</p>
              {raIntro.paras.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: i < raIntro.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
              ))}
            </div>

            {/* WHAT IS RA */}
            <div id="what-is-ra" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{whatIsRA.heading}</h2>
              {whatIsRA.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < whatIsRA.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
              ))}
            </div>

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{symptoms.heading}</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{symptoms.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {symptoms.list.map((s, i) => (
                  <div key={i} style={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[15px] leading-[1.6] text-navy-deep">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep">{symptoms.outro}</p>
            </div>

            <ReviewedConsultationCta />

            {/* STAGES */}
            <div id="stages" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{stages.heading}</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-left min-w-[680px]">
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
              <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                <p className="text-[14px] leading-[1.65] text-navy-deep">{stages.note}</p>
              </div>
            </div>

            {/* CAUSES */}
            <div id="causes" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{causes.heading}</h2>
              {causes.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < causes.paras.length - 1 ? "1.25rem" : "2rem" }}>{p}</p>
              ))}
              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>{riskFactors.heading}</h3>
              <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.list.map((r, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">{r.title}.</strong> {r.desc}</li>
                ))}
              </ul>
            </div>

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{diagnosis.heading}</h2>
              {diagnosis.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < diagnosis.paras.length - 1 ? "1.25rem" : "2.5rem" }}>{p}</p>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>{diagnosis.bloodTests.heading}</h3>
                  <p className="text-[16px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>{diagnosis.bloodTests.intro}</p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {diagnosis.bloodTests.list.map((t, i) => (<li key={i} className="text-[16px] leading-[1.75] text-navy-deep pl-1">{t}</li>))}
                  </ul>
                </div>
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>{diagnosis.imaging.heading}</h3>
                  <p className="text-[16px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>{diagnosis.imaging.intro}</p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {diagnosis.imaging.list.map((t, i) => (<li key={i} className="text-[16px] leading-[1.75] text-navy-deep pl-1">{t}</li>))}
                  </ul>
                </div>
              </div>
            </div>

            {/* TREATMENT */}
            <div id="treatment" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{treatment.heading}</h2>
              {treatment.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < treatment.paras.length - 1 ? "1.5rem" : "2.5rem" }}>{p}</p>
              ))}
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.medications.heading}</h3>
              <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                {treatment.medications.list.map((med, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{med.name}:</strong> {med.desc}</li>
                ))}
              </ul>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.nonMed.heading}</h3>
              <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                {treatment.nonMed.list.map((item, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.surgery.heading}</h3>
              {treatment.surgery.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>{p}</p>
              ))}
            </div>

            {/* MANAGING RA */}
            <div id="managing-ra" style={{ marginBottom: "3.5rem", scrollMarginTop: "130px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{daily.heading}</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">{daily.para}</p>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>{daily.diet.heading}</h3>
              {daily.diet.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-navy-deep mb-4">{p}</p>
              ))}
            </div>

            {/* EARLY RESPONSE */}
            <div style={{ marginBottom: "3.5rem", marginTop: "4rem" }}>
              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", marginBottom: "2rem", textTransform: "uppercase", borderBottom: "2px solid #c8d0dc", paddingBottom: "0.75rem" }}>{earlyResponse.heading}</h3>
              {earlyResponse.paras.map((p, i) => (
                <p key={i} className={`text-[17px] leading-[1.8] text-navy-deep ${i === earlyResponse.paras.length - 1 ? "font-semibold" : ""}`} style={{ marginBottom: "1rem" }}>{p}</p>
              ))}
            </div>

            {/* WHEN TO SEE */}
            <div style={{ marginBottom: "3rem" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.75rem" }}>{whenToSee.heading}</h2>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: "12px", padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>{whenToSee.cardTitle}</p>
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

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="py-16 md:py-20 bg-ghost" style={{ scrollMarginTop: "130px" }}>
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

export default RAVariation3
