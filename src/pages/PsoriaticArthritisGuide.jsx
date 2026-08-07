import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Psoriatic arthritis is an autoimmune condition where the body attacks itself (Auto means self, and the immune system is the defence system which fights against infections). It affects joints and skin.",
  "About 1 in 3 people with psoriasis develop psoriatic arthritis. Stress, infections, joint injury, and certain medications are common triggering causes.",
  "Common experienced symptoms include joint pain, morning stiffness, swollen “sausage” fingers/toes, and nail changes like pitting or thickening.",
  "There is no permanent cure, but the right treatment can control symptoms and help most people stay active.",
  "Treatment usually starts with managing pain and providing relief. This is followed by medications that slow the disease and biologic injections for more severe cases.",
]

const triggers = [
  { label: "Physical injury:", detail: "Injury to a joint or repetitive strain can trigger the body’s protective system. In high-risk people, this defence system can attack the body’s own tissues." },
  { label: "Infections:", detail: "Throat infections that are caused by bacteria, and other infections can lead to worsening of the condition." },
  { label: "High stress:", detail: "Increased stress is the most common cause of psoriatic arthritis." },
  { label: "Certain medications:", detail: "Few medications like lithium, chloroquine (malaria medicine), and beta-blockers (used to treat heart conditions) are associated with the worsening of psoriasis. They can also trigger joint symptoms." },
]

const atRisk = [
  "Patients with psoriasis.",
  "Family members or close relatives suffering from psoriasis or psoriatic arthritis",
  "Age between 30 and 55 years",
]

const jointSymptoms = [
  { label: "Pain and swelling:", detail: "Joints feel painful, warm, and visibly swollen. The symptoms become worse after sitting still for a short duration." },
  { label: "Morning stiffness:", detail: "After waking up, there is difficulty in joint movement. The stiffness gradually reduces within 30 to 60 minutes." },
  { label: "Flares and remissions:", detail: "Symptoms intensify suddenly and then settle down. This pattern of the condition makes it easy to ignore." },
  { label: "Reduced range of motion:", detail: "When the condition is left untreated, the swelling and irritation increases. This reduces how far a joint can bend or stretch." },
]

