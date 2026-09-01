import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Sjögren's Syndrome
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Sjögren's syndrome is an immune system overreaction that attacks the glands that make tears and saliva.",
  "It affects women around 9 times more often than men. It most commonly starts between the ages of 45 and 55.",
  "Common Symptoms: Dry eyes and dry mouth, fatigue that sleep does not fix, joint pain, and swelling of the glands near the jaw.",
  "Treatment Options: Artificial tears and saliva substitutes as first-line therapy, with medicines that suppress the immune system when other organs are affected.",
  "Diagnosis is often delayed for years, because dryness, fatigue, and joint pain tend to be treated separately by different doctors.",
]

const causeFactors = [
  { label: "Genes", text: "Particular inherited variations show up more often in people who develop the condition, though carrying them does not mean you will have Sjögren's syndrome." },
  { label: "Environment", text: "Something triggers the process in those already predisposed, with certain common viral infections and exposure to some industrial chemicals both under investigation." },
  { label: "Hormones", text: "Likely to be the cause, given how strongly the condition favours women." },
]

const drynessSymptoms = [
  "Eyes that feel gritty, burning, or sandy, often worse in air conditioning or wind.",
  "A dry mouth, to the extent that swallowing dry food becomes difficult.",
  "Swelling of the glands in front of the ears or under the jaw. About half of people get it at some point.",
]

const otherSymptoms = [
  "Fatigue that sleep does not fix.",
  "Joint pain and muscle aches.",
  "Difficulty concentrating, which many people describe as brain fog.",
  "Dry skin and vaginal dryness.",
  "Involvement of the lungs, nerves, or kidneys in some people.",
]

const delayFactors = [
  "Dry eyes get treated by an eye doctor.",
  "Dental decay treated by a dentist.",
  "Fatigue is attributed to stress, age, or a busy life.",
]

const faqs = [
  {
    q: "Is Sjögren's syndrome an autoimmune disease?",
    a: "Yes. The immune system attacks the glands that produce tears and saliva. And in up to half of people it affects other parts of the body too, including joints, skin, lungs and nerves.",
  },
  {
    q: "Does dry eye mean I have Sjögren's syndrome?",
    a: "Usually not. Dry eyes are very common, particularly as people get older, and only a small portion of cases turn out to be Sjögren's syndrome. Persistent dryness alongside fatigue, joint pain, or dental problems is what raises suspicion.",
  },
  {
    q: "Is there a cure for Sjögren's syndrome?",
    a: "No, but the condition is manageable, and most people control their symptoms well. The first medicines designed to treat the underlying disease rather than its symptoms are currently in late-stage trials.",
  },
  {
    q: "Can men get Sjögren's syndrome?",
    a: "Yes. It is around nine times more common in women, which means men are often not considered and diagnosed later. Men with persistent dryness and fatigue deserve the same assessment.",
  },
  {
    q: "Will I be put on strong medicines?",
    a: "Not usually. Most people manage with treatments aimed at the dryness alone. Medicines that suppress the immune system are reserved for those with involvement of organs other than the glands.",
  },
]

