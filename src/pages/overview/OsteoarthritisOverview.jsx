import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA — Osteoarthritis
   ───────────────────────────────────────────── */

const oaTypes = [
  { title: "Knees — the daily workhorses", desc: "This is the most commonly affected joint in India. Simple tasks like climbing stairs, squatting, or getting up from the floor can feel like a task. That stubborn pain reminds you of every step you take." },
  { title: "Hips — the hidden troublemaker", desc: "Instead of obvious joint pain, it shows up as a deep ache in the inner thigh. Stiffness while walking or difficulty sitting cross-legged are noticed. Most people don't connect these symptoms to the hip joint directly." },
  { title: "Hands — the silent sufferers", desc: "When hands become the victim, especially the fingers and the base of the thumb, everyday tasks become very tricky. Opening jars, buttoning clothes, or even holding a pen can feel uncomfortable. The joints may look slightly swollen over time." },
  { title: "Strained spine", desc: "Sitting for long hours, the spine and neck bear the brunt. It often shows up as stiffness in the neck or lower back. Sometimes, it may even cause a radiating discomfort if nearby nerves are irritated." },
  { title: "Feet and ankles — the collapsed support system", desc: "Feet and ankles support the entire body, so when osteoarthritis affects them, standing or walking for long periods can become very painful. You might feel stiffness, tenderness, or discomfort with every step." },
]

const medications = [
  "Paracetamol, like Calpol or Crocin, for mild pain",
  "Anti-inflammatory medicines like ibuprofen or diclofenac to ease pain and swelling",
  "Topical gels like Diclofenac or Volini for local pain relief",
]

const advancedTreatments = [
  "Steroid injections provide short-term relief from pain.",
  "Hyaluronic acid injections enable joint movements.",
  "Knee or hip replacement surgery is considered in severe cases, when other treatment options fail to help.",
]

const adapting = [
  "Losing even 5 kg can significantly reduce strain on the knees",
  "Adding turmeric, ginger, amla, and fatty fish to the diet",
  "Choosing low-impact activities like yoga or cycling",
  "Avoiding frequent squatting or sitting on the floor",
  "Using support like a walking stick if needed",
  "Wearing comfortable orthopaedic shoes to support the weight-bearing ankle",
]

