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

// Each tab maps to exactly one section id. Scroll detection uses these same ids in order.
const TABS = [
  { label: "Overview", id: "what-is-ra" },
  { label: "Causes & Symptoms", id: "symptoms" },
  { label: "Diagnosis", id: "diagnosis" },
  { label: "Treatment", id: "treatment" },
  { label: "Living With RA", id: "managing-ra" },
]

function RAVariation1() {
  const [activeTab, setActiveTab] = useState("what-is-ra")
  const clickLockRef = useRef(false)

  useEffect(() => {
    document.title = "Rheumatoid Arthritis Guide | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (clickLockRef.current) return
      const y = window.scrollY + 160
      let current = TABS[0].id
      for (const t of TABS) {
        const el = document.getElementById(t.id)
        if (el && el.offsetTop <= y) current = t.id
      }
      setActiveTab(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (id) => {
    setActiveTab(id)                 // highlight immediately on click
    clickLockRef.current = true      // block scroll handler from overriding
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

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-7xl mx-auto px-5 pt-6 pb-0 sm:px-6 md:pt-8">
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium leading-snug sm:text-[14px]"
              style={{ color: "rgba(255,255,255,0.68)", marginBottom: "clamp(1.5rem, 6vw, 2rem)" }}
            >
              <Link to="/" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none" }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/conditions" style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none" }}>Diseases &amp; Conditions</Link>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#ffffff", marginBottom: "0.85rem" }}>
                  Rheumatoid Arthritis
                </h1>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.2, color: "rgba(255,255,255,0.92)", marginBottom: 0 }}>
                  What It Is, Symptoms, Causes &amp; Treatment Options
                </p>
              </div>
              <div className="hidden md:block" style={{ width: "420px", height: "280px", flexShrink: 0, overflow: "hidden", alignSelf: "flex-end" }}>
                <img src="/images/hero-slide-4.webp" alt="Rheumatoid Arthritis" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              </div>
            </div>
          </div>

          {/* Nav Tabs - underline style */}
          <div style={{ backgroundColor: "#0f616e", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <div className="max-w-7xl mx-auto flex px-5 overflow-x-auto sm:px-6" style={{ scrollbarWidth: "none" }}>
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab
                return (
                  <button
                    key={tab.label}
                    onClick={() => scrollToSection(tab.id)}
                    className="nav-tab shrink-0 whitespace-nowrap transition-colors"
                    style={{
                      padding: "18px 26px",
                      fontSize: "14px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                      background: "transparent",
                      borderBottom: isActive ? "3px solid #5fdae8" : "3px solid transparent",
                      fontFamily: "var(--font-base)",
                    }}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </header>

        {/* ═══════════ ARTICLE BODY + TOC ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-1 md:pt-4 md:pb-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* OVERVIEW */}
                <div id="overview" style={{ marginBottom: "3.5rem" }}>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{raIntro.hook}</p>
                  {raIntro.paras.map((p, i) => (
                    <p key={i} className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: i < raIntro.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                  ))}
                </div>

                {/* WHAT IS RA */}
                <div id="what-is-ra" style={{ marginBottom: "3.5rem" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{whatIsRA.heading}</h2>
                  {whatIsRA.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < whatIsRA.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                  ))}
                </div>

                {/* SYMPTOMS */}
                <div id="symptoms" style={{ marginBottom: "3.5rem" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{symptoms.heading}</h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{symptoms.intro}</p>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.list.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{s}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">{symptoms.outro}</p>
                </div>

                {/* INLINE CTA */}
                <ReviewedConsultationCta />

                {/* STAGES */}
                <div id="stages" style={{ marginBottom: "3.5rem" }}>
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
                <div id="causes" style={{ marginBottom: "3.5rem" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{causes.heading}</h2>
                  {causes.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < causes.paras.length - 1 ? "1.25rem" : "2rem" }}>{p}</p>
                  ))}
                  <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "1.75rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>{riskFactors.heading}</h3>
                  <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.list.map((r, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">{r.title}.</strong> {r.desc}</li>
                    ))}
                  </ul>
                </div>

                {/* DIAGNOSIS */}
                <div id="diagnosis" style={{ marginBottom: "3.5rem" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{diagnosis.heading}</h2>
                  {diagnosis.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: i < diagnosis.paras.length - 1 ? "1.25rem" : "2.5rem" }}>{p}</p>
                  ))}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>{diagnosis.bloodTests.heading}</h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>{diagnosis.bloodTests.intro}</p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosis.bloodTests.list.map((t, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>{diagnosis.imaging.heading}</h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>{diagnosis.imaging.intro}</p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosis.imaging.list.map((t, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* TREATMENT */}
                <div id="treatment" style={{ marginBottom: "3.5rem" }}>
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
                <div id="managing-ra" style={{ marginBottom: "3.5rem" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{daily.heading}</h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">{daily.para}</p>
                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>{daily.diet.heading}</h3>
                  {daily.diet.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.8] text-navy-deep mb-4">{p}</p>
                  ))}
                </div>

                {/* EARLY RESPONSE */}
                <div style={{ marginBottom: "5.5rem", marginTop: "4.5rem" }}>
                  <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", marginBottom: "2rem", textTransform: "uppercase", borderBottom: "2px solid #c8d0dc", paddingBottom: "0.75rem" }}>{earlyResponse.heading}</h3>
                  {earlyResponse.paras.map((p, i) => (
                    <p key={i} className={`text-[17px] leading-[1.8] text-navy-deep ${i === earlyResponse.paras.length - 1 ? "font-semibold" : ""}`} style={{ marginBottom: "1rem" }}>{p}</p>
                  ))}
                </div>

                {/* WHEN TO SEE */}
                <div id="when-to-see" style={{ marginBottom: "4rem", marginTop: "6rem" }}>
                  <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "2rem" }}>{whenToSee.heading}</h2>
                  <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
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

                <hr className="border-none border-t border-[#dcdcdc] mt-12" />
              </div>

              {/* ── Right: TOC ── */}
              <aside className="hidden lg:block w-[360px] shrink-0" style={{ marginLeft: "auto" }}>
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 100px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="guide-sidebar-scroll" style={{ backgroundColor: "#E8F4F8", overflowY: "auto", overflowX: "hidden", flex: "1 1 auto", minHeight: 0 }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocItems.map((s, i) => {
                        const isActive = activeTab === s.id
                        return (
                          <button key={s.id} onClick={() => scrollToSection(s.id)} className="nav-tab text-left flex items-center gap-3 pr-5 transition-colors" style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "13px", paddingBottom: "13px", borderBottom: "1px solid rgba(15,97,110,0.08)", borderRadius: 0, appearance: "none", WebkitAppearance: "none" }}>
                            <div style={{ width: 3, alignSelf: "stretch", backgroundColor: isActive ? "#0f616e" : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#9aa7b8", minWidth: "18px" }}>{String(i + 1).padStart(2, "0")}</span>
                            <span style={{ fontSize: "15.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.45 }}>{s.label}</span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>
                  <div style={{ backgroundColor: "#0f616e", color: "#ffffff", padding: "20px 22px", fontFamily: "var(--font-base)", flex: "0 0 auto" }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                      <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-12 h-12 rounded-full object-cover object-top bg-[#f0cfc4] shrink-0" />
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.62)", marginBottom: "5px" }}>Medically reviewed by</p>
                        <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.2, color: "#ffffff" }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,0.78)", marginBottom: "14px" }}>Consultant Rheumatologist for rheumatoid arthritis evaluation and long-term joint care.</p>
                    <Link to="/book-appointment" className="group" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "11px 16px 11px 18px", borderRadius: "9999px", textDecoration: "none" }}>
                      Book Appointment
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="py-16 md:py-20 bg-ghost">
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

export default RAVariation1
