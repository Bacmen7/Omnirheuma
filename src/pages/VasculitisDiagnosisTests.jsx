import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const mimicConditions = [
  { lead: "Infection", text: ", because the treatment for vasculitis suppresses the immune system and would make an untreated infection considerably worse." },
  { lead: "Blood clots", text: " can cause similar symptoms by blocking the blood vessels." },
  { lead: "Other immune system overreactions", text: ", particularly ", emphasis: "lupus,", tail: " can cause vasculitis alongside its own features." },
  { lead: "Cancer", text: " can occasionally produce a similar pattern of inflammation and organ involvement." },
  { lead: "Reactions to medicines", text: " can cause a form of vasculitis that resolves when the drug is discontinued." },
]

const faqs = [
  { q: "My ANCA test was negative. Does that mean I do not have vasculitis?", a: "No, it does not rule it out. About 10% of people with the ANCA-linked types test negative, and several other kinds of vasculitis do not involve ANCA at all. A biopsy is usually the next step." },
  { q: "Do I definitely need a biopsy?", a: "Not always. It is often the most definitive test, but if your scan findings and symptoms are already characteristic of vasculitis, a biopsy may not be necessary." },
  { q: "Why am I having a urine test for a blood vessel condition?", a: "Because many forms of vasculitis affect the kidneys. Blood or protein in the urine is frequently the first sign of vasculitis, which is why a urine test is indicated. It is quick, and it can make the diagnosis easier." },
  { q: "Is there a single test that confirms vasculitis?", a: "No, there is no single test. Diagnosis is confirmed through a combination of blood tests, urine tests, imaging, and often a biopsy." },
  { q: "Why is it taking so long to get a diagnosis?", a: "Because there are more than 30 forms of vasculitis, symptoms overlap with other conditions, and any infection should be excluded before treatment can start." },
]

