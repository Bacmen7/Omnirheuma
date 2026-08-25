import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Ankylosing Spondylitis Specialised Procedures
   ───────────────────────────────────────────── */

const procedureTriggers = [
  "Severe pain that has not responded to medicines or physiotherapy.",
  "Significant joint damage is affecting your daily activities and movement.",
  "The spine has fused in a painful forward-bent position.",
  "Nerve compression is causing weakness, numbness, or loss of bladder control.",
  "The hip joint has been badly damaged by years of inflammation.",
]

const procedureCosts = [
  {
    procedure: "Sacroiliac joint steroid injection",
    whenConsidered: "Severe Hip and spine joint pain",
    cost: "Rs 3,000 to Rs 10,000 per procedure",
  },
  {
    procedure: "Total hip replacement",
    whenConsidered: "Severely damaged hip joint",
    cost: "Rs 1.5 lakh to Rs 3.5 lakh per joint",
  },
  {
    procedure: "Spinal osteotomy",
    whenConsidered: "Severe forward stoop of the spine",
    cost: "Rs 3 lakh to Rs 8 lakh depending on complexity",
  },
  {
    procedure: "Spinal fusion",
    whenConsidered: "Fractured or unstable vertebrae",
    cost: "Rs 2 lakh to Rs 6 lakh depending on levels fused",
  },
  {
    procedure: "Laminectomy",
    whenConsidered: "Nerve compression causing weakness or numbness",
    cost: "Rs 1.5 lakh to Rs 4 lakh",
  },
]

const faqs = [
  {
    q: "How do I know if I need surgery?",
    a: "Answer: Surgery is considered only when medicines and physiotherapy have not given adequate relief, or when there is significant structural damage. Your rheumatologist assesses the full picture, including imaging and disease activity, before recommending any procedure. Most people never need it.",
  },
  {
    q: "Is hip replacement permanent?",
    a: "Answer: It is not permanent, but long-lasting. Most artificial hip joints perform well for 10 to 15 years or more before any revision is needed. The improvement in pain and movement is usually significant and durable.",
  },
  {
    q: "What is spinal osteotomy, and is it risky?",
    a: "Answer: It is the surgery to correct a severely stooped spine by cutting and realigning the vertebrae. It is a major procedure and carries the risks any complex spinal surgery does. In the appropriate patients at experienced centres, outcomes are generally good.",
  },
  {
    q: "Can a sacroiliac joint injection cure ankylosing spondylitis?",
    a: "Answer: No. It treats pain and inflammation at a specific site without altering the disease itself. Think of it as short-term relief within a broader treatment plan rather than a cure.",
  },
  {
    q: "How long is recovery after hip replacement?",
    a: "Answer: Most people walk with support within a day or two. Comfortable independent movement usually returns within 6 to 12 weeks. However, full recovery and a return to all activities can take 3 to 6 months. Structured physiotherapy through that period is essential.",
  },
  {
    q: "Are these procedures included in the health insurance coverages in India?",
    a: "Answer: Many private health insurance policies cover hip replacement and spinal surgery, though it varies considerably by plan. Government employees under CGHS may be eligible at empanelled hospitals. Confirm with both your insurer and the hospital before scheduling.",
  },
]

