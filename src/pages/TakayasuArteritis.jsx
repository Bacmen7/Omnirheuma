import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const diagnosticTests = [
  {
    label: "Blood tests",
    text: "Indicate the presence of inflammation, though they cannot specify its location.",
  },
  {
    label: "Physical examination",
    text: "Identifies warning signs by comparing pulse strength and blood pressure between both arms, and listening for abnormal sounds over neck, abdominal, and groin arteries.",
  },
  {
    label: "Imaging techniques",
    text: "CT angiography is the primary standard test. It is widely available and cost-effective, and it visualizes wall thickening and narrowing. MRI avoids radiation but can overestimate arterial narrowing and is less accessible.",
  },
]

const faqs = [
  { q: "Who typically gets Takayasu arteritis?", a: "It mainly affects young women, often between the ages of 15 and 40 years, and is notably more common in East Asia, India, or Mexico. Because early symptoms like fatigue and low-grade fever are vague, it is sometimes missed or diagnosed later than it should be." },
  { q: "Can men get Takayasu arteritis?", a: "Yes. It affects men more frequently in India and China (about 3 women to 1 man) than in Western countries (where the ratio is closer to 12 women to 1 man)." },
  { q: "Why does it take so long to diagnose?", a: "Because the early stage causes fever, fatigue, and weight loss without clear signs of involvement of the arteries. Most people are investigated for other things first, and the diagnosis usually follows once the later signs appear." },
  { q: "Will I need surgery for Takayasu arteritis?", a: "While medications are the primary treatment to control inflammation, they cannot reverse existing arterial narrowing. If significant blockage occurs, surgery or minimally invasive procedures to open or bypass the affected arteries may be necessary." },
  { q: "Is Takayasu arteritis the same as giant cell arteritis?", a: "No, though both affect large vessels. Takayasu arteritis typically begins before 40 years of age and affects the aorta and its branches. Giant cell arteritis affects people over 50 and typically involves arteries in the head." },
]

