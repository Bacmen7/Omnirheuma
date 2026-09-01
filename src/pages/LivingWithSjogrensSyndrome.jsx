import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Living with Sjögren's Syndrome
   ───────────────────────────────────────────── */

const atHomeTips = [
  "Measure your humidity. According to the Sjögren's Foundation, an optimal indoor range is 55% to 60%, regardless of the temperature outside. A humidistat is inexpensive and tells you whether having a humidifier is actually helpful.",
  "Run a humidifier at night. It helps most people, though it can make things worse if you have dust or mould allergies.",
  "Sit away from fans and air conditioning vents. In most Indian cities, the air conditioners run for most of the year, and direct airflow across your face might cause you more problems than people realise.",
  "Take lukewarm showers rather than hot ones. Hot showers strip away the moisture from already dry skin.",
]

const atWorkTips = [
  "Ask for a desk away from air vents. It is the single most useful adjustment and the easiest one to grant.",
  "Keep drops and water on the desk rather than in a bag.",
  "Take screen breaks, since looking at a screen reduces your blinking.",
  "Schedule demanding tasks for your most productive hours wherever possible.",
  "Let your manager know about your condition. Around 57% of people with this condition report that their work has been affected. And it is better to discuss it beforehand.",
]

const travellingTips = [
  "If the aircraft cabin air is extremely dry, use drops far more often than you normally would. Also use a thicker gel before you try to sleep.",
  "Carry more drops than the trip needs. Keep them in your hand luggage for easy access.",
  "Drink water steadily through long road and rail journeys, particularly in heat.",
  "Keep sugar-free gum for situations when water is not easy to reach.",
  "Stick to your usual medicine timings despite the change in routine.",
  "Wear sunglasses to protect from dust and wind.",
  "For longer trips, ask your doctor for a short prescription note listing your medicines.",
]

const coordinatorTips = [
  "Carry 2 copies of your questions, one for you and one for the doctor. That is the Sjögren's Foundation's own suggestion, and it works.",
  "Keep one list of medicines covering everything, including drops and anything bought over the counter.",
  "Tell each specialist what the others have changed since you last saw them.",
  "Note symptoms when they happen rather than trying to recall them in the appointment.",
  "Ask what each test was for and what the result actually means.",
]

const faqs = [
  {
    q: "Does exercise worsen the fatigue?",
    a: "Usually not. Research and patient guidance both indicate that regular exercise reduces fatigue in this condition rather than adding to it. Start with small exercise and build up slowly.",
  },
  {
    q: "What is the best indoor humidity level?",
    a: "The Sjögren's Foundation suggests an indoor range of 55% to 60%, regardless of the outside temperature. A humidistat lets you check whether your humidifier is working.",
  },
  {
    q: "Is there a diet that helps Sjögren's?",
    a: "Around three-quarters of people with the condition have changed how they eat, and general healthy eating is sensible. No specific diet controls Sjögren's, so be cautious about anything promising otherwise.",
  },
  {
    q: "What can I do about dry eyes on a flight?",
    a: "Cabin air is very dry, so use drops more frequently than usual and apply a thicker gel before sleeping. Keep everything in your hand luggage and carry more than you expect.",
  },
  {
    q: "Should I run a humidifier every night?",
    a: "It helps most people and is worth trying. If you have dust or mould allergies, it may make your symptoms worse rather than better, so watch how you respond over the first week.",
  },
]

