import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Sjögren's Syndrome Diagnosis: Tests and What to Expect
   ───────────────────────────────────────────── */

const acrCriteria = [
  { tested: "A blood test for anti-Ro antibodies", points: "3" },
  { tested: "A lip biopsy showing a specific pattern of inflammation", points: "3" },
  { tested: "A dye test showing dry patches on the eye surface", points: "1" },
  { tested: "A paper strip test measuring tear production", points: "1" },
  { tested: "A measurement of how much saliva you produce", points: "1" },
]

const bloodTests = [
  { label: "Anti-Ro (also written SSA):", text: "This is the main test and carries the most weight. It is positive in most people with Sjögren's syndrome, but not in all patients." },
  { label: "Anti-La (also written SSB):", text: "This was used for diagnosis until 2016. It is no longer specific enough to count towards the score." },
  { label: "ANA and rheumatoid factor:", text: "These were also dropped in 2016. They are still tested to check for other conditions, not to confirm Sjögren's syndrome." },
]

const drynessTests = [
  { label: "Schirmer's test:", text: "This test measures the tears. A small paper strip is placed inside your lower eyelid for 5 minutes to measure how much tear it absorbs. It might be mildly uncomfortable." },
  { label: "Eye surface staining:", text: "An eye specialist inserts a dye into your eye and examines it under a light. This shows dry or damaged patches on the surface of the eye." },
  { label: "Salivary flow measurement:", text: "You have to spit into a container over a set period so the volume of the saliva can be measured. It is a quick and painless procedure." },
]

const bringItems = [
  "Every medicine and supplement you take, including anything bought without a prescription.",
  "When each symptom started, and in roughly what order.",
  "Any previous blood test results, particularly older antibody reports.",
  "Any autoimmune conditions that are present in your family.",
]

const expectItems = [
  "How long your eyes and mouth have felt dry.",
  "Whether you need water to help swallow dry food.",
  "Whether your eyes have felt gritty daily for more than 3 months.",
  "About fatigue, joint pain, and any dental problems.",
]

const testCosts = [
  { test: "Antibody blood tests, per test", cost: "₹1,000 to ₹3,000" },
  { test: "ANA test", cost: "₹600 to ₹1,500" },
  { test: "Combined antibody panel", cost: "₹2,000 to ₹4,000" },
  { test: "Schirmer's test and eye staining", cost: "Usually included in an eye specialist consultation" },
  { test: "Salivary flow measurement", cost: "Usually included in the consultation" },
  { test: "Salivary gland ultrasound", cost: "₹1,500 to ₹3,000" },
  { test: "Lip biopsy, including pathology", cost: "₹5,000 to ₹15,000" },
]

const faqs = [
  {
    q: "Can I have Sjögren's syndrome with a negative blood test?",
    a: "Yes. The anti-Ro antibody is absent in a substantial minority of people who have the condition. A negative result narrows the diagnosis, and a lip biopsy is usually the next step.",
  },
  {
    q: "Why do I need a lip biopsy?",
    a: "The antibody test and the biopsy are each worth 3 points. With a negative antibody test, the biopsy is the only route to the 4 points needed.",
  },
  {
    q: "My old report says anti-La positive. Does that still count?",
    a: "Not towards the current criteria. Anti-La was dropped in 2016 because it was not specific enough on its own. Your doctor will still take the result into account clinically, but it no longer scores points.",
  },
  {
    q: "How long does the whole process take?",
    a: "Usually several appointments across more than one specialist, since the tests involve rheumatology, ophthalmology, and sometimes oral surgery. A few weeks to a few months is a common duration for the process.",
  },
  {
    q: "Does dry eye mean I have Sjögren's syndrome?",
    a: "Usually not. Dry eyes are very common, particularly with age and screen use. Only a small proportion turn out to be Sjögren's syndrome. However, persistent dryness alongside fatigue, joint pain or dental problems does raise suspicion.",
  },
]

