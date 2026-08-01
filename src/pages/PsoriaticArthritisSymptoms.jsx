import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const earlyWarningSigns = [
  "Stiffness in the morning that lasts for more than 30 minutes after waking up. This gradually improves with movement.",
  "Pain and swelling in the hands and feet that may come and go.",
  "Small pits or dents on the nail, yellowing or white discolouration, and nails lifting away from the nail bed.",
  "Pain in the heel or sole of the foot that does not improve after rest.",
  "Pain and swelling in the whole finger or toe that looks like a sausage.",
]

const progressionFlow = [
  "Warning signs appear : discussed above",
  "Symptoms seem to improve",
  "Symptoms are often ignored or misdiagnosed",
  "The condition remains active inside the joints.",
  "Joint damage can develop over time",
  "Early treatment helps prevent long-term damage",
]

const faqs = [
  { q: "Can I have psoriatic arthritis without a skin rash?", a: "Yes, many people develop joint symptoms months or years before any skin rash appears. The doctor may detect the condition based on the nail changes, family history and joint symptoms. Early diagnosis and treatment can help reduce symptoms and protect the joints." },
  { q: "Is psoriatic arthritis the same as rheumatoid arthritis?", a: "No, although both conditions cause joint pain and stiffness, they are different.  Psoriatic arthritis usually develops with skin rashes, nail changes, swelling in the entire finger or toe, and pain in the heel or sole of the foot. Rheumatoid arthritis, on the other hand, more commonly affects the same joints on both sides of the body, particularly the hands, wrists, and feet." },
  { q: "Are nail changes in psoriatic arthritis different from a fungal nail infection?", a: "Yes, fungal nail infections respond to antifungal treatment. Psoriatic arthritis nail changes do not respond to antifungals. If antifungal treatment has not helped, it is better to consult with a doctor." },
  { q: "Can psoriatic arthritis affect the spine?", a: "Yes, some people develop swelling and irritation in the spine, which causes back pain and stiffness. These symptoms are often worse in the morning and improve with movement. The doctor may recommend an MRI if spinal involvement is suspected." },
  { q: "What does dactylitis feel like?", a: "Dactylitis feels like an entire finger or toe has become swollen rather than just one joint. It may feel tender, warm, and visibly puffy. Many people first notice that they cannot fully close their hand or that one toe looks noticeably different from the others." },
]

