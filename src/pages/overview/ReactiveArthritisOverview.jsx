import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Reactive Arthritis
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Reactive arthritis is joint pain and swelling that starts 1-6 weeks after an infection in the body.",
  "The joint itself is not infected. This is why antibiotics cannot treat the arthritis once it has begun.",
  "Common symptoms include swollen knees, ankles, or feet on either side, heel pain, eye redness, and mouth ulcers.",
  "Treatment options often involve anti-inflammatory medicines initially and steroid injections for a badly affected joint. Stronger medicines are given only if symptoms persist.",
  "Gut infections are common across India. Therefore, the pool of possible triggers is large, though the condition itself stays uncommon.",
]

const infectionRisks = [
  { infection: "Yersinia", risk: "Up to 13%" },
  { infection: "Salmonella", risk: "1 to 8%" },
  { infection: "Campylobacter", risk: "1 to 6%" },
  { infection: "Shigella", risk: "1 to 3%" },
]

const mainSymptoms = [
  "Swelling and pain affecting a few joints, usually on one side of the body. It mostly involves the knees, ankles, and feet.",
  "Morning stiffness. The pain often gets worse at night.",
  "Heel and Achilles tendon pain is typical.",
  "A whole finger or toe can swell along its full length (dactylitis).",
]

const otherSymptoms = [
  "Eye redness and irritation (conjunctivitis or uveitis).",
  "Mouth ulcers.",
  "Skin and nail changes.",
  "Urinary symptoms such as burning or discharge.",
]

const faqs = [
  {
    q: "Is reactive arthritis contagious?",
    a: "No. The infection that triggered it might be, but the arthritis itself cannot be passed to anyone else. It is a reaction happening inside your own immune system.",
  },
  {
    q: "Does reactive arthritis go away?",
    a: "Usually, though it takes longer than people expect. Most recover within 6-12 months. Some develop longer-lasting arthritis, which is why doctors keep following up even after you feel better.",
  },
  {
    q: "I had food poisoning a few weeks ago. Could that be the cause of reactive arthritis?",
    a: "Quite possibly, and the timing fits the usual pattern. Although most people who get food poisoning never develop reactive arthritis, getting yourself checked would be a better choice.",
  },
  {
    q: "Does a positive HLA-B27 test mean I have reactive arthritis?",
    a: "No. Carrying the gene raises your risk and tends to mean a longer, more severe course. But many people with reactive arthritis do not carry it, and most carriers never develop the condition. The diagnosis comes from your symptoms and history.",
  },
  {
    q: "Will antibiotics cure reactive arthritis?",
    a: "They treat the original infection, which matters when Chlamydia is the trigger. Once the arthritis has started, antibiotics do not treat the joint inflammation itself.",
  },
]

