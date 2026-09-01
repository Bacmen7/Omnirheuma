import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Sjögren's Syndrome Treatment Options
   ───────────────────────────────────────────── */

const treatmentObjectives = [
  "Replaces the moisture in your glands with drops, sprays, and tablets.",
  "Protects your eyes and teeth from the damage of years of dryness.",
  "Treats the other body organs involved.",
  "Does not reverse the immune system overreaction.",
]

const dryEyeTreatments = [
  { label: "Artificial tears:", text: "Artificial tears replace missing moisture to lubricate the eye and provide relief from dryness. Ask for preservative-free versions, as preservatives can irritate eyes when used frequently. Consider using thicker gels or ointments for better relief overnight." },
  { label: "Cyclosporine eye drops:", text: "These reduce inflammation rather than simply replacing the moisture. A placebo-controlled trial found improvement in tear production and surface damage. They take several weeks to show benefits." },
  { label: "Newer treatment options:", text: "A nasal spray and a newer eye drop both stimulate the nerves that trigger tear production. This way, your eye produces more tears rather than relying solely on eye drops." },
  { label: "A slow-release insert:", text: "It is placed under the lower eyelid once a day. It dissolves gradually to keep the eye lubricated." },
  { label: "Steroid eye drops:", text: "Used only for short periods. Longer use raises the risk of glaucoma, raised pressure inside the eye, and infection." },
]

const beyondGlandsMedicines = [
  { label: "Hydroxychloroquine:", text: "This medicine is most commonly used. Many people find it helps their joint pain and rashes. But a randomised trial found no significant difference from placebo on its main measure, which combined dryness, fatigue and pain, and guidelines note the evidence for this class of drug is limited overall." },
  { label: "Methotrexate:", text: "It is an immune-suppressing medicine used when there is more significant organ involvement." },
  { label: "Corticosteroids:", text: "Used for active inflammation affecting a specific organ, usually for definite periods." },
]

const maximizingTips = [
  "Wait for the saliva tablets to work. Weeks to months of consistent use, not days. Stopping early is the commonest reason people conclude they do not work.",
  "Ask for preservative-free eye drops if you use them several times a day. It matters more than the brand.",
  "Visit your eye doctor regularly, particularly if you are on hydroxychloroquine. 2 or 3 checks a year is standard advice.",
  "See your dentist more often than the usual schedule. Preventing decay is far easier than treating it.",
  "Tell each specialist what the others have prescribed. Your care is spread across rheumatology, ophthalmology and dentistry, and nobody is aware of all symptoms unless you mention them.",
  "Report side effects rather than stopping medicines yourself. Most are manageable with an adjustment.",
  "Costs vary considerably across pharmacies, cities and hospitals. So ask about generic versions and compare before settling into a long-term prescription.",
]

const faqs = [
  {
    q: "Is there a cure for Sjögren's syndrome?",
    a: "No. Treatment usually manages the symptoms and protects your eyes and teeth from long-term damage. Most people control their symptoms well enough to live well.",
  },
  {
    q: "How long do saliva tablets take to start working?",
    a: "It takes weeks to months of consistent use. This is the most common reason people give up on them too early, so it is worth knowing before you start.",
  },
  {
    q: "Is hydroxychloroquine worth taking even if the evidence is weak?",
    a: "That is a conversation you should have with your doctor rather than making a decision by yourself. Many people find it helps their joint pain and rashes even though trial evidence for dryness and fatigue is limited.",
  },
  {
    q: "Do I need to take lifelong medicine for Sjögren's syndrome?",
    a: "Usually some form of ongoing treatment is required, since the condition is long-term. What it consists of varies enormously. And for many people it is eye drops and dental care rather than tablets.",
  },
  {
    q: "Will treatment stop my symptoms completely?",
    a: "It would not stop the symptoms, but good treatment makes a substantial difference. The aim is comfortable daily function and protection from damage, rather than a return to how things were before.",
  },
]

