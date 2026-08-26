import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Reactive Arthritis: Treatment and Recovery
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "Will antibiotics cure my reactive arthritis?",
    a: "It depends on the trigger. If a gut infection caused it, antibiotics do not help the arthritis. If chlamydia caused it, treating that infection matters, and longer courses help in prolonged cases.",
  },
  {
    q: "How long before I start feeling better?",
    a: "Anti-inflammatory medicines usually ease pain within days. Disease-modifying medicines take 6-12 weeks. The condition itself improves steadily over 6-12 months rather than resolving quickly.",
  },
  {
    q: "Do I need to take medicine for life?",
    a: "Not really. Most people stop treatment once symptoms settle. Only a minority of patients whose condition becomes long-lasting need to continue the medicine. And even then it is monitored regularly.",
  },
  {
    q: "Can I exercise while I have reactive arthritis?",
    a: "Yes, and it helps. Rest an actively inflamed joint, but keep moving between flares. A physiotherapist can show you what suits your joints and how much is sensible.",
  },
  {
    q: "Why do I need blood tests while on treatment?",
    a: "Disease-modifying medicines can affect blood counts and liver or kidney function in a small number of people. Regular testing catches any change early.",
  },
  {
    q: "Does the reactive arthritis come back?",
    a: "It can. Recurrence is more likely if chlamydia was the trigger than after a gut infection. Staying in touch with your doctor after recovery makes any return easier to catch early.",
  },
]

