import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const treatmentGoals = [
  "Lowering the pain, redness, and swelling.",
  "Preventing long-term damage to kidneys and heart.",
  "Achieving periods of low or no disease activity.",
  "Reducing the prolonged use of steroids over time.",
  "Maintaining the quality of life.",
  "Being able to carry out daily activities.",
]

const medicineCosts = [
  { medicine: "Hydroxychloroquine", type: "Daily tablet", cost: "Rs 200 to Rs 600" },
  { medicine: "NSAIDs", type: "Tablets", cost: "Rs 100 to Rs 500" },
  { medicine: "Prednisolone (steroid)", type: "Tablets", cost: "Rs 100 to Rs 400" },
  { medicine: "Azathioprine", type: "Tablets", cost: "Rs 500 to Rs 1,500" },
  { medicine: "Mycophenolate mofetil", type: "Tablets", cost: "Rs 1,500 to Rs 4,000" },
  { medicine: "Belimumab (biologic)", type: "Injection or infusion", cost: "Rs 20,000 to Rs 80,000 or more" },
]

const speakToDoctorSigns = [
  "If current medicines are not able to control symptoms or episodes adequately.",
  "If you see new symptoms or existing ones have worsened.",
  "If you see your legs swollen or changes in urine (might be kidney involvement).",
  "If a pregnancy is being planned.",
  "If you are considering starting any complementary or herbal treatment.",
]

const faqs = [
  { q: "Does lupus have a cure?", a: "Answer:  There is no cure for lupus. But with treatment, patients are able to live healthy lives. With lifestyle changes and periodic check-ups, lupus can be controlled long-term. With appropriate care, many patients live full and active lives." },
  { q: "Will I have to take lifelong medicines for my lupus?", a: "Answer: This depends on the disease during the course of its development. Hydroxychloroquine can be taken as long-term protective medicine, even when symptoms are mild. When the symptoms subside, other medicines may be lowered or discontinued. These decisions will be made by a doctor." },
  { q: "Is there a medicine for Lupus in India, and what is the cost of it?", a: "Answer: Yes. Medicines such as hydroxychloroquine, steroids, azathioprine, and mycophenolate mofetil are available in India as affordable generics. Biologics are expensive. The price of belimumab is from Rs 20,000 to Rs 80,000 or more per month. Patients should check with their treating hospital what is covered by the CGHS and/or PMJAY schemes." },
  { q: "Can I try Ayurvedic treatment along with my doctor's prescription?", a: "Answer: Some patients believe that complementary treatments can be a supportive measure for lupus. Talk to your doctor before starting any herbal/Ayurvedic treatment. It can interact with certain herbs." },
  { q: "Is it possible to control lupus without steroids?", a: "Answer: In many patients, the aim is to reduce steroid use over time rather than avoid it entirely. This is achieved by using immunosuppressants and Hydroxychloroquine. Steroids are still needed in moderate or serious episodes or in organ involvement. Your doctor will always try to reduce the amount of steroids." },
  { q: "How are immunosuppressants and biologics different in lupus treatment?", a: "Answer: Immunosuppressants calm the overactive immune system. They are used earlier in treatment at much lower cost. Biologics are more targeted. They block specific proteins driving lupus activity. And they are reserved for patients whose condition has not responded adequately to standard medicines. Both are used under close rheumatology supervision." },
]

