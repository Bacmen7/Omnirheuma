import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Sjögren's Syndrome Symptoms and Warning Signs
   ───────────────────────────────────────────── */

const commonSymptoms = [
  { symptom: "Dry eyes", proportion: "95%" },
  { symptom: "Dry mouth", proportion: "93%" },
  { symptom: "Fatigue", proportion: "90%" },
  { symptom: "Joint pain", proportion: "81%" },
  { symptom: "Brain fog", proportion: "77%" },
]

const rarelyMentioned = [
  { label: "Acid reflux and heartburn:", text: "Reported by around 55% in an earlier patient survey, since saliva normally helps neutralise stomach acid." },
  { label: "Vaginal dryness:", text: "Reported by around 58% in that same earlier survey, which is common and treatable." },
  { label: "Dry skin:", text: "Sometimes itchy without any visible rash." },
  { label: "Dry nose or throat:", text: "Might have a persistent dry cough." },
  { label: "Swelling of the glands:", text: "Glands in front of the ears or under the jaw might get swollen, which about half of people get at some point." },
]

const seeDoctorPromptly = [
  "If swelling near the jaw or ears that does not settle after a few weeks, or that affects one side only.",
  "If you have eye pain, sensitivity to light, or blurred vision.",
  "If you feel numbness, tingling, or weakness in the hands or feet.",
  "If you have breathlessness or a cough that will not clear.",
  "If you get unexplained fever, night sweats, or weight loss.",
]

const bookAppointment = [
  "If you have dryness in the eyes or mouth lasting months rather than weeks, particularly alongside fatigue or joint pain.",
  "If you have repeated dental decay despite good oral care.",
  "If your symptoms are steadily worsening rather than staying stable.",
]

const faqs = [
  {
    q: "Is fatigue really a part of Sjögren's syndrome?",
    a: "It is the core symptom, reported by around 90% of people with the condition. In patient surveys, it ranks as the single most disruptive symptom, ahead of dryness and joint pain.",
  },
  {
    q: "Can I have Sjögren's syndrome without severe dryness?",
    a: "Yes. Dryness varies enormously between people, from barely noticeable to seriously limiting. Fatigue, joint pain or brain fog can be your dominant symptoms while dryness can be mild.",
  },
  {
    q: "Is brain fog a real symptom?",
    a: "Yes. Research shows measurable effects on memory, attention and the ability to plan and organise. It is not simply tiredness, and it is worth reporting to your doctor.",
  },
  {
    q: "Why is my dentist finding cavities when I am brushing my teeth well?",
    a: "Saliva protects teeth by washing away food and neutralising acid. When your mouth is persistently dry, decay occurs fast regardless of how well you brush.",
  },
  {
    q: "Do Sjögren's symptoms come and go, or are they constant?",
    a: "Mostly they remain constant. More than 60% of people report their main symptoms every day or every week. This makes it quite different from conditions that come and go.",
  },
]

