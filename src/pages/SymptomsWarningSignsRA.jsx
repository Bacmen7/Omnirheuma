import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const everydayChanges = [
  "A ring may become difficult to remove.",
  "Difficulty in opening a jar or hold a cup of tea",
  "Difficulty making a fist after waking up",
  "Trouble buttoning a shirt",
  "Pain while typing or using a mobile",
]

const similarConditions = [
  { condition: "Wear-and-tear arthritis", difference: "Joints appear stiff, but only for a shorter time. Only one side is affected." },
  { condition: "Gout", difference: "Sudden pain in one joint, often the big toe. It develops due to raised uric acid, a waste product that leaves the body in urine." },
  { condition: "Chikungunya arthritis", difference: "Develops mainly after a viral fever with rash. In this rheumatoid arthritis test reports are negative." },
  { condition: "Lupus", difference: "This condition causes a butterfly-shaped facial rash and can involve the kidneys." },
  { condition: "Underactive thyroid", difference: "It causes tiredness and stiffness. But a thyroid blood test can help differentiate it from rheumatoid arthritis." },
  { condition: "Psoriatic arthritis", difference: "It can cause skin patches or nail changes. The involvement of finger tips in psoriatic arthritis differentiates it from rheumatoid arthritis." },
]

const faqs = [
  { q: "What are the first signs of rheumatoid arthritis?", a: "The early signs of rheumatoid arthritis are persistent tiredness and mild stiffness in the joints of the hands or wrists. It can also cause stiffness in the morning lasting more than an hour. These symptoms usually come and go, which is why most people ignore them and delay the diagnosis." },
  { q: "Can symptoms disappear completely and then return?", a: "Yes, some people notice that their joints pain and swelling improve for a few days before they return again. Although this feels reassuring, it does not mean the condition is cured. Without the right treatment, the symptoms become more frequent and persistent." },
  { q: "Can stress trigger a worsening of rheumatoid arthritis ?", a: "Yes, in rheumatoid arthritis, emotional and physical stress can cause symptoms to return or get worse. The stress can cause rheumatoid arthritis and it can also make the symptoms worse." },
]

