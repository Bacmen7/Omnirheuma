import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import GoutHero from "../components/GoutHero"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "key-facts", label: "Key facts" },
  { id: "symptoms", label: "Gout symptoms" },
  { id: "causes", label: "Causes" },
  { id: "risk-factors", label: "Risk factors" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "prevention", label: "Prevention & home care" },
  { id: "complications", label: "Complications" },
  { id: "faq", label: "FAQs" },
]

const symptoms = [
  "Sudden, intense joint pain -often striking the big toe first, but also ankles, knees, wrists, fingers, and elbows",
  "Swelling, warmth, and redness around the affected joint that can appear within hours",
  "Extreme tenderness -even the weight of a bedsheet can feel unbearable during a flare",
  "Limited range of motion in the affected joint as the attack progresses",
  "A burning or throbbing sensation that typically peaks within 12–24 hours of onset",
  "Formation of tophi -firm, whitish lumps of urate crystals under the skin near joints, ears, or tendons in chronic cases",
  "Peeling or itchy skin around the joint as the flare subsides",
]

const causes = [
  { title: "Purine metabolism", desc: "Your body produces uric acid when it breaks down purines -natural compounds found in your cells and in certain foods. Normally, uric acid dissolves in the blood, passes through the kidneys, and leaves the body in urine. When this system falls out of balance, urate crystals can form and deposit in your joints." },
  { title: "Overproduction of uric acid (hyperuricemia)", desc: "Conditions like chronic hemolytic anemia, thalassemia, psoriasis, and certain cancers accelerate cell turnover, flooding the body with purines. A diet heavy in red meat, organ meats, shellfish, and alcohol -particularly beer -adds to the purine load." },
  { title: "Decreased excretion of uric acid", desc: "The kidneys handle about two-thirds of uric acid removal. Chronic kidney disease, dehydration, hypertension, hypothyroidism, and certain medications (thiazide diuretics, low-dose aspirin, cyclosporine) can all slow renal urate excretion, allowing levels to climb." },
]

const riskFactors = [
  { factor: "Sex & age", detail: "Men are 3–4 times more likely to develop gout than premenopausal women, because estrogen helps the kidneys excrete uric acid. After menopause, women's risk rises significantly. Most first attacks occur between ages 40 and 60." },
  { factor: "Diet", detail: "Regular consumption of purine-rich foods (red meat, organ meats, shellfish) and sugar-sweetened beverages raises uric acid levels. Beer and spirits carry a particularly strong association -beer contains its own purines and also impairs urate excretion." },
  { factor: "Obesity", detail: "Excess body weight increases uric acid production and reduces renal excretion. Visceral fat is especially problematic because it drives systemic inflammation that compounds the effect of crystal deposition." },
  { factor: "Medical conditions", detail: "Hypertension, diabetes, metabolic syndrome, chronic kidney disease, and heart disease are all independently associated with elevated uric acid. These conditions often cluster together, creating a cycle that worsens gout risk." },
  { factor: "Medications", detail: "Thiazide diuretics (commonly prescribed for blood pressure), low-dose aspirin, cyclosporine, and some anti-rejection drugs can elevate uric acid by impairing kidney excretion." },
  { factor: "Family history", detail: "Gout has a strong genetic component. If a close relative has gout, your risk increases substantially -certain gene variants affect how efficiently your kidneys handle urate." },
]

const diagnosisSteps = [
  "Joint fluid analysis (arthrocentesis) -the gold standard. A needle draws fluid from the inflamed joint to check for monosodium urate crystals under polarized light microscopy.",
  "Blood tests for serum uric acid levels, though levels can be normal during an acute attack -so this test alone isn't definitive.",
  "Inflammatory markers: ESR (erythrocyte sedimentation rate) and CRP (C-reactive protein) to assess the degree of inflammation.",
  "Imaging: Ultrasound can detect the \"double contour\" sign of urate deposits on cartilage. Dual-energy CT (DECT) can identify urate crystal deposits throughout the body, even between attacks.",
  "X-rays to evaluate chronic joint damage in patients with recurrent or long-standing gout.",
  "Ruling out conditions that mimic gout: septic arthritis, pseudogout (calcium pyrophosphate deposition), cellulitis, rheumatoid arthritis, and stress fractures.",
]

