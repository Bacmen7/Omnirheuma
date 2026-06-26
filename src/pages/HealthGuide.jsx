import { useRef, useState } from "react"
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
  { id: "understanding-blood-work-rf-anti-ccp", title: "Understanding your Blood Work: RF and Anti-CCP", image: "/blog-articles/joint-pain-assessment.webp", readTime: "12 min read", category: "Diagnostics", author: "Dr. Raghavendra H", excerpt: "Learn what RF and Anti-CCP blood tests mean for your rheumatoid arthritis diagnosis and treatment plan." },
  { id: "gentle-exercises-flaring-joints", title: "Gentle Exercises for Flaring Joints", image: "/blog-articles/morning-joint-stiffness.webp", readTime: "8 min read", category: "Lifestyle", author: "Dr. Priya Sharma", excerpt: "Safe, low-impact exercises that can help maintain mobility and reduce pain during RA flares." },
  { id: "anti-inflammatory-diet", title: "The Anti-Inflammatory Diet: Truths vs Myths", image: "/blog-articles/lifestyle-flare-triggers.webp", readTime: "10 min read", category: "Diet & Nutrition", author: "Dr. Ananya Krishnan", excerpt: "Separating fact from fiction when it comes to anti-inflammatory foods and their impact on symptoms." },
]

const faqs = [
  { q: "What does a rheumatologist do?", a: "A rheumatologist is a doctor who specializes in conditions affecting the joints, muscles, bones, and immune system. They diagnose and treat more than 200 conditions, ranging from common problems like osteoarthritis, rheumatoid arthritis to more complex autoimmune diseases such as lupus and vasculitis." },
  { q: "When should I see a rheumatologist vs. my primary care doctor?", a: "Your primary care doctor can treat many common joint, muscle, and back problems. You should see a rheumatologist if your symptoms last longer, seem inflammatory, or don't improve with basic treatment." },
  { q: "Are rheumatic diseases hereditary?", a: "Yes, genetics can increase your risk of rheumatic diseases, but they are not the only cause.\n\nHaving certain genes, like HLA-B27, can raise the risk of conditions such as ankylosing spondylitis. A family history of rheumatoid arthritis (RA) can increase your risk 3 to 5 times.\n\nHowever, genes alone do not cause these diseases. Environmental factors such as infections, smoking, hormonal changes, and stress can trigger the disease in people who are genetically sensitive.\n\nMost people with a genetic risk do not develop rheumatic disease." },
  { q: "Can rheumatic conditions be cured?", a: "Most autoimmune rheumatic conditions cannot be cured, but they can be effectively controlled. Modern treatments achieve clinical remission in up to 50-60% of RA patients. 'Remission' means minimal to no symptoms, normal inflammatory markers, and no ongoing joint damage -essentially living as if you don't have the disease. Early, aggressive treatment gives the best chance of remission." },
  { q: "What lifestyle changes actually help with inflammatory arthritis?", a: "Yes. Healthy lifestyle habits can help reduce inflammation, ease joint pain, and improve overall well-being. Regular exercise, a balanced diet, good sleep, stress management, avoiding smoking, and maintaining a healthy weight can all support better symptom control. However, these measures work best alongside the treatment plan recommended by your rheumatologist." },
  { q: "How long does it take for treatment to work?", a: "The timeline depends on how severe the condition is and the type of arthritis being treated. In milder cases, people may start noticing improvement within a few weeks, while more severe or long-standing arthritis may take 2–3 months or longer before symptoms are well controlled. Regular follow-up with a rheumatologist is important, as treatment may need to be adjusted over time to achieve the best results." },
]

/* Condition tiles -mirrors the Knowledge Hub "Know more about Your condition" section */
const arthritisConditions = [
  { key: "ra", name: "Rheumatoid Arthritis", typeLabel: "Autoimmune" },
  { key: "oa", name: "Osteoarthritis", typeLabel: "Degenerative" },
  { key: "psa", name: "Psoriatic Arthritis", typeLabel: "Autoimmune" },
  { key: "as", name: "Ankylosing Spondylitis", typeLabel: "Autoimmune" },
]

const otherConditions = [
  { key: "gout", name: "Gout" },
  { key: "ctd", name: "Connective Tissue Disease" },
  { key: "fibro", name: "Fibromyalgia" },
  { key: "vasculitis", name: "Vasculitis" },
  { key: "lupus", name: "Lupus (SLE)" },
  { key: "reactive", name: "Reactive Arthritis" },
  { key: "sjogrens", name: "Sjögren's Syndrome" },
  { key: "jia", name: "Juvenile Idiopathic Arthritis" },
  { key: "pmr", name: "Polymyalgia Rheumatica" },
  { key: "scleroderma", name: "Systemic Sclerosis" },
  { key: "osteoporosis", name: "Osteoporosis" },
  { key: "septic", name: "Septic Arthritis" },
  { key: "cppd", name: "Crystal Arthropathies (CPPD)" },
  { key: "mctd", name: "Mixed Connective Tissue Disease" },
  { key: "raynauds", name: "Raynaud's Phenomenon" },
]

