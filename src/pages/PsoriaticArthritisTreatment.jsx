import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const treatmentCosts = [
  { option: "NSAIDs (per month)", cost: "Rs 100–500" },
  { option: "DMARDs (per month)", cost: "Rs 200–1,200" },
  { option: "Biologics (per month)", cost: "Rs 15,000–70,000 or more" },
  { option: "JAK inhibitors (per month)", cost: "Rs 8,000–20,000" },
  { option: "Apremilast (per month)", cost: "Rs 10,000–20,000" },
  { option: "Corticosteroid Joint Injection (per session)", cost: "Rs 500–2,000" },
  { option: "Physiotherapy (per session)", cost: "Rs 300–2,500" },
  { option: "Joint replacement surgery", cost: "Rs 1,50,000–3,50,000" },
]

const faqs = [
  { q: "Is there a cure for psoriatic arthritis?", a: "No, there is no cure for psoriatic arthritis. However, with the right combination of medicines, physiotherapy, and regular monitoring, most people manage their symptoms well." },
  { q: "Do I need to take medicines lifelong for psoriatic arthritis?", a: "Yes, but this depends on how the disease behaves over time. Some people need medicines consistently to keep symptoms and disease activity under control. Others may have periods of low activity where a rheumatologist reduces or adjusts the dose. Regular monitoring guides all of these decisions." },
  { q: "Are biologics available in India, and how much do they cost?", a: "Yes, biologics, including etanercept, adalimumab, secukinumab, and ustekinumab, are available in India. Monthly costs usually range from approximately Rs 15,000 to Rs 70,000 or more." },
  { q: "Can methotrexate treat both the skin and joint symptoms of psoriatic arthritis?", a: "Yes, methotrexate can help treat both joint inflammation and skin psoriasis simultaneously. It is widely available as a low-cost generic in India and is often the first conventional DMARD your doctor will prescribe when NSAIDs are no longer sufficient." },
  { q: "Can physiotherapy alone manage psoriatic arthritis without medicines?", a: "Physiotherapy is an important part of treatment, but it is not sufficient on its own. It usually works best when combined with appropriate medicines to control the underlying inflammation. Staying active consistently is one of the most important things for people with psoriatic arthritis to protect joint function over time." },
  { q: "Is surgery ever needed for psoriatic arthritis?", a: "Surgery is rarely needed. It is often considered when a joint has been severely damaged and has no treatment to improve it. Joint replacement for the hip or knee is the most common procedure when required. Most people with psoriatic arthritis never reach the point where surgery is necessary with appropriate early treatment." },
]

