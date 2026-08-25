import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const flareTriggers = [
  "Stress",
  "Illness",
  "Poor sleep",
  "Weather changes",
  "Hormonal changes",
  "Doing too much physical activity.",
]

const duringFlareSteps = [
  "Reduce daily activities instead of stopping them completely.",
  "Gentle stretching or a short walk can help more than complete bed rest.",
  "Applying a warm pack to painful areas may also help relieve discomfort.",
  "Get enough sleep and continue taking medicines as prescribed.",
  "Let family members know when symptoms become worse so that they can provide support with daily activities.",
]

const sleepTips = [
  "Maintaining regular sleep and wake times",
  "Avoiding screens before bed",
  "Limiting caffeine in the evening",
  "Keeping the bedroom cool and comfortable",
]

const mentalHealthTips = [
  "Counselling and cognitive behavioural therapy (CBT) can help people manage long-term pain and how it affects daily life.",
  "Relaxation techniques such as mindfulness and deep breathing exercises may help manage stress and anxiety.",
]

const workDailyLifeTips = [
  "Taking regular movement breaks",
  "Planning activities throughout the day",
  "Avoiding long periods of sitting or standing",
  "Flexible working hours or reducing long hours of travelling, if possible.",
]

const faqs = [
  { q: "Can fibromyalgia be cured, or does it go away on its own?", a: "There is no cure for fibromyalgia. It is a long-term condition and does not resolve on its own. With the right combination of treatment, therapies and lifestyle changes, many people can manage symptoms and improve quality of life." },
  { q: "Is exercise safe when pain is severe?", a: "Yes, gentle stretching and walking are often better than stopping all physical activities completely. Regular exercise can help reduce pain, improve movement, and make daily activities easier." },
  { q: "Does diet make a difference in fibromyalgia?", a: "Diet cannot cure fibromyalgia, but it can help manage the symptoms better. Eating plenty of fruits, vegetables, whole grains, nuts, seeds, fish, and other minimally processed foods may support health." },
  { q: "Can yoga help with fibromyalgia?", a: "Yes, gentle yoga and breathing exercises may help reduce pain, improve sleep, and manage stress in people with fibromyalgia." },
  { q: "How do I explain fibromyalgia to my family?", a: "You can explain that fibromyalgia is a real medical condition that makes the body more sensitive to pain. This means that sensations that may feel a little uncomfortable to others can feel much more painful. Fibromyalgia can also cause extreme tiredness, poor sleep, and difficulty carrying out everyday activities. Encouraging a family member to accompany you to a doctor's appointment can also help them understand the condition better. The doctor can explain how fibromyalgia is affecting your symptoms and discuss the treatment plan in a way that is easier for your family to understand." },
  { q: "Is it safe to use Ayurvedic remedies alongside fibromyalgia medication?", a: "Some Ayurvedic herbs such as ashwagandha and turmeric are commonly used by people with fibromyalgia. However, it is important to speak with a doctor before taking any herbal supplement because they may affect how well the prescribed medicines work." },
]

