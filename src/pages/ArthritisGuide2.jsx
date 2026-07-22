import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import { ChevronRight, Users, Calendar, Stethoscope, ArrowDown } from "lucide-react"

const TABS = [
  { id: "overview", label: "Overview", target: "what-is-ra" },
  { id: "causes", label: "Causes & Symptoms", target: "common-symptoms" },
  { id: "diagnosis", label: "Diagnosis", target: "how-diagnosed" },
  { id: "treatment", label: "Treatment", target: "treatment-options" },
  { id: "living", label: "Living With RA", target: "living-well" },
]

const TOC = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "key-stats", label: "Key statistics" },
  { id: "common-symptoms", label: "Common symptoms" },
  { id: "root-causes", label: "Root causes" },
  { id: "stages-of-ra", label: "Stages of RA" },
  { id: "how-diagnosed", label: "How it's diagnosed" },
  { id: "treatment-options", label: "Treatment options" },
  { id: "living-well", label: "Living well with RA" },
  { id: "faq", label: "FAQ" },
]

function FemaleIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M12 13v8" />
      <path d="M9 18h6" />
    </svg>
  )
}

const STATS = [
  { Icon: Users, value: "1 in 100", label: "Indians estimated to have RA" },
  { Icon: FemaleIcon, value: "3x", label: "More common in women than men" },
  { Icon: Calendar, value: "30-50", label: "Typical age of onset in years" },
]

const SYMPTOMS = [
  "Warmth, pain, and swollen joints",
  "Morning stiffness that lasts for more than one hour",
  "Symmetric joint involvement (both sides)",
  "Fatigue, low-grade fever, and weight loss",
  "Small joints of hands, wrists, and feet affected first",
  "Rheumatoid nodules under the skin near affected joints",
]

const CAUSES = [
  { title: "Genetic factors", desc: "Certain genes (HLA-DR4) increase susceptibility to RA. Family history plays an important role." },
  { title: "Environmental triggers", desc: "Smoking, infections, and hormonal changes may trigger disease onset in genetically predisposed individuals." },
  { title: "Autoimmune response", desc: "The immune system mistakenly attacks the synovium, the lining of joints, causing inflammation." },
]

const STAGES = [
  { stage: "Stage 1", title: "Early RA", desc: "Synovial inflammation begins. Joint pain and stiffness present but no visible damage on X-ray yet." },
  { stage: "Stage 2", title: "Moderate RA", desc: "Cartilage damage starts. Joint mobility becomes limited. Antibodies detectable in blood tests." },
  { stage: "Stage 3", title: "Severe RA", desc: "Bone erosion and joint deformity appear. Muscle loss around joints. Nodules may develop." },
  { stage: "Stage 4", title: "End-stage RA", desc: "Joints stop functioning. Fusion of bones (ankylosis) may occur. Significant disability without treatment." },
]

const TREATMENTS = [
  { title: "DMARDs", desc: "Disease-modifying anti-rheumatic drugs like methotrexate slow disease progression and prevent joint damage." },
  { title: "Biologics", desc: "Targeted therapies (TNF inhibitors, JAK inhibitors) for patients who don't respond to conventional DMARDs." },
  { title: "NSAIDs & Steroids", desc: "For short-term pain and inflammation control, especially during flares." },
  { title: "Physical therapy", desc: "Maintains joint mobility, strengthens muscles, and reduces disability." },
  { title: "Lifestyle changes", desc: "Anti-inflammatory diet, regular low-impact exercise, and smoking cessation." },
]

const FAQS = [
  { q: "Is Rheumatoid Arthritis curable?", a: "There is no cure yet, but early treatment can put RA into remission, meaning no active symptoms and no joint damage progression." },
  { q: "How is RA different from Osteoarthritis?", a: "RA is autoimmune and inflammatory, affecting joints symmetrically. Osteoarthritis is wear-and-tear related, usually affecting one side or specific joints." },
  { q: "Can diet help manage RA?", a: "Yes. A Mediterranean-style diet rich in omega-3s, vegetables, and whole grains can reduce inflammation. Avoid processed foods and excess sugar." },
  { q: "When should I see a rheumatologist?", a: "If joint pain lasts more than 6 weeks, with morning stiffness over an hour or swelling in multiple joints, book an appointment immediately." },
  { q: "Is RA hereditary?", a: "There's a genetic component, but having a family history doesn't guarantee you'll develop RA. Environmental triggers also play a major role." },
]

const RADIUS = "6px"

