import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Lupus (SLE)
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Lupus is an autoimmune disease in which the immune system attacks the body's own tissue.",
  "Women aged between 15 to 45 years are at most risk.",
  "Common symptoms include butterfly-shaped facial rash, joint pain, fatigue, hair loss, and mouth ulcers.",
  "Complications include kidney involvement, known as lupus nephritis.",
  "Treatments include : Hydroxychloroquine plus daily sun protection for almost all patients.",
]

const lupusTypes = [
  { title: "Systemic Lupus Erythematosus (SLE)", desc: "The most common and serious type. This affects multiple organs. This article will mainly focus on SLE." },
  { title: "Cutaneous Lupus", desc: "It mainly affects the skin. Cutaneous lupus does not usually involve internal organs such as stomach, lungs etc." },
  { title: "Drug-Induced Lupus", desc: "When any medicine triggers lupus, it is called drug-induced lupus. The symptoms usually resolve when the medication is stopped." },
  { title: "Neonatal Lupus", desc: "It is a rare condition in newborn babies. They usually develop in those babies whose mothers have abnormal antibodies. Mostly, they are cured within a few months." },
]

const envTriggers = [
  { title: "Sunlight", desc: "This is one of the most common triggers. It causes rashes. These rashes activate the immune system." },
  { title: "Infections", desc: "Infections increase lupus activity among people who are prone to this condition." },
  { title: "Stress", desc: "Physical or emotional stress is one of the most commonly reported triggering factors of lupus." },
  { title: "Certain medications", desc: "Blood pressure medicines, seizure medicine and some antibiotics lead to drug-induced lupus." },
  { title: "Smoking", desc: "Smoking makes the lupus symptoms severe and also makes treatment less effective." },
]

const riskFactors = [
  "Women of childbearing age between 15 and 45 years. ,",
  "A family history of autoimmune disease,",
  "People living in Asia",
  "Prolonged sun exposure without protection",
]

const earlySigns = [
  { title: "Malar rash (butterfly rash)", desc: "A rash develops across both cheeks and the nose bridge. On Indian skin tones, it looks like a dark skin discolouration rather than a clear red flush, which is one reason it is ignored." },
  { title: "Joint pain and stiffness", desc: "Pain mostly occurs in the hand, wrist, and knee joints." },
  { title: "Fatigue", desc: "Continuous heavy tiredness that does not improve even after rest." },
  { title: "Hair loss", desc: "Hair may thin overall or can fall out in patches." },
  { title: "Fever", desc: "Low-grade fever with no obvious infection. Fever often accompanies a flare." },
  { title: "Oral ulcers", desc: "Painless sores inside the mouth or nose." },
]

const organInvolvement = [
  { organ: "Kidneys", watch: "Swelling in the ankles, Urine: foamy or dark coloured, passing less urine than usual" },
  { organ: "Heart", watch: "Pain in the chest, Shortness of breath, Racing or irregular heartbeat" },
  { organ: "Lungs", watch: "Sharp pain in the chest that worsen by taking a deep breath" },
  { organ: "Brain", watch: "Continuous headaches, Confusion, Memory loss, Seizures" },
  { organ: "Blood", watch: "Unusual tiredness from low blood levels, bruising easily, or bleeding that takes a long time to stop" },
]

const medTiers = [
  { tier: "1", type: "NSAIDs", when: "Mild joint pain and fever during flares" },
  { tier: "2", type: "Hydroxychloroquine (HCQ)", when: "Backbone of all lupus treatment, used in nearly every patient" },
  { tier: "3", type: "Corticosteroids", when: "During active flares, to reduce inflammation rapidly" },
  { tier: "4", type: "Immunosuppressants", when: "Moderate to severe disease, especially kidney involvement" },
  { tier: "5", type: "Biologics (belimumab)", when: "When standard treatment does not work" },
]

