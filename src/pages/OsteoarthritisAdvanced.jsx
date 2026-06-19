import { useEffect, useState } from "react"
import Header from "../components/Header"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const comparisonTable = [
  { procedure: "Steroid Injection", bestFor: "Moderate OA, inflammation flare", duration: "4 to 8 weeks", cost: "INR 500 to 2,000" },
  { procedure: "Gel (HA) Injection", bestFor: "Mild to moderate OA, joint lubrication", duration: "6 to 12 months", cost: "INR 8,000 to 20,000" },
  { procedure: "PRP Injection", bestFor: "Mild to moderate OA, emerging option", duration: "6 to 12 months", cost: "INR 15,000 to 25,000" },
  { procedure: "Total Knee Replacement", bestFor: "Severe OA, end-stage damage", duration: "15 to 20 years", cost: "INR 1.8 to 4.5 lakh" },
  { procedure: "Partial Knee Replacement", bestFor: "Moderate to severe, one area damaged", duration: "10 to 15 years", cost: "INR 1.5 to 2.8 lakh" },
  { procedure: "Bilateral Knee Replacement", bestFor: "Both knees need surgery", duration: "10 to 15 years", cost: "INR 3 to 8 lakh" },
]

const faqs = [
  {
    q: "How long do steroid injections last for knee osteoarthritis?",
    a: "Steroid injections usually relieve pain for 4 to 8 weeks, and sometimes up to 3 months. This varies between patients depending on the level of damage and the stage of their condition.",
  },
  {
    q: "Are gel injections painful?",
    a: "Most patients feel only mild discomfort during a gel injection, similar to any injection into a joint. The area may feel slightly sore for a day or two afterwards, but serious side effects are usually uncommon.",
  },
  {
    q: "Is PRP covered under health insurance in India?",
    a: "Coverage varies across different insurers and policies. It is not consistently included in standard health insurance plans in India. It is worth checking your policy terms or calling your insurer before booking this procedure.",
  },
  {
    q: "How do I know if I need a knee replacement?",
    a: "The clearest signs are consistent severe pain that does not settle with medications or injections, significant difficulty with daily activities, and severe joint damage confirmed on imaging. A rheumatologist or orthopaedic specialist can help you assess whether you have reached this stage.",
  },
  {
    q: "How long does a knee replacement last?",
    a: "Most knee implants last 15 to 20 years. Longevity depends on how active you are, your weight, and the type of implant used.",
  },
  {
    q: "Is knee replacement surgery covered under PM-JAY?",
    a: "Yes. Both total and partial knee replacement are covered under PM-JAY at specific hospitals for eligible beneficiaries, with annual coverage up to INR 5 lakh, including surgery, implants, and hospitalisation costs.",
  },
]

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "when-specialised", label: "When Specialised Procedure?" },
  { id: "injections", label: "Injection-Based Treatments" },
  { id: "prp", label: "PRP Injections" },
  { id: "knee-replacement", label: "Knee Replacement Surgery" },
  { id: "comparison", label: "Quick Comparison Guide" },
  { id: "not-sure", label: "Choosing Treatment" },
  { id: "faq", label: "FAQs" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function OsteoarthritisAdvanced() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    document.title = "Osteoarthritis: Injections, Surgery & What to Expect | Omni Rheuma"
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
    const sections = document.querySelectorAll("[data-toc-section]")
    sections.forEach((s) => observer.observe(s))
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
        .guide-article-content > [data-toc-section] {
          margin-bottom: 0 !important;
        }

        .guide-article-content > [data-toc-section] ~ [data-toc-section] {
          margin-top: 3.5rem !important;
          padding-top: 0 !important;
          border-top: 0 !important;
        }

        .guide-article-content > [data-toc-section] > h2 {
          margin-bottom: 2.25rem !important;
        }

        .guide-article-content > .guide-cta {
          margin-top: 2rem !important;
          margin-bottom: 0 !important;
        }

        .guide-article-content > .guide-cta + [data-toc-section] {
          margin-top: 3.5rem !important;
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

        .guide-toc,
        .guide-toc button {
          border-radius: 0 !important;
        }
      `}</style>
      <main>
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6" style={{ minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "3rem", paddingBottom: "2rem" }}>

            {/* Breadcrumb */}
            {/* <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium leading-snug sm:text-[13px]"
              style={{ color: "rgba(255,255,255,0.68)", position: "absolute", top: "1.5rem", left: "1.25rem" }}
              aria-label="Breadcrumb"
            >
              <span className="whitespace-nowrap">Home</span>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap">Diseases &amp; Conditions</span>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Osteoarthritis</span>
            </div> */}

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                lineHeight: "1.15",
                letterSpacing: "-0.5px",
                color: "#ffffff",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              <span style={{ display: "block", fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}>Osteoarthritis: Treatment &amp; Procedures</span>
              <span style={{ display: "block", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "rgba(255,255,255,0.85)", marginTop: "0.6rem", fontWeight: 400 }}>Injections, Surgery and What to Expect</span>
            </h1>

            {/* Image */}
            {/* <div className="hidden md:block" style={{ position: "absolute", top: 0, bottom: 0, right: "24px", width: "420px", overflow: "hidden" }}>
              <img
                src="/OA.webp"
                alt="Osteoarthritis knee illustration"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", display: "block" }}
              />
            </div> */}

          </div>
        </header>

        {/* ═══════════ ARTICLE BODY + SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-1 md:pt-4 md:pb-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: Article ── */}
              <div className="flex-1 min-w-0 guide-article-content" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section>
                  {/* <h1
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Osteoarthritis: Specialised Treatment Procedures - Injections, Surgery and What to Expect
                  </h1> */}
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Meena, a 54-year-old woman, had a busy city life. Recently, she volunteered to retire from her tiring job. Her health condition did not allow her to continue. Neither could she board a bus nor walk across the crowded streets.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    For many people with osteoarthritis, medicines, physiotherapy, and lifestyle changes bring meaningful relief. But at some point, their sufferings go beyond the limit. The pain starts interfering with sleep, movement, or even simple daily routines.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    That's when specialised treatment options come into the picture.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    These range from quick clinic-based injections to more definitive solutions like knee replacement surgery. By getting to know what each option offers, you can take a more confident step. Let's walk through when these treatments are considered, what they involve, and what you can expect - especially in the Indian context.
                  </p>
                </div>

                <ReviewedConsultationCta />

                {/* ── WHEN SPECIALISED ── */}
                <div id="when-specialised" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Does Your Doctor Recommend a Specialised Procedure?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors have made consistent efforts with medicines and physiotherapy. You have made enough lifestyle changes. But these haven't helped you out of the situation - some special treatment options come into play.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Before suggesting the next step, your doctor might look for these signs:
                  </p>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {[
                      "Pain that doesn't let you have a peaceful sleep",
                      "Feeling exhausted after taking a few steps",
                      "Your knees grind as you climb stairs",
                      "Hours of rest or strips of medicine don't help with the swelling and pain",
                      "Imaging tests show moderate to severe joint damage",
                    ].map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{item}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Your doctor will suggest treatment options based on the joint damage and how much it's affecting your daily routine. In most cases, injections are tried before considering surgery.
                  </p>
                </div>

                {/* ── INJECTIONS ── */}
                <div id="injections" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Injection-Based Treatments for Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Injections often bridge the gap between medicines and surgery. They are quick, usually done in a clinic, don't require hospital admission, and have no long recovery time. Based on your joint's damage, your doctor would recommend these options.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Steroid Injections
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Steroid injections are often considered the first step when your pain flares up. A small dose of a steroid is injected into your joint space. This reduces swelling and eases the pain. While it doesn't repair the joint or stop its progression, it can provide a helpful window of relief. This helps you have more relaxed and pain-free physiotherapy sessions.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Doctors generally limit these to 3–4 injections for a single joint in one year, as overuse may affect joint health over time. For some, the effect may last 4 to 8 weeks; for many it lasts up to 3 months.
                  </p>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "1.25rem" }}>
                    Approximate cost in India: INR 500 to 2,000 per session
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Gel Injections (Hyaluronic Acid)
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    When you are healthy, fluid acts as a natural cushion in your joint. In osteoarthritis, this fluid becomes thin and stops working effectively. Gel injections add hyaluronic acid to cushion and lubricate your joints - helping you climb stairs without your knees creaking. The effect may last 6 to 12 months, though results vary based on the person and extent of damage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    It's worth noting that the evidence is mixed. While some people experience marked improvement, others may not. Some international associations like EULAR suggest cautious use. AAOS and ACR/Arthritis Foundation do not currently recommend these as standard treatment. So it's best to have an open discussion with your doctor before taking the final call.
                  </p>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "1.25rem" }}>
                    Approximate cost in India: INR 8,000 to 20,000 per injection
                  </p>
                </div>

                {/* ── PRP ── */}
                <div id="prp" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    PRP Injections (Platelet-Rich Plasma)
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your doctor draws some blood - similar to a routine blood test - then processes it in the lab to get a thick, concentrated platelet solution. These platelets help in healing and repair. This fluid is then injected back into your damaged joint. Instead of just relieving pain, PRP aims to repair and improve joint health in a more natural way.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors often consider PRP when other injections haven't worked well, especially in mild to moderate osteoarthritis. It can be a good option if you're looking to delay surgery and explore treatments that work with your body's own healing mechanisms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While early results are promising - giving 6 to 12 months of relief in suitable patients - it is still an evolving treatment and has not yet become part of standard guidelines. Results can differ from person to person and depend on damage severity.
                  </p>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "0.5rem" }}>
                    Approximate cost in India: INR 15,000 to 25,000 per session (usually 2–3 sessions recommended)
                  </p>
                  <p className="text-[13px] leading-[1.65] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Costs mentioned are approximate and may differ based on hospital, city, and clinical needs. Please consult a qualified doctor for personalised advice.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What About Stem Cell Therapy?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Stem cell therapy is one of the more talked-about recent options. Stem cells are sourced from the patient, processed in labs, and injected back into the affected joint. There is mixed evidence suggesting it could help regrow damaged cartilage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    India approved a commercially available stem cell product for knee osteoarthritis in 2022, with costs around INR 1.25 lakh per injection.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    While the idea sounds promising, strong clinical evidence is still limited and it has not become part of routine treatment guidelines. If you're considering it, a detailed discussion with your specialist is essential to understand whether it truly fits your condition.
                  </p>
                </div>

                {/* ── KNEE REPLACEMENT ── */}
                <div id="knee-replacement" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Knee Replacement Surgery
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When all non-surgical options stop providing relief and joint damage becomes more severe, knee replacement can be a life-changing option. It gives back your peaceful, pain-free sleep and a carefree morning walk. Currently, this is the most effective treatment for advanced osteoarthritis.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    When Does Your Specialist Recommend Surgery?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Your specialist may look for these signs before recommending knee replacement:
                  </p>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {[
                      "Stubborn pain that doesn't respond to medicines and injections",
                      "Daily activities become so tiring that you cannot manage them",
                      "X-ray imaging shows Grade 3 or 4 joint damage - the joint becomes stiff and unstable",
                      "Every non-surgical treatment tried for at least 6 months has not helped",
                    ].map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{item}</li>
                    ))}
                  </ul>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "1.25rem" }}>
                    Besides age, your doctor considers pain severity, walking ability, and how badly it affects your routine before suggesting surgery.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Does Your Doctor Operate On?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Specialists replace your damaged joint with specially designed components made of metal and durable plastic. These act like a new joint surface, helping the knee move more smoothly and with less pain. The surgery usually takes around 3 to 4 hours, with a hospital stay of about 3 to 4 days.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Based on how much of the joint is affected, your doctor may recommend a <strong className="font-semibold">total knee replacement</strong> - when most of the joint is damaged - or a <strong className="font-semibold">partial knee replacement</strong>, where only the affected portion is replaced while preserving the healthy parts.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What to Expect in Your Recovery Phase?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Recovery is a gradual but steady journey. For the first few days, the pain is bearable and you can walk with support. After physiotherapy sessions, your knees start hurting less as you walk.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Within three months, you can start walking and climbing stairs and will feel marked improvement. After this, you regain near-normal function. Full recovery depends on your age, fitness level, and consistency with physiotherapy.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Cost of Knee Replacement in India
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Costs may vary depending on hospital, city, and implant type. Approximate ranges are:
                  </p>
                  <ul className="space-y-2 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Total knee replacement: INR 1.8 lakh to 4.5 lakh</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Partial knee replacement: INR 1.5 lakh to 2.8 lakh</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Bilateral knee replacement: INR 3 lakh to 8 lakh</li>
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    Government schemes like PM-JAY, CGHS, and ESI can help reduce costs significantly. PM-JAY can cover up to INR 5 lakh.
                  </p>
                  <p className="text-[13px] leading-[1.65] text-navy-muted italic" style={{ marginBottom: "1.25rem" }}>
                    Disclaimer: Treatment outcomes and suitability vary between individuals. Costs are approximate and may differ based on hospital, city, and clinical needs. Please consult a qualified doctor for personalised advice.
                  </p>
                </div>

                {/* ── COMPARISON TABLE ── */}
                <div id="comparison" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    A Quick Comparison Guide
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[14px]" style={{ borderCollapse: "collapse", border: "1px solid #dadfe8" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#0f616e", color: "#ffffff" }}>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Procedure</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Best For</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Relief Duration</th>
                          <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Approx. Cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.map((row, i) => (
                          <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f5f9fa", borderBottom: "1px solid #dadfe8" }}>
                            <td style={{ padding: "12px 16px", fontWeight: 700, color: "#0f616e", verticalAlign: "top" }}>{row.procedure}</td>
                            <td style={{ padding: "12px 16px", color: "#182439", verticalAlign: "top" }}>{row.bestFor}</td>
                            <td style={{ padding: "12px 16px", color: "#182439", verticalAlign: "top" }}>{row.duration}</td>
                            <td style={{ padding: "12px 16px", color: "#182439", verticalAlign: "top" }}>{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── CHOOSING TREATMENT ── */}
                <div id="not-sure" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Not Sure Which Option Is Right for You?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Choosing the right treatment can feel confusing, and that's completely normal.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    The best option depends on your joint damage, pain level, and what your daily life demands from you. A good specialist will not just recommend a procedure but will help you understand why it fits your situation.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    There's no one-size-fits-all answer here, and based on your condition, your rheumatologist will recommend the best option suitable for you.
                  </p>
                </div>

                {/* ── NEWSLETTER ── */}
                <GoutNewsletter />

                {/* ── REFERENCES ── */}
                <div style={{ borderTop: "1px solid #dadfe8", paddingTop: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "2rem" }}>
                    Medically reviewed by Dr. Raghavendra H, Consultant Rheumatologist. Last updated: May 2026. This content is for informational purposes only and does not substitute professional medical advice. Costs mentioned are approximate and may vary by hospital, city, and individual clinical circumstances.
                  </p>
                  <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-navy-muted" style={{ marginBottom: "1rem" }}>References</p>
                  <ol className="space-y-3" style={{ paddingLeft: "1.25rem" }}>
                    {[
                      "Kolasinski SL, et al. ACR/Arthritis Foundation Guideline for the Management of OA. Arthritis Care and Research. 2020.",
                      "Rout SK, Dutta A. Economic Evaluation of Total Knee Replacement in India. PharmacoEconomics Open. 2024.",
                      "Star Health Insurance. Cost of Gel Injections for Knee Pain in India. starhealth.in.",
                      "Business Standard. India's First Off-the-Shelf Cell Therapy for Knee OA. 2022.",
                      "Surya Hospitals. Knee Surgery Cost in India - Procedure-wise Breakdown. 2025.",
                      "Lee CJ, et al. Intra-articular Hyaluronic Acid for Knee OA. JB JS Open Access. 2026;11(1):e25.00335. doi:10.2106/JBJS.OA.25.00335.",
                      "Arthritis Foundation. www.arthritis.org.",
                    ].map((ref, i) => (
                      <li key={i} className="text-[15px] leading-[1.7] text-navy-muted" style={{ listStyleType: "decimal" }}>{ref}</li>
                    ))}
                  </ol>
                </div>

                <hr className="border-none border-t border-[#dcdcdc] mt-10" />
              </div>

              {/* ── Right: TOC + Dr Card Sidebar ── */}
              <aside className="hidden lg:block w-[360px] shrink-0">
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 112px)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="guide-sidebar-scroll guide-toc" style={{ backgroundColor: "#E8F4F8", overflowY: "auto", overflowX: "hidden", flex: "1 1 auto", minHeight: 0, borderRadius: 0 }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocSections.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="text-left flex items-center gap-3 pr-5 transition-colors"
                            style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "9px", paddingBottom: "9px", borderBottom: "1px solid rgba(15,97,110,0.08)", borderRadius: 0 }}
                          >
                            <div style={{ width: 3, alignSelf: "stretch", backgroundColor: isActive ? "#0f616e" : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#9aa7b8", minWidth: "18px" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "13.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>
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
                        <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.62)", marginBottom: "5px" }}>Medically reviewed by</p>
                        <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.2, color: "#ffffff" }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,0.78)", marginBottom: "14px" }}>
                      Consultant Rheumatologist for osteoarthritis evaluation and long-term joint care.
                    </p>
                    <a
                      href="#"
                      className="group"
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "11px 16px 11px 18px", borderRadius: "9999px", textDecoration: "none" }}
                    >
                      Book Appointment
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </a>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" data-toc-section className="py-16 md:py-20 bg-ghost">
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
                      <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-45" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-sm text-navy-muted leading-relaxed">{faq.a}</p>
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

export default OsteoarthritisAdvanced
