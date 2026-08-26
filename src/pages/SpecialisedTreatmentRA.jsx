import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const surgeryConditions = [
  "Pain in one or two joints that hasn't eased, though medicines were taken.",
  "Difficulty forming a tight grip or visible deformity in the hands.",
  "Walking, climbing stairs, or managing basic self-care became harder.",
  "Even when blood tests look stable, the joint scans show damage getting worse.",
]

const synovectomyRecovery = [
  "Office workers usually return to their routine in about 4 weeks.",
  "In workplaces that require more physical work, recovery may take 8 to 10 weeks.",
]

const replacementJoints = [
  "Larger joints like the knee and hip",
  "Smaller ones like the shoulder, elbow and finger knuckles",
]

const replacementCosts = [
  { label: "Knee replacement:", detail: "₹1.5 to 3 lakh (government hospitals); ₹3–6 lakh (private hospitals)" },
  { label: "Hip replacement:", detail: "₹2 to 5 lakh" },
  { label: "Finger joint replacement:", detail: "₹70,000 to ₹2 lakh" },
]

const comparisonRows = [
  { procedure: "Synovectomy", use: "Reduces swelling in early-stage joint", stay: "1–2 days", cost: "₹50,000 – ₹1,50,000" },
  { procedure: "Tendon repair", use: "Restores hand and wrist function", stay: "1–2 days", cost: "₹70,000 – ₹1,50,000" },
  { procedure: "Joint fusion", use: "Stabilises small or unstable joints", stay: "2–3 days", cost: "₹1,00,000 – ₹2,50,000" },
  { procedure: "Joint replacement", use: "Replaces severely damaged joint", stay: "3–5 days", cost: "₹1.5 lakh – ₹6 lakh" },
  { procedure: "Steroid injection", use: "Quick relief for one flaring joint", stay: "Outpatient", cost: "₹1,500 – ₹5,000" },
  { procedure: "Radiosynovectomy", use: "Non-surgical lining treatment", stay: "Outpatient", cost: "₹15,000 – ₹40,000" },
]

const schemes = [
  { label: "PM-JAY (Ayushman Bharat):", detail: "Cashless cover up to ₹5 lakh per family per year for hospital care. Joint replacement, fusion, and Rheumatoid arthritis related surgeries are included at specified hospitals. The total knee replacement package under PM-JAY can cost around ₹80,000." },
  { label: "CGHS:", detail: "Covers central government employees, pensioners, and their dependents for surgical procedures." },
  { label: "ESI:", detail: "Covers organised-sector workers earning under the wage threshold, and their families." },
  { label: "State schemes:", detail: "Maharashtra's Mahatma Jyotiba Phule Jan Arogya Yojana and Tamil Nadu's CMCHIS are among the schemes covered in different states." },
]

