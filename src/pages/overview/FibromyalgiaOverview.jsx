import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA — Fibromyalgia
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Fibromyalgia is a condition where the brain and nervous system become oversensitive to pain.",
  "It mainly affects women aged 20–50 years, but men can also be affected — though rarely diagnosed in men.",
  "Common symptoms include constant body ache, extreme fatigue, poor sleep, and poor concentration.",
  "Treatment options include pain-relieving medicines, light exercise, and better sleep habits.",
  "Low vitamin D levels are common in people with fibromyalgia in India, which may cause more pain.",
]

const riskFactors = [
  "Women aged 20 to 50 years, though it can develop at any age",
  "People with a family history of fibromyalgia",
  "People with a history of severe infection, accident, or surgery",
  "People with other conditions such as rheumatoid arthritis, lupus, or irritable bowel syndrome",
  "People with long-term emotional stress or anxiety",
]

const symptoms = [
  { title: "Widespread pain", desc: "Pain is often present throughout the body on both sides, lasting at least 3 months. It is a deep, muscular pain that aches constantly and shifts location. There is no swelling or joint damage — the pain is real, even when test reports appear normal." },
  { title: "Fatigue and sleep problems", desc: "People usually wake up exhausted even after a full night of sleep, because the brain does not reach the deep sleep stage. This fatigue makes basic daily tasks feel far harder. For many, poor sleep and fatigue are more uncomfortable than the pain itself." },
  { title: "Brain fog (confusion & difficulty focusing)", desc: "People forget words while speaking, lose track of what they were doing, and struggle to concentrate. In India, these are usually blamed on stress or inattention, so many never mention them to their doctor." },
  { title: "Other common symptoms", desc: "Headaches and migraines (around 76% of Indian patients), irritable bowel symptoms (stomach pain, bloating, diarrhoea), depression and anxiety, and increased sensitivity to touch, temperature, light, and sound." },
]

const rulingOut = [
  { test: "ESR and CRP", rules: "High in conditions like rheumatoid arthritis and lupus, which can cause joint pain and fatigue" },
  { test: "Thyroid function", rules: "A reduced thyroid level causes fatigue and pain" },
  { test: "Full blood count", rules: "A low haemoglobin (anaemia) level can cause fatigue" },
  { test: "Vitamin D", rules: "Vitamin D deficiency can cause widespread muscle and joint pain" },
]

const livingTips = [
  "Take medicines as prescribed",
  "Stay physically active with low-impact exercise",
  "Follow a regular sleep routine",
  "Manage stress and eat a balanced diet",
  "Take vitamin D supplements if levels are low",
  "Support from family and friends",
]

