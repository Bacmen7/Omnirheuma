import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Psoriatic Arthritis (PsA)
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Psoriatic arthritis is an autoimmune condition where the body attacks itself (Auto means self, and the immune system is the defence system which fights against infections). It affects joints and skin.",
  "About 1 in 3 people with psoriasis develop psoriatic arthritis. Stress, infections, joint injury, and certain medications are common triggering causes.",
  "Common experienced symptoms include joint pain, morning stiffness, swollen “sausage” fingers/toes, and nail changes like pitting or thickening.",
  "There is no permanent cure, but the right treatment can control symptoms and help most people stay active.",
  "Treatment usually starts with managing pain and providing relief. This is followed by medications that slow the disease and biologic injections for more severe cases.",
]

const geneticFactors = [
  { title: "Genetic marker HLA-B27", desc: "The gene marker HLA-B27 (HLA stands for Human Leukocyte Antigen) is linked to involvement of the spine in some patients. Not everyone with this gene will develop psoriatic arthritis. It increases the chances of getting PsA." },
  { title: "Family history", desc: "Having a close family member with psoriasis or psoriatic arthritis also makes the individual vulnerable. If these conditions run in the family, then no joint symptoms should not be ignored. It should be checked by a doctor early." },
]

const triggers = [
  { title: "Physical injury", desc: "Injury to a joint or repetitive strain can trigger the body's protective system. In high-risk people, this defence system can attack the body's own tissues." },
  { title: "Infections", desc: "Throat infections that are caused by bacteria, and other infections can lead to worsening of the condition." },
  { title: "High stress", desc: "Increased stress is the most common cause of psoriatic arthritis." },
  { title: "Certain medications", desc: "Few medications like lithium, chloroquine (malaria medicine), and beta-blockers (used to treat heart conditions) are associated with the worsening of psoriasis. They can also trigger joint symptoms." },
]

const jointSymptoms = [
  { title: "Pain and swelling", desc: "Joints feel painful, warm, and visibly swollen. The symptoms become worse after sitting still for a short duration." },
  { title: "Morning stiffness", desc: "After waking up, there is difficulty in joint movement. The stiffness gradually reduces within 30 to 60 minutes." },
  { title: "Flares and remissions", desc: "Symptoms intensify suddenly and then settle down. This pattern of the condition makes it easy to ignore." },
  { title: "Reduced range of motion", desc: "When the condition is left untreated, the swelling and irritation increases. This reduces how far a joint can bend or stretch." },
]

const riskFactors = [
  "Patients with psoriasis",
  "Family members or close relatives suffering from psoriasis or psoriatic arthritis",
  "Age between 30 and 55 years",
]

const livingTips = [
  "A healthy, anti-inflammatory diet with foods such as turmeric, mustard oil, flaxseeds, and fish",
  "Reduce intake of refined sugar and processed foods",
  "Stay in a healthy weight range, as it can reduce joint load and help medication work better",
  "Walking, swimming, and yoga are the best options",
  "A physiotherapist can suggest modified positions for floor-sitting to protect the knees and hips",
  "Visiting your rheumatologist early instead of self-medicating can prevent the condition from worsening",
]

