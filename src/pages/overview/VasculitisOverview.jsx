import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Vasculitis
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Vasculitis is swelling of the blood vessel walls. Narrowed blood vessels reduce blood flow to the organs they supply.",
  "Common symptoms include recurring fever, fatigue, weight loss, skin rashes that do not fade, numbness in hands and feet, and blood in the urine.",
  "Diagnosis uses blood tests, urine tests, biopsy and vessel imaging, led by a rheumatologist.",
  "Treatment aims to control inflammation. It can be managed well, and long symptom-free periods can be achieved.",
]

const vasculitisTypes = [
  {
    size: "Large",
    conditions: "Giant Cell Arteritis (GCA), Takayasu Arteritis",
    affects: "GCA: adults over 50 years of age; Takayasu: women under 40 years of age",
    effects: "Headache, vision problems, absent pulses, unequal blood pressure between arms",
  },
  {
    size: "Medium",
    conditions: "Polyarteritis Nodosa (PAN), Kawasaki Disease",
    affects: "PAN: middle age; Kawasaki: children under 5 years of age",
    effects: "Nerve pain, skin nodules, heart artery involvement in children",
  },
  {
    size: "Small",
    conditions: "Anti-neutrophil cytoplasmic antibodies (ANCA group), including granulomatosis with angiitis (GPA), microscopic polyangiitis (MPA), eosinophilic granulomatosis with polyangiitis (EGPA); IgA vasculitis",
    affects: "Varies by type; IgA mostly in children",
    effects: "Kidney problems, lung and sinus symptoms, skin rashes",
  },
  {
    size: "Variable",
    conditions: "Behcet's disease",
    affects: "Young adults",
    effects: "Mouth and genital ulcers, eye inflammation",
  },
]

const commonTriggers = [
  "Recent illnesses or infections, like certain types of hepatitis.",
  "Other conditions where the body attacks itself, such as lupus or rheumatoid arthritis.",
  "A reaction to a new medication you might be taking.",
  "Very rarely, as a side effect of cancer.",
]

const generalSymptoms = [
  "Fever that comes and goes",
  "Deep fatigue",
  "Loss of appetite and weight loss",
  "Night sweats",
  "Aching joints and muscles",
]

const specificSymptoms = [
  "Raised reddish-purple spots on the skin that do not fade with pressure, known medically as palpable purpura, often on the legs.",
  "Skin ulcers or tender nodules.",
  "Numbness, tingling, or weakness in the hands and feet.",
  "Cough or breathlessness.",
  "Blood in the urine, or dark-colored urine.",
  "Unusual headache, scalp tenderness, or jaw pain while chewing.",
  "Vision changes.",
]

const diagnosisTests = [
  "Blood tests for inflammation markers and the ANCA antibody test.",
  "A urine test, because kidney involvement is often silent.",
  "A biopsy, where a small sample of affected tissue, usually skin, is examined.",
  "Vessel imaging, such as angiography or CT and MR angiograms.",
]

const treatmentOptions = [
  "Steroids, which act fast and form the backbone of early treatment.",
  "Immune-suppressing agents, which allow the steroid doses to be lowered.",
  "Biologic medicines, including rituximab for ANCA-type vasculitis and tocilizumab for large-blood-vessel type vasculitis.",
  "Surgery, reserved for vessels that have been badly damaged.",
]