const treatmentSteps = [
  {
    number: 1,
    title: "Managing the acute flare",
    desc: "The first priority is bringing a gout attack under control as quickly as possible. Treatment is most effective when started within 24 hours of symptom onset.",
    details: [
      "NSAIDs (naproxen, indomethacin, celecoxib) -first-line for most patients",
      "Colchicine -highly effective when taken early, especially within 12 hours of flare onset",
      "Corticosteroids (prednisone, methylprednisolone) -used when NSAIDs are contraindicated or for patients with kidney concerns",
      "IL-1 inhibitors (anakinra, canakinumab) -for refractory flares that don't respond to standard therapy",
      "Rest, ice, and elevation of the affected joint during the attack",
    ],
  },
  {
    number: 2,
    title: "Lowering uric acid for long-term control",
    desc: "Once the acute flare resolves, the goal shifts to preventing future attacks by bringing serum uric acid below 6 mg/dL -the level at which existing crystals begin to dissolve.",
    details: [
      "Xanthine oxidase inhibitors (allopurinol, febuxostat) -reduce uric acid production and are the cornerstone of long-term therapy",
      "Uricosuric agents (probenecid, lesinurad) -help the kidneys excrete more uric acid",
      "Pegloticase -an IV infusion for severe, treatment-resistant gout that converts uric acid to a form the body can easily eliminate",
      "Low-dose colchicine or NSAID prophylaxis during the first 3–6 months of urate-lowering therapy to prevent rebound flares",
    ],
  },
  {
    number: 3,
    title: "Lifestyle modifications & dietary guidance",
    desc: "Diet and lifestyle changes work alongside medication to keep uric acid in check. These adjustments can meaningfully reduce flare frequency and improve your overall metabolic health.",
    details: [
      "Limit purine-rich foods: red meat, organ meats, shellfish, and anchovies",
      "Reduce or eliminate alcohol -especially beer and spirits",
      "Stay well-hydrated (aim for 2–3 liters of water per day)",
      "Increase consumption of low-fat dairy, cherries, and vitamin C-rich foods -all associated with lower uric acid",
      "Achieve and maintain a healthy weight through gradual loss (crash dieting can trigger flares)",
    ],
  },
  {
    number: 4,
    title: "Ongoing monitoring & whole-person care",
    desc: "Gout doesn't exist in isolation. Our providers monitor the full picture -including the cardiovascular, kidney, and metabolic conditions that often accompany it.",
    details: [
      "Regular serum uric acid monitoring (target: below 6 mg/dL, or below 5 mg/dL for tophaceous gout)",
      "Kidney function tests and blood pressure monitoring",
      "Cardiovascular risk assessment -gout independently raises heart attack and stroke risk",
      "Joint imaging to track crystal burden and confirm dissolution over time",
      "Mental health support for the anxiety and frustration that chronic pain conditions can cause",
    ],
  },
]

const complications = [
  { title: "Recurrent flares", desc: "Without urate-lowering therapy, most patients experience repeated attacks -and the interval between flares tends to shorten over time. What starts as one flare a year can become monthly episodes." },
  { title: "Tophaceous gout", desc: "Years of elevated uric acid can lead to visible deposits of urate crystals (tophi) in joints, cartilage, tendons, and soft tissue. Tophi are painless initially but can erode bone and permanently damage joints if left untreated." },
  { title: "Joint destruction", desc: "Chronic crystal deposition causes ongoing low-grade inflammation that gradually erodes cartilage and bone, leading to permanent joint deformity and disability." },
  { title: "Kidney stones & kidney disease", desc: "Uric acid stones account for 5–10% of all kidney stones. Chronically elevated uric acid can also contribute to progressive kidney damage through crystal deposition in the renal tubules." },
  { title: "Cardiovascular disease", desc: "Gout is independently associated with a 60% higher risk of heart attack and a 70% higher risk of stroke. The chronic inflammation and metabolic dysfunction that drive gout also accelerate atherosclerosis." },
]


