import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const bloodTests = [
  { test: "ESR (erythrocyte sedimentation rate)", measures: "Checks the level of disease activity  in the body", cost: "Rs 100 to Rs 300" },
  { test: "CRP (C-reactive protein)", measures: "Shows recent changes in the disease activity", cost: "Rs 200 to Rs 500" },
  { test: "Rheumatoid factor (RF)", measures: "Helps rule out rheumatoid arthritis. It is usually negative in people with psoriatic arthritis", cost: "Rs 200 to Rs 500" },
  { test: "Anti-CCP antibodies", measures: "Helps rule out rheumatoid arthritis", cost: "Rs 500 to Rs 1,200" },
  { test: "Uric acid", measures: "Helps rule out gout when sudden pain and swelling in one joint develop.", cost: "Rs 100 to Rs 300" },
  { test: "ANA (anti-nuclear antibody)", measures: "Helps rule out lupus", cost: "Rs 400 to Rs 900" },
]

const faqs = [
  { q: "Can psoriatic arthritis be diagnosed without a skin rash?", a: "Yes, some people develop joint symptoms before any visible psoriasis appears. In these people, doctors look for nail changes, swelling in the whole finger, or a family history of psoriasis to help diagnose the condition." },
  { q: "What is the cost of a psoriatic arthritis diagnosis in India?", a: "In India, the tests used to diagnose psoriatic arthritis usually cost between Rs 3,000 and Rs 15,000. The total cost depends on which blood tests and imaging are recommended. Government hospitals usually provide these tests at lower cost." },
  { q: "Why does a negative rheumatoid factor blood test point toward psoriatic arthritis?", a: "Rheumatoid arthritis is usually associated with a positive rheumatoid factor in the blood. When someone has psoriasis, joint symptoms, and a negative rheumatoid factor result, it may support a diagnosis of psoriatic arthritis by helping doctors rule out rheumatoid arthritis." },
  { q: "Is an MRI always needed to diagnose psoriatic arthritis?", a: "No, many people are diagnosed based on physical check-ups, blood tests, and X-rays or ultrasound. Doctors usually recommend an MRI when people have pain and swelling in the lower back or pelvis or when the other scans do not provide enough information." },
]

