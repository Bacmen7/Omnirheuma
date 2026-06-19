import { useRef } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import CtaBanner from "../components/CtaBanner"
import BriefingFooter from "../components/BriefingFooter"

const getPreviewText = (text) => {
  const words = text.split(" ")
  if (words.length <= 8) return text
  return `${words.slice(0, 8).join(" ")}...`
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const conditions = [
  { name: "Rheumatoid Arthritis", slug: "arthritis", image: "/condition/Rheumatoid Arthritis (RA).webp", description: "Autoimmune joint inflammation affecting 1.3M+ Americans. Learn about early diagnosis and modern treatments." },
  { name: "Psoriatic Arthritis", slug: "psoriatic-arthritis", image: "/condition/Psoriatic Arthritis.webp", description: "Where skin meets joints. Understanding the psoriasis-arthritis connection and targeted therapies." },
  { name: "Osteoarthritis", slug: "osteoarthritis", image: "/condition/Osteoarthritis.webp", description: "The most common form of arthritis. Evidence-based approaches to manage cartilage loss and pain." },
  { name: "Lupus", slug: "lupus", image: "/condition/Lupus.webp", description: "A complex autoimmune disease affecting multiple organ systems. Expert guidance for flare management." },
  { name: "Gout", slug: "gout", image: "/condition/Gout.webp", description: "Caused by uric acid crystal deposits. Prevent flares with medication, diet, and lifestyle strategies." },
  { name: "Ankylosing Spondylitis", slug: "ankylosing-spondylitis", image: "/condition/Ankylosing Spondylitis (AS).webp", description: "Chronic spinal inflammation that can fuse vertebrae. Early treatment preserves mobility and posture." },
  { name: "Fibromyalgia", slug: "fibromyalgia", image: "/condition/Fibromyalgia.webp", description: "Widespread pain with fatigue and cognitive difficulties. Multi-modal treatment can restore quality of life." },
  { name: "Back & Neck Pain", slug: "back-neck-pain", image: "/condition/back.webp", description: "Identifying whether spinal pain is mechanical or inflammatory is a critical distinction for treatment." },
]

const whatIsRheumatology = [
  { title: "Autoimmune Conditions", desc: "Diseases where the immune system mistakenly attacks healthy tissue, including RA, lupus, vasculitis, and scleroderma.", stat: "80+", statLabel: "autoimmune conditions" },
  { title: "Inflammatory Arthritis", desc: "Joint diseases driven by chronic inflammation rather than wear-and-tear, requiring disease-modifying treatments.", stat: "7", statLabel: "types of inflammatory arthritis" },
  { title: "Connective Tissue Diseases", desc: "Conditions affecting collagen and connective tissue throughout the body, from skin to internal organs.", stat: "200+", statLabel: "related conditions" },
]

const diagnosticJourney = [
  { step: "01", title: "Symptom Assessment", desc: "A thorough review of your symptoms, medical history, family history, and how your condition affects daily life. Morning stiffness duration, joint patterns, and systemic symptoms all provide critical diagnostic clues." },
  { step: "02", title: "Physical Examination", desc: "Hands-on evaluation of joints for swelling, warmth, tenderness, and range of motion. Your rheumatologist examines specific joint patterns, such as symmetry and small-vs-large joint involvement, which point to different conditions." },
  { step: "03", title: "Laboratory Testing", desc: "Blood tests including RF (Rheumatoid Factor), Anti-CCP antibodies, ANA, ESR, and CRP. These inflammatory markers and autoantibodies help confirm diagnosis and guide treatment decisions." },
  { step: "04", title: "Advanced Imaging", desc: "X-rays reveal joint damage, while ultrasound and MRI can detect early inflammation invisible to the naked eye. Imaging helps stage disease severity and track treatment response over time." },
]

const treatmentApproaches = [
  { category: "Medications", items: [
    { name: "DMARDs", detail: "Methotrexate, hydroxychloroquine, and sulfasalazine are the cornerstone of autoimmune treatment. They slow disease progression and prevent permanent joint damage." },
    { name: "Biologics", detail: "TNF inhibitors, IL-6 blockers, and B-cell-depleting agents are precision therapies targeting specific immune pathways driving your inflammation." },
    { name: "JAK Inhibitors", detail: "Oral small-molecule drugs (tofacitinib, baricitinib, upadacitinib) that block Janus kinase signaling inside immune cells." },
    { name: "Corticosteroids", detail: "Powerful anti-inflammatory relief for acute flares. Used short-term as a bridge while disease-modifying drugs take effect." },
  ]},
  { category: "Non-Pharmacologic", items: [
    { name: "Physical Therapy", detail: "Targeted exercise programs to maintain joint flexibility, strengthen supporting muscles, and improve functional capacity." },
    { name: "Occupational Therapy", detail: "Joint protection techniques, assistive devices, and workplace ergonomic modifications to reduce daily strain on affected joints." },
    { name: "Anti-Inflammatory Diet", detail: "Mediterranean-style eating patterns rich in omega-3s, antioxidants, and fiber. Reducing processed foods, refined sugars, and excess alcohol." },
    { name: "Mind-Body Practices", detail: "Yoga, tai chi, meditation, and cognitive behavioral therapy for managing pain perception, stress, and the emotional toll of chronic illness." },
  ]},
]

const warningSignals = [
  { title: "Joint pain or swelling that lasts more than a few weeks", desc: "" },
  { title: "Morning stiffness that takes more than 30 minutes to ease", desc: "" },
  { title: "Unexplained fatigue along with joint or muscle pain", desc: "" },
  { title: "Joints that feel warm or look red", desc: "" },
]

const featuredArticles = [
  { id: "understanding-blood-work-rf-anti-ccp", title: "Understanding your Blood Work: RF and Anti-CCP", image: "/images/lab-test.webp", readTime: "12 min read", category: "Diagnostics", author: "Dr. Sarah Miller", excerpt: "Learn what RF and Anti-CCP blood tests mean for your rheumatoid arthritis diagnosis and treatment plan." },
  { id: "gentle-exercises-flaring-joints", title: "Gentle Exercises for Flaring Joints", image: "/images/exercise.webp", readTime: "8 min read", category: "Lifestyle", author: "Dr. James Chen", excerpt: "Safe, low-impact exercises that can help maintain mobility and reduce pain during RA flares." },
  { id: "anti-inflammatory-diet", title: "The Anti-Inflammatory Diet: Truths vs Myths", image: "/images/diet.webp", readTime: "10 min read", category: "Diet & Nutrition", author: "Angela Myers", excerpt: "Separating fact from fiction when it comes to anti-inflammatory foods and their impact on symptoms." },
]

const faqs = [
  { q: "What does a rheumatologist do?", a: "A rheumatologist is a board-certified internist with additional fellowship training in autoimmune and musculoskeletal diseases. We diagnose and treat over 200 conditions affecting joints, muscles, bones, and the immune system, from common conditions like osteoarthritis to complex systemic diseases like lupus and vasculitis." },
  { q: "When should I see a rheumatologist vs. my primary care doctor?", a: "See a rheumatologist if you have joint swelling lasting more than 6 weeks, morning stiffness exceeding 30 minutes, an elevated inflammatory marker (ESR or CRP), a positive ANA or RF test, or symptoms that haven't responded to basic treatments. Early referral leads to better outcomes, and the first 12 weeks after symptom onset is a critical treatment window." },
  { q: "Are rheumatic diseases hereditary?", a: "Genetics contribute to risk, but they're not the whole story. Having the HLA-B27 gene increases ankylosing spondylitis risk, and family history of RA raises yours 3-5x. However, environmental triggers such as infections, smoking, hormonal changes, and stress interact with genetic predisposition to activate disease. Most people with genetic risk factors never develop rheumatic disease." },
  { q: "Can rheumatic conditions be cured?", a: "Most autoimmune rheumatic conditions cannot be cured, but they can be effectively controlled. Modern treatments achieve clinical remission in up to 50-60% of RA patients. 'Remission' means minimal to no symptoms, normal inflammatory markers, and no ongoing joint damage -essentially living as if you don't have the disease. Early, aggressive treatment gives the best chance of remission." },
  { q: "What lifestyle changes actually help with inflammatory arthritis?", a: "Evidence supports: (1) regular low-impact exercise (swimming, cycling, yoga) -150 min/week reduces inflammation and pain, (2) Mediterranean diet -shown to lower CRP by 20-30%, (3) adequate sleep (7-9 hours), (4) stress management, (5) smoking cessation -smoking doubles RA severity, and (6) maintaining healthy weight -every 5 lbs of excess weight increases knee osteoarthritis risk by 36%." },
  { q: "How long does it take for treatment to work?", a: "DMARDs like methotrexate typically take 6-12 weeks to reach full effect. Biologics can work faster -some patients notice improvement within 2-4 weeks. Corticosteroids provide relief within hours to days but aren't long-term solutions. Your rheumatologist will monitor progress and adjust medications at 3-month intervals until you reach your treatment target." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function HealthGuide() {
  const scrollRef = useRef(null)
  const conditionsRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 320
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <section style={{ position: "relative", overflow: "hidden", minHeight: "380px" }}>
          {/* BG image full width */}
          <img src="/h1.webp" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          {/* Dark overlay */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,97,110,0.55)", pointerEvents: "none" }} />
          {/* Content */}
          <div style={{ position: "relative", zIndex: 1, padding: "clamp(54px, 7vw, 88px) clamp(28px, 5vw, 72px)", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "380px", maxWidth: "760px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(2.5rem, 4.4vw, 4rem)", fontWeight: 300, lineHeight: 1.11, letterSpacing: "-0.8px", maxWidth: "650px", marginBottom: "30px" }}>
              Explore Health Guide.{" "}
              <span style={{ color: "#9DE5D4" }}>Understand your condition.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "clamp(16px, 1.25vw, 18px)", lineHeight: 1.78, maxWidth: "600px", marginBottom: "42px" }}>
              Written and reviewed by board-certified rheumatologists. Evidence-based articles, condition guides, and treatment information to help you take an active role in your care.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="#conditions"
                style={{ background: "#e86531", color: "#fff", borderRadius: "100px", padding: "12px 28px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                Explore Conditions
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <Link
                to="/blog"
                style={{ border: "2px solid rgba(255,255,255,0.7)", color: "#fff", borderRadius: "100px", padding: "12px 28px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
              >
                Browse Articles
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT IS RHEUMATOLOGY (matching WhyRheuma dark section) ═══════════
        <section className="relative bg-navy-deep pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-16 md:mb-20">
              <div>
                <h2 className="max-w-[500px]" style={{ color: "#ffffff" }}>
                  More than "just arthritis"
                </h2>
              </div>
              <div className="flex items-end">
                <p style={{ fontSize: "18px", lineHeight: 1.67, letterSpacing: "0.4px", color: "#9a9faa" }}>
                  Rheumatology encompasses over{" "}
                  <strong className="font-semibold" style={{ color: "#1A355D", background: "#fa885a", padding: "2px 6px", borderRadius: "3px" }}>200 distinct conditions</strong>{" "}
                  that affect the joints, muscles, bones, and immune system -many are systemic, involving the heart, lungs, kidneys, and skin.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {whatIsRheumatology.map((item) => (
                <div key={item.title}>
                  <p className="text-[48px] leading-none text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.stat}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>{item.statLabel}</p>
                  <h3 className="!text-[20px] !font-semibold !leading-[1.4] mb-3" style={{ color: "#ffffff" }}>{item.title}</h3>
                  <p className="!text-[15px] !leading-[1.7] font-normal" style={{ color: "rgba(255,255,255,0.75)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F5F5F5" />
          </svg>
        </section>
        */}

        {/* ═══════════ CONDITIONS CAROUSEL ═══════════ */}
        <section id="conditions" className="py-20 md:py-28 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#0f616e", margin: 0, lineHeight: 1.08, letterSpacing: "-1px" }}>
                  Explore by Condition
                </h2>
                <p style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.75, color: "#5e5e5e", marginTop: "16px", maxWidth: "100%" }}>
                  Each guide is written by a board-certified rheumatologist, covering symptoms, diagnosis, treatment options, and daily management strategies.
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                <button onClick={() => conditionsRef.current?.scrollBy({ left: -300, behavior: "smooth" })} style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #dde8e7", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" fill="none" stroke="#0f616e" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => conditionsRef.current?.scrollBy({ left: 300, behavior: "smooth" })} style={{ width: "42px", height: "42px", borderRadius: "50%", border: "1.5px solid #dde8e7", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" fill="none" stroke="#0f616e" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            <div ref={conditionsRef} style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "12px", scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}>
              {conditions.map((c) => (
                <Link
                  key={c.name}
                  to="/conditions"
                  style={{ textDecoration: "none", flexShrink: 0, width: "280px", scrollSnapAlign: "start" }}
                >
                  <div style={{ background: "#fff", borderRadius: "20px", padding: "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px", border: "1.5px solid #e8ecf2", transition: "border-color 0.2s", cursor: "pointer", height: "100%" }}
                    onMouseOver={e => e.currentTarget.style.borderColor = "#0f616e"}
                    onMouseOut={e => e.currentTarget.style.borderColor = "#e8ecf2"}
                  >
                    <div style={{ width: "72px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={c.image} alt={c.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", color: "#0f616e", fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.3, margin: 0 }}>{c.name}</h3>
                    <p style={{ fontFamily: "var(--font-base)", color: "#5e5e5e", fontSize: "13px", lineHeight: 1.72, margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {getPreviewText(c.description)}
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-base)", fontSize: "13px", fontWeight: 600, color: "#0f616e", marginTop: "auto", paddingTop: "4px" }}>
                      Read more
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WARNING SIGNS (matching ApproachSection pattern -dark section) ═══════════ */}
        <section className="relative bg-navy-deep pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start lg:items-stretch">
              <div>
                <h2
                  className="max-w-[800px]"
                  style={{
                    marginBottom: "22px",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.8px",
                    color: "#ffffff",
                  }}
                >
                  When should you{" "}
                  <span className="relative inline-block">
                    see a rheumatologist
                    <svg
                      className="absolute -bottom-2 left-0 h-3 w-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 400 12"
                    >
                      <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  </span>
                  ?
                </h2>

                <p
                  className="max-w-[680px]"
                  style={{
                    marginBottom: "28px",
                    fontFamily: "var(--font-base)",
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  You should consider a visit if you notice any of the following:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 max-w-5xl">
                  {warningSignals.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#1AA3B5" }} />
                      <div className="flex-1">
                        <h3 style={{ fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 600, lineHeight: 1.6, color: "#ffffff" }}>{item.title}</h3>
                        {item.desc ? <p style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>{item.desc}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 rounded-full pl-7 pr-5 py-3.5 text-[15px] font-bold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#e86531", color: "#ffffff", fontFamily: "var(--font-base)" }}
                  >
                    Schedule a Consultation
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </span>
                  </a>
                </div>
              </div>

              <div className="h-full">
                <div className="overflow-hidden h-full" style={{ minHeight: "100%" }}>
                  <img
                    src="/k3.webp"
                    alt="Rheumatology specialist"
                    className="w-full h-[320px] md:h-[380px] lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F5F5F5" />
          </svg>
        </section>

        {/* ═══════════ DIAGNOSTIC JOURNEY ═══════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
              <h2
                className="text-navy-deep mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.15rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-1.1px" }}
              >
                What to Expect at a Rheumatology Visit
              </h2>
              <p
                className="text-navy-muted max-w-[700px] mx-auto"
                style={{ fontFamily: "var(--font-base)", fontSize: "16px", lineHeight: 1.75 }}
              >
                Understanding the diagnostic process reduces anxiety and helps you prepare. Here's how a typical rheumatology evaluation unfolds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-16 gap-x-10 lg:gap-x-16">
              {diagnosticJourney.map((item) => (
                <div key={item.step} className="flex items-start gap-5 md:gap-6">
                  <div className="relative flex h-[70px] w-[66px] md:h-[74px] md:w-[70px] shrink-0 items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 70 74" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z" fill="#e0f3f5" />
                    </svg>
                    <span
                      className="relative z-10 text-navy-deep"
                      style={{ fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 700, lineHeight: 1 }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-navy-deep"
                      style={{ fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 600, lineHeight: 1.6, marginBottom: "0.85rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-navy-muted"
                      style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.7 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TREATMENT APPROACHES (ghost bg, 2-col grid) ═══════════ */}
        <section className="py-20 md:py-28 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center text-center">
              <h2
                className="text-[2.5rem] md:text-[3rem] leading-[1.08] tracking-[-1.2px] text-navy-deep"
                style={{ marginBottom: "1.5rem" }}
              >
                How We Treat Rheumatic Conditions
              </h2>
              <p className="text-navy-muted text-base leading-[1.8] max-w-2xl mx-auto">
                Modern rheumatology combines advanced medications with lifestyle strategies. Treatment is always personalized and based on your diagnosis, symptoms, and daily needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              {treatmentApproaches.map((group, groupIndex) => (
                <div
                  key={group.category}
                  className="bg-white"
                  style={{ borderRadius: "18px", border: "1px solid #e3edf1" }}
                >
                  <div
                    className="px-6 py-5 border-b"
                    style={{ borderColor: "#e3edf1", backgroundColor: groupIndex === 0 ? "#eef8fb" : "#fff6f1" }}
                  >
                    <h3 className="text-[1.35rem] text-navy-deep" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                      {group.category}
                    </h3>
                  </div>

                  <div className="px-6 py-3">
                    {group.items.map((item, index) => (
                      <div
                        key={item.name}
                        className={`${index !== group.items.length - 1 ? "border-b" : ""} py-4`}
                        style={{ borderColor: "#edf2f5" }}
                      >
                        <h4 className="text-[15px] font-semibold text-navy-deep mb-1.5">{item.name}</h4>
                        <p className="text-sm text-navy-muted leading-[1.75]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FEATURED ARTICLES (matching RAArticles carousel) ═══════════ */}
        <section className="pt-8 pb-20 max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl text-navy-deep leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Latest Articles</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="w-[340px] min-w-[340px] flex-shrink-0 flex flex-col group bg-[#fcfcfc] border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.image} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div style={{ marginBottom: "12px" }}>
                    <span className="inline-block bg-[#e0f3f5] text-[#5E5E5E] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-xl leading-snug line-clamp-2 text-navy-deep group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}>{article.title}</h4>
                  <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", marginBottom: "8px" }}>
                    By <strong className="text-navy-deep font-semibold">{article.author}</strong>
                  </p>
                  <p className="text-sm text-navy-muted leading-relaxed line-clamp-2 flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "16px" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-navy-deep mt-auto" style={{ fontFamily: "var(--font-base)" }}>
                    Read More
                    <span className="w-6 h-6 rounded-full bg-[#1AA3B5] flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#1A355D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════ FAQ (light ghost bg, centered) ═══════════ */}
        <section className="py-20 md:py-28 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center text-center">
              <h2
                className="text-[2.5rem] md:text-[3rem] leading-[1.08] tracking-[-1.2px] text-navy-deep"
                style={{ marginBottom: "1.5rem" }}
              >
                Common Questions About Rheumatology
              </h2>
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
                    <p className="text-sm text-navy-muted leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA + NEWSLETTER ═══════════ */}
        <CtaBanner spacerColor="#F5F5F5" />
        <Newsletter />
      </main>
      <BriefingFooter />
    </div>
  )
}

export default HealthGuide

