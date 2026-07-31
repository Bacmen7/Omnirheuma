import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const das28Rows = [
  { score: "Below 2.6", meaning: "The disease is silent. There is no pain or stiffness, and treatment is working effectively." },
  { score: "2.6 to 3.2", meaning: "Low-activity disease is quiet, but little pain and stiffness can occur" },
  { score: "3.2 to 5.1", meaning: "Moderate activity. There is pain, swelling and stiffness. Treatment may need review" },
  { score: "Above 5.1", meaning: "High activity. The joints are very painful and require an immediate change in the treatment" },
]

const testFrequencyRows = [
  { situation: "Newly started on methotrexate", frequency: "Every 4 to 6 weeks initially" },
  { situation: "Stable on a conventional DMARD", frequency: "Every 3 months" },
  { situation: "On a biologic or JAK inhibitor", frequency: "Every 3 months" },
  { situation: "Disease in remission, stable treatment", frequency: "Every 6 months" },
]

const faqs = [
  { q: "What blood tests are done for rheumatoid arthritis monitoring?", a: "Doctors commonly recommend ESR and CRP to measure inflammation. A complete blood count checks red and white blood cells, while liver and kidney function tests help make sure medicines are being used safely. Some people may also have rheumatoid factor (RF) and anti-CCP tests during diagnosis or if additional information is needed." },
  { q: "What do ESR and CRP levels mean in rheumatoid arthritis?", a: "Both ESR and CRP measure inflammation in the blood. High levels suggest the disease is active. CRP responds more quickly to recent changes, while ESR gives a broader picture over time. Together, these tests help the doctor understand how active rheumatoid arthritis is and whether treatment needs to be reviewed." },
  { q: "How often should rheumatoid arthritis patients get blood tests?", a: "It depends on the treatment and disease stability. Patients who have recently started on methotrexate may need tests every 4 to 6 weeks initially. Once stable, most patients are tested every 3 months. People who are doing well on treatment may need to have a test every 6 months." },
  { q: "Can rheumatoid arthritis cause joint damage even when I feel fine?", a: "Yes, rheumatoid arthritis can remain active even when there are no symptoms, and everything feels well. Regular blood tests and scans can detect ongoing inflammation before it causes permanent damage." },
  { q: "What is a DAS28 score in rheumatoid arthritis?", a: "The DAS28 score tells us about how active the condition is. The score is based on the number of painful and swollen joints, the blood test reports, and the patient's own health. A score below 2.6 means the condition is under control. A score above 5.1 suggests that the disease is highly active and requires an immediate review of treatment." },
  { q: "Do I need an MRI or X-ray for rheumatoid arthritis follow-up?", a: "No, you do not need an MRI or X-ray at every visit. Doctors often recommend X-rays on the initial visit and then every one to two years to monitor joint damage. Ultrasound is recommended more commonly during flares. The doctor may advise an MRI if they need more detailed information about a particular joint." },
]

