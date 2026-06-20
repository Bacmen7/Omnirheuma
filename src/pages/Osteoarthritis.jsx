import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import OsteoarthritisHero from "../components/OsteoarthritisHero"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "what-it-feels-like", label: "What OA feels like" },
  { id: "causes", label: "What causes OA" },
  { id: "risk-factors", label: "Risk factors" },
  { id: "early-symptoms", label: "Early symptoms" },
  { id: "progression", label: "As disease progresses" },
  { id: "differential", label: "When it's not OA" },
  { id: "when-to-see", label: "When to see a doctor" },
  { id: "faq", label: "FAQs" },
]

const irreversibleFactors = [
  {
    title: "Age",
    desc: "As we grow older, the body's ability to repair cartilage naturally slows down. This is why osteoarthritis becomes more common after the age of 45.",
  },
  {
    title: "Sex",
    desc: "Women are more likely to develop osteoarthritis, especially after menopause, when hormonal changes can affect joint health.",
  },
  {
    title: "Genetics",
    desc: "If osteoarthritis runs in your family, your chances of developing it may be higher.",
  },
]

const reversibleFactors = [
  "In obese people, excess body weight can place unequal stress on the knees and hips. With every extra kilogram, more stress is added to the joints as they walk.",
  "Even if older injuries seemed to heal, there is an increased chance of cartilage breakdown later in life.",
  "Physically demanding jobs or those that involve prolonged kneeling, lifting, or squatting.",
  "A sedentary lifestyle with a lack of movement often makes muscles weak and tired. It offers less support and stability around a joint.",
]

const indiaFactors = [
  {
    title: "Vitamin D deficiency",
    desc: "Low levels of Vitamin D are common across Indians. Vitamin D plays a key role in maintaining bone strength and cartilage health. A brisk walk under bright sunlight or Vitamin D supplements (if advised by a doctor) can help manage the deficiency.",
  },
  {
    title: "Floor sitting and squatting",
    desc: "Sitting on the floor for meals and prayers, or using a squat lavatory, are often daily activities that demand deep knee bending. This places continuous stress on the joints.",
  },
  {
    title: "Repeated bending",
    desc: "Repeated bending over the years places consistent high stress on the knee joint. This becomes more alarming when the muscles supporting the knee are not strong enough to tolerate the load.",
  },
]

const earlySymptoms = [
  {
    id: "stiffness",
    title: "Joint Stiffness",
    desc: "You may notice a stiff, sluggish feeling in your joints when you wake up or after sitting still for a long time. The good news is, this stiffness usually eases within 30 minutes of moving. That 30-minute threshold is actually helpful. If your stiffness lasts longer than an hour, it's more likely to be rheumatoid arthritis rather than osteoarthritis, and that needs a doctor's visit.",
  },
  {
    id: "dull-ache",
    title: "A Dull Ache",
    desc: "In early osteoarthritis, pain appears while walking, holding something tight, or climbing stairs. It typically settles down with rest. Though the pain is inconsistent in the early stages of osteoarthritis, it's still worth noticing and discussing if it keeps coming back.",
  },
  {
    id: "crepitus",
    title: "Creaking or Grinding Sensation",
    desc: "Some notice a faint crackling when they move the affected joint. This is called crepitus. It happens when rough, worn-down cartilage rubs against each other. Crepitus, along with pain and stiffness, are signs that deserve medical review.",
  },
]

const progressionStages = [
  {
    stage: "Mild",
    pain: "Occasional, activity-related",
    stiffness: "Brief morning stiffness (< 30 min)",
    function: "Mostly normal",
  },
  {
    stage: "Moderate",
    pain: "Frequent, during and after activity",
    stiffness: "Stiffness after rest, consistent",
    function: "Limited stairs, prolonged walking",
  },
  {
    stage: "Severe",
    pain: "Constant, including at rest or night",
    stiffness: "Marked stiffness, reduced range",
    function: "Significant disability, limping",
  },
]

