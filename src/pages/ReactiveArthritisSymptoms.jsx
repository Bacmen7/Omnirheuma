import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Reactive Arthritis Symptoms and Warning Signs
   ───────────────────────────────────────────── */

const urgentWarningSigns = [
  "A joint is hot, severely swollen, and intensely painful accompanied by a fever (indicates potential joint infection/septic arthritis).",
  "Severe eye pain, intense sensitivity to light (photophobia), or sudden blurred vision.",
  "Joint inflammation that persists for multiple weeks without resolving.",
  "Symptoms expanding to involve additional joints.",
  "Issues recurring following a period of improvement, or discomfort remaining constant without fully resolving.",
]

const faqs = [
  {
    q: "How long after an infection do symptoms of reactive arthritis start?",
    a: "It usually takes 1-6 weeks. The infection has often cleared completely by then, which is why the two rarely get connected unless someone asks the right question.",
  },
  {
    q: "Can symptoms start anywhere other than the joints?",
    a: "Yes. The reddening of the eye, mouth ulcers, skin changes, or urinary symptoms can all come first. Some people are also treated for those before anyone considers reactive arthritis.",
  },
  {
    q: "My knee is swollen but not very painful. Should I worry?",
    a: "Get it checked. In reactive arthritis, the swelling matters more than the pain, and a fairly comfortable knee can still be significantly inflamed.",
  },
  {
    q: "Can it affect my eyes permanently?",
    a: "Most eye involvement is mild, and it settles over time. The more serious form can affect the vision if left untreated, which is why any eye symptoms require prompt check-up.",
  },
  {
    q: "Why do I have urinary symptoms when my trigger was food poisoning?",
    a: "Because urinary inflammation can be part of reactive arthritis rather than part of the original infection. It happens after gut infections as well as after sexually transmitted ones.",
  },
]