function ArthritisGuide2() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeSection, setActiveSection] = useState("what-is-ra")

  useEffect(() => {
    document.title = "Rheumatoid Arthritis Guide | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      for (const s of TOC) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom > 140) {
          setActiveSection(s.id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh", fontFamily: "var(--font-base)", color: "#1a1a1a" }}>
      <Header />

      {/* HERO */}
      <section style={{ backgroundColor: "#0f616e", paddingTop: "40px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[13px]" style={{ color: "#a0e2e4", marginBottom: "18px" }}>
            <Link to="/" style={{ color: "#a0e2e4", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} />
            <Link to="/conditions" style={{ color: "#a0e2e4", textDecoration: "none" }}>Diseases & Conditions</Link>
            <ChevronRight size={14} />
            <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
          </div>

          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#F97316", marginBottom: "12px" }}>
            Autoimmune Condition
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05, color: "#ffffff", marginBottom: "16px", letterSpacing: "-1.5px" }}>
            Rheumatoid Arthritis
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.78)", marginBottom: "36px", maxWidth: "620px", lineHeight: 1.55 }}>
            What it is, symptoms, causes and treatment options
          </p>

          <div className="flex flex-wrap items-stretch" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    scrollTo(tab.target)
                  }}
                  style={{
                    padding: "18px 28px",
                    background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                    border: "none",
                    borderBottom: isActive ? "2px solid #1AA3B5" : "2px solid transparent",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-base)",
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* DOCTOR STRIP */}
      <section style={{ backgroundColor: "#F5F5F5", paddingTop: "24px", paddingBottom: "24px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-wrap items-center gap-5"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #eaeef3",
              borderRadius: RADIUS,
              padding: "16px 22px",
            }}
          >
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#0f616e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Stethoscope size={22} color="#ffffff" />
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#8a94a6", marginBottom: "4px" }}>
                Medically Reviewed By
              </p>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", marginBottom: "2px" }}>Dr. Raghavendra H</p>
              <p style={{ fontSize: "13px", color: "#5E5E5E" }}>DM Rheumatology · Gold Medalist · Manipal Hospitals Hebbal & Trilife Hospital</p>
            </div>
            <Link
              to="/book-appointment"
              style={{
                backgroundColor: "#F97316",
                color: "#ffffff",
                padding: "12px 22px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Book appointment
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ backgroundColor: "#F5F5F5", paddingBottom: "80px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-10">
            {/* Left TOC */}
            <aside className="hidden lg:block" style={{ width: "240px", flexShrink: 0 }}>
              <div className="sticky" style={{ top: "88px" }}>
                <div style={{ backgroundColor: "#E8F4F8", borderRadius: RADIUS, border: "1px solid #d6e6ec", overflow: "hidden" }}>
                  <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "18px 20px 10px" }}>
                    On This Page
                  </p>
                  <nav className="flex flex-col">
                    {TOC.map((s) => {
                      const isActive = activeSection === s.id
                      return (
                        <button
                          key={s.id}
                          onClick={() => scrollTo(s.id)}
                          style={{
                            padding: "10px 20px",
                            fontSize: "13.5px",
                            textAlign: "left",
                            background: isActive ? "#d4ebf0" : "transparent",
                            color: isActive ? "#0f616e" : "#4a5568",
                            fontWeight: isActive ? 600 : 400,
                            border: "none",
                            cursor: "pointer",
                            borderLeft: isActive ? "3px solid #0f616e" : "3px solid transparent",
                            transition: "all 0.15s",
                          }}
                        >
                          {s.label}
                        </button>
                      )
                    })}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <div className="flex-1 min-w-0">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: "16px", marginBottom: "40px" }}>
                {STATS.map((s, i) => {
                  const Icon = s.Icon
                  return (
                    <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #eaeef3", borderRadius: RADIUS, padding: "24px 22px", textAlign: "center" }}>
                      <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                        <Icon size={26} color="#0f616e" />
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", fontWeight: 400, color: "#0f616e", marginBottom: "8px", lineHeight: 1 }}>
                        {s.value}
                      </div>
                      <div style={{ fontSize: "13px", color: "#5E5E5E", lineHeight: 1.5 }}>
                        {s.label}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* What is RA */}
              <section id="what-is-ra" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px", letterSpacing: "-0.5px" }}>
                  What is Rheumatoid Arthritis?
                  <ArrowDown size={18} style={{ marginLeft: "12px", color: "#1AA3B5", display: "inline" }} />
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#1a1a1a", marginBottom: "16px" }}>
                  Rheumatoid Arthritis (RA) is a chronic autoimmune disease where the body's immune system mistakenly attacks the lining of joints (synovium), causing inflammation, pain, and eventual joint damage if untreated.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#1a1a1a" }}>
                  Unlike osteoarthritis, which is caused by wear-and-tear, RA is systemic, meaning it can affect the whole body including the heart, lungs, and eyes, not just joints. Early diagnosis and treatment can put the disease into remission and prevent long-term disability.
                </p>
              </section>

              {/* Key stats */}
              <section id="key-stats" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Key statistics</h2>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ fontSize: "15px", lineHeight: 1.6, color: "#1a1a1a", paddingLeft: "20px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#1AA3B5" }}>•</span>
                    Around <strong style={{ color: "#0f616e" }}>1% of Indians</strong> live with RA. That's 13 million+ people.
                  </li>
                  <li style={{ fontSize: "15px", lineHeight: 1.6, color: "#1a1a1a", paddingLeft: "20px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#1AA3B5" }}>•</span>
                    Women are <strong style={{ color: "#0f616e" }}>2–3x more likely</strong> to develop RA than men.
                  </li>
                  <li style={{ fontSize: "15px", lineHeight: 1.6, color: "#1a1a1a", paddingLeft: "20px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#1AA3B5" }}>•</span>
                    Onset typically occurs between <strong style={{ color: "#0f616e" }}>30 and 50 years</strong> of age.
                  </li>
                  <li style={{ fontSize: "15px", lineHeight: 1.6, color: "#1a1a1a", paddingLeft: "20px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#1AA3B5" }}>•</span>
                    Early treatment can achieve remission in <strong style={{ color: "#0f616e" }}>up to 40%</strong> of patients.
                  </li>
                </ul>
              </section>

              {/* Common symptoms */}
              <section id="common-symptoms" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Common symptoms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SYMPTOMS.map((sym, i) => (
                    <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #eaeef3", borderRadius: RADIUS, padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#1AA3B5", marginTop: "8px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", lineHeight: 1.55, color: "#1a1a1a" }}>{sym}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Root causes */}
              <section id="root-causes" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Root causes</h2>
                <div className="flex flex-col gap-4">
                  {CAUSES.map((c, i) => (
                    <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #eaeef3", borderRadius: RADIUS, padding: "20px 22px" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", marginBottom: "6px" }}>{c.title}</h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#5E5E5E" }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Stages */}
              <section id="stages-of-ra" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Stages of RA</h2>
                <div className="flex flex-col gap-3">
                  {STAGES.map((s, i) => (
                    <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #eaeef3", borderRadius: RADIUS, padding: "18px 22px", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                      <div style={{ minWidth: "70px", padding: "6px 12px", backgroundColor: "#e0f3f5", color: "#0f616e", borderRadius: "4px", fontSize: "12px", fontWeight: 700, textAlign: "center", letterSpacing: "0.05em" }}>
                        {s.stage}
                      </div>
                      <div>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", marginBottom: "4px" }}>{s.title}</h3>
                        <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#5E5E5E" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How diagnosed */}
              <section id="how-diagnosed" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>How it's diagnosed</h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#1a1a1a", marginBottom: "16px" }}>
                  A rheumatologist typically combines clinical examination with lab tests and imaging:
                </p>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Blood tests: Rheumatoid Factor (RF), Anti-CCP antibodies, ESR, CRP",
                    "X-rays and MRI to detect joint damage or inflammation",
                    "Ultrasound to check for synovial swelling",
                    "Clinical assessment of tender/swollen joint count",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "14px", lineHeight: 1.6, color: "#1a1a1a", paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#1AA3B5" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Treatment */}
              <section id="treatment-options" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Treatment options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TREATMENTS.map((t, i) => (
                    <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #eaeef3", borderRadius: RADIUS, padding: "20px 22px" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", marginBottom: "8px" }}>{t.title}</h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#5E5E5E" }}>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Living well */}
              <section id="living-well" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Living well with RA</h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#1a1a1a", marginBottom: "14px" }}>
                  RA is a long-term condition, but with the right plan you can live a full, active life. The keys are:
                </p>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Stick to your medication schedule, even during remission",
                    "Regular low-impact exercise (walking, swimming, yoga)",
                    "Balanced diet rich in omega-3s and antioxidants",
                    "Quit smoking, as smoking worsens RA outcomes",
                    "Manage stress with mindfulness or therapy",
                    "Regular rheumatologist visits to monitor disease activity",
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: "14px", lineHeight: 1.6, color: "#1a1a1a", paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#1AA3B5" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ */}
              <section id="faq" style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 400, color: "#0f616e", marginBottom: "18px" }}>Frequently Asked Questions</h2>
                <div className="flex flex-col gap-3">
                  {FAQS.map((faq, i) => (
                    <details key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #eaeef3", borderRadius: RADIUS, padding: "16px 22px" }}>
                      <summary style={{ fontSize: "15px", fontWeight: 600, color: "#0f616e", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {faq.q}
                        <span style={{ color: "#1AA3B5", fontSize: "20px", marginLeft: "12px" }}>+</span>
                      </summary>
                      <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#5E5E5E", marginTop: "12px" }}>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section style={{ backgroundColor: "#0f616e", borderRadius: RADIUS, padding: "32px 28px", textAlign: "center", marginTop: "40px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, color: "#ffffff", marginBottom: "10px" }}>
                  Have questions about your symptoms?
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginBottom: "20px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
                  Book a personal consultation with Dr. Raghavendra H and get clarity on your joint pain and a treatment plan tailored to you.
                </p>
                <Link to="/book-appointment" style={{ display: "inline-block", backgroundColor: "#F97316", color: "#ffffff", padding: "14px 32px", borderRadius: "9999px", fontSize: "15px", fontWeight: 700, textDecoration: "none" }}>
                  Book appointment
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>

      <BriefingFooter />
    </div>
  )
}

export default ArthritisGuide2