const jointSymptoms = [
  {
    joint: "Knee",
    symptoms: "Pain going up or down stairs, unstable walking, swelling around the kneecap",
  },
  {
    joint: "Hip",
    symptoms: "Groin or thigh pain, difficulty putting on shoes or socks, reduced movement",
  },
  {
    joint: "Hands & Fingers",
    symptoms: "Bony lumps at the joints (Heberden's nodes), weakened grip strength, difficulty opening jars",
  },
  {
    joint: "Spine",
    symptoms: "Stiffness and aching in the lower back or neck, occasionally radiating discomfort down the arms or legs",
  },
]

const differentialTable = [
  {
    condition: "Rheumatoid Arthritis",
    difference:
      "Stiffness lasts longer and affects both sides of the body at once. Often accompanied by fatigue and a general feeling of being unwell.",
  },
  {
    condition: "Gout",
    difference:
      "Sudden, severe pain, often in the big toe. Associated with high uric acid and pain can appear overnight with no warning signs.",
  },
  {
    condition: "Post-Chikungunya Arthritis",
    difference:
      "Joint pain that follows a chikungunya fever can persist for months. This is often mistaken for early osteoarthritis in Indian patients.",
  },
]

const whenToSeeDoctor = [
  "Joint pain lasting more than a few weeks",
  "Stiffness limiting your ability to perform daily tasks",
  "Swelling that doesn't settle even after a day or two of rest",
  "Pain that is gradually getting worse without a clear reason",
]

