import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const diagnosisSteps = [
  {
    title: "Symptom review",
    desc: "Which joints, how long, morning stiffness, family history",
    img: "/treatmnetguide/joint.webp",
  },
  {
    title: "Physical examination",
    desc: "Joint count, swelling, tenderness, range of motion",
    img: "/treatmnetguide/knee.webp",
  },
  {
    title: "Blood tests",
    desc: "RF, Anti-CCP, CRP, ESR, ANA -inflammation and antibody markers",
    img: "/treatmnetguide/blood_test.webp",
  },
  {
    title: "Imaging",
    desc: "X-ray, MRI, or ultrasound -to see joint damage and inflammation",
    img: "/treatmnetguide/xray.webp",
  },
]

const treatmentCards = [
  {
    title: "Medications",
    desc: "Pain relief, disease-modifying drugs, biologic therapies, and JAK inhibitors -the foundation of treatment for most rheumatic conditions.",
    img: "/treatmnetguide/blog1.webp",
  },
  {
    title: "Injections & Procedures",
    desc: "Corticosteroid injections, hyaluronic acid, and joint aspiration -fast, localised relief delivered directly to the affected joint.",
    img: "/treatmnetguide/blog2.webp",
  },
  {
    title: "Surgery",
    desc: "Joint replacement, synovectomy, and spinal surgery -considered only when all other treatments have not provided enough relief.",
    img: "/treatmnetguide/blog3.webp",
  },
]

const journeySteps = [
  {
    title: "1. Your first appointment",
    content: "Your rheumatologist takes a full history, examines your joints, and arranges blood tests and imaging. They will explain what they think is happening and outline a treatment plan. Bring a list of your symptoms and any questions.",
    list: null,
  },
  {
    title: "2. Starting your first medication",
    content: "Most patients start Methotrexate -a weekly tablet or injection. It takes 6–12 weeks to work. Folic acid and a stomach tablet are prescribed alongside it.",
    list: [
      "Take once a week -always the same day",
      "Regular blood tests every 3 months",
      "Do not stop without speaking to your rheumatologist",
    ],
  },
  {
    title: "3. Your 3-month review",
    content: "Your rheumatologist scores your disease activity and reviews your blood results. If the target has not been reached, the dose is increased or a second medicine added. This continues every 3 months until remission.",
    list: null,
  },
  {
    title: "4. If tablets are not enough -biologics",
    content: "If conventional tablets have not worked after an adequate trial, biologic therapy is considered. These are injected medicines given fortnightly or monthly that target specific proteins driving the inflammation.",
    list: null,
  },
  {
    title: "5. Reaching remission",
    content: "Remission means no active joint swelling and normal inflammation markers. Most patients can then be maintained on a lower dose. Stopping treatment entirely is sometimes possible after prolonged remission.",
    list: null,
  },
]

const conditionRows = [
  { name: "Rheumatoid Arthritis", tag: "Autoimmune", tagColor: "#0f616e", tagBg: "#e0f3f5", first: "Methotrexate", next: "Biologic therapy or JAK inhibitor" },
  { name: "Osteoarthritis", tag: "Degenerative", tagColor: "#b45309", tagBg: "#fef3c7", first: "Physiotherapy + pain relief", next: "Joint injection, then joint replacement" },
  { name: "Ankylosing Spondylitis", tag: "Spinal", tagColor: "#9b1c1c", tagBg: "#fee2e2", first: "NSAIDs (continuous) + physiotherapy", next: "Secukinumab (biologic)" },
  { name: "Psoriatic Arthritis", tag: "Psoriatic", tagColor: "#5b21b6", tagBg: "#ede9fe", first: "Methotrexate", next: "IL-17 biologic -treats skin and joints" },
  { name: "Gout", tag: "Crystal", tagColor: "#0f616e", tagBg: "#e0f3f5", first: "Colchicine (attack) + diet change", next: "Allopurinol -long-term uric acid control" },
  { name: "Lupus (SLE)", tag: "Autoimmune", tagColor: "#5b21b6", tagBg: "#ede9fe", first: "Hydroxychloroquine", next: "Steroids, immunosuppressives, biologics" },
]