const references = [
  "Mayo Clinic. Rheumatoid Arthritis: Diagnosis and Treatment. mayoclinic.org. Updated April 2025.",
  "Cleveland Clinic. Rheumatoid Arthritis. my.clevelandclinic.org. Updated November 2024.",
  "Stanislavsky A, MacManus D, Collins E, et al. Rheumatoid arthritis (musculoskeletal manifestations). Reference article, Radiopaedia.org (Accessed on 16 Jul 2026) https://doi.org/10.53347/rID-12370",
  "Indian Rheumatology Association. IRA Guidelines on Management of Rheumatoid Arthritis. 2019.",
  "CDC. Rheumatoid Arthritis https://www.cdc.gov/arthritis/rheumatoid-arthritis/index.html",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "why-monitoring", label: "Why Does Rheumatoid Arthritis Need Regular Monitoring?" },
  { id: "blood-tests", label: "Blood Tests Your Rheumatologist Will Order" },
  { id: "imaging-tests", label: "Imaging Tests Used in Rheumatoid Arthritis Monitoring" },
  { id: "disease-activity", label: "How Disease Activity Is Measured Over Time" },
  { id: "feeling-better", label: "Feeling Better Is Not the Same as Disease Control" },
  { id: "test-frequency", label: "How Often Will You Need Tests?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "references", label: "Reference" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function BloodTestsMonitoringRA() {
  const [activeSection, setActiveSection] = useState("why-monitoring")

  useEffect(() => {
    document.title = "Rheumatoid Arthritis Blood Tests, Scans, and Ongoing Monitoring | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Blood Tests, Scans, and Ongoing Monitoring</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
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
                  Blood Tests and Monitoring of <span className="whitespace-nowrap">Rheumatoid Arthritis:</span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(22px, 2.9vw, 34px)",
                      lineHeight: 1.2,
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                      marginTop: "0.85rem",
                    }}
                  >
                    Blood Tests, Scans, and Ongoing Monitoring
                  </span>
                </h1>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by Dr. Chaitali Waghmore | Reviewed by Dr. Raghavendra | Last Updated: July 29, 2026
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
                    People with rheumatoid arthritis are often surprised when doctors recommend blood tests and scans frequently. It is common to wonder why monitoring is still needed when symptoms are improving or why the same tests are repeated every few months.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid arthritis can remain active even when pain and stiffness seem under control. Blood tests like ESR, CRP and complete blood count help the doctor identify the disease activity inside the joints. These tests also make sure medicines can be continued safely. Imaging tests like X-rays, ultrasound, and MRI help them identify early joint changes before they become permanent. These results help guide important treatment decisions throughout the course of the condition.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This article explains the blood tests, scans, and monitoring tools used in rheumatoid arthritis, how often they are recommended, and what the results mean.
                  </p>
                </div>

                {/* ── WHY MONITORING ── */}
                <div id="why-monitoring" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Why Does Rheumatoid Arthritis Need Regular Monitoring?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid arthritis can remain active even when there are no symptoms. People with rheumatoid arthritis often notice pain and stiffness. However, the progression of disease activity inside the joints can continue even without these symptoms. Regular check-ups and blood tests help doctors identify joint changes early and prevent long-term joint damage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    To calm the body&rsquo;s defence system, the doctors usually prescribe medicines such as methotrexate, biologics, and JAK inhibitors. These medicines need regular monitoring, as they can affect the liver, blood cells, and the body&apos;s ability to fight infections. Routine blood tests help the doctor detect any problems early, usually before any symptoms appear.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Regular monitoring is not a sign that something has gone wrong. It helps doctors know whether the rheumatoid arthritis is under control or if treatment can continue safely.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── BLOOD TESTS ── */}
                <div id="blood-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Blood Tests Your Rheumatologist Will Order
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Most people with rheumatoid arthritis often become familiar with a small set of blood tests that need to be repeated at almost every appointment. Knowing what each test actually checks will help you understand why these tests are needed.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    ESR and CRP: Measuring Inflammation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatologists commonly recommend ESR and CRP to measure the level of inflammation in the body. These tests are often repeated during every follow-up visit.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    ESR (Erythrocyte Sedimentation Rate) measures how quickly red blood cells settle in a test tube. In active inflammation, these cells clump together and settle down faster than usual.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    CRP (C-reactive protein) is a protein that the liver releases during inflammation. The level of CRP rises and falls more quickly than ESR, which helps doctors identify recent changes in inflammation.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    These tests do not diagnose rheumatoid arthritis. Both these tests help doctors understand how active the disease is at present. If the levels of ESR and CRP remain low for a longer period, it tells the doctor that treatment is effective.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Rheumatoid Factor (RF) and Anti-CCP: What They Mean After Diagnosis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid factor and anti-CCP (Anti-cyclic citrullinated peptides) are the tests that are used to diagnose rheumatoid arthritis. These tests are different from ESR and CRP. Rheumatoid factor(RF) and anti-CCP do not change even with the right treatment. A positive result at a routine follow-up does not mean the disease is getting worse.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    After diagnosis, rheumatoid factor and anti-CCP tests provide additional information about the condition. This helps the doctor plan the long-term treatment accordingly.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Blood Count: Watching for Anaemia and Infection Risk
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A complete blood count (CBC) measures the levels of red blood cells, white blood cells, and platelets. These results help the doctor understand the progression of disease activity. They also help to monitor the effects of treatment on the body.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Anaemia (low red blood cells) is common in people with rheumatoid arthritis. This happens because long-term disease activity can lower the red blood cells in the body. Due to anaemia, people usually feel extremely tired, weak or short of breath. These symptoms occur even when there is no joint pain.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    White blood cells help the body fight against infections. Some medicines used to treat rheumatoid arthritis can lower the level of white blood cells in the body. When this happens, it becomes harder for the body to fight against infections.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Regular blood tests help the doctor detect these changes early. This gives them enough time to adjust the treatment if needed and help prevent complications.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Liver and Kidney Function Tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Methotrexate is a medicine commonly prescribed for people with rheumatoid arthritis. In some people, long-term use of methotrexate can affect how well the liver works. Regular liver function tests help the doctor make sure the medicine is being used safely at the current dose.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Kidney function tests may also be recommended depending on the medicines being used. If the test results are not in the normal range, the doctor may adjust the dose. Sometimes they may stop the medicine until the levels return to normal. These changes are usually not an emergency. In fact, regular monitoring helps prevent problems even before they develop.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Uric Acid: Ruling Out Gout
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Uric acid is a waste product that usually leaves the body through urine. When too much uric acid builds up in the body, it causes sudden and painful swelling in the joints. This condition is known as gout. Sometimes, gout can develop in people with rheumatoid arthritis. In these situations, the doctor may recommend a uric acid test.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If your doctor recommends a uric acid test, it does not mean your diagnosis is incorrect. This test is usually recommended when sudden, severe joint pain and swelling occur. It helps the doctor understand the main reason contributing to these symptoms. See our <Link to="/Gout-overview" style={{ color: "#0f616e", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "3px" }}>Gout overview page</Link> for more.
                  </p>
                </div>

                {/* ── IMAGING TESTS ── */}
                <div id="imaging-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Imaging Tests Used in Rheumatoid Arthritis Monitoring
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Rheumatoid arthritis can gradually affect the joints. Scan and imaging tests help doctors look for changes in the joints over time. They help them to check what is happening inside the joints and how much damage has occurred. Each imaging test provides different information and helps guide treatment.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    X-Rays: Tracking Joint Damage Over Time
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    X-rays help doctors look for any changes in the joints caused by rheumatoid arthritis. They are most commonly used to examine the hands, wrists, and feet. X-rays cannot detect the early changes, but they are useful for monitoring how the joints change.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A baseline X-ray is usually taken when treatment begins. Follow-up X-rays may be recommended every one to two years if the condition remains stable. If a follow-up X-ray shows no new changes compared to the previous one, that is a meaningful result. It means the treatment is helping to protect the joints.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Ultrasound: Seeing Inflammation Before You Feel It
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Ultrasound helps doctors to see if there is any swelling in and around the joints. It helps them detect changes in the joints, sometimes even before a new symptom appears. This allows the doctor to assess how active the condition is in a particular joint.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    It is a painless procedure, and no radiation is used. It is commonly used for initial diagnosis and to monitor the condition during treatment. It can be helpful if a joint suddenly becomes painful or swollen. It helps doctors identify the cause to decide whether any changes to treatment are needed.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    MRI: When More Information Is Needed
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    MRI helps doctors to detect early changes in the joint and surrounding tissues. These early changes are not always visible on the X-rays and ultrasounds.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    MRI is not usually recommended for routine follow-up because it is more expensive and less widely available. A doctor may recommend an MRI if a joint remains painful or swollen. They may also recommend it when they need more information before making any treatment decisions. MRI is available at major hospitals and rheumatology centres in most Indian cities.
                  </p>
                </div>

                {/* ── DISEASE ACTIVITY ── */}
                <div id="disease-activity" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Disease Activity Is Measured Over Time
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors use a scoring system that combines all the information into a single number. This is used to monitor disease activity.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    This score is called DAS28 (Disease Activity Score in 28 joints). It is based on four things: the number of painful joints, the number of swollen joints, the ESR or CRP result, and how the person rates their overall health.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">DAS28 Score</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">What It Means</th>
                        </tr>
                      </thead>
                      <tbody>
                        {das28Rows.map((row) => (
                          <tr key={row.score} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.score}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.meaning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A rising DAS28 score may mean that there is a need to review the treatment. If the score remains low over several visits, it may allow the rheumatologist to gradually reduce certain medicines. By this, doctors assess how active the disease is. It also tells them whether the treatment is effective or if there is a need to change the medicine.
                  </p>
                </div>

                {/* ── FEELING BETTER ── */}
                <div id="feeling-better" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Feeling Better Is Not the Same as Disease Control
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In rheumatoid arthritis, pain and stiffness may not be present all the time. Even when these symptoms are absent, the condition can remain active inside the joints. The symptoms and disease activity do not always match. As a result, ongoing disease activity can continue unnoticed for years. This delay may cause permanent damage, even when the person feels better.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    That is why the doctor recommends blood tests and scans even when symptoms feel manageable. These tests help detect the level of inflammation early. They also help doctors to ensure the treatment is working as expected.
                  </p>
                </div>

                {/* ── TEST FREQUENCY ── */}
                <div id="test-frequency" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Often Will You Need Tests?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The doctor recommends blood tests and scans based on the medicines they prescribe. If new symptoms develop, they may recommend additional tests to find the cause. These tests help check whether the treatment is working effectively. They also help make sure the medicines continue to be used safely.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Situation</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">How Often Are Tests Usually Needed?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testFrequencyRows.map((row) => (
                          <tr key={row.situation} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.situation}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.frequency}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── CONCLUSION ── */}
                <div id="conclusion" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Conclusion
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Regular blood tests and scans are an important part of living with rheumatoid arthritis. They help your rheumatologist make sure the treatment is working and confirm that medicines can be continued safely. They help detect ongoing disease activity before it causes long-term joint damage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    If you are unsure why a particular test has been recommended or have questions about test results, speak with your rheumatologist. Understanding your monitoring schedule and what it is tracking can help you feel more confident about managing rheumatoid arthritis in the long term.
                  </p>
                  <Link
                    to="/book-appointment"
                    className="group"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none" }}
                  >
                    Book a Consultation with Dr Raghavendra H
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

        {/* ═══════════ REFERENCES ═══════════ */}
                <div id="references" data-toc-section style={{ marginTop: "0" }}>
              <h2
                className="text-navy-deep"
                style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
              >
                Reference
              </h2>
              <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {references.map((r, i) => (
                  <li key={i} className="text-[15px] leading-[1.75] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                    {r}
                  </li>
                ))}
              </ul>
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
                      Consultant Rheumatologist for rheumatoid arthritis evaluation and long-term joint care.
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

export default BloodTestsMonitoringRA
