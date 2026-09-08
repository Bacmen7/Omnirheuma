import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const generalSymptoms = [
  { label: "Fever", text: "A low-grade or high fever that tends to come and go unpredictably." },
  { label: "Fatigue", text: "Deep, persistent tiredness that does not improve with rest." },
  { label: "Weight loss and appetite changes", text: "Unexplained loss of appetite leading to noticeable weight loss." },
  { label: "Night sweats", text: "Episodes of heavy sweating during sleep." },
  { label: "Joint and muscle aches", text: "General aching, stiffness, or pain across joints and muscles." },
]

const vesselSizeTable = [
  {
    size: "Large",
    conditions: "Giant Cell Arteritis, Takayasu Arteritis",
    symptoms: "Headache, scalp tenderness, jaw pain while chewing, vision changes, arm pain on use, missing pulse, unequal blood pressure between arms",
  },
  {
    size: "Medium",
    conditions: "Polyarteritis Nodosa, Kawasaki Disease",
    symptoms: "Nerve pain or foot drop, tender skin nodules, net-like skin mottling, high blood pressure, fever with red eyes and rash in children",
  },
  {
    size: "Small",
    conditions: "Granulomatosis with Polyangiitis (GPA), Microscopic Polyangiitis (MPA), Eosinophilic Granulomatosis with Polyangiitis (EGPA), IgA vasculitis",
    symptoms: "Raised purple spots on the legs, blood in urine, sinus trouble that will not settle, cough or breathlessness, asthma-like symptoms",
  },
]

const vasculitisPatterns = [
  {
    label: "The symptoms follow the inflamed vessels.",
    text: "The disease process remains the same, but the symptoms can vary based on blood vessels affected. Inflammation in the arteries supplying the head causes headaches and jaw pain. Inflammation in the small vessels of the skin and kidneys causes purple spots on the legs and blood in the urine.",
  },
  {
    label: "The general symptoms come first.",
    text: "Fever, fatigue, and weight loss usually arrive initially, and they look exactly like an infection which persists. That is why antibiotics are prescribed usually and the first few weeks rarely produces a diagnosis of the condition.",
  },
  {
    label: "The symptoms rarely seem connected.",
    text: "A rash, a recurring fever and numb fingers do not seem connected, and each gets treated on its own.",
  },
]

const emergencySigns = [
  "Sudden vision loss or double vision",
  "Chest pain",
  "Severe breathlessness or coughing up blood",
  "Signs of a stroke: facial droop, arm weakness, slurred speech",
  "Severe abdominal pain along with purple skin spots",
  "Blood in the urine with swelling of the face or legs",
]

const rheumatologistSigns = [
  "Fever with no known cause that lasts beyond 2 weeks.",
  "Purpura or any rash that does not fade with pressure.",
  "Numbness, tingling, or weakness in a hand or foot.",
  "Sinus or ear problem that keeps returning despite treatment.",
  "High blood pressure, an absent pulse, or unequal arm readings of blood pressure in a young person.",
]

const faqs = [
  { q: "What do vasculitis rashes look like?", a: "The classic rash is palpable purpura, which appears as raised reddish-purple spots, usually on the lower legs, that do not fade when pressed. Ulcers, tender nodules, and net-like mottling also occur." },
  { q: "Can vasculitis symptoms come and go?", a: "Yes. Many types of vasculitis come and go in cycles, and symptoms can disappear for weeks between these cycles. Settling on its own does not mean the condition has gone away." },
  { q: "What is usually the first sign of vasculitis?", a: "There is no single first sign. General symptoms like fever, fatigue, and weight loss are often seen earliest, with specific signs such as rash, numbness, or headache following." },
  { q: "Are vasculitis symptoms different in children?", a: "Often, yes. IgA vasculitis in children typically presents with raised red spots (purpura) on the legs with stomach or joint pain, while Kawasaki disease causes high fever, red eyes, and a rash with peeling skin." },
  { q: "Which symptoms of vasculitis are considered emergencies?", a: "Sudden vision loss, chest pain, severe breathlessness, coughing up blood, stroke signs, or severe abdominal pain with purple spots. Each needs emergency care immediately, not a scheduled appointment." },
  { q: "Why does vasculitis take so long to diagnose?", a: "Vasculitis takes longer to diagnose because the early symptoms mimic infection and the later ones appear disconnected. These symptoms are often managed individually, obscuring the underlying pattern until they are evaluated collectively." },
]