const references = [
  { text: "Taylor W et al. Classification Criteria for Psoriatic Arthritis. Arthritis and Rheumatism. 2006. ", url: "https://pubmed.ncbi.nlm.nih.gov/16871531/" },
  { text: "Healthline. Psoriatic Arthritis Diagnosis - Tests, Treatment, and More. 2025. ", url: "https://www.healthline.com/health/psoriatic-arthritis/diagnosis" },
  { text: "NYU Langone Health. Diagnosing Psoriatic Arthritis. ", url: "https://nyulangone.org/conditions/psoriatic-arthritis/diagnosis" },
  { text: "Gladman DD et al. Diagnosis and Management of Psoriatic Arthritis. Indian Journal of Dermatology Venereology and Leprology. 2013. ", url: "https://ijdvl.com/diagnosis-and-management-of-psoriatic-arthritis/" },
  { text: "Arthritis Foundation. Psoriatic Arthritis Diagnosis. ", url: "https://www.arthritis.org/diseases/psoriatic-arthritis" },
  { text: "WebMD. What Are the CASPAR Criteria for Psoriatic Arthritis? 2024. ", url: "https://www.webmd.com/arthritis/psoriatic-arthritis/caspar-criteria-psoriatic-arthritis" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "why-early", label: "Why Early Diagnosis Matters?" },
  { id: "how-diagnosed", label: "How Is Psoriatic Arthritis Diagnosed?" },
  { id: "physical-checkup", label: "The Physical Check-up: What Does The Doctor Check?" },
  { id: "blood-tests", label: "Blood Tests: What Do They Check and Why Are They Needed?" },
  { id: "imaging-tests", label: "Imaging Tests: What To Expect?" },
  { id: "joint-fluid", label: "Joint Fluid Test: When Is It Used?" },
  { id: "understanding-results", label: "Understanding Your Test Results" },
  { id: "why-late", label: "Why Is Psoriatic Arthritis Often Diagnosed Late?" },
  { id: "see-doctor", label: "When Should You See a Doctor?" },
  { id: "accurate-diagnosis", label: "Get an Accurate Diagnosis - Speak to a Rheumatologist" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function PsoriaticArthritisDiagnosis() {
  const [activeSection, setActiveSection] = useState("why-early")

  useEffect(() => {
    document.title = "Psoriatic Arthritis Diagnosis: Tests, Criteria and What to Expect | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Psoriatic Arthritis Diagnosis</span>
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
                  Psoriatic Arthritis Diagnosis:
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
                    Tests, Criteria and What to Expect
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
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people with psoriatic arthritis are advised multiple tests. They wonder why many tests are recommended and how the doctors diagnose the condition. However, there is no one blood test or scan that can diagnose psoriatic arthritis on its own.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Doctors diagnose psoriatic arthritis based on the symptoms, physical check-up, blood tests, and imaging scans. Each test provides a different piece of information and helps rule out other conditions that can cause similar symptoms. Understanding what these tests are looking for can make the diagnostic process feel less overwhelming.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This article explains how psoriatic arthritis is diagnosed, the blood tests and scans that may be recommended, what the results mean, and what to expect during the process.
                  </p>
                </div>

                {/* ── WHY EARLY DIAGNOSIS ── */}
                <div id="why-early" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Why Early Diagnosis Matters?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Early diagnosis can make a significant difference in psoriatic arthritis. Starting treatment early helps reduce symptoms and protect the joints from long-term damage. Psoriatic arthritis can remain active even when symptoms seem mild or come and go. This is why doctors recommend getting checked if there is persistent joint pain, stiffness, or swelling rather than waiting for symptoms to improve on their own.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Many people in India live with psoriasis for years before they realise joint and skin symptoms may be related. However, skin and joint symptoms are often treated separately, which often delays the diagnosis. If you have psoriasis and have recently developed joint symptoms, speak with a doctor to get the right diagnosis and treatment.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── HOW DIAGNOSED ── */}
                <div id="how-diagnosed" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Psoriatic Arthritis Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no single test that confirms the diagnosis. Doctors usually begin with a physical check-up and ask questions about the symptoms, psoriasis and whether any family members have any diseases. They will also recommend blood tests and imaging scans to look for the level of disease activity and rule out other conditions that cause similar symptoms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Doctors often use internationally accepted guidelines called CASPER criteria to support the diagnosis. Think of it as a scoring system. Points are awarded for every symptom, such as psoriasis, a personal or family history of psoriasis, nail changes, sausage-like swelling of a whole finger or toe (dactylitis) and a negative rheumatoid factor blood test. Together, these help the doctor determine whether psoriatic arthritis is the most likely cause of the symptoms.
                  </p>
                </div>

                {/* ── PHYSICAL CHECK-UP ── */}
                <div id="physical-checkup" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Physical Check-up: What Does The Doctor Check?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people feel anxious before their first appointment with a doctor and wonder what to expect. In most cases, the first visit involves a detailed discussion and a physical check-up. The doctor will examine the joints for pain, swelling, and reduced movement. They may also look for psoriasis patches on the skin, changes in the nails, swelling of a whole finger or toe (dactylitis), and pain in the heel or sole (enthesitis).
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    During the physical check-up, they will also ask about the symptoms, when they started, and whether anyone in the family has psoriasis or psoriatic arthritis. It is best to bring previous test results, dermatology records, and a list of current medicines to make the appointment more helpful. Most appointments take around 30 to 45 minutes. The examination is not painful and helps the doctor decide whether additional tests are needed.
                  </p>
                </div>

                {/* ── BLOOD TESTS ── */}
                <div id="blood-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Blood Tests: What Do They Check and Why Are They Needed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Blood tests in people with psoriatic arthritis do not confirm the condition. These tests help doctors look for the level of disease activity and rule out other conditions that can cause similar symptoms, such as rheumatoid arthritis, gout and lupus.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[680px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Blood Test</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">What It Measures</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate Cost Of The Test In India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bloodTests.map((row) => (
                          <tr key={row.test} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.test}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.measures}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The total cost of blood tests may vary depending on which tests are recommended. In India, these tests cost around <strong className="font-semibold">Rs 1,500 to 3,700</strong> based on the city and laboratory. Government hospitals may offer them at lower cost.
                  </p>
                </div>

                {/* ── IMAGING TESTS ── */}
                <div id="imaging-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Imaging Tests: What To Expect?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Different imaging tests are taken for the same condition. The choice of scan usually depends on which joints are affected and what information the doctor needs. These tests help the doctor look inside the joints.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    X-Ray
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    X-rays help the doctor look for damage and changes in the joints caused by psoriatic arthritis. It is usually the first imaging test recommended by doctors. X-rays usually appear normal in the early stages, but they are used to monitor how the joint changes over time. In India, the cost of an X-ray varies from Rs 300 to Rs 800 depending on the area scanned.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Ultrasound
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Ultrasound helps doctors look for any swellings in and around the joint. It helps them detect early changes even before it appears on an X-ray. This allows the doctor to assess how active the condition is in the specific joint, particularly in the heel and foot.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    This is a painless procedure, and no radiation is used. It helps the doctor identify the condition when an MRI is not accessible. The cost of an ultrasound usually varies between <strong className="font-semibold">Rs 800 to Rs 2,500</strong> depending on the area recommended to test.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    MRI (Magnetic Resonance Imaging)
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    MRI helps the doctor look for early joint changes before they become permanent. It helps the doctor get the most detailed view of joints and surrounding tissue. MRI is particularly useful when symptoms affect the lower back or pelvis, where other scans may not provide enough detail. In India, an MRI is available in big cities and usually costs around Rs 4000 to Rs 12000 depending on the laboratory.
                  </p>
                </div>

                {/* ── JOINT FLUID TEST ── */}
                <div id="joint-fluid" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Joint Fluid Test: When Is It Used?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sometimes doctors may recommend a joint fluid test called &lsquo;joint aspiration&rsquo; or &lsquo;synovial fluid analysis&rsquo;. This is a quick and commonly performed procedure.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors often recommend this when the joint becomes swollen and painful suddenly. During this procedure, the doctor takes out a small amount of fluid from the affected joints. This test helps the doctor understand whether the symptoms are due to psoriatic arthritis or other conditions such as gout or joint infection. The procedure is done under local anaesthesia and takes only a few minutes. Most people can often return to their routine activities the same day.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In India, a joint fluid test usually costs around Rs 500 to Rs 2,000 depending on the hospital.
                  </p>
                </div>

                {/* ── UNDERSTANDING RESULTS ── */}
                <div id="understanding-results" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Understanding Your Test Results
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The most stressful part of getting a diagnosis is usually waiting for test results. It is natural to worry, but knowing how these tests tell the doctor about the condition can help. In psoriatic arthritis, test results are only a part of the diagnosis, they cannot confirm the condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong className="font-semibold">High levels of ESR and CRP</strong> in the blood tell the doctor about how active the condition is in the body. A negative rheumatoid factor is very common in people with psoriatic arthritis, but it does not mean that the condition is not present. Similarly, a normal X-ray in the early stages does not mean the joints are healthy. It may simply mean that visible joint changes have not developed yet.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The doctor will look at the symptoms, physical check-up, blood tests, and scans together before making a diagnosis. If the tests were done elsewhere, bringing previous reports to the appointment can help provide a clearer picture and may reduce the need for repeat testing.
                  </p>
                </div>

                {/* ── WHY LATE ── */}
                <div id="why-late" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Why Is Psoriatic Arthritis Often Diagnosed Late?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people with psoriatic arthritis do not receive the correct diagnosis instantly. In India, this usually happens for two reasons. The first is that <strong className="font-semibold">psoriasis and joint symptoms are often treated separately.</strong> Many people see a dermatologist for their skin symptoms but do not mention pain, stiffness, or swelling in their joints. As a result, the connection between the skin and joints may not be recognised early.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The second reason is that <strong className="font-semibold">nail changes are commonly mistaken for a fungal infection.</strong> Small pits in the nails, nail discolouration, or the nail separating from the nail bed may be treated with antifungal medicines for months without improvement. In some people, these changes are actually caused by psoriatic arthritis. If you have psoriasis and have noticed joint pain or stiffness for more than six weeks, it is worth discussing this with your doctor. This can help diagnose the condition early and reduce the risk of long-term joint damage.
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
                    Many people in India live with pain, stiffness and swelling for years before receiving the right diagnosis of psoriatic arthritis. See a rheumatologist if you have joint pain and stiffness that lasts for more than 6 weeks, especially if you have a family history of psoriasis or psoriatic arthritis. Nail changes such as nail pitting or discolouration, swelling of an entire finger or toe, and pain in the heels or sole of the foot should not be ignored. Waiting for the symptoms to improve on their own can delay the diagnosis. Early diagnosis and the right treatment can help prevent the condition from worsening.
                  </p>
                </div>

                {/* ── ACCURATE DIAGNOSIS ── */}
                <div id="accurate-diagnosis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Get an Accurate Diagnosis - Speak to a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If joint pain has been present alongside psoriasis and tests have so far not given a clear answer, a rheumatologist is the right specialist to see next. The diagnostic process is straightforward and manageable, and reaching an accurate diagnosis is what makes effective treatment possible.
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
                    Disclaimer:
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

export default PsoriaticArthritisDiagnosis