const BookIcon = ({ size = 28, color = "#0f616e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function HealthGuide() {
  const scrollRef = useRef(null)
  const conditionsRef = useRef(null)
  const [activeCondition, setActiveCondition] = useState(null)
  const [showAllConditions, setShowAllConditions] = useState(false)

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

        {/* ═══════════ WHAT IS RHEUMATOLOGY (from Knowledge Hub) ═══════════ */}
        <section style={{ backgroundColor: "#ffffff", padding: "clamp(64px, 8vw, 120px) 0" }}>
          <div style={{ width: "90vw", maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

            {/* Top: Heading + Description -left aligned */}
            <div className="text-left" style={{ marginBottom: "clamp(48px, 5vw, 80px)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.85rem, 3.6vw, 2.9rem)", lineHeight: 1.12, letterSpacing: "-0.6px", color: "#0f616e", marginBottom: "20px" }}>
                What Is Rheumatology?
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)", marginBottom: "18px" }}>
                Rheumatology is a branch of medicine that focuses on conditions affecting your joints, muscles, and bones. These include everyday problems like joint, bone or muscle pain and stiffness. It also comprises conditions where the body's immune system mistakenly attacks its own tissues.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>
                A doctor who specialises in this field is called a rheumatologist. They are trained to diagnose, treat, and manage conditions such as Rheumatoid Arthritis, Gout, Lupus, Osteoporosis, and Ankylosing Spondylitis, among others.
              </p>
            </div>

            {/* Bottom: Two info cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(16px, 2vw, 32px)" }}>

              {/* Card 1 -When Should You See */}
              <div style={{ backgroundColor: "#e8f4f8", borderRadius: "16px", padding: "clamp(32px, 3vw, 48px)", transition: "box-shadow 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 36px 60px 0px rgba(0,0,0,0.06)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.2rem, 2.1vw, 1.55rem)", color: "#0f616e", lineHeight: 1.22, marginBottom: "18px" }}>
                  When Should You See a Rheumatologist?
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)", marginBottom: "22px" }}>
                  You should consider a visit if you notice any of the following:
                </p>
                <div className="flex flex-col" style={{ gap: "20px" }}>
                  {[
                    "Joint pain or swelling that lasts more than a few weeks",
                    "Morning stiffness that takes more than 30 minutes to ease",
                    "Unexplained fatigue along with joint or muscle pain",
                    "Joints that feel warm or look red",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="shrink-0 mt-1" style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#1AA3B5" }} />
                      <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2 -Why Early Care Matters */}
              <div style={{ backgroundColor: "#e8f4f8", borderRadius: "16px", padding: "clamp(32px, 3vw, 48px)", transition: "box-shadow 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 36px 60px 0px rgba(0,0,0,0.06)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.2rem, 2.1vw, 1.55rem)", color: "#0f616e", lineHeight: 1.22, marginBottom: "18px" }}>
                  Why Early Care Matters
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)", marginBottom: "22px" }}>
                  Many joint and immune conditions get worse over time if left untreated. Seeing a specialist early can prevent permanent joint damage, help you stay active, and improve your quality of life significantly.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>
                  The good news is that with the right diagnosis and treatment plan, most patients are able to manage their condition well and continue living a normal, fulfilling life.
                </p>
              </div>

            </div>
          </div>
        </section>

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

            {/* ─── Know more about Your condition (inside Explore by Condition) ─── */}
            <div className="mt-16 md:mt-20">
              {/* Arthritis group label */}
              <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
                Arthritis Conditions
              </div>

              {/* Big tiles -2 column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#dde6ee] overflow-hidden mb-8">
                {arthritisConditions.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setActiveCondition(activeCondition === c.key ? null : c.key)}
                    className={`condition-tile flex min-h-[124px] gap-6 items-center px-7 py-7 md:min-h-[138px] md:px-8 md:py-8 border-none cursor-pointer text-left transition-colors ${
                      activeCondition === c.key ? "bg-white" : "bg-[#e0f3f5] hover:bg-[#d4ebf8]"
                    }`}
                    style={{ fontFamily: "var(--font-base)" }}
                  >
                    <BookIcon size={30} color="#0f616e" />
                    <div className="flex-1">
                      <div className="text-[1.15rem] font-bold leading-snug text-navy-deep mb-1">{c.name}</div>
                      <div className="text-[13px] text-navy-muted">{c.typeLabel}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Other conditions label */}
              <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
                Other Conditions
              </div>

              {/* Small tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#dde6ee] overflow-hidden mb-4">
                {otherConditions.map((c, idx) => (
                  <button
                    key={c.key}
                    onClick={() => setActiveCondition(activeCondition === c.key ? null : c.key)}
                    className={`condition-tile flex gap-3 items-center p-5 border-none cursor-pointer text-left transition-colors ${
                      activeCondition === c.key ? "bg-white" : "bg-[#e0f3f5] hover:bg-[#d4ebf8]"
                    } ${!showAllConditions && idx >= 5 ? "hidden sm:flex" : ""}`}
                    style={{ fontFamily: "var(--font-base)" }}
                  >
                    <BookIcon size={22} color="#0f616e" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-navy-deep">{c.name}</div>
                    </div>
                    <div className="w-7 h-7 rounded-full text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowAllConditions(!showAllConditions)}
                className="text-[14px] font-semibold cursor-pointer sm:hidden mb-6"
                style={{ color: "#1AA3B5", background: "none", border: "none", padding: 0 }}
              >
                {showAllConditions ? "See less ↑" : "See more ↓"}
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════ WARNING SIGNS (matching ApproachSection pattern -dark section) ═══════════ */}
        {false && <section className="relative bg-navy-deep pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-white overflow-hidden">
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
        </section>}

        {/* ═══════════ DIAGNOSTIC JOURNEY (hidden) ═══════════ */}
        {false && (
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
        )}

        {/* ═══════════ TREATMENT APPROACHES (ghost bg, 2-col grid) ═══════════ */}
        {/* <section className="py-20 md:py-28 bg-ghost">
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

           ═══════════ FEATURED ARTICLES (matching RAArticles carousel) ═══════════
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
        </section> */}

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
                    {faq.a.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-sm text-navy-muted leading-relaxed" style={{ marginBottom: idx < faq.a.split("\n\n").length - 1 ? "12px" : 0 }}>{para}</p>
                    ))}
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