const references = [
  "Treatments for Sjögren's Disease. Sjögren's Foundation, 2026.",
  "Carsons SE, Blum MA. Sjögren Disease. StatPearls, updated 6 July 2025.",
  "Efficacy and safety of topical and systemic medications: a systematic literature review informing the EULAR recommendations for the management of Sjögren's syndrome.",
  "Treatment of Primary Sjögren's Syndrome Reviewed, pooled placebo-controlled trial data for pilocarpine and cevimeline.",
  "Sjögren's Disease. Arthritis Foundation, October 2025.",
  "Novartis. Both ianalumab Phase III clinical trials met primary endpoint in patients with Sjögren's disease, August 2025.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "treatment-objectives", label: "Treatment Objectives for Sjögren's Syndrome" },
  { id: "treating-dry-eyes", label: "Treating Dry Eyes" },
  { id: "treating-dry-mouth", label: "Treating Dry Mouth" },
  { id: "beyond-the-glands", label: "Treating Symptoms Beyond the Glands" },
  { id: "maximizing-benefits", label: "Maximizing Your Treatment Benefits" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function SjogrensSyndromeTreatment() {
  const [activeSection, setActiveSection] = useState("treatment-objectives")

  useEffect(() => {
    document.title = "Sjögren's Syndrome: Treatment Options and What to Expect | Omni Rheuma"
    return () => {
      document.title = "Omni Rheuma | Professional Rheumatology Resource"
    }
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
              <Link to="/" className="hover:underline text-white/80">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/sjogrens-syndrome" className="hover:underline text-white/80">Sjögren's Syndrome</Link>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Treatment Options</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
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
                  <span className="whitespace-nowrap">Sjögren's Syndrome:</span>
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
                    Treatment Options: What to Expect
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: September 2026
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
                    Hearing that treatment for Sjögren's syndrome "depends on{" "}
                    <Link to="/sjogrens-syndrome-symptoms" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      your symptoms
                    </Link>" can easily feel like a way of saying there isn't much doctors can actually do. This underestimates the treatment of the condition. While there is no cure, modern therapies are remarkably effective at targeting specific symptoms, preventing complications, and protecting your long-term health. Most people manage the condition well and live comfortably without ever needing high dose medications. The therapeutic options have expanded significantly in recent years.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This guide is designed to help you navigate your care with confidence. We explore current treatments and approaches for managing persistent dry eyes and dry mouth. It also covers how to address systemic symptoms if the condition extends beyond your glands. In this article, we will discover practical strategies to maximize the benefits of your medications and take control of your daily well-being.
                  </p>
                </div>

                {/* ── TREATMENT OBJECTIVES ── */}
                <div id="treatment-objectives" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treatment Objectives for Sjögren's Syndrome
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no cure for{" "}
                    <Link to="/sjogrens-syndrome" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      Sjögren's syndrome
                    </Link>, and no yet approved medicine treats the underlying condition. Instead, treatment does the following:
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {treatmentObjectives.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most people need the first 2 treatment options. The 3rd option is rarely needed. The medicines discussed later in this page are not part of everybody's treatment.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The following section discusses the treatment of dry eyes, dry mouth, and conditions beyond the glands in the sections below.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── TREATING DRY EYES ── */}
                <div id="treating-dry-eyes" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treating Dry Eyes
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Treatment progresses in steps, and many people never move past the first one.
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {dryEyeTreatments.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.label}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These medications should be prescribed by an eye specialist, and regular follow-up matters whichever treatment you end up on.
                  </p>
                </div>

                {/* ── TREATING DRY MOUTH ── */}
                <div id="treating-dry-mouth" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treating Dry Mouth
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    It is possible to manage dry mouth yourself, although medications may need a prescription.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Everyday measures include sipping water throughout the day, using sugar-free gum to encourage saliva flow, using saliva substitutes, and avoiding substances that can worsen dry mouth.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Saliva-stimulating tablets, such as <strong>pilocarpine and cevimeline</strong>, stimulate your glands to produce more saliva. In placebo-controlled trials, roughly two-thirds of people taking them reported improvement in dry mouth, and they also helped with dry eyes.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When considering these tablets, be aware that they need weeks to months of consistent use before improvement shows. Many people stop before any improvement is visible. Side effects are real too, most commonly increased sweating and needing to pass urine more often.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Dental protection is also key, requiring more frequent check-ups than usual, fluoride treatments, and an understanding that decay here is a consequence of the condition.
                  </p>
                </div>

                {/* ── TREATING SYMPTOMS BEYOND THE GLANDS ── */}
                <div id="beyond-the-glands" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treating Symptoms Beyond the Glands
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sometimes Sjögren's syndrome affects organs beyond the glands, such as the lungs, kidneys, or blood vessels. This section applies to those instances, which affect a smaller group of people with the condition.
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {beyondGlandsMedicines.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.label}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The choice of treatment depends on which parts of your body are affected and how serious the symptoms are. If you take hydroxychloroquine, you will need to have your eyes checked by an eye specialist two or three times a year, as it can affect your vision over time.
                  </p>
                </div>

                {/* ── MAXIMIZING YOUR TREATMENT BENEFITS ── */}
                <div id="maximizing-benefits" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Maximizing Your Treatment Benefits
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A few things that make a real difference but are easy to miss.
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {maximizingTips.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Ask your doctor or your nearest hospital for an estimate before booking. They will know what applies locally and whether anything can be done more affordably.
                  </p>

                  <Link
                    to="/book-appointment"
                    className="group"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "#E86531",
                      color: "#ffffff",
                      fontFamily: "var(--font-base)",
                      fontWeight: 700,
                      fontSize: "14px",
                      padding: "12px 18px 12px 26px",
                      borderRadius: "9999px",
                      textDecoration: "none",
                      marginTop: "1rem",
                    }}
                  >
                    Book a Consultation with Dr Raghavendra H
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

                {/* ── REFERENCES ── */}
                <div id="references" data-toc-section style={{ marginTop: "0" }}>
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
                      {references.map((ref, idx) => (
                        <li key={idx} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </details>

                  <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                    <p className="text-[13px] leading-[1.6] text-navy-muted italic">
                      <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Never start, stop, or change a prescribed medicine without speaking to a qualified doctor.
                    </p>
                  </div>
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
                            <span style={{ fontSize: "15px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.45 }}>
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
                      Consultant Rheumatologist specializing in autoimmune conditions, including Sjögren's syndrome and long-term care.
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
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      <p>{faq.a}</p>
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

export default SjogrensSyndromeTreatment
