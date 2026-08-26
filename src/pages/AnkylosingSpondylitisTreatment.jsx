import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const treatmentApproaches = [
  "Initiate with medicines: NSAIDs are the first-line treatment.",
  "Adjust or add to the strength of medications as necessary, depending on response.",
  "Combine medicines and physiotherapy.",
  "Check and modify the treatments from the rheumatologist regularly.",
]

const advancedProcedureTriggers = [
  "Pain and stiffness begin bothering you despite being on medicine and physiotherapy.",
  "A joint (usually the hip) is very damaged and impairs the use in daily activities.",
  "The spine has fused in a painful or extremely hunched forward posture. It also impacts the quality of life.",
  "Weakness, numbness, or lack of function is due to nerve compression.",
]

const speakToDoctorReasons = [
  "If current medicines are not effectively relieving pain or stiffness.",
  "New or worsening symptoms are evident.",
  "Current medicines have side effects that are impinging on their lives.",
  "A pregnancy is being planned, and medications need to be adjusted.",
  "Thinking of beginning or ending any complementary treatment.",
]

const treatmentCosts = [
  { type: "NSAIDs", examples: "Ibuprofen, Naproxen, Diclofenac", cost: "Rs 200 to Rs 800", availability: "Generic and branded, widely available" },
  { type: "Sulfasalazine", examples: "Saaz, Sulfasalazine generic", cost: "Rs 300 to Rs 1,000", availability: "Generic, widely available" },
  { type: "Biologics (Originator)", examples: "Adalimumab, Etanercept, Infliximab, Secukinumab", cost: "Rs 15,000 to Rs 70,000 or more", availability: "Injection or infusion, available at major hospitals" },
  { type: "Biologics (Biosimilar)", examples: "Biosimilar Adalimumab, Biosimilar Etanercept", cost: "Rs 8,000 to Rs 25,000", availability: "Injection, available in India, more affordable" },
  { type: "JAK Inhibitors", examples: "Tofacitinib", cost: "Rs 8,000 to Rs 20,000", availability: "Oral tablet, available in India" },
  { type: "Physiotherapy Sessions", examples: "Hospital or clinic-based", cost: "Rs 500 to Rs 2,000 per session", availability: "Available at physiotherapy clinics across India" },
  { type: "Hip-Back Joint Injection", examples: "Steroid injection under imaging guidance", cost: "Rs 3,000 to Rs 10,000 per procedure", availability: "Available at major hospitals and pain clinics" },
  { type: "Hip Replacement Surgery", examples: "Total hip arthroplasty", cost: "Rs 1.5 lakh to Rs 3.5 lakh per joint", availability: "Available at major hospitals across India" },
]

const faqs = [
  { q: "Can ankylosing spondylitis be cured?", a: "Answer: There is no cure at this time. Most people can live an active life with medicines, physiotherapy, and regular monitoring. Treatment early in the disease can result in better long-term outcomes." },
  { q: "Will I need to take lifelong medicines for ankylosing spondylitis?", a: "Answer: This depends on the nature of the disease over the course of time. Some patients require regular treatment with drugs. Others may be less active in the treatment period. In such cases, your rheumatologist may decrease the amount of medication or change the treatment." },
  { q: "How are NSAIDs and biologics different?", a: "Answer: NSAIDs lower the pain and the swelling. They are the first line of treatment. Biologics act on specific proteins that cause swelling and pain. They are used when NSAIDs have not provided adequate relief." },
  { q: "Can I get biologics in India, and what are their prices?", a: "Answer: Yes. The cost of biologics is between Rs 15,000 and Rs 70,000 or above per month. India-approved biosimilar versions are also approved at a much lower price. But you must discuss it with your rheumatologist." },
  { q: "Is physiotherapy enough to treat ankylosing spondylitis?", a: "Answer: Physiotherapy can be vital, but not adequate in moderate to severe disease. It's most effective when used in combination with a medication. Regular activity is a cornerstone of a patient's treatment." },
  { q: "Is it safe to use Ayurvedic treatment along with medicine?", a: "Answer: Complementary treatments may be beneficial to some patients. However, it is important to tell your rheumatologist when starting new treatments. The reason being that some medications may interact with the medications prescribed." },
]

