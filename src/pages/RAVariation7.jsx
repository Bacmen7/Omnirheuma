import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - same content as original RA page
   ───────────────────────────────────────────── */

const symptoms = [
  "Warmth, pain, and swollen joints",
  "Morning stiffness that lasts for more than one hour",
  "Swelling and tenderness in small joints, such as the wrists and toes",
  "Low-grade fever, weakness, and feeling tired",
]

const stages = [
  { stage: "Stage 1", area: "The surrounding layer of the joint gets affected. No damage to bone.", symptoms: "Puffiness, tenderness and morning stiffness of the joint" },
  { stage: "Stage 2", area: "Damage increases and extends to the structure inside called cartilage.", symptoms: "Joint stiffness increases, and as a result, movements will be restricted." },
  { stage: "Stage 3", area: "Bone affected. Visible changes in X-ray.", symptoms: "Pain intensifies within the joints, and notable joint changes happen." },
  { stage: "Stage 4", area: "Irreversible bone damage", symptoms: "Severe restricted movements." },
]

const riskFactors = [
  { factor: "Familial genetic history", detail: "You have a higher chance of getting affected if rheumatoid arthritis is present within your close relatives (15% chance)." },
  { factor: "Sex", detail: "Women are affected 3 times more than men." },
  { factor: "Smoking", detail: "Smoking doubles the risk of RA." },
  { factor: "Obesity", detail: "You have a higher chance of rheumatoid arthritis if you are obese." },
  { factor: "Post-infections", detail: "Post-infections, such as Chikungunya, can increase the risk." },
]

const diagnosisBloodTests = ["Rheumatoid Factor (RF)", "Anti-CCP Antibody (ACPA)", "ESR (Erythrocyte Sedimentation Rate)"]
const diagnosisImaging = ["X-rays", "Ultrasounds", "Magnetic Resonance Imaging (MRI)"]

const medications = [
  { title: "NSAIDs and Corticosteroids", desc: "They are used to relieve short-term symptoms. But neither of them stops disease progression." },
  { title: "DMARDs", desc: "They alter our body's immune response. Methotrexate is the most common and widely used in India. Hydroxychloroquine, sulfasalazine, and leflunomide are alternative drugs used." },
  { title: "Biologic DMARDs", desc: "When traditional DMARDs fail, their modified forms are used. It includes drugs like TNF inhibitors, IL-6 inhibitors, and rituximab." },
  { title: "JAK Inhibitors", desc: "They can be used if biologic DMARDs are found not to work in patients." },
]

const nonMedApproaches = [
  { title: "Physiotherapy", desc: "Helps to improve the movements of the joints." },
  { title: "Occupational Therapy", desc: "Helps to protect joints during daily activities." },
  { title: "Personalised Yoga", desc: "Chance of improvement from fatigue and pain." },
  { title: "Smoking cessation", desc: "In smoker patients, to achieve a positive response." },
  { title: "Heat and Cold Therapy", desc: "Can provide relief from stiffness and acute swelling." },
]