/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function Gout() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    document.title = "Gout | Omni Rheuma"
    return () => { document.title = "Omni Rheuma | Professional Rheumatology Resource" }
  }, [])

  /* Scroll-spy for TOC highlight */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    )
    const sections = document.querySelectorAll("[data-toc-section]")
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <GoutHero />

        {/* ═══════════ ARTICLE BODY + CTA SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="lg:flex lg:gap-14">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0">

                {/* Author line */}
                <div className="flex items-center gap-3 mb-10">
                  <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-10 h-10 rounded-full object-cover object-top bg-[#f0cfc4]" />
                  <div>
                    <p className="text-sm font-semibold text-navy-deep leading-tight">Dr. Raghavendra H</p>
                    <p className="text-xs text-navy-muted">Rheumatologist &middot; Reviewed Mar 2026</p>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    {["link", "mail", "share"].map((icon) => (
                      <button key={icon} className="w-8 h-8 rounded-full bg-ghost flex items-center justify-center text-navy-muted hover:text-navy-deep hover:bg-sky-faint transition-colors">
                        <span className="material-symbols-outlined text-[16px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    Gout is a form of{" "}
                    <strong className="font-semibold" style={{ color: "#1A355D", background: "#fa885a", padding: "2px 6px", borderRadius: "3px" }}>
                      inflammatory arthritis
                    </strong>{" "}
                    that develops when uric acid builds up in your blood and forms sharp, needle-like crystals in a joint. If you&apos;ve ever been jolted awake at 2 a.m. by a throbbing, red-hot big toe that hurts too much to touch -you already know how intense a gout flare can be.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                    The good news is that gout is one of the best-understood and most treatable forms of arthritis. Unlike conditions where the underlying cause remains unclear, we know exactly what drives gout: excess uric acid. That means we have a clear target -and with the right combination of medication, lifestyle adjustments, and ongoing monitoring, most patients can eliminate flares entirely and prevent long-term joint damage.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted mb-14">
                    At Omni Rheuma, we take a comprehensive approach to gout -one that goes beyond treating individual flares. We work with you to lower your uric acid to a safe level, address the metabolic conditions that often accompany gout, and build a plan that fits your life. Read on for everything you need to know about gout symptoms, causes, diagnosis, and the treatments that make a real difference.
                  </p>
                </div>

                {/* ── KEY FACTS ── */}
                <div id="key-facts" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Key facts about gout
                  </h2>
                  <div className="bg-sky-faint/50 border border-sky-soft/40 p-6 md:p-8" style={{ borderRadius: 0 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted/60 mb-1">Typically affects</p>
                        <p className="text-[15px] text-navy-deep">Adults aged 40–60, men 3–4x more than women</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted/60 mb-1">Primary joints</p>
                        <p className="text-[15px] text-navy-deep">Big toe, ankles, knees, wrists, fingers, elbows</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted/60 mb-1">Global prevalence</p>
                        <p className="text-[15px] text-navy-deep">~0.54% worldwide; 0.12–0.19% in India</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted/60 mb-1">Key diagnostic test</p>
                        <p className="text-[15px] text-navy-deep">Joint fluid analysis (polarized microscopy)</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted/60 mb-1">Mimicking conditions</p>
                        <p className="text-[15px] text-navy-deep">Pseudogout, septic arthritis, cellulitis, RA</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted/60 mb-1">Specialists</p>
                        <p className="text-[15px] text-navy-deep">Rheumatologist, orthopedician</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Gout symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    A gout flare typically comes on fast -often overnight -and reaches peak intensity within{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>12 to 24 hours</strong>.
                    The big toe is the most common site (a condition called podagra), but gout can strike any joint. Here&apos;s what to watch for:
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Between flares, you may feel completely fine -but that doesn&apos;t mean the disease is inactive. Urate crystals can continue to accumulate silently, and without treatment, flares tend to become{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>more frequent and severe</strong> over time.
                  </p>
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    What causes gout
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Gout is caused by{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>hyperuricemia</strong>{" "}
                    -a sustained elevation of uric acid in the blood above the saturation point (~6.8 mg/dL), at which urate crystals begin to form and deposit in joints and surrounding tissue.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {causes.map((c, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{c.title}.</strong> {c.desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── RISK FACTORS ── */}
                <div id="risk-factors" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Gout risk factors
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Not everyone with high uric acid develops gout -but several factors can{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>significantly raise your odds</strong>.
                    Some are modifiable, others aren&apos;t -knowing which is which helps you take the right steps.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.map((r, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{r.factor}.</strong> {r.detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Gout diagnosis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    A proper diagnosis matters because gout treatment is very specific -and several other conditions can look almost identical. Here&apos;s how your rheumatologist will confirm it:
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {diagnosisSteps.map((step, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── KEY FACTORS (mid-blog divider section) ── */}
                <hr style={{ border: "none", borderTop: "1px solid #1AA3B5", marginTop: "3rem", marginBottom: "0" }} />
                <div style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      letterSpacing: "-0.5px",
                      color: "#0f616e",
                      marginBottom: "2rem",
                    }}
                  >
                    Key Factors to Consider When Managing Gout
                  </h2>
                  <p className="text-[16px] leading-[1.8]" style={{ color: "#5e5e5e", marginBottom: "1.75rem" }}>
                    Effective gout management involves understanding a few critical factors, such as:
                  </p>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                    {[
                      "Accurate diagnosis through joint fluid analysis and imaging",
                      "Identifying and addressing underlying causes of elevated uric acid",
                      "Personalised medication plans -from flare management to long-term urate-lowering therapy",
                      "Dietary and lifestyle modifications tailored to your metabolic profile",
                      "Regular monitoring of uric acid levels, kidney function, and cardiovascular risk",
                      "Coordination with specialists for comorbid conditions like diabetes and hypertension",
                    ].map((item, i) => (
                      <li key={i} style={{ color: "#182439", fontSize: "16px", lineHeight: 1.8, marginBottom: "0.25rem", fontWeight: 500 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[16px] leading-[1.8]" style={{ color: "#5e5e5e" }}>
                    At Omni Rheuma, our rheumatologists specialise in comprehensive gout care. With evidence-based protocols, personalised treatment plans, and a patient-first approach, we help you achieve lasting uric acid control and prevent irreversible joint damage.
                  </p>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #1AA3B5", marginBottom: "2.5rem" }} />

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginTop: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}>
                    Gout{" "}
                    <span className="relative inline-block">
                      treatment
                      <svg className="absolute -bottom-1 left-0 w-full h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                        <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                    </span>
                  </h2>

                  <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#182439", marginBottom: "2.5rem" }}>
                    We take a step-by-step approach to gout -first stopping the pain, then preventing it from coming back. Here&apos;s how our providers work together:
                  </p>

                  {/* Care Team Card */}
                  <div className="border border-border overflow-hidden" style={{ borderRadius: 0, marginBottom: "2.5rem" }}>
                    <div className="flex">
                      <div className="hidden md:block w-[220px] shrink-0">
                        <img src="/images/hero-doctor.webp" alt="Rheuma specialist" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 p-5 md:p-6">
                        <h3 className="text-navy-deep mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, lineHeight: 1.2 }}>
                          Rheuma&apos;s care for gout
                        </h3>
                        <div className="flex items-start gap-3 mb-4">
                          <img src="/raghav.webp" alt="" className="w-10 h-10 rounded-full object-cover object-top bg-[#f0cfc4] shrink-0" />
                          <p className="text-[13px] leading-[1.6] text-navy-deep"><strong className="font-bold" style={{ color: "#1AA3B5" }}>Rheumatologist:</strong> Confirms diagnosis, prescribes urate-lowering therapy, and monitors uric acid targets.</p>
                        </div>
                        <div className="flex items-start gap-3 mb-4">
                          <img src="/d1.webp" alt="" className="w-10 h-10 rounded-full object-cover object-top bg-[#dce7f7] shrink-0" />
                          <p className="text-[13px] leading-[1.6] text-navy-deep"><strong className="font-bold" style={{ color: "#1AA3B5" }}>Dietitian:</strong> Creates a personalized low-purine nutrition plan that you can actually stick to.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <img src="/d2.webp" alt="" className="w-10 h-10 rounded-full object-cover object-top bg-[#e0f3f5] shrink-0" />
                          <p className="text-[13px] leading-[1.6] text-navy-deep"><strong className="font-bold" style={{ color: "#1AA3B5" }}>Care Coordinator:</strong> Manages follow-ups, lab work scheduling, and keeps your entire care team aligned.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#182439", marginBottom: "3.5rem" }}>
                    Here&apos;s how our providers work together to put you on a path to{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>flare-free living</strong>.
                  </p>

                  {/* Numbered Treatment Steps */}
                  {treatmentSteps.map((step) => (
                    <div key={step.number} style={{ marginBottom: "3.5rem", paddingTop: "2rem", borderTop: "1px solid #dadfe8" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 400, lineHeight: 1.25, color: "#182439", marginBottom: "1.25rem" }}>
                        {step.number}. {step.title}
                      </h3>
                      <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#182439", marginBottom: "1.5rem" }}>{step.desc}</p>
                      <ul className="space-y-3" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {step.details.map((d, j) => (
                          <li key={j} style={{ fontSize: "17px", lineHeight: 1.75, color: "#182439", paddingLeft: "4px" }}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* ── PREVENTION & HOME CARE ── */}
                <div id="prevention" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Prevention & home care
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    While medication is the backbone of gout management, these daily habits make a meaningful difference in keeping flares at bay:
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">Hydrate aggressively.</strong> Aim for 2–3 liters of water daily. Dehydration concentrates uric acid and is one of the most common -and preventable -flare triggers.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">Rethink your plate.</strong> Prioritize low-fat dairy, whole grains, vegetables, and cherries. Limit red meat, organ meats, shellfish, and sugary beverages. You don&apos;t need a restrictive diet -small, consistent swaps add up.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">Limit alcohol -especially beer.</strong> Beer raises uric acid both by increasing production and decreasing excretion. Wine in moderation appears to carry less risk, but during active disease, cutting alcohol entirely is safest.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">Manage your weight gradually.</strong> Losing even 5–10% of body weight can lower uric acid meaningfully. But avoid crash diets or fasting -rapid weight loss can paradoxically trigger a flare.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">During a flare:</strong> Rest the joint, apply ice for 20 minutes at a time, elevate the limb, and take prescribed medication immediately. Don&apos;t wait to see if the pain passes -early treatment shortens attacks dramatically.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">Cherry juice and vitamin C.</strong> Multiple studies show that tart cherry juice (or cherry extract) and vitamin C supplements (500 mg/day) can modestly lower uric acid levels and reduce flare risk when used alongside standard therapy.</li>
                  </ul>
                </div>

                {/* ── COMPLICATIONS ── */}
                <div id="complications" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Gout complications
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Left untreated, gout isn&apos;t just painful -it can cause lasting damage to your joints and broader health. Here&apos;s what chronic, uncontrolled gout can lead to:
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {complications.map((c, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{c.title}.</strong> {c.desc}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-bold">
                    Worried about your gout getting worse?{" "}
                    <a href="#treatment" className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>
                      Connect with a Rheuma rheumatologist to build a treatment plan that stops the damage before it starts
                    </a>.
                  </p>
                </div>

                {/* ── NEWSLETTER (inside article) ── */}
                <GoutNewsletter />

                <hr className="border-none border-t border-[#dcdcdc] mt-12" />

              </div>

              {/* ── Right: TOC + CTA Sidebar ── */}
              <div className="hidden lg:block w-[280px] shrink-0">
                <div className="sticky top-[88px] guide-sidebar-scroll" style={{ maxHeight: "calc(100vh - 112px)", overflowY: "auto", overflowX: "hidden" }}>
                  {/* Table of Contents */}
                  <div className="bg-[#edf2fc] py-5 px-6 mb-6 shadow-[0_4px_24px_rgba(24,36,57,0.07)]" style={{ borderRadius: 0 }}>
                    <h3
                      className="text-navy-deep mb-3"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.2 }}
                    >
                      Table of Contents
                    </h3>
                    <nav className="flex flex-col">
                      {tocSections.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => scrollToSection(s.id)}
                          className="text-left py-2 border-b border-navy-deep/8 last:border-0"
                        >
                          <span
                            className={`text-[13.5px] ${activeSection === s.id ? "text-navy-deep font-semibold" : "text-navy-deep/70 hover:text-navy-deep"}`}
                            style={{ textDecoration: "underline", textDecorationColor: "currentColor", textUnderlineOffset: "4px", textDecorationThickness: "1px" }}
                          >
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-white p-6 border border-border/50" style={{ borderRadius: 0 }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#e0f3f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#1A355D" }}>health_and_safety</span>
                    </div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.3, color: "#1A355D", marginBottom: "12px" }}>
                      You don&apos;t have to live with gout flares
                    </h4>
                    <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#3b5b80", marginBottom: "20px" }}>
                      Get started on your path to flare-free living in 3 minutes or less -and get seen by a rheumatologist within days.
                    </p>
                    <a
                      href="#"
                      style={{ display: "block", width: "100%", textAlign: "center", borderRadius: "9999px", fontWeight: 600, fontSize: "14px", padding: "12px 0", backgroundColor: "#1AA3B5", color: "#ffffff", transition: "opacity 0.2s" }}
                    >
                      Book Your First Visit
                    </a>
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

export default Gout