const references = [
  { text: "Lupus Foundation of America. New ACR Treatment Guidelines for Systemic Lupus Erythematosus. 2024. ", url: "https://www.lupus.org/news/american-college-of-rheumatology-new-systemic-lupus-erythematosus-guideline" },
  { text: "EULAR 2023 Recommendations for the Management of Systemic Lupus Erythematosus. PubMed Central. 2024. ", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11082770/" },
  { text: "Mayo Clinic. Lupus Diagnosis and Treatment. 2025. ", url: "https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790" },
  { text: "Cleveland Clinic. Lupus Treatment. 2025. ", url: "https://my.clevelandclinic.org/health/diseases/4875-lupus" },
  { text: "Joshi's Clinic of Rheumatology. Lupus Treatment Cost in India. 2026. ", url: "https://joshisclinicofrheumatology.com/lupus-treatment-cost-india/" },
  { text: "PubMed Central. Current Cell Therapies for Systemic Lupus Erythematosus. 2024. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11386214/" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "goals", label: "What Are the Goals of Lupus Treatment?" },
  { id: "approach", label: "How Treatment Is Approached" },
  { id: "medications", label: "Medications Used to Treat Lupus" },
  { id: "lifestyle", label: "Physiotherapy, Lifestyle and Sun Protection" },
  { id: "complementary", label: "Complementary and Traditional Treatments" },
  { id: "advanced", label: "Advanced Procedures - When They Are Needed" },
  { id: "monitoring", label: "Monitoring Your Treatment" },
  { id: "speak-to-doctor", label: "When to Speak to a Doctor About Treatment" },
  { id: "build-plan", label: "Ready to Build Your Treatment Plan? Speak to a Rheumatologist" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LupusTreatmentOptions() {
  const [activeSection, setActiveSection] = useState("goals")

  useEffect(() => {
    document.title = "Lupus (SLE) Treatment Options - Medications, Therapies and What to Expect | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Lupus Treatment Options</span>
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
                  Lupus (SLE):
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
                    Treatment Options: Medications, Therapies and What to Expect
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
                    When people are diagnosed with lupus, all they want to know is what can be done about the disease. The reply is more comforting than it is anticipated. With the right treatment, Lupus patients can enjoy full, active lives. Fortunately, treatment for lupus has improved significantly in the last 10 years. It has become more targeted and effective than in the past.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Lupus is a disease that affects each patient uniquely. It is hard to say exactly what everyone will need to treat. The process is individualised according to the organs affected, disease activity, and it can vary as the disease evolves. This page covers all the treatment options available, ranging from the initially prescribed to advanced treatments. Everything is explained on this page in detail, along with the associated costs of the treatment in India.
                  </p>
                </div>

                {/* ── GOALS ── */}
                <div id="goals" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Are the Goals of Lupus Treatment?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A doctor's treatment choices are influenced by a clear set of goals:
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {treatmentGoals.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Achievement of these goals varies from patient to patient. It depends on disease activity and organ involvement.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── APPROACH ── */}
                <div id="approach" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Treatment Is Approached
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The treatment of Lupus is personalised. Someone with lupus involving the skin and joints will need different treatment than someone whose kidneys are affected. Usually the treatment begins with the simplest, most effective medications. It's also modified as it progresses.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    As per the recommendations of EULAR 2023, early treatment to avoid organ damage is a priority. A doctor reviews the plan on a regular basis. All decisions are made after discussing with the patient.
                  </p>
                </div>

                {/* ── MEDICATIONS ── */}
                <div id="medications" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Medications Used to Treat Lupus
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As an autoimmune disease, lupus treatment is based primarily on medicines. They are used at different stages. The use depends on how active the disease is and which organs are affected.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    1. Hydroxychloroquine - The Foundation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Hydroxychloroquine is an antimalarial medicine. It has become the cornerstone of lupus treatment. It is recommended for nearly all lupus patients. Regardless of the severity of the condition, it reduces lupus episodes. It shields organs in the long term and enhances long-lasting survival.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As per ACR guidelines, it is recommended for all lupus patients, unless there is a specific reason not to. It is one of the most available medicines for lupus. It is easily available in India in an affordable, generic tablet form.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    2. NSAIDs - For Pain and Mild Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    NSAIDs (non-steroidal anti-inflammatory drugs) can help manage joint pain, swelling, and fever during mild episodes. They include ibuprofen and naproxen. They are widely available in India as low-cost generics. They are used for short-term symptom relief. They are not suitable for patients with kidney involvement. It is better if a doctor confirms whether they are appropriate.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    3. Steroids - For Controlling Flares
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Steroids like prednisolone can quickly control the swelling and redness during an episode. They can be effective but are always used at the minimum dose and duration. Lowering dependence on steroids is one of the main objectives of lupus treatment. Newer medications allow this to be possible. The product is accessible as affordable generics in India.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    4. Immunosuppressants - For Moderate to Severe Disease
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Immunosuppressants are used when lupus damages organs such as the kidneys. These medicines help reduce the hyperactive immune system responsible for organ damage. Immunosuppressants include azathioprine, mycophenolate mofetil, or cyclophosphamide. The standard treatment for any lupus with kidney involvement is mycophenolate mofetil. It is available in India. These drugs are used with careful monitoring of the blood and urine.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    5. Biologics - When Standard Medicines Are Not Enough
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Biologics are the new medications that help block certain proteins in the immune system. The two main biologics approved to treat lupus are belimumab and anifrolumab. The latter was recently approved. Biologics are given as injections or infusions. They are recommended when other treatments fail to control the condition. These drugs for the treatment of lupus are much more costly.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Cost of Medicines in India
                  </h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Medicine</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Type</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate Monthly Cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {medicineCosts.map((row) => (
                          <tr key={row.medicine} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.medicine}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.type}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These costs are approximate and vary by city, hospital, and brand. Generic versions are available for most medicines. Patients who fall under CGHS coverage as well as PMJAY patient benefits should confirm their coverage in the treating hospital.
                  </p>
                </div>

                {/* ── LIFESTYLE ── */}
                <div id="lifestyle" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Physiotherapy, Lifestyle and Sun Protection
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The medicines work best with regular daily routines. Sun protection is one of the most consistent lifestyle measures to control lupus episodes. Sunscreen, protective clothing and avoiding peak hours of 10 am to 4 pm can make a significant difference. Gentle exercise, a diet including Indian staples like turmeric, palak, and methi, and managing stress all support treatment outcomes.
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
                    Many patients in India choose Ayurveda, Panchakarma, or homeopathy along with conventional medicine. Clinical data supporting these methods in lupus is currently limited. However, there are some observations of the benefits of these approaches for general well-being. The first step is to tell your doctor before using anything new. Some herbal treatments might interact with other lupus medicines.
                  </p>
                </div>

                {/* ── ADVANCED PROCEDURES ── */}
                <div id="advanced" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Advanced Procedures - When They Are Needed
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    For most patients, medicines manage lupus well over the long term. In cases where lupus has severely damaged the kidneys despite all available medicines, more advanced interventions may be considered. These include a kidney biopsy (a small tissue sample to assess kidney damage and guide treatment), dialysis (a machine that performs the work of damaged kidneys), and in the most severe cases, a kidney transplant. These are last-resort options managed by a doctor working closely with a specialist.
                  </p>
                </div>

                {/* ── MONITORING ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Monitoring Your Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Treatment for Lupus needs to be monitored regularly to be effective. A blood test is run, followed by your doctor. This is to check blood markers such as ANA (a measure of immune activity), anti-dsDNA (a specific marker for lupus), ESR, and CRP (measures of inflammation), as well as urine tests that monitor and check when the kidneys are showing signs of involvement early on. Adjustments may also be based on a simple questionnaire called SLEDAI (Systemic Lupus Erythematosus Disease Activity Index). This is used to measure the activity of the disease. Monitoring is proactive care.
                  </p>
                </div>

                {/* ── SPEAK TO DOCTOR ── */}
                <div id="speak-to-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to Speak to a Doctor About Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Consider seeing your doctor in the following situations:
                  </p>
                  <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {speakToDoctorSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── BUILD PLAN ── */}
                <div id="build-plan" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Ready to Build Your Treatment Plan? Speak to a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Lupus can be controlled, and the right treatment can make a difference. Your doctor will evaluate you. Based on your clinical history, a treatment strategy will be given suited to your circumstances, disease stage, and lifestyle. The first step towards specialist care is the most crucial.
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
                  <p className="text-[14px] leading-[1.7] italic" style={{ color: "#5E5E5E", marginBottom: "2.5rem" }}>
                    This content has been written for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor or healthcare provider if you have questions about a medical condition or treatment plan.
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
                      Consultant Rheumatologist for lupus evaluation and long-term care.
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

export default LupusTreatmentOptions