const standingReferences = [
  "Vasculitis. Cleveland Clinic.",
  "Vasculitis: Symptoms and Causes. Mayo Clinic.",
  "Jatwani S, Blum MA. Vasculitis. StatPearls, updated 1 December 2025.",
  "Vasculitis. Versus Arthritis.",
  "Vasculitis: approach to diagnosis and therapy. Indian Journal of Dermatology, Venereology and Leprology.",
  "Savage CO, Harper L, Cockwell P, Adu D, Howie AJ. ABC of arterial and vascular disease: vasculitis. BMJ, 2000;320(7245):1325-1328.",
  "Vasculitis. ScienceDirect Topics, Immunology and Microbiology.",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "what-it-is", label: "What Takayasu Arteritis Is" },
  { id: "who-is-affected", label: "Who is Affected by Takayasu Arteritis" },
  { id: "symptoms", label: "Symptoms of Takayasu Arteritis" },
  { id: "diagnosis", label: "Diagnosing Takayasu Arteritis" },
  { id: "treatment", label: "How Takayasu Arteritis Is Treated" },
  { id: "heart-protection", label: "Protecting Your Heart and Blood Vessels" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function TakayasuArteritis() {
  const [activeSection, setActiveSection] = useState("what-it-is")

  useEffect(() => {
    document.title = "Takayasu Arteritis: A Distinct Type of Vasculitis | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Takayasu Arteritis</span>
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
                  Takayasu Arteritis: A Distinct Type of Vasculitis
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
                    Takayasu arteritis is a form of <Link to="/vasculitis" style={{ color: "#0f616e", fontWeight: 600, textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "4px" }}>vasculitis</Link>, which is a group of inflammatory conditions that cause blood vessel swelling. Unlike other types, Takayasu arteritis specifically targets the aorta, the body&rsquo;s largest artery, and its primary branches that supply blood to the heart and the rest of the body.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    It is considerably more common in India than in Western countries. It usually begins in people in their twenties and thirties. Its early stage is often difficult to detect due to <Link to="/vasculitis-symptoms" style={{ color: "#0f616e", fontWeight: 600, textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "4px" }}>ambiguous symptoms</Link>.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This article explains what this condition is, who it typically affects, the two symptom stages, and how it is diagnosed and treated.
                  </p>
                </div>

                {/* ── WHAT IT IS ── */}
                <div id="what-it-is" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Takayasu Arteritis Is
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Arteritis means inflammation of the arteries, the vessels that carry blood from your heart throughout the body. Unlike arthritis, which affects joints, arteritis involves blood vessel inflammation.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Think of your arteries as a highway system. The aorta, the main highway, carries blood from your heart to your arms, brain, and kidneys. Takayasu arteritis occurs when your immune system mistakenly attacks and inflames these large vessel walls, causing them to thicken and narrow. This restricts blood flow, causing arm pain, dizziness, or high blood pressure. Over time, the narrowing can block an artery. In contrast, sometimes a section of the artery wall can become weak and stretch, creating a bulge.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You might also hear an older name for this condition as &lsquo;pulseless disease&rsquo;. This was called so because the arteries leading to the arms become so narrow that you can no longer feel a pulse at the wrist.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    While the exact cause is not known, the condition occurs when the body&apos;s immune system mistakenly begins attacking healthy arteries.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── WHO IS AFFECTED ── */}
                <div id="who-is-affected" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Who is Affected by Takayasu Arteritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Takayasu arteritis is considerably more common in <strong>India</strong> than in Western countries, and it is also prevalent in the Far East, Central and South America, and Africa. While it predominantly affects <strong>women</strong>, the ratio varies by region.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    For example, the female-to-male ratio is 12:1 in Turkey, but drops to 3:1 in India. In China, data show men are affected more often in these regions than Western data suggests.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The condition usually begins between the ages of <strong>20 and 30,</strong> with one Indian study finding a mean age of <strong>27 years</strong>. However, it can also begin after 40 years of age, a pattern that is frequently overlooked. Additionally, it is the most common large-vessel-type vasculitis found in children.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In the same Indian study, <strong>high blood pressure was the commonest presenting feature</strong>, affecting around half of patients at first presentation and around three-quarters by the time of diagnosis. In contrast, Western medical literature often identifies missing pulses as the primary clinical sign.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms of Takayasu Arteritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The condition usually occurs in two distinct stages. The real challenge is that most delays in getting a diagnosis happen during the first stage, when symptoms are often easy to miss or mistake for something else.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    <strong>1. The early stage:</strong> People may experience fever, tiredness, weight loss, aching muscles and joints, and a general sense of being unwell in this phase. Blood tests show inflammation, but nothing points towards the arteries, so this stage is commonly mistaken for an infection or something else.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    <strong>2. The later stage</strong>: This phase occurs as arteries narrow, causing <strong>reduced or absent pulses</strong> at the wrist (observed in over <strong>80%</strong> of patients) and uneven blood pressure readings between arms. Patients may also experience pain or heaviness in the limbs, alongside dizziness, headaches, or visual disturbances. High blood pressure can also develop, particularly when the arteries supplying the kidneys are affected.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These two stages can vary between months or years. Treatment works best when started early. If you are a young adult with unexplained fever, weight loss, or fatigue, please continue seeking a diagnosis.
                  </p>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Diagnosing Takayasu Arteritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    There is no single test for the diagnosis of Takayasu arteritis. It relies on evaluating symptoms and a comprehensive physical examination. Key diagnostic tests include:
                  </p>
                  <ul className="space-y-3 mb-6" style={{ listStyleType: "disc", paddingLeft: "2.75rem" }}>
                    {diagnosticTests.map((t) => (
                      <li key={t.label} className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                        <strong>{t.label}:</strong> {t.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors categorize the disease into specific types based on which arteries are affected to help guide treatment.
                  </p>
                  <div style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                    <Link to="/vasculitis-diagnosis" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#E86531", fontSize: "15px" }}>
                    Read more about vasculitis diagnosis and tests
                    <ArrowRight size={14} />
                  </Link>
                  </div>
                </div>

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Takayasu Arteritis Is Treated
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Multiple treatment options are available to manage Takayasu arteritis and control inflammation. Medicines such as <strong>steroids</strong> are typically the first-line treatment to reduce active inflammation. However, they are rarely used on their own. In fact, in about <strong>60%</strong> of people, symptoms may return as the dose is lowered. Because of this, doctors often combine them with other medications to keep the condition under control.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    These include <strong>methotrexate</strong> and similar tablets to control the condition and reduce steroid exposure. For active disease, <strong>biologic medicines</strong> are used, principally <strong>tocilizumab</strong> and <strong>TNF inhibitors</strong>, which appear comparably effective. Newer approaches targeting several other immune pathways are in development.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Medicines control inflammation but do not reverse narrowing that has already occurred, and the <strong>10-year relapse rate is around 50%</strong>. Procedures to open or bypass a narrowed artery are therefore fairly common, usually timed for when the inflammation is quiet.
                  </p>
                  <div style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                    <Link to="/vasculitis-treatment" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#E86531", fontSize: "15px" }}>
                    Read more about vasculitis treatment options
                    <ArrowRight size={14} />
                  </Link>
                  </div>
                </div>

                {/* ── HEART PROTECTION ── */}
                <div id="heart-protection" data-toc-section style={{ marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Protecting Your Heart and Blood Vessels
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Protecting your heart and blood vessels is a crucial part of managing Takayasu arteritis. Taking proactive, daily steps can make a meaningful difference in your long-term health and well-being.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    Focus on actionable lifestyle changes you can control. Work closely with your healthcare team to manage your blood pressure, regularly monitor your cholesterol levels, and seek support to quit smoking if you smoke. These patient-centered steps are vital for safeguarding your cardiovascular health alongside medical treatments.
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
                      {standingReferences.map((r, i) => (
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
                      Consultant Rheumatologist for Takayasu arteritis evaluation and long-term care.
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

export default TakayasuArteritis