const references = [
  "Mayo Clinic. Rheumatoid Arthritis: Symptoms and Causes. mayoclinic.org. Updated April 2025.",
  "Cleveland Clinic. Rheumatoid Arthritis. my.clevelandclinic.org. Updated November 2024.",
  "Johns Hopkins Arthritis Center. Rheumatoid Arthritis Symptoms. hopkinsarthritis.org.",
  "Arthritis Foundation. Rheumatoid Arthritis: Causes, Symptoms, Treatments and More. arthritis.org.",
  "Chopra A, et al. Prevalence of rheumatic diseases in rural India. J Assoc Physicians India. 2001.",
  "Indian Rheumatology Association. IRA Guidelines on Management of Rheumatoid Arthritis. 2019.",
  "CDC. Rheumatoid Arthritis https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "how-it-begins", label: "How Rheumatoid Arthritis Begins" },
  { id: "early-warning-signs", label: "Early Warning Signs of Rheumatoid Arthritis Most People Ignore" },
  { id: "common-symptoms", label: "Common Symptoms as the Disease Progresses" },
  { id: "other-parts", label: "When Rheumatoid Arthritis Affects Other Parts of the Body" },
  { id: "age-groups", label: "Symptoms of Rheumatoid Arthritis in Different Age Groups" },
  { id: "similar-conditions", label: "Conditions That Look Similar to Rheumatoid Arthritis" },
  { id: "when-to-see", label: "When to See a Rheumatologist?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function SymptomsWarningSignsRA() {
  const [activeSection, setActiveSection] = useState("how-it-begins")

  useEffect(() => {
    document.title = "Rheumatoid Arthritis: Symptoms and Warning Signs | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Symptoms and Warning Signs</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
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
                  Symptoms of <span className="whitespace-nowrap">Rheumatoid Arthritis:</span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(22px, 2.9vw, 34px)",
                      lineHeight: 1.2,
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                      marginTop: "0.85rem",
                    }}
                  >
                    Symptoms and Warning Signs
                  </span>
                </h1>
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
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Pain and heaviness in the hands or feet are often ignored as extra work or ageing. The discomfort may improve for a while, but it usually returns. Joints become stiff in the morning and even brushing teeth feels difficult. These early signs are usually ignored, but they can be due to a joint condition called rheumatoid arthritis.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Rheumatoid arthritis is a condition that mainly affects women in early age but it can also affect children and elderly people. It causes pain, swelling and stiffness in the joints. If not treated early, it can permanently damage the joints and affects different parts of the body. This article explains the common symptoms of rheumatoid arthritis, early warning signs to watch for, symptoms in different age groups, and when it would be the best time to consult a doctor.
                  </p>
                </div>

                {/* ── HOW IT BEGINS ── */}
                <div id="how-it-begins" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Rheumatoid Arthritis Begins
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    For many people, rheumatoid arthritis begins gradually. It often starts with tiredness that does not improve with rest. Even after a full night&apos;s sleep, there will be a feeling of tiredness. It can also cause mild pain or stiffness in 1 or 2 joints. Initially, symptoms may come and then go. Therefore, they are often confused with tiredness, ageing, or a minor injury.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    As the condition progresses, the disease initially starts affecting the small joints of the hands, wrists, and feet. Both sides of the body are affected. For example, if one wrist becomes painful or swollen, the other wrist may also develop similar symptoms. This pattern helps doctors recognise rheumatoid arthritis early.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── EARLY WARNING SIGNS ── */}
                <div id="early-warning-signs" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Early Warning Signs of Rheumatoid Arthritis Most People Ignore
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    In the early stages of rheumatoid arthritis, there will not be any swelling in the joints. In this stage, the pain and joints being stiff are not continuous. If the following signs last for more than 6 weeks or appear together, it is important to see a rheumatologist.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Stiffness In The Morning Lasting More Than an Hour
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Stiffness after waking up for a short time is normal but in rheumatoid arthritis the stiffness lasts much longer. Even simple tasks such as brushing teeth, holding a cup of tea can feel difficult during this time. The joints may feel stiff or heavy.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    After working at a desk for a few hours, some people notice that their fingers feel stiff when they try to type again or pick up a cup of tea. Stiffness that returns after periods of rest is a common early sign of rheumatoid arthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    In India, many people confuse this symptom with cold weather, ageing, or low vitamin D levels. As a result, they may delay seeing a rheumatologist, which can postpone diagnosis and treatment.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Painful Swelling
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The swelling in rheumatoid arthritis is soft and slightly spongy to the touch. It appears first in the small joints of the hand, wrists, and feet. The affected areas feel warm and are painful even with gentle touch.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people first notice changes during everyday activities.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {everydayChanges.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    These changes may seem minor, but they can be early signs of rheumatoid arthritis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint Involvement on Both Sides of the Body
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Rheumatoid arthritis often affects the same joints on both sides of the body. For example, if one wrist becomes painful or swollen, the other wrist may also develop similar symptoms. This pattern helps doctors distinguish rheumatoid arthritis from many other conditions that can cause joint pain and swelling.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Tiredness That Rest Does Not Fix
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people with rheumatoid arthritis feel tired all the time, even after getting enough sleep. This fatigue is different from ordinary tiredness because it is mainly due to ongoing swelling and irritation in the body. The fatigue may appear weeks or even months before any joint swelling develops. This can also affect focus, work, and daily activities.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    In India, this type of tiredness is often linked to stress or low haemoglobin (anaemia), especially in women. As a result, there is a delay in diagnosing rheumatoid arthritis until any joint symptoms become more noticeable.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Low-Grade Fever, Weight Loss, and Reduced Appetite
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Some people with rheumatoid arthritis develop a mild fever during active swelling and irritation. Sometimes they may also lose weight without trying or notice a reduction in their appetite. Although these symptoms are less common than joint pain and stiffness, they can usually occur when the disease is more active.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms That Come and Go
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In the early stages, rheumatoid arthritis symptoms may come and go. Pain and stiffness can improve for a few days or weeks before returning again. This can make it appear as if the problem has gone away.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    However, the swelling and irritation may still be present even when the other symptoms improve. Without treatment, these painful episodes often become more frequent. This can eventually cause permanent joint pain and swelling.
                  </p>
                </div>

                {/* ── COMMON SYMPTOMS ── */}
                <div id="common-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Common Symptoms as the Disease Progresses
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As rheumatoid arthritis progresses, it can affect more joints. Along with pain and swelling, many people also experience tiredness, fever, weight loss, and other whole-body symptoms.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid arthritis usually starts in the small joints of the fingers, wrists, and toes. If swelling occurs around the wrist joint, it can cause numbness and tingling in the fingers. As the condition progresses, it can spread to the knees, ankles, elbows, shoulders, and hips. The pain often feels worse after resting and improves with gentle movements.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The joints at the tip of fingers are usually not affected. This pattern helps doctors distinguish rheumatoid arthritis from some other types of arthritis. The backbone is usually not affected. Rheumatoid arthritis may involve the neck after many years of the disease.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Whole-Body Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Many people with rheumatoid arthritis may experience severe tiredness and anaemia. They may also experience a mild fever, weight loss, and low mood. In some people, depression and difficulty to focus occurs even before joint swelling develops.
                  </p>
                </div>

                {/* ── OTHER PARTS OF THE BODY ── */}
                <div id="other-parts" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Rheumatoid Arthritis Affects Other Parts of the Body
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When rheumatoid arthritis is left untreated for years, it can spread to other areas of the body, such as the eyes, lungs, heart, and kidneys. Eyes may become dry, red, and sensitive to light. Sometimes, a firm and painless lump called rheumatoid nodules forms under the skin. These nodules form especially near the elbows.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    When rheumatoid arthritis spreads to the lungs, it can cause a dry cough or difficulty in breathing. If rheumatoid arthritis is not treated early, it can increase the risk of heart disease. With early diagnosis and the right treatment, most of these complications can be avoided.
                  </p>
                </div>

                {/* ── AGE GROUPS ── */}
                <div id="age-groups" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms of Rheumatoid Arthritis in Different Age Groups
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Rheumatoid arthritis can develop at any age, but the way it first appears is not always the same. The symptoms may vary depending on the person&apos;s age and stage of life.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Women and Post-Childbirth Onset
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Women are at a higher risk of developing rheumatoid arthritis than men. It is about 3 times more common in women. In some women, the first symptoms appear within a few weeks after childbirth. During this time, joint pain is often mistaken for weakness after delivery or low calcium levels. As a result, many women do not see a rheumatologist until the symptoms become more severe.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Young Adults Between 25 to 45 Years
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    In this age group, rheumatoid arthritis is commonly mistaken for strain, or tiredness due to work. It is often assumed that rheumatoid arthritis can only develop in older age, so younger patients usually live years without getting a proper diagnosis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Elderly Patients
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Older adults may first notice pain in larger joints such as the shoulders or hips instead of the fingers and wrists. These symptoms are often mistaken for age-related joint problems. As a result, the diagnosis is usually delayed.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Children
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The symptoms of rheumatoid arthritis in children are different from those in adults. In children, the condition is called Juvenile Idiopathic Arthritis. In this condition, the child may seem irritable. They may develop visible swelling in the joints and refuse to use one arm or leg. If the child develops redness in the eyes with or without pain, it is an emergency situation and should not be ignored. It requires medical care immediately.
                  </p>
                </div>

                {/* ── SIMILAR CONDITIONS ── */}
                <div id="similar-conditions" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Conditions That Look Similar to Rheumatoid Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Rheumatoid arthritis symptoms are often confused with other conditions, which could delay the diagnosis. Knowing the difference can help you receive the right treatment early.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[680px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Condition</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Key Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {similarConditions.map((row) => (
                          <tr key={row.condition} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.condition}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.difference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

        {/* ═══════════ WHEN TO SEE + REFERENCES ═══════════ */}
              <div id="when-to-see" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  When to See a Rheumatologist?
                </h2>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                  Many people in India live with pain, swelling, and tiredness for years before receiving the right diagnosis of rheumatoid arthritis. See a rheumatologist if stiffness in the morning lasts for more than an hour. Also, seek medical advice if the small joints on both sides of your body become swollen or warm. Do not ignore symptoms that last for more than six weeks.
                </p>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                  See a doctor if your symptoms keep coming and going or if tiredness has no clear cause. It is also important to get checked if joint pain starts after a chikungunya infection or within a few weeks after childbirth. Waiting for the symptoms to improve on their own can delay the diagnosis. Early diagnosis and the right treatment can help prevent the condition from worsening.
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

              <div id="references" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  References
                </h2>
                <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  {references.map((r, i) => (
                    <li key={i} className="text-[15px] leading-[1.75] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                      {r}
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
                      Consultant Rheumatologist for rheumatoid arthritis evaluation and long-term joint care.
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

export default SymptomsWarningSignsRA
