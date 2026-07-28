import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const recommendSigns = [
  "Pain that doesn’t let you have peaceful sleep",
  "Feeling exhausted after taking a few steps",
  "Your knees grind as you climb stairs",
  "When hours of rest or strips of medicine don't help you with the swelling and pain",
  "If your imaging tests show moderate to severe joint damage.",
]

const surgerySigns = [
  "If you have a stubborn pain that doesn't respond to medicines and injections.",
  "Daily activities becomes very tiring that you cannot manage",
  "If your X-ray imaging tests show you grade 3 or 4 joint damage, where your joint becomes stiff and unstable.",
  "Every non-surgical treatment you have tried for a span of 6 months at least, and it hasn’t helped you get over your pain.",
]

const kneeCosts = [
  "Total knee replacement: INR 1.8 lakh to 4.5 lakh",
  "Partial knee replacement: INR 1.5 lakh to 2.8 lakh",
  "Bilateral knee replacement: INR 3 lakh to 8 lakh",
]

const comparisonRows = [
  { procedure: "Steroid Injection", bestFor: "Moderate Osteoarthritis, inflammation flare", duration: "4 to 8 weeks", cost: "INR 500 to 2,000" },
  { procedure: "Gel (HA) Injection", bestFor: "Mild to moderate Osteoarthritis, joint lubrication", duration: "6 to 12 months", cost: "INR 8,000 to 20,000" },
  { procedure: "PRP Injection", bestFor: "Mild to moderate OA, emerging option", duration: "6 to 12 months", cost: "INR 15,000 to 25,000" },
  { procedure: "Total Knee Replacement", bestFor: "Severe OA, end-stage damage", duration: "15 to 20 years", cost: "INR 1.8 to 4.5 lakh" },
  { procedure: "Partial Knee Replacement", bestFor: "Moderate to severe, one area damaged", duration: "10 to 15 years", cost: "INR 1.5 to 2.8 lakh" },
  { procedure: "Bilateral Knee replacement", bestFor: "When both knees have to be operated", duration: "10 to 15 years", cost: "INR 3 to 8 lakh" },
]

const faqs = [
  { q: "1. How long do steroid injections last for knee osteoarthritis?", a: "Steroid injections usually relieve you from pain in 4 to 8 weeks, and sometimes up to 3 months. This varies between patients depending on the level of damage and the stage of their condition." },
  { q: "2. Are gel injections painful?", a: "Most patients feel only mild discomfort during a gel injection, similar to any injection into a joint. The area may feel slightly sore for a day or two afterwards, but serious side effects are usually uncommon." },
  { q: "3. Is the Platelet Rich Plasma procedure covered under health insurance in India?", a: "Coverage varies across different insurers and policies. It is not consistently included in standard health insurance plans in India. It is worth checking your policy terms or calling your insurer before booking this procedure." },
  { q: "4. How do I know if I need a knee replacement?", a: "The clearest signs are consistent severe pain that does not settle with medications or injections, significant difficulty with daily activities, and severe joint damage confirmed on imaging. A rheumatologist or orthopaedic specialist can help you assess whether you have reached this stage." },
  { q: "5. How long does a knee replacement last?", a: "Most knee implants last 15 to 20 years. Longevity depends on how active you are, your weight, and the type of implant used." },
  { q: "6. Is knee replacement surgery covered under PM-JAY?", a: "Yes. Both total and partial knee replacement are covered under PM-JAY at specific hospitals for eligible beneficiaries, with annual coverage up to INR 5 lakh, including surgery, implants, and hospitalisation costs." },
]