const references = [
  "Jogu P, Swamy V, Maher L. Reactive Arthritis. StatPearls, updated 15 May 2026.",
  "Reactive Arthritis: Diagnosis, Treatment, and Steps to Take. National Institute of Arthritis and Musculoskeletal and Skin Diseases, National Institutes of Health, 2025.",
  "Mruthyunjaya P, Maikap D, Ahmed S, Misra R, Padhan P. Short-Term Effectiveness of Sulfasalazine and Tofacitinib in NSAID-Refractory Reactive Arthritis: An Observational Study. International Journal of Rheumatic Diseases, July 2025.",
  "Cammarata MJ. Reactive Arthritis: Chronic or Self-Limiting? The Rheumatologist, American College of Rheumatology, June 2025.",
  "Reactive arthritis: Diagnosis and treatment. Mayo Clinic, 22 December 2025.",
  "Carter JD, et al. Combination antibiotics as a treatment for chronic Chlamydia-induced reactive arthritis: a double-blind, placebo-controlled, prospective trial.",
  "Clegg DO, Reda DJ, Weisman MH, et al. Comparison of sulfasalazine and placebo in the treatment of reactive arthritis.",
  "Agarwal A, Maikap D, Padhan P. Treatment of Reactive Arthritis with Biological Agents. Current Rheumatology Reports, December 2024.",
  "Reactive Arthritis Treatment and Management. Medscape, 2025.",
  "Tata 1mg. Sulfasalazine brand pricing and prescribing information, accessed August 2026.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "treatment-goals", label: "What Treatment Is Trying to Do" },
  { id: "medicines", label: "Medicines Used in Treatment" },
  { id: "outside-joints", label: "Treating Symptoms Outside the Joints" },
  { id: "monitoring", label: "Monitoring While on Treatment" },
  { id: "costs-india", label: "What Treatment Costs in India" },
  { id: "living-with", label: "Living With Reactive Arthritis" },
  { id: "recovery", label: "How Recovery Usually Goes" },
  { id: "see-rheumatologist", label: "When to See a Rheumatologist" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function ReactiveArthritisTreatment() {
  const [activeSection, setActiveSection] = useState("treatment-goals")

  useEffect(() => {
    document.title = "Reactive Arthritis: Treatment and Recovery | Omni Rheuma"
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
    <div className="landing-page bg-white text-navy-deep antialiased">
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
                Reactive Arthritis Treatment and Recovery
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
                  Reactive Arthritis:
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
                    Treatment and Recovery
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
                    Receiving a diagnosis of reactive arthritis can often bring different advice. A relative might tell you that antibiotics are the solution, while an online article claims they are useless. Your physician may prescribe an anti-inflammatory and advise patience. Meanwhile, the joint pain persists, leaving you uncertain about the next steps.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    None of that advice is wrong, and that is the confusing part. Reactive arthritis is treated differently depending on what triggered it and how long it has been going on. So two people with the same diagnosis can end up on completely different prescriptions.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This article covers what the treatment achieves, the medicines used at each stage, what to do, and how long recovery takes. It is worth discussing with your rheumatologist about the treatment combination suitable for you. Also, knowing the options makes that conversation far more useful.
                  </p>
                </div>

                {/* ── 1. WHAT TREATMENT IS TRYING TO DO ── */}
                <div id="treatment-goals" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Treatment Is Trying to Do
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There is no cure for reactive arthritis, and that sounds worse than it is. For most people, the condition settles on its own. The primary goals of treatment are to manage symptoms, safeguard joint health throughout the process, and escalate therapy if improvement stalls.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The timeline is worth knowing from the start. Most people recover, but it may take over 6-12 months. Expecting a quick fix is the fastest route to feeling that treatment has failed.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── 2. MEDICINES USED IN TREATMENT ── */}
                <div id="medicines" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Medicines Used in Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Treatment works in stages, and most people never get past the first one.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    1. Anti-Inflammatory Medicines and Steroids
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Anti-inflammatory medicines are prescribed as first-line therapy. They control pain and swelling, and for many people that is all that is needed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Steroids are the next step. They are given depending on the affected body parts. An injection into a joint works well when only 1 or 2 are badly inflamed, and the effect can last weeks to months. Tablets may be used when several joints are involved.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    2. Antibiotics
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Whether antibiotics help depends entirely on the condition type. This is where most of the confusion comes from.
                  </p>
                  <ol className="space-y-4 mb-7" style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li className="text-[17px] leading-[1.8] text-navy-deep flex items-start gap-2.5">
                      <span className="shrink-0 font-normal">a)</span>
                      <span>
                        <strong>If a gut infection triggered it, antibiotics do not help to treat reactive arthritis.</strong> Studies have compared them against dummy treatment, including long courses, and found no benefit. The joint inflammation is not an infection, so there is no bacteria in the joint for an antibiotic to act on. An active gut infection may still need treatment, but that is separate from the arthritis.
                      </span>
                    </li>
                    <li className="text-[17px] leading-[1.8] text-navy-deep flex items-start gap-2.5">
                      <span className="shrink-0 font-normal">b)</span>
                      <span>
                        If infections such as chlamydia have triggered it, the picture is completely different. <strong>Treating the original infection caused by Chlamydia matters, as prompt treatment reduces the risk of development of reactive arthritis.</strong> Sexual partners need treatment too, because reinfection reverses the benefit. For chlamydia-triggered arthritis carrying on past 6 months, a longer combination course has been shown to work. Approximately two-thirds of patients improved in one trial against about 1 in 5 given a dummy treatment.
                      </span>
                    </li>
                  </ol>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    3. When Symptoms Do Not Settle
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    If your symptoms last over several weeks, your doctor may add <strong>disease-modifying medicines</strong>. These medications work differently than typical painkillers. Instead of merely mitigating pain, they actively suppress the underlying immune response that causes the inflammation.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong>Sulfasalazine</strong> is usually the first choice. In one trial, approximately 62% of people saw improvement, against about 48% given a dummy treatment. It does not work immediately. It typically takes <strong>6-12 weeks</strong> to show its full effect. Stopping early because nothing seems to be happening is a common mistake.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A 2025 study from a rheumatology centre in Bhubaneswar compared sulfasalazine with a newer tablet called <strong>tofacitinib</strong> in 50 patients who had not responded to anti-inflammatory medicines. Both worked comparably by 12 weeks, though tofacitinib acted faster, showing improvement by week 4.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    4. If It Becomes Long-Lasting
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    For the few people whose symptoms continue long-term, doctors use treatment plans similar to those for related conditions, such as psoriatic arthritis or ankylosing spondylitis. Instead of suppressing your entire immune system, these treatments use biologic medications that target specific parts of the body's inflammatory process.
                  </p>
                </div>

                {/* ── 3. TREATING SYMPTOMS OUTSIDE THE JOINTS ── */}
                <div id="outside-joints" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treating Symptoms Outside the Joints
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Reactive arthritis is not only a joint condition; the other symptoms also need to be treated. Mild eye irritation often settles on its own, but inflammation inside the eye needs steroid eye drops from an eye specialist. Rashes on the palms or soles are managed with steroid creams, and nail changes improve as the condition settles. Urinary symptoms depend on the cause.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Eyes are the one part where waiting carries a real cost. Repeated or severe inflammation inside the eye can affect your vision over time, though it can be treated when caught early.
                  </p>
                </div>

                {/* ── 4. MONITORING WHILE ON TREATMENT ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Monitoring While on Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Disease-modifying medicines need regular blood tests, which can catch people by surprise. They check your blood counts and how well your liver and kidneys are working, before treatment starts and at intervals afterwards. It is a part of routine monitoring. It does not mean anything is wrong.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Sulfasalazine can also turn urine, skin or tears a harmless orange colour, which alarms people who have not been warned. Report side effects to your doctor rather than stopping the medicine yourself.
                  </p>
                </div>

                {/* ── 5. WHAT TREATMENT COSTS IN INDIA ── */}
                <div id="costs-india" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Treatment Costs in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most reactive arthritis treatment is affordable. Anti-inflammatory medicines and steroid tablets are among the cheapest available in India. In addition, opting for a steroid injection represents a single, one-time outpatient expense as opposed to a continuous financial commitment. Sulfasalazine too is affordable, with generic versions costing approximately Rs 3 to Rs 5 per tablet.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Newer tablets like tofacitinib cost considerably more, and biologic treatments are even more costly. These are only used in the minority of cases that do not settle. Your rheumatologist will discuss cost before starting anything in that bracket.
                  </p>
                </div>

                {/* ── 6. LIVING WITH REACTIVE ARTHRITIS ── */}
                <div id="living-with" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Living With Reactive Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Medicines are only part of it. What you do between appointments makes a real difference to how the months ahead feel.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Physiotherapy and Movement
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Two kinds of exercises are advisable, having different benefits. Strengthening exercises build up the muscles around a joint, which supports it and takes strain off it. Range-of-movement exercises keep the joint flexible and stop it from stiffening.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Rest matters during a flare, movement matters between flares, and a physiotherapist can help you judge which phase you are in.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Managing Symptoms Day to Day
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Heat and cold both help, depending upon the symptoms. Heat increases blood flow and improves flexibility, which suits stiffness. Cold numbs the nerves around a joint and dulls pain, which suits a joint that is actively inflamed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Shoe inserts or a brace can take pressure off a painful joint when you stand or walk. This matters most when the feet and heels are involved.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Looking After Yourself
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A painful condition that drags on for months is genuinely difficult. Sleep gets disrupted, work gets harder, and plans get cancelled at short notice.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Pace yourself rather than pushing through bad days. Tell people at work what is happening so adjustments are easier to ask for. If your mood suffers, mention it to your doctor.
                  </p>
                </div>

                {/* ── 7. HOW RECOVERY USUALLY GOES ── */}
                <div id="recovery" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Recovery Usually Goes
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most people recover within 6-12 months. Symptoms fade gradually rather than stopping all at once. Good weeks followed by bad weeks are normal rather than a sign something has gone wrong. A smaller number of patients may find symptoms that continue over 6 months. At this point the condition is considered long-lasting.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Follow-up with your doctor regularly, even after you feel better. Symptoms return for some people, and recurrence is more likely when chlamydia was the original trigger than after a gut infection. Prompt treatment of any future infection matters, and so does treatment of your partner where relevant.
                  </p>
                </div>

                {/* ── 8. WHEN TO SEE A RHEUMATOLOGIST ── */}
                <div id="see-rheumatologist" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to See a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A general doctor can start treatment. A rheumatologist becomes important in the following situations: if symptoms are not settling after several weeks, if more joints become involved, if your spine is affected, if you cannot tolerate the first medicines tried, or if stronger treatment is being considered.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Eye symptoms must be treated without any delays. Pain in the eye, light sensitivity, or blurred vision needs an eye specialist promptly.
                  </p>
                </div>

                {/* ── CTA BUTTON ── */}
                <div
                  style={{
                    backgroundColor: "#0f616e",
                    borderRadius: "16px",
                    padding: "clamp(28px, 6vw, 48px) clamp(20px, 4vw, 42px)",
                    marginTop: "2.5rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, marginBottom: "8px", textDecoration: "none" }}>
                    Need expert guidance on your treatment?
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: 1.6, marginBottom: "6px" }}>
                    Discuss your treatment plan with a rheumatologist who specialises in reactive arthritis.
                  </p>
                  <Link
                    to="/book-appointment"
                    className="group inline-flex items-center gap-2"
                    style={{
                      backgroundColor: "#E86531",
                      color: "#ffffff",
                      fontFamily: "var(--font-base)",
                      fontWeight: 700,
                      fontSize: "14px",
                      padding: "12px 18px 12px 26px",
                      borderRadius: "9999px",
                      textDecoration: "none",
                      marginTop: "1rem",
                    }}
                  >
                    Book a Consultation with Dr Raghavendra H
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

                {/* ── 9. REFERENCES ── */}
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

                  <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                    <p className="text-[13px] leading-[1.6] text-navy-muted italic">
                      <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Never start, stop, or change a prescribed medicine without speaking to a qualified doctor.
                    </p>
                  </div>
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
                            <span style={{ fontSize: "15px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.45 }}>
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
                      Consultant Rheumatologist specializing in inflammatory arthritis, reactive arthritis, and post-infection joint care.
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
                      <p>{faq.a}</p>
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

export default ReactiveArthritisTreatment