const references = [
  { text: "Arthritis Foundation. Treatment Options for Psoriatic Arthritis. ", url: "https://www.arthritis.org/health-wellness/treatment/treatment-plan/disease-management/treatment-options-for-psoriatic-arthritis" },
  { text: "Mayo Clinic. Psoriatic Arthritis Diagnosis and Treatment. 2025. ", url: "https://www.mayoclinic.org/diseases-conditions/psoriatic-arthritis/diagnosis-treatment/drc-20354081" },
  { text: "PMC. Biologics Use in Indian Psoriasis Patients. 2016. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5134162/" },
  { text: "GoodRx. Psoriatic Arthritis Medications and Treatment Options. 2025. ", url: "https://www.goodrx.com/conditions/psoriatic-arthritis/psoriatic-arthritis-treatment" },
  { text: "Fraenkel L et al. ACR Guideline for the Treatment of Psoriatic Arthritis. Arthritis and Rheumatology. 2021. ", url: "https://pubmed.ncbi.nlm.nih.gov/34709700/" },
  { text: "WebMD. Psoriatic Arthritis Treatment. 2024. ", url: "https://www.webmd.com/arthritis/psoriatic-arthritis/psoriatic-arthritis-treatment" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "goals", label: "What Are the Goals of Psoriatic Arthritis Treatment?" },
  { id: "approach", label: "How Treatment Is Approached" },
  { id: "medications", label: "Medications Used to Treat Psoriatic Arthritis" },
  { id: "injections", label: "Corticosteroid Joint Injections" },
  { id: "physiotherapy", label: "Physiotherapy and Exercise" },
  { id: "skin-nail", label: "Skin and Nail Treatment" },
  { id: "surgery", label: "When Does a Doctor Recommend Surgery?" },
  { id: "costs", label: "Approximate Treatment Costs in India" },
  { id: "monitoring", label: "Monitoring Your Treatment" },
  { id: "speak-to-doctor", label: "When to Speak to a Rheumatologist About Treatment" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function PsoriaticArthritisTreatment() {
  const [activeSection, setActiveSection] = useState("goals")

  useEffect(() => {
    document.title = "Psoriatic Arthritis Treatment: Medications, Therapies and What to Expect | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Psoriatic Arthritis Treatment</span>
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
                  Psoriatic Arthritis Treatment:
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
                    Medications, Therapies and What to Expect
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Shafali Nagpal</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 31, 2026
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
                    Psoriatic arthritis affects both the skin and joints. Treatment mainly focuses on controlling pain, skin symptoms and protecting the joints from long-term damage. Medicines are prescribed based on the severity of symptoms and how active the condition is. Physiotherapy and lifestyle changes are also needed to support the long-term treatment.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    There is no single treatment that works for everyone. Some may respond well with medicines alone, while others may require additional support to manage pain and skin symptoms. Surgery is usually considered when other treatments do not provide enough relief any longer or severe joint damage has occurred.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Psoriatic arthritis is a long-term condition that requires regular monitoring to assess how well the treatment is working and whether any changes are needed. In this guide, you will learn about all treatment options available for psoriatic arthritis in India: medicines, injections, physiotherapy, and when surgery is considered.
                  </p>
                </div>

                {/* ── GOALS ── */}
                <div id="goals" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Are the Goals of Psoriatic Arthritis Treatment?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis treatment mainly aims to reduce pain, stiffness, and swelling and help people stay active in their daily lives. Treatment can also help control psoriasis affecting the skin and nails. It is also important to prevent or slow down permanent joint damage before it affects quality of life.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The treatment plan for psoriatic arthritis may vary from person to person. Doctors usually decide on the most suitable treatment based on how severe the condition is and which parts of the body are affected.
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
                    Psoriatic arthritis treatment is not the same for everyone. It often affects both skin and joints, therefore, rheumatologists and dermatologists usually work together to plan treatment. Doctors plan the treatment based on the severity of the condition and how much the disease has progressed.
                  </p>
                  <ol className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    <li className="text-[17px] leading-[1.8] text-navy-deep pl-1">
                      Treatment often begins with medicines that help reduce pain and stiffness and also calm the overactive immune system. If these medicines do not provide enough relief, doctors may recommend newer treatment options like biologics or JAK inhibitors.
                    </li>
                    <li className="text-[17px] leading-[1.8] text-navy-deep pl-1">
                      Physiotherapy and lifestyle changes are also recommended to help improve movement and support long-term control of symptoms.
                    </li>
                  </ol>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Doctors often review and adjust the treatment regularly based on the level of disease activity. The American College of Rheumatology (ACR) recommends starting treatment early and continuing it consistently to help prevent joint damage.
                  </p>
                </div>

                {/* ── MEDICATIONS ── */}
                <div id="medications" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Medications Used to Treat Psoriatic Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Medicines are the main treatment option for people with psoriatic arthritis. Doctors prescribe medicines based on how severe the symptoms are, how much the disease has progressed and which part of the body is affected.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    NSAIDs: The First Step
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors often start psoriatic arthritis treatment with pain-relieving medicines called NSAIDs (non-steroidal anti-inflammatory drugs). NSAIDs include ibuprofen, naproxen, and diclofenac, which help relieve pain.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    People often find these medicines effective for controlling day-to-day symptoms. However, these medicines cannot slow down disease progression or protect joints from further damage. NSAIDs are widely available in India and are generally affordable.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Conventional DMARDs: Slowing the Disease
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors also prescribe medicines called DMARDs (disease-modifying medicines) to slow down the progression of disease. DMARDs such as methotrexate, sulfasalazine, and leflunomide calm the overactive immune system and prevent joint damage. Methotrexate can help manage both joint symptoms and skin psoriasis. For people living with both conditions, it is often a good treatment option. These medicines usually take around 6 to 12 weeks to show their full effect. DMARDs are generally available as affordable generic medicines across India.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Biologics: When DMARDs Are Not Enough
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors recommend newer medicines called Biologics when the DMARDs do not provide enough relief. These medicines target specific parts of the immune system to help control both joint and skin symptoms. Several biologics are available in India, including adalimumab, secukinumab, and ustekinumab. Lower-cost biologics are also available in India. The doctor will recommend the most suitable option based on the symptoms and long-term treatment plan.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    JAK Inhibitors: The Newest Option
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Newer medicines called JAK inhibitors are often recommended by doctors when biologics fail to control the disease or are not suitable. Tofacitinib and Upadacitinib are common JAK inhibitors available in tablet form. The doctor will recommend these medicines based on the severity of the symptoms, previous treatment and overall health.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Apremilast: A Targeted Oral Option
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Apremilast (Otezla) is a medicine that helps reduce joint pain and swelling in people with psoriatic arthritis. Doctors may recommend it for people who cannot take conventional DMARDs, when other medicines are not suitable or when people prefer tablets over injections. It is available in India but is generally more expensive than conventional DMARDs.
                  </p>
                </div>

                {/* ── INJECTIONS ── */}
                <div id="injections" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Corticosteroid Joint Injections
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors may recommend a steroid injection when one or a few joints become particularly painful and swollen. The medicine is injected directly into the affected joint to help reduce pain and swelling quickly. The procedure usually takes only a few minutes and is performed in a clinic or hospital.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Doctors use a local anaesthetic to numb the area before giving the injection. Although steroid injections can provide rapid relief, they are not used as a long-term treatment for psoriatic arthritis. In India, the cost of a steroid injection is approximately Rs 500 to Rs 2,000 per joint, depending on the hospital or clinic.
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
                    Physiotherapy is an important part of psoriatic arthritis treatment. It helps reduce stiffness, improve joint movement, and make everyday activities more comfortable. It can also help protect the joints and improve muscle strength over time.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A physiotherapist will recommend exercises based on the patient's symptoms and physical ability. Gentle stretching and strengthening exercises are usually recommended. Regular gentle exercise, including walking, swimming and yoga, helps improve flexibility and reduce stiffness. Regular movement is important, even when symptoms are mild or well controlled. In India, physiotherapy usually costs around ₹300 to ₹2,500 per session.
                  </p>
                </div>

                {/* ── SKIN AND NAIL ── */}
                <div id="skin-nail" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Skin and Nail Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis can affect both the skin and the joints, so treatment often involves managing both together. Rheumatologists and dermatologists may work together to plan the most suitable treatment. Doctors may recommend topical creams, light therapy (phototherapy), or medicines that help control skin psoriasis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The treatment is recommended based on how severe the skin symptoms are. Many biologic medicines, which are used to treat psoriatic arthritis, can improve both joint symptoms and skin psoriasis at the same time. This means that a single treatment option may help manage multiple symptoms of the condition.
                  </p>
                </div>

                {/* ── SURGERY ── */}
                <div id="surgery" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Does a Doctor Recommend Surgery?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Surgery is usually considered when medicines and other treatment options cannot control symptoms or prevent joint damage. Doctors may recommend surgery if severe joint damage affects movement, causes persistent pain, or makes everyday activities difficult.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A rheumatologist and orthopaedic surgeon will decide whether surgery is the most appropriate option based on the condition of the affected joint. Surgery is generally recommended only after other treatment options have been fully explored.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In India, hip and knee replacement surgery typically costs between Rs 1.5 lakh and Rs 3.5 lakh per joint, depending on the hospital and city.
                  </p>
                </div>

                {/* ── COSTS ── */}
                <div id="costs" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Approximate Treatment Costs in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The treatment cost for psoriatic arthritis may vary depending on the medicines prescribed, how severe the condition is and what joints are affected. Here is the approximate cost of the treatment.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Treatment Option</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate Cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {treatmentCosts.map((row) => (
                          <tr key={row.option} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.option}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The costs mentioned above are approximate and may vary depending on the city, hospital, and treatment centre. Government hospitals and health schemes such as CGHS and PM-JAY may reduce treatment costs for eligible patients.
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
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis is a long-term condition, so regular follow-up appointments are an important part of treatment. Monitoring helps doctors check whether the medicines are working, whether inflammation is under control, and whether treatment needs to be adjusted over time.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors may recommend blood tests such as ESR and CRP to look for inflammation in the body. If medicines such as methotrexate are prescribed, liver function tests may also be recommended to monitor their safety. Imaging tests may be performed periodically to check for any changes in the joints.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The doctor may also use simple scoring tools such as DAPSA (Disease Activity Index for Psoriatic Arthritis). This is a simple questionnaire to understand how active the condition is and how well treatment is working. These tools include symptoms, number of painful joints, and blood test results to calculate a score. Regular monitoring is a routine part of psoriatic arthritis care and helps doctors make treatment decisions before complications develop.
                  </p>
                </div>

                {/* ── SPEAK TO DOCTOR ── */}
                <div id="speak-to-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to Speak to a Rheumatologist About Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    See a rheumatologist if your joint pain, stiffness, skin symptoms or nail changes are not improving even after taking medicine regularly. If you are planning a pregnancy or are considering herbal or complementary therapies, discuss them with your doctor before making any changes to your treatment plan. Regular treatment reviews help ensure that psoriatic arthritis is under control and that your medicines are working efficiently.
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

export default PsoriaticArthritisTreatment
