import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const symptoms = [
  "Joints become warm, painful, and swollen.",
  "Stiffness occurs in the joints that lasts for more than one hour, usually in the morning.",
  "Swelling and tenderness in small joints, such as the wrists and toes.",
  "Low-grade fever, weakness, and feeling tired.",
]

const stages = [
  { stage: "Stage 1", area: "The surrounding layer of the joint gets affected. No damage to bone.", symptoms: "Joints appear stiff and puffy." },
  { stage: "Stage 2", area: "Damage increases and extends to the structure called cartilage, present inside the joints. Cartilage allows joints to glide smoothly during movements.", symptoms: "Stiffness in the joint increases, and as a result, movements will be lesser." },
  { stage: "Stage 3", area: "Bones get affected. There will be visible changes in the X-ray.", symptoms: "Pain intensifies within the joints, and notable joint changes happen." },
  { stage: "Stage 4", area: "Irreversible bone damage", symptoms: "Severe restricted movements." },
]

const riskFactors = [
  { label: "Familial Genetic history :", detail: "There is a higher chance of getting affected if Rheumatoid arthritis is present within close relatives (15% chance)" },
  { label: "Sex:", detail: "Women are affected 3 times more than men." },
  { label: "Smoking:", detail: "Smoking doubles the risk of Rheumatoid arthritis." },
  { label: "Obesity:", detail: "Excess fat increases the chances of Rheumatoid arthritis." },
  { label: "", detail: "Post-infections, such as Chikungunya, can increase the risk." },
]

const diagnosisBloodTests = ["Rheumatoid factor( RF)", "Anti-CCP Antibody (ACPA)", "ESR (Erythrocyte Sedimentation Rate)"]
const diagnosisImaging = ["X-rays", "Ultrasounds", "Magnetic resonance Imaging(MRI)"]

const medications = [
  { title: "NSAIDs and Corticosteroids :", desc: "They are used to relieve short-term symptoms. But neither of them stops disease progression." },
  { title: "DMARDs:", desc: "They alter the body's immune response.", subPoints: [
    "Methotrexate is the most common and widely used in India.",
    "Hydroxychloroquine, Sulfasalazine, and Leflunomide : They are the alternative drugs used.",
  ] },
  { title: "Biologic DMARDs:", desc: "When traditional DMARDs fail, their modified forms are used. It includes drugs like TNF inhibitors, IL-6 inhibitors, and Rituximab." },
  { title: "JAK inhibitors:", desc: "They can be used if the biologic DMARDs were found not to work in patients" },
]

const nonMedApproaches = [
  { title: "Physiotherapy:", desc: "Helps to improve the movements of the joints" },
  { title: "Occupational Therapy:", desc: "Helps to protect joints during daily activities" },
  { title: "Personalised Yoga :", desc: "Chance of improvement from fatigue and pain" },
  { title: "Heat and Cold Therapy:", desc: "Can provide relief from stiffness and acute swelling" },
]

