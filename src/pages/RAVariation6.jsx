import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"
import { raIntro, whatIsRA, symptoms, stages, causes, riskFactors, diagnosis, treatment, daily, earlyResponse, whenToSee, faqs } from "../data/raContent"

/* V6 — Documentation style. Numbered left rail + wide flowing content with section numbers. */

const SECTIONS = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "symptoms", label: "Common symptoms" },
  { id: "stages", label: "Stages of RA" },
  { id: "causes", label: "Causes & risk factors" },
  { id: "diagnosis", label: "How it's diagnosed" },
  { id: "treatment", label: "Treatment options" },
  { id: "managing-ra", label: "Living with RA" },
  { id: "when-to-see", label: "When to see a doctor" },
  { id: "faq", label: "FAQs" },
]

function SectionHead({ num, children }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "1.5rem" }}>
      <span style={{ fontFamily: "var(--font-base)", fontSize: "13px", fontWeight: 700, color: "#1AA3B5", letterSpacing: "0.05em", paddingTop: "6px" }}>{num}</span>
      <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", margin: 0 }}>{children}</h2>
    </div>
  )
}

function RAVariation6() {
  const [activeSection, setActiveSection] = useState("what-is-ra")
  const clickLockRef = useRef(false)

  useEffect(() => {
    document.title = "Rheumatoid Arthritis — Reference | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (clickLockRef.current) return
      const y = window.scrollY + 160
      let current = SECTIONS[0].id
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.offsetTop <= y) current = s.id
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

        {/* ═══════════ HERO — compact ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-7 pb-10">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/conditions" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Diseases &amp; Conditions</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6.5vw, 58px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.8px", color: "#ffffff", marginBottom: "0.85rem" }}>
              Rheumatoid Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2vw, 21px)", lineHeight: 1.3, color: "rgba(255,255,255,0.9)", marginBottom: 0 }}>
              What It Is, Symptoms, Causes &amp; Treatment Options
            </p>
          </div>
        </header>

        {/* ═══════════ BODY: numbered left rail + content ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
            <div className="lg:flex lg:gap-16">

              {/* ── Left: numbered rail ── */}
              <aside className="hidden lg:block w-[300px] shrink-0">
                <div className="sticky top-[88px] flex flex-col gap-5">
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#8a94a6", marginBottom: "14px", paddingLeft: "2px" }}>Contents</p>
                    <nav className="flex flex-col">
                      {SECTIONS.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="nav-tab text-left flex items-start gap-4 transition-colors"
                            style={{ padding: "10px 2px", background: "transparent" }}
                          >
                            <span style={{ fontSize: "13px", fontWeight: 700, color: isActive ? "#1AA3B5" : "#c3cdd6", minWidth: "22px", paddingTop: "2px" }}>{String(i + 1).padStart(2, "0")}</span>
                            <span style={{ fontSize: "15px", color: isActive ? "#0f616e" : "#5E5E5E", fontWeight: isActive ? 700 : 400, lineHeight: 1.4 }}>{s.label}</span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>

                  <div style={{ borderTop: "1px solid #e6ecf1", paddingTop: "20px" }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                      <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-11 h-11 rounded-full object-cover object-top shrink-0" />
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8a94a6" }}>Reviewed by</p>
                        <p style={{ fontSize: "14px", fontWeight: 700, color: "#0f616e", lineHeight: 1.2 }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <Link to="/book-appointment" style={{ display: "inline-block", backgroundColor: "#E86531", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "10px 18px", borderRadius: "9999px", textDecoration: "none" }}>
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </aside>

              {/* ── Right: content ── */}
              <div className="flex-1 min-w-0 max-w-[760px]" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* Intro */}
                <div style={{ marginBottom: "3.5rem" }}>
                  <p className="text-[18px] leading-[1.8]" style={{ color: "#0f616e", fontFamily: "var(--font-display)", marginBottom: "1.5rem" }}>{raIntro.hook}</p>
                  {raIntro.paras.map((p, i) => (
                    <p key={i} className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: i < raIntro.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                  ))}
                </div>

                {/* WHAT IS RA */}
                <div id="what-is-ra" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="01">{whatIsRA.heading}</SectionHead>
                  {whatIsRA.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < whatIsRA.paras.length - 1 ? "1.25rem" : 0 }}>{p}</p>
                  ))}
                </div>

                {/* SYMPTOMS */}
                <div id="symptoms" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="02">{symptoms.heading}</SectionHead>
                  <p className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{symptoms.intro}</p>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.list.map((s, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{s}</li>))}
                  </ul>
                  <p className="text-[17px] leading-[1.85] text-navy-deep">{symptoms.outro}</p>
                </div>

                <ReviewedConsultationCta />

                {/* STAGES */}
                <div id="stages" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="03">{stages.heading}</SectionHead>
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
                </div>

                {/* CAUSES */}
                <div id="causes" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="04">{causes.heading}</SectionHead>
                  {causes.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < causes.paras.length - 1 ? "1.25rem" : "2rem" }}>{p}</p>
                  ))}
                  <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>{riskFactors.heading}</h3>
                  <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.list.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">{r.title}.</strong> {r.desc}</li>))}
                  </ul>
                </div>

                {/* DIAGNOSIS */}
                <div id="diagnosis" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="05">{diagnosis.heading}</SectionHead>
                  {diagnosis.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < diagnosis.paras.length - 1 ? "1.25rem" : "2.5rem" }}>{p}</p>
                  ))}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                </div>

                {/* TREATMENT */}
                <div id="treatment" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="06">{treatment.heading}</SectionHead>
                  {treatment.paras.map((p, i) => (
                    <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < treatment.paras.length - 1 ? "1.5rem" : "2.5rem" }}>{p}</p>
                  ))}
                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.medications.heading}</h3>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                    {treatment.medications.list.map((med, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{med.name}:</strong> {med.desc}</li>))}
                  </ul>
                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.nonMed.heading}</h3>
                  <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                    {treatment.nonMed.list.map((item, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{item.title}:</strong> {item.desc}</li>))}
                  </ul>
                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{treatment.surgery.heading}</h3>
                  {treatment.surgery.paras.map((p, i) => (<p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: "0.5rem" }}>{p}</p>))}
                </div>

                {/* MANAGING RA */}
                <div id="managing-ra" style={{ marginBottom: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="07">{daily.heading}</SectionHead>
                  <p className="text-[17px] leading-[1.85] text-navy-deep mb-8">{daily.para}</p>
                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{daily.diet.heading}</h3>
                  {daily.diet.paras.map((p, i) => (<p key={i} className="text-[17px] leading-[1.85] text-navy-deep mb-4">{p}</p>))}
                </div>

                {/* EARLY RESPONSE */}
                <div style={{ marginBottom: "3.5rem", marginTop: "4rem" }}>
                  <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", marginBottom: "2rem", textTransform: "uppercase", borderBottom: "2px solid #c8d0dc", paddingBottom: "0.75rem" }}>{earlyResponse.heading}</h3>
                  {earlyResponse.paras.map((p, i) => (
                    <p key={i} className={`text-[17px] leading-[1.85] text-navy-deep ${i === earlyResponse.paras.length - 1 ? "font-semibold" : ""}`} style={{ marginBottom: "1rem" }}>{p}</p>
                  ))}
                </div>

                {/* WHEN TO SEE */}
                <div id="when-to-see" style={{ marginBottom: "2rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="08">{whenToSee.heading}</SectionHead>
                  <div style={{ backgroundColor: "#FFF3E8", borderRadius: "4px", padding: "28px" }}>
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

                {/* FAQ */}
                <div id="faq" style={{ marginTop: "3.5rem", scrollMarginTop: "88px" }}>
                  <SectionHead num="09">Frequently Asked Questions</SectionHead>
                  <div style={{ borderTop: "2px solid #0f2e33" }}>
                    {faqs.map((faq, i) => (
                      <details key={i} style={{ borderBottom: "1px solid #e6ecf1", padding: "18px 0" }}>
                        <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                          <span className="text-[16px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                          <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E8F4F8" }}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="#0f616e" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                          </span>
                        </summary>
                        <div className="pt-3 -mt-1">
                          <div className="text-[15px] text-navy-muted leading-relaxed flex flex-col gap-3">
                            {faq.a.split("\n").map((line, j) => (<p key={j}>{line}</p>))}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default RAVariation6
