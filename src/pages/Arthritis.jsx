import { useEffect, useState, useRef, useCallback } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import CtaBanner from "../components/CtaBanner"
import MeetDoctors from "../components/MeetDoctors"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */


/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function Arthritis() {
  const [diagnosisActive, setDiagnosisActive] = useState(0)
  const diagnosisRef = useRef(null)
  const [typesActive, setTypesActive] = useState(0)
  const typesRef = useRef(null)
  const [showAllSymptoms, setShowAllSymptoms] = useState(false)
  const [treatActive, setTreatActive] = useState(0)
  const treatRef = useRef(null)

  const handleTreatScroll = useCallback(() => {
    const el = treatRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const cardWidth = el.firstChild?.offsetWidth || 1
    const gap = 20
    const index = Math.round(scrollLeft / (cardWidth + gap))
    setTreatActive(Math.min(index, 2))
  }, [])

  const handleDiagnosisScroll = useCallback(() => {
    const el = diagnosisRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const cardWidth = el.firstChild?.offsetWidth || 1
    const gap = 20
    const index = Math.round(scrollLeft / (cardWidth + gap))
    setDiagnosisActive(Math.min(index, 2))
  }, [])

  const handleTypesScroll = useCallback(() => {
    const el = typesRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const cardWidth = el.firstChild?.offsetWidth || 1
    const gap = 16
    const index = Math.round(scrollLeft / (cardWidth + gap))
    setTypesActive(Math.min(index, 3))
  }, [])

  useEffect(() => {
    document.title = "Arthritis Care | Omni Rheuma"
    return () => { document.title = "Omni Rheuma | Professional Rheumatology Resource" }
  }, [])

  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased" style={{ fontFamily: "var(--font-base)", "--color-navy-muted": "#1a1a1a" }}>
      <Header />
      <main>

        {/* ═══════════ HERO (matching RA guide) ═══════════ */}
        <header>
          <div style={{ backgroundColor: "#0f616e" }} className="text-white">
            <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] pt-20 pb-12 flex flex-col items-start">
              <span
                className="inline-block"
                style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4", marginBottom: "24px" }}
              >
                Complete Patient Guide
              </span>
              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 6vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-0.5px",
                }}
              >
                Understanding Arthritis
              </h1>

              <div className="flex -space-x-2" style={{ marginBottom: "14px" }}>
                <img src="/raghav.webp" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#e0f3f5]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
                <img src="/d1.webp" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#e0f3f5]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
              </div>

              <div style={{ fontFamily: "usual, Arial, Helvetica, sans-serif", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "#ffffff" }}>
                  Written by <strong className="font-bold underline underline-offset-2 decoration-1">Dr. Raghavendra H</strong>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.5)" }}>
                  Medically reviewed by <strong className="font-bold underline underline-offset-2 decoration-1" style={{ color: "#ffffff" }}>Dr. Raghavendra H</strong>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.45)" }}>
                  Published: March 2026
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ═══════════ ARTHRITIS OVERVIEW ═══════════ */}
        <section className="py-12 md:py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-center bg-white p-8 md:p-10" style={{ borderRadius: "16px", border: "1px solid #e8ecf2" }}>
              {/* Left -Text */}
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: "1.5rem" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e0f3f5" }}>
                    <span className="material-symbols-outlined text-[20px]" style={{ color: "#1AA3B5" }}>rheumatology</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#0f616e" }}>Arthritis Overview</span>
                </div>
                <p className="text-[20px] md:text-[24px] leading-[1.5]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#0f616e", marginBottom: "1.25rem" }}>
                  Arthritis is not a single disease &mdash; it is an umbrella term for over 100 conditions causing joint pain, inflammation, and structural damage.
                </p>
                <p className="text-[16px] leading-[1.75]" style={{ color: "#5e5e5e", marginBottom: "1.25rem" }}>
                  In people with inflammatory arthritis, the immune system mistakenly attacks the joints, causing chronic pain, swelling, and progressive damage if left untreated.
                </p>
                <p className="text-[16px] leading-[1.75]" style={{ color: "#5e5e5e" }}>
                  Read on to learn about arthritis types, symptoms, causes, risk factors, and treatment options &mdash; and how early specialist care can change outcomes.
                </p>

              </div>
              {/* Right -Image */}
              <div className="hidden lg:block">
                <img src="/images/arthisites.webp" alt="Arthritis overview" className="w-full h-[300px] object-cover" style={{ borderRadius: "12px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SCALE OF THE PROBLEM ═══════════ */}
        <section className="relative py-16 md:py-24 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Arthritis - The Scale of the Problem
              </h2>
              <p className="text-[15px] leading-[1.85] text-navy-muted">
                Arthritis is among the most prevalent chronic conditions globally, yet underdiagnosed -especially in India. The gender split matters: several inflammatory forms disproportionately affect women, while AS predominantly targets young men.
              </p>
            </div>

            {/* Horizontal scroll on mobile */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
              {[
                { value: "1%", label: "of the global population", desc: "has Rheumatoid Arthritis alone. Over 100 types of arthritis exist; combined, they are the leading cause of disability worldwide." },
                { value: "180M", label: "patients in India", desc: "Estimated adults affected -exceeding the combined burden of diabetes and all cancers. Average diagnosis delay: 6 years." },
                { value: "40%", label: "work disability in 10 yrs", desc: "Of RA patients experience significant work disability within 10 years without early, targeted therapy. Early treatment changes this outcome dramatically." },
              ].map((stat, i) => (
                <div key={i} className="min-w-[260px] sm:min-w-0 snap-start p-5 md:p-7" style={{ borderRadius: 0 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4vw, 3.25rem)", fontWeight: 400, lineHeight: 1, color: "#1AA3B5", marginBottom: "0.5rem" }}>
                    {stat.value}
                  </p>
                  <p className="text-[14px] font-semibold text-navy-deep" style={{ marginBottom: "0.75rem" }}>{stat.label}</p>
                  <p className="text-[13px] leading-[1.7] text-navy-muted">{stat.desc}</p>
                </div>
              ))}

              {/* Card 4 -gender bar */}
              <div className="min-w-[260px] sm:min-w-0 snap-start p-5 md:p-7" style={{ borderRadius: 0 }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4vw, 3.25rem)", fontWeight: 400, lineHeight: 1, color: "#1AA3B5", marginBottom: "0.5rem" }}>
                  3&times;
                </p>
                <p className="text-[14px] font-semibold text-navy-deep" style={{ marginBottom: "0.75rem" }}>more common in women</p>
                <p className="text-[13px] leading-[1.7] text-navy-muted">RA disproportionately affects women. Conversely, AS (Ankylosing Spondylitis) is 2–3&times; more prevalent in men, typically under 35 years old.</p>
              </div>
            </div>
          </div>
          {/* Bottom wave -commented out */}
          {/* <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#ffffff" />
          </svg> */}
        </section>

        {/* ═══════════ MAJOR TYPES OF ARTHRITIS ═══════════ */}
        <section id="types" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading -left aligned */}
            <div className="mb-8 md:mb-14">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Major Types of Arthritis
              </h2>
              <p className="text-[15px] leading-[1.85] text-navy-muted">
                While over 100 forms of arthritis exist, these four types account for the vast majority of rheumatology presentations. Each has a distinct mechanism, patient profile, and treatment pathway.
              </p>
            </div>

            {/* 4 square cards -carousel on mobile */}
            <div ref={typesRef} onScroll={handleTypesScroll} className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
              {[
                { img: "/condition/Rheumatoid Arthritis (RA).webp", label: "Rheumatoid Arthritis", abbr: "RA", link: "/Rheumatoid-Arthritis" },
                { img: "/condition/Osteoarthritis.webp", label: "Osteoarthritis", abbr: "OA", link: "/health-guide" },
                { img: "/condition/Psoriatic Arthritis.webp", label: "Psoriatic Arthritis", abbr: "PSA", link: "/health-guide" },
                { img: "/condition/Ankylosing Spondylitis (AS).webp", label: "Ankylosing Spondylitis", abbr: "AS", link: "/health-guide" },
              ].map((type, i) => (
                <Link
                  key={i}
                  to={type.link}
                  className="group min-w-[45vw] sm:min-w-0 snap-start overflow-hidden hover:border-2 hover:border-[#1AA3B5] transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-3">
                    <img src={type.img} alt={type.label} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400" />
                  </div>
                  <div className="p-4 text-center">
                    <h3
                      className="text-navy-deep mb-1.5 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.25 }}
                    >
                      {type.label}
                    </h3>
                    <span
                      className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1"
                      style={{ backgroundColor: "#f0f0f0", color: "#0f616e" }}
                    >
                      {type.abbr}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* Carousel dots -mobile only */}
            <div className="flex justify-center gap-2 mt-4 sm:hidden">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: typesActive === i ? "20px" : "8px",
                    height: "8px",
                    backgroundColor: typesActive === i ? "#1AA3B5" : "#e8ecf2",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SYMPTOMS OF ARTHRITIS ═══════════ */}
        <section className="py-12 md:py-20" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Symptoms of Arthritis
              </h2>
              <p className="text-[15px] leading-[1.85]" style={{ color: "#5e5e5e" }}>
                Arthritis symptoms vary by type but share common patterns. Early recognition of these symptoms can lead to faster diagnosis and better outcomes.
              </p>
            </div>

            {(() => {
              const allSymptoms = [
                { label: "Morning Stiffness", desc: "Stiffness lasting more than 30 minutes after waking" },
                { label: "Joint Pain", desc: "Persistent aching or sharp pain in one or more joints" },
                { label: "Joint Swelling", desc: "Visible puffiness or swelling around joint areas" },
                { label: "Fatigue", desc: "Persistent tiredness that doesn't improve with rest" },
                { label: "Reduced Mobility", desc: "Difficulty moving joints through full range of motion" },
                { label: "Warmth & Redness", desc: "Heat or redness around affected joints" },
                { label: "Joint Deformity", desc: "Visible changes in joint shape over time" },
                { label: "Systemic Symptoms", desc: "Fever, weight loss, or organ involvement" },
              ]
              return (
                <>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {allSymptoms.map((symptom, i) => (
                      <div
                        key={i}
                        className={`p-5 hover:-translate-y-0.5 transition-all duration-200 ${!showAllSymptoms && i >= 4 ? "hidden sm:block" : ""}`}
                        style={{ borderRadius: "12px", backgroundColor: "#e0f3f5" }}
                      >
                        <h4 className="text-[14px] font-semibold text-navy-deep mb-1">{symptom.label}</h4>
                        <p className="text-[12px] leading-[1.6]" style={{ color: "#5e5e5e" }}>{symptom.desc}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowAllSymptoms(!showAllSymptoms)}
                    className="mt-4 text-[13px] font-semibold cursor-pointer sm:hidden"
                    style={{ color: "#1AA3B5", background: "none", border: "none", padding: 0 }}
                  >
                    {showAllSymptoms ? "See less ↑" : "See more ↓"}
                  </button>
                </>
              )
            })()}
          </div>
        </section>

        {/* ═══════════ PATHOLOGY -HOW ARTHRITIS DEVELOPS ═══════════ */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff", paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Heading */}
            <div className="mb-8 md:mb-14">
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0f616e", marginBottom: "1rem" }}>
                Pathology - How Arthritis Develops
              </h2>
              <p className="text-[15px] leading-[1.85]" style={{ color: "#0f616e", opacity: 0.7 }}>
                Understanding the biological sequence shows patients exactly why early treatment prevents permanent damage -and why waiting is never safe in inflammatory arthritis.
              </p>
            </div>

            {/* Content: Diagram left + Steps right */}
            <div className="lg:flex lg:gap-12 xl:gap-16 items-start">

              {/* Left -Joint Diagram (sticky) */}
              <div className="flex-1 mb-12 lg:mb-0 lg:sticky lg:top-[140px] self-start">
                <img src="/images/joints.webp" alt="Healthy Joint vs Inflamed Joint" className="w-full object-cover" style={{ borderRadius: 0 }} />
              </div>

              {/* Right -3 Steps */}
              <div className="flex-1 flex flex-col gap-4">
                {[
                  {
                    num: "01",
                    title: "Immune Trigger",
                    desc: "In RA, Anti-CCP antibodies form silently -up to 10 years before symptoms appear. In AS, the HLA-B27 gene initiates a low-grade spinal inflammatory cascade.",
                  },
                  {
                    num: "02",
                    title: "Synovitis & Joint Destruction",
                    desc: "Inflammatory cells release TNF-\u03B1 and IL-6, thickening the synovial lining into destructive pannus tissue. Cartilage and bone erosion begins within 3\u20136 months and is irreversible once established.",
                  },
                  {
                    num: "03",
                    title: "Systemic & Structural Consequences",
                    desc: "Untreated RA doubles cardiovascular risk and causes lung involvement in 10\u201320% of patients. In AS, spinal fusion produces the classic \u201Cbamboo spine\u201D. Early treatment prevents all of this.",
                  },
                ].map((step) => (
                  <div key={step.num} className="p-5 flex gap-5" style={{ borderRadius: 0 }}>
                    <span className="text-[28px] font-bold leading-none shrink-0" style={{ fontFamily: "var(--font-display)", color: "#0f616e", opacity: 0.3 }}>
                      {step.num}
                    </span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-base)", fontSize: "15px", fontWeight: 600, lineHeight: 1.3, color: "#0f616e", marginBottom: "6px" }}>
                        {step.title}
                      </h3>
                      <p className="text-[13px] leading-[1.7]" style={{ color: "#0f616e", opacity: 0.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
        {/* Wave between sections */}
        <svg className="block w-full -mt-px" style={{ height: "80px", backgroundColor: "#ffffff" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f5f5f5" />
        </svg>

        {/* ═══════════ DIAGNOSIS -TESTS AND WHAT THEY MEAN ═══════════ */}
        <section className="py-12 md:py-20 pb-20 md:pb-28 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 md:mb-14">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Diagnosis - Tests and What They Mean
              </h2>
              <p className="text-[15px] leading-[1.85] text-navy-muted">
                No single test diagnoses arthritis. Diagnosis is clinical -combining history, physical examination, blood tests, and imaging.
              </p>
            </div>

            <div ref={diagnosisRef} onScroll={handleDiagnosisScroll} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:pb-0">
              {[
                {
                  icon: "bloodtype",
                  iconColor: "#fd956a",
                  iconBg: "linear-gradient(135deg, #fff3ec 0%, #f9d4d4 100%)",
                  title: "Blood Tests",
                  desc: "Detect inflammation markers and autoantibodies. Must be interpreted in full clinical context -not in isolation.",
                  tags: ["RF", "Anti-CCP", "CRP", "ESR", "ANA", "HLA-B27", "Uric Acid", "FBC"],
                  accent: "#fd956a",
                },
                {
                  icon: "image_search",
                  iconColor: "#0f616e",
                  iconBg: "linear-gradient(135deg, #e0f3f5 0%, #b8e6ea 100%)",
                  title: "Imaging",
                  desc: "X-rays show bone damage; MRI detects early inflammation before bone changes appear; ultrasound visualises active synovitis in real time.",
                  tags: ["X-Ray Hands/Feet", "MRI SI Joints", "MSUS", "Chest CT", "DEXA"],
                  accent: "#1AA3B5",
                },
                {
                  icon: "science",
                  iconColor: "#0f616e",
                  iconBg: "linear-gradient(135deg, #f5f5f5 0%, #d4ddef 100%)",
                  title: "Joint Fluid Analysis",
                  desc: "Arthrocentesis is gold standard for gout -crystals are directly visible. Also essential to rule out septic arthritis, a medical emergency.",
                  tags: ["Crystal analysis", "WBC count", "Culture & sensitivity"],
                  accent: "#0f616e",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300 min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-start"
                  style={{ backgroundColor: i === 0 ? "#e0f3f5" : i === 1 ? "#ffffff" : "#fff3ec", borderRadius: "16px", padding: "2.25rem 1.75rem 2rem", boxShadow: "none", border: "none" }}
                >

                  {/* Title */}
                  <h3
                    className="text-navy-deep mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.2 }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] leading-[1.75] text-navy-muted mb-6 max-w-[280px]">{card.desc}</p>

                  {/* Divider */}
                  <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: "#ddd6ca" }} />

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11.5px] font-semibold px-3.5 py-1.5 hover:shadow-sm transition-shadow cursor-default"
                        style={{ backgroundColor: "#ffffff", color: "#0f616e", borderRadius: "20px", border: "1px solid #e8e0d4", letterSpacing: "0.01em" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel dots -mobile only */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: diagnosisActive === i ? "20px" : "8px",
                    height: "8px",
                    backgroundColor: diagnosisActive === i ? "#1AA3B5" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 06 -TREATMENT OPTIONS ═══════════ */}
        <section className="relative mt-[60px] py-12 md:py-20" style={{ backgroundColor: "#0f616e" }}>
          {/* Top wave */}
          <svg className="absolute -top-[60px] left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#0f616e" />
          </svg>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 md:mb-14">
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#ffffff", marginBottom: "1rem" }}>
                Treatment Options
              </h2>
              <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Arthritis is managed through two primary treatment pathways -medication therapy and surgery. Most patients are managed with medicines alone; surgery is reserved for advanced cases.
              </p>
            </div>

            <div ref={treatRef} onScroll={handleTreatScroll} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide pl-0 pr-6 lg:pr-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
              {[
                {
                  icon: "medication",
                  badge: "First-Line",
                  title: "Medicines",
                  desc: "From symptom relief to disease-modifying and biologic therapy.",
                  items: ["NSAIDs", "DMARDs -Methotrexate, Hydroxychloroquine", "Corticosteroids", "Biologics -TNF inhibitors, IL-6, IL-17", "JAK Inhibitors -Upadacitinib, Baricitinib"],
                  note: "Never change medication without guidance from your rheumatologist.",
                  color: "#1AA3B5",
                },
                {
                  icon: "surgical",
                  badge: "When Needed",
                  title: "Surgery",
                  desc: "Joint replacement or spinal procedures for irreversible structural damage.",
                  items: ["Total Knee Replacement", "Total Hip Replacement", "Synovectomy", "Arthroscopy", "Spinal Fusion -end-stage AS"],
                  note: "Reserved as a last resort -only after all medical options are exhausted.",
                  color: "#fd956a",
                  img: "/images/hero-doctor.webp",
                },
                {
                  icon: "fitness_center",
                  badge: "Every Stage",
                  title: "Physiotherapy",
                  desc: "Grade A evidence across all arthritis types -recommended at every stage.",
                  items: ["Joint Mobilisation Exercises", "Muscle Strengthening", "Hydrotherapy", "Gait & Balance Training", "Post-Surgical Rehabilitation"],
                  note: "Recommended alongside medications and post-surgery.",
                  color: "#1AA3B5",
                },
              ].map((card, i) => (
                <div key={i} className="w-[75vw] min-w-[75vw] sm:min-w-[280px] sm:w-auto lg:min-w-0 lg:w-auto snap-start p-6 flex flex-col shrink-0 transition-shadow duration-300" style={{ borderRadius: "16px", backgroundColor: i === 0 ? "#e0f3f5" : i === 1 ? "#fff3ec" : "#e0f3f5" }}>
                  {/* Image */}
                  {card.img && (
                    <div className="overflow-hidden mb-4" style={{ borderRadius: "10px", marginLeft: "-1.5rem", marginRight: "-1.5rem", marginTop: "-1.5rem" }}>
                      <img src={card.img} alt={card.title} className="w-full h-[160px] object-cover" />
                    </div>
                  )}
                  {/* Badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full self-start" style={{ fontFamily: "var(--font-base)", backgroundColor: "#e0f3f5", color: "#0f616e", marginBottom: "0.75rem" }}>
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "#0f616e", marginBottom: "0.5rem" }}>{card.title}</h3>

                  {/* Desc */}
                  <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)", marginBottom: "1.5rem" }}>{card.desc}</p>

                  {/* Items */}
                  <div className="flex flex-col gap-2.5 flex-1" style={{ fontFamily: "var(--font-base)", marginBottom: "1.5rem" }}>
                    {card.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-[13px]" style={{ color: "#0f616e" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]" style={{ backgroundColor: card.color }} />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <p className="text-[12px] leading-[1.6] pt-4" style={{ fontFamily: "var(--font-base)", color: "#5e5e5e", borderTop: "1px solid #e8ecf2" }}>
                    {card.note}
                  </p>
                </div>
              ))}
            </div>
            {/* Dots -mobile only */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: treatActive === i ? "20px" : "8px",
                    height: "8px",
                    backgroundColor: treatActive === i ? "#1AA3B5" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
          {/* Bottom wave */}
          <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F5F5F5" />
          </svg>
        </section>

        {/* ═══════════ 07 -LIVING WELL WITH ARTHRITIS ═══════════ */}
        <section className="py-12 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-0 md:px-6">
            <div className="mb-8 md:mb-14 max-w-2xl px-5 md:px-0">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Living Well With Arthritis
              </h2>
            </div>

            {/* Photo + text row */}
            <div className="lg:grid lg:grid-cols-[400px_1fr] overflow-hidden mb-8" style={{ borderRadius: "0", border: "none" }}
              id="living-well-card"
            >
              <style>{`@media(min-width:1024px){#living-well-card{border-radius:20px !important;border:1.5px solid #e8ecf2 !important;}}`}</style>
              {/* Photo side */}
              <div className="relative h-[260px] lg:h-auto overflow-hidden">
                <img
                  src="/images/exercise.webp"
                  alt="Person exercising actively"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,36,64,.45) 0%, transparent 60%)" }} />
              </div>
              {/* Text side */}
              <div className="p-7 lg:p-8 flex flex-col gap-4" style={{ backgroundColor: "#0f616e" }}>
                <h4 style={{ fontFamily: "var(--font-base)", fontSize: "1.15rem", color: "#fff", lineHeight: 1.3, fontWeight: 700 }}>
                  What You Do Between Appointments Matters as Much as Medication
                </h4>
                <p className="text-[13px]" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,.5)", lineHeight: 1.65 }}>
                  Clinical research consistently shows that patient self-management has outcomes on par with medication choice. These habits are part of your treatment plan -not optional extras.
                </p>
                <ul className="flex flex-col gap-1.5" style={{ fontFamily: "var(--font-base)" }}>
                  {[
                    "Move every day -even 20 minutes of low-impact activity measurably reduces inflammatory markers",
                    "Keep a symptom diary -helps your rheumatologist spot patterns and adjust treatment accurately",
                    "Never skip medication doses -inconsistency leads to flares and faster disease progression",
                    "Know your blood test schedule and never miss monitoring appointments",
                    "Disclose all supplements and herbal remedies -many interact with DMARDs",
                    "Build a support network -isolation directly worsens pain perception and mental health",
                    "Discuss fatigue explicitly with your team -it is measurable and treatable",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-[13px] items-start" style={{ color: "rgba(255,255,255,.72)" }}>
                      <span className="shrink-0 font-bold" style={{ color: "#1AA3B5" }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "restaurant", iconColor: "#1AA3B5", iconBg: "#e0f3f5", title: "Diet & Nutrition", desc: "Mediterranean diet reduces CRP by up to 30% in clinical studies. Omega-3s from oily fish reduce synovial inflammation in RA. Avoid excess alcohol and ultra-processed food." },
                { icon: "bedtime", iconColor: "#0f616e", iconBg: "#f5f5f5", title: "Sleep & Fatigue", desc: "Inflammatory fatigue is driven by the same cytokines causing joint inflammation. Prioritise sleep hygiene. Effective disease control is the best treatment for inflammatory fatigue." },
                { icon: "self_improvement", iconColor: "#fdcf2e", iconBg: "#e0f3f5", title: "Mental Health", desc: "Chronic inflammatory pain is associated with a 2\u20133\u00D7 higher rate of depression and anxiety. Cognitive-behavioural therapy has strong clinical evidence in RA and fibromyalgia." },
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 border border-gray-100" style={{ borderRadius: "12px" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: card.iconBg }}>
                    <span className="material-symbols-outlined text-[20px]" style={{ color: card.iconColor }}>{card.icon}</span>
                  </div>
                  <h5 className="text-[15px] font-bold text-navy-deep mb-2">{card.title}</h5>
                  <p className="text-[13px] text-navy-muted leading-[1.65]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 08 -MEET OUR DOCTORS ═══════════ */}
        <MeetDoctors />


        {/* ═══════════ WARNING SIGNS (COMMENTED) ═══════════ */}
        {/* <section className="py-20 md:py-28" style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:flex lg:gap-16 lg:items-center">
              <div className="flex-1 mb-12 lg:mb-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-6" style={{ backgroundColor: "#fa885b", color: "#0f616e" }}>
                  Early Detection
                </span>
                <h2
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#ffffff", marginBottom: "1.5rem" }}
                >
                  When should you see a rheumatologist?
                </h2>
                <p className="text-[16px] leading-[1.8] mb-14" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Don&apos;t wait for joint damage to become irreversible. If you experience any of these warning signs, it&apos;s time to consult a specialist.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
                  style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "14px 32px" }}
                >
                  Take Our Symptom Assessment
                </a>
              </div>
              <div className="flex-1">
                <div className="space-y-3">
                  {warningSignsEarly.map((sign, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 0 }}
                    >
                      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#1AA3B5" }}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="#fff" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.9)" }}>{sign}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ═══════════ TREATMENT APPROACH (COMMENTED) ═══════════ */}
        {/* <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.8px" }}
              >
                How Rheuma treats{" "}
                <span className="relative inline-block">
                  arthritis
                  <svg className="absolute -bottom-1 left-0 w-full h-[6px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                    <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </span>
              </h2>
              <p className="text-[16px] text-navy-muted leading-relaxed mt-5 max-w-lg mx-auto text-center">
                Our evidence-based, multidisciplinary approach is designed to get you from diagnosis to remission as quickly as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {treatmentApproach.map((item, i) => (
                <div key={i} className="relative p-8 bg-ghost" style={{ borderRadius: 0 }}>
                  <span
                    className="block text-[40px] font-light leading-none mb-4"
                    style={{ fontFamily: "var(--font-display)", color: item.color, opacity: 0.4 }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="text-navy-deep mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.25 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.75] text-navy-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
                style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "14px 36px" }}
              >
                Start Your Care Journey
              </a>
            </div>
          </div>
        </section> */}

        {/* ═══════════ DEEP DIVE CTA CARDS ═══════════ */}
        <section className="py-16 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RA Guide Card */}
              <Link
                to="/Rheumatoid-Arthritis"
                className="group relative overflow-hidden bg-navy-deep p-10 md:p-12 flex flex-col justify-end min-h-[300px] hover:shadow-[0_12px_40px_rgba(15,97,110,0.25)] transition-all duration-300"
                style={{ borderRadius: 0 }}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-4 self-start" style={{ backgroundColor: "#1AA3B5", color: "#fff" }}>
                  In-Depth Guide
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.15, color: "#ffffff", marginBottom: "0.75rem" }}>
                  Rheumatoid Arthritis: Complete Guide
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Symptoms, causes, risk factors, diagnosis, and the latest treatment options -all reviewed by our rheumatology team.
                </p>
              </Link>

              {/* Health Guide Card */}
              <Link
                to="/health-guide"
                className="group relative overflow-hidden p-10 md:p-12 flex flex-col justify-end min-h-[300px] hover:shadow-[0_12px_40px_rgba(24,36,57,0.1)] transition-all duration-300"
                style={{ borderRadius: 0, backgroundColor: "#e0f3f5" }}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-navy-deep/10 flex items-center justify-center group-hover:bg-navy-deep/20 transition-colors">
                  <svg className="w-5 h-5 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-4 self-start" style={{ backgroundColor: "#0f616e", color: "#ffffff" }}>
                  Health Guide
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.15, color: "#0f616e", marginBottom: "0.75rem" }}>
                  Explore All Conditions
                </h3>
                <p className="text-[14px] leading-[1.7] text-navy-muted">
                  Browse our comprehensive library of condition guides, treatment deep-dives, and patient resources.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SUPPORTING YOUR JOURNEY ═══════════ */}
        <section className="py-12 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.5px", marginBottom: "1rem" }}
              >
                The Role of Omni Rheuma
              </h2>
              <p className="text-[15px] leading-[1.75] text-navy-muted">
                Omni Rheuma is designed to bridge the gap between clinical appointments and everyday life -giving patients, caregivers, and clinicians the tools, knowledge, and support they need at every stage of the arthritis journey.
              </p>
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-[14px] mt-7 transition-all hover:opacity-90"
                style={{ backgroundColor: "#fd956a", color: "#ffffff", padding: "0.7rem 2rem" }}
              >
                Book a Consultation &#8594;
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "call", title: "Specialist Consultation", desc: "Direct access to experienced rheumatologists -in-person or teleconsult, cutting the average 6-year diagnosis delay.", link: "Book now" },
                { icon: "monitoring", title: "Symptom & Flare Monitoring", desc: "Log pain, stiffness, and medication adherence between appointments -giving your care team data for precise treat-to-target decisions.", link: "Start tracking" },
                { icon: "group", title: "Patient Community", desc: "A moderated peer network for people living with arthritis -shared experience, coping strategies, and support between appointments.", link: "Join now" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-7 flex flex-col border border-gray-100 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(15,36,64,.08)] transition-all duration-200"
                  style={{ borderRadius: 0 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#e0f3f5" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: "#1AA3B5" }}>{card.icon}</span>
                  </div>
                  <h4
                    className="text-navy-deep mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25 }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-[13.5px] leading-[1.7] text-navy-muted flex-1">
                    {card.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-1 text-[13px] font-bold mt-5 hover:gap-2 transition-all" style={{ color: "#1AA3B5" }}>
                    {card.link} &#8594;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ARTICLES ON ARTHRITIS ═══════════ */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#1AA3B5" }}>
                Latest Research
              </span>
              <h2 className="text-navy-deep mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Articles on Arthritis
              </h2>
            </div>

            {/* Grid: 1.6fr 1fr */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 items-start">
              {/* Featured card */}
              <div className="rounded-2xl border border-[#e8ecf2] overflow-hidden">
                <div className="relative h-[320px] overflow-hidden">
                  <img src="/images/lab-test.webp" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,97,110,.8)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em] mb-1.5">
                      <span className="w-3 h-0.5 bg-[#1AA3B5] rounded-full" />
                      Research
                    </span>
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-navy-deep mb-2.5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400 }}>Treat-to-Target in RA: Does Achieving Remission Actually Prevent Long-Term Joint Damage?</h3>
                  <div className="flex items-center gap-2.5 text-xs text-navy-muted mb-4">
                    <span>Dr. Priya Menon</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#e8ecf2]" />
                    <span>10 min read</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#e8ecf2]" />
                    <span>March 2026</span>
                  </div>
                  <button className="py-2.5 px-6 rounded-full text-white font-semibold text-sm cursor-pointer border-none hover:opacity-90 transition-opacity" style={{ background: "#fd956a" }}>
                    Read Article
                  </button>
                </div>
              </div>

              {/* List cards */}
              <div className="flex flex-col gap-3">
                {[
                  { img: "/images/medication.webp", cat: "Medications", title: "Starting Methotrexate -What Every Patient Must Know", time: "8 min read" },
                  { img: "/images/joints.webp", cat: "Patient Guide", title: "RA vs Osteoarthritis -How to Tell the Difference", time: "6 min read" },
                  { img: "/images/exercise.webp", cat: "Physiotherapy", title: "Best Exercises for Ankylosing Spondylitis", time: "7 min read" },
                  { img: "/images/diet.webp", cat: "Lifestyle", title: "Diet & Inflammation -What to Eat With Arthritis", time: "5 min read" },
                ].map((art, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-[#e8ecf2] bg-white cursor-pointer items-center hover:border-primary transition-colors">
                    <img src={art.img} alt="" className="w-[72px] h-[72px] rounded-[10px] object-cover shrink-0" />
                    <div>
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em] mb-0.5">
                        <span className="w-2 h-0.5 bg-[#1AA3B5] rounded-full" />
                        {art.cat}
                      </span>
                      <h4 className="text-navy-deep mb-0.5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 400 }}>{art.title}</h4>
                      <span className="text-[11px] text-navy-muted">{art.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER ═══════════ */}
        <CtaBanner />

        {/* ═══════════ NEWSLETTER ═══════════ */}
        <div className="bg-white -mt-10 md:-mt-16">
          <Newsletter />
        </div>

        {/* ═══════════ FAQ (COMMENTED) ═══════════
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.8px" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-ghost border border-gray-100 overflow-hidden group" style={{ borderRadius: 0 }}>
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-45" fill="none" stroke="#0f616e" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-sm text-navy-muted leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        ═══════════ */}

        {/* ═══════════ CTA BANNER (COMMENTED) ═══════════
        <section className="w-full flex flex-col bg-white overflow-visible">
          <svg
            className="w-full h-[24px] sm:h-[90px] md:h-[120px] text-navy-deep block"
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path
              d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
              fill="currentColor"
            />
          </svg>
          <div className="bg-navy-deep w-full overflow-visible">
            <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 pt-6 sm:pt-10">
              <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-16">
                <div className="flex-[1.1] flex flex-col items-center md:items-start justify-center py-4">
                  <h2
                    className="leading-[1.1] font-normal mb-6 text-center md:text-left"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5.5vw, 68px)", letterSpacing: "-0.5px", color: "#ffffff" }}
                  >
                    Take control of your arthritis today
                  </h2>
                  <p className="text-[16px] leading-relaxed mb-10 text-center md:text-left" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px" }}>
                    See a board-certified rheumatologist within 72 hours. No long waitlists. No guesswork.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                    <a
                      href="#"
                      className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90 text-center"
                      style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "16px 32px" }}
                    >
                      Schedule An Appointment
                    </a>
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[15px] text-gray-100 opacity-90">or</span>
                      <a
                        href="#"
                        className="text-[15px] font-semibold underline decoration-2 underline-offset-[6px] hover:text-primary transition-colors"
                        style={{ color: "#ffffff" }}
                      >
                        let&apos;s get in touch
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/hero-consult.webp"
                    alt="Doctor consulting with patient"
                    className="w-full block rounded-[4px] absolute bottom-0"
                    style={{ height: "clamp(300px, 50vw, 520px)", objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        ═══════════ */}

        {/* ═══════════ NEWSLETTER (COMMENTED) ═══════════
        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>
        ═══════════ */}

      </main>
      <BriefingFooter />
    </div>
  )
}

export default Arthritis