const references = [
  "Living with Sjögren's Patient Survey 2025. Sjögren's Foundation, administered by The Harris Poll, IRB approved, 6,360 respondents.",
  "Survival Tips. Sjögren's Foundation.",
  "Marvel J, Kenney G, Church J, et al. Spotlight on Sjögren's: a patient perspective on burden of illness and unmet needs. RMD Open, January 2026.",
  "Treatments for Sjögren's Disease. Sjögren's Foundation, 2026.",
  "Carsons SE, Blum MA. Sjögren Disease. StatPearls, updated 6 July 2025.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "fatigue", label: "Fatigue and its Management" },
  { id: "dryness", label: "Management of Dryness" },
  { id: "daily-routine", label: "Your Daily Routine" },
  { id: "daily-basis", label: "Managing Sjögren's Syndrome on a Daily Basis" },
  { id: "explaining", label: "Explaining Sjögren's to Others" },
  { id: "coordinator", label: "Being Your Own Coordinator" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function LivingWithSjogrensSyndrome() {
  const [activeSection, setActiveSection] = useState("fatigue")

  useEffect(() => {
    document.title = "Living with Sjögren's Syndrome | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Living with Sjögren's Syndrome</span>
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
                  Living with <span className="whitespace-nowrap">Sjögren's Syndrome</span>
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
                    Managing{" "}
                    <Link to="/sjogrens-syndrome" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      Sjögren's syndrome
                    </Link>{" "}
                    reshapes your daily life. It means carrying eye drops everywhere you go, adapting your diet, and dealing with a level of exhaustion that friends and family rarely can understand. You are not alone in this experience.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Prescription medicines for Sjögren's help manage eye and mouth symptoms, but they often don't address other daily challenges. For example, the deep exhaustion you might feel by late afternoon, and the way office air conditioning dries out your eyes before lunch. Or the frustration of trying to explain your condition to others who don't fully understand.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This article covers this gap you experience while living with Sjögren's syndrome. In one large survey, people with Sjögren's syndrome were using an average of 7 treatments. Yet 83% relied on exercise to manage their symptoms, and 75% had changed how they eat. The measures that actually help are not written on your prescription.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Here, you'll learn practical ways to handle tiredness, manage dryness, and adjust your routine on days when you're not feeling your best.
                  </p>
                </div>

                {/* ── FATIGUE AND ITS MANAGEMENT ── */}
                <div id="fatigue" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Fatigue and its Management
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Fatigue is a major symptom in people living with Sjögren's, and it is the single most disruptive symptom, ahead of dryness and joint pain. It is also the one that can't be cured with medications. Managing your energy is key. Think of it as a limited daily budget that you can't overspend, and save your most important tasks for the times of day when you usually feel your best.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The Sjögren's Foundation states that exercise reduces fatigue, and suggests yoga in particular. Start with small, gentle exercises.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sleep is worth protecting properly. Cutting caffeine and alcohol helps both sleep and brain fog, and a cool humidified bedroom with a consistent bedtime helps you get a sound sleep. Many people notice a rough patch coming a day or two early. It's much better to rest then than to push yourself and need extra days to recover later.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    None of these options will eliminate fatigue. But they will make it more predictable, which is important when you are planning a week.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── MANAGEMENT OF DRYNESS ── */}
                <div id="dryness" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Management of Dryness
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Sjögren's syndrome presents with different symptoms in different situations, and each setting has its solutions.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Home
                  </h3>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {atHomeTips.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Work
                  </h3>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {atWorkTips.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Travelling
                  </h3>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {travellingTips.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── YOUR DAILY ROUTINE ── */}
                <div id="daily-routine" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Your Daily Routine
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Use eye drops as prescribed by your doctor rather than waiting until your eyes feel uncomfortable. Using them at the given time and schedule works better than as a rescue.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    For your mouth, sip water intermittently rather than drinking large amounts at a time. Sugar-free gum between meals increases your saliva production. Avoid alcohol-based mouthwashes, which increase dryness.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Meals also need adjustments. Keep water alongside when having dry food items. Saliva normally neutralises stomach acid, which is why acid backflow into your mouth is common when it is secreted less. Therefore, smaller meals and staying upright for a while afterwards both help.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A saline spray overnight helps if your nose dries out. For skin, use an emollient rather than soap and moisturise while your skin is still damp. Vaginal dryness is common with this condition, and is entirely treatable. It is crucial to mention these symptoms to your doctor rather than suffering in silence.
                  </p>
                  <Link to="/sjogrens-syndrome-treatment" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", fontSize: "15px" }}>
                    Read more about treatment options
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* ── MANAGING ON A DAILY BASIS ── */}
                <div id="daily-basis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Sjögren's Syndrome on a Daily Basis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sjögren's is mostly a constant condition rather than one that comes and goes. This is different from most rheumatology conditions. Some days are considerably harder than others, and they need to be managed differently. It might feel like too much effort when you are exhausted, but try to use your eye drops more frequently on these days.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Use heat to soothe stiff joints and tight muscles, but use a cold pack if you notice any visible swelling. It is also better to clear your schedule and rest rather than forcing yourself to keep going, as the extra days needed to recover from overexertion are rarely worth it.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You are also allowed to decline things without explaining or apologising. If bad days are becoming more frequent, or your usual approach has stopped working, you should consult with your rheumatologist at the earliest.
                  </p>
                  <Link to="/sjogrens-beyond-dryness" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", fontSize: "15px" }}>
                    Read more about how Sjögren's affects the rest of the body
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* ── EXPLAINING SJOGREN'S TO OTHERS ── */}
                <div id="explaining" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Explaining Sjögren's to Others
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is the part nobody prepares you for, and it has nothing to do with your body. Sjögren's is invisible, and the name means nothing to most people. Dry eyes sound trivial, and explaining the condition every time is exhausting.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The burden is heavy because the condition is invisible to others, diagnosis can take years, and the{" "}
                    <Link to="/sjogrens-syndrome-symptoms" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      main symptoms
                    </Link>{" "}
                    often get dismissed as just "being tired." Acknowledging this struggle rather than trying to push through it makes a real difference. If you find your mental health or mood is suffering, please share this with your doctor; it is a valid and important part of your care.
                  </p>
                </div>

                {/* ── BEING YOUR OWN COORDINATOR ── */}
                <div id="coordinator" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Being Your Own Coordinator
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    People with Sjögren's see an average of 5 different doctors or specialists a year, and 36% say their main doctor does not coordinate with the others. In practice, that means you are the only person who knows your condition well.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Cost is also a significant constituent of this condition. Around 73% of people report that living with this condition adds a financial burden, mostly through dental care and the products you use every day. Prices vary considerably between cities and pharmacies, so comparing is worth the effort.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                    A few things make the coordinating role easier:
                  </p>
                  <ul className="space-y-2.5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {coordinatorTips.map((item, idx) => (
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

export default LivingWithSjogrensSyndrome