const references = [
  "Living with Sjögren's Patient Survey 2025. Sjögren's Foundation, administered by The Harris Poll, IRB approved, 6,360 respondents, 7 August to 4 September 2025.",
  "Living with Sjögren's Patient Survey 2021. Sjögren's Foundation, 3,622 respondents.",
  "Sjögren's Disease Signs and Symptoms. Sjögren's Foundation, 2026.",
  "Carsons SE, Blum MA. Sjögren Disease. StatPearls, updated 6 July 2025.",
  "When Dryness Extends to the Brain: Brain-Related Non-Sicca Manifestations of Sjögren's Disease. Journal of Clinical Medicine, 2026.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "most-common", label: "The Symptoms Almost Everyone Has" },
  { id: "what-they-feel-like", label: "What the Symptoms Actually Feel Like" },
  { id: "how-often", label: "How Often Symptoms Occur" },
  { id: "rarely-mentioned", label: "Symptoms People Rarely Mention" },
  { id: "warning-signs", label: "Warning Signs to Act On" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function SjogrensSyndromeSymptoms() {
  const [activeSection, setActiveSection] = useState("most-common")

  useEffect(() => {
    document.title = "Sjögren's Syndrome: Symptoms and Warning Signs | Omni Rheuma"
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
              <Link to="/sjogrens-syndrome" className="hover:underline text-white/80">Sjögren's Syndrome</Link>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Symptoms and Warning Signs</span>
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
                  <span className="whitespace-nowrap">Sjögren's Syndrome:</span>
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
                    Symptoms and Warning Signs
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: September 2026
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
                    You visit an eye specialist because your eyes are feeling gritty or dry. Your doctor prescribes eye drops for it, and you feel better. However, you do not mention that you have been feeling exhausted for the past 2 years. Or that you forget your words halfway through sentences, and your knees ache every morning before you have done anything.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In a 2025 study, 6360 people with{" "}
                    <Link to="/sjogrens-syndrome" className="font-semibold underline hover:text-[#1AA3B5]" style={{ color: "#0f616e" }}>
                      Sjögren's syndrome
                    </Link>{" "}
                    were asked which single symptom had done the most damage to their lives. Fatigue was a prominent answer, named by 27%. Dry eyes were named by only 8%, along with trouble sleeping, nerve pain, and tooth decay.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This gap between what people notice and what actually disrupts them is the most useful thing to understand about this condition. This article covers the common symptoms, the ones that go unnoticed, and the warning signs worth acting on.
                  </p>
                </div>

                {/* ── THE SYMPTOMS ALMOST EVERYONE HAS ── */}
                <div id="most-common" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    The Symptoms Almost Everyone Has
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    In the same 2025 survey, respondents chose from a list of 46 possible symptoms spanning nearly every system in the body. 5 stood out as the most common ones.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[500px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Symptom</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Proportion of people reporting it</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commonSymptoms.map((row) => (
                          <tr key={row.symptom} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.symptom}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.proportion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Trouble sleeping is the next most common symptom, experienced by nearly 73% of people. More than half of the 20 most commonly reported symptoms had nothing to do with dryness at all.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── WHAT THE SYMPTOMS ACTUALLY FEEL LIKE ── */}
                <div id="what-they-feel-like" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What the Symptoms Actually Feel Like
                  </h2>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    1. Dry eyes
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Eyes feel gritty, as though sand or an eyelash is caught under the lid. You may also experience burning or a feeling of pressure behind the eye, which makes blinking feel difficult.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    These sensations often worsen in air conditioning, wind, or dusty air. Additionally, long periods of screen time can further reduce your blink rate, leading to vision problems that affect 59% of people, typically manifesting as blurring that comes and goes as the tear film breaks up.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    2. Dry mouth
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Bread, rice, or anything dry becomes difficult to swallow without water. The tongue can feel rough, and the mouth may feel chalky. Difficulty speaking is experienced, and many people wake at night needing a drink.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The oral and dental consequences of dry mouth are usually not anticipated. Saliva washes away food debris and neutralises the acid that erodes enamel (the uppermost layer of your teeth). When it dries up, decay accelerates regardless of how carefully you brush. Taste can change too, and mouth infections such as oral thrush become more common without saliva's protective effect.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    3. Fatigue
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is not ordinary tiredness, and it is not fixed by sleep. You can wake after 8 hours and feel as though you have not slept. Also, it does not subside with rest. It is also dismissed more than dryness, attributed to stress, age, or a busy life. This is one of the reasons why it takes years to identify.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    90% of people with this condition report fatigue. 89% of them say it has a major impact on their lives.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    4. Brain fog
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You may forget words mid-sentence or read the same paragraph three times without understanding anything. Or, you may walk into a room with no idea why. This makes ordinary activities feel disproportionately difficult.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    It is reported by 77% of people, and is rarely taken as seriously. Research describes real, measurable effects on memory, attention and the ability to organise and plan, rather than simply feeling tired.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    5. Joint and muscle pain
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Joint pain usually occurs in the small joints of the hands and wrists, often with morning stiffness that eases with movement. It affects 81% of people, muscle pain 63%, and muscle weakness 54%
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The pain is frequent without the joint looking swollen at all. Pain in a normal-looking joint tends to be taken less seriously, both by the person experiencing it and sometimes also by the doctors. Therefore, it is important to mention your symptoms clearly to your doctor.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    6. Nerve pain and numbness
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Nerve pain usually appears as numbness, tingling, burning or pins and needles, most often in the hands and feet. Some people describe it as a glove-and-stocking pattern, affecting both sides. Weakness in the same areas may also be present.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Nerve pain and numbness are reported by 61% of people, and named among the most disruptive symptoms along with dry eyes. Headache affects 56% of people, and in some persons it is related to the same nerve involvement.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    This is worth reporting, since nerve involvement is treated differently and is missed when patients assume it is due to something else.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    7. Dry and itchy skin
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The skin becomes dry, sometimes flaking, and often itchy without any visible rash to explain it. It affects 76% of people. Dryness in other parts of the body follows the same pattern: a dry nose, a dry throat, and a persistent dry cough that no infection accounts for.
                  </p>
                </div>

                {/* ── HOW OFTEN SYMPTOMS OCCUR ── */}
                <div id="how-often" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Often Symptoms Occur
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Unlike many rheumatic conditions that occur in episodes, Sjögren's syndrome is typically persistent. In the 2025 survey, over 60% of respondents reported their most common symptoms daily or weekly, with more than 90% experiencing dryness that frequently.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This is a constant condition rather than an episodic one, so relief comes from a daily routine rather than some quick fix. Up to half of people also develop involvement of other parts of the body, including the lungs, nerves, and kidneys. This is what your doctor checks for at follow-up appointments.
                  </p>
                </div>

                {/* ── SYMPTOMS PEOPLE RARELY MENTION ── */}
                <div id="rarely-mentioned" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms People Rarely Mention
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Some symptoms go unreported for years, either because they don't seem connected to a dry eye problem or because they feel awkward to raise. These are common and crucial to mention.
                  </p>
                  <ul className="space-y-2.5 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {rarelyMentioned.map((item, idx) => (
                      <li key={idx} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.label}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Mention these symptoms to your doctor, even if they feel embarrassing or unrelated. The pattern across your symptoms is what leads to a diagnosis, and leaving pieces out makes that pattern harder to see.
                  </p>
                </div>

                {/* ── WARNING SIGNS TO ACT ON ── */}
                <div id="warning-signs" data-toc-section style={{ marginBottom: "2.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Warning Signs to Act On
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Most Sjögren's symptoms present gradually and are managed at routine appointments. A few need more attention, either because they suggest the condition is affecting something beyond the glands or because they need a different specialist.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.75rem" }}>
                    See a doctor promptly
                  </h3>
                  <ul className="space-y-2.5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {seeDoctorPromptly.map((item, idx) => (
                      <li key={idx} className="text-[16px] leading-[1.7] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.75rem" }}>
                    Book an appointment
                  </h3>
                  <ul className="space-y-2.5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {bookAppointment.map((item, idx) => (
                      <li key={idx} className="text-[16px] leading-[1.7] text-navy-deep pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Mentioning every symptom to a single doctor is extremely crucial, including the symptoms that seem completely unrelated. Because it makes the pattern of the disease visible.
                  </p>

                  <Link
                    to="/book-appointment"
                    className="group"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
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

                {/* ── REFERENCES ── */}
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
                      <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor about any medical concern.
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
                      Consultant Rheumatologist specializing in autoimmune conditions, including Sjögren's syndrome and long-term care.
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

export default SjogrensSyndromeSymptoms