const references = [
  "Shiboski CH, Shiboski SC, Seror R, et al. 2016 American College of Rheumatology/European League Against Rheumatism classification criteria for primary Sjögren's syndrome. Annals of the Rheumatic Diseases.",
  "Chaturvedi VP, Rawat S, Shanmugam H. Reassessing Diagnostic Standards in Primary Sjögren's Disease: The Role of Salivary Gland Ultrasonography, 2026.",
  "Real-world diagnostic value of integrating oral and ocular dryness testing in suspected Sjögren's disease. Massachusetts General Hospital, December 2023 to January 2025.",
  "Carsons SE, Blum MA. Sjögren Disease. StatPearls, updated 6 July 2025.",
  "Diagnostic Utility of Minor Salivary Gland Biopsy for Primary Sjögren Syndrome in Patients With Negative Anti-SSA Antibodies.",
  "The 2016 classification criteria for primary Sjögren's syndrome: what's new?",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "how-diagnosis-made", label: "How the Diagnosis Is Made" },
  { id: "blood-tests", label: "The Blood Tests" },
  { id: "dryness-tests", label: "The Tests for Dryness" },
  { id: "lip-biopsy", label: "The Lip Biopsy" },
  { id: "ruled-out", label: "What Else Gets Ruled Out" },
  { id: "preparing", label: "Preparing for Your Appointment" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function SjogrensSyndromeDiagnosis() {
  const [activeSection, setActiveSection] = useState("how-diagnosis-made")

  useEffect(() => {
    document.title = "Sjögren's Syndrome Diagnosis: Tests and What to Expect | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Diagnosis: Tests and What to Expect</span>
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
                  <span className="whitespace-nowrap">Sjögren's Syndrome Diagnosis:</span>
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
                    Tests and What to Expect
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
                    No single test can confirm{" "}
                    <Link to="/sjogrens-syndrome" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      Sjögren's syndrome
                    </Link>. The doctor makes a definite diagnosis from the symptoms, blood tests, measurements of how much tear and saliva you actually produce, and sometimes a small biopsy taken from inside your lip.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is also a formal checklist that doctors refer to, called the 2016 ACR-EULAR classification criteria. It is crucial to know about it as the diagnosis of Sjögren's syndrome is based upon it.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This article covers what each test involves, why a negative blood test does not confirm a diagnosis, when a lip biopsy is preferred, and what else your doctor is ruling out along the way.
                  </p>
                </div>

                {/* ── HOW THE DIAGNOSIS IS MADE ── */}
                <div id="how-diagnosis-made" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How the Diagnosis Is Made
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Diagnosis of Sjögren's syndrome starts with a conversation with your doctor. They will ask how long your eyes and mouth have felt dry, what else has been happening alongside that, and what medicines you take. This is followed by an examination. Then they will recommend some tests based on your symptoms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The results checks them against the point system, which is ACR-EULAR. This helps explain why certain tests are more important than others, and why a biopsy might be necessary for some people but not for everyone.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The 2016 ACR-EULAR classification criteria work on points.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full table-fixed border-collapse text-left min-w-[380px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep w-4/5">What is tested</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep w-1/5">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {acrCriteria.map((row, idx) => (
                          <tr key={idx} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-middle">{row.tested}</td>
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-middle">{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A total of 4 points or more meets the threshold. When it was validated against expert clinical judgement, it identified around 96% of people who had the condition and correctly excluded around 95% of those who did not.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Two things follow from the arithmetic. The three smaller tests add up to only 3 points, so either the antibody test or the biopsy has to be positive to reach 4 points. And because this is a research tool rather than a diagnostic one, your doctor can still diagnose you clinically without every box being ticked.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── THE BLOOD TESTS ── */}
                <div id="blood-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Blood Tests
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There are 3 antibody tests for the diagnosis. These look for proteins in your blood to see if your immune system is overactive. Out of these 3 tests, only one contributes to the official classification score:
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {bloodTests.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.label}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A negative antibody test does not rule out Sjögren's syndrome. If this test is negative, but you have symptoms that point towards Sjögren's, a lip biopsy is the next step towards a definite diagnosis.
                  </p>
                </div>

                {/* ── THE TESTS FOR DRYNESS ── */}
                <div id="dryness-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Tests for Dryness
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Several glands in your body produce fluid; salivary glands produce saliva, lacrimal glands produce tears, your skin produces oil and sweat, etc.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    3 tests measure whether your glands are actually producing their fluids. Doctors use these tests to measure the intensity of the disease. None of them is painful, and all are carried out in a clinic.
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {drynessTests.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.label}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Research has found these dryness tests are often skipped during routine rheumatology appointments, even though they form part of the scoring system. If you have done the tests and your diagnosis for Sjögren's syndrome is still unclear, it is reasonable to ask your doctor about the dryness tests.
                  </p>
                </div>

                {/* ── THE LIP BIOPSY ── */}
                <div id="lip-biopsy" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Lip Biopsy
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is the test people worry about most. A small sample of the tiny salivary glands inside your lower lip is taken after injecting a numbing medicine. It is usually done as an outpatient procedure. A pathologist then examines it. If that pattern of inflammation is present, it scores 3 points. It is the same as a positive antibody test.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    It is usually recommended when the antibody test is negative, but your symptoms strongly suggest the condition. At that point, it is the only route to a confirmed classification.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The procedure is invasive. It can cause discomfort or complications, and results vary depending on sample quality and the experience of the pathologist.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Salivary gland ultrasound is being studied as a less invasive alternative. It is included in Indian research published in 2026. It is not yet a formal replacement, but it is increasingly used with the other tests.
                  </p>
                </div>

                {/* ── WHAT ELSE GETS RULED OUT ── */}
                <div id="ruled-out" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Else Gets Ruled Out
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your doctor will ask about things that seem unrelated to dry eyes. There are sound medical reasons for each question.
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                      <strong className="font-semibold">Medicines that cause dryness:</strong> Antihistamines, some antidepressants, and certain blood pressure tablets. These are extremely common, easily mistaken for Sjögren's syndrome, and the reason your medicine list matters.
                    </li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                      <strong className="font-semibold">Other autoimmune conditions:</strong>{" "}
                      <Link to="/Rheumatoid-Arthritis-overview" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                        Rheumatoid arthritis
                      </Link>{" "}
                      and lupus often occur alongside Sjögren's. So being tested for them is not a sign of doubt.
                    </li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                      <strong className="font-semibold">Age-related dry eye:</strong> It is very common and unrelated.
                    </li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                      <strong className="font-semibold">Thyroid problems and diabetes:</strong> Both of these cause dryness and fatigue.
                    </li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                      <strong className="font-semibold">Previous radiotherapy to the head or neck:</strong> It damages the glands.
                    </li>
                  </ul>
                  <Link to="/sjogrens-syndrome-symptoms" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", fontSize: "15px" }}>
                    Read more about symptoms and warning signs
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* ── PREPARING FOR YOUR APPOINTMENT ── */}
                <div id="preparing" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Preparing for Your Appointment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A little preparation makes the first appointment considerably more useful.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                    Bring or note down:
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {bringItems.map((item, idx) => (
                      <li key={idx} className="text-[16px] leading-[1.7] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                    Expect to be asked about:
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {expectItems.map((item, idx) => (
                      <li key={idx} className="text-[16px] leading-[1.7] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    It is crucial to mention all your symptoms to your doctor, including those that seem completely unrelated.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What the tests are likely to cost
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Costs for these tests vary considerably between laboratories, cities and hospitals. The following table provides approximate prices to help you plan for these tests.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full table-fixed border-collapse text-left min-w-[380px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep w-2/5">Test</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep w-3/5">Approximate cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testCosts.map((row, idx) => (
                          <tr key={idx} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-middle">{row.test}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-middle">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Prices may differ between private laboratories and government hospitals, and between larger cities and smaller ones. Some tests may also be covered under your insurance or under a government scheme.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Ask your doctor or your nearest hospital for an estimate before booking. They will know what applies locally and whether anything can be done more affordably.
                  </p>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/sjogrens-syndrome-treatment" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", fontSize: "15px" }}>
                      Read more about treatment options
                      <ArrowRight size={14} />
                    </Link>
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

export default SjogrensSyndromeDiagnosis