const faqs = [
  { q: "Is lupus curable?", a: "No, there is no complete cure for lupus. Treatment can control disease progression, prevent organ damage, and reduce how often flares happen. Many people experience long periods of remission in which symptoms are minimal." },
  { q: "Can lupus be life-threatening?", a: "When the kidneys, heart, or lungs are involved, lupus can become life-threatening. Lupus nephritis is the most serious complication. Most people with lupus who are diagnosed early and treated consistently live a normal life. There are risks, but it is manageable with early treatment and lifestyle changes." },
  { q: "What is the butterfly rash in lupus?", a: "A rash that spreads across both cheeks and the nose bridge. It mainly appears or worsens after sun exposure. On Indian skin tones, it appears as darkened or brownish discolouration instead of a red rash. As a result, it often goes unnoticed." },
  { q: "Does lupus affect pregnancy?", a: "Lupus raises the risk of miscarriage, preterm birth, and high blood pressure during pregnancy. With rheumatology and obstetric care, many women with lupus have successful pregnancies." },
  { q: "Why does sunlight make lupus worse?", a: "UV radiation triggers an immune response. This can cause or worsen both skin rashes and systemic flares. This is photosensitivity. It is one of the main reasons sun protection is very important in lupus management, especially in India." },
]

const references = [
  "Malaviya AN, Singh RR, Singh YN, Kapoor SK, Kumar A. Prevalence of systemic lupus erythematosus in India. Lupus. 1993;2(2):115-118. doi:10.1177/096120339300200209",
  "Singh A, Kamen DL. Potential benefits of vitamin D for patients with systemic lupus erythematosus. Dermatoendocrinol. 2012;4(2):146-151. doi:10.4161/derm.20443",
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Daily Living"]
const tabTargets = { Overview: "what-is-lupus", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Daily Living": "living" }

const H3Style = { letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }

function LupusOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Lupus (SLE): What It Is, Symptoms, Causes and Treatment Options | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
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
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 62px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Lupus (SLE)
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options, explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/overvIew/Lupus.webp" alt="Lupus (SLE)" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button key={t} onClick={() => scrollTo(tabTargets[t])} className="nav-tab transition-all hover:-translate-y-1" style={{ flex: "1 1 130px", maxWidth: "180px", backgroundColor: "#ffffff", border: "1px solid #e6ecf1", borderRadius: "6px", color: "#0f616e", padding: "clamp(16px, 4vw, 22px) clamp(8px, 3vw, 14px)", fontSize: "clamp(12px, 3.2vw, 14px)", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(15,97,110,0.12)", fontFamily: "var(--font-base)" }}>
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
                Meena, aged 20 years, noticed a red rash spreading across both cheeks. Later, she started experiencing pain in the joints, hair loss and excessive tiredness. None of the specialists she visited, including a general physician, dermatologist or gynaecologist could identify the main cause. It took nearly a year to connect all the symptoms together to make a final diagnosis as Lupus.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                Lupus is a long-term autoimmune disease where the immune system mistakenly attacks its own tissue. It can affect the skin, joints, kidneys, heart, lungs, and brain, often all at once. Common symptoms are often misdiagnosed for years. There is no cure, but with the right treatment, most people can manage their symptoms and live full lives. This article will help you understand what lupus is and its symptoms, causes, how it is diagnosed, and what treatment looks like in India.
              </p>
            </div>

            <DarkDivider />

            {/* QUICK ANSWER */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Quick Answer Block</h2>
              <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {quickAnswers.map((q, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{q}</li>
                ))}
              </ul>
            </div>

            <DarkDivider />

            {/* WHAT IS LUPUS */}
            <div id="what-is-lupus" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Is Lupus?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Lupus is a long-term condition in which the body&apos;s immune system attacks its own tissues and organs. In a healthy body, the immune system makes antibodies, which fight against infections. But in lupus, it makes abnormal antibodies that attack the body's healthy tissues. This is called an autoimmune condition (&ldquo;auto&rdquo; means self).
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Lupus causes swelling and irritation. This can damage the heart, lungs, kidneys, brain cells, joints, and skin. The medical name for the most common form is systemic lupus erythematosus, or SLE.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Lupus follows a flare-and-remission pattern: symptoms worsen during a flare and settle during remission. Sometimes, symptoms even disappear for months or years.
              </p>
            </div>

            <DarkDivider />

            {/* HOW COMMON */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Common Is Lupus in India?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Lupus can affect 14 to 60 per 100,000 people in India. And around 92.7% of lupus patients in India are women. The female-to-male ratio is about 19:1.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                A study was conducted by the Indian Rheumatology Association across 14 centres. They found that lupus is mainly detected at the mean age of 32 years. But it can also occur at an early age of 23 years.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                The main reason it is detected late is that lupus is often confused with stress, low blood levels, or hormonal issues before the correct diagnosis is made.
              </p>
            </div>

            <DarkDivider />

            {/* TYPES */}
            <div id="types" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Types of Lupus</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>The various types of Lupus are as follows:</p>
              <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {lupusTypes.map((t, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold">{t.title}:</strong> {t.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Causes Lupus?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>Lupus develops from a combination of genes, hormonal changes, and factors from the environment. All these factors work together to trigger the immune system.</p>

              <h3 style={H3Style}>Genetic and Hormonal Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Lupus runs in families. A hormone, &lsquo;estrogen&rsquo;, is released to thicken the uterus wall before ovulation in females. This hormone affects the immune system. As a result, lupus is more common in women during childbearing age. This is why disease flares more often during pregnancy or around the menstrual cycle.
              </p>

              <h3 style={H3Style}>Environmental and Lifestyle Triggers</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>Several everyday factors can trigger lupus symptoms or make them worse, especially in people who are already susceptible. These include:</p>
              <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {envTriggers.map((t, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold">{t.title}:</strong> {t.desc}
                  </li>
                ))}
              </ul>

              <h3 style={H3Style}>Indian-Specific Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                In India, sensitivity to sunlight is more common in lupus patients. Therefore, exposure to the sun can trigger the condition. When people stop going out in the sun to avoid rashes, it leads to vitamin D deficiency. This deficiency further worsens the lupus condition.
              </p>
            </div>

            <DarkDivider />

            {/* WHO IS AT RISK */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Who Is Most at Risk?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>The strongest risk factor include:</p>
              <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{r}</li>))}
              </ul>
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Symptoms of Lupus</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Symptoms of lupus develop slowly, they may improve for a while and then flare up again. This pattern makes the disease go unnoticed in the early stages.
              </p>

              <h3 style={H3Style}>Early warning Signs</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>Lupus can affect almost any part of the body.</p>
              <ul className="space-y-2 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {earlySigns.map((s, i) => (
                  <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                    <strong className="font-bold">{s.title}:</strong> {s.desc}
                  </li>
                ))}
              </ul>

              <h3 style={H3Style}>Advanced Organ Involvement and Serious Symptoms</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>When lupus reaches internal organs, the condition becomes more serious.</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-left min-w-[560px]">
                  <thead>
                    <tr style={{ backgroundColor: "#e0f3f5" }}>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Part of the Body Affected</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">What to Watch For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organInvolvement.map((o) => (
                      <tr key={o.organ} className="border-b border-[#dadfe8]">
                        <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{o.organ}</td>
                        <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{o.watch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                Kidney Involvement (Lupus nephritis) is the most serious complication of Lupus. It is the main cause of severe illness in Indian lupus patients.
              </p>

              <h3 style={H3Style}>When Should a Rheumatologist Be Consulted?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>See a specialist if you have:</p>
              <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Continuous joint pain with unexplained tiredness,</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">A facial rash that worsens in sunlight,</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Significant hair loss</li>
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep font-bold">
                Any warning signs of kidney involvement, such as swollen ankles or foamy urine, need an immediate same-day visit to a rheumatologist without delay.
              </p>
              <Link to="/Lupus-Symptoms-Warning-Signs" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#0f616e", fontSize: "15px", marginTop: "1.5rem" }}>
                Read more about symptoms, warning signs and diagnosis
                <ArrowRight size={14} />
              </Link>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is Lupus Diagnosed?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                There is no single test to diagnose lupus. A rheumatologist checks symptoms, clinical examination and blood test results. They look for skin rashes, joint swelling, and hair loss. They will ask about the symptom pattern and any family history of autoimmune disease. They will rule out any other disease that can cause these symptoms before detecting lupus.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Blood tests for lupus include: ANA, Anti-dsDNA , Full blood count, ESR, CRP, Urine protein
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                A positive ANA alone can not confirm lupus. A kidney or skin biopsy may be required to assess organ involvement. Rheumatologists use the SLICC (Systemic Lupus International Collaborating Clinics) criteria, an internationally accepted checklist, to confirm the diagnosis.
              </p>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Treatment Options for Lupus</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                There is no cure for lupus. Treatment only controls the disease from progressing rapidly. It helps reduce flares, protects organs, and manages complications. Treatment plans are modified as the disease pattern changes.
              </p>

              <h3 style={H3Style}>Medications Overview</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-left min-w-[620px]">
                  <thead>
                    <tr style={{ backgroundColor: "#e0f3f5" }}>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Tier</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Medication Type</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">When Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medTiers.map((m) => (
                      <tr key={m.tier} className="border-b border-[#dadfe8]">
                        <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{m.tier}</td>
                        <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{m.type}</td>
                        <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{m.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                Tuberculosis screening is compulsory in India before starting medicine which suppresses the immune system. Hydroxychloroquine (HCQ) is advised to almost all lupus patients. It reduces flare frequency, risk of organ damage and is safe for long-term use. Generic versions of HCQ are widely available through Jan Aushadhi outlets. Branded biologics are expensive medicines and are not covered under PM-JAY coverage.
              </p>

              <h3 style={H3Style}>Sun Protection and Kidney Care</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>In Indian lupus patients, sun protection is a medical requirement. It is advised:</p>
              <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">To apply SPF 50 sunscreen daily,</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Cover exposed body parts with protective clothing like a scarf, socks and caps</li>
                <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Avoid the sun between 10 am and 4 pm.</li>
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                For kidney involvement, mycophenolate mofetil or cyclophosphamide is used along with corticosteroids. It is the standard approach. A nephrologist (kidney specialist) works alongside the rheumatologist. It is important to detect kidney damage early because the delay can make the kidney damage irreversible.
              </p>
            </div>

            <DarkDivider />

            {/* LIVING WITH */}
            <div id="living" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Living With Lupus in India</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Lupus does not go away, but daily habits can make a real difference. Protect yourself from the sun every day, even when you&apos;re indoors near windows. Eat a balanced, anti-inflammatory diet that includes foods rich in omega-3 fatty acids. If your kidneys are affected, reducing salt intake may also help. Counselling and support from family and friends help significantly. Because there is a lot of stigma around long-term illness, especially in India, which can sometimes make things harder.
              </p>
            </div>

            <DarkDivider />

            {/* GETTING RIGHT DIAGNOSIS + CTA */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Getting the right diagnosis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Many people with lupus spend months seeing different specialists. Every doctor treats one symptom without connecting it to the others. Joint pain, a rash, and fatigue that nobody can explain. When symptoms are affecting multiple parts of the body, especially in a young woman, lupus can be a reason. Only a rheumatologist can make the right diagnosis.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Delay can worsen the condition and can cause organ damage. Getting the right diagnosis early can make a real difference. Your doctor may also recommend vitamin D supplements if your levels are low.
              </p>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Get the right diagnosis early, see a rheumatologist</p>
                </div>
                <Link to="/book-appointment" className="group" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none" }}>
                  Book a Specialist Visit
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            <DarkDivider />

            {/* REFERENCE */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Reference</h2>
              <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {references.map((r, i) => (
                  <li key={i} className="text-[15px] leading-[1.75] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>{r}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#eef3f5" }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl overflow-hidden group" style={{ border: "1px solid #dbe5e9", boxShadow: "0 2px 10px rgba(15,97,110,0.06)" }}>
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e0f3f5" }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      {faq.a.split("\n").map((line, j) => (<p key={j}>{line}</p>))}
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

export default LupusOverview
