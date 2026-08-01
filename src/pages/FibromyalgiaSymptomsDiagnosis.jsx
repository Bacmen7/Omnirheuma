import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const causesFibromyalgia = [
  "Infections such as COVID or chikungunya.",
  "Injury",
  "Surgery",
  "Long-term stress",
]

const earlyWarningSigns = [
  "Pain in the shoulders, neck, or back without any obvious injury.",
  "Tiredness that continues even after a full night's sleep.",
  "Stiffness in the morning becomes part of everyday life.",
  "Difficulty concentrating or feeling mentally \"foggy\" during daily activities.",
]

const triggerFactors = [
  "Stress",
  "Illness",
  "Poor sleep",
  "Hormonal shifts",
  "Changes in weather",
  "Doing too much physical activity",
]

const lookAlikeConditions = [
  { condition: "Rheumatoid Arthritis", symptoms: "Joint pain, fatigue, stiffness", difference: "Rheumatoid arthritis causes joint damage. Fibromyalgia does not damage joints." },
  { condition: "Hypothyroidism", symptoms: "Fatigue, pain, confusion, and difficulty focusing", difference: "Confirmed through a thyroid blood test" },
  { condition: "Vitamin D Deficiency", symptoms: "Widespread body pain and fatigue", difference: "Symptoms usually improve with vitamin D supplementation" },
  { condition: "Depression", symptoms: "Fatigue, sleep problems, difficulty focusing", difference: "Depression is a mood disorder. Although both conditions can occur together" },
  { condition: "Post-Chikungunya Arthritis", symptoms: "Joint pain, fatigue", difference: "It usually develops after a chikungunya infection and has a clear viral trigger." },
  { condition: "Lupus SLE", symptoms: "Fatigue, pain, difficulty concentrating and memory loss", difference: "Lupus has characteristic clinical features and specific blood test findings." },
]

const faqs = [
  { q: "Is fibromyalgia pain real or imagined?", a: "Yes, fibromyalgia pain is real. People with fibromyalgia process pain differently, which makes them more sensitive to pain signals. It is a medical condition and does not mean that the symptoms are imagined." },
  { q: "Why is fibromyalgia so often mistaken for vitamin D deficiency or anaemia in India?", a: "Many fibromyalgia symptoms look like vitamin D deficiency and anaemia, which are common in India. The difference is that fibromyalgia symptoms do not improve even after taking supplements." },
  { q: "What does fibro fog feel like?", a: "'Fibro fog' is a feeling of being mentally tired or unusually forgetful. It may become difficult to concentrate, remember simple things, or find the right words during conversations or daily tasks." },
  { q: "Is fibromyalgia the same as arthritis?", a: "No, arthritis damages the joints, which are visible on scans and blood tests. Fibromyalgia causes no joint damage and shows nothing abnormal on blood tests. The two conditions can coexist. People with rheumatoid arthritis are at higher risk of developing fibromyalgia." },
]