const faqs = [
  { q: "Is Rheumatoid arthritis curable?", a: "Rheumatoid arthritis is not completely curable, but it can be effectively controlled. With early diagnosis and the right treatment, many people can reduce symptoms, prevent joint damage, and live a normal, active life." },
  { q: "2. What is the difference between Rheumatoid arthritis and normal arthritis?", a: "Rheumatoid arthritis is the attack of the body's own immune system. It is an autoimmune condition that affects both sides. Osteoarthritis is also called normal arthritis, which is caused due to excessive wear and tear. It occurs only on one side." },
  { q: "3. Does Rheumatoid arthritis only affect elderly people?", a: "No, rheumatoid arthritis does not affect only elderly people. It can occur at any age, but it is most commonly seen in people between 30 and 60 years. It is also more common in women than in men." },
  { q: "4. Can I take Ayurvedic medicine with my Rheumatoid arthritis treatment?", a: "Yes, some Ayurvedic treatments may be used alongside standard Rheumatoid arthritis medications, but only under medical guidance. Always consult your rheumatologist before starting any Ayurvedic medicine, as some combinations may cause interactions." },
  { q: "5. How much does Rheumatoid arthritis treatment cost in India?", a: "Rheumatoid arthritis treatment costs in India vary widely, from around ₹500- ₹2,000 per consultation to treatment to ₹10,000 - ₹30,000 or more for advanced therapies.\nMany government schemes and insurance plans may help reduce the cost - talk to your doctor about available options." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const h3Style = { letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Daily Living"]
const tabTargets = { Overview: "overview", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Daily Living": "managing-ra" }

function RheumatoidArthritisOverview() {
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
              Understanding Rheumatoid Arthritis(RA)
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options, explained for patients and caregivers
            </p>

            {/* Disease image gradient card + overlapping tab cards */}
            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/overvIew/RA.webp"
                    alt="Rheumatoid Arthritis"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                </div>
              </div>

              {/* Overlapping tab cards */}
              <div className="flex flex-wrap justify-center gap-4" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => scrollTo(tabTargets[t])}
                    className="nav-tab transition-all hover:-translate-y-1"
                    style={{
                      flex: "1 1 130px",
                      maxWidth: "180px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e6ecf1",
                      borderRadius: "6px",
                      color: "#0f616e",
                      padding: "clamp(16px, 4vw, 22px) clamp(8px, 3vw, 14px)",
                      fontSize: "clamp(12px, 3.2vw, 14px)",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 6px 24px rgba(15,97,110,0.12)",
                      fontFamily: "var(--font-base)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Medically reviewed by */}
              <p style={{ marginTop: "28px", fontSize: "14px", color: "#4a6068", fontFamily: "var(--font-base)" }}>
                Medically reviewed by <strong style={{ color: "#0f616e" }}>Dr. Raghavendra H</strong>
              </p>
            </div>
          </div>
        </header>

        {/* ═══════════ CONTENT - original UI, dark green dividers ═══════════ */}
        <section className="bg-white">
          <div className="overview-content max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* OVERVIEW */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Ever experienced weakness or tiredness in your joints that makes it difficult to perform daily tasks? Do you often normalise these symptoms and ignore them? This may be due to a joint condition called Rheumatoid Arthritis. Rheumatoid Arthritis is a long-term health condition in which the body fights against itself. As a result of this, pain and swelling occurs and, when left untreated, it can lead to long-lasting damage. The exact cause is unknown.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                Rheumatoid arthritis is becoming increasingly common in India. It especially affects women between 40 and 60 years old. Many people think of it as regular joint pain and avoid a rheumatologist consultation, which can lead to serious health issues.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                With early diagnosis and proper treatment, Rheumatoid Arthritis can be controlled effectively. This guide will help you understand all about Rheumatoid arthritis(RA), its various causes, how it presents, how doctors diagnose cases, and the available treatment options.
              </p>
            </div>

            <DarkDivider />

            {/* WHAT IS RA */}
            <div id="what-is-ra" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What is Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Joints are where two bones meet, such as knuckles, knees, or wrists. Joints help in the movement. Inside each joint is a thin lining called the synovium. The synovium produces fluid, which helps joints move smoothly and stay healthy.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In rheumatoid arthritis(RA), the body starts attacking its own joints rather than protecting them. This is called an autoimmune condition. It often affects joints on both sides of the body, like both hands or both feet at the same time. Rheumatoid arthritis can also affect other parts of the body, like skin, eyes, lungs, heart, and blood vessels.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Rheumatoid arthritis is different from osteoarthritis, which happens due to wear and tear as in old aged people. Osteoarthritis often affects just one side of the body and does not cause tiredness like Rheumatoid Arthritis does.
              </p>
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What are the symptoms of Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>The main symptoms of rheumatoid arthritis (RA) are:</p>
              <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {symptoms.map((s, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{s}</li>))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                Rheumatoid arthritis symptoms don&rsquo;t stay the same all the time - they can come and go. Periods when symptoms get worse are called <strong className="font-bold">flares</strong>, while times better are known as <strong className="font-bold">remission</strong>. Early diagnosis plays an important role in preventing permanent joint damage. Rheumatoid arthritis progresses slowly in stages, which is discussed below, from being a mild to severe condition.
              </p>

              {/* STAGES */}
              <div id="stages" style={{ scrollMarginTop: "80px" }}>
                <h3 style={h3Style}>Stages of Rheumatoid Arthritis</h3>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>Rheumatoid arthritis progresses from mild to severe stages, which are -</p>
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
            </div>

            {/* INLINE CTA */}
            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What are the causes of Rheumatoid arthritis ?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">The exact cause of Rheumatoid arthritis is unknown. Researchers think it&rsquo;s caused by a combination of genetics, hormones, and environmental factors.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">Your immune system normally protects your body from infections. In rheumatoid arthritis, the immune system becomes triggered and starts attacking your own joints instead. Certain factors, like smoking or infections, may trigger this response.</p>
              <h3 className="text-navy-deep" style={h3Style}>What are the risk factors of Rheumatoid arthritis?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">There are a few causes which increase the chances of Rheumatoid Arthritis.</p>
              <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {r.label ? (<><strong className="font-bold">{r.label}</strong> {r.detail}</>) : r.detail}
                  </li>
                ))}
              </ul>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How does a doctor diagnose Rheumatoid arthritis ?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>Doctors usually refer to a rheumatologist for the diagnosis of Rheumatoid arthritis. The diagnosis is based on several factors. The doctor performs a complete physical examination, multiple blood tests, and X-rays to diagnose the condition.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>A detailed history about pain, swelling, the duration it lasts, and any other medical history will be taken. The doctor will check joint movement, colour changes, and for any palpable firm swellings.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>There is no single test that confirms Rheumatoid Arthritis. Rheumatologists recommend blood and imaging tests to reach a final diagnosis.</p>
              <h3 className="text-navy-deep" style={h3Style}>Main blood tests include :</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>Rheumatologists usually recommend blood tests such as -</p>
              <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {diagnosisBloodTests.map((test, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>))}
              </ul>
              <h3 className="text-navy-deep" style={h3Style}>Imaging test :</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>The various imaging techniques help to understand the disease progression(how bad the disease has progressed).</p>
              <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {diagnosisImaging.map((test, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>))}
              </ul>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What are the treatment options available for Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>The main aim of treatment is to reduce the symptoms. Once treatment begins, every 3-6 months evaluation will be there to monitor the disease&apos;s progression. If it does not improve, doctors increase the medication dosage or implement other treatment methodologies.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>Doctors usually begin the treatment with medications and other non-medicated options. If the disease progression is not improved, surgery would be the last option.</p>
              <h3 style={h3Style}>Common medications used in Rheumatoid arthritis</h3>
              <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                {medications.map((med, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-semibold">{med.title}</strong> {med.desc}
                    {med.subPoints && (
                      <ul className="space-y-1 mt-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {med.subPoints.map((sp, j) => (<li key={j} className="text-[16px] leading-[1.7] text-navy-muted">{sp}</li>))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <h3 style={h3Style}>Non-Medication Approaches</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>There are treatment options other than medications alone. Few are listed below:</p>
              <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                {nonMedApproaches.map((item, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">{item.title}</strong> {item.desc}</li>))}
              </ul>
              <h3 style={h3Style}>Surgery</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>Last resort for severe deformity unresponsive to medication.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>Types of surgeries include: synovectomy, tendon repair, and joint replacement. Surgery does not replace medications.</p>
            </div>

            <DarkDivider />

            {/* MANAGING RA */}
            <div id="managing-ra" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Managing Rheumatoid Arthritis on a Day-to-Day Basis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">With appropriate treatment and supportive therapy, many people lead an active life despite the disease having a lifelong predilection.</p>
              <h3 style={h3Style}>Importance of Diet and Nutrition</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">The diet plays an important role in our daily lives. In Rheumatoid arthritis, it plays a major role in keeping our body healthy, without any nutrient restrictions. Several anti-inflammatory foods, such as turmeric, ginger, black pepper, amla, flax seeds, spinach, and fenugreek, should be incorporated into daily meals.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">Vegetarian options such as dal, paneer, curd, and soya should be incorporated to meet protein requirements.</p>
            </div>

            <DarkDivider />

            {/* EARLY RESPONSE IS THE KEY */}
            <div id="early-response" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textTransform: "uppercase" }}>EARLY RESPONSE IS THE KEY</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                When symptoms like stiffness of joints on both sides, generalised severe fatigue, and abnormal joint pain occur, it is always better to consult a rheumatologist.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The initial three-month duration is the window during which the damage is processed. Take an initiative to treat early, there will be a difference for the rest of your life.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginBottom: "2rem" }}>
                If you are experiencing persistent joint pain, stiffness, or swelling, don&rsquo;t ignore it. Early evaluation by a rheumatologist can make a significant difference in preventing long-term damage.
              </p>

              {/* CTA card */}
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Don&apos;t wait, get evaluated early</p>
                </div>
                <Link to="/book-appointment" className="group" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none" }}>
                  Book a Consultation with Dr Raghavendra H
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#eef3f5" }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>Frequently asked questions</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl overflow-hidden group" style={{ border: "1px solid #dbe5e9", boxShadow: "0 2px 10px rgba(15,97,110,0.06)" }}>
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e0f3f5" }}>
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

export default RheumatoidArthritisOverview