const faqs = [
  { q: "Is Rheumatoid arthritis curable?", a: "Rheumatoid arthritis is not completely curable, but it can be effectively controlled. With early diagnosis and the right treatment, many people can reduce symptoms, prevent joint damage, and live a normal, active life." },
  { q: "What is the difference between Rheumatoid arthritis and normal arthritis?", a: "Rheumatoid arthritis is the attack of the body's own immune system. It is an autoimmune condition that affects both sides. Osteoarthritis is also called normal arthritis, which affects only one side. It is caused by excessive wear." },
  { q: "Does Rheumatoid arthritis only affect elderly people?", a: "No, Rheumatoid arthritis does not affect only elderly people. It can occur at any age, but it is most commonly seen in people between 30 and 60 years. It is also more common in women than in men." },
  { q: "Can I take Ayurvedic medicine with my Rheumatoid arthritis treatment?", a: "Yes, some Ayurvedic treatments may be used alongside standard Rheumatoid arthritis medications, but only under medical guidance. Always consult your rheumatologist before starting any Ayurvedic medicine, as some combinations may cause interactions." },
  { q: "How much does Rheumatoid arthritis treatment cost in India?", a: "Rheumatoid arthritis treatment costs in India vary widely, from around ₹500-₹2,000 per consultation to ₹10,000-₹30,000 or more for advanced therapies.\nMany government schemes and insurance plans may help reduce the cost - talk to your doctor about available options." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Living With RA"]
const tabTargets = { Overview: "overview", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Living With RA": "managing-ra" }

function RAVariation7() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Rheumatoid Arthritis Guide | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(100, Math.max(0, scrolled * 100)))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />

      {/* Reading progress bar - orange line at top */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>

        {/* ═══════════ HERO - light, centered, doctor card + stats ═══════════ */}
        <header style={{ backgroundColor: "#E8F4F8" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-0 text-center">
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 7vw, 68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Rheumatoid Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options - explained for patients and caregivers
            </p>

            {/* Disease image gradient card + overlapping stats */}
            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "40px 32px 76px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/condition/Rheumatoid Arthritis (RA).webp"
                    alt="Rheumatoid Arthritis"
                    style={{ width: "82%", height: "82%", objectFit: "contain", display: "block" }}
                  />
                </div>
              </div>

              {/* Overlapping stat cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ position: "relative", marginTop: "-44px", padding: "0 clamp(0px, 4vw, 32px)" }}>
                {[
                  { value: "1 in 100", label: "Indians affected by RA" },
                  { value: "40–60", label: "Most common onset age" },
                  { value: "3x", label: "More common in women" },
                ].map((s, i) => (
                  <div key={i} style={{ backgroundColor: "#ffffff", borderRadius: "6px", padding: "24px 18px", boxShadow: "0 6px 24px rgba(15,97,110,0.12)", border: "1px solid #e6ecf1" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 400, color: "#0f616e", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "13px", color: "#5E5E5E", marginTop: "8px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab pills - below the card */}
            <div className="flex flex-wrap justify-center gap-2.5 pb-10">
              {tabs.map((t) => (
                <button key={t} onClick={() => scrollTo(tabTargets[t])} className="nav-tab transition-colors" style={{ backgroundColor: "transparent", border: "1px solid rgba(15,97,110,0.3)", color: "#0f616e", padding: "9px 20px", borderRadius: "9999px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ═══════════ CONTENT - original UI, dark green dividers ═══════════ */}
        <section className="bg-white">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* OVERVIEW */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Have you ever experienced weakness or tiredness in your joints that makes it difficult to perform daily tasks? Do you often normalise these symptoms and ignore them? If you have experienced anything similar, this article covers everything you need to know.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                Rheumatoid arthritis is a long-term health condition in which the body&apos;s immune system fights against itself. As a result, you often experience pain, swelling, and, when left untreated, long-lasting damage. The exact cause is unknown.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                Rheumatoid arthritis is becoming increasingly common in India. It especially affects women between 40 and 60 years old. Many people think of it as regular joint pain and avoid a rheumatologist consultation, which can lead to serious health issues.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                With early diagnosis and proper treatment, RA can be controlled effectively. This guide will help you understand all about rheumatoid arthritis (RA), its various causes, how it presents, how doctors diagnose cases, and the available treatment options.
              </p>
            </div>

            <DarkDivider />

            {/* WHAT IS RA */}
            <div id="what-is-ra" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What is Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Joints are where two bones meet, such as your knuckles, knees, or wrists. Inside each joint is a thin lining called the synovium. The synovium produces fluid that helps your joints move smoothly and stay healthy.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In rheumatoid arthritis (RA), your body becomes confused and starts attacking its own joints rather than protecting them. This is called an autoimmune condition. It often affects joints on both sides of your body, like both hands or both feet at the same time. Rheumatoid arthritis can also affect other parts of your body, like your skin, eyes, lungs, heart, and blood vessels.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Rheumatoid arthritis is different from osteoarthritis, which happens due to wear and tear as people age. Osteoarthritis often affects just one side of the body and does not cause tiredness like RA does.
              </p>
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What are the symptoms of Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>The main symptoms of rheumatoid arthritis (RA) are:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {symptoms.map((s, i) => (
                  <div key={i} style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[15px] leading-[1.6] text-navy-deep">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                Rheumatoid arthritis symptoms don&apos;t stay the same all the time - they can come and go. Periods when symptoms get worse are called <strong className="font-bold">flares</strong>, while times when you feel better are known as <strong className="font-bold">remission</strong>. Early diagnosis plays an important role in preventing permanent joint damage.
              </p>
            </div>

            {/* INLINE CTA */}
            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* STAGES */}
            <div id="stages" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Stages of Rheumatoid Arthritis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>Rheumatoid arthritis progresses from mild to severe stages.</p>
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
                    {stages.map((item) => (
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
                <p className="text-[14px] leading-[1.65] text-navy-deep"><strong className="font-semibold">Note:</strong> Not everyone progresses through all the stages. Early treatment can stop progression.</p>
              </div>
            </div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What are the causes of Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">The exact cause of rheumatoid arthritis is unknown. Researchers think it is caused by a combination of genetics, hormones, and environmental factors.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">Your immune system normally protects your body from infections. In rheumatoid arthritis, it gets confused and starts attacking your own joints instead. Certain factors, like smoking or infections, may trigger this response.</p>
              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Risk Factors of Rheumatoid Arthritis</h3>
              <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-bold">{r.factor}.</strong> {r.detail}</li>))}
              </ul>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How does a doctor diagnose Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>Your doctor may refer you to a rheumatologist for the diagnosis of rheumatoid arthritis. The diagnosis is based on several factors. Your doctor performs a complete physical examination, multiple blood tests, and X-rays to diagnose.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>A detailed history about pain, swelling, the duration it will last, and any other medical history will be taken. The doctor will check your joint movement, colour changes, and for any palpable firm swellings.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>There is no single test that confirms rheumatoid arthritis. Rheumatologists recommend blood and imaging tests to reach a final diagnosis.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>Main blood tests include</h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>Rheumatologists usually recommend blood tests such as:</p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {diagnosisBloodTests.map((test, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>))}
                  </ul>
                </div>
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ letterSpacing: "-0.2px", marginBottom: "1rem", color: "#0f616e" }}>Imaging test</h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>The various imaging techniques help to understand how bad the disease has progressed.</p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {diagnosisImaging.map((test, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>))}
                  </ul>
                </div>
              </div>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What are the treatment options available for Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>The main aim of treatment is to reduce the symptoms. Once treatment begins, you will be evaluated every 3-6 months to monitor the disease&apos;s progression. If it does not improve, your doctor will increase the medication dosage or implement other methodologies.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>Rheumatologists usually begin the treatment with medications and other non-medicated options. If the disease progression is not improved, surgery would be the last option.</p>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>Common medications used in Rheumatoid Arthritis</h3>
              <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                {medications.map((med, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{med.title}:</strong> {med.desc}</li>))}
              </ul>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>Non-Medication Approaches</h3>
              <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                {nonMedApproaches.map((item, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{item.title}:</strong> {item.desc}</li>))}
              </ul>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>Surgery</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>Last resort for severe deformity unresponsive to medication.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>Types of surgeries include: synovectomy, tendon repair, and joint replacement. Surgery does not replace DMARDs.</p>
            </div>

            <DarkDivider />

            {/* MANAGING RA */}
            <div id="managing-ra" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Managing Rheumatoid Arthritis on a Day-to-Day Basis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">With appropriate treatment and supportive therapy, many people are leading an active life despite the disease having a lifelong predilection.</p>
              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>Importance of Diet and Nutrition</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">The diet plays an important role in our daily lives. In rheumatoid arthritis, it plays a major role in keeping our body healthy, without any nutrient restrictions. Several anti-inflammatory foods, such as turmeric, ginger, black pepper, amla, flax seeds, spinach, and fenugreek, should be incorporated into daily meals.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">Vegetarian options such as dal, paneer, curd, and soya should be incorporated to meet protein requirements.</p>
            </div>

            <DarkDivider />

            {/* WHEN TO SEE */}
            <div id="when-to-see" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "2rem" }}>When to see a rheumatologist</h2>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>See a rheumatologist if you have any of these</p>
                </div>
                <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Joint pain and swelling lasting more than 6 weeks",
                    "Morning stiffness that takes more than 30 minutes to ease",
                    "Pain in the same joints on both sides of the body",
                    "Trouble making a fist, gripping, or doing fine tasks like buttons",
                    "Unexplained fatigue along with joint pain",
                    "A family history of RA combined with new joint symptoms",
                  ].map((item, i) => (
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

          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20 bg-ghost">
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

export default RAVariation7