const faqs = [
  { q: "Will I definitely need surgery for rheumatoid arthritis?", a: "No. Most people with Rheumatoid arthritis never need surgery, especially with early diagnosis and modern medicines. Surgery is considered only when one or two joints keep causing pain or damage despite 6 to 12 months of treatment." },
  { q: "How long does a knee or hip replacement last?", a: "Modern implants typically last 15 to 20 years, sometimes longer. The lifespan depends on your age at surgery, weight, activity level, and the type of implant used." },
  { q: "Can I sit on the floor after a knee replacement?", a: "Deep floor-sitting and squatting are generally not recommended after knee or hip replacement. They place high stress on the new joint. Your physiotherapist will guide you on safe alternatives like low stools or a chair for prayers." },
  { q: "When can I return to work after Rheumatoid arthritis surgery?", a: "Office and desk work is usually possible in 4 to 8 weeks for most procedures. Physically demanding jobs may need 2 to 3 months or more. Your surgeon will guide the timeline based on your specific procedure and recovery." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "non-surgical", label: "Non-Surgical Procedures" },
  { id: "when-considered", label: "When Are Specialised Procedures Considered?" },
  { id: "main-surgeries", label: "Main surgeries considered" },
  { id: "comparison", label: "A quick comparison guide" },
  { id: "government-schemes", label: "How government schemes help with costs" },
  { id: "recovery", label: "How will your recovery journey look?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "Frequently asked questions" },
]


function SpecialisedTreatmentRA() {
  const [activeSection, setActiveSection] = useState("non-surgical")

  useEffect(() => {
    document.title = "Specialised treatment options for Rheumatoid arthritis: What can you expect? | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Specialised treatment options for Rheumatoid arthritis</span>
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
                  Specialised treatment options for <span className="whitespace-nowrap">Rheumatoid arthritis:</span>
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
                    What can you expect?
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 29, 2026
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
                    Patients with the disease usually think, &ldquo;I can handle Rheumatoid arthritis with medicines.&rdquo; Medicine plays an important role in the management of Rheumatoid arthritis. But, the treatment methods have changed drastically as newer drugs are introduced in the market, like Janus Kinase inhibitors and injectable biologics like Sarilumab. This continues to serve the purpose, as surgeries have dropped sharply over the last 30 years.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    In India today, most of the patients will never need to undergo a procedure, as newer drugs serve the same purpose and help patients recover. But these medicines have their own limitations too. This is where the specialised procedure can help when tablets fail, and when a particular joint keeps getting worse despite good treatment.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This page covers the specialised treatment options, including non-surgical and surgical options. Non-surgical options include steroid injections, and surgical procedures include synovectomy and joint fusion surgery. We cover how these can help manage disease and the approximate costs in India.
                  </p>
                </div>

                {/* ── NON-SURGICAL ── */}
                <div id="non-surgical" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Non-Surgical Procedures
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Not every procedure happens in an operating theatre. Some take less than an hour in a clinic chair. This includes steroid injections and radioactive injections.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Steroid joint injections
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In a steroid injection, a shot of a steroid mixed with a local numbing medicine is placed into the swollen joint. Most people get relief in a few days (ranging from weeks to a few months). These injections are useful as a bridging measure. For important occasions like a wedding or a long trip, it is helpful to relieve painful joints. Doctors give only 2 to 3 shots in one year. This is because steroids can also weaken the cartilage and the surrounding tissue.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    <strong className="font-semibold">Approximate cost:</strong> {"₹"}1,500{"–"}{"₹"}5,000 per injection.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Radioactive injection
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Based on the joint condition, a small dose of medicine or a radioactive substance is injected into the joint to reduce the swollen lining. The most frequent site is the knee. Usually, this is due to age, other health problems, or swelling recurring after a previous synovectomy( a surgery).
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Radiosynovectomy is a one-day procedure and is available at some of the larger speciality hospitals in India.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    <strong className="font-semibold">Approximate cost:</strong> {"₹"}15,000 to {"₹"}40,000 per joint.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── WHEN CONSIDERED ── */}
                <div id="when-considered" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Are Specialised Procedures Considered?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors usually begin treatment with medicines and continue for 6 to 12 months. If it has not helped with the pain or prevented damage in a particular joint, doctors choose surgery as an option.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    A rheumatologist prescribes medicines, whereas an orthopaedic surgeon is consulted if the condition demands surgery.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In the following conditions, doctors prescribe surgery-
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {surgeryConditions.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The goal is very simple: to relieve your pain, restore its function, and protect your nearby joints from extra stress.
                  </p>
                </div>

                {/* ── MAIN SURGERIES ── */}
                <div id="main-surgeries" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Main surgeries considered
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Rheumatologists usually recommend surgery as a last option when the recovery seems unsuccessful. Some commonly recommended procedures are discussed below.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    1. Synovectomy(removing the inflamed joint lining)
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Each joint has a soft inner lining called the synovium. In Rheumatoid arthritis, the lining thickens and becomes swollen. This is called synovitis. The swelling produces extra fluid, which slowly thins out your cartilage. A synovectomy is a surgical procedure that removes most of the overgrown lining.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The surgeon makes some small cuts and uses a thin camera to remove the lining. This procedure is known as arthroscopy. For larger joints, an open surgery is performed, where the doctors directly work on the affected joint.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Synovectomy is best performed with some cartilage left to protect the joint. Therefore, it is most suitable for early or middle-stage damage. The most common sites for this procedure are the knee, wrist, or elbow.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong className="font-semibold">Recovering from the surgery:</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    After the procedure, physiotherapy sessions will be arranged. Starting with simple activities is recommended.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {synovectomyRecovery.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The surgery cannot cure your condition. Follow-up with medications is done to prevent the lining from thickening again.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    <strong className="font-semibold">Approximate cost:</strong> {"₹"}50,000 to {"₹"}1,50,000 (Depends upon the number of joints, joint location and the hospital)
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    2. Tendon Repair (soft tissue surgery)
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Tendons are the strong cords that connect muscles to bone. They help the joints move by transmitting the pulling force created by muscles. In Rheumatoid arthritis, swelling around tendons can thin them down, often without warning.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The surgeon either stitches the torn tendon back together or uses a healthy nearby tendon to take over its job. This is most often performed on the hand and wrist, often combined with a synovectomy to clear the damage. After the procedure, a splint is always worn for 4 to 6 weeks. This is followed by hand therapy to rebuild grip and finger movement. Most patients move into a regular routine in 6 to 8 weeks.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    <strong className="font-semibold">Approximate cost:</strong> {"₹"}70,000 to {"₹"}1,50,000 (Depends upon the number of joints, joint location and the hospital)
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    3. Joint fusion surgery
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Joint fusion permanently joins two bones, so movement stops between the joints. Joints lose flexibility there, but the constant pain stops, and the joint becomes stable. The wrist, thumb, ankle, and small finger joints are surgically treated in this way. The surgeon uses screws, plates, or wires to hold the bones together while they heal. A bone graft, sometimes taken from the same person&rsquo;s own pelvis, may be added to help the bones knit.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Mostly, patients leave the hospital in 2 to 3 days. For many, the relief from years of constant pain is what surprises them most. Most patients return to desk work, possibly in 6{"–"}8 weeks.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    <strong className="font-semibold">Approximate cost:</strong> {"₹"}1,00,000 to {"₹"}2,50,000 (Depends upon the number of joints involved, joint location and the hospital)
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    4. Joint replacement procedure
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This procedure will help replace the damaged joint. The surgeon replaces the broken joints with an artificial joint. They are usually made of metal, plastic or medical-grade silicone. It is commonly considered an advanced procedure.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The most common joint replacements are
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {replacementJoints.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Implants placed today usually last 15 to 20 years, longer if good care is taken..
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Patients can expect to be in the hospital for 3 to 5 days. This is followed by 3 to 6 months of physiotherapy. It is important to continue medicines after surgery, as per the doctor&apos;s advice . Office workers often return to their routine in 6{"–"}8 weeks, while physically active jobs may need 3 months or more.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong className="font-semibold">Approximate costs:</strong>
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {replacementCosts.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{s.label}</strong> {s.detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Joint replacement is covered under <strong className="font-semibold">PM-JAY (Ayushman Bharat)</strong> up to {"₹"}5 lakh per family per year at specific hospitals. ( Note: Consult your rheumatologist or nearby hospital for the accurate cost)
                  </p>
                </div>

                {/* ── COMPARISON TABLE ── */}
                <div id="comparison" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    A quick comparison guide
                  </h2>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[680px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Procedure</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Main use</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Hospital stay</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate cost (India)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map((row) => (
                          <tr key={row.procedure} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.procedure}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.use}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.stay}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── GOVERNMENT SCHEMES ── */}
                <div id="government-schemes" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How government schemes help with costs
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Cost is one of the biggest concerns patients bring to a surgical decision. Most of these procedures are already covered by government schemes, but many people simply don&apos;t know they are eligible to avail of them.
                  </p>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {schemes.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{s.label}</strong> {s.detail}
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      <strong className="font-semibold">A practical tip:</strong> Ask the hospital for cashless pre-authorisation 2 to 3 days before surgery. This confirms exactly what your scheme will pay before you arrive.
                    </p>
                  </div>
                </div>

                {/* ── RECOVERY ── */}
                <div id="recovery" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How will your recovery journey look?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    After the surgery, doctors advise regular follow-up. The physiotherapy session begins 1-2 days after surgery, which plays an important role in the recovery phase. Medications would continue after surgery, for the joint that was operated on and for the other joints too. Rheumatologists may delay giving biologic injections for a time around surgery to reduce the risk of infection. Methotrexate is often maintained, and most drugs are restarted soon after.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You don&rsquo;t have to worry about burdening your family during the recovery phase. Most only need help for the first 2 to 3 weeks, especially while bathing, walking or getting up from bed. You can become independent sooner than you think. Sitting on the floor to eat and using Indian-style toilets puts a lot of stress on a new knee or hip. Easy fixes around the house, such as a Western toilet seat, a low stool in the kitchen and a higher prayer chair can assist recovery. Talk to your physiotherapist about what works for your home.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Most people are back home in about 6 weeks. You can expect a full recovery in 3 to 6 months.
                  </p>
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
                    Steroid injection, synovectomy or full knee replacement - each procedure has its own benefits and a clear recovery path. If medicines have stopped working for your joint pain, the next step is a conversation with your rheumatologist about whether a surgery might work.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    Surgery is not usually the first step in Rheumatoid arthritis. But when medicines have done all they can for a particular joint, and it has not helped you to return to your normal routine then surgery is a must. They are safe, well-researched and cost-effective for most Indian families.
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
                Frequently asked questions
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

export default SpecialisedTreatmentRA