const references = [
  "Vasculitis. Cleveland Clinic.",
  "Vasculitis: Symptoms and Causes. Mayo Clinic.",
  "Jatwani S, Blum MA. Vasculitis. StatPearls, NCBI Bookshelf, updated 1 December 2025.",
  "Vasculitis. Versus Arthritis.",
  "Vasculitis: approach to diagnosis and therapy. Indian Journal of Dermatology, Venereology and Leprology.",
  "Savage CO, Harper L, Cockwell P, Adu D, Howie AJ. ABC of arterial and vascular disease: vasculitis. BMJ, 2000.",
  "Vasculitis. ScienceDirect Topics, Immunology and Microbiology.",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "looks-different", label: "Why Vasculitis Looks Different in Everyone" },
  { id: "common-symptoms", label: "Common Symptoms of Vasculitis" },
  { id: "other-symptoms", label: "Other Symptoms That Can Occur" },
  { id: "timeline", label: "Timeline of Appearance of Vasculitis Symptoms" },
  { id: "seek-attention", label: "When Should You Seek Medical Attention" },
  { id: "look-alikes", label: "Conditions That Can Look Like Vasculitis" },
  { id: "when-to-see", label: "When to See a Rheumatologist" },
  { id: "references", label: "Sources and References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function VasculitisSymptomsWarningSigns() {
  const [activeSection, setActiveSection] = useState("looks-different")

  useEffect(() => {
    document.title = "Vasculitis Symptoms and Warning Signs: What to Watch For | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Vasculitis Symptoms and Warning Signs</span>
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
                  Vasculitis Symptoms and Warning Signs: What to Watch For
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
                    Vasculitis is inflammation of the blood vessels. Symptoms vary from person to person depending on which vessels are affected, so one person may have a fever and a rash while another person may suffer from headaches and blurred vision. A few symptoms appear in almost everyone, which includes fever, heavy fatigue, aching joints, and rashes.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    They also tend to arrive one at a time. The rash appears, the fever comes back for the third time, and the tingling starts somewhere in between. It is the sequence that shows they are one problem rather than several symptoms together.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This article covers the symptoms of vasculitis in detail, along with the warning signs worth acting on.
                  </p>
                </div>

                {/* ── WHY VASCULITIS LOOKS DIFFERENT ── */}
                <div id="looks-different" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Why Vasculitis Looks Different in Everyone
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Vasculitis is not one disease. It is a family of more than 30 conditions, grouped by the size of the blood vessel involved: large, medium, or small. The blood vessels affected decide most of what you feel, which is why two people with vasculitis can have almost nothing in common.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There are 3 patterns that vasculitis follows -
                  </p>
                  <ol className="space-y-3 mb-6" style={{ listStyleType: "decimal", paddingLeft: "2.75rem" }}>
                    {vasculitisPatterns.map((p) => (
                      <li key={p.label} className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                        <strong>{p.label}</strong> {p.text}
                      </li>
                    ))}
                  </ol>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    It can begin at any age. Some forms mainly affect children and others mainly older adults, which is why the same diagnosis produces such different experiences.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── COMMON SYMPTOMS ── */}
                <div id="common-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Common Symptoms of Vasculitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The following core symptoms are characteristic of vasculitis and typically manifest as follows:
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    1. General symptoms of inflammation
                  </h3>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "2.75rem" }}>
                    {generalSymptoms.map((s) => (
                      <li key={s.label} className="text-[17px] leading-[1.75] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                        <strong>{s.label}:</strong> {s.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Although these general symptoms do not confirm vasculitis on their own, their persistence provides an important early clue.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    2. Palpable purpura
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    These are raised reddish-purple spots, usually on the lower legs. When pressed, they do not fade. This is the hallmark skin sign of this group of conditions. A simple home test is to press a clear glass against the spots. Ordinary rashes fade under the glass; purpura does not.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    3. Symptoms from vessel involvement
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Blood vessels affected can be large, medium, or small, and symptoms also vary accordingly.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    <strong>a. Large blood vessel involvement</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When large blood vessels are affected, symptoms appear as an unusual headache, scalp tenderness, jaw pain while chewing, changes in vision, arm pain on use, an absent pulse, or unequal blood pressure readings between the two arms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Jaw pain is one of the most recognisable signs of giant cell arteritis (a type of large-vessel vasculitis), caused by the jaw muscles not getting enough blood during the effort of eating.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    <strong>b. Medium vessel involvement</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Nerve pain or difficulty lifting the foot, tender nodules under the skin, purple discoloration, and high blood pressure are common symptoms when medium blood vessels are affected. In children under 5 years of age, a high fever lasting several days and red eyes, cracked lips, and a rash need immediate medical attention.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    <strong>c. Small vessel involvement</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When small blood vessels are affected, it may cause raised purple spots on the legs, blood in the urine, sinus trouble that will not settle, cough or breathlessness, and asthma-like symptoms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The table below outlines how vasculitis symptoms vary according to the size of the affected blood vessels, providing a clear reference for typical patterns.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms by Vessel Size
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Specific symptoms depend on which blood vessels are affected. Below is an overview mapping typical patterns by vessel size:
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[680px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Vessel size</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Conditions</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Typical symptoms</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vesselSizeTable.map((row) => (
                          <tr key={row.size} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.size}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.conditions}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.symptoms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── OTHER SYMPTOMS ── */}
                <div id="other-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Other Symptoms That Can Occur
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Beyond the common symptoms, vasculitis can present with other signs and symptoms. The following symptoms can help in identifying vasculitis:
                  </p>
                  <ol className="space-y-3" style={{ listStyleType: "decimal", paddingLeft: "2.75rem" }}>
                    <li className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                      <strong>Other skin changes:</strong> Skin symptoms also involve slow-healing ulcers with well-defined edges, tender red nodules (often on calves), net-like purple mottling (livedo), and fingers or toes that change color (white to blue) in cold temperatures. Unlike allergic rashes, these are usually tender or burning rather than itchy.
                    </li>
                    <li className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                      <strong>Nerve symptoms:</strong> They present as numbness, tingling, or weakness, most often in a hand or foot. Foot drop, where the front of the foot cannot be lifted properly while walking, is a recognised sign of nerve involvement.
                    </li>
                    <li className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                      <strong>Kidney symptoms:</strong> Signs include blood in the urine, occasionally accompanied by swelling in the face or legs. These frequently develop without any pain or other warning.
                    </li>
                    <li className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                      <strong>Sinus and ear symptoms:</strong> These can present as blocked sinuses, nosebleeds, or ear trouble that keeps returning despite treatment, particularly in the small blood vessel forms.
                    </li>
                    <li className="text-[17px] leading-[1.8] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                      <strong>Chest symptoms:</strong> You may experience a cough that will not clear, breathlessness, or in some people, asthma-like wheezing that appears for the first time in adulthood.
                    </li>
                  </ol>
                </div>

                {/* ── TIMELINE ── */}
                <div id="timeline" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Timeline of Appearance of Vasculitis Symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Vasculitis lacks a single trigger or fixed timeline, making it difficult to diagnose. For most people, general symptoms develop first over several weeks. These could be recurring fever, fatigue, and unexplained weight loss. Vessel-specific signs, including rashes, numbness, or headaches, typically follow.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many forms of vasculitis follow a cyclical pattern of flares and settling, meaning symptoms may vanish for weeks at a time. Such periods of relief, however, do not indicate that the underlying condition has resolved.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Skin lesions change quickly, and skin biopsies for vasculitis work best when taken from fresh lesions, within 1-2 days. Photograph any new skin change with the date visible. Documented photos with dates help your rheumatologist identify the best lesion for a biopsy, potentially speeding up your diagnosis.
                  </p>
                </div>

                {/* ── WHEN TO SEEK MEDICAL ATTENTION ── */}
                <div id="seek-attention" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should You Seek Medical Attention
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The following may signal an organ losing its blood supply. In any of the following situations, immediate medical attention is required:
                  </p>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "2.75rem" }}>
                    {emergencySigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The fifth combination is the most frequently overlooked warning sign. In IgA (immunoglobulin A) vasculitis (a type of vasculitis), severe stomach pain can present with or before the rash. It is frequently mistaken for an ordinary abdominal emergency. If purple spots and severe stomach pain appear together, mention both to the emergency doctor.
                  </p>
                </div>

                {/* ── LOOK-ALIKE CONDITIONS ── */}
                <div id="look-alikes" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Conditions That Can Look Like Vasculitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Several conditions imitate vasculitis closely. Infections can cause fever, rashes, and purpura-like spots. Clotting disorders block vessels and similarly restrict the blood supply to organs. Some medicines can cause vasculitis-like reactions as a side effect. Other autoimmune diseases, lupus in particular, can involve the blood vessels.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Visual appearance alone is insufficient to distinguish these conditions from true vasculitis, which is why a definitive diagnosis requires testing rather than examination alone.
                  </p>
                </div>

                {/* ═══════════ WHEN TO SEE A RHEUMATOLOGIST ═══════════ */}
                <div id="when-to-see" data-toc-section style={{ marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to See a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Not every symptom is an emergency, but some patterns deserve an appointment with a specialist rather than treating individual symptoms. The following symptoms should be watched out for:
                  </p>
                  <ol className="space-y-2 mb-6" style={{ listStyleType: "decimal", paddingLeft: "2.75rem" }}>
                    {rheumatologistSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep" style={{ paddingLeft: "0.5rem" }}>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The last one matters especially in India, where Takayasu arteritis often first appears as unexplained high blood pressure. A blood pressure medicine may manage it, but the blood vessel inflammation is left untreated.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    If any of these describe you, ask directly whether vasculitis should be ruled out. Carry the symptom list, mention how long each one has lasted, and bring dated photos of any skin changes.
                  </p>
                  <div style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                    <Link to="/vasculitis-diagnosis" className="inline-flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity" style={{ color: "#E86531", fontSize: "15px" }}>
                    Read more about diagnosis and tests
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
                    Sources and References
                  </h2>
                  <details className="group" open>
                    <summary className="cursor-pointer inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden" style={{ color: "#0f616e", fontWeight: 700, fontSize: "15px" }}>
                      View Sources
                      <svg className="transition-transform group-open:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                    </summary>
                    <ul className="space-y-2 mt-4" style={{ listStyleType: "disc", paddingLeft: "2.75rem" }}>
                      {references.map((r, i) => (
                        <li key={i} className="text-[14px] leading-[1.7] text-navy-muted" style={{ paddingLeft: "0.5rem" }} style={{ wordBreak: "break-word" }}>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </details>
                  <p className="text-[14px] leading-[1.7] text-navy-muted" style={{ marginTop: "1.5rem" }}>
                    This content has been written for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified rheumatologist or healthcare provider if you have questions about a medical condition or treatment plan.
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
                      Consultant Rheumatologist for vasculitis evaluation and long-term care.
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

export default VasculitisSymptomsWarningSigns