const faqs = [
  { q: "Can psoriatic arthritis be cured?", a: "There is no cure. But treatment can control inflammation and protect the joints. It allows most people to live an active life. The main goal of treatment is to lower disease progression and flare-ups." },
  { q: "Does everyone with psoriasis get psoriatic arthritis?", a: "Only 1 in 3 people with psoriasis develops psoriatic arthritis. Nail changes or a family history of inflammatory arthritis can increase the risk. Reporting joint symptoms to a doctor early is the best way to prevent damage." },
  { q: "What does psoriatic arthritis feel like in the early stages?", a: "In the early stages, there will be unexplained morning stiffness. Along with this a persistent ache in one or two joints, slightly puffy fingers or toes, or heel pain that does not resolve with rest. Many people dismiss these as an injury until the symptoms keep returning." },
  { q: "Can psoriatic arthritis affect the spine?", a: "Yes, psoriatic arthritis can cause lower back stiffness. It can reduce flexibility and sometimes causes hip and shoulder pain." },
  { q: "Are there affordable treatment options for psoriatic arthritis in India?", a: "Yes, NSAIDs and methotrexate are available at low cost through Jan Aushadhi outlets. Indian biosimilar biologics cost significantly less than imported brands. PM-JAY may cover certain hospitalisation and treatment costs for qualifying patients." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "quick-answer", label: "Quick to Answer" },
  { id: "what-is-psa", label: "What Is Psoriatic Arthritis?" },
  { id: "how-common", label: "How Common Is Psoriatic Arthritis in India?" },
  { id: "causes", label: "What Causes Psoriatic Arthritis?" },
  { id: "symptoms", label: "Symptoms of Psoriatic Arthritis" },
  { id: "diagnosis", label: "How Is Psoriatic Arthritis Diagnosed?" },
  { id: "treatment", label: "Treatment Options for Psoriatic Arthritis" },
  { id: "different-from-ra", label: "How Is It Different from Rheumatoid Arthritis?" },
  { id: "living", label: "Living With Psoriatic Arthritis in India" },
  { id: "when-to-consult", label: "When Should a Rheumatologist Be Consulted?" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function PsoriaticArthritisGuide() {
  const [activeSection, setActiveSection] = useState("quick-answer")

  useEffect(() => {
    document.title = "Psoriatic Arthritis: What It Is, Symptoms, Causes and Treatment Options | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Psoriatic Arthritis</span>
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
                  Psoriatic Arthritis:
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
                    What It Is, Symptoms, Causes and Treatment Options
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
                    Noticed skin itching lately? The small patch of itchy skin, which turns scaly on your fingers, is easy to be ignored as dry skin. A skin specialist confirms it as psoriasis, and for a while, that feels fine, with medications and follow- ups.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    But then the mornings start feeling harder. The knees begin to ache without reason. Fingers feel stiff and harder to bend. Even closing a laptop becomes an effort. These joint changes do not feel connected to the skin, so they often go unnoticed or untreated for years. By the time the two are linked together, psoriatic arthritis has already been quietly progressing.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    This is more common than most people realise. About 2 to 3% of the population lives with psoriasis, and 1 in 3 of them go on to develop psoriatic arthritis.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Doctors confirm the diagnosis, and the right treatment can manage symptoms and protect the joints from further damage. This article helps you understand through what psoriatic arthritis is, symptoms, causes, and what treatment looks like in India.
                  </p>
                </div>

                {/* ── QUICK TO ANSWER ── */}
                <div id="quick-answer" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Quick to Answer
                  </h2>
                  <ul className="space-y-2 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {quickAnswers.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── WHAT IS PSA ── */}
                <div id="what-is-psa" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Is Psoriatic Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis (PsA) is a condition where the immune system mistakenly attacks healthy tissues of skin and joints. The immune system is the body's natural defence against harmful germs and infections. In a healthy person, it carefully targets only outside threats and fights against those.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In psoriasis, the immune system becomes overactive and mistakenly starts attacking the skin tissue. This attack causes the skin to become red, thick, and scaly. In psoriatic arthritis, the overactive immune system starts attacking joints. It is a form of arthritis that mainly affects people with psoriasis. It can involve multiple joints, the spine, tendons, and nails all at once.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    For most people, skin symptoms appear first, sometimes years before any joint problems begin. In others, joint and skin symptoms develop around the same time. The root cause in both conditions is an immune system that gets overactive and mistakenly attacks the body's own healthy tissues.
                  </p>
                </div>

                {/* ── HOW COMMON ── */}
                <div id="how-common" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Common Is Psoriatic Arthritis in India?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Psoriatic arthritis affects approximately 8.7 % of people with psoriasis in India. The data is based on the RAPID-India group study from 2025. Still, it often goes undiagnosed. The reason behind this is - most patients see a dermatologist for the skin and a general doctor for the joints. As a result, the two major symptoms never get connected. Due to different patterns and common symptoms, many patients reach a rheumatologist after suffering for years.
                  </p>
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Psoriatic Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The main cause of psoriatic arthritis is still unknown. The immune system plays a central role. Certain factors, such as genes, stress, infection, vitamin D deficiency and medication, trigger the immune system. It starts attacking healthy joints and skin tissue instead of protecting them. This causes persistent inflammation that can become worse without treatment.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Genetic and Family History Factors
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Genes play an important role in developing psoriatic arthritis (PsA). The gene marker HLA-B27 (HLA stands for Human Leukocyte Antigen) is linked to involvement of the spine in some patients. Not everyone with this gene will develop psoriatic arthritis. It increases the chances of getting PsA.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Having a close family member with psoriasis or psoriatic arthritis also makes the individual vulnerable. If these conditions run in the family, then no joint symptoms should not be ignored. It should be checked by a doctor early.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Triggers That Can Start or Worsen Psoriatic Arthritis:
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There are a few factors which can worsen the condition:
                  </p>
                  <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {triggers.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{t.label}</strong> {t.detail}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Indian-Specific Risk Factors
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Vitamin D deficiency is very common in urban India. Active inflammation of the disease is the underlying cause. Arthritis, which develops after chikungunya, closely resembles the psoriatic joint pattern. This is also one of the reasons for the misdiagnosis of psoriatic arthritis. Rheumatologist availability in smaller towns is limited. That is why many patients visit them only after joint damage has already started.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Who is most at risk?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Following are the people who are at more risk of developing psoriatic arthritis:
                  </p>
                  <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {atRisk.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms of Psoriatic Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Psoriatic arthritis can affect the joints, skin, nails, spine, and tendons. Symptoms can vary among people, and they usually worsen suddenly.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint Symptoms
                  </h3>
                  <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {jointSymptoms.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{t.label}</strong> {t.detail}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Skin and Nail Changes
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Psoriasis patches are raised, red, silvery-scaled areas. Scalp, elbows, knees, and lower back are the most common sites. Nail changes include pitting, crumbling, discolouration and separation from the nail bed. These changes sometimes appear before joint pain. That is why these are meaningful early signs that psoriatic arthritis may develop. It is best not to ignore these early signs to prevent the disease from progressing.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Swelling and Pain :
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The swelling occurs on the entire finger or toe, not just at one joint, which is referred to as Dactylitis. Tendons are tight cords which attach muscle of the finger to bone. The tissue is present along the whole length of the finger. The inflammation occurs in the tissue tendons. Therefore, the swelling occurs in the entire finger or toe, which gives them the characteristic sausage appearance. This typical appearance helps differentiate psoriatic arthritis from other types of arthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Enthesitis is pain at the points where tendons attach to bone. The pain most commonly occurs in the heel, sole of the foot, elbow, and knee. Many patients first consult a doctor for this heel pain without knowing they could be suffering from psoriatic arthritis.
                  </p>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Psoriatic Arthritis Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no single test to confirm psoriatic arthritis. Rheumatologists build a diagnosis based on the clinical examination, blood tests, and imaging together. They examine the joints, the skin and nails. They also assess spine movement and ask about family history. Joint and skin symptoms that occur together are the clearest diagnostic signal.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors advise various tests to detect the condition and pattern of the disease. They advise blood tests to measure inflammation through ESR and CRP. An X-ray to check bone changes and an MRI for soft tissue and the spine. Ultrasound is also advised to check for enthesitis before it is visible on an X-ray. The HLA-B27 (Human Leukocyte antigen B27 gene) test is done to detect the presence of this gene. This is suggested mainly when spine involvement is suspected. RF (rheumatoid factor) is usually negative in psoriatic arthritis, which helps separate it from rheumatoid arthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The CASPAR criteria (Classification criteria for psoriatic arthritis) is an internationally accepted diagnostic checklist. This checklist provides a structured basis for confirming the diagnosis.
                  </p>
                </div>

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treatment Options for Psoriatic Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There is no cure for psoriatic arthritis. The treatment only reduces inflammation. It protects the joints and manages skin symptoms. With the right treatment plan, most people can control the disease from progressing rapidly and live an active life.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Medications Overview
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    NSAIDs only help in reducing pain and stiffness. They cannot slow down joint damage. DMARDs target the immune process causing the disease. Biologics are used when other treatments are not enough to control the disease. Medications need to be taken only after a doctor's prescription.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Non-Medication Approaches and Skin Care
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Along with medication, physiotherapy helps maintain joint flexibility and muscle strength. Walking, swimming, and yoga support joint strength without much impact on them. Topical creams and medicated shampoos manage psoriasis patches along with medication. Keeping psoriasis plaques moisturised reduces cracking and infection risk.
                  </p>
                </div>

                {/* ── DIFFERENT FROM RA ── */}
                <div id="different-from-ra" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is It Different from Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Both rheumatoid arthritis (RA) and psoriatic arthritis (PsA) cause joint pain, stiffness, and swelling. But they both require different treatments. Therefore, it is necessary to differentiate them. In Psoriatic arthritis common sites include skin, spine and entire fingers/ toes will be affected, whereas in Rheumatoid arthritis mainly joints are affected. Psoriatic arthritis only one side is affected, whereas in Rheumatoid arthritis both sides are affected. Psoriatic arthritis(PsA) has a family history of autoimmune disease and skin conditions. Skin or nail changes, along with joint pain, can make a doctor consider PsA.
                  </p>
                </div>

                {/* ── LIVING ── */}
                <div id="living" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Living With Psoriatic Arthritis in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis is a long-term condition. With small lifestyle and dietary changes, you can live an active life. A healthy, anti-inflammatory diet with foods such as turmeric, mustard oil, flaxseeds, and fish needs to be incorporated. Reduce intake of refined sugar and processed foods. Stay in a healthy weight range, as it can reduce joint load and help medication work better. Walking, swimming, and yoga are the best options. A physiotherapist can suggest modified positions for floor-sitting to protect the knees and hips.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Visiting your rheumatologist early instead of self-medicating can prevent the condition from worsening. Psoriasis is still wrongly believed to be contagious in many Indian communities. As a result, people are pushed toward isolation. Counselling and support from family and friends help significantly. These can help reduce both the physical and emotional weight of managing the condition in the long term.
                  </p>
                </div>

                {/* ── WHEN TO CONSULT ── */}
                <div id="when-to-consult" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should a Rheumatologist Be Consulted?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    When you notice joint pain, alongside psoriasis, see a rheumatologist without delay. Early diagnosis prevents irreversible joint damage. A rheumatologist will confirm your diagnosis, build a treatment plan suited to your specific disease pattern, and help you track changes over time. Starting the right treatment early gives you the best chance of living an active life.
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

export default PsoriaticArthritisGuide