const references = [
  "Kolasinski SL, et al. ACR/Arthritis Foundation Guideline for the Management of OA. Arthritis Care and Research. 2020.",
  "Rout SK, Dutta A. Economic Evaluation of Total Knee Replacement in India. PharmacoEconomics Open. 2024.",
  "Star Health Insurance. Cost of Gel Injections for Knee Pain in India. starhealth.in.",
  "Business Standard. India's First Off-the-Shelf Cell Therapy for Knee OA. 2022.",
  "Surya Hospitals. Knee Surgery Cost in India - Procedure-wise Breakdown. 2025.",
  "Lee CJ, Lee AH, Day W, Grauer JN. Intra-articular Hyaluronic Acid for Knee Osteoarthritis: Stabilizing Utilization Trends Amid Conflicting Clinical Practice Guidelines. JB JS Open Access. 2026;11(1):e25.00335. Published 2026 Jan 16. doi:10.2106/JBJS.OA.25.00335",
  "www.arthritis.org",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "when-recommended", label: "When does your doctor recommend a Specialised Procedure?" },
  { id: "injection-treatments", label: "Injection-Based Treatments for Osteoarthritis" },
  { id: "knee-replacement", label: "Knee Replacement Surgery" },
  { id: "comparison", label: "A quick comparison guide" },
  { id: "not-sure", label: "Not Sure Which Option Is Right for You?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function SpecialisedTreatmentOA() {
  const [activeSection, setActiveSection] = useState("when-recommended")

  useEffect(() => {
    document.title = "Osteoarthritis: Specialised Treatment Procedures - Injections, Surgery and What to Expect | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Osteoarthritis Specialised Treatment Procedures</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 8vw, 64px)",
                    fontWeight: 400,
                    lineHeight: "1.1",
                    letterSpacing: "-0.5px",
                    color: "#ffffff",
                    marginBottom: 0,
                  }}
                >
                  Osteoarthritis:
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(18px, 2.2vw, 26px)",
                      lineHeight: 1.3,
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                      marginTop: "0.85rem",
                    }}
                  >
                    Specialised Treatment Procedures - Injections, Surgery and What to Expect
                  </span>
                </h1>
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
                    Meena, a 54 year old woman, had a busy city life. Recently, she has volunteered to retire from her tiring job. Her health condition did not allow her to continue her satisfying job. Neither she could board a bus nor walk across the crowded streets.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    For many people with osteoarthritis, medicines, physiotherapy, and lifestyle changes bring meaningful relief. But at some point, their sufferings go beyond the limit. The pain starts interfering with sleep, movement, or even simple daily routines.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    That&rsquo;s when specialised treatment options come into the picture.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This range from quick clinic-based injections to more definitive solutions like a knee replacement surgery. By getting to know what each option offers, you can take a more confident step. Let&rsquo;s walk through when these treatments are considered, what they involve, and what you can expect, especially in the Indian context.
                  </p>
                </div>

                {/* ── WHEN RECOMMENDED ── */}
                <div id="when-recommended" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When does your doctor recommend a Specialised Procedure?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors have made consistent efforts with medicines and physiotherapy. You have made enough lifestyle changes. But these haven't helped you out of the situation, some special treatment options come into play.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Before suggesting the next step to you, your doctor might look into these signs
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {recommendSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Your doctor might suggest to you the treatment options based on the joint damage and how much it&rsquo;s affecting your daily routine. In most cases, injections are tried before considering surgery.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── INJECTION TREATMENTS ── */}
                <div id="injection-treatments" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Injection-Based Treatments for Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors advise you to take some injections, which often bridge between your medicines and surgery. They are quick, usually done in a clinic, don&rsquo;t require hospital admission and have no long recovery time. Based on the joint&rsquo;s damage, doctors recommend these options.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Steroid Injections
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Steroid injections are often considered the first step when your pain flares up.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A small dose of a steroid is injected into your joint space.This reduces your swelling and eases the pain. While it doesn&rsquo;t repair the joint or its progression, it can provide a helpful window of relief from the lingering pain. This helps you to have relaxed and pain-free physiotherapy sessions. Doctors generally limit these to 3-4 injections for a single joint in one year span, as overuse may affect your joint health over time. For some, the effect may last for 4 to 8 weeks, while for many it would last for up to 3 months.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    <strong className="font-semibold">Approximate cost in India:</strong> INR 500 to 2,000 per session
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Gel Injections (Hyaluronic Acid)
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When you are healthy, fluid acts as a natural cushion. In osteoarthritis, this fluid becomes thin and doesn't help move. Gel injections cushions the joints by adding hyaluronic acid. It lubricates your joints. This helps you to climb stairs without your knees creaking. Its effect may last 6 to 12 months, though results vary from each person and how severe it has been damaged.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    It&rsquo;s worth noting that the evidence is mixed. While some people experience some marked improvement, others may not. This differs based on the site and extent of damage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While some international associations for Osteoarthritis, like the European Society for Clinical and Economic Aspects of Osteoporosis and Osteoarthritis, suggest cautious use, many, like American Academy of Orthopaedic Surgeons (AAOS) and American College of Rheumatology/Arthritis Foundation (ACR), do not recommend suggest these treatment options.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    So it&rsquo;s best to have an open discussion with your doctor before taking the final call.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    <strong className="font-semibold">Approximate cost in India:</strong> INR 8,000 to 20,000 per injection
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    PRP Injections (Platelet-Rich Plasma)
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Blood is drawn similar to a routine blood test. Then it is processed in the labs to get thick concentrated platelets. These platelets help in healing and repair. This thick fluid is then injected back into the damaged joint. Instead of just relieving your pain, PRP aims to repair and improve joint health in a more natural way.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors often consider PRP when other injections haven&rsquo;t worked well for you, especially in mild to moderate osteoarthritis. It can be a good option if you&rsquo;re looking to delay your surgery and explore other treatment options that work with your body&rsquo;s own healing mechanisms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While early results are very promising, giving 6 to 12 months of relief in suitable patients, it is still an evolving treatment. It has not yet become a part of standard guidelines. The treatment results can differ from person to person and damage severity.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong className="font-semibold">Approximate cost in India:</strong> INR 15,000 to 25,000 per session (usually 2-3 sessions are recommended).
                  </p>
                  <div className="flex items-start gap-3 p-4 mb-6" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      (Costs mentioned are approximate and may differ based on hospital, city, and clinical needs. Please consult a qualified doctor for personalised advice)
                    </p>
                  </div>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What About Stem Cell Therapy?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Stem cell therapy is one of the recent and more talked-about options.They source the stem cells from the patients and process it in labs. After that they inject it back into the affected joints.This helps to heal the pain and swelling. There is mixed evidence suggesting it could help regrow your damaged cartilage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    India approved a commercially available stem cell product for knee osteoarthritis in 2022, with costs around INR 1.25 lakh per injection. While the idea sounds promising, it&rsquo;s important to know that strong clinical evidence is still limited, and it has not become a part of our routine treatment guidelines yet.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If you&rsquo;re considering it, a detailed discussion with your specialist is essential to understand whether it truly fits your condition and helps you get over it.
                  </p>
                </div>

                {/* ── KNEE REPLACEMENT ── */}
                <div id="knee-replacement" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Knee Replacement Surgery
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When all non-surgical options stop providing you relief and joint damage becomes more severe, knee replacement can be a life-changing option that your doctor might suggest. It gives back your peaceful, pain-free sleep and a carefree morning walk.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Currently, this is the most effective and promising treatment for advanced osteoarthritis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    When does your specialist recommend surgeries?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When your joints don&rsquo;t respond to any medicines or injections, it is time to look for surgical options. Your specialist may look for these signs before recommending you for knee replacement surgery.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {surgerySigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Besides your age, your doctor might consider how severe the pain is, if you can walk without your knee creaking and how badly it affects your routine before suggesting the treatment options.
                  </p>
                  <div className="flex items-start gap-3 p-4 mb-6" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      (Disclaimer: Treatment outcomes and suitability vary between individuals. Costs mentioned are approximate and may differ based on hospital, city, and clinical needs. Please consult a qualified doctor for personalized advice.)
                    </p>
                  </div>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What does your doctor operate on?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The specialists replace your damaged joint with specially designed components made of metal and durable plastic. These act like a new joint surface, helping the knee move more smoothly and with less pain. The goal is simple. It is to help you get back to enjoying everyday movements, whether it&rsquo;s walking around your home or stepping out with confidence.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While the surgery usually takes around 3 to 4 hours, your doctor may recommend a hospital stay of about 3 to 4 days so that your recovery can be closely monitored. During this time, pain is managed, and you are encouraged to make gentle movements. Soon after the procedure, the physiotherapist will guide you through simple exercises. It helps you to get back to your toes and walk freely. Step by step, this support helps you return to your daily routine more comfortably.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Based on how much of the joint is affected, your doctor may recommend one of two options. A total knee replacement is considered when most of your joint is damaged and needs a replacement. On the other hand, if the damage is limited to a specific area, a partial knee replacement may be suggested, where only the affected portion is replaced while preserving the healthy parts of your knee .
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What to expect in your recovery phase?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Recovery is a gradual but steady journey. For the first few days, you can expect the pain to be bearable, and can walk with support. After your physiotherapy sessions, your knees don't hurt as you walk.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You could start walking and climbing stairs, as you could feel the improvement in the next three months. After this, you start regaining your near-normal function.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Note that your full recovery depends on your age, fitness level, and how consistently you attend physiotherapy. Most patients experience pain relief and improved movement compared to their previous condition.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Cost of Knee Replacement in India
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Though the costs may vary depending on hospital, city, and implant type, approximately they might range between INR 1.5 lakh to 8 lakh
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {kneeCosts.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    If you are a central government employee or if you can avail government schemes like PM-JAY, along with CGHS and ESI, the hospitals can help you reduce costs. Schemes like PM-JAY can cover up to INR 5 Lakh.
                  </p>
                  <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      Costs mentioned are approximate and may differ based on hospital, city, and clinical needs. Please consult a qualified doctor for personalised advice.
                    </p>
                  </div>
                </div>

                {/* ── COMPARISON TABLE ── */}
                <div id="comparison" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
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
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Best For</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Relief Duration</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approx. Cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map((row) => (
                          <tr key={row.procedure} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.procedure}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.bestFor}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.duration}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

        {/* ═══════════ NOT SURE + REFERENCES ═══════════ */}
              <div id="not-sure" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  Not Sure Which Option Is Right for You?
                </h2>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                  Choosing the right treatment can feel confusing, and that&rsquo;s completely normal.
                </p>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                  The best option depends on your joint damage, pain level, and what your daily life demands from you. A good specialist will not just recommend a procedure but will help you understand why it fits your situation.
                </p>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                  There&rsquo;s no one-size-fits-all answer here, and based on your condition, your rheumatologist will recommend the best option suitable for you.
                </p>
                <p className="text-[13px] leading-[1.7] text-navy-muted" style={{ marginBottom: "3.5rem", color: "#5E5E5E" }}>
                  Medically reviewed by Dr. [Name], Consultant Rheumatologist and Dr. [Name], Orthopaedic Surgeon, [Hospital], [City]. Last updated: [Month, Year]. This content is for informational purposes only and does not substitute professional medical advice. Costs mentioned are approximate and may vary by hospital, city, and individual clinical circumstances.
                </p>
              </div>

              <div id="references" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  References
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
                      Consultant Rheumatologist for osteoarthritis evaluation and long-term joint care.
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

export default SpecialisedTreatmentOA