const references = [
  "Zheng GQ, et al. Decision making regarding spinal osteotomy and total hip replacement for ankylosing spondylitis. Bone and Joint Journal, 2014.",
  "Ward MM, et al. 2019 Update of the American College of Rheumatology Recommendations for the Treatment of Ankylosing Spondylitis and Nonradiographic Axial Spondyloarthritis. Arthritis and Rheumatology, 2019.",
  "The Role of Sacroiliac Joint Steroid Injections in the Treatment of Axial Spondyloarthritis. Archives of Rheumatology, 2021.",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "when-considered", label: "When Are Specialised Procedures Considered?" },
  { id: "non-surgical", label: "Non-Surgical Procedures" },
  { id: "surgical", label: "Surgical Procedures" },
  { id: "what-to-expect", label: "What to Expect After a Procedure" },
  { id: "cost-table", label: "Cost of Specialised Procedures in India" },
  { id: "speak-to-specialist", label: "Speak to a Specialist About Your Options" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function AnkylosingSpondylitisSpecialisedProcedures() {
  const [activeSection, setActiveSection] = useState("when-considered")

  useEffect(() => {
    document.title = "Ankylosing Spondylitis: Specialised Procedures and Surgical Options | Omni Rheuma"
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
              <Link to="/" className="hover:underline text-white/80">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/health-guide" className="hover:underline text-white/80">Health Guide</Link>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>
                Ankylosing Spondylitis Specialised Procedures
              </span>
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
                    Specialised Procedures and Surgical Options
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
                    For most people living with ankylosing spondylitis, medicines and physiotherapy keep the condition well managed. Sometimes that is not enough. Joints can become badly damaged, the spine can fuse in a painful position, or nerves can end up compressed. And at that point, a rheumatologist or spine specialist may suggest a procedure. These procedures involve injections or surgeries such as hip replacement, spinal fusion, spinal osteotomy, or laminectomy.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The conversation regarding the need and possibilities of procedures for ankylosing spondylitis tends to arrive without a warning and can be unsettling. Hearing the word surgery is very different from understanding what is actually being proposed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This article provides a clear, simple breakdown of each specialised procedure, covering both non-surgical and surgical interventions. What it involves, when it is recommended, what recovery looks like, and what it costs in India. The aim is to help you walk into the consultation prepared.
                  </p>
                </div>

                {/* ── WHEN ARE SPECIALISED PROCEDURES CONSIDERED ── */}
                <div id="when-considered" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Are Specialised Procedures Considered?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Medicines and physiotherapy remain the foundation of managing ankylosing spondylitis. Procedures come into the picture only when those have not given adequate relief, or when the disease has caused structural damage that nothing else can address.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    A rheumatologist or spine specialist may suggest a procedure when:
                  </p>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {procedureTriggers.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Most people with ankylosing spondylitis never reach this point. The specialised procedures in the treatment of ankylosing spondylitis include both non-surgical and surgical options that are discussed in this article.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── NON-SURGICAL PROCEDURES ── */}
                <div id="non-surgical" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Non-Surgical Procedures
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Not every advanced option involves surgery. For some people, even a targeted injection brings meaningful relief, especially when the hip and spine (sacroiliac) joint is the main source of pain.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Sacroiliac Joint Steroid Injection
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The sacroiliac joint is where the spine meets the pelvis. It is one of the first sites this condition affects. When the pain is severe and oral medicines are not controlling it, a steroid injection can deliver anti-inflammatory medication directly into the joint. Imaging, usually ultrasound or X-ray, guides the needle to exactly the right place.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The procedure is quick, done in a hospital or pain clinic, and does not need an overnight stay. Most people start feeling relief within a few days. Its effect can last several weeks to months.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    It is not a permanent solution. But it provides real, short-term relief and reduces how much you lean on oral medicines during an episode. In India, the cost runs from roughly Rs 3,000 to Rs 10,000 per procedure, depending on the facility and the imaging used.
                  </p>
                </div>

                {/* ── SURGICAL PROCEDURES ── */}
                <div id="surgical" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Surgical Procedures
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Surgery for ankylosing spondylitis is rare. But where it is needed, the outcomes are generally good. Each procedure addresses the specific problems the disease has caused. Reviewing these details can help you have a more meaningful discussion with your surgeon.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Total Hip Replacement
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is the most commonly performed surgery in ankylosing spondylitis. Years of swelling and damage can wear down the hip joint surfaces until movement becomes severely painful and limited. The damaged joint is removed and replaced with an artificial one made of metal, ceramic, or a combination of both.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most people see significant and lasting improvement in pain and movement afterwards. Published clinical data describe its outcomes in patients with ankylosing spondylitis as excellent. Most artificial joints last 10 to 15 years or longer.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    In India, the cost is approximately Rs 1.5 lakh to Rs 3.5 lakh per joint. It also depends on the hospital, the surgeon, and the implant chosen. Government employees covered under CGHS and state health schemes may be eligible for partial or full coverage, which should be confirmed with the hospital before you proceed.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Spinal Osteotomy
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In advanced disease, the spine can fuse in a forward-bent position called kyphosis. It becomes difficult to stand upright or look straight ahead. It affects the patient more than just posture.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Spinal osteotomy corrects this. A surgeon carefully cuts through sections of fused vertebrae and realigns them into a straighter position. Two techniques are used. The Smith-Petersen osteotomy is used for moderate correction. It removes a wedge of bone from the back of the spine. The pedicle subtraction osteotomy handles more severe deformity and allows a greater degree of correction.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    Both are major procedures, performed only at specialised spine centres by surgeons experienced in this particular condition. In India, the cost ranges from Rs 3 lakh to Rs 8 lakh depending on complexity and centre.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Spinal Fusion
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A fused spine is more brittle than a healthy one. This raises the risk of vertebral fractures. When a fracture causes instability, or when vertebrae become unstable as the disease progresses, spinal fusion surgery stabilises the affected section.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The surgeon uses a bone graft along with screws and rods to hold the vertebrae in place while healing happens. It restores stability. It does not reverse fusion that has already occurred.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    In India, costs range from roughly Rs 2 lakh to Rs 6 lakh depending on how many parts of the spine are involved.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Laminectomy
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sometimes ankylosing spondylitis compresses nerves, causing weakness in the legs and persistent numbness. In severe cases, it may also cause loss of bladder or bowel control. A laminectomy relieves that pressure.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The surgeon removes a small portion of vertebral bone called the lamina. It creates more space around the affected nerves. It is a targeted procedure done through a small incision. Most people notice their neurological symptoms improve once they have recovered.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In India, the cost for it is approximately Rs 1.5 lakh to Rs 4 lakh.
                  </p>
                </div>

                {/* ── WHAT TO EXPECT AFTER A PROCEDURE ── */}
                <div id="what-to-expect" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What to Expect After a Procedure
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Recovery takes time, and physiotherapy plays a central role in every one of these procedures. After surgery, most people begin a structured rehabilitation programme within days, guided by a physiotherapist.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Timelines vary. Hip replacement patients often regain comfortable mobility within 6 to 12 weeks. Spinal surgery generally takes longer, depending on complexity.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Follow-up continues with both the rheumatologist and the surgeon. One monitors your recovery, and the other manages the underlying disease. Most people who have appropriate surgery for this condition see improvement in pain and daily function.
                  </p>
                </div>

                {/* ── COST TABLE ── */}
                <div id="cost-table" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Cost of Specialised Procedures in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    This section covers the approximate costs for all procedures, for quick reference. These vary by city, hospital type, and by what your insurance covers. So always confirm directly with the treating hospital.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[620px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Procedure</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">When considered</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {procedureCosts.map((item, idx) => (
                          <tr key={idx} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{item.procedure}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item.whenConsidered}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top font-medium" style={{ color: "#0f616e" }}>{item.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── SPEAK TO A SPECIALIST ABOUT YOUR OPTIONS ── */}
                <div id="speak-to-specialist" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Speak to a Specialist About Your Options
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    If your rheumatologist has raised the possibility and requirement of a procedure, the next step is a detailed consultation with your rheumatologist. Understand the options, ask what you need to ask, and bring family into the decision if that helps.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    The right procedure at the right time can make a real difference to comfort and quality of life.
                  </p>

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
                      marginTop: "1.5rem",
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
                      Consultant Rheumatologist for ankylosing spondylitis evaluation and specialised procedure guidance.
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
      </main>

      <BriefingFooter />
    </div>
  )
}

export default AnkylosingSpondylitisSpecialisedProcedures
