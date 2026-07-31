import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const treatmentCosts = [
  { option: "Medicines", cost: "Rs 50 to Rs 2,500 per month" },
  { option: "Rheumatologist consultation (initial)", cost: "Rs 500 to Rs 2,000 per visit" },
  { option: "Rheumatologist follow-up", cost: "Rs 300 to Rs 1,500 per visit" },
  { option: "Amitriptyline", cost: "Rs 50 to Rs 200 per month" },
  { option: "Pregabalin", cost: "Rs 400 to Rs 1,200 per month" },
  { option: "Duloxetine", cost: "Rs 600 to Rs 1,800 per month" },
  { option: "Physiotherapy session", cost: "Rs 300 to Rs 1,500 per session" },
  { option: "Pain-focused talking therapy (CBT)", cost: "Rs 1,500 to Rs 3,000 per session" },
  { option: "Trigger point injection", cost: "Rs 500 to Rs 2,000 per session" },
  { option: "TENS device (home use)", cost: "Rs 1,500 to Rs 5,000 one-time" },
  { option: "rTMS session", cost: "Rs 3,000 to Rs 8,000 per session" },
]

const faqs = [
  { q: "Is there a cure for fibromyalgia?", a: "No, there is currently no cure for fibromyalgia. With the right combination of medicines, physical therapies, and psychological support, most people see improvement in symptoms and quality of life." },
  { q: "Do I need to take medicines lifelong for fibromyalgia?", a: "This usually depends on how the condition changes over time. Some people may need medicines consistently to manage symptoms, while others find that lifestyle changes, exercise, and talking therapy reduce their dependence on medicines significantly." },
  { q: "Are fibromyalgia medicines available in India, and how much do they cost?", a: "Yes, medicines like amitriptyline, pregabalin and duloxetine are available at affordable prices. Monthly costs of medicines may vary from approximately Rs 50 for amitriptyline to Rs 2,500 for milnacipran. The doctor will recommend the appropriate medicine based on the specific symptoms." },
  { q: "Can exercise really help fibromyalgia pain, or will it make it worse?", a: "Exercise is one of the most effective treatments for fibromyalgia. It is recommended to start very gently and increase the intensity slowly as the symptoms improve. This may help avoid triggering pain. Swimming, walking, and gentle yoga are the best options. A physiotherapist or doctor can advise on how to begin safely." },
]