const references = [
  "Jogu P, Swamy V, Maher L. Reactive Arthritis. StatPearls, updated 15 May 2026.",
  "Reactive Arthritis. National Institute of Arthritis and Musculoskeletal and Skin Diseases, National Institutes of Health, 2025.",
  "Reactive Arthritis. Merck Manual Professional Edition, 2026.",
  "Reactive Arthritis (Reiter's Syndrome). Cleveland Clinic, 2025.",
  "Giraudo C, Astorri D, Reijnierse M. Reactive arthritis: a comprehensive journey through diagnostic findings. Skeletal Radiology, November 2025.",
  "Cammarata MJ. Reactive Arthritis: Chronic or Self-Limiting? The Rheumatologist, American College of Rheumatology, June 2025.",
  "Sidhwa K. Syndromic Approach: Reactive Arthritis. Private Practice Infectious Disease, 2024.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "when-starts", label: "When Symptoms Usually Start" },
  { id: "before-joints", label: "1. Symptoms That Can Start Before the Joints" },
  { id: "heel-tendon-pain", label: "2. Heel Pain and Tendon Pain" },
  { id: "eye-symptoms", label: "3. Eye Symptoms" },
  { id: "mouth-skin-nail", label: "4. Mouth, Skin and Nail Changes" },
  { id: "urinary-symptoms", label: "5. Urinary Symptoms" },
  { id: "back-pain", label: "6. Back Pain" },
  { id: "classic-three", label: "The Classic Three Symptoms" },
  { id: "warning-signs", label: "Warning Signs That Need Urgent Attention" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function ReactiveArthritisSymptoms() {
  const [activeSection, setActiveSection] = useState("when-starts")

  useEffect(() => {
    document.title = "Reactive Arthritis: Symptoms and Warning Signs | Omni Rheuma"
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
              <Link to="/health-guide" className="hover:underline text-white/80">Health Guide</Link>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>
                Reactive Arthritis Symptoms and Warning Signs
              </span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                <h1
                  className="reactive-arthritis-symptoms-title"
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
                  <span className="whitespace-nowrap">Reactive Arthritis:</span>{" "}
                  <span
                    style={{
                      display: "inline",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    Symptoms and Warning Signs
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: August 2026
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
                    Reactive arthritis has a typical way of showing up in your body. Your knee swells first. Then your heel starts hurting when you stand. A week later, your eyes feel gritty and red, and you blame dust or a bad night's sleep. Each symptom seems minor, and none of them seem connected.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Although it targets the joints, reactive arthritis also impacts the eyes, skin, mouth, and urinary tract. These symptoms rarely develop simultaneously and do not always begin in the joints. This article outlines the timeline of symptom onset, typical joint involvement patterns, manifestations elsewhere in the body, and critical warning signs that require same-day medical attention.
                  </p>
                </div>

                {/* ── 1. WHEN SYMPTOMS USUALLY START ── */}
                <div id="when-starts" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Symptoms Usually Start
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Symptoms typically begin 1-6 weeks after the infection. This infection might be a recent gut infection or a urinary tract infection. These symptoms tend to appear quite quickly. They typically manifest over the course of a few days.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people feel generally unwell first, tired and feverish. Some can still have diarrhoea or stomach pain from the original infection. Joints such as the knees and ankles are the most frequently affected, often becoming swollen, painful, and stiff.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Here is what makes this so easy to miss. By the time your joints swell, the infection that caused it usually would have cleared completely. There is nothing obvious left to connect the two. However, focusing only on the joints can be misleading. Reactive arthritis can also manifest in other areas before joint pain even begins.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── 2. SYMPTOMS THAT CAN START BEFORE THE JOINTS ── */}
                <div id="before-joints" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    1. Symptoms That Can Start Before the Joints
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is surprising for most people. Eye redness, mouth ulcers, skin changes, or urinary symptoms can all appear before any joint becomes painful. They can also arrive at the same time as the joint symptoms, or weeks afterwards.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    It means some people visit an eye doctor or a skin specialist first, and nobody connects the dots until later. So mention any infection you had in the last month or so during your consultations with doctors. It may be the detail that explains everything.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    How the Joints Are Affected
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The pattern is fairly distinctive. A few joints are affected, usually on either side of the body. Almost always, the lower half of the body is affected at the start, with knees and ankles affected most often, followed by the feet and toes.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Affected joints swell, feel warm to touch, and lose some of their movement. Morning stiffness is common. Pain often gets worse at night.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Sometimes a whole finger or toe swells instead of just a joint, and it looks like a small sausage. This is less common than the other joint symptoms. But when it appears, it points strongly towards this group of conditions. It is crucial to visit a doctor rather than waiting to see if it settles.
                  </p>
                </div>

                {/* ── 3. HEEL PAIN AND TENDON PAIN ── */}
                <div id="heel-tendon-pain" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    2. Heel Pain and Tendon Pain
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Reactive arthritis causes swelling and redness in the places where tendons attach to bone. This is one of the features that separates it from ordinary joint problems. The heel is the classic site. Pain sits at the back of the heel where the calf muscle connects to the bone, or underneath it, and it is often worse on the first few steps of the morning.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Foot pain with this condition usually comes from these tendon attachments and not from the joints of the foot. This is important to know, because it explains a symptom people often find puzzling.
                  </p>
                </div>

                {/* ── 4. EYE SYMPTOMS ── */}
                <div id="eye-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    3. Eye Symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Eye inflammation is common in reactive arthritis, and it is mild most of the time. It causes redness, grittiness, burning, or itching. Some people can also wake with crusted eyelids. A more serious form affects the inside of the eye, causing genuine pain, sensitivity to light, and blurred vision.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The advice here is simple. Any eye symptom alongside joint problems should be checked by an eye specialist rather than waited out. Repeated or severe inflammation inside the eye can affect your sight over time. However, when caught early, it can be treated well.
                  </p>
                </div>

                {/* ── 5. MOUTH, SKIN AND NAIL CHANGES ── */}
                <div id="mouth-skin-nail" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    4. Mouth, Skin and Nail Changes
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Small ulcers can appear in your mouth, usually on the tongue or the roof of the mouth. They are typically painless, which is exactly why most people never notice them.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Skin changes are less common. Reddish raised bumps can appear, usually on the palms or the soles. They sometimes merge into a larger scaly patch. Nails can thicken as well.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Ulcers in the Genital Area
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Small, shallow, painless ulcers can appear on the genitals, most often in men. They sometimes show up before the joint symptoms. As they cause less pain, they are frequently missed and rarely mentioned. If you notice them, let your doctor know. They will help confirm the diagnosis of your symptoms.
                  </p>
                </div>

                {/* ── 6. URINARY SYMPTOMS ── */}
                <div id="urinary-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    5. Urinary Symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This includes a burning sensation when you pass urine, needing to urinate frequently, or discharge. This happens in people whose trigger was a gut infection too. So it is not proof that the original infection was sexually transmitted. And it does not always mean you have a urine infection now.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In women, the inflammation can extend further into the reproductive organs. That is a reason to have it assessed accurately instead of treating it as a simple urine infection.
                  </p>
                </div>

                {/* ── 7. BACK PAIN ── */}
                <div id="back-pain" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    6. Back Pain
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Lower back pain and pain in the buttocks are common. It originates from the joints where the spine meets the pelvis (the set of bones at the base of your spine). It tends to be inflammatory in character, and therefore behaves differently from ordinary back pain. It worsens after rest, gets better on movement, and usually comes with stiffness in the morning.
                  </p>
                </div>

                {/* ── 8. THE CLASSIC THREE SYMPTOMS ── */}
                <div id="classic-three" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Classic Three Symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You may read that reactive arthritis means joint pain, eye inflammation, and urinary symptoms all occurring together. That description is old and is misleading.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Most people never get all three. They appear at different times, and some never appear at all. Also, plenty of people have symptoms that were never part of the original description. Not having the full set of symptoms does not mean you do not have the condition.
                  </p>
                </div>

                {/* ── 9. WARNING SIGNS THAT NEED URGENT ATTENTION ── */}
                <div id="warning-signs" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Warning Signs That Need Urgent Attention
                  </h2>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.75rem" }}>
                    When to Seek Same-Day Medical Care
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Get medical care the same day if a joint is hot, swollen, and painful, and also if you have a fever. That combination can mean infection inside the joint, which is an emergency and needs completely different treatment. Also seek prompt care for eye pain, sensitivity to light, or blurred vision.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You should schedule a medical consultation under any of the following circumstances:
                  </p>

                  <ul className="space-y-2.5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {urgentWarningSigns.map((item, idx) => (
                      <li key={idx} className="text-[16px] leading-[1.7] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

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

                {/* ── 10. REFERENCES ── */}
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
                      Consultant Rheumatologist specializing in inflammatory arthritis, reactive arthritis, and post-infection joint care.
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
      </main>

      <BriefingFooter />
    </div>
  )
}

export default ReactiveArthritisSymptoms
