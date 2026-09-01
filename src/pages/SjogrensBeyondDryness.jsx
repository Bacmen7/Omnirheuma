import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Beyond Dryness: Effects of Sjögren's on the Rest of the Body
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "Will Sjögren's definitely affect my organs eventually?",
    a: "No. Around half of people develop some involvement beyond the glands over time, and much of that is mild. Many people go years with dryness and fatigue alone.",
  },
  {
    q: "How worried should I be about lymphoma?",
    a: "The risk is around 8-9 times higher than in the general population, but the absolute risk stays low. In one study following people for nearly a decade, around 96 in every 100 did not develop it.",
  },
  {
    q: "Why does my doctor always examine my neck?",
    a: "Doctors examine your salivary glands and lymph nodes for any persistent swelling. It takes seconds, and it is one of the more useful things done at a routine appointment.",
  },
  {
    q: "Can other organ involvement be treated?",
    a: "Yes. Treatment depends entirely on which organ is affected, and mostly it responds well when diagnosed early. Regular follow-up is equally necessary.",
  },
  {
    q: "Does more severe dryness mean more risk to my organs?",
    a: "No. Dryness of your eyes and mouth does not predict what other organs are being affected. People with mild dryness can have organ involvement, and people with severe dryness often have none.",
  },
]

const references = [
  "Carsons SE, Blum MA. Sjögren Disease. StatPearls, updated 6 July 2025.",
  "Sjögren Syndrome. Merck Manual Professional Edition, May 2026.",
  "High incidence of lymphoma in Sjögren's disease: predictors and mortality implications in a prospective cohort study. Rheumatology International, August 2025.",
  "A Review of the Current Clinical Aspects of Sjögren's Disease, August 2025.",
  "Predicting the risk for lymphoma development in Sjögren syndrome: an easy tool for clinical use.",
  "Cancer risk in Sjögren's disease: a longitudinal cohort study on incidence, predictors, and mortality impact, 2025.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "how-common", label: "How Common Sjögren's Syndrome is" },
  { id: "effects-on-body", label: "The Effects of Sjögren's on Body Parts" },
  { id: "kidney-involvement", label: "Understanding Kidney Involvement in Sjögren's" },
  { id: "lymphoma", label: "Risk of Lymphoma" },
  { id: "how-monitored", label: "How This Is Monitored" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function SjogrensBeyondDryness() {
  const [activeSection, setActiveSection] = useState("how-common")

  useEffect(() => {
    document.title = "Beyond Dryness: Effects of Sjögren's on the Rest of the Body | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Beyond Dryness</span>
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
                  <span className="whitespace-nowrap">Beyond Dryness:</span>{" "}
                  <span
                    style={{
                      display: "inline",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    Effects of Sjögren's on the Rest of the Body
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
                    While{" "}
                    <Link to="/sjogrens-syndrome" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      Sjögren's syndrome
                    </Link>{" "}
                    is often associated with dry eyes and dry mouth, it is an overreaction of the immune system. It mostly affects the eyes and mouth, causing persistent dryness. Although many people experience only dry eyes and mouth, about half will notice symptoms elsewhere too. In most cases, these are mild and manageable; while some require medical monitoring, only a small number are serious.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This page covers which parts of the body can be affected, the specific signs that need prompt attention, and how your doctor keeps an eye on everything for you. It's best to view this information as a helpful guide of things worth knowing, rather than a list of things likely to happen to you, because for most people, they simply won't.
                  </p>
                </div>

                {/* ── HOW COMMON SJOGREN'S SYNDROME IS ── */}
                <div id="how-common" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Common Sjögren's Syndrome is
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Roughly half of people with Sjögren's syndrome develop some form of involvement beyond the glands over time, and the majority of it is mild. Lung, kidney, and blood involvement all become more common the longer someone has had the condition. It is important to get an early diagnosis and follow up regularly even during the phases when you feel perfectly well.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Most organ involvement is noticed on routine tests before it causes any symptoms at all. That is precisely what those appointments are for, even when they feel like a formality.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── THE EFFECTS OF SJOGREN'S ON BODY PARTS ── */}
                <div id="effects-on-body" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Effects of Sjögren's on Body Parts
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sjögren's is best known for dry eyes and a dry mouth, but it doesn't always stop there. In roughly half of people with the condition, the immune system's activity spreads beyond the tear and salivary glands to affect other parts of the body such as the joints, skin, lungs, kidneys, nerves, and lymphatic system.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is often called <strong>"systemic"</strong> or <strong>"extraglandular"</strong> involvement, and it's a big part of why Sjögren's is treated as a whole-body overreactive immune system disease rather than just a dryness problem.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Here's what that can look like, organ by organ.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joints and Muscles
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Joint pain is common in around half of people with Sjögren's, and about 1 in 5 people develop actual joint inflammation (arthritis). However, this type of arthritis usually does not damage the joints the way rheumatoid arthritis does.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Skin and Circulation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Some people develop skin changes such as rashes and small blood vessel inflammation (vasculitis) that can appear as purple spots or bruising, particularly on the lower legs. Cold hands are another common complaint. Fingers can turn pale and go numb or tingly in response to cold or stress, a phenomenon known as Raynaud's phenomenon. Some people also notice hair thinning.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Lungs
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Persistent dryness can extend to the airways. In some patients, Sjögren's affects the lungs directly. Lung involvement, including a scarring condition called interstitial lung disease, develops in roughly 1 in 5 patients over the course of the disease. This is one of the reasons doctors keep an eye on breathing symptoms like a dry cough or shortness of breath, even when they seem unrelated to the dryness.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Kidneys
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Sjögren's can occasionally affect the kidneys' ability to regulate acid and minerals in the body, a condition called renal tubular acidosis. If left unaddressed, it can lead to low potassium levels, kidney stones, and inflammation within the kidney. Kidney involvement is one reason routine blood and urine tests matter.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Nerves
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Nerve involvement can be subtle and significant. Small blood vessel inflammation can injure larger nerves, causing tingling, numbness, or weakness in the hands and feet. It can also affect the brain and spinal cord, such as inflammation of the optic nerve or spinal cord. Many people also describe a general brain fog, trouble concentrating, or word-finding.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In the following sections, we will discuss the kidney involvement and the potential risk of lymphoma in Sjögren's.
                  </p>
                  <Link to="/sjogrens-syndrome-symptoms" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#E86531", fontSize: "15px" }}>
                    Read more about symptoms and warning signs
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* ── UNDERSTANDING KIDNEY INVOLVEMENT ── */}
                <div id="kidney-involvement" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Understanding Kidney Involvement in Sjögren's
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    One of the functions of the kidneys is removing acid from the blood. In some people with Sjögren's, this mechanism stops working properly, so acid builds up and potassium drops. What you would notice is muscle weakness, sometimes severe enough to make walking difficult, along with tiredness and occasionally kidney stones.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    It can show up before your doctor has linked the dry eyes and dry mouth to anything. Kidney involvement of some kind is reported across a wide range of people with Sjögren's. This specific acid-handling problem affects a much smaller group, roughly 4-9 in every 100. It is treatable, usually with potassium and alkali replacement, and it shows up on a routine blood test.
                  </p>
                </div>

                {/* ── RISK OF LYMPHOMA ── */}
                <div id="lymphoma" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Risk of Lymphoma
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    People with Sjögren's syndrome have roughly 8-9 times the general population's risk of developing lymphoma, a cancer of the lymph system. In a study that followed 314 people with the condition for nearly 10 years, around 3.5% developed it. In other words, roughly 96 in every 100 did not develop lymphoma. While the risk is higher than for the general population, it remains very low for most people. This is exactly why your doctor monitors you so carefully and to stay informed and catch any issues early.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Certain things raise that risk. Persistent swelling of the salivary glands, swollen lymph nodes, Raynaud phenomenon, particular antibodies, and specific blood test results. Most people have none or only one of these.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    It is worth watching for swollen glands that do not subside, swollen lymph nodes lasting more than a few weeks, and unexplained fever, night sweats, or weight loss. This is one of the main reasons your rheumatologist examines your neck and checks your blood counts at appointments that otherwise feel routine.
                  </p>
                </div>

                {/* ── HOW THIS IS MONITORED ── */}
                <div id="how-monitored" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How This Is Monitored
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Knowing what your doctor is actually checking makes routine appointments feels at more ease. Blood tests cover your blood counts, kidney function, inflammation markers and specific proteins, while urine tests look for early signs of kidney involvement. The physical examination includes your neck, jaw and lymph nodes, and if there is any suggestion of lung involvement you may be sent for imaging or breathing tests.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The questions about breathlessness, cough, numbness and tingling come up every single time for the same reason. Most organ involvement gets found this way, before it causes anything you would notice.
                  </p>
                  <Link to="/living-with-sjogrens-syndrome" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#E86531", fontSize: "15px", marginBottom: "1.5rem" }}>
                    Read more about living with Sjögren's syndrome
                    <ArrowRight size={14} />
                  </Link>
                  <div>
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
                        marginTop: "1.5rem",
                      }}
                    >
                      Book a Consultation with Dr Raghavendra H
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
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
                      <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor about any medical concern.
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

export default SjogrensBeyondDryness