const references = [
  { text: "Ward MM et al. 2019 Update of the ACR Recommendations for the Treatment of Ankylosing Spondylitis. Arthritis and Rheumatology. 2019. ", url: "https://rheumatology.org" },
  { text: "Spondylitis Association of America. Medications Used to Treat Ankylosing Spondylitis. 2024. ", url: "https://spondylitis.org/about-spondylitis/treatment-information/medications/" },
  { text: "Singhal A et al. Biologics Use in Asian Indian Patients with Ankylosing Spondylitis. Journal of Clinical and Diagnostic Research. 2016. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5020287/" },
  { text: "Bali O, Singla S. Cost of Illness in Ankylosing Spondylitis in India. Sage Journals. 2024. ", url: "https://journals.sagepub.com/doi/10.1177/09733698241239709" },
  { text: "Mayo Clinic. Ankylosing Spondylitis - Diagnosis and Treatment. 2025. ", url: "https://www.mayoclinic.org/diseases-conditions/ankylosing-spondylitis/diagnosis-treatment/drc-20354813" },
  { text: "NHS UK. Ankylosing Spondylitis - Treatment. ", url: "https://www.nhs.uk/conditions/ankylosing-spondylitis/treatment/" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "goals", label: "Goals and Approaches to the Treatment" },
  { id: "medications", label: "Medications Used to Treat Ankylosing Spondylitis" },
  { id: "physiotherapy", label: "Physiotherapy and Exercise" },
  { id: "advanced-procedures", label: "When Advanced Procedures or Surgery May Be Required" },
  { id: "complementary", label: "Complementary and Traditional Treatments" },
  { id: "monitoring", label: "Monitoring Treatment Progress" },
  { id: "costs", label: "Cost of Ankylosing Spondylitis Treatment in India" },
  { id: "speak-to-doctor", label: "When to Speak to a Rheumatologist?" },
  { id: "ready-to-explore", label: "Ready to Explore Treatment Options?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function AnkylosingSpondylitisTreatment() {
  const [activeSection, setActiveSection] = useState("goals")

  useEffect(() => {
    document.title = "Ankylosing Spondylitis Treatment: Medications, Therapies, and What to Expect | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Ankylosing Spondylitis Treatment</span>
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
                  Ankylosing Spondylitis:
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
                    Treatment: Medications, Therapies, and What to Expect
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
                    It can be a challenging statement to listen to: "There is no cure for Ankylosing Spondylitis". However, with the proper treatment, ankylosing spondylitis can be managed effectively. They are able to live full lives and remain active. There are various treatment options. This involves medications, physical therapy, and routine monitoring. The plan changes over time as the disease and the person's needs evolve.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Knowing about each treatment option helps patients discuss their concerns with the doctor and actively work with them regarding the condition as a whole. This page discusses all ankylosing spondylitis treatments in easy-to-understand terms, starting with initial medications and advancing to the full spectrum of other options.
                  </p>
                </div>

                {/* ── GOALS ── */}
                <div id="goals" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Goals and Approaches to the Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The primary aim of ankylosing spondylitis treatment is to ease symptoms of pain and stiffness and to slow the progression of the condition. This will allow the spine to remain free to move, and you will be able to carry on with your daily routine.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    The following approaches are used for treating ankylosing spondylitis:
                  </p>
                  <ul className="space-y-2 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {treatmentApproaches.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The body reacts differently. Treatment is not fixed. It changes according to the extent of disease.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── MEDICATIONS ── */}
                <div id="medications" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Medications Used to Treat Ankylosing Spondylitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Medicines are given at various phases throughout the disease. Based on the level of activity of the disease and the affected body parts, it can vary.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    NSAIDs - The First Step
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    NSAIDs (non-steroidal anti-inflammatory drugs) are the initial medicines advised for ankylosing spondylitis. They help reduce pain and stiffness. These include Ibuprofen, Naproxen, and Diclofenac. They are usually widely available in India at a lower cost. They are the preferred first-line therapy suggested by rheumatologists globally.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Sulfasalazine - For Joint Involvement Beyond the Spine
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    If the knees, ankles, and hips are involved along with the back, then sulfasalazine will be considered. It is a disease-modifying medicine that lowers the swelling and irritation. It is a generic, cost-effective drug available throughout India.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Biologics - When NSAIDs Are Not Enough
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    If NSAIDs cannot control symptoms properly, then doctors usually suggest biologics. These medicines act against the immune system proteins causing inflammation. These medications are injected or infused. However, the less expensive versions can be considered with your doctor's advice.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    JAK Inhibitors - The Newest Option
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    JAK inhibitors are the latest generation of medicines for ankylosing spondylitis. They are taken orally in tablet form, unlike injections (biologics). They are used when biologic therapy has not been effective, and will be determined by a rheumatologist.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These medicines must be taken only under your doctor's prescription.
                  </p>
                </div>

                {/* ── PHYSIOTHERAPY ── */}
                <div id="physiotherapy" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Physiotherapy and Exercise
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sometimes, medications alone do not help. Physiotherapy is a necessary component of treatment. It helps loosen the stiffness and improve posture. It also prevents the spine from curving in a bent forward position.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Patients will be taught breathing exercises, posture training, stretches, and strengthening exercises by a physiotherapist. Swimming, yoga-based stretching, and walking are suitable exercises for Indian patients. It is important to keep the exercise program going even when you don't have a lot of pain.
                  </p>
                </div>

                {/* ── ADVANCED PROCEDURES ── */}
                <div id="advanced-procedures" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Advanced Procedures or Surgery May Be Required
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Medicines and physiotherapy help manage ankylosing spondylitis in the long term for most people. However, the disease may advance to the extent that further measures need to be taken. Advanced procedures or surgery will generally be considered by a doctor when:
                  </p>
                  <ul className="space-y-2 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {advancedProcedureTriggers.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    At this point, several options become available: steroid injections into the hip-back joint, which relieve pain at the targeted area, spinal osteotomy to correct a severe back joint deformity, and hip replacement surgery for cases of a damaged joint. These are specialist interventions.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    They should only be considered by a rheumatologist or a spine specialist following a thorough assessment of medical and physiotherapy interventions. Each of these procedures is described in detail on a separate page.
                  </p>
                </div>

                {/* ── COMPLEMENTARY ── */}
                <div id="complementary" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Complementary and Traditional Treatments
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In India, many patients take Ayurveda, Panchakarma, or Homeopathy medicine along with conventional medicine. These are specific treatments, with little or no clinical evidence. But some ankylosing spondylitis patients experience relief from their symptoms. Some preparations can interact with prescribed treatments. In such cases, the rheumatologist should be told of any complementary treatment.
                  </p>
                </div>

                {/* ── MONITORING ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Monitoring Treatment Progress
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Treatment needs to be reviewed regularly. At follow-up visits, a blood test will check for blood markers such as ESR and CRP. Imaging may be carried out intermittently by a rheumatologist. Doctors and patients can monitor the level of activity of symptoms. It is done using a self-assessment instrument called BASDAI (Bath Ankylosing Spondylitis Disease Activity Index). If treatment is not effective, the treatment plan is modified. This is normal and to be expected.
                  </p>
                </div>

                {/* ── COSTS ── */}
                <div id="costs" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Cost of Ankylosing Spondylitis Treatment in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Depending on the hospital, medicine, and the city, treatment costs differ. The table below provides a general cost range. It would assist patients and caregivers with planning. Please check the current price with the rheumatologist or pharmacist, since prices are subject to change.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[720px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Treatment Type</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Examples</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate Monthly Cost in India</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Available As</th>
                        </tr>
                      </thead>
                      <tbody>
                        {treatmentCosts.map((row, i) => (
                          <tr key={i} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.type}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.examples}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.availability}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These are approximate price ranges for the treatment options of ankylosing spondylitis. The costs may vary according to city, hospital, and insurance coverage. Always confirm with your rheumatologist or pharmacist about the same.
                  </p>
                </div>

                {/* ── SPEAK TO DOCTOR ── */}
                <div id="speak-to-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to Speak to a Rheumatologist?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Consider reaching out to a rheumatologist if any of the following situations apply:
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {speakToDoctorReasons.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                </div>

                {/* ── READY TO EXPLORE ── */}
                <div id="ready-to-explore" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Ready to Explore Treatment Options? Speak to a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Ankylosing spondylitis can be managed, and the correct treatment regimen can make a difference. A rheumatologist will evaluate the entire situation and create a course of treatment that is personalised to the individual, the stage of the disease, and lifestyle.
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
                    Disclaimer
                  </h2>
                  <p className="text-[14px] leading-[1.7] italic" style={{ color: "#5E5E5E", marginBottom: "2.5rem" }}>
                    This content is for informational purposes only and is not a substitute for professional medical advice. Always consult a qualified rheumatologist for questions about a medical condition or treatment plan.
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
                      Consultant Rheumatologist for ankylosing spondylitis evaluation and long-term joint care.
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

export default AnkylosingSpondylitisTreatment
