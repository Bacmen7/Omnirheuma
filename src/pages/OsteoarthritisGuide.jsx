import { useEffect, useState } from "react"
import Header from "../components/Header"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "Is osteoarthritis just a part of aging?",
    a: "Age is one of many risk factors like obesity and lack of nutrition. Aging alone does not inevitably affect your joints.",
  },
  {
    q: "Can osteoarthritis be cured?",
    a: "Though it cannot be cured, it can be effectively managed with better treatment options and small lifestyle changes.",
  },
  {
    q: "Which joints are most affected?",
    a: "Knees are the most commonly affected in India. This can be due to our cultural habits, like squatting or sitting on the floor.",
  },
  {
    q: "How is it different from rheumatoid arthritis?",
    a: "Osteoarthritis is due to wear and tear, while rheumatoid arthritis is an autoimmune condition where the immune system affects its own joints. In RA, multiple joints are affected at the same time.",
  },
  {
    q: "Is surgery always required?",
    a: "No. Surgery is only considered when other treatments like medicines and physiotherapy do not provide relief, and it is the last resort your doctor would recommend.",
  },
  {
    q: "Can diet and exercise help?",
    a: "Yes, they play a major role in reducing suffering and slowing progression. These lifestyle changes create a bigger impact.",
  },
]

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "what-is-oa", label: "What Is Osteoarthritis?" },
  { id: "types", label: "Types of OA" },
  { id: "causes", label: "Causes" },
  { id: "symptoms", label: "Signs & Symptoms" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "living-well", label: "Adapting to the New Normal" },
  { id: "faq", label: "FAQs" },
]