const faqs = [
  { q: "Is fibromyalgia a real medical condition?", a: "Yes. It is recognised by the World Health Organisation. Brain scans have confirmed differences in how the nervous system processes pain. A normal blood test does not mean the condition is imaginary — it means the problem is in the nervous system, not in the body tissues." },
  { q: "Can fibromyalgia be cured?", a: "There is no cure. The right combination of medicine with exercise and lifestyle changes helps many people manage their symptoms and improve their quality of life. Doctors usually recommend medicines to relieve pain, improve mood, and calm the overactive nervous system." },
  { q: "Is fibromyalgia the same as arthritis?", a: "No. Arthritis damages the joints, which is visible on scans and blood tests. Fibromyalgia causes no joint damage and shows nothing abnormal on blood tests. The two can coexist — people with rheumatoid arthritis are at higher risk of developing fibromyalgia." },
  { q: "Why do blood tests come back normal in fibromyalgia?", a: "Fibromyalgia is a disorder of how the brain processes pain signals, not tissue damage. Blood tests look for swelling, irritation, infection, and organ problems — none of which is present in fibromyalgia. A normal report does not mean the condition is absent; tests are done to rule out other conditions." },
  { q: "Can fibromyalgia get worse over time?", a: "Fibromyalgia does not cause permanent joint damage. However, without proper treatment and good sleep and stress management, symptoms can worsen. Most people who follow their treatment plan consistently find their symptoms stay under control or improve." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Living With FM"]
const tabTargets = { Overview: "what-is-fm", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Living With FM": "living" }

const H3Style = { letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }

function FibromyalgiaOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Fibromyalgia: What It Is, Symptoms, Causes and Treatment Options | Omni Rheuma"
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
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 6vw, 62px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Fibromyalgia
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options — explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/condition/Fibromyalgia.webp" alt="Fibromyalgia" style={{ width: "82%", height: "82%", objectFit: "contain", display: "block" }} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button key={t} onClick={() => scrollTo(tabTargets[t])} className="nav-tab transition-all hover:-translate-y-1" style={{ flex: "1 1 130px", maxWidth: "180px", backgroundColor: "#ffffff", border: "1px solid #e6ecf1", borderRadius: "6px", color: "#0f616e", padding: "clamp(16px, 4vw, 22px) clamp(8px, 3vw, 14px)", fontSize: "clamp(12px, 3.2vw, 14px)", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(15,97,110,0.12)", fontFamily: "var(--font-base)" }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ═══════════ CONTENT ═══════════ */}
        <section className="bg-white">
          <div className="overview-content max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* INTRO */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Constant, aching pain is often ignored as extra work or poor posture. The pain can vary between different parts of the body. Waking up tired even after a full night&apos;s sleep becomes part of daily life. These are usually ignored, especially when blood tests and scans appear normal. However, these symptoms can be due to a long-term condition called fibromyalgia.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                Fibromyalgia affects about 2.8% of the Indian population and is much more common in women than in men. In fibromyalgia, the brain and nervous system become more sensitive to pain, making even normal sensations feel painful. There is no cure, but the right treatment and lifestyle changes can help people manage their symptoms and lead an active life. This article explains what fibromyalgia is, what causes it, its symptoms, how it is diagnosed, and the treatment options available.
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

            {/* WHAT IS FM */}
            <div id="what-is-fm" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Is Fibromyalgia?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Imagine a small needle prick during a blood test. Most people feel only a little discomfort. But in fibromyalgia, the same prick may feel much more painful. Fibromyalgia is a long-term condition that causes widespread pain in the body, often along with fatigue. It can also cause issues with sleep and mood. The pain comes from a change in how the brain and spinal cord process painful and non-painful signals, making the body more sensitive to pain.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                You are not imagining pain. Brain scans show that the brain processes pain differently in people with fibromyalgia. This is why sensations that are usually mild can feel more painful than expected.
              </p>

              <h3 style={H3Style}>How Common Is Fibromyalgia in India?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Fibromyalgia affects about 2.8% of the Indian population, and many more live with it without a diagnosis. It affects women far more than men — about 14 times more common in women, with over 90% of patients being women, usually diagnosed around the age of 45. Despite this, the condition is poorly understood and frequently ignored.
              </p>
            </div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Causes Fibromyalgia?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The exact cause is not fully understood. However, most experts believe fibromyalgia develops because of an oversensitive brain and nervous system, which affects how the brain processes pain signals.
              </p>

              <h3 style={H3Style}>Central Sensitisation: Oversensitive Brain and Nerves</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                In fibromyalgia, the brain becomes more sensitive to pain signals. As a result, the body feels pain more strongly than it should, even in areas that are not injured. Brain scans show these changes are real. Fibromyalgia is not &ldquo;just in the mind&rdquo; and the pain is not imaginary. This is important because many people spend years believing nothing is physically wrong with them.
              </p>

              <h3 style={H3Style}>Indian-Specific Risk Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Low vitamin D levels can increase sensitivity to pain — around 91% of people with fibromyalgia in India have low vitamin D. Physically demanding household work may also raise the risk among Indian women but is often overlooked. Post-COVID fibromyalgia is becoming more common, with many developing long-term widespread pain after COVID-19 infection.
              </p>

              <h3 style={H3Style}>Who Is Most at Risk?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>Anyone can develop fibromyalgia, but certain factors increase the risk:</p>
              <ul className="space-y-1 mb-5" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{r}</li>))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Men can also develop fibromyalgia, but the condition is often missed because it is usually considered one that mainly affects women.
              </p>
            </div>

            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Symptoms of Fibromyalgia</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Pain in different areas of the body is the most common symptom. It can also cause extreme tiredness, sleep problems, and memory problems.
              </p>
              <ul className="space-y-3 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {symptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold" style={{ color: "#0a4f5a" }}>{s.title}:</strong> {s.desc}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Most symptoms of fibromyalgia are invisible to others. That is why many people live with this condition without getting a proper diagnosis.
              </p>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is Fibromyalgia Diagnosed?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                There is no test to diagnose fibromyalgia. A rheumatologist diagnoses it based on symptoms and a physical check-up, and may recommend blood tests and scans to rule out other conditions.
              </p>

              <h3 style={H3Style}>Clinical Examination and Symptom Criteria</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                A rheumatologist uses the American College of Rheumatology (ACR) 2016 criteria. During the examination, they assess widespread pain in at least four of five body regions and ask how long the pain has been present — whether it has lasted more than 3 months.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The doctor also asks about sleep patterns, tiredness, and brain symptoms such as brain fog or anxiety. The questions matter more than the physical check-up. Many people ignore their symptoms for years and may need encouragement to talk about everything they have been experiencing.
              </p>

              <h3 style={H3Style}>Ruling Out Other Conditions</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                There are no tests to confirm fibromyalgia. The rheumatologist recommends blood tests to rule out other conditions that can cause body pain.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-left min-w-[560px]">
                  <thead>
                    <tr style={{ backgroundColor: "#e0f3f5" }}>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Test</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">What it rules out</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rulingOut.map((r) => (
                      <tr key={r.test} className="border-b border-[#dadfe8]">
                        <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{r.test}</td>
                        <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{r.rules}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                In fibromyalgia, standard tests are often expected to come back normal. Even if reports appear normal, it does not mean nothing is wrong — these tests rule out other conditions rather than confirm the diagnosis. A rheumatologist specialises in diagnosing this condition based on your symptoms, physical check-up, and blood tests, and can then recommend the right treatment.
              </p>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Treatment Options for Fibromyalgia</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                There is no cure for fibromyalgia. Treatment can help relieve pain, calm an overactive nervous system, and improve sleep quality. Many people can manage symptoms well with the right treatment and live a better quality of life.
              </p>

              <h3 style={H3Style}>Medications Overview</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The doctor usually recommends medicines such as pregabalin or gabapentin to reduce pain and calm the overactive nervous system. They may also prescribe medicines to improve sleep and mood, such as duloxetine or amitriptyline. In some cases, NSAIDs are recommended alongside other medicines. In fibromyalgia, medicines often work better when combined with exercise and mental health therapy.
              </p>

              <h3 style={H3Style}>Exercise and Behavioural Therapy</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Doctors recommend regular low-impact exercise such as walking, swimming, and yoga, which can gradually make the body less sensitive to pain. Start with gentle exercise and increase intensity gradually as symptoms improve — pushing too hard early can trigger pain and make it harder to continue.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Doctors may also recommend cognitive behavioural therapy (CBT), which helps patients manage the daily impact of fibromyalgia by talking, changing how the brain responds to pain. It does not mean the pain is psychological. Mindfulness meditation and stress management also help, and many of these programmes are now available through apps and online platforms across India.
              </p>
            </div>

            <DarkDivider />

            {/* LIVING WITH */}
            <div id="living" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Living With Fibromyalgia in India</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Fibromyalgia is a long-term condition, but it can be managed with the right treatment and healthy lifestyle habits:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {livingTips.map((t, i) => (
                  <div key={i} style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[15px] leading-[1.6] text-navy-deep">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Early diagnosis by a rheumatologist and regular follow-up help most people manage their symptoms and continue with their daily activities.
              </p>
            </div>

            <DarkDivider />

            {/* WHEN TO CONSULT + CTA */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>When Should a Rheumatologist Be Consulted?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Many people with fibromyalgia in India spend years living with pain, tiredness, and poor sleep before receiving the right diagnosis. As blood tests and scans often appear normal, it is easy to assume nothing is wrong. If these symptoms have been affecting you for months, it may be time to consult a rheumatologist — they can look at all your symptoms together and confirm whether fibromyalgia is the cause. An early diagnosis helps you understand your situation and avoid unnecessary tests and treatments. Fibromyalgia is a recognised medical condition, and with the right treatment and support, many people manage their symptoms and return to their daily activities.
              </p>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Long-term pain with normal test reports? See a rheumatologist</p>
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

export default FibromyalgiaOverview