const references = [
  { text: "Arthritis Foundation. Psoriatic Arthritis Symptoms, Diagnosis and Treatment. ", url: "https://www.arthritis.org/diseases/psoriatic-arthritis" },
  { text: "Chandran V, Raychaudhuri SP. Geoepidemiology and Environmental Factors of Psoriasis and Psoriatic Arthritis. Journal of Autoimmunity. 2010. ", url: "https://pubmed.ncbi.nlm.nih.gov/20219336/" },
  { text: "Gladman DD et al. Diagnosis and Management of Psoriatic Arthritis. Indian Journal of Dermatology Venereology and Luprology. 2013. ", url: "https://ijdvl.com/diagnosis-and-management-of-psoriatic-arthritis/" },
  { text: "Medical News Today. 12 Early Signs of Psoriatic Arthritis. 2024. ", url: "https://www.medicalnewstoday.com/articles/what-are-the-first-signs-of-psoriatic-arthritis" },
  { text: "PMC. Enthesitis and Dactylitis in Psoriatic Disease. PubMed Central. 2018. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6267546/" },
  { text: "National Psoriasis Foundation. Psoriatic Arthritis: Symptoms, Causes and Treatment.  Psoriasis.org", url: null },
  { text: "PMC. Psoriatic Arthritis: Pathogenesis and Targeted Therapies. PubMed Central. 2023. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10003101/" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "common-symptoms", label: "Common Symptoms of Psoriatic Arthritis" },
  { id: "early-warning", label: "Early Warning Signs of Psoriatic Arthritis" },
  { id: "progression", label: "How Symptoms Progress Over Time" },
  { id: "groups", label: "How Symptoms Differ Across Groups" },
  { id: "see-doctor", label: "When Should You See a Doctor?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function PsoriaticArthritisSymptoms() {
  const [activeSection, setActiveSection] = useState("common-symptoms")

  useEffect(() => {
    document.title = "Psoriatic Arthritis: Symptoms and Warning Signs | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Psoriatic Arthritis Symptoms</span>
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
                  Symptoms of <span className="whitespace-nowrap">Psoriatic Arthritis:</span>
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
                    Symptoms and Warning Signs
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Shafali Nagpal</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 29, 2026
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
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Skin problems and joint pain do not always seem related. Many people with psoriasis develop pain and stiffness in the joints. This could develop months or even years later. These symptoms are often blamed on ageing, overwork, or poor posture.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Psoriatic arthritis is a condition that mainly affects people with psoriasis. It mainly causes joint pain, stiffness and swelling. Some people may develop pain in the heels or sole of the foot, especially while walking or getting out of bed in the morning. Others may notice nail changes such as small pits or discolouration. Skin rashes caused by psoriasis are also common. Many people are diagnosed late because the connection between the skin and joints are not recognised early. This article explains the common symptoms of psoriatic arthritis, early warning signs to watch for, and symptoms in different age groups.
                  </p>
                </div>

                {/* ── COMMON SYMPTOMS ── */}
                <div id="common-symptoms" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Common Symptoms of Psoriatic Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Psoriatic arthritis can affect different parts of the body, such as skin, joints, tendons, nails, eyes, and spine. Symptoms may come and go. They may improve for a few days or weeks before returning again.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Skin Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Psoriatic arthritis often develops in people with psoriasis. It usually appears as red, raised, scaly patches on the scalp, elbows, knees, and lower back. These patches may itch and are often mistaken for eczema or a fungal skin condition, which delays the correct diagnosis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Pain, swelling, and stiffness can affect the fingers, toes, wrists, knees, ankles, and spine. Some people may also develop pain in the lower back and neck. Stiffness in the morning that lasts for more than 30 minutes is common in psoriatic arthritis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Nail Changes
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Nail changes affect up to 80% of people with psoriatic arthritis. They often develop years or months before joint symptoms. These changes may appear as small dents, yellow or white discolouration, thickening under the nail, and separation of the nail from the nail bed (called onycholysis). These symptoms are often mistaken for a fungal nail infection, leading to repeated antifungal treatments that provide no relief.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Dactylitis and Enthesitis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In psoriatic arthritis, an entire finger or toe becomes swollen instead of just one joint. This condition is called Dactylitis. It gives the finger or toe a sausage-like appearance.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Pain at the back of the heel or the bottom of the foot is another common symptom of psoriatic arthritis. This is called Enthesitis and it occurs where tendons attach to the bone. It is often mistaken for overuse or a simple foot problem.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Eye Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Eye symptoms are less common but should not be ignored. Redness, pain, blurred vision and sensitivity to light may indicate disease progression inside the eye. If these symptoms develop, they need immediate medical attention.
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
                    Early Warning Signs of Psoriatic Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In the early stages of psoriatic arthritis, symptoms are often mild and easy to ignore. The following signs should not be ignored, especially if they occur along with psoriasis.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
                    {earlyWarningSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── PROGRESSION ── */}
                <div id="progression" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Symptoms Progress Over Time
                  </h2>

                  <div className="flex flex-col items-center text-center mb-8">
                    {progressionFlow.map((step, i) => (
                      <div key={i}>
                        <p className="text-[17px] leading-[1.7] text-navy-deep" style={{ fontWeight: 600 }}>{step}</p>
                        {i < progressionFlow.length - 1 && (
                          <div className="text-[18px]" style={{ color: "#1AA3B5", margin: "6px 0" }}>↓</div>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis symptoms do not always stay the same. Joint pain, stiffness, and swelling may improve for weeks or even months before returning. Because of this, many people assume the condition has gone away. However, inflammation can remain active inside the joints even when symptoms feel better.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Psoriatic arthritis can affect different people in different ways. Some people develop symptoms in the same joints on both sides of the body, while others may notice pain in only one hand, knee, or foot. In some people, the condition mainly affects the spine, while others develop symptoms in the small joints of the fingers and toes near the nails. Sometimes, a more severe form of psoriatic arthritis develops that can cause significant joint damage if left untreated. Early diagnosis and treatment can help reduce symptoms and protect the joints over time.
                  </p>
                </div>

                {/* ── GROUPS ── */}
                <div id="groups" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Symptoms Differ Across Groups
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Psoriatic arthritis can develop at any age, but the way it appears may not always be the same. People experience symptoms based on their age, gender, and stage of life.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Women
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Women with psoriatic arthritis are more likely to experience symptoms in multiple joints and may develop prominent nail changes. Pain and stiffness may become worse during the menstrual cycle and pregnancy.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Men
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Men are more likely to develop psoriatic arthritis in the spine. It causes back pain and stiffness in the morning. These symptoms often occur along with severe skin and scalp psoriasis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Children
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    In children, psoriatic arthritis may develop in only a few joints in the early stage. Some children develop redness, pain and sensitivity to light due to the progression of disease in the eye. Regular eye check-ups are important because eye symptoms can sometimes appear before skin symptoms.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Older Adults
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In older adults, pain in the fingers, stiffness in the morning, and nail changes may be mistaken for ageing or gout. The history of psoriasis in the person or family can provide an important clue.
                  </p>
                </div>

                {/* ── SEE DOCTOR ── */}
                <div id="see-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should You See a Doctor?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If you have psoriasis and have noticed persistent joint pain, stiffness, swelling, or changes in your nails, it is worth discussing these symptoms with a rheumatologist. Back pain that is worse in the morning, heel pain, or swelling of an entire finger or toe are also important signs that should not be ignored. Waiting for symptoms to improve on their own can delay the diagnosis and treatment. Early diagnosis can help reduce symptoms, protect the joints, and improve long-term outcomes.
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
                  <details className="group" open>
                    <summary className="cursor-pointer inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden" style={{ color: "#0f616e", fontWeight: 700, fontSize: "15px" }}>
                      View Sources
                      <svg className="transition-transform group-open:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                    </summary>
                    <ul className="space-y-2 mt-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                      {references.map((r, i) => (
                        <li key={i} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                          {r.text}
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
                      Consultant Rheumatologist for psoriatic arthritis evaluation and long-term joint care.
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

export default PsoriaticArthritisSymptoms