const references = [
  "Jogu P, Swamy V, Maher L. Reactive Arthritis. StatPearls, updated 15 May 2026.",
  "Reactive Arthritis. National Institute of Arthritis and Musculoskeletal and Skin Diseases, National Institutes of Health, 2025.",
  "Cammarata MJ. Reactive Arthritis: Chronic or Self-Limiting? The Rheumatologist, American College of Rheumatology, June 2025.",
  "Shafiee D, Salpynov Z, Gusmanov A, Khuanbai Y, Mukhatayev Z, Kunz J. Enteric Infection-Associated Reactive Arthritis: A Systematic Review and Meta-Analysis. Journal of Clinical Medicine, June 2024.",
  "Giraudo C, Astorri D, Reijnierse M. Reactive arthritis: a comprehensive journey through diagnostic findings. Skeletal Radiology, November 2025.",
  "Agarwal A, Maikap D, Padhan P. Treatment of Reactive Arthritis with Biological Agents. Current Rheumatology Reports, December 2024.",
  "Reactive Arthritis. Merck Manual Professional Edition, 2026.",
  "Disease burden of rheumatic diseases in India: COPCORD perspective. Indian Journal of Rheumatology.",
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Triggers", "Symptoms", "Diagnosis", "Treatment", "Recovery"]
const tabTargets = {
  Overview: "what-is-reactive-arthritis",
  Triggers: "infections-triggers",
  Symptoms: "symptoms",
  Diagnosis: "diagnosis",
  Treatment: "treatment",
  Recovery: "how-long-it-lasts",
}

const H3Style = {
  letterSpacing: "-0.2px",
  color: "#0f616e",
  marginTop: "2rem",
  marginBottom: "1rem",
  textDecoration: "underline",
  textDecorationColor: "#1AA3B5",
  textDecorationThickness: "2px",
  textUnderlineOffset: "6px",
}

function ReactiveArthritisOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Reactive Arthritis: What It Is, Causes and Treatment | Omni Rheuma"
    return () => {
      document.title = "Omni Rheuma"
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(100, Math.max(0, scrolled * 100)))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#E8F4F8" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-0 text-center">
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>
              A Patient Guide for India
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 8.5vw, 72px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0f616e", marginBottom: "1rem" }}>
              Reactive Arthritis
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options, explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/reactive.jpg"
                    alt="Reactive Arthritis"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => scrollTo(tabTargets[t])}
                    className="nav-tab transition-all hover:-translate-y-1"
                    style={{
                      flex: "1 1 120px",
                      maxWidth: "160px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e6ecf1",
                      borderRadius: "6px",
                      color: "#0f616e",
                      padding: "clamp(14px, 3.5vw, 20px) clamp(8px, 2.5vw, 12px)",
                      fontSize: "clamp(12px, 3vw, 14px)",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 6px 24px rgba(15,97,110,0.12)",
                      fontFamily: "var(--font-base)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Medically reviewed by */}
              <p style={{ marginTop: "28px", fontSize: "14px", color: "#4a6068", fontFamily: "var(--font-base)" }}>
                Medically reviewed by <strong style={{ color: "#0f616e" }}>Dr. Raghavendra H</strong>
              </p>
            </div>
          </div>
        </header>

        {/* ═══════════ CONTENT ═══════════ */}
        <section className="bg-white">
          <div className="overview-content max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* INTRO */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Food poisoning can be mild. A few rough days and it passes. It can also be serious enough that you would need to visit a hospital. Either way, once it clears, you move on. Then two weeks later, your knee swells up for no known reason, then your ankle, then your heel hurts so much that standing feels like a chore.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Nothing seems to link the two, and that is exactly why doctors miss this so often. The condition is called <strong>reactive arthritis</strong>. It is the joint pain and swelling that shows up after an infection occurs somewhere else in your body. Most cases begin in one of two places: the <strong>digestive system</strong>, as in the example above, or the <strong>urinary and genital tract</strong>. Here is the confusing part. That first infection is sometimes so mild it causes no symptoms at all, and by the time your joints flare up, it has usually cleared.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                This article explains what reactive arthritis is, which infections set it off, how doctors treat it, and how long it tends to last.
              </p>
            </div>

            <DarkDivider />

            {/* QUICK ANSWER BLOCK */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Quick Answer Block
              </h2>
              <div style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "22px 26px" }}>
                <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {quickAnswers.map((q, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "8px" }}>
                        <path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[16px] leading-[1.7] text-navy-deep">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <DarkDivider />

            {/* WHAT REACTIVE ARTHRITIS IS */}
            <div id="what-is-reactive-arthritis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                What Reactive Arthritis Is
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                <strong>Reactive arthritis</strong> describes a condition in which your joints become inflamed. Not because they are infected themselves, but because your immune system, while fighting off an earlier infection, has continued to overreact within your joints.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Let us understand, for example, your immune system fights off an infection in your gut or urinary tract. It then continues to react inside the joints that were never invaded even after the infection has subsided. This reaction causes swelling and pain. Doctors call this <strong>sterile inflammation</strong>, meaning inflammation without infection.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Reactive arthritis is part of a family of conditions called spondyloarthritis. It also includes{" "}
                <Link to="/Ankylosing-Spondylitis-overview" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                  ankylosing spondylitis
                </Link>{" "}
                and{" "}
                <Link to="/Psoriatic-Arthritis-overview" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                  psoriatic arthritis
                </Link>. What sets it apart is timing, since it follows an infection, usually within 1-6 weeks. You may also come across its older name, <strong>Reiter syndrome</strong>. This described a combination of joint pain, eye inflammation, and urinary symptoms appearing together. Only some people ever develop all three, which is one reason the term has been dropped.
              </p>
            </div>

            <DarkDivider />

            {/* THE INFECTIONS THAT TRIGGER IT */}
            <div id="infections-triggers" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                The Infections That Trigger It
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Two groups of infections account for most cases of reactive arthritis. From the digestive tract, the usual causative agents are <strong>Salmonella, Shigella, Campylobacter, Yersinia and certain strains of E. coli</strong>. Most people would call the illness itself food poisoning or a stomach infection rather than name the organism.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                From the urinary and genital tract, the commonest trigger is <strong>Chlamydia trachomatis</strong>, a sexually transmitted infection. <strong>Ureaplasma and Mycoplasma</strong> are also recognised. Chlamydia frequently causes no symptoms at all, which is why it goes unnoticed until the joints react.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                There is a third possibility worth knowing about. In roughly 40% of cases, no organism is ever identified. Even in specialist settings, a preceding infection is confirmed in only about 60% of patients.
              </p>
            </div>

            <DarkDivider />

            {/* HOW LIKELY DOES REACTIVE ARTHRITIS DEVELOP AFTER AN INFECTION */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                How Likely Does Reactive Arthritis Develop After an Infection?
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Most people who get a stomach infection never develop reactive arthritis. The risk is real but small, and varies by organism.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-left min-w-[500px]">
                  <thead>
                    <tr style={{ backgroundColor: "#e0f3f5" }}>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Infection</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Risk of developing reactive arthritis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infectionRisks.map((item, idx) => (
                      <tr key={idx} className="border-b border-[#dadfe8]">
                        <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{item.infection}</td>
                        <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Chlamydia carries a similar level of risk, with around 3 to 8% of people infected developing reactive arthritis. Other factors matter too. Severe initial infections, marked by high fever or persistent diarrhea, increase the risk of subsequent joint problems.
              </p>
            </div>

            <DarkDivider />

            {/* WHO GETS REACTIVE ARTHRITIS */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Who Gets Reactive Arthritis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Reactive arthritis is uncommon and occurs most often in young adults, roughly between ages <strong>18 and 40 years</strong>. After a gut infection, men and women are affected about equally. However, in sexually transmitted infections, men are affected far more often. HIV also raises the risk.
              </p>

              <h3 style={H3Style}>What HLA-B27 Actually Means</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                <strong>HLA-B27</strong> is an inherited genetic marker, found in many people with this family of conditions, and plays two roles here.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The first is risk. People who carry it are significantly more likely to develop reactive arthritis after an infection.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The second is of course. Carriers tend to have more severe, prolonged symptoms, and have more features outside the joints.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                However, this marker does not confirm the diagnosis. Many people with reactive arthritis do not carry the marker. So a negative result does not rule it out, and a positive result alone does not confirm it. A family history of related conditions also raises the chance of the arthritis persisting.
              </p>
            </div>

            {/* INLINE CTA */}
            <div style={{ marginTop: "2.5rem" }}>
              <ReviewedConsultationCta />
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Symptoms of Reactive Arthritis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Timing is the first clue. Symptoms usually begin 1-6 weeks after the infection. They appear relatively quickly, rather than developing slowly. Given below is a list of symptoms that can be experienced in reactive arthritis:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {mainSymptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>

              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                Other symptoms may include:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {otherSymptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>

              <p className="text-[16px] leading-[1.8] text-navy-muted">
                These can appear before, during, or after the joint symptoms.
              </p>
            </div>

            <DarkDivider />

            {/* HOW REACTIVE ARTHRITIS IS DIAGNOSED */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                How Reactive Arthritis is Diagnosed
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                There is no single test for reactive arthritis and no formally agreed set of diagnostic criteria. The diagnosis rests on a pattern: a recent infection, a characteristic joint presentation, and the exclusion of other causes.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                A doctor will take a history of any infection in the preceding weeks and order blood tests that measure inflammation. Sometimes a test for HLA-B27 is also needed, and fluid is drawn from a swollen joint. That last test carries particular weight. It sets apart reactive arthritis from an infected joint, which is an emergency requiring entirely different treatment.
              </p>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Treatment for Reactive Arthritis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Treatment works on two fronts. First is treating the <strong>original infection</strong>, and the second front includes <strong>treating the joints</strong>.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                When <strong>treating the original infection</strong>, where Chlamydia is the trigger, antibiotics are recommended, and sexual partners also need to be treated. So that reinfection does not occur. Gut infections are different. Antibiotics do not change the course of arthritis. But they may still be needed for the infection itself.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                While <strong>treating the joints</strong>, anti-inflammatory medicines are usually the first step. And a steroid injection into a badly affected joint can settle it when only 1 or 2 are involved. If symptoms continue for several weeks, a doctor may add a disease-modifying medicine. And for stubborn cases, biologic treatments are an option.
              </p>
            </div>

            <DarkDivider />

            {/* HOW LONG IT LASTS */}
            <div id="how-long-it-lasts" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                How Long It Lasts
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                The honest headline is that the majority of individuals do achieve a full recovery. But recovery usually takes 6-12 months, which is longer than most people expect when they first hear the diagnosis. Some symptoms linger. Studies found that a quarter to a half of the patients still had some symptoms after 2 years. Usually much milder than at the start, and around a quarter to a third develop longer-lasting arthritis.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Over 10-20 years, roughly 15 to 30% develop an ongoing form of spondyloarthritis, the wider family this condition belongs to.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Several factors increase the likelihood of a longer recovery. Carrying the HLA-B27 gene, hip joint involvement, high inflammation levels on blood tests, and a poor response to the first anti-inflammatory medicines tried. Symptoms also return more often when Chlamydia was the trigger than after a gut infection. None of this changes what to do now, but it does explain why doctors keep seeing you for a couple of years, even once you feel well.
              </p>
            </div>

            <DarkDivider />

            {/* WHEN TO SEE A DOCTOR */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                When to See a Doctor
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                See a doctor if a joint becomes swollen and painful in the weeks after any infection. Or if eye redness comes alongside joint pain. Or if joint symptoms are not settling on their own. Seek care the same day if a joint is hot and swollen and you also have a fever, since that combination can point to infection inside the joint.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                One thing is worth doing regardless. Mention any infection you had in the previous month, even if it seemed minor and cleared up. Because that detail is often the piece of information that makes sense of everything else.
              </p>

              {/* Consultation CTA Block */}
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>
                    Joint swelling after an infection? Consult a rheumatologist early
                  </p>
                </div>
                <Link
                  to="/book-appointment"
                  className="group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#E86531",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "12px 18px 12px 26px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  Book a Specialist Visit
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            <DarkDivider />

            {/* REFERENCES */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                References
              </h2>
              <ul className="space-y-3" style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
                {references.map((ref, idx) => (
                  <li key={idx} className="text-[15px] leading-[1.7] text-navy-muted pl-1">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>

            {/* MEDICAL DISCLAIMER */}
            <div className="mt-12 mb-8 p-6 rounded-lg border border-[#e0e0e0] bg-[#f9fbfb]">
              <p className="text-[13px] leading-[1.7] text-navy-muted italic">
                <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor about any medical concern.
              </p>
            </div>

          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#eef3f5" }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden group"
                  style={{ border: "1px solid #dbe5e9", boxShadow: "0 2px 10px rgba(15,97,110,0.06)" }}
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e0f3f5" }}>
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

export default ReactiveArthritisOverview