const references = [
  "Jatwani S, Blum MA. Vasculitis. StatPearls, updated 1 December 2025.",
  "Vasculitis. Cleveland Clinic.",
  "Vasculitis: Symptoms and Causes. Mayo Clinic.",
  "Systemic Vasculitis. American Family Physician.",
  "Jennette JC, Falk RJ, Bacon PA, et al. 2012 Revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides. Arthritis and Rheumatism.",
  "Csernok E. New concepts in ANCA detection and disease classification in small vessel vasculitis: the role of ANCA antigen specificity. Mediterranean Journal of Rheumatology, 2018.",
  "Vasculitis: approach to diagnosis and therapy. Indian Journal of Dermatology, Venereology and Leprology.",
  "Vasculitis. Versus Arthritis.",
  "Diagnosing Vasculitis. Johns Hopkins Vasculitis Center.",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "why-different", label: "Why Diagnosing Vasculitis Is Different" },
  { id: "tests-used", label: "The Tests Used to Diagnose Vasculitis" },
  { id: "anca-result", label: "What an ANCA Result Actually Means" },
  { id: "mimics", label: "Other Conditions That Can Mimic Vasculitis" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function VasculitisDiagnosisTests() {
  const [activeSection, setActiveSection] = useState("why-different")

  useEffect(() => {
    document.title = "Vasculitis: Diagnosis and Tests | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Vasculitis Diagnosis and Tests</span>
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
                  Vasculitis: Diagnosis and Tests
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: September 8, 2026
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
                    Diagnosing vasculitis is not as simple as doing a single blood test. It is a careful, step-by-step process. Vasculitis is not one condition. More than 30 forms exist, affecting blood vessels of different sizes in different parts of the body, and they are diagnosed in different ways.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The reason doctors take time is that several other illnesses can look exactly like vasculitis at first. Since the medications used to treat it are very strong, your medical team needs to be certain of the diagnosis before starting them.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The anti-neutrophil cytoplasmic antibody (ANCA) test is often a key part of this diagnostic investigation, as it provides vital clues for identifying specific types of small vessel vasculitis. It serves as a central component in differentiating between various forms of the condition.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This article details the diagnostic assessment process, covering blood and urine tests, biopsy requirements, imaging techniques, and the interpretation of ANCA test results.
                  </p>
                </div>

                {/* ── WHY DIAGNOSING IS DIFFERENT ── */}
                <div id="why-different" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Why Diagnosing Vasculitis Is Different
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Vasculitis has more than 30 forms, grouped by the size of the blood vessel affected. The size of the affected blood vessels matters because it guides the diagnostic process. For example, doctors often use scans to investigate larger vessels, while blood tests and biopsies are more effective for smaller ones. Because of this, the tests your doctor orders are tailored to your specific symptoms and their expert assessment.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    While there are official medical checklists used to classify vasculitis for research, these weren&apos;t designed to diagnose individuals and can sometimes be misleading. Instead of relying on these, your doctor will combine your symptoms with various test results to reach an accurate diagnosis.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── TESTS USED ── */}
                <div id="tests-used" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Tests Used to Diagnose Vasculitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There are 3 types of tests primarily used in the diagnosis of vasculitis. These are discussed below as follows:
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    1. Blood and urine tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Blood tests confirm the presence of inflammation and its location in the body. Almost all forms of vasculitis raise the inflammation markers ESR and CRP, and many also raise the platelet count and lower the haemoglobin, causing anaemia.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Antibody tests such as anti-neutrophil cytoplasmic antibodies (ANCA) are the most important. Others include rheumatoid factor, cryoglobulins, and antibodies associated with lupus. These are checked because vasculitis sometimes accompanies another autoimmune condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A urine test is also significant, as many forms of vasculitis affect the kidneys, and blood or protein appearing in the urine is often the first sign. It is quick and non-invasive.
                  </p>
                  <div style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                  </div>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    2. Biopsy
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A biopsy is where a small sample of affected tissue is taken out and examined for inflammation in the blood vessel walls. It can be taken from the temporal artery located at the side of the head, a patch of affected skin, or in some cases the kidney, lung, nerve, or tissue from the nose or sinuses.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    It is often the most definitive test available, but it is not always necessary for the diagnosis of vasculitis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    3. Imaging
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Imaging and scans locate the inflammation and show the activity in the blood vessels. Angiography uses dye to outline the blood vessels and show narrowing, blockages, and ballooning of the vessel wall.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some patterns are distinctive enough to confirm the diagnosis. Ultrasound, CT, MRI, and PET scans are each done for different vessels in different parts of the body, and a chest X-ray is done to scan the lungs.
                  </p>
                </div>

                {/* ── ANCA RESULT ── */}
                <div id="anca-result" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What an ANCA Result Actually Means
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    ANCA stands for antineutrophil cytoplasmic antibody. It is the most useful blood test in this condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A positive test result is a strong clue that you may have a form of vasculitis affecting small blood vessels, and the specific type of ANCA detected helps your doctor narrow down exactly which form it is. A negative ANCA does not rule vasculitis out.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Around 10% of people with two of the commonest ANCA-associated forms test negative for it, and plenty of other vasculitis types do not involve ANCA at all. ANCA can be positive in infections, inflammatory bowel disease, and as a reaction to certain medicines, so a positive result is not a confirmatory diagnosis of vasculitis.
                  </p>
                </div>

                {/* ── MIMICS ── */}
                <div id="mimics" data-toc-section style={{ marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Other Conditions That Can Mimic Vasculitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Sometimes other health issues can look like vasculitis. This is crucial to arrive at the right diagnosis before starting treatment. Your doctor will carefully rule out other possibilities first. Here are some conditions that can sometimes cause similar symptoms:
                  </p>
                  <ol className="space-y-2 mb-6" style={{ listStyleType: "decimal", paddingLeft: "2.75rem" }}>
                    {mimicConditions.map((c, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                        <strong>{c.lead}</strong>{c.text}
                        {c.emphasis && <><strong>{c.emphasis}</strong>{c.tail}</>}
                      </li>
                    ))}
                  </ol>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    Treatment for vasculitis is intensive, and it should not be started without a clear and confirmed diagnosis by your doctor.
                  </p>
                  <div style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                    <Link to="/vasculitis-treatment" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#E86531", fontSize: "15px" }}>
                    Read more about treatment options
                    <ArrowRight size={14} />
                  </Link>
                  </div>
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
                    <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginTop: "1.25rem" }}>
                      {references.map((r, i) => (
                        <li key={i} className="text-[14px] leading-[1.7] text-navy-muted" style={{ wordBreak: "break-word" }}>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </details>
                  <p className="text-[14px] leading-[1.7] text-navy-muted" style={{ marginTop: "1.5rem" }}>
                    <strong>Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor about any medical concern.
                  </p>
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
                      Consultant Rheumatologist for vasculitis diagnosis and long-term care.
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

export default VasculitisDiagnosisTests