const faqs = [
  {
    q: "Is vasculitis a type of cancer?",
    a: "No. Vasculitis is an overreactive immune condition in which the immune system swells blood vessel walls.",
  },
  {
    q: "Can vasculitis be cured completely?",
    a: "There is no permanent cure yet, but most types can be managed well with medicines. Many people have symptoms that disappear for months or years at a time.",
  },
  {
    q: "Is vasculitis hereditary?",
    a: "Generally not. Genes may slightly raise susceptibility, but family members developing the same condition is uncommon.",
  },
  {
    q: "Which doctor treats vasculitis?",
    a: "A rheumatologist leads vasculitis treatment. They often work with kidney, lung, skin, or eye specialists depending on the organs involved.",
  },
  {
    q: "Is vasculitis common in India?",
    a: "Vasculitis overall is rare everywhere. But Takayasu arteritis is seen more often in India than in Western countries, mostly in women under 40 years of age, where it can first appear as high blood pressure or a missing pulse.",
  },
  {
    q: "What happens if vasculitis is left untreated?",
    a: "Untreated inflammation can permanently damage the organs supplied by the affected vessels, including the kidneys, lungs, nerves and eyes. Most of that damage is preventable when treatment starts early.",
  },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Types", "Causes", "Symptoms", "Diagnosis & Treatment"]
const tabTargets = {
  Overview: "understanding-vasculitis",
  Types: "types-of-vasculitis",
  Causes: "causes",
  Symptoms: "symptoms",
  "Diagnosis & Treatment": "diagnosis-treatment",
}

const H3Style = {
  letterSpacing: "-0.2px",
  color: "#0f616e",
  marginTop: "2rem",
  marginBottom: "1rem",
  fontSize: "1.35rem",
  textDecoration: "underline",
  textDecorationColor: "#1AA3B5",
  textDecorationThickness: "2px",
  textUnderlineOffset: "6px",
}

function VasculitisOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Vasculitis: What It Is, Causes, Symptoms and Treatment | Omni Rheuma"
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
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 7vw, 68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Vasculitis
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, causes, symptoms and treatment options, explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/overvIew/vasculitis.jpg"
                    alt="Vasculitis"
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
                      flex: "1 1 130px",
                      maxWidth: "180px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e6ecf1",
                      borderRadius: "6px",
                      color: "#0f616e",
                      padding: "clamp(16px, 4vw, 22px) clamp(8px, 3vw, 14px)",
                      fontSize: "clamp(12px, 3.2vw, 14px)",
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
                Vasculitis often begins with something as ordinary as a persistent fever or tiredness that will remain for a long time. It can be difficult to diagnose because its early signs are often subtle, even though the actual issue is inflammation in the blood vessel walls.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                In <strong>vasculitis</strong>, the walls of your blood vessels become swollen. Swelling narrows the vessel, causing reduced blood flow to the organs. It is not a single disease. It is a family of more than 30 related conditions. This is the reason it looks different to different people.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Vasculitis globally affects approximately 198 per million people. Indian subcontinent data remain notably sparse, though <strong>Takayasu arteritis</strong> is seen commonly across Asia, including India. Vasculitis presents in many types, and most of them respond well to modern medicines. Therefore, longer symptom-free periods can be achieved with prompt management.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                This page covers the types, causes, symptoms, diagnosis and treatment, with special attention to India.
              </p>
            </div>

            <DarkDivider />

            {/* QUICK ANSWER BOX */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Quick Answer Box
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

            {/* UNDERSTANDING VASCULITIS */}
            <div id="understanding-vasculitis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Understanding Vasculitis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Vasculitis affects the blood vessels, which are the body's transport network. Arteries carry blood from the heart to supply other organs, while veins carry it back to the heart.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In vasculitis, your immune system mistakenly attacks the walls of blood vessels, causing them to swell and thicken. This thickening reduces blood flow. Sometimes the wall weakens and can bulge, called an <strong>aneurysm</strong>.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Symptoms of vasculitis follow the vessel. It means if the inflamed vessels supply the skin, rashes appear. If they supply the kidneys, kidney function suffers. If they supply the nerves, numbness and tingling will occur. Thus, people with vasculitis can have completely different symptoms of the same disease.
              </p>

              <h3 style={H3Style}>Population Affected by Vasculitis in India</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Vasculitis is a rare condition. Estimates suggest less than 50 new cases per million people each year. Giant cell arteritis, the commonest type in Western countries, affects people over the age of 50 years.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Takayasu arteritis, a large vessel type, is seen more often in India, Japan, Korea and Thailand than in the West, and it mostly affects women under 40 years of age. In children, IgA vasculitis is the commonest form.
              </p>

              <div id="types-of-vasculitis" style={{ scrollMarginTop: "80px" }}>
                <h3 style={H3Style}>Types of Vasculitis</h3>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                  There are more than 30 types of vasculitis. These are categorized depending on the size of the vessel involved.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse text-left min-w-[680px]">
                    <thead>
                      <tr style={{ backgroundColor: "#e0f3f5" }}>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Vessel size</th>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Main conditions</th>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Who it usually affects</th>
                        <th className="p-4 text-[14px] font-bold text-navy-deep">Common effects</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vasculitisTypes.map((row) => (
                        <tr key={row.size} className="border-b border-[#dadfe8]">
                          <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.size}</td>
                          <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.conditions}</td>
                          <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.affects}</td>
                          <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.effects}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[17px] leading-[1.8] text-navy-deep">
                  ANCA are blood antibodies that help doctors identify specific small blood-vessel-type vasculitis. "ANCA-associated vasculitis" refers to this group.
                </p>
              </div>
            </div>

            {/* INLINE CTA */}
            <div style={{ marginTop: "2.5rem" }}>
              <ReviewedConsultationCta />
            </div>

            <DarkDivider />

            {/* CAUSES AND RISK FACTORS */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Causes and Risk Factors
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In about half of all cases, the exact cause is unknown. Normally, your immune system protects you by fighting infections. In vasculitis, it mistakenly attacks your blood vessel walls instead, and the cause is not clearly identified.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                While the exact cause is not known, doctors in India link it to some common triggers as follows:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {commonTriggers.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                When vasculitis appears on its own, it is called <strong>primary</strong>. When it develops as a complication of another illness, it is <strong>secondary</strong>, and requires treatment. Age is also a risk factor. Smoking worsens the vessel inflammation.
              </p>
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Symptoms of Vasculitis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Common symptoms similar across most of the types of vasculitis come from inflammation itself:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {generalSymptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Outside of these general signs, the specific symptoms depend on which part of your body is losing its blood supply because of the inflammation:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {specificSymptoms.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                In India, high blood pressure in a young person, a pulse that cannot be felt at the wrist, or clearly different blood pressure readings between the two arms can be the first sign of Takayasu arteritis. If this describes you or someone in your family, ask for a rheumatology opinion rather than just treating the blood pressure.
              </p>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS AND TREATMENT */}
            <div id="diagnosis-treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                Diagnosis and Treatment Options for Vasculitis
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Several conditions mimic vasculitis, so a confirmatory diagnosis means ruling those out. Later, the inflammation in the vessel wall is then confirmed, usually with a biopsy.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                The tests commonly include:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {diagnosisTests.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem", fontWeight: 600 }}>
                The treatment options usually include:
              </p>
              <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {treatmentOptions.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <DarkDivider />

            {/* WHEN TO CONSULT A RHEUMATOLOGIST */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>
                When to Consult a Rheumatologist
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Unexplained fever, rashes that do not fade, numbness in the hands or feet, or high blood pressure at a young age deserve more than waiting. If any of these sound familiar, book a rheumatology consultation and ask whether vasculitis should be ruled out.
              </p>

              {/* Consultation CTA Block */}
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>
                    Unexplained fever, rashes, or numbness? Consult a rheumatologist early
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
                  Book a Consultation with Dr Raghavendra H
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
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

export default VasculitisOverview