/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function OsteoarthritisGuide() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    document.title = "Osteoarthritis: What It Is, Symptoms, Causes & Treatment Options | Omni Rheuma"
    return () => { document.title = "Omni Rheuma | Professional Rheumatology Resource" }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
      <style>{`
        .guide-article-content > [data-toc-section] ~ [data-toc-section] {
          margin-top: 3.5rem !important;
          padding-top: 0 !important;
        }

        .guide-article-content > [data-toc-section] > h2 {
          margin-bottom: 2.25rem !important;
        }

        .guide-article-content > [data-toc-section] h3 {
          margin-top: 1.75rem !important;
          margin-bottom: 1rem !important;
          text-decoration: underline;
          text-decoration-color: #1AA3B5;
          text-decoration-thickness: 2px;
          text-underline-offset: 6px;
        }

        .guide-article-content > [data-toc-section] h2 + h3 {
          margin-top: 0 !important;
        }

        .guide-article-content > .guide-final-section {
          margin-top: 5rem !important;
        }
      `}</style>

      <header style={{ backgroundColor: "#0f616e" }} className="text-white">
        <div className="max-w-7xl mx-auto px-5 pt-6 pb-0 sm:px-6 md:pt-8">

          {/* Breadcrumb */}
          <div
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium leading-snug sm:text-[14px]"
            style={{ color: "rgba(255,255,255,0.68)", marginBottom: "clamp(1.5rem, 6vw, 2rem)" }}
            aria-label="Breadcrumb"
          >
            <span className="whitespace-nowrap">Home</span>
            <span aria-hidden="true">›</span>
            <span className="whitespace-nowrap">Diseases &amp; Conditions</span>
            <span aria-hidden="true">›</span>
            <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Osteoarthritis</span>
          </div>

          {/* Split layout */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">

            {/* Left: Title + meta */}
            <div className="flex-1 pb-7 text-left md:pb-0">
              <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 8vw, 64px)",
                  fontWeight: 400,
                  lineHeight: "1.1",
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                  marginBottom: "0.85rem",
                }}
              >
                Osteoarthritis
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(16px, 2vw, 22px)",
                  lineHeight: 1.2,
                  color: "rgba(255,255,255,0.92)",
                  marginBottom: 0,
                }}
              >
                What It Is, Symptoms, Causes & Treatment Options
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block" style={{ width: "420px", height: "280px", flexShrink: 0, overflow: "hidden", alignSelf: "flex-end" }}>
              <img
                src="/OA.webp"
                alt="Osteoarthritis"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", display: "block" }}
              />
            </div>

          </div>
        </div>

        {/* Nav Tabs */}
        <div style={{ backgroundColor: "#0a4f5a", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2 px-5 py-4 sm:flex sm:gap-3 sm:overflow-x-auto sm:px-6">
            {[
              { label: "Causes & Symptoms", id: "overview", ids: ["overview", "what-is-oa", "types", "causes", "symptoms"] },
              { label: "Diagnosis", id: "diagnosis", ids: ["diagnosis"] },
              { label: "Treatment", id: "treatment", ids: ["treatment", "living-well", "when-to-consult", "faq"] },
            ].map((tab) => {
              const isActive = tab.ids.includes(activeSection)
              return (
                <button
                  key={tab.label}
                  onClick={() => scrollToSection(tab.id)}
                  className="min-w-0 rounded-full px-2 py-3 text-center text-[12px] font-medium leading-tight transition-colors sm:shrink-0 sm:px-6 sm:py-3.5 sm:text-[14px]"
                  style={{
                    backgroundColor: isActive ? "#ffffff" : "rgba(255,255,255,0.12)",
                    color: isActive ? "#0f616e" : "#ffffff",
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </header>


      <main>
        {/* ═══════════ ARTICLE BODY + SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-1 md:pt-4 md:pb-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: Article ── */}
              <div className="flex-1 min-w-0 text-left guide-article-content" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a", textAlign: "left" }}>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While walking comfortably across your home or climbing the stairs, you feel exhausted and tired. People around you become concerned, but you shrug it off, saying, "I'm just getting older." The pain you suffer is not something to ignore. For many Indians, this can be a first sign of osteoarthritis.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is a condition that slowly affects the joints over time. If you don't manage it early, it disturbs your everyday activities. Walking, sitting, or even holding objects becomes a great task to achieve. There have been various treatment options, ranging from medications to complex surgical procedures. The good news is that disease progression can be managed if treatment begins early. Osteoarthritis is no longer just a condition concerned with aging - it has quietly become a major global health concern. In 2021, an estimated <strong className="font-semibold text-navy-deep">374.7 million people worldwide</strong> were living with Knee Osteoarthritis, an increase of 234.5% since 1990.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "0" }}>
                    This is a practical guide that will help you understand what osteoarthritis is, why it happens to you, how you can find out if you suffer from the condition, and what treatment options are available in India.
                  </p>
                </div>

                {/* ── WHAT IS OA ── */}
                <div id="what-is-oa" data-toc-section style={{ marginBottom: "0.5rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Is Osteoarthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    We must first know how a joint works before understanding osteoarthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A joint is where two bones meet. The ends of these bones are covered with a soft and flexible tissue called cartilage. This cushion-like tissue allows you to move easily without friction. In osteoarthritis, this cartilage gradually wears down. As the cushion becomes thin, the bones start to rub against each other. This causes pain, stiffness, swelling, and reduced movement.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    One can imagine it as a door hinge that has lost its oil. It still works, but every movement feels very rough and uncomfortable. Osteoarthritis usually develops slowly, but with the right care, most people can manage their symptoms and continue to lead active lives.
                  </p>

                  <h3
                    style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}
                  >
                    How Common Is Osteoarthritis in India?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Osteoarthritis has now become very common in India. Studies estimate that around 22% to 39% of adults over 40 are affected - roughly one in three to four adults.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Knee osteoarthritis is the most common type, especially among women after menopause. Daily habits like squatting and sitting for long periods on the floor for meals or during prayers can increase stress on the knees. This makes osteoarthritis one of the leading causes of mobility issues in the country.
                  </p>

                  <h3
                    style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}
                  >
                    Who Is More Likely to Get Osteoarthritis?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    If you are obese and aged above 45 years with a family history of joint problems, you might have a higher risk. Factors such as increasing life expectancy, higher rates of obesity, and more sedentary lifestyles are contributing to rising numbers.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Frequent squatting, sitting cross-legged, and climbing stairs can add extra strain on the knees over time. Physically demanding work like farming or construction, and previous joint injuries, make the condition much worse.
                  </p>
                </div>

                {/* ── TYPES ── */}
                <div id="types" data-toc-section style={{ marginBottom: "0.25rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1rem" }}
                  >
                    Types of Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Osteoarthritis doesn't affect every joint the same way. Each of your joint complaints are different on their own.
                  </p>

                  {[
                    { title: "Knees - the daily workhorses", desc: "This is the most commonly affected joint in India. Simple things like climbing stairs, squatting, or getting up from the floor can feel like a task. That stubborn pain reminds you of every step you take." },
                    { title: "Hips - the hidden troublemaker", desc: "Instead of obvious joint pain, it shows up as a deep ache in the inner thigh. You might notice stiffness while walking or difficulty sitting cross-legged. Most people don't connect these symptoms to the hip joint directly." },
                    { title: "Hands - the silent sufferers", desc: "When your hands become the victim, especially the fingers and the base of the thumb, everyday tasks become very tricky. Opening jars, buttoning clothes, or even holding a pen can feel uncomfortable. The joints may look slightly swollen over time." },
                    { title: "Strained spine", desc: "When you sit for long hours, your spine and neck bear the brunt. It often shows up as stiffness in the neck or lower back. Sometimes, it may even cause radiating discomfort if nearby nerves are irritated." },
                    { title: "Feet and ankles - the collapsed support system", desc: "Your feet and ankles quietly support your entire body, so when osteoarthritis affects them, standing or walking for long periods can become very painful. You might feel stiffness, tenderness, or discomfort with every step." },
                  ].map((type, i) => (
                    <div key={i} style={{ marginBottom: i === 4 ? 0 : "0.75rem", paddingTop: i === 0 ? 0 : "0.75rem" }}>
                      <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.5rem" }}>{i + 1}. {type.title}</h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep">{type.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "0.25rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Osteoarthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Osteoarthritis doesn't usually have a single cause. It develops over time due to a mix of factors.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Age and Wear Over Time
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As we grow older, cartilage becomes less flexible and loses its capacity to repair or heal on its own. However, aging alone does not contribute to the disease. If you have a poor lifestyle with a lack of exercise and unhealthy diet patterns, they add up to your ageing journey.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Lifestyle and Physical Factors
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Lifestyle and physical factors play a big role in the disease:
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Excess body weight puts extra pressure on your joints, making them wear in due course.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">If you are a salesperson or a teacher, the nature of the job strains joints over time. Likewise, if your workplace demands continuous standing or maintaining the same posture, you can become a victim of osteoarthritis over time.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Your healed injuries can sometimes become your silent villain, increasing the risk even years later.</li>
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Risk Factors Common in India
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Though we reside in a tropical region where abundant vitamin D is available from the sun, most of us suffer from Vitamin D deficiency. This affects bone and joint health and influences bone integrity and strength.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Though frequent squatting and floor sitting help in deep knee flexion, as you age, they strain your joints slowly.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Among all forms, knee osteoarthritis stands out as particularly common - with a noticeably higher prevalence among older adults, especially women. Hormonal changes, bone health, and longer life expectancy all contribute to this pattern. The number of new cases continues to rise, driven by a combination of ageing populations, rising obesity rates, and increasingly sedentary lifestyles.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "0.25rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Signs and Symptoms You Should Look For
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Osteoarthritis usually develops gradually. There are a few early signs you might notice.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    The Early Signs
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    At first, you begin to feel tired. Slowly, small activities become great tasks. Your joints start becoming stiff. These symptoms often improve once you start moving. Gradually, you may start hearing grinding and creaking sounds.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    As Your Condition Progresses
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As your condition becomes worse, your pain refuses to disappear even after you rest. Your joints become swollen and red. Your knees wouldn't let you climb stairs, and your fingers would need help opening a tight jar.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    When Should You See a Doctor?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Early visits to specialists help you diagnose the condition as early as possible. A rheumatologist is the specialist who can properly evaluate your joint problems and guide you through the treatment.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    When the pain starts disturbing your sleep and the stiffness hinders your daily activities, you should definitely consider seeing a doctor.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta style={{ marginTop: "2rem" }} />

                {/* ── KEY FACTORS divider ── */}
                <div data-toc-section style={{ paddingBottom: "1.5rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Key Factors to Consider for Osteoarthritis
                  </h2>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.75rem" }}>
                    Effective management begins with understanding the factors most relevant to your situation:
                  </p>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                    {[
                      "Accurate, early diagnosis to prevent silent disease progression",
                      "Identifying reversible risk factors such as weight, activity level, and Vitamin D status",
                      "Personalised physiotherapy and muscle-strengthening plans",
                      "Dietary guidance and weight management tailored to your profile",
                      "Regular monitoring of joint health and imaging where needed",
                      "Distinguishing osteoarthritis from conditions like rheumatoid arthritis and post-chikungunya arthritis",
                    ].map((item, i) => (
                      <li key={i} style={{ color: "#182439", fontSize: "16px", lineHeight: 1.8, marginBottom: "0.25rem", fontWeight: 500 }}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    At Omni Rheuma, our rheumatologists specialise in comprehensive osteoarthritis care. With evidence-based protocols, personalised treatment plans, and a patient-first approach, we help you manage symptoms effectively and protect your joints for the long term.
                  </p>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "0.25rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Osteoarthritis Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is diagnosed by physical examination, imaging tests and blood tests. Your doctor asks the duration of pain and discomfort, if you have suffered any injury to that same joint in the past, any of your family members suffer from this condition, and if the pain is relieved. This conversation helps the doctor to rule out some conditions like rheumatoid arthritis, gout that mimic osteoarthritis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.75rem" }}>Physical Examination</h3>
                  <p className="text-[16px] leading-[1.75] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Initially, the doctor checks if you have any obvious swelling or redness in the affected site, and pain while the physician touches the joint, to what extent you were able to move your joint and see how flexible your joint is.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.75rem" }}>Imaging Tests</h3>
                  <p className="text-[16px] leading-[1.75] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    Once the doctor examines the affected site completely they proceed with the imaging tests, commonly used to look for cartilage loss and bone changes.
                  </p>
                  <p className="text-[16px] leading-[1.75] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    MRI is not routine for osteoarthritis, it is used when the situation needs a closer, more detailed picture beyond what an X-ray can show. MRI scans are needed only in early cases where symptoms don't match the site and prior surgeries.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.75rem" }}>Blood Tests</h3>
                  <p className="text-[16px] leading-[1.75] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no specific blood test for osteoarthritis. Tests are mainly done to rule out other conditions like rheumatoid arthritis.
                  </p>
                </div>

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginBottom: "0.25rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Can Osteoarthritis Be Treated?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    While osteoarthritis cannot be reversed completely, treatment can help reduce your pain and improve your quality of life.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Medications
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Some medicines your doctor can prescribe are:
                  </p>
                  <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Paracetamol, like Calpol, Crocin, for mild pain</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Anti-inflammatory medicines like ibuprofen or diclofenac ease your pain and swelling</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Topical gels like Diclofenac or Volini for local pain relief</li>
                  </ul>
                  <p className="text-[16px] leading-[1.75] text-navy-muted italic" style={{ marginBottom: "1.75rem" }}>
                    Affordable generic versions are available at government Jan Aushadhi stores. But medicines must be consumed only based on the doctor's prescription.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Physiotherapy and Exercise
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    You will start to lose if you fail to move. Physiotherapy is one of the most effective yet underused treatments for osteoarthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Exercises help strengthen muscles around the joint, reducing stress on it. Activities like walking, swimming, and yoga are especially helpful. Rest alone is not the solution - gentle, regular movement is always essential.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Advanced Treatment Options
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    If basic treatments are not enough, your doctor can prescribe alternate treatments in the later stages:
                  </p>
                  <ul className="space-y-1 mb-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Steroid injections provide short-term relief from your pain</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Hyaluronic acid injections lubricate your joints to reduce friction while you move</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Knee or hip replacement surgery is considered in severe cases, when other treatment options fail to help. Knee replacement surgeries are covered under government schemes like PM-JAY for eligible patients.</li>
                  </ul>
                </div>

                {/* ── LIVING WELL ── */}
                <div id="living-well" data-toc-section style={{ marginBottom: "0.25rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Adapting to the New Normal
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Many people live active, fulfilling lives despite osteoarthritis. Small lifestyle changes can make a big difference. Some of the tiny efforts that help you take a great leap are:
                  </p>
                  <ul className="space-y-1 mb-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {[
                      "Losing even 5 kg can significantly reduce strain on your knees",
                      "Adding turmeric, ginger, amla, and fatty fish to your diet",
                      "Choosing low-impact activities like yoga or cycling",
                      "Avoiding frequent squatting or sitting on the floor as you eat and pray",
                      "Using support like a walking stick if needed",
                      "Wearing comfortable orthopaedic shoes to support your weight-bearing ankle",
                      "Managing emotional health is absolutely important. Long-term pain can affect your mood and disturb your sleep, so seeking support when needed is always recommended.",
                    ].map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* ── WHEN TO CONSULT ── */}
                <div data-toc-section className="guide-final-section" style={{ marginBottom: "4rem", paddingTop: "0" }}>
                  <h2
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to see a rheumatologist
                  </h2>

                  <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px 28px 28px", fontFamily: "var(--font-base)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                      <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                      <p style={{ fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Book an evaluation if joint pain is affecting daily life</p>
                    </div>

                    <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        "Joint pain that lasts more than 2-3 weeks or keeps coming back",
                        "Stiffness after waking up or after sitting that improves only after movement",
                        "Knee or hip pain while climbing stairs, squatting, walking, or getting up from a chair",
                        "Grinding, cracking, swelling, or reduced movement in one or more joints",
                        "Hand pain that affects grip, writing, cooking, opening jars, or buttoning clothes",
                        "Pain that starts disturbing sleep, work, prayer, travel, or daily movement",
                      ].map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                          <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "4px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#E86531" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span style={{ fontSize: "15px", lineHeight: 1.7, color: "#1a1a1a", fontFamily: "var(--font-base)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className="group"
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none" }}
                    >
                      Book a Specialist Visit
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </a>
                  </div>
                </div>


                {/* ── NEWSLETTER ── */}
                <div style={{ marginBottom: "4rem" }}>
                  <GoutNewsletter />
                </div>

                {/* ── REFERENCES ── */}
                <div style={{ borderTop: "1px solid #dadfe8", paddingTop: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "2rem" }}>
                    Last updated: May 2026. This content is for informational purposes only and does not substitute professional medical advice.
                  </p>
                  <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-navy-muted" style={{ marginBottom: "1rem" }}>References</p>
                  <ol className="space-y-3" style={{ paddingLeft: "1.25rem" }}>
                    {[
                      "Chopra A, et al. COPCORD India Study. Indian Journal of Rheumatology. 2012.",
                      "Indian Rheumatology Association (IRA) Guidelines on Osteoarthritis Management.",
                      "Mayo Clinic. Osteoarthritis: Symptoms and Causes. mayoclinic.org.",
                      "Cleveland Clinic. Osteoarthritis Overview. clevelandclinic.org.",
                      "Hopkins Medicine. www.hopkinsmedicine.org.",
                      "Arthritis Foundation. www.arthritis.org.",
                      "None RT, Bandi PVS, None AR. Prevalence and Clinical Profile of OA Knee. Journal of Contemporary Clinical Practice. 2025;11(10):399-404.",
                      "Ouyang Y, Dai M. Global burden of knee osteoarthritis. J Orthop Surg Res. 2025;20(1):766. doi:10.1186/s13018-025-06140-0.",
                    ].map((ref, i) => (
                      <li key={i} className="text-[15px] leading-[1.7] text-navy-muted" style={{ listStyleType: "decimal" }}>{ref}</li>
                    ))}
                  </ol>
                </div>

                <hr className="border-none border-t border-[#dcdcdc] mt-10" />
              </div>

              {/* ── Right: TOC ── */}
              <aside className="hidden lg:block w-[360px] shrink-0" style={{ marginLeft: "auto" }}>
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 100px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="guide-sidebar-scroll" style={{ backgroundColor: "#E8F4F8", overflowY: "auto", overflowX: "hidden", flex: "1 1 auto", minHeight: 0 }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocSections.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="text-left flex items-center gap-3 pr-5 transition-colors"
                            style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "9px", paddingBottom: "9px", borderBottom: "1px solid rgba(15,97,110,0.08)" }}
                          >
                            <div style={{ width: 3, alignSelf: "stretch", backgroundColor: isActive ? "#0f616e" : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#9aa7b8", minWidth: "18px" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "13.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>
                              {s.label}
                            </span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>
                  <div style={{ backgroundColor: "#0f616e", color: "#ffffff", padding: "20px 22px", fontFamily: "var(--font-base)", flex: "0 0 auto" }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                      <img src="/raghav.webp" alt="Dr. Raghavendra H" className="w-12 h-12 rounded-full object-cover object-top bg-[#f0cfc4] shrink-0" />
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.62)", marginBottom: "5px" }}>Medically reviewed by</p>
                        <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.2, color: "#ffffff" }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,0.78)", marginBottom: "14px" }}>
                      Consultant Rheumatologist for osteoarthritis evaluation and long-term joint care.
                    </p>
                    <a
                      href="#"
                      className="group"
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "11px 16px 11px 18px", borderRadius: "9999px", textDecoration: "none" }}
                    >
                      Book Appointment
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </a>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" data-toc-section className="py-16 md:py-20 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-left mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-ghost flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-45" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
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

      </main>
      <BriefingFooter />
    </div>
  )
}

export default OsteoarthritisGuide