/* ─────────────────────────────────────────────
   ACCORDION
   ───────────────────────────────────────────── */

function Accordion({ steps }) {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div >
      {steps.map((step, i) => {
        const isOpen = openIdx === i
        return (
          <div key={i} style={{ borderBottom: "1.5px solid #e0e0e0" }}>
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between text-left cursor-pointer"
              style={{ padding: "1rem 0" }}
            >
              <h4 style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "14px", color: "#0f616e" }}>
                {step.title}
              </h4>
              <svg
                className="w-4 h-4 flex-shrink-0"
                style={{
                  color: "#9ca3af",
                  transition: "transform 0.25s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div style={{ paddingBottom: "1rem" }}>
                <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                  {step.content}
                </p>
                {step.list && (
                  <ul style={{ listStyle: "none", marginTop: "0.6rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {step.list.map((item, j) => (
                      <li key={j} className="text-sm text-navy-deep" style={{ fontFamily: "var(--font-base)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "#1AA3B5", flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────
   ARROW BUTTON (same as landing page)
   ───────────────────────────────────────────── */

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer flex-shrink-0"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */

function TreatmentGuides() {
  const cardScrollRef = useRef(null)
  const diagnosisScrollRef = useRef(null)

  const scrollCards = (direction) => {
    if (cardScrollRef.current) {
      cardScrollRef.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" })
    }
  }

  const scrollDiagnosis = (direction) => {
    if (diagnosisScrollRef.current) {
      diagnosisScrollRef.current.scrollBy({ left: direction === "left" ? -260 : 260, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-background-light text-navy-deep antialiased" style={{ overflowX: "clip" }}>
      <Header />

      {/* ═══ SECTION 1 -HERO ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0f616e" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ paddingTop: "5rem", paddingBottom: "7rem" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4", marginBottom: "16px" }}>
              Treatment Guide
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "1.25rem",
              }}
            >
              Understanding Your Treatment
            </h1>
            <p
              style={{
                fontFamily: "var(--font-base)",
                fontSize: "18px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Rheumatic conditions are highly treatable. Everything you need to know about diagnosis, medications, injections, and surgery, explained simply.
            </p>
          </div>
        </div>
        {/* Blog-style absolute wave */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
          <svg style={{ position: "relative", display: "block", width: "calc(100% + 1.3px)", height: "60px" }} viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ═══ SECTION 2 -DIAGNOSIS ═══ */}
      <section id="diagnosis" className="bg-white" style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
            <p
              style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem" }}
            >
              Step One
            </p>
            <h2
              className="leading-[1.1] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.5px",
                lineHeight: 1.12,
                marginBottom: "0.75rem",
              }}
            >
              How is it diagnosed?
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, textAlign: "center", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Your rheumatologist uses four key steps to build the full picture. Click any step to learn more.
            </p>
          </div>

          {/* Split card */}
          <div

            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            style={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Left -dark */}
            <div className="flex flex-col justify-center" style={{ backgroundColor: "#0f616e", padding: "clamp(1.5rem, 4vw, 3rem)" }}>
              <h3
                className="leading-[1.1] tracking-tight text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: "-0.5px",
                  marginBottom: "0.75rem",
                  color: "#ffffff",
                }}
              >
                Getting the <span style={{ color: "#1AA3B5" }}>right diagnosis</span>
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "28px",
                  fontFamily: "var(--font-base)",
                }}
              >
                There is no single test for most rheumatic conditions. Diagnosis is built from your symptoms, an examination, blood tests, and imaging -together they tell the full story.
              </p>
              <a
                href="#"
                className="inline-flex mt-2 self-start items-center gap-2.5 rounded-full pl-7 pr-5 py-3.5 text-[15px] font-bold tracking-wide text-white no-underline transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#e86531", fontFamily: "var(--font-base)" }}
              >
                Book your first appointment
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Right -steps */}
            <div className="bg-white" style={{ padding: "clamp(1.25rem, 4vw, 2.5rem)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: "-0.5px",
                  color: "#0f616e",
                  marginBottom: "1.2rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1.5px solid #e0e0e0",
                }}
              >
                What happens at your appointment
              </h3>
              <div className="flex items-center justify-between gap-3 mb-5">
                <p className="text-navy-muted" style={{ fontFamily: "var(--font-base)", fontSize: "16px", lineHeight: 1.75 }}>
                  Swipe through the four steps your rheumatologist uses to diagnose your condition.
                </p>
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <ArrowButton direction="left" onClick={() => scrollDiagnosis("left")} />
                  <ArrowButton direction="right" onClick={() => scrollDiagnosis("right")} />
                </div>
              </div>
              <div
                ref={diagnosisScrollRef}
                className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 scroll-smooth"
              >
                {diagnosisSteps.map((step, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group w-[210px] min-w-[210px] sm:w-[230px] sm:min-w-[230px] flex-shrink-0 overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white text-left no-underline transition-all duration-200 hover:-translate-y-1 hover:border-[#0f616e]"
                  >
                    <div className="h-[165px] overflow-hidden bg-[#f5f5f5]">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-3">
                      <h4
                        className="text-navy-deep"
                        style={{ fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 600, lineHeight: 1.4, marginBottom: "6px" }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-navy-muted"
                        style={{ fontFamily: "var(--font-base)", fontSize: "13px", lineHeight: 1.55 }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="sm:hidden flex items-center justify-center gap-2 mt-4">
                <ArrowButton direction="left" onClick={() => scrollDiagnosis("left")} />
                <ArrowButton direction="right" onClick={() => scrollDiagnosis("right")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 -TREATMENT OPTIONS ═══ */}
      <section id="treatment" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
            <p
              style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem" }}
            >
              Step Two
            </p>
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem" }}
            >
              Personalised treatment
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, marginBottom: "2rem" }}>
              Treatment is tailored to your condition and how active the disease is.<br />There are three main approaches -most patients need a combination.
            </p>
          </div>

          {/* Cards -carousel on mobile, grid on desktop (same pattern as SuccessStories) */}
          <div
            ref={cardScrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
          >
            {treatmentCards.map((card, i) => (
              <a
                key={i}
    
                href="#"
                className="w-[300px] min-w-[300px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink flex flex-col bg-white overflow-hidden group"
                style={{
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-xl leading-snug text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-navy-muted leading-relaxed flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "12px" }}>
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep" style={{ fontFamily: "var(--font-base)" }}>
                    Learn more
                    <span className="w-7 h-7 rounded-full bg-primary/40 flex items-center justify-center group-hover:bg-primary/60 transition-colors">
                      <svg className="w-3.5 h-3.5 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 -GETTING STARTED ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] items-start gap-10 lg:gap-16">
            {/* Left -journey card */}
            <div
              className="bg-[#fcfcfc] overflow-hidden border border-gray-100"
              style={{ borderRadius: "10px" }}
            >
              <div className="h-56 overflow-hidden">
                <img src="/treatmnetguide/v1.webp" alt="Treatment journey" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl leading-snug text-navy-deep"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "12px" }}
                >
                  Your treatment journey
                </h3>
                <blockquote
                  style={{
                    fontFamily: "var(--font-base)",
                    fontSize: "15px",
                    color: "#0f616e",
                    lineHeight: 1.65,
                    margin: "0 0 12px",
                    borderLeft: "3px solid #1AA3B5",
                    paddingLeft: "0.9rem",
                  }}
                >
                  "Understanding each step gave me confidence -I reached remission within a year."
                </blockquote>
                <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                  Most people with inflammatory arthritis reach low disease activity or remission within 12–18 months of starting treatment.
                </p>
              </div>
            </div>

            {/* Right -title + accordion */}
            <div>
              <h2
                className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "1.5rem" }}
              >
                Getting started with treatment
              </h2>
              <Accordion steps={journeySteps} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 -TREATMENT BY CONDITION ═══ */}
      <section id="by-condition" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem" }}
            >
              Treatment by condition
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, textAlign: "center", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Find your condition and see what is typically recommended first -and what comes next.
            </p>
          </div>

          {/* Condition table */}
          <div

            className="overflow-x-auto"
            style={{}}
          >
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#0f616e" }}>
                  <th className="text-[11px] font-bold tracking-[0.08em] uppercase text-left" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-base)", borderRadius: "6px 0 0 0" }}>Condition</th>
                  <th className="text-[11px] font-bold tracking-[0.08em] uppercase text-left" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-base)" }}>First treatment</th>
                  <th className="text-[11px] font-bold tracking-[0.08em] uppercase text-left" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-base)" }}>If that is not enough</th>
                  <th style={{ padding: "16px 20px", borderRadius: "0 6px 0 0", width: "50px" }}></th>
                </tr>
              </thead>
              <tbody>
                {conditionRows.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-white cursor-pointer"
                    style={{ transition: "background 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.querySelectorAll("td").forEach(td => td.style.backgroundColor = "#f0f7f8") }}
                    onMouseLeave={(e) => { e.currentTarget.querySelectorAll("td").forEach(td => td.style.backgroundColor = "") }}
                  >
                    <td style={{
                      padding: "14px 20px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      color: "#0f616e",
                      fontSize: "15px",
                      borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none",
                      borderRadius: i === conditionRows.length - 1 ? "0 0 0 6px" : undefined,
                    }}>
                      {row.name}{" "}
                      <span
                        className="text-[10px] font-bold tracking-wide uppercase inline-block align-middle"
                        style={{ padding: "2px 8px", borderRadius: "4px", marginLeft: "6px", color: row.tagColor, backgroundColor: row.tagBg, fontFamily: "var(--font-base)" }}
                      >
                        {row.tag}
                      </span>
                    </td>
                    <td className="text-sm text-navy-muted" style={{ padding: "14px 20px", fontFamily: "var(--font-base)", borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                      {row.first}
                    </td>
                    <td className="text-sm text-navy-muted" style={{ padding: "14px 20px", fontFamily: "var(--font-base)", borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                      {row.next}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "center", borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none", borderRadius: i === conditionRows.length - 1 ? "0 0 6px 0" : undefined }}>
                      <svg className="w-4 h-4 text-primary inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="pb-20 md:pb-28 bg-background-light">
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center rounded-none md:rounded-[10px]"
            style={{
              backgroundColor: "#0f616e",
              padding: "clamp(1.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 4.5rem)",
              gap: "3rem",
            }}
          >
            <div>
              <h2
                className="text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, marginBottom: "0.6rem", color: "#ffffff" }}
              >
                Ready to start your<br />
                <span style={{ color: "#ffffff" }}>treatment journey?</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,0.5)" }}>
                Our rheumatologists will assess your condition, explain your options clearly, and create a plan tailored to you. Early treatment leads to better outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0" style={{ gap: "0.5rem" }}>
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-[15px] text-white whitespace-nowrap transition-all hover:opacity-90"
                style={{ backgroundColor: "#F97316", padding: "14px 28px", textDecoration: "none" }}
              >
                Book a consultation
              </a>
              <span className="text-[11px]" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,0.3)" }}>
                Most patients seen within 2 weeks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <div className="bg-white">
        <Newsletter />
      </div>

      <BriefingFooter />
    </div>
  )
}

export default TreatmentGuides
