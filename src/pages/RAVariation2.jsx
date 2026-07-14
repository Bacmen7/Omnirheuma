import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"
import { raIntro, whatIsRA, symptoms, stages, causes, riskFactors, diagnosis, treatment, daily, earlyResponse, whenToSee, faqs } from "../data/raContent"

const tocItems = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "symptoms", label: "Common symptoms" },
  { id: "stages", label: "Stages of RA" },
  { id: "causes", label: "What causes RA" },
  { id: "diagnosis", label: "How RA is diagnosed" },
  { id: "treatment", label: "Treatment & costs" },
  { id: "managing-ra", label: "Living with RA" },
  { id: "when-to-see", label: "When to see a doctor" },
  { id: "faq", label: "FAQs" },
]

const HIGHLIGHTS = [
  { value: "3x", label: "more common in women" },
  { value: "40–60", label: "typical onset age (India)" },
  { value: "3 mo", label: "golden treatment window" },
]

function RAVariation2() {
  const [activeSection, setActiveSection] = useState("what-is-ra")
  const clickLockRef = useRef(false)

  useEffect(() => {
    document.title = "Rheumatoid Arthritis Guide | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (clickLockRef.current) return
      const y = window.scrollY + 160
      let current = tocItems[0].id
      for (const t of tocItems) {
        const el = document.getElementById(t.id)
        if (el && el.offsetTop <= y) current = t.id
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (id) => {
    setActiveSection(id)
    clickLockRef.current = true
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    window.setTimeout(() => { clickLockRef.current = false }, 900)
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />
      <main>

        {/* ═══════════ HERO with image ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 pt-6 pb-10 sm:px-6 md:pt-8 relative z-10">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium sm:text-[14px]" style={{ color: "rgba(255,255,255,0.68)", marginBottom: "clamp(1.5rem, 6vw, 2.5rem)" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none" }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/conditions" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none" }}>Diseases &amp; Conditions</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>

            <div className="md:max-w-[62%]">
              <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 7vw, 62px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.5px", color: "#ffffff", marginBottom: "1rem" }}>
                Rheumatoid Arthritis
              </h1>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.3, color: "rgba(255,255,255,0.92)", marginBottom: "1.75rem" }}>
                What It Is, Symptoms, Causes &amp; Treatment Options
              </p>

              {/* Highlight stats */}
              <div className="flex flex-wrap gap-3">
                {HIGHLIGHTS.map((h, i) => (
                  <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "4px", padding: "12px 18px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 400, color: "#5fdae8", lineHeight: 1 }}>{h.value}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", marginTop: "4px" }}>{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden md:block absolute right-0 bottom-0 top-0 z-0" style={{ width: "38%" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0f616e 0%, rgba(15,97,110,0.3) 40%, transparent 100%)", zIndex: 2 }} />
            <img src="/images/hero-slide-4.webp" alt="Rheumatoid Arthritis patient" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </header>

        {/* ═══════════ BODY: sticky icon TOC + card content ═══════════ */}
        <section className="bg-ghost">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
            <div className="lg:flex lg:gap-8">

              {/* ── Left: sticky TOC ── */}
              <aside className="hidden lg:block w-[280px] shrink-0">
                <div className="sticky top-[88px] flex flex-col gap-4">
                  <div style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", overflow: "hidden" }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "18px 20px 12px" }}>On this page</p>
                    <nav className="flex flex-col">
                      {tocItems.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="nav-tab text-left flex items-center gap-3 transition-colors"
                            style={{
                              backgroundColor: "transparent",
                              padding: "9px 20px",
                              borderBottom: "1px solid rgba(15,97,110,0.08)",
                            }}
                          >
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#9aa7b8", minWidth: "18px" }}>{String(i + 1).padStart(2, "0")}</span>
                            <span style={{ fontSize: "13.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>{s.label}</span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Doctor card */}
                  <div style={{ backgroundColor: "#0f616e", color: "#ffffff", padding: "20px 22px", borderRadius: "4px" }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                      <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-12 h-12 rounded-full object-cover object-top shrink-0" />
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.62)", marginBottom: "4px" }}>Reviewed by</p>
                        <p style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,0.78)", marginBottom: "14px" }}>Consultant Rheumatologist for RA evaluation and long-term joint care.</p>
                    <Link to="/book-appointment" className="group" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "11px 16px 11px 18px", borderRadius: "9999px", textDecoration: "none" }}>
                      Book Appointment
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* ── Right: card-based content ── */}
              <div className="flex-1 min-w-0 flex flex-col gap-5" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* OVERVIEW card */}
                <article style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)" }}>
                  <p className="text-[18px] leading-[1.8]" style={{ color: "#0f616e", fontFamily: "var(--font-display)", fontStyle: "italic", marginBottom: "1.5rem" }}>{raIntro.hook}</p>
                  {raIntro.paras.map((p, i) => (
                    <p key={i} className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: i < raIntro.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                  ))}
                </article>

                {/* WHAT IS RA card */}
                <article id="what-is-ra" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{whatIsRA.heading}</h2>
                  {whatIsRA.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < whatIsRA.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                  ))}
                </article>

                {/* SYMPTOMS card */}
                <article id="symptoms" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{symptoms.heading}</h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{symptoms.intro}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {symptoms.list.map((s, i) => (
                      <div key={i} style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-[15px] leading-[1.6] text-navy-deep">{s}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">{symptoms.outro}</p>
                </article>

                <ReviewedConsultationCta />

                {/* STAGES card */}
                <article id="stages" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{stages.heading}</h2>
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
                </article>

                {/* CAUSES card */}
                <article id="causes" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{causes.heading}</h2>
                  {causes.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < causes.paras.length - 1 ? "1.25rem" : "2rem" }}>{p}</p>
                  ))}
                  <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>{riskFactors.heading}</h3>
                  <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.list.map((r, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">{r.title}.</strong> {r.desc}</li>
                    ))}
                  </ul>
                </article>

                {/* DIAGNOSIS card */}
                <article id="diagnosis" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{diagnosis.heading}</h2>
                  {diagnosis.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < diagnosis.paras.length - 1 ? "1.25rem" : "2.5rem" }}>{p}</p>
                  ))}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", padding: "1.5rem" }}>
                      <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>{diagnosis.bloodTests.heading}</h3>
                      <p className="text-[16px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>{diagnosis.bloodTests.intro}</p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosis.bloodTests.list.map((t, i) => (<li key={i} className="text-[16px] leading-[1.75] text-navy-deep pl-1">{t}</li>))}
                      </ul>
                    </div>
                    <div style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", padding: "1.5rem" }}>
                      <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>{diagnosis.imaging.heading}</h3>
                      <p className="text-[16px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>{diagnosis.imaging.intro}</p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosis.imaging.list.map((t, i) => (<li key={i} className="text-[16px] leading-[1.75] text-navy-deep pl-1">{t}</li>))}
                      </ul>
                    </div>
                  </div>
                </article>

                {/* TREATMENT card */}
                <article id="treatment" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
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
                </article>

                {/* MANAGING RA card */}
                <article id="managing-ra" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{daily.heading}</h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">{daily.para}</p>
                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{daily.diet.heading}</h3>
                  {daily.diet.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep mb-4">{p}</p>
                  ))}
                </article>

                {/* EARLY RESPONSE — highlighted card */}
                <article style={{ background: "linear-gradient(135deg, #0f616e 0%, #12707e 100%)", borderRadius: "4px", padding: "clamp(28px, 4vw, 44px)", color: "#fff" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#5fdae8", marginBottom: "16px" }}>{earlyResponse.heading}</p>
                  {earlyResponse.paras.map((p, i) => (
                    <p key={i} className={`text-[16px] leading-[1.8] ${i === earlyResponse.paras.length - 1 ? "font-semibold" : ""}`} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "12px" }}>{p}</p>
                  ))}
                </article>

                {/* WHEN TO SEE card */}
                <article id="when-to-see" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.75rem" }}>{whenToSee.heading}</h2>
                  <div style={{ backgroundColor: "#FFF3E8", borderRadius: "4px", padding: "28px", fontFamily: "var(--font-base)" }}>
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
                </article>

                {/* FAQ card */}
                <article id="faq" style={{ backgroundColor: "#ffffff", borderRadius: "4px", border: "1px solid #e6ecf1", padding: "clamp(24px, 4vw, 40px)", scrollMarginTop: "88px" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                      <details key={i} className="group" style={{ backgroundColor: "#f5f7f8", borderRadius: "4px", overflow: "hidden" }}>
                        <summary className="flex items-center justify-between cursor-pointer p-5 list-none [&::-webkit-details-marker]:hidden">
                          <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                          <span className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="#0f616e" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                          </span>
                        </summary>
                        <div className="px-5 pb-5 -mt-1">
                          <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                            {faq.a.split("\n").map((line, j) => (<p key={j}>{line}</p>))}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default RAVariation2