const faqs = [
  {
    q: "Can osteoarthritis affect people under 40?",
    a: "Yes, it can — but not very commonly. Osteoarthritis is often linked to ageing, but younger people may develop it after a joint injury, due to joint structure issues, or from jobs that put repeated stress on their joints. So it is not only an older person's condition.",
  },
  {
    q: "Why does joint pain feel worse in cold or rainy weather?",
    a: "Many people notice their joint pain gets worse when the weather turns cold or rainy, and this is a real experience. One possible reason is that changes in air pressure may slightly affect the tissues around the joints, making them more sensitive. Even though research is still ongoing, what you feel is valid.",
  },
  {
    q: "Does osteoarthritis always get worse over time?",
    a: "Not necessarily. Osteoarthritis is a long-term condition, but it does not always progress quickly. With the right care, regular movement, and healthy lifestyle choices, many people manage their symptoms well and stay active for years.",
  },
  {
    q: "How is osteoarthritis different from rheumatoid arthritis?",
    a: "Osteoarthritis happens due to the gradual wear and tear of the joints, while rheumatoid arthritis is caused by the immune system attacking the joints. Rheumatoid arthritis often affects both sides of the body, causes longer morning stiffness, and may also bring fatigue. Understanding the difference helps in choosing the right treatment.",
  },
  {
    q: "Can squatting or sitting on the floor worsen knee osteoarthritis?",
    a: "Spending long periods in deep knee positions like squatting or sitting on the floor can put extra strain on the joints, especially if the muscles around them are weak. That said, it does not mean you have to avoid these positions completely — you just have to balance them with good posture and muscle strengthening.",
  },
  {
    q: "Is post-chikungunya joint pain the same as osteoarthritis?",
    a: "No, they are not the same. Chikungunya can lead to lingering joint pain after the infection, which may feel similar to osteoarthritis but has a different cause. A rheumatologist can help tell the difference and guide proper treatment.",
  },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function Osteoarthritis() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    document.title = "Osteoarthritis — Symptoms & Causes | Omni Rheuma"
    return () => { document.title = "Omni Rheuma | Professional Rheumatology Resource" }
  }, [])

  /* Scroll-spy for TOC highlight */
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
        .guide-article-content > [data-toc-section] {
          margin-bottom: 0 !important;
        }

        .guide-article-content > [data-toc-section] ~ [data-toc-section] {
          margin-top: 3.5rem !important;
          padding-top: 0 !important;
          border-top: 0 !important;
        }

        .guide-article-content > [data-toc-section] > h2 {
          margin-bottom: 2.25rem !important;
        }

        .guide-article-content > .guide-cta {
          margin-top: 2rem !important;
          margin-bottom: 0 !important;
        }

        .guide-article-content > .guide-cta + [data-toc-section] {
          margin-top: 3.5rem !important;
        }

        .guide-article-content > [data-toc-section] > h1 {
          color: #0f616e !important;
        }

        .guide-article-content > [data-toc-section] h3 {
          color: #0f616e !important;
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

        .guide-toc,
        .guide-toc button {
          border-radius: 0 !important;
        }
      `}</style>
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="relative w-full px-5 sm:px-6" style={{ minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "3rem", paddingBottom: "2rem" }}>

            {/* Breadcrumb — absolute top */}
            {/* <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium leading-snug sm:text-[14px]"
              style={{ color: "rgba(255,255,255,0.68)", position: "absolute", top: "1.5rem", left: "1.25rem" }}
              aria-label="Breadcrumb"
            >
              <span className="whitespace-nowrap">Home</span>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap">Diseases &amp; Conditions</span>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Osteoarthritis</span>
            </div> */}

            {/* Title — bottom left */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                lineHeight: "1.15",
                letterSpacing: "-0.5px",
                color: "#ffffff",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              <span style={{ display: "block", fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}>Osteoarthritis: Symptoms and Causes</span>
              <span style={{ display: "block", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "rgba(255,255,255,0.85)", marginTop: "0.6rem", fontWeight: 400 }}>What Your Joints Are Trying to Tell You</span>
            </h1>

            {/* Image — absolute right, full height */}
            {/* <div className="hidden md:block" style={{ position: "absolute", top: 0, bottom: 0, right: "24px", width: "420px", overflow: "hidden" }}>
              <img
                src="/OA.webp"
                alt="Osteoarthritis knee illustration"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", display: "block" }}
              />
            </div> */}

          </div>

        </header>

        {/* ═══════════ ARTICLE BODY + CTA SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-1 md:pt-4 md:pb-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0 guide-article-content" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section>
                  {/* <h1
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.4px", paddingBottom: "1rem", marginBottom: "1.5rem", borderBottom: "2px solid #dadfe8" }}
                  >
                    Osteoarthritis, Symptoms and Causes: What Your Joints Are Trying to Tell You
                  </h1> */}

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginTop: "0.5rem", marginBottom: "0.85rem" }}>
                    Deepa, a 45-year-old mom of two, leads a busy city life. Her mild joint discomfort gradually worsened. She was exhausted — tired of following health hacks, hitting the gym, and people's never-ending advice.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "0.85rem" }}>
                    One evening, as she sat down with her coffee, her knees made a noticeable creaking sound. She paused and wondered: <em>What is my body trying to tell me? Am I the only one going through this? Why are my joints getting stiff?</em>
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Reasons for pain may vary. From a mild strain and sprain to long-term conditions like Gout, Rheumatoid arthritis and Osteoarthritis.
                  </p>

                  {/* "What makes OA tricky" callout box */}
                  <div
                    style={{ borderLeft: "4px solid #1AA3B5", backgroundColor: "#E0F3F5", padding: "20px 24px", borderRadius: "0 4px 4px 0", marginBottom: "1.25rem" }}
                  >
                    <p className="text-[15px] font-bold text-navy-deep" style={{ marginBottom: "6px" }}>What makes osteoarthritis tricky?</p>
                    <p className="text-[15px] leading-[1.75] text-navy-deep">
                      Osteoarthritis does not begin with an obvious warning sign. It begins quietly. A stiff knee after sitting through a long meeting. A dull ache in the fingers after cooking. A grinding sensation after climbing the stairs that wasn't there a year ago. When life becomes busy, it is easy to ignore these signs. Often, a bit of joint discomfort feels like it comes with the territory of getting older.
                    </p>
                  </div>

                  <p className="text-[16px] leading-[1.8] text-navy-muted mb-6">
                    But these are signals worth paying attention to. Understanding what osteoarthritis feels like, what causes it, and which risk factors are most relevant in the Indian context can make a real difference in catching it early. This article walks you through all of that, including how to tell Osteoarthritis apart from other similar conditions.
                  </p>
                </div>

                <ReviewedConsultationCta />

                {/* ── WHAT IT FEELS LIKE ── */}
                <div id="what-it-feels-like" data-toc-section style={{ paddingTop: "0", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Does Osteoarthritis Actually Feel Like?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    Osteoarthritis is a condition that affects both the bones and cartilage in your joints. Cartilage is a flexible and smooth tissue acting as a cushion in the joints. This cartilage, which protects bones from rubbing against each other, gradually breaks down. Over time, as the cushion wears thin, the joint and the tissues surrounding it start to react — causing pain, stiffness, and swelling.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                    Osteoarthritis can affect your knees, hips, hands, feet, and spine. Knees, hips, and hands are the most frequent sites. One of the reasons osteoarthritis often goes unnoticed early is that symptoms creep in slowly — which is why many people don't connect them to osteoarthritis until they've been living with them for many months.
                  </p>
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Osteoarthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    Daily activities like walking, climbing stairs, or squatting place repeated stress on your joints. Normally, the body can repair this everyday wear and tear.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    However, this ability is impaired in osteoarthritis. The factors that cause this damage can vary — and over time, this leads to the gradual breakdown of cartilage. When cartilage wears off, bones start to rub against each other and wear down.
                  </p>
                </div>

                {/* ── RISK FACTORS ── */}
                <div id="risk-factors" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Risk Factors for Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Osteoarthritis does not have a single cause. Many factors combine to damage the joints. These factors fall into two broad groups:{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>
                      reversible and irreversible causes
                    </strong>
                    . Knowing the difference helps you focus on what you can control and protect your joint health.
                  </p>

                  {/* Irreversible */}
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.2px", marginBottom: "1.25rem" }}
                  >
                    Factors you cannot reverse
                  </h3>
                  <ul className="space-y-1 mb-5" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {irreversibleFactors.map((f, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{f.title}:</strong> {f.desc}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "1.75rem" }}>
                    Having these risk factors doesn't mean severe disease is inevitable. Many people manage osteoarthritis effectively with the right care and lifestyle support.
                  </p>

                  {/* Reversible */}
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.2px", marginBottom: "1.25rem" }}
                  >
                    Factors you could reverse
                  </h3>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {reversibleFactors.map((f, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{f}</li>
                    ))}
                  </ul>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "1.75rem" }}>
                    The encouraging part? Even addressing one of these factors can help slow down the progression of osteoarthritis.
                  </p>

                  {/* India-specific */}
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.2px", marginBottom: "1rem" }}
                  >
                    Risk Factors Specific to India
                  </h3>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    A few lifestyle patterns make osteoarthritis particularly relevant to Indian patients, while often absent in the global scenario.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {indiaFactors.map((f, i) => (
                      <li key={i} className="text-[16px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{f.title}:</strong> {f.desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── EARLY SYMPTOMS ── */}
                <div id="early-symptoms" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Early Symptoms of Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    In the early stages, osteoarthritis is often ignored as signs of weakness and ageing. As the symptoms tend to be mild, inconsistent, and to progress over time, one might miss noticing the condition in their starting stage. Some of the early red flags to be concerned about are:
                  </p>

                  {earlySymptoms.map((s) => (
                    <div key={s.id} style={{ marginBottom: "1.75rem" }}>
                      <h3
                        className="text-navy-deep"
                        style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.25, marginBottom: "0.75rem" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ── PROGRESSION ── */}
                <div id="progression" data-toc-section style={{ paddingTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms as the Disease Progresses
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    As cartilage continues to wear and tear, symptoms become more consistent and start to affect your everyday life, evidently. The table below gives a simple picture of how Osteoarthritis gradually evolves over time if left untreated.
                  </p>

                  <img
                    src="/images/symtomsofdiese.webp"
                    alt="Symptoms of osteoarthritis disease progression"
                    className="w-full"
                    style={{ marginBottom: "1.75rem", display: "block" }}
                    loading="lazy"
                  />

                  {/* Progression table */}
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-[15px]" style={{ borderCollapse: "collapse", border: "1px solid #dadfe8" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#0f616e", color: "#ffffff" }}>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "var(--font-base)" }}>Stage</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "var(--font-base)" }}>Pain</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "var(--font-base)" }}>Stiffness</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "var(--font-base)" }}>Daily Function</th>
                        </tr>
                      </thead>
                      <tbody>
                        {progressionStages.map((row, i) => (
                          <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f5f9fa", borderBottom: "1px solid #dadfe8" }}>
                            <td style={{ padding: "12px 16px", fontWeight: 700, color: "#0f616e" }}>{row.stage}</td>
                            <td style={{ padding: "12px 16px", color: "#182439" }}>{row.pain}</td>
                            <td style={{ padding: "12px 16px", color: "#182439" }}>{row.stiffness}</td>
                            <td style={{ padding: "12px 16px", color: "#182439" }}>{row.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1rem" }}>
                    Starting as an occasional pain in mild cases, the symptoms change through various stages.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1rem" }}>
                    In the most severe cases, the bones at the joints may lose their normal shape and form bony lumps. They are called{" "}
                    <strong className="font-semibold text-navy-deep">Heberden's nodes</strong>. They form near the finger joints, making it difficult to hold things with a tight grip.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.75rem" }}>
                    While you are limping, struggling to stretch your knees, and waking up at night, these are the signs of advanced Osteoarthritis. It is encouraging as the disease could be treated effectively. You could manage it efficiently before reaching an advanced stage.
                  </p>

                  {/* Joint-specific symptoms */}
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.2px", marginBottom: "1rem" }}
                  >
                    Joint-Specific Symptoms of Osteoarthritis
                  </h3>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis may develop in specific areas and the symptoms may vary, which are as follows:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "1.5rem" }}>
                    {jointSymptoms.map((j, i) => (
                      <div key={i} className="bg-sky-faint/50 border border-sky-soft/40 p-5" style={{ borderRadius: 0, fontFamily: "var(--font-base)" }}>
                        <p
                          className="text-navy-deep"
                          style={{ fontFamily: "var(--font-base)", fontSize: "15px", fontWeight: 700, lineHeight: 1.35, marginBottom: "0.55rem" }}
                        >
                          {j.joint}
                        </p>
                        <p
                          className="text-navy-muted"
                          style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.7, margin: 0 }}
                        >
                          {j.symptoms}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── DIFFERENTIAL DIAGNOSIS ── */}
                <div id="differential" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Your Joint Pain Might Not Be Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Every joint pain is not going to be osteoarthritis. Several conditions can mimic it, and their treatment varies. Here's how to differentiate between them:
                  </p>

                  <div className="overflow-x-auto" style={{ marginBottom: "1.25rem" }}>
                    <table className="w-full text-[15px]" style={{ borderCollapse: "collapse", border: "1px solid #dadfe8" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#0f616e", color: "#ffffff" }}>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "var(--font-base)", minWidth: "180px" }}>Condition</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, fontFamily: "var(--font-base)" }}>How does it differ from Osteoarthritis?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {differentialTable.map((row, i) => (
                          <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f5f9fa", borderBottom: "1px solid #dadfe8" }}>
                            <td style={{ padding: "12px 16px", fontWeight: 700, color: "#0f616e", verticalAlign: "top" }}>{row.condition}</td>
                            <td style={{ padding: "12px 16px", color: "#182439", lineHeight: 1.7 }}>{row.difference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Correct and timely diagnosis saves months of managing the wrong health condition. As the symptoms are often misleading, a{" "}
                    <strong className="font-semibold text-navy-deep">rheumatologist</strong> is the right specialist to see when joint pain is persistent or confusing.
                  </p>
                </div>

                {/* ── WHEN TO SEE A DOCTOR ── */}
                <div id="when-to-see" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should You See a Doctor?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Consider seeing a doctor if you notice any of the following signs:
                  </p>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {whenToSeeDoctor.map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{item}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    Early evaluation gives you more treatment options and better outcomes. A rheumatologist can confirm whether you have osteoarthritis, rule out other conditions, and help you build a plan suited to your lifestyle.
                  </p>
                </div>

                {/* ── TAKE THE NEXT STEP ── */}
                <div
                  style={{
                    backgroundColor: "#0f616e",
                    color: "#ffffff",
                    padding: "40px 36px",
                    marginBottom: "32px",
                    borderRadius: 0,
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.3px",
                      marginBottom: "16px",
                    }}
                  >
                    Take the Next Step
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>
                    If the symptoms discussed in this article sound familiar, a proper diagnosis is the need of the hour. Joint pain that is persistent, limiting, or getting worse is not something to be ignored. A rheumatologist can give you clarity on what's happening to your joints and a plan for managing it. The earlier you take action, the healthier your life can be.
                  </p>
                  <a
                    href="/book-appointment"
                    className="group"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "#E86531",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "15px",
                      padding: "12px 18px 12px 26px",
                      borderRadius: "9999px",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Book a Specialist Visit
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>

                {/* ── NEWSLETTER ── */}
                <GoutNewsletter />

                {/* ── MEDICAL DISCLAIMER & REFERENCES ── */}
                <div style={{ borderTop: "1px solid #dadfe8", paddingTop: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "2rem" }}>
                    Medically reviewed by Dr. Raghavendra H, Consultant Rheumatologist. Last updated: April 2026. This content is for informational purposes only and does not substitute professional medical advice.
                  </p>
                  <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-navy-muted/60" style={{ marginBottom: "1rem" }}>References</p>
                  <ol className="space-y-3" style={{ paddingLeft: "1.25rem" }}>
                    {[
                      "Chopra A, et al. COPCORD India Study. Indian Journal of Rheumatology. 2012.",
                      "Steinmetz JD, et al. Burden of Osteoarthritis in India, 1990–2019. Osteoarthritis and Cartilage. 2022.",
                      "World Health Organization. Osteoarthritis Fact Sheet. who.int. 2023.",
                      "Mayo Clinic. Osteoarthritis: Symptoms and Causes. mayoclinic.org. 2025.",
                      "Cleveland Clinic. Osteoarthritis Overview. clevelandclinic.org.",
                      "OAF Foundation. oafifoundation.com.",
                      "NHS. Osteoarthritis. nhs.uk.",
                    ].map((ref, i) => (
                      <li key={i} className="text-[15px] leading-[1.7] text-navy-muted" style={{ listStyleType: "decimal" }}>
                        {ref}
                      </li>
                    ))}
                  </ol>
                </div>

                <hr className="border-none border-t border-[#dcdcdc] mt-10" />
              </div>

              {/* ── Right: TOC + Dr Card Sidebar ── */}
              <aside className="hidden lg:block w-[360px] shrink-0">
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 112px)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="guide-sidebar-scroll guide-toc" style={{ backgroundColor: "#E8F4F8", overflowY: "auto", overflowX: "hidden", flex: "1 1 auto", minHeight: 0, borderRadius: 0 }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocSections.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="text-left flex items-center gap-3 pr-5 transition-colors"
                            style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "9px", paddingBottom: "9px", borderBottom: "1px solid rgba(15,97,110,0.08)", borderRadius: 0 }}
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
                      href="/book-appointment"
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

export default Osteoarthritis