const references = [
  "Arthritis Foundation. Treatments for Fibromyalgia. arthritis.org. 2022",
  "Mayo Clinic. Fibromyalgia: Symptoms and Causes. mayoclinic.org. 2025",
  "Mazzorana A et al. Role of Exercise in Fibromyalgia Management: A Narrative Review. Cureus. 2026. ncbi.nlm.nih.gov/pmc/articles/PMC12890375",
  "Metyas C et al. Diet and Lifestyle Modifications for Fibromyalgia. Current Rheumatology Reviews. 2024. ncbi.nlm.nih.gov/pmc/articles/PMC11107431",
  "Singh R et al. Impact of Fibromyalgia Severity on Patients' Mood, Sleep Quality, and Quality of Life. Journal of Neurosciences in Rural Practice. AIIMS Bhopal. 2024. ruralneuropractice.com",
  "Bhaskaran U et al. Sleep Profile and Its Correlation with Clinical Variables in Fibromyalgia Syndrome: A Cross-Sectional Study. PMC. 2023. pmc.ncbi.nlm.nih.gov/articles/PMC10590848",
  "Wolfe F et al. 2016 Revisions to the 2010/2011 Fibromyalgia Diagnostic Criteria. Seminars in Arthritis and Rheumatism. 2016. ScienceDirect",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "everyday-life", label: "Managing Fibromyalgia In Everyday Life" },
  { id: "flares", label: "Managing Day-To-Day Flares" },
  { id: "sleep", label: "Managing Sleep Problems In Fibromyalgia" },
  { id: "staying-active", label: "Staying Active For Fibromyalgia" },
  { id: "diet", label: "Diet and Nutrition for Fibromyalgia" },
  { id: "mental-health", label: "Mental Health and Emotional Wellbeing" },
  { id: "work-daily-life", label: "Work, Daily Life and Staying Active" },
  { id: "monitoring", label: "Monitoring and Regular Follow-Up" },
  { id: "speak-to-doctor", label: "When To Speak To A Rheumatologist?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LivingWithFibromyalgia() {
  const [activeSection, setActiveSection] = useState("everyday-life")

  useEffect(() => {
    document.title = "Living With Fibromyalgia: Managing Pain, Sleep, Energy and Daily Life | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Living With Fibromyalgia</span>
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
                  Living With Fibromyalgia:
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
                    Managing Pain, Sleep, Energy and Daily Life
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Shafali Nagpal</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: August 1, 2026
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
                    Fibromyalgia causes much more than body pain. Waking up tired even after a full night's sleep can become part of everyday life. Simple tasks like cooking, shopping, or concentrating at work feel more difficult than usual. Symptoms may improve for a while and then become worse again, making it difficult to plan everyday activities. Constant pain, tiredness and difficulty concentrating also affect mood and emotional well-being.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Living with fibromyalgia often involves making small changes to daily routines. Following the right treatment, taking therapy sessions and choosing healthy lifestyle habits can help many people manage their symptoms well. Learning how to manage the condition can help reduce discomfort and support long-term health. This guide will help you learn practical ways to manage flares, support emotional health and make everyday life easier.
                  </p>
                </div>

                {/* ── EVERYDAY LIFE ── */}
                <div id="everyday-life" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Fibromyalgia In Everyday Life
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Fibromyalgia symptoms often change over time. There may be periods when symptoms improve and then become worse again. Living with fibromyalgia often involves day-to-day symptom management. Managing symptoms may help reduce their effect on mood and daily activities.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Getting good sleep, staying physically active, eating a balanced diet, and looking after mental well-being support the long-term management of the condition. This also helps prevent symptoms from becoming worse. Small changes in daily habits, along with the right treatment, can help improve quality of life.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── FLARES ── */}
                <div id="flares" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Day-To-Day Flares
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    In people with fibromyalgia, there may be periods when pain, tiredness, sleep problems, and difficulty concentrating suddenly become worse. These periods are called flares. Certain factors can trigger a flare, such as
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {flareTriggers.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Keeping a simple symptom diary may help identify personal triggers and make future flares easier to manage.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    What to Do During a Flare
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    During a flare, following simple steps may help when the symptoms become worse.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.75rem" }}>
                    {duringFlareSteps.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{s}</li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Returning to Your Routine
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    As the flare settles, it is best to return to normal activities slowly over the next few days. This may help reduce the chance of another flare. Knowing what makes the symptoms worse and managing them early can make daily life easier.
                  </p>
                </div>

                {/* ── SLEEP ── */}
                <div id="sleep" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Sleep Problems In Fibromyalgia
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Sleep problems affect more than 90% of people with fibromyalgia. Poor sleep can make fibromyalgia symptoms worse and more difficult to manage. Following small changes in the daily routine may help improve sleep quality.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {sleepTips.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In India, late-night family routines, shared bedrooms, and irregular schedules can make good sleep difficult. Speak with a doctor if sleep problems continue to affect daily life. The doctor can assess whether further treatment or medicines are needed to help improve sleep.
                  </p>
                </div>

                {/* ── STAYING ACTIVE ── */}
                <div id="staying-active" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Staying Active For Fibromyalgia
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Staying active helps manage fibromyalgia symptoms better. It reduces pain and improves sleep. Regular physical activity supports energy levels and makes daily activities easier. Starting at a low pace and gradually increasing the intensity prevents worsening of pain and tiredness.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    1. Types of Exercise That Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Gentle exercises such as walking, swimming, and cycling are often recommended. People with fibromyalgia should begin with 5 to 10 minutes of activity. As symptoms improve, gradually increase the intensity and duration of the exercise.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    2. Yoga and Breathing Exercises
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Gentle stretching and yoga may help reduce pain, improve sleep, and manage stress. Breathing exercises (pranayama) may also help the body feel more relaxed and improve stress management.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    3. Pace Your Activities
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Doing too much activity can sometimes make symptoms worse the next day. Taking regular breaks and increasing activities slowly may make everyday activities easier.
                  </p>
                </div>

                {/* ── DIET ── */}
                <div id="diet" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Diet and Nutrition for Fibromyalgia
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no specific diet that can cure fibromyalgia, but healthy eating may help in managing overall health. A healthy diet including plenty of fruits, vegetables, whole grains, nuts, seeds, fish, and other minimally processed foods is important for living well with fibromyalgia.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Turmeric and ginger, which are commonly used in Indian cooking, have natural anti-inflammatory properties. They can be included as part of a healthy diet. Some people also drink haldi doodh (turmeric milk) before bed. While it can be part of a healthy diet, it should not be used as a treatment for fibromyalgia. Sugary foods, highly processed snacks, and excessive caffeine or alcohol may worsen pain or affect sleep in some people. Limiting them in the daily routine may help.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Mental Health and Emotional Wellbeing
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Living with fibromyalgia can sometimes increase the risk of anxiety or low mood, especially when pain and poor sleep affect everyday activities. Looking after mental health is an important part of managing fibromyalgia.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {mentalHealthTips.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Discussing fibromyalgia openly with family can improve understanding and make day-to-day support easier. Speak with a doctor about eSanjeevani, a teleconsultation service, if travelling for follow-up appointments is difficult.
                  </p>
                </div>

                {/* ── WORK DAILY LIFE ── */}
                <div id="work-daily-life" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Work, Daily Life and Staying Active
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Most people with fibromyalgia can continue working and carry out their daily activities. However, making a few adjustments may help manage symptoms more comfortably.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {workDailyLifeTips.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If it is difficult to travel for follow-up appointments, speak with a doctor. They will help you access the government teleconsultation services such as eSanjeevani. Some government health schemes such as PM-JAY may also help cover the cost of specialist consultations for eligible patients.
                  </p>
                </div>

                {/* ── MONITORING ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Monitoring and Regular Follow-Up
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Fibromyalgia symptoms do not always remain the same. Regular follow-up appointments help doctors understand how symptoms are affecting daily life and whether the current treatment plan is working well. Keeping a simple record of pain, sleep problems, tiredness, and activities that make symptoms worse may help identify symptom patterns. Keeping a record can make follow-up appointments more useful.
                  </p>
                </div>

                {/* ── SPEAK TO DOCTOR ── */}
                <div id="speak-to-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When To Speak To A Rheumatologist?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Living with fibromyalgia can be challenging, especially when symptoms begin to affect work, sleep, or daily activities. If symptoms continue despite lifestyle changes or are becoming difficult to manage, it is worth speaking with a rheumatologist. The right treatment plan and lifestyle changes can make long-term management of symptoms easier.
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

                {/* ── REFERENCES ── */}
                <div id="references" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    References
                  </h2>
                  <details className="group" open>
                    <summary className="cursor-pointer inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden" style={{ color: "#0f616e", fontWeight: 700, fontSize: "15px" }}>
                      View Sources
                      <svg className="transition-transform group-open:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                    </summary>
                    <ul className="space-y-2 mt-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                      {references.map((r, i) => (
                        <li key={i} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </details>
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
                            style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "13px", paddingBottom: "13px", borderBottom: "1px solid rgba(15,97,110,0.08)", borderRadius: 0, appearance: "none", WebkitAppearance: "none" }}
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
                    src="/hero2.png"
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

export default LivingWithFibromyalgia