const references = [
  "Carsons SE, Blum MA. Sjögren Disease. StatPearls, updated 6 July 2025.",
  "Living with Sjögren's Patient Survey 2025. Sjögren's Foundation, conducted by The Harris Poll, 6,360 respondents.",
  "Living with Sjögren's Patient Survey 2021. Sjögren's Foundation, 3,622 respondents.",
  "Baldini C, Fulvio G, La Rocca G, Ferro F. Update on the pathophysiology and treatment of primary Sjögren syndrome. Nature Reviews Rheumatology, August 2024.",
  "Nguyen Y, Nocturne G, Henry J, et al. Identification of distinct subgroups of Sjögren's disease by cluster analysis. The Lancet Rheumatology, April 2024.",
  "Zhao T, Zhang R, Li Z, Qin D, Wang X. A comprehensive review of Sjögren's syndrome: classification criteria, risk factors, and signaling pathways. Heliyon, September 2024.",
  "Mihai A, Caruntu C, Jurcut C, et al. The Spectrum of Extraglandular Manifestations in Primary Sjögren's Syndrome. Journal of Personalized Medicine, June 2023.",
  "Grader-Beck T, Mariette X, Finzel S, et al. Ianalumab demonstrates significant reduction in disease activity in patients with Sjögren's disease: NEPTUNUS-1 and NEPTUNUS-2. Presented at ACR Convergence, October 2025.",
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms and Warning Signs", "Diagnosis and Tests", "Treatment Options", "Living With Sjögren's Syndrome", "How Sjögren's Affects the Rest"]
const tabTargets = {
  Overview: "what-sjogrens-syndrome-is",
  "Symptoms and Warning Signs": "symptoms",
  "Diagnosis and Tests": "diagnosis",
  "Treatment Options": "treatment",
  "Living With Sjögren's Syndrome": "long-term-outlook",
  "How Sjögren's Affects the Rest": "how-sjogrens-affects-the-rest",
}

const H3Style = {
  letterSpacing: "-0.2px",
  color: "#0f616e",
  marginTop: "2rem",
  marginBottom: "1rem",
  fontSize: "1.35rem",
  textDecoration: "underline",
  textDecorationColor: "#1AA3B5",
  textDecorationThickness: "2px",
  textUnderlineOffset: "6px",
}

function SjogrensSyndromeOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Sjögren's Syndrome: Causes, Symptoms, and Treatment | Omni Rheuma"
    return () => {
      document.title = "Omni Rheuma"
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(100, Math.max(0, scrolled * 100)))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#E8F4F8" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-0 text-center">
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>
              A Patient Guide for India
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 7vw, 68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Sjögren's Syndrome
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              Causes, symptoms, and treatment options, explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/overvIew/sjogrens.webp"
                    alt="Sjögren's Syndrome"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => scrollTo(tabTargets[t])}
                    className="nav-tab transition-all hover:-translate-y-1"
                    style={{
                      flex: "1 1 110px",
                      maxWidth: "140px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e6ecf1",
                      borderRadius: "6px",
                      color: "#0f616e",
                      padding: "clamp(14px, 3.5vw, 18px) clamp(6px, 2vw, 10px)",
                      fontSize: "clamp(11px, 3vw, 13px)",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 6px 24px rgba(15,97,110,0.12)",
                      fontFamily: "var(--font-base)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Medically reviewed by */}
              <p style={{ marginTop: "28px", fontSize: "14px", color: "#4a6068", fontFamily: "var(--font-base)" }}>
                Medically reviewed by <strong style={{ color: "#0f616e" }}>Dr. Raghavendra H</strong>
              </p>
            </div>
          </div>
        </header>

        {/* ═══════════ CONTENT ═══════════ */}
        <section className="bg-white">
          <div className="overview-content max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* INTRO */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Sometimes, the most challenging health issues are those that don't fit neatly into a single category. You might visit an eye specialist, a dentist, and a general practitioner for different concerns, never suspecting that these separate problems are actually connected. This is often the reality for people living with Sjögren's syndrome.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Your eyes feel gritty and sore, making you visit an eye specialist. An unexpected tooth decay is found by your dentist. They link it to a dry mouth. Somewhere alongside this, there is exhaustion that sleep does not fulfill, and joints that ache without looking swollen. Each doctor treats the concern presented to them, and connecting together can be also challenging.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                These are not separate problems. They are all one condition, called <strong>Sjögren's syndrome</strong>, and it is a <strong>disease in which the body's immune system mistakenly attacks its own healthy tissues</strong>. This is why it is managed by a rheumatologist rather than by an eye doctor or dentist alone. This article covers what the condition is, who gets it, how it is diagnosed and treated, and why the diagnosis so often takes years.
              </p>
            </div>

            <DarkDivider />

            {/* QUICK ANSWER BLOCK */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Quick Answer Block
              </h2>
              <div style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "22px 26px" }}>
                <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {quickAnswers.map((q, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "8px" }}>
                        <path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[16px] leading-[1.7] text-navy-deep">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <DarkDivider />

            {/* WHAT SJOGREN'S SYNDROME IS */}
            <div id="what-sjogrens-syndrome-is" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                What Sjögren's Syndrome Is
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Your immune system is built to fight infection. In <strong>Sjögren's syndrome</strong>, instead of fighting off the infection, it affects the glands that produce tears and saliva. Those glands become inflamed and gradually stop secreting their fluids. This results in dry eyes and mouth.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Dry mouth is the most visible part of the condition, but it is not limited to it. Up to half of people with Sjögren's syndrome develop problems well beyond the glands. It affects the joints, skin, lungs, kidneys, or nerves. This is a whole-body autoimmune disease that presents itself through dryness.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                When the Swedish physician Henrik Sjögren first described the condition in the early 1900s, it was in a group of women who had chronic arthritis alongside dry eyes and dry mouth. The joints were part of the picture from the start.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                You may notice doctors have recently begun calling this <strong>Sjögren's disease</strong> rather than syndrome. Both terms describe the same condition.
              </p>
              <Link to="/sjogrens-beyond-dryness" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", marginTop: "1.5rem", fontSize: "15px" }}>
                Read more about how Sjögren's affects the rest of the body
                <ArrowRight size={14} />
              </Link>
            </div>

            <DarkDivider />

            {/* WHO GETS SJOGREN'S SYNDROME */}
            <div id="who-gets-sjogrens" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Who Gets Sjögren's Syndrome
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Sjögren's syndrome affects roughly 1 in every 100-200 people. Symptoms most often begin between the ages of <strong>45 and 55</strong>, though the condition can appear at any age. It is far more common in women, at around <strong>9 women for every man</strong> affected.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Around half of people diagnosed also have another autoimmune condition, most often{" "}
                <Link to="/Rheumatoid-Arthritis-overview" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                  rheumatoid arthritis
                </Link>{" "}
                or{" "}
                <Link to="/Lupus-overview" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                  lupus
                </Link>. When only Sjögren's occurs, it is called <strong>primary Sjögren's syndrome</strong>. And when it occurs alongside another condition, it is called <strong>secondary Sjögren's syndrome</strong>. Both terms will be shown in your medical reports.
              </p>

              <h3 style={H3Style}>Sjögren's Syndrome in India</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Indian data shows two different observations. Studies from specialist centres have found primary Sjögren's syndrome uncommon even among patients attending rheumatology clinics. Indian rheumatologists increasingly argue that it is underdiagnosed rather than genuinely rare.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                There is some evidence for that view. One study from northern India studied approximately 200 people with rheumatoid arthritis and found dryness symptoms in around 1 in 7 persons, with confirmed Sjögren's syndrome in around 1 in 20 persons. The condition appears to be found when doctors look for it.
              </p>
            </div>

            {/* INLINE CTA */}
            <div style={{ marginTop: "2.5rem" }}>
              <ReviewedConsultationCta />
            </div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Causes of Sjögren's Syndrome
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The exact cause of Sjögren's syndrome is unknown.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                Few factors appear to combine:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {causeFactors.map((c, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong>{c.label}:</strong> {c.text}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                None of these causes the condition alone. It takes the combination, which is why two people with similar genes can end up in very different places.
              </p>
            </div>

            <DarkDivider />

            {/* SYMPTOMS IN BRIEF */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Symptoms in Brief
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The symptoms fall into two groups. It is surprising how large the second group is.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                The dryness, which is what usually brings people to a doctor:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {drynessSymptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>

              <div id="how-sjogrens-affects-the-rest" style={{ scrollMarginTop: "80px" }}>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                  Everything else, which is the part that catches people out:
                </p>
                <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  {otherSymptoms.map((s, i) => (
                    <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[17px] leading-[1.8] text-navy-deep">
                In a large patient survey published in 2025, fatigue was the single symptom people said had the greatest negative impact on their lives, ahead of joint pain and brain fog. Dryness is what gets noticed. Fatigue is often what wears people down.
              </p>
              <Link to="/sjogrens-syndrome-symptoms" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", marginTop: "1.5rem", fontSize: "15px" }}>
                Read more about symptoms and warning signs
                <ArrowRight size={14} />
              </Link>
              <br />
              <Link to="/sjogrens-beyond-dryness" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", marginTop: "0.75rem", fontSize: "15px" }}>
                Read more about how Sjögren's affects the rest of the body
                <ArrowRight size={14} />
              </Link>
            </div>

            <DarkDivider />

            {/* DIAGNOSING SJOGREN'S SYNDROME */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Diagnosing Sjögren's syndrome
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                There is no single test that confirms Sjögren's syndrome. The diagnosis is made by combining other signs and symptoms, blood tests, and how much tear and saliva you produce. And sometimes a small biopsy from inside the lower lip.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The main blood tests look for antibodies called <strong>anti-Ro and anti-La</strong>. Tear production is measured with a simple paper strip placed inside the lower eyelid. An eye specialist examines the surface of the eye using a dye that highlights dry or damaged patches.
              </p>

              <h3 style={H3Style}>Significance of Negative Blood Test Results</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The antibody tests are useful, but they are not the final diagnosis. They are absent in up to a third of people who genuinely have Sjögren's syndrome.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                A negative result narrows the picture without closing it. This is one of the reasons the diagnosis takes so long for some people. And it is worth knowing if you have been told your blood work was normal, but your symptoms have not gone away.
              </p>
              <Link to="/sjogrens-syndrome-diagnosis" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", marginTop: "1.5rem", fontSize: "15px" }}>
                Read more about diagnosis, tests and what to expect
                <ArrowRight size={14} />
              </Link>
            </div>

            <DarkDivider />

            {/* FACTORS CONTRIBUTING TO DELAYED DIAGNOSIS */}
            <div id="delayed-diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Factors Contributing to Delayed Diagnosis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The problem is not that the symptoms are subtle. It is that they arrive separately and are treated separately. These are a few factors that may lead to a late diagnosis:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {delayFactors.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Each response is reasonable on its own, and dry eyes in particular are extremely common, with only a small proportion turning out to be this condition. Patient surveys have found that the wait from first symptoms to diagnosis averages around 3 years, though it has been improving.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                The pattern only becomes visible when it is seen as a whole, which is precisely what a rheumatologist is trained to do.
              </p>
            </div>

            <DarkDivider />

            {/* HOW SJOGREN'S SYNDROME IS TREATED */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                How Sjögren's Syndrome Is Treated
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                There is no cure for Sjögren's syndrome, and that sounds worse than it is. The condition is manageable, and most people control their symptoms well enough to live their normal lives.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Treatment comes in two layers. The first involves <strong>treating the dryness</strong> and replacing what the glands have stopped producing. The second layer involves <strong>medicines that suppress your immune system</strong>.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In the first-line therapy, artificial tears are used that are ideally preservative-free, with thicker gels at night. For the mouth, sipping water throughout the day, sugar-free gum to encourage saliva flow, and saliva substitutes. If those are not enough, prescription medicines can stimulate the glands directly.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The second layer of therapy only becomes necessary when organs beyond the glands are affected. Here doctors use medicines that suppress the immune system. These include <strong>hydroxychloroquine or methotrexate</strong>, which are also used in treating other autoimmune conditions. Most people never need this.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                One thing is changing. Until recently, there were no treatments for the underlying disease, and previous clinical trials had consistently failed. During 2025, the first targeted treatments reported positive results in large international studies, making this a more hopeful moment than it has been for years.
              </p>
              <Link to="/sjogrens-syndrome-treatment" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", marginTop: "1.5rem", fontSize: "15px" }}>
                Read more about treatment options
                <ArrowRight size={14} />
              </Link>
            </div>

            <DarkDivider />

            {/* LONG-TERM OUTLOOK */}
            <div id="long-term-outlook" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Long-Term Outlook on Sjögren's Syndrome
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Sjögren's syndrome is a long-term condition that is managed rather than cured. For most people with mild disease, the symptoms tend to stay reasonably stable rather than steadily worsening.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Where the condition is more severe, the effect on daily life is real. Persistent dryness, ongoing tiredness and dental problems keeps overall wellbeing challenging. Dental care is one of the higher ongoing costs people report.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                A small proportion of people go on to develop another autoimmune condition over the following years. This is one of the reasons regular follow-up matters even during stretches when you feel reasonably well.
              </p>
              <Link to="/living-with-sjogrens-syndrome" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", marginTop: "1.5rem", fontSize: "15px" }}>
                Read more about living with Sjögren's syndrome
                <ArrowRight size={14} />
              </Link>
            </div>

            <DarkDivider />

            {/* WHEN TO SEE A RHEUMATOLOGIST */}
            <div id="when-to-see-a-rheumatologist" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                When to See a Rheumatologist
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Rheumatologists treat immune overreaction conditions that attack the body's own tissues across several organ systems, which is exactly what Sjögren's syndrome does. Although an eye specialist and a dentist remain essential, a rheumatologist confirms the diagnosis and treats your condition as a whole.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Visit a rheumatologist if dryness in your eyes or mouth has lasted months rather than weeks, especially with fatigue or joint pain. The same applies if you have repeated dental decay despite good oral care, swelling of the glands in front of your ears or under your jaw, or dryness.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Mention all your symptoms to one doctor, including the ones that seem completely unrelated. The pattern is what leads to the diagnosis.
              </p>

              {/* Consultation CTA Block */}
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>
                    Dry eyes, dry mouth, and fatigue that will not settle? Consult a rheumatologist early
                  </p>
                </div>
                <Link
                  to="/book-appointment"
                  className="group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#E86531",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "12px 18px 12px 26px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  Book a Consultation with Dr Raghavendra H
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            <DarkDivider />

            {/* REFERENCES */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                References
              </h2>
              <ul className="space-y-3" style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
                {references.map((ref, idx) => (
                  <li key={idx} className="text-[15px] leading-[1.7] text-navy-muted pl-1">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>

            {/* MEDICAL DISCLAIMER */}
            <div className="mt-12 mb-8 p-6 rounded-lg border border-[#e0e0e0] bg-[#f9fbfb]">
              <p className="text-[13px] leading-[1.7] text-navy-muted italic">
                <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor about any medical concern.
              </p>
            </div>

          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#eef3f5" }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden group"
                  style={{ border: "1px solid #dbe5e9", boxShadow: "0 2px 10px rgba(15,97,110,0.06)" }}
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e0f3f5" }}>
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

export default SjogrensSyndromeOverview