const references = [
  { text: "Mayo Clinic. Fibromyalgia: Symptoms and Causes. ", url: "mayoclinic.org/diseases-conditions/fibromyalgia/symptoms-causes/syc-20354780" },
  { text: "Mayo Clinic. Fibromyalgia: Diagnosis and Treatment. ", url: "mayoclinic.org/diseases-conditions/fibromyalgia/diagnosis-treatment/drc-20354785" },
  { text: "Mayo Clinic Proceedings. The Science of Fibromyalgia. Clauw DJ et al. 2011;86(9):907-911." },
  { text: "Mayo Clinic Proceedings. Fibromyalgia and Related Conditions. 2015." },
  { text: "Wolfe F et al. 2016 Revisions to the 2010/2011 Fibromyalgia Diagnostic Criteria. Seminars in Arthritis and Rheumatism. 2016;46:319-329. ", url: "sciencedirect.com" },
  { text: "American College of Rheumatology. ACR 2016 Fibromyalgia Diagnostic Criteria. ", url: "acrabstracts.org" },
  { text: "Wolfe F et al. Fibromyalgia Diagnosis and Biased Assessment: Sex, Prevalence and Bias. PLOS ONE. 2018. ", url: "journals.plos.org" },
  { text: "Oz A, Yildirim T. Association Between Post-COVID-19 Infection and Fibromyalgia. Journal of Clinical Medicine. 2026;15(3):1098. ", url: "ncbi.nlm.nih.gov" },
  { text: "ScienceDirect. Post-COVID-19 Syndrome and Fibromyalgia. 2023." },
  { text: "Nature Medicine. Unexplained Post-Acute Infection Syndromes (post-chikungunya sequelae). 2022." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "causes", label: "What Causes Fibromyalgia?" },
  { id: "early-warning", label: "Early Warning Signs: What Fibromyalgia Feels Like Before It Has a Name" },
  { id: "common-symptoms", label: "Common Symptoms of Fibromyalgia" },
  { id: "triggers", label: "What Triggers or Worsens Fibromyalgia Symptoms?" },
  { id: "look-alike", label: "Conditions That Can Look Like Fibromyalgia" },
  { id: "diagnosis", label: "How Is Fibromyalgia Diagnosed?" },
  { id: "when-to-see-doctor", label: "When Should You See a Doctor?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function FibromyalgiaSymptomsDiagnosis() {
  const [activeSection, setActiveSection] = useState("causes")

  useEffect(() => {
    document.title = "Fibromyalgia: Symptoms, Warning Signs, And Diagnosis | Omni Rheuma"
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
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
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
    <div className="landing-page bg-white text-navy-deep antialiased" style={{}}>
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
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-7xl mx-auto px-5 pt-8 pb-10 sm:px-6 md:pt-12 md:pb-16">

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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Fibromyalgia Symptoms and Diagnosis</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                {/* <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p> */}
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 8.5vw, 72px)",
                    fontWeight: 400,
                    lineHeight: "1.1",
                    letterSpacing: "-0.5px",
                    color: "#ffffff",
                    marginBottom: 0,
                  }}
                >
                  Symptoms and Warning Signs of <span className="whitespace-nowrap">Fibromyalgia:</span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(26px, 3.4vw, 40px)",
                      lineHeight: 1.2,
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                      marginTop: "0.85rem",
                    }}
                  >
                    Symptoms, Warning Signs, And Diagnosis
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 31, 2026
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ═══════════ ARTICLE BODY + TOC ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-1 md:pt-4 md:pb-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0 guide-article-content" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* ── INTRO ── */}
                <div id="intro" data-toc-section style={{ marginBottom: "1rem" }}>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Climbing stairs feels more tiring than it should. Household chores leave the body aching for hours. Sleeping through the night does not feel refreshing, and blood tests repeatedly come back normal. Many people spend years believing that they are simply overworked or stressed before receiving a diagnosis. However, these symptoms can be due to a condition called fibromyalgia.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Fibromyalgia is a long-term condition that affects how the brain and nervous system process pain signals. It can cause widespread pain, tiredness, and problems with sleep and concentration. If it is not diagnosed early, symptoms can affect daily life for many years. This page will explain the causes, early warning signs, common symptoms, and how a diagnosis is reached so that anyone who has been searching for answers finally has a place to start.
                  </p>
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Fibromyalgia?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The exact cause of fibromyalgia is not known. Doctors believe it often starts with changes in how the brain and nervous system respond to pain signals.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Genes play an important role, which is why fibromyalgia often runs in families. Fibromyalgia may trigger due to reasons, such as
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {causesFibromyalgia.map((c, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{c}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This does not mean pain is psychological. Fibromyalgia is a real medical condition that changes the way the body feels and responds to pain.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── EARLY WARNING SIGNS ── */}
                <div id="early-warning" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Early Warning Signs: What Fibromyalgia Feels Like Before It Has a Name
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    In the early stages, fibromyalgia symptoms are often easy to overlook. People may experience:
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {earlyWarningSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{s}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In India, these symptoms are often blamed on anaemia, vitamin deficiencies, stress, or overwork. These conditions can cause similar symptoms. However, fibromyalgia should be considered when several symptoms occur together and do not improve with treatment. Doctors usually look at the full pattern of symptoms rather than just one symptom.
                  </p>
                </div>

                {/* ── COMMON SYMPTOMS ── */}
                <div id="common-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Common Symptoms of Fibromyalgia
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Fibromyalgia can affect different parts of the body. It can cause pain and stiffness symptoms in several parts of the body instead of one area. Symptoms may come and go. They may improve for a few days or weeks before they return again.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    1. Widespread Pain
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Widespread body pain often develops in people with fibromyalgia. The pain can affect several parts of the body at the same time. It usually involves muscles, soft tissues, and sometimes joints. People describe it as a constant aching pain, while others feel a burning sensation even when touched gently. The symptoms may continue for months or years. It is present on both sides of the body, often above and below the waist.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    2. Fatigue and Low Energy
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Many people with fibromyalgia feel tired all the time. They often feel constant tiredness that does not improve with rest or sleep. Many people describe this as feeling completely drained even when they wake up in the morning. This fatigue is different from ordinary tiredness because it affects the ability to work, care for family, and manage everyday tasks.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    3. Sleep Problems
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    People with fibromyalgia often wake up as tired as when they went to bed. Tiredness does not improve even after sleeping for many hours. This is because the brain does not reach the deep sleep stage. Stiffness in the morning is also common, but it improves gradually.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    4. Confusion and Difficulty in focusing: Brain Fog
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Brain fog is a common symptom of fibromyalgia. People with brain fog often forget words while speaking and lose track of what they were doing. They also struggle to concentrate. In India, these difficulties are usually linked to stress or inattention. Many people never mention these daily-life symptoms to their doctor because they assume these symptoms are not related to their condition.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    5. Heightened Sensitivity
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Fibromyalgia can increase sensitivity to pain. Things that should not be painful become painful. Even minor injuries such as a needle prick or small cut may feel much more painful than expected in people with fibromyalgia. There is also increased sensitivity to touch, temperature, light, and sound.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Other Common Symptoms.
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Fibromyalgia can cause frequent headaches or migraines. Some people may also experience stomach problems such as cramps, constipation, or diarrhoea. It can also cause an uncontrollable urge to move their legs at night. Anxiety, low mood, and tingling or numbness in the hands and feet are also common.
                  </p>
                </div>

                {/* ── TRIGGERS ── */}
                <div id="triggers" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Triggers or Worsens Fibromyalgia Symptoms?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Fibromyalgia does not always remain the same. Pain, tiredness or sleep problems may improve for a while before worsening again. The following factors can trigger these symptoms:
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {triggerFactors.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Keeping a simple symptom diary may help identify personal triggers and symptom patterns. With the right treatment and lifestyle changes, many people experience periods when their symptoms are better controlled.
                  </p>
                </div>

                {/* ── LOOK-ALIKE CONDITIONS ── */}
                <div id="look-alike" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Conditions That Can Look Like Fibromyalgia
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Fibromyalgia is often confused with other conditions because it shares many symptoms with other health conditions. This can make the diagnosis more challenging. Doctors take a step-by-step approach before confirming fibromyalgia.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[640px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Condition</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Common Symptoms</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Key Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lookAlikeConditions.map((row, i) => (
                          <tr key={i} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.condition}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.symptoms}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.difference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Fibromyalgia Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no single blood test that can confirm fibromyalgia. Doctors usually diagnose fibromyalgia by looking at the pattern of symptoms. They will also recommend blood tests to rule out other conditions that can cause similar problems.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors use internationally accepted diagnostic criteria called the ACR 2016 criteria to diagnose fibromyalgia. These criteria look at how many areas of the body are painful and how severe symptoms are, such as tiredness, poor sleep, and difficulty concentrating. Symptoms usually will be present for at least three months and affect several parts of the body before fibromyalgia is diagnosed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    One of the most important things to understand is that normal blood test results are common in fibromyalgia. In fact, they help doctors rule out other conditions and support the diagnosis. Normal test results do not mean that the symptoms are "all in the mind" or that nothing is wrong.
                  </p>
                </div>

                {/* ── WHEN TO SEE DOCTOR ── */}
                <div id="when-to-see-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should You See a Doctor?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    See a rheumatologist if widespread pain has lasted for more than three months without a clear cause or if tiredness does not improve despite adequate rest, sleep, or treatment for anaemia or vitamin deficiencies. Fibromyalgia should also be considered when multiple symptoms such as pain, fatigue, sleep problems, and gut symptoms affect daily life. Early diagnosis can help improve symptom control and quality of life.
                  </p>
                  <Link
                    to="/book-appointment"
                    className="group"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none", marginTop: "1.5rem" }}
                  >
                    Book a Consultation with Dr Raghavendra H
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

                {/* ── DISCLAIMER + REFERENCES ── */}
                <div id="references" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Disclaimer
                  </h2>
                  <p className="text-[14px] leading-[1.7] italic" style={{ color: "#5E5E5E", marginBottom: "2.5rem" }}>
                    This content has been written for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified rheumatologist or healthcare provider if you have questions about a medical condition or treatment plan.
                  </p>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    References
                  </h2>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {references.map((r, i) => (
                      <li key={i} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        {r.text}
                        {r.url && (
                          <a href={`https://${r.url}`} target="_blank" rel="noopener noreferrer" style={{ color: "#0f616e", textDecoration: "underline" }}>{r.url}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-none border-t border-[#dcdcdc] mt-12" />

              </div>

              {/* ── Right: TOC ── */}
              <aside className="hidden lg:block w-[360px] shrink-0" style={{ marginLeft: "auto" }}>
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 100px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="guide-sidebar-scroll" style={{ backgroundColor: "#E8F4F8", overflowY: "auto", overflowX: "hidden", flex: "1 1 auto", minHeight: 0 }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocItems.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="text-left flex items-center gap-3 pr-5 transition-colors"
                            style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "13px", paddingBottom: "13px", borderBottom: "1px solid rgba(15,97,110,0.08)", borderRadius: 0 }}
                          >
                            <div style={{ width: 3, alignSelf: "stretch", backgroundColor: isActive ? "#0f616e" : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#9aa7b8", minWidth: "18px" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "15.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.45 }}>
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
                        <p style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.62)", marginBottom: "5px" }}>Medically reviewed by</p>
                        <p style={{ fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 700, lineHeight: 1.2, color: "#ffffff" }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <p style={{ fontFamily: "var(--font-base)", fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,0.78)", marginBottom: "14px" }}>
                      Consultant Rheumatologist for fibromyalgia evaluation and long-term care.
                    </p>
                    <Link
                      to="/book-appointment"
                      className="group"
                      style={{ fontFamily: "var(--font-base)", display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "11px 16px 11px 18px", borderRadius: "9999px", textDecoration: "none" }}
                    >
                      Book Appointment
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="py-16 md:py-20 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
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
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      {faq.a.split("\n").map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER WITH WAVE ═══════════ */}
        <section className="custom-approach-section w-full flex flex-col bg-ghost overflow-visible" style={{ paddingBottom: 0 }}>
          <div style={{ height: "60px", backgroundColor: "#F5F5F5" }} />
          <svg
            className="w-full h-[24px] sm:h-[90px] md:h-[120px] block" style={{ color: "#0f616e" }}
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path
              d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
              fill="currentColor"
            />
          </svg>
          <div style={{ backgroundColor: "#0f616e" }} className="w-full overflow-visible">
            <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14 pt-6 sm:pt-10">
              <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-16">
                <div className="flex-[1.1] flex flex-col items-center md:items-start justify-center py-4">
                  <h2
                    className="leading-[1.1] font-normal mb-12 md:mb-16 text-center md:text-left"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(36px, 5.5vw, 68px)",
                      letterSpacing: "-0.5px",
                      color: "#ffffff",
                    }}
                  >
                    Ready to get started?
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-7 md:gap-6">
                    <Link
                      to="/book-appointment"
                      className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90 text-center"
                      style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "16px 32px" }}
                    >
                      Schedule An Appointment
                    </Link>
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[15px] text-gray-100 opacity-90">or</span>
                      <Link
                        to="/book-appointment"
                        className="text-[15px] font-semibold underline underline-offset-[6px] hover:opacity-80 transition-opacity"
                        style={{ color: "#ffffff", textDecorationThickness: "2px" }}
                      >
                        let&apos;s get in touch
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/hero-consult.webp"
                    alt="Doctor consulting with patient"
                    className="w-full block rounded-[4px] absolute bottom-0"
                    style={{ height: "clamp(300px, 50vw, 520px)", objectFit: "cover", objectPosition: "center 20%" }}
                  />
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

export default FibromyalgiaSymptomsDiagnosis