const references = [
  { text: "PMC. Management of Fibromyalgia - An Update. 2024. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11201510/" },
  { text: "PMC. Update on Treatment Guideline in Fibromyalgia Syndrome. 2017. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5489806/" },
  { text: "Annals of Indian Academy of Neurology. Role of Repetitive Transcranial Magnetic Stimulation in Fibromyalgia. 2024. ", url: "https://journals.lww.com/annalsofian/fulltext/2024/27020/role_of_repetitive_transcranial_magnetic.11.aspx" },
  { text: "PMC. Distress of Fibromyalgia in Neurology Practice - Northeast India Study. 2025. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12007770/" },
  { text: "WebMD. Fibromyalgia Medicines and Treatment. 2026. ", url: "https://www.webmd.com/fibromyalgia/medicines-to-treat-fibromyalgia" },
  { text: "Frontiers in Pharmacology. Pharmacologic Treatment of Fibromyalgia - An Update. 2025. ", url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1651181/full" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "how-works", label: "How Fibromyalgia Treatment Works" },
  { id: "lifestyle-therapies", label: "Lifestyle and Supportive Therapies: The First Step" },
  { id: "medications", label: "Medications Used to Treat Fibromyalgia" },
  { id: "specialised-therapies", label: "Specialised Therapies: When Standard Treatment Is Not Enough" },
  { id: "complementary", label: "Complementary and Traditional Treatments" },
  { id: "monitoring", label: "Monitoring Your Treatment" },
  { id: "costs", label: "Cost of Fibromyalgia Treatment in India" },
  { id: "speak-to-doctor", label: "When to Speak to a Rheumatologist About Treatment" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function FibromyalgiaTreatment() {
  const [activeSection, setActiveSection] = useState("how-works")

  useEffect(() => {
    document.title = "Fibromyalgia Treatment: Medications, Therapies and Specialised Options | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Fibromyalgia Treatment</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 pb-7 text-left md:pb-0">
                {/* <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p> */}
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
                  Fibromyalgia Treatment:
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
                    Medications, Therapies and Specialised Options
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Shafali Nagpal</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 31, 2026
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
                    Fibromyalgia can make everyday life difficult. Widespread body pain can make daily tasks more tiring, poor sleep can lead to feeling tired throughout the day, and simple activities such as cleaning, cooking or taking a shower may feel difficult to perform.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Many people worry knowing that there is no cure for this condition and nothing can be done to improve their symptoms. But that is not true. Regular exercise, counselling, medicines or specialised therapies can help manage these daily symptoms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    No single treatment works for everyone. Doctors usually plan treatments based on which symptom and how much they affect daily life. In this guide, you will learn about the treatment options available for fibromyalgia, when doctors recommend them, what to expect and how much they cost.
                  </p>
                </div>

                {/* ── HOW WORKS ── */}
                <div id="how-works" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Fibromyalgia Treatment Works
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Fibromyalgia treatment mainly aims to reduce pain and tiredness and help people stay active in their daily lives. It is also important to improve quality of sleep, anxiety and overall mood. The treatment plan for fibromyalgia is not the same for every person.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Doctors usually follow the <strong className="font-semibold">European Alliance of Associations for Rheumatology (EULAR 2016)</strong> guidelines to decide on the most suitable treatment option. They adjust it based on the symptoms and how well the treatment works.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── LIFESTYLE THERAPIES ── */}
                <div id="lifestyle-therapies" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Lifestyle and Supportive Therapies: The First Step
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Fibromyalgia treatment often begins with therapies instead of medicine. The EULAR  guidelines recommend starting non-pharmacological therapies before medicines for fibromyalgia. These therapies are not an alternative to medicines. Instead, they help support how well medicines work.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Exercise Therapy
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors recommend aerobic exercise such as walking, swimming, and gentle yoga to help reduce pain and anxiety. These exercises also improve sleep quality and overall energy. It is usually recommended to start these exercises slowly and gradually increase the intensity as the symptoms improve. Pushing too hard early can trigger pain and make it harder to continue exercising.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Talk Therapy For Long-Term Pain Management
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In fibromyalgia, the brain and the nervous system become oversensitive to how they respond to pain signals. Doctors can recommend a structured talk therapy called Cognitive Behavioural Therapy (CBT) that helps patients understand the connection between their thoughts, daily habits, and how much pain they feel.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A psychologist helps people identify patterns that can worsen the pain, such as avoiding daily activity out of fear or being anxious about a flare. They also help people learn about the practical techniques to break these patterns. Gradually, this helps reduce pain and tiredness and improves quality of life.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Physiotherapy and Pacing
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Physiotherapy is an important part of fibromyalgia treatment. Gentle stretching, posture correction, relaxation techniques and pacing strategies are usually recommended based on how severe the symptoms are.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Pacing helps people learn how to balance work and rest. Pacing means taking short breaks during activities before pain or tiredness becomes worse. This is one of the most effective skills that helps people with fibromyalgia perform tasks without triggering pain.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Learning about fibromyalgia and understanding what makes the symptoms worse can help people manage the condition better. Knowing when to rest, stay active, and when to seek medical advice can make daily life easier. Doctors can often provide reliable information and suggest ways to manage long-term pain.
                  </p>
                </div>

                {/* ── MEDICATIONS ── */}
                <div id="medications" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Medications Used to Treat Fibromyalgia
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    When lifestyle changes and support therapies do not provide enough relief, doctors often prescribe medicines along with these therapies. Doctors recommend medicine when therapies alone do not provide relief from pain, sleep quality, or mood.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Amitriptyline: The Most Common Starting Medicine in India
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors may recommend a low dose of the medicine amitriptyline to help reduce pain and improve sleep in people with fibromyalgia.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Pregabalin: For Pain and Sleep
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Pregabalin is a medicine often recommended to help reduce pain signals reaching the nervous system. As a result, it helps reduce pain and improve quality of sleep. It is one of three FDA-approved medicines recommended by doctors for fibromyalgia. In India, it is available with the brand name <strong className="font-semibold">Lyrica.</strong>
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Duloxetine: For Pain and Mood
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors often recommend the medicine duloxetine to relieve pain, improve anxiety and overall mood. Duloxetine acts on certain chemicals in the brain that regulate pain and mood. This medicine is approved by the FDA for people with fibromyalgia. It is available in India as <strong className="font-semibold">Cymbalta.</strong>
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Milnacipran: An Alternative Option
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Milnacipran is recommended when duloxetine does not provide enough relief or is causing side effects.
                  </p>
                </div>

                {/* ── SPECIALISED THERAPIES ── */}
                <div id="specialised-therapies" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Specialised Therapies: When Standard Treatment Is Not Enough
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Doctors often recommend specialised therapies when other therapies and medicines fail to provide relief alone. These therapies directly interrupt or reduce overactive pain signals in the nervous system.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Trigger Point Injections
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors may recommend an injection directly into tight and painful muscle knots called trigger points. In fibromyalgia, trigger points are common in the neck, shoulders, upper back, and hips.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The doctor will numb the area, which helps loosen tight muscle and relieve pain in that area. It usually provides relief for 2 to 12 weeks. The procedure usually takes around 10 to 15 minutes in a clinic or pain management centre. Sometimes, multiple sessions are recommended, and the injections can be repeated regularly if needed.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    TENS: Transcutaneous Electrical Nerve Stimulation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    TENS (Transcutaneous Electrical Nerve Stimulation) is recommended when fibromyalgia pain becomes severe and affects daily activities. It is a small, portable pain relief device. It works by sending mild electrical impulses through adhesive pads placed on the skin over painful areas. These impulses help reduce pain without medicines or needles.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The procedure often takes about 20 to 30 minutes and can be given at a physiotherapy clinic or at home under recommendation by a doctor or physiotherapist. TENS devices are widely available in India.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    rTMS: Repetitive Transcranial Magnetic Stimulation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    rTMS is a specialised treatment that uses magnetic stimulation to help reduce pain in people with fibromyalgia. It is a painless procedure and does not involve injections or surgery. It can improve pain, anxiety and low mood in people with fibromyalgia.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The procedure involves multiple sittings over several weeks, with each session lasting approximately 30 to 45 minutes. In India, rTMS is available at select neurology and pain management centres in big cities, including Bengaluru, Mumbai, Delhi, and Chennai.
                  </p>
                </div>

                {/* ── COMPLEMENTARY ── */}
                <div id="complementary" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Complementary and Traditional Treatments
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In India, many people with fibromyalgia often use Ayurveda, yoga therapy, and meditation along with taking medicine. In people with long-term pain, yoga often helps reduce pain and tiredness and improves overall mood. Meditation and mindfulness are also beneficial to improve anxiety and mood.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Speak with a doctor before taking any Ayurvedic medicine, as some herbs can affect how well the prescribed medicines work, particularly those affecting the nervous system.
                  </p>
                </div>

                {/* ── MONITORING ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Monitoring Your Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Fibromyalgia treatment requires regular monitoring to ensure that therapies and medicines are working well. Doctors will check whether symptoms have improved, if medicines need adjusting, or if additional therapies should be added or changed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A simple self-assessment tool called the <strong className="font-semibold">FIQ (Fibromyalgia Impact Questionnaire)</strong>, a short questionnaire that rates how much fibromyalgia is affecting daily life, helps both patient and doctor track progress over time. Doctors may adjust the treatment based on how the patient responds to the current therapies and medicine.
                  </p>
                </div>

                {/* ── COSTS ── */}
                <div id="costs" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Cost of Fibromyalgia Treatment in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Fibromyalgia is a long-term condition, and treatment costs add up over time. The table below gives a rough overview of what patients in India can expect to pay across different parts of the treatment plan. The cost may vary depending on the city and the hospital.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Treatment</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Approximate Cost in India</th>
                        </tr>
                      </thead>
                      <tbody>
                        {treatmentCosts.map((row) => (
                          <tr key={row.option} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.option}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top whitespace-nowrap">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Treatment costs can vary. It is helpful to check whether the health insurance or government health scheme covers physiotherapy or mental health consultations before starting long-term treatment.
                  </p>
                </div>

                {/* ── SPEAK TO DOCTOR ── */}
                <div id="speak-to-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to Speak to a Rheumatologist About Treatment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Speak to a rheumatologist if your pain, fatigue, or sleep problems are not improving with treatment. It is also important to seek medical advice if anxiety or low mood is affecting daily life or if medicines are causing side effects. If you are planning a pregnancy or considering complementary or herbal treatments, discuss them with your doctor before making any changes to your treatment plan. Regular reviews help ensure that treatment continues to work well.
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

                {/* ── DISCLAIMER + REFERENCES ── */}
                <div id="references" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Disclaimer
                  </h2>
                  <p className="text-[14px] leading-[1.7] italic" style={{ color: "#5E5E5E", marginBottom: "2.5rem" }}>
                    This content has been written for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified rheumatologist or healthcare provider if you have questions about a medical condition or treatment plan.
                  </p>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    References
                  </h2>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {references.map((r, i) => (
                      <li key={i} className="text-[15px] leading-[1.75] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        {r.text}
                        <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0f616e", textDecoration: "underline" }}>{r.url}</a>
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
                      Consultant Rheumatologist for fibromyalgia evaluation and long-term care.
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

export default FibromyalgiaTreatment
