import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"
import { raIntro, whatIsRA, symptoms, stages, causes, riskFactors, diagnosis, treatment, daily, earlyResponse, whenToSee, faqs } from "../data/raContent"

const SECTIONS = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "symptoms", label: "Symptoms" },
  { id: "stages", label: "Stages" },
  { id: "causes", label: "Causes" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "managing-ra", label: "Living with RA" },
  { id: "faq", label: "FAQs" },
]

/* Section divider — number + rule line + label */
function Divider({ num, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "0 0 2.5rem" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 400, color: "#e0e6ea", lineHeight: 1 }}>{num}</span>
      <div style={{ flex: 1, height: "1px", backgroundColor: "#e0e6ea" }} />
      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#1AA3B5" }}>{label}</span>
    </div>
  )
}

function RAVariation4() {
  const [activeSection, setActiveSection] = useState("what-is-ra")
  const [progress, setProgress] = useState(0)
  const clickLockRef = useRef(false)

  useEffect(() => {
    document.title = "Rheumatoid Arthritis — Complete Guide | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      // reading progress
      const h = document.documentElement
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(100, Math.max(0, scrolled * 100)))

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
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    window.setTimeout(() => { clickLockRef.current = false }, 900)
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-14 text-center relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.65)", marginBottom: "2.5rem" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/conditions" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>Diseases &amp; Conditions</Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>

            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#a0e2e4", marginBottom: "18px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 7vw, 68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-1px", color: "#ffffff", marginBottom: "1.25rem" }}>
              Rheumatoid Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 2vw, 23px)", lineHeight: 1.35, color: "rgba(255,255,255,0.9)", marginBottom: "2rem", maxWidth: "580px", marginLeft: "auto", marginRight: "auto" }}>
              What It Is, Symptoms, Causes &amp; Treatment Options
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3" style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.15)", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              <div className="flex items-center gap-2.5">
                <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-9 h-9 rounded-full object-cover object-top shrink-0" />
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)" }}>Reviewed by <strong style={{ color: "#fff" }}>Dr. Raghavendra H</strong></span>
              </div>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>·</span>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>8 min read</span>
            </div>
          </div>
        </header>

        {/* ═══════════ STICKY SECTION NAV ═══════════ */}
        <div className="sticky top-0 z-40 hidden md:block" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e6ecf1" }}>
          <div className="max-w-4xl mx-auto flex gap-1 px-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {SECTIONS.map((s) => {
              const isActive = activeSection === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="nav-tab shrink-0 whitespace-nowrap transition-colors"
                  style={{
                    padding: "16px 16px",
                    fontSize: "13.5px",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#0f616e" : "#8a94a6",
                    background: "transparent",
                    borderBottom: isActive ? "2px solid #0f616e" : "2px solid transparent",
                    fontFamily: "var(--font-base)",
                  }}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ═══════════ ARTICLE ═══════════ */}
        <article className="max-w-[760px] mx-auto px-5 sm:px-6 pt-14 pb-20" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

          {/* Lead paragraph */}
          <p className="text-[20px] leading-[1.7]" style={{ color: "#0f616e", fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "2rem" }}>
            {raIntro.hook}
          </p>
          {raIntro.paras.map((p, i) => (
            <p key={i} className="text-[17px] leading-[1.85] text-navy-muted" style={{ marginBottom: "1.4rem" }}>{p}</p>
          ))}

          {/* WHAT IS RA */}
          <div id="what-is-ra" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="01" label="The Basics" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{whatIsRA.heading}</h2>
            {whatIsRA.paras.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: "1.4rem" }}>{p}</p>
            ))}
          </div>

          {/* SYMPTOMS */}
          <div id="symptoms" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="02" label="Recognise the Signs" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{symptoms.heading}</h2>
            <p className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: "1.5rem" }}>{symptoms.intro}</p>
            <div className="flex flex-col gap-2.5 mb-8">
              {symptoms.list.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", paddingBottom: "12px", borderBottom: i < symptoms.list.length - 1 ? "1px solid #eef2f5" : "none" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "#1AA3B5", fontWeight: 400, minWidth: "26px" }}>0{i + 1}</span>
                  <span className="text-[16px] leading-[1.65] text-navy-deep">{s}</span>
                </div>
              ))}
            </div>
            <p className="text-[17px] leading-[1.85] text-navy-deep">{symptoms.outro}</p>
          </div>

          {/* Inline CTA */}
          <div style={{ marginTop: "3rem" }}>
            <ReviewedConsultationCta />
          </div>

          {/* STAGES */}
          <div id="stages" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="03" label="Disease Progression" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{stages.heading}</h2>
            <div className="flex flex-col gap-3 mb-6">
              {stages.list.map((item, i) => (
                <div key={item.stage} style={{ display: "flex", gap: "18px", alignItems: "flex-start", backgroundColor: i === stages.list.length - 1 ? "#0f616e" : "#f5f7f8", padding: "18px 22px", borderRadius: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: i === stages.list.length - 1 ? "#5fdae8" : "#0f616e", minWidth: "62px", paddingTop: "2px" }}>{item.stage}</span>
                  <div>
                    <p className="text-[15px] leading-[1.6]" style={{ color: i === stages.list.length - 1 ? "#fff" : "#1a1a1a", fontWeight: 600, marginBottom: "4px" }}>{item.area}</p>
                    <p className="text-[14px] leading-[1.6]" style={{ color: i === stages.list.length - 1 ? "rgba(255,255,255,0.8)" : "#5E5E5E" }}>{item.symptoms}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "4px" }}>
              <p className="text-[14px] leading-[1.65] text-navy-deep">{stages.note}</p>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote style={{ margin: "4rem 0", padding: "0 0 0 28px", borderLeft: "4px solid #E86531" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 30px)", lineHeight: 1.35, color: "#0f616e", fontWeight: 400, letterSpacing: "-0.3px" }}>
              "The initial three-month window is when we can make the biggest difference — early diagnosis changes the entire course of the disease."
            </p>
            <cite style={{ display: "block", marginTop: "16px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#8a94a6", fontStyle: "normal" }}>— Dr. Raghavendra H</cite>
          </blockquote>

          {/* CAUSES */}
          <div id="causes" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="04" label="Why It Happens" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{causes.heading}</h2>
            {causes.paras.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < causes.paras.length - 1 ? "1.4rem" : "2rem" }}>{p}</p>
            ))}
            <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1.25rem" }}>{riskFactors.heading}</h3>
            <div className="flex flex-col gap-0">
              {riskFactors.list.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "14px 0", borderBottom: "1px solid #eef2f5" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#0f616e", minWidth: "170px" }}>{r.title}</span>
                  <span className="text-[15px] leading-[1.6] text-navy-muted">{r.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DIAGNOSIS */}
          <div id="diagnosis" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="05" label="Getting Diagnosed" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{diagnosis.heading}</h2>
            {diagnosis.paras.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < diagnosis.paras.length - 1 ? "1.4rem" : "2rem" }}>{p}</p>
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
          </div>

          {/* TREATMENT */}
          <div id="treatment" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="06" label="Treatment Options" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{treatment.heading}</h2>
            {treatment.paras.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.85] text-navy-deep" style={{ marginBottom: i < treatment.paras.length - 1 ? "1.4rem" : "2rem" }}>{p}</p>
            ))}
            <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1.25rem" }}>{treatment.medications.heading}</h3>
            <div className="flex flex-col gap-3 mb-8">
              {treatment.medications.list.map((med, i) => (
                <div key={i} style={{ borderLeft: "3px solid #1AA3B5", paddingLeft: "18px", paddingTop: "2px", paddingBottom: "2px" }}>
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
          </div>

          {/* MANAGING RA */}
          <div id="managing-ra" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="07" label="Living Well" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>{daily.heading}</h2>
            <p className="text-[17px] leading-[1.85] text-navy-deep mb-8">{daily.para}</p>
            <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>{daily.diet.heading}</h3>
            {daily.diet.paras.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.85] text-navy-deep mb-4">{p}</p>
            ))}
          </div>

          {/* EARLY RESPONSE banner */}
          <div style={{ marginTop: "4.5rem", background: "#0f616e", borderRadius: "4px", padding: "clamp(28px, 4vw, 44px)", color: "#fff" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#5fdae8", marginBottom: "18px" }}>{earlyResponse.heading}</p>
            {earlyResponse.paras.map((p, i) => (
              <p key={i} className={`text-[16px] leading-[1.8] ${i === earlyResponse.paras.length - 1 ? "font-semibold" : ""}`} style={{ color: "rgba(255,255,255,0.9)", marginBottom: "12px" }}>{p}</p>
            ))}
          </div>

          {/* WHEN TO SEE */}
          <div style={{ marginTop: "3rem" }}>
            <div style={{ backgroundColor: "#FFF3E8", borderRadius: "4px", padding: "clamp(24px, 4vw, 36px)", fontFamily: "var(--font-base)" }}>
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

          {/* FAQ */}
          <div id="faq" style={{ marginTop: "4.5rem", scrollMarginTop: "80px" }}>
            <Divider num="08" label="Questions Answered" />
            <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
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

        </article>

        {/* ═══════════ CLOSING CTA ═══════════ */}
        <section style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 400, color: "#fff", marginBottom: "1rem", letterSpacing: "-0.5px" }}>Ready to get started?</h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
              Book a consultation with Dr. Raghavendra H and get a treatment plan tailored to you.
            </p>
            <Link to="/book-appointment" className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90" style={{ backgroundColor: "#E86531", color: "#ffffff", padding: "16px 36px" }}>
              Schedule An Appointment
            </Link>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default RAVariation4