const faqs = [
  { q: "Is osteoarthritis just a part of aging?", a: "Age is one of many risk factors like obesity and lack of nutrition — aging alone does not affect your joints." },
  { q: "Can osteoarthritis be cured?", a: "Though it cannot be cured, it can be effectively managed with better treatment options and small lifestyle changes." },
  { q: "Which joints are most affected?", a: "In India, knees are the most commonly affected. This can be due to our cultural habits, like squatting or sitting on the floor." },
  { q: "How is it different from rheumatoid arthritis?", a: "Osteoarthritis is due to wear and tear, while rheumatoid arthritis is an autoimmune condition where the immune system affects its own joints. In RA, multiple joints are affected at the same time." },
  { q: "Is surgery always required?", a: "No. Surgery is only considered when other treatments like medicines and physiotherapy do not provide relief, and it is the last resort your doctor would recommend." },
  { q: "Can diet and exercise help?", a: "Yes, they play a major role in reducing the suffering and slowing progression. These lifestyle changes create a bigger impact." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Daily Living"]
const tabTargets = { Overview: "what-is-oa", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Daily Living": "adapting" }

function OsteoarthritisOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Osteoarthritis: What It Is, Symptoms, Causes & Treatment Options | Omni Rheuma"
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

      {/* Reading progress bar — orange line at top */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#E8F4F8" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-0 text-center">
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Osteoarthritis
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options — explained for patients and caregivers
            </p>

            {/* Disease image gradient card + overlapping tab cards */}
            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/overvIew/oestoreities.png" alt="Osteoarthritis" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                </div>
              </div>

              {/* Overlapping tab cards */}
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
                While walking comfortably across your home or climbing the stairs, you feel exhausted and tired. People around you become concerned, but you shrug it off, saying, &ldquo;I&apos;m just getting older.&rdquo; The pain you suffer is not something to ignore. For many Indians, this can be a first sign of osteoarthritis.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                Osteoarthritis is a condition that slowly affects the joints over time. Walking, sitting, or even holding objects seems like a great task to achieve. There are various treatment options, ranging from medications to complex surgical procedures. The disease progression can be managed if treatment begins early. Osteoarthritis is no longer just a condition concerned with aging — it has quietly become a major global health concern. In 2021, an estimated 374.7 million people worldwide were living with knee osteoarthritis, an increase of 234.5% since 1990.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                This is a practical guide that will help you understand what osteoarthritis is, why it happens to you, how you can find out if you suffer from the condition, and what treatment options are available in India.
              </p>
            </div>

            <DarkDivider />

            {/* WHAT IS OA */}
            <div id="what-is-oa" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Is Osteoarthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>We must first know how a joint works before understanding osteoarthritis.</p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                A joint is where two bones meet. The ends of these bones are covered with a soft and flexible tissue called cartilage. This cushion-like tissue allows you to move easily without friction. In osteoarthritis, this cartilage gradually wears down. As the cushion becomes thin, the bones start to rub against each other. This causes pain, stiffness, swelling, and reduced movement.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                One can imagine it as a door hinge that has lost its oil. It still works, but every movement feels very rough and uncomfortable. Osteoarthritis usually develops slowly, but with the right care, most people can manage their symptoms and continue to lead active lives.
              </p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>How Common Is Osteoarthritis in India?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Osteoarthritis has now become very common in India. Studies estimate that around 22% to 39% of adults over 40 are affected. This roughly means one in three to four adults being affected.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Knee osteoarthritis is the most common type, especially among women after menopause. Daily habits like squatting and sitting for long periods on the floor for a meal or during prayers can increase stress on the knees. This often adds to the risk, making osteoarthritis one of the leading causes of mobility issues in the country. Among all joints, the knee is the most commonly affected, especially in older adults.
              </p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Who Is More Likely to Get Osteoarthritis?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>People with increased chances of osteoarthritis include:</p>
              <ul className="space-y-1 mb-5" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Obese and aged above 45 years</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Family history of joint problems</li>
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The rising numbers are not by chance. Factors such as increasing life expectancy, higher rates of obesity, and more sedentary lifestyles are contributing to this trend.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                At the same time, frequent squatting, sitting cross-legged, and climbing stairs can add extra strain on the knees over time. Physically demanding work like farming or construction, or any previous joint injuries, can make the condition much worse.
              </p>
            </div>

            <DarkDivider />

            {/* TYPES */}
            <div id="types" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Types of Osteoarthritis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>Osteoarthritis doesn&apos;t affect every joint the same way. Each of the joint complaints is different on its own.</p>
              <div className="flex flex-col gap-6">
                {oaTypes.map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, color: "#1AA3B5", fontWeight: 700, fontSize: "17px", minWidth: "26px" }}>{i + 1}.</span>
                    <div>
                      <p style={{ fontSize: "17px", fontWeight: 700, color: "#0f616e", marginBottom: "6px" }}>{t.title}</p>
                      <p className="text-[16px] leading-[1.8] text-navy-deep">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline CTA */}
            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Causes Osteoarthritis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>Osteoarthritis doesn&apos;t usually have a single cause. It develops over time due to a variety of factors.</p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Age and Wear Over Time</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Cartilage becomes less flexible as age advances and loses its capacity to repair or heal on its own. However, aging alone does not contribute to the disease. Poor lifestyle with a lack of exercise and unhealthy diet patterns are also major reasons.
              </p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Lifestyle and Physical Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>The lifestyle and physical factors have a lot to do with the disease condition.</p>
              <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Excess body weight puts extra pressure on the joints, making them wear in due course.</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">In professionals like a salesperson or a teacher, the nature of the job strains joints over time. If the workplace demands continuous standing or maintaining the same posture, the tendency of developing osteoarthritis is higher.</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Healed injuries can sometimes become the silent villain, increasing the risk even years later.</li>
              </ul>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Risk Factors Common in India</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                An adequate amount of vitamin D is received from the sun. But India, despite being in the tropical region, sees widespread vitamin D deficiency. This deficiency affects bone and joint health, influencing bone integrity and strength.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Though frequent squatting and floor sitting help in deep knee flexion, as age progresses, it strains the joints slowly.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Among all forms, knee osteoarthritis stands out as particularly common. It tends to affect certain groups more than others, with a noticeably higher prevalence among older adults, especially women. Hormonal changes, bone health, and longer life expectancy may all contribute to this pattern. The number of new cases continues to rise, largely driven by ageing populations, rising obesity rates, and increasingly sedentary lifestyles.
              </p>
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Signs and Symptoms of Osteoarthritis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>Osteoarthritis usually develops gradually. There are a few early signs you might notice.</p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>The early signs</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Tiredness starts initially. Slowly, small activities become great tasks. The joints start becoming stiff. These symptoms often improve with movement. Gradually, grinding and creaking sounds will be heard.
              </p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>As the condition progresses</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                As the condition becomes worse, the pain refuses to disappear even after rest. The joints become swollen and red. The knees wouldn&apos;t let you climb stairs, and your fingers would request help opening a tight jar.
              </p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>When should you see a doctor?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Early visits to specialists help you diagnose the condition as early as possible. A rheumatologist is the specialist who can properly evaluate the joint problems and guide you through the treatment.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                When the pain starts disturbing sleep and the stiffness hinders daily activities, you should definitely consider seeing a doctor in the near future.
              </p>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is Osteoarthritis Diagnosed?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Osteoarthritis is diagnosed by physical examination, imaging tests, and blood tests. The doctor asks the duration of pain and discomfort, if there was any injury to that same joint in the past, and if any family members suffer from this condition. This conversation helps the doctor rule out other joint conditions like rheumatoid arthritis or gout that mimic osteoarthritis.
              </p>
              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Physical Examination</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>Initially, the doctor checks if there is any obvious swelling or redness in the affected site. They observe the pain while touching the joint, the extent of movement of the joint, and its flexibility.</p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Imaging Tests</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>Once the doctor examines the affected site completely, they proceed with imaging tests, commonly used to look for cartilage loss and bone changes. MRI is not routine for osteoarthritis; it is used when the situation needs a closer, more detailed picture beyond what an X-ray can show — usually in early cases where symptoms don&apos;t match the site, or after prior surgeries.</p>

              <h3 className="text-navy-deep" style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Blood Tests</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">There is no specific blood test for osteoarthritis. Tests are mainly done to rule out other conditions like rheumatoid arthritis.</p>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Can Osteoarthritis Be Treated?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>While osteoarthritis cannot be reversed completely, treatment can help reduce the pain and improve the quality of life.</p>

              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Medications</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>Some medicines your doctor may prescribe are:</p>
              <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {medications.map((m, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{m}</li>))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                Affordable generic versions are available at government Jan Aushadhi stores. But medicines should be consumed only based on the doctor&apos;s prescription.
              </p>

              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Physiotherapy and Exercise</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                Physiotherapy is one of the most effective yet underused treatments. Exercises help strengthen muscles around the joint, reducing stress on it. Activities like walking, swimming, and yoga are especially helpful.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>Rest alone is not the solution. Gentle, regular movement is always essential.</p>

              <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", fontSize: "1.35rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }}>Advanced Treatment Options</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>If basic treatments are not enough, the doctor may prescribe alternate treatments in the later stages.</p>
              <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {advancedTreatments.map((t, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Knee replacement surgeries are covered under government schemes like PM-JAY for eligible patients, such as central government employees. Consult your doctor to know more.
              </p>
            </div>

            <DarkDivider />

            {/* ADAPTING / LIVING WITH */}
            <div id="adapting" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Adapting to the New Normal</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Many people live active, fulfilling lives despite osteoarthritis. Small lifestyle changes can make a big difference. Some of the tiny efforts that help you take a great leap are:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {adapting.map((a, i) => (
                  <div key={i} style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "16px 18px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "5px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[15px] leading-[1.6] text-navy-deep">{a}</span>
                  </div>
                ))}
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Managing emotional health is absolutely important. Long-term pain can affect your mood and disturb your sleep, so seeking support when needed is always recommended.
              </p>
            </div>

            <DarkDivider />

            {/* WHEN TO CONSULT */}
            <div id="consult" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>When to Consult a Rheumatologist</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                If you&apos;ve been dealing with joint pain for a while, getting a proper diagnosis is important. Early treatment can help you stay active and prevent worsening of symptoms. A rheumatologist can confirm whether you have osteoarthritis, rule out other conditions, and build a good treatment plan that suits your lifestyle and stage of the condition. Early assessment means more options and better outcomes.
              </p>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Get evaluated early — stay active longer</p>
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

export default OsteoarthritisOverview