const faqs = [
  { q: "Can psoriatic arthritis be cured?", a: "There is no cure. But treatment can control inflammation and protect the joints. It allows most people to live an active life. The main goal of treatment is to lower disease progression and flare-ups." },
  { q: "Does everyone with psoriasis get psoriatic arthritis?", a: "Only 1 in 3 people with psoriasis develops psoriatic arthritis. Nail changes or a family history of inflammatory arthritis can increase the risk. Reporting joint symptoms to a doctor early is the best way to prevent damage." },
  { q: "What does psoriatic arthritis feel like in the early stages?", a: "In the early stages, there will be unexplained morning stiffness. Along with this a persistent ache in one or two joints, slightly puffy fingers or toes, or heel pain that does not resolve with rest. Many people dismiss these as an injury until the symptoms keep returning." },
  { q: "Can psoriatic arthritis affect the spine?", a: "Yes, psoriatic arthritis can cause lower back stiffness. It can reduce flexibility and sometimes causes hip and shoulder pain." },
  { q: "Are there affordable treatment options for psoriatic arthritis in India?", a: "Yes, NSAIDs and methotrexate are available at low cost through Jan Aushadhi outlets. Indian biosimilar biologics cost significantly less than imported brands. PM-JAY may cover certain hospitalisation and treatment costs for qualifying patients." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Daily Living"]
const tabTargets = { Overview: "what-is-psa", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Daily Living": "living" }

const H3Style = { letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }

function PsoriaticArthritisOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Psoriatic Arthritis: What It Is, Symptoms, Causes and Treatment Options | Omni Rheuma"
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

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#E8F4F8" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-0 text-center">
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5.5vw, 58px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Psoriatic Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options, explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/overvIew/psoriatic.webp" alt="Psoriatic Arthritis" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button key={t} onClick={() => scrollTo(tabTargets[t])} className="nav-tab transition-all hover:-translate-y-1" style={{ flex: "1 1 130px", maxWidth: "180px", backgroundColor: "#ffffff", border: "1px solid #e6ecf1", borderRadius: "6px", color: "#0f616e", padding: "clamp(16px, 4vw, 22px) clamp(8px, 3vw, 14px)", fontSize: "clamp(12px, 3.2vw, 14px)", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(15,97,110,0.12)", fontFamily: "var(--font-base)" }}>
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

        {/* ═══════════ CONTENT ═══════════ */}
        <section className="bg-white">
          <div className="overview-content max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* INTRO */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Noticed skin itching lately? The small patch of itchy skin, which turns scaly on your fingers, is easy to be ignored as dry skin. A skin specialist confirms it as psoriasis, and for a while, that feels fine, with medications and follow- ups.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                But then the mornings start feeling harder. The knees begin to ache without reason. Fingers feel stiff and harder to bend. Even closing a laptop becomes an effort. These joint changes do not feel connected to the skin, so they often go unnoticed or untreated for years. By the time the two are linked together, psoriatic arthritis has already been quietly progressing.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                This is more common than most people realise. About 2 to 3% of the population lives with psoriasis, and 1 in 3 of them go on to develop psoriatic arthritis.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                Doctors confirm the diagnosis, and the right treatment can manage symptoms and protect the joints from further damage. This article helps you understand through what psoriatic arthritis is, symptoms, causes, and what treatment looks like in India.
              </p>
            </div>

            <DarkDivider />

            {/* QUICK ANSWER */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Quick Answers</h2>
              <div style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "22px 26px" }}>
                <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {quickAnswers.map((q, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "6px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-[16px] leading-[1.7] text-navy-deep">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <DarkDivider />

            {/* WHAT IS PsA */}
            <div id="what-is-psa" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Is Psoriatic Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Psoriatic arthritis (PsA) is a condition where the immune system mistakenly attacks healthy tissues of skin and joints. The immune system is the body&apos;s natural defence against harmful germs and infections. In a healthy person, it carefully targets only outside threats and fights against those.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In psoriasis, the immune system becomes overactive and mistakenly starts attacking the skin tissue. This attack causes the skin to become red, thick, and scaly. In psoriatic arthritis, the overactive immune system starts attacking joints. It is a form of arthritis that mainly affects people with psoriasis. It can involve multiple joints, the spine, tendons, and nails all at once.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                For most people, skin symptoms appear first, sometimes years before any joint problems begin. In others, joint and skin symptoms develop around the same time. The root cause in both conditions is an immune system that gets overactive and mistakenly attacks the body&apos;s own healthy tissues.
              </p>

              <h3 style={H3Style}>How Common Is Psoriatic Arthritis in India?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Psoriatic arthritis affects approximately 8.7 % of people with psoriasis in India. The data is based on the RAPID-India group study from 2025. Still, it often goes undiagnosed. The reason behind this is - most patients see a dermatologist for the skin and a general doctor for the joints. As a result, the two major symptoms never get connected. Due to different patterns and common symptoms, many patients reach a rheumatologist after suffering for years.
              </p>
            </div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Causes Psoriatic Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The main cause of psoriatic arthritis is still unknown. The immune system plays a central role. Certain factors, such as genes, stress, infection, vitamin D deficiency and medication, trigger the immune system. It starts attacking healthy joints and skin tissue instead of protecting them. This causes persistent inflammation that can become worse without treatment.
              </p>

              <h3 style={H3Style}>Genetic and Family History Factors</h3>
              <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {geneticFactors.map((g, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold" style={{ color: "#0a4f5a" }}>{g.title}:</strong> {g.desc}
                  </li>
                ))}
              </ul>

              <h3 style={H3Style}>Triggers That Can Start or Worsen PsA</h3>
              <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {triggers.map((t, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold" style={{ color: "#0a4f5a" }}>{t.title}:</strong> {t.desc}
                  </li>
                ))}
              </ul>

              <h3 style={H3Style}>Indian-Specific Risk Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Vitamin D deficiency is very common in urban India. Active inflammation of the disease is the underlying cause. Arthritis, which develops after chikungunya, closely resembles the psoriatic joint pattern. This is also one of the reasons for the misdiagnosis of psoriatic arthritis. Rheumatologist availability in smaller towns is limited. That is why many patients visit them only after joint damage has already started.
              </p>

              <h3 style={H3Style}>Who Is Most at Risk?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>People at higher risk of developing psoriatic arthritis include:</p>
              <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{r}</li>))}
              </ul>
            </div>

            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Symptoms of Psoriatic Arthritis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Psoriatic arthritis can affect the joints, skin, nails, spine, and tendons. Symptoms can vary among people, and they usually worsen suddenly.
              </p>

              <h3 style={H3Style}>Joint Symptoms</h3>
              <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {jointSymptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold" style={{ color: "#0a4f5a" }}>{s.title}:</strong> {s.desc}
                  </li>
                ))}
              </ul>

              <h3 style={H3Style}>Skin and Nail Changes</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Psoriasis patches are raised, red, silvery-scaled areas. Scalp, elbows, knees, and lower back are the most common sites. Nail changes include pitting, crumbling, discolouration and separation from the nail bed. These changes sometimes appear before joint pain. That is why these are meaningful early signs that psoriatic arthritis may develop. It is best not to ignore these early signs to prevent the disease from progressing.
              </p>

              <h3 style={H3Style}>Swelling and Pain</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The swelling occurs on the entire finger or toe, not just at one joint, which is referred to as <strong className="font-semibold">Dactylitis</strong>. Tendons are tight cords which attach muscle of the finger to bone. The tissue is present along the whole length of the finger. The inflammation occurs in the tissue tendons. Therefore, the swelling occurs in the entire finger or toe, which gives them the characteristic &ldquo;sausage&rdquo; appearance. This typical appearance helps differentiate psoriatic arthritis from other types of arthritis.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                <strong className="font-semibold">Enthesitis</strong> is pain at the points where tendons attach to bone. The pain most commonly occurs in the heel, sole of the foot, elbow, and knee. Many patients first consult a doctor for this heel pain without knowing they could be suffering from psoriatic arthritis.
              </p>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is Psoriatic Arthritis Diagnosed?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                There is no single test to confirm psoriatic arthritis. Rheumatologists build a diagnosis based on the clinical examination, blood tests, and imaging together. They examine the joints, the skin and nails. They also assess spine movement and ask about family history. Joint and skin symptoms that occur together are the clearest diagnostic signal.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Doctors advise various tests to detect the condition and pattern of the disease. They advise blood tests to measure inflammation through ESR and CRP. An X-ray to check bone changes and an MRI for soft tissue and the spine. Ultrasound is also advised to check for enthesitis before it is visible on an X-ray. The HLA-B27 (Human Leukocyte antigen B27 gene) test is done to detect the presence of this gene. This is suggested mainly when spine involvement is suspected. RF (rheumatoid factor) is usually negative in psoriatic arthritis, which helps separate it from rheumatoid arthritis.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                The CASPAR criteria (Classification criteria for psoriatic arthritis) is an internationally accepted diagnostic checklist. This checklist provides a structured basis for confirming the diagnosis.
              </p>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Treatment Options for Psoriatic Arthritis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                There is no cure for psoriatic arthritis. The treatment only reduces inflammation. It protects the joints and manages skin symptoms. With the right treatment plan, most people can control the disease from progressing rapidly and live an active life.
              </p>

              <h3 style={H3Style}>Medications Overview</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                NSAIDs only help in reducing pain and stiffness. They cannot slow down joint damage. DMARDs target the immune process causing the disease. Biologics are used when other treatments are not enough to control the disease. Medications need to be taken only after a doctor&apos;s prescription.
              </p>

              <h3 style={H3Style}>Non-Medication Approaches and Skin Care</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Along with medication, physiotherapy helps maintain joint flexibility and muscle strength. Walking, swimming, and yoga support joint strength without much impact on them. Topical creams and medicated shampoos manage psoriasis patches along with medication. Keeping psoriasis plaques moisturised reduces cracking and infection risk.
              </p>
            </div>

            <DarkDivider />

            {/* PsA vs RA */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is It Different from Rheumatoid Arthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Both rheumatoid arthritis (RA) and psoriatic arthritis (PsA) cause joint pain, stiffness, and swelling. But they both require different treatments. Therefore, it is necessary to differentiate them.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse text-left min-w-[560px]">
                  <thead>
                    <tr style={{ backgroundColor: "#e0f3f5" }}>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Feature</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Psoriatic Arthritis</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Rheumatoid Arthritis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#dadfe8]">
                      <td className="p-4 text-[15px] font-semibold text-navy-deep align-top">Common sites</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Skin, spine, entire fingers/toes</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Mainly joints</td>
                    </tr>
                    <tr className="border-b border-[#dadfe8]">
                      <td className="p-4 text-[15px] font-semibold text-navy-deep align-top">Sides affected</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Usually one side</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Both sides</td>
                    </tr>
                    <tr className="border-b border-[#dadfe8]">
                      <td className="p-4 text-[15px] font-semibold text-navy-deep align-top">Skin/nail changes</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Present, with family history of psoriasis</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Absent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <DarkDivider />

            {/* LIVING WITH */}
            <div id="living" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Living With Psoriatic Arthritis in India</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Psoriatic arthritis is a long-term condition. With small lifestyle and dietary changes, you can live an active life:
              </p>
              <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {livingTips.map((t, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Psoriasis is still wrongly believed to be contagious in many Indian communities. As a result, people are pushed toward isolation. Counselling and support from family and friends help significantly. These can help reduce both the physical and emotional weight of managing the condition in the long term.
              </p>
            </div>

            <DarkDivider />

            {/* WHEN TO CONSULT + CTA */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>When Should a Rheumatologist Be Consulted?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                When you notice joint pain, alongside psoriasis, see a rheumatologist without delay. Early diagnosis prevents irreversible joint damage. A rheumatologist will confirm your diagnosis, build a treatment plan suited to your specific disease pattern, and help you track changes over time. Starting the right treatment early gives you the best chance of living an active life.
              </p>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Joint pain with psoriasis? See a rheumatologist early</p>
                </div>
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
        <section className="py-16 md:py-20" style={{ backgroundColor: "#eef3f5" }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h2>
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

export default PsoriaticArthritisOverview
