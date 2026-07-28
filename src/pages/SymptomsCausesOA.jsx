import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const irreversibleFactors = [
  { label: "Age:", detail: "As we grow older, the body’s ability to repair cartilage naturally slows down. This is why osteoarthritis becomes more common after the age of 45." },
  { label: "Sex:", detail: "Women are more likely to develop osteoarthritis, especially after menopause, when hormonal changes can affect joint health." },
  { label: "Genetics:", detail: "If osteoarthritis is present in the family, your chances of developing it may be higher." },
]

const reversibleFactors = [
  "In obese people, the excess body weight could place unequal stress on the knees and hips. With every extra kilogram, more stress is added to the joints as they walk.",
  "Even if older injuries seemed to heal, there is an increased chance of cartilage breakdown later in life.",
  "Physically demanding jobs or those that involve prolonged kneeling, lifting, or squatting.",
  "A sedentary lifestyle with a lack of movement often makes muscles weak and tired. It could offer only less support and stability around a joint.",
]

const indiaFactors = [
  "Low levels of Vitamin D are common across Indians. Vitamin D plays a key role in maintaining bone strength and cartilage health. A brisk walk under the bright sunlight or Vitamin D supplements (if advised by a doctor) could help manage the deficiency.",
  "Sitting on the floor for meals and prayers, or using a squat lavatory, often daily activities demand deep knee bending. This places continuous stress on the joints.",
  "Repeated bending over the years places consistent high stress on the knee joint. This becomes more alarming when the muscles supporting the knee are not strong enough to tolerate the load.",
]

const jointSpecificSymptoms = [
  { label: "Knee:", detail: "Pain going up or down stairs, unstable walking, swelling around the kneecap" },
  { label: "Hip:", detail: "Groin or thigh pain, difficulty putting on shoes or socks, reduced movement" },
  { label: "Hands and fingers:", detail: "Bony lumps at the joints, weakened grip strength, difficulty opening jars" },
  { label: "Spine:", detail: "Stiffness and aching in the lower back or neck, occasionally radiating discomfort down the arms or legs" },
]

const similarConditions = [
  { condition: "Rheumatoid Arthritis", difference: "Stiffness lasts longer and affects both sides of the body at once. Often accompanied by fatigue and a general feeling of being unwell" },
  { condition: "Gout", difference: "Sudden, severe pain, often in the big toe. It is associated with high uric acid and pain can appear overnight with no signs of warning" },
  { condition: "Post-Chikungunya Arthritis", difference: "Joint pain that follows a chikungunya fever can persist for months. This is often mistaken for early osteoarthritis in Indian patients" },
]

const doctorSigns = [
  "Joint pain lasting more than a few weeks",
  "Stiffness limiting to perform your daily tasks",
  "Swelling that doesn't settle even after a day or two of rest.",
  "Pain that is gradually getting worse without a clear reason",
]

const faqs = [
  { q: "1. Can osteoarthritis affect people under 40?", a: "Yes, it can. But, just not very commonly. Osteoarthritis is often linked to ageing, but younger people may develop it after a joint injury, due to joint structure issues, or from jobs that put repeated stress on their joints. So, it’s not only an older person’s condition." },
  { q: "2. Why does joint pain feel worse in cold or rainy weather?", a: "Many people notice their joint pain gets worse when the weather turns cold or rainy, and this is a real experience. One possible reason is that changes in air pressure may slightly affect the tissues around the joints, making them more sensitive. Even though research is still ongoing, what you feel is valid." },
  { q: "3. Does osteoarthritis always get worse over time?", a: "Not necessarily. Osteoarthritis is a long-term condition, but it doesn’t always progress quickly. With the right care, regular movement, and healthy lifestyle choices, many people manage their symptoms well and stay active for years." },
  { q: "4. How is osteoarthritis different from rheumatoid arthritis?", a: "Osteoarthritis happens due to the gradual wear and tear of the joints, while Rheumatoid arthritis is caused by the immune system attacking the joints. Rheumatoid arthritis often affects both sides of the body, causes longer morning stiffness, and may also bring fatigue. Understanding the difference helps in choosing the right treatment." },
  { q: "5. Can squatting or sitting on the floor worsen knee osteoarthritis?", a: "Spending long periods in deep knee positions like squatting or sitting on the floor can put extra strain on the joints, especially if the muscles around them are weak. That said, it doesn’t mean you have to avoid these positions completely. You just have to balance them with good posture and muscle strengthening." },
  { q: "6. Is post-chikungunya joint pain the same as osteoarthritis?", a: "No, they are not the same. Chikungunya can lead to lingering joint pain after the infection, which may feel similar to osteoarthritis but has a different cause. A rheumatologist can help tell the difference and guide proper treatment." },
]

const references = [
  "Chopra A, et al. COPCORD India Study. Indian Journal of Rheumatology. 2012.",
  "Steinmetz JD, et al. Burden of Osteoarthritis in India, 1990–2019. Osteoarthritis and Cartilage. 2022.",
  "World Health Organization. Osteoarthritis Fact Sheet. who.int. 2023.",
  "Mayo Clinic. Osteoarthritis: Symptoms and Causes. mayoclinic.org. 2025.",
  "Cleveland Clinic. Osteoarthritis Overview. clevelandclinic.org.",
  "www.oafifoundation.com",
  "www.nhs.uk",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "feel-like", label: "What Does Osteoarthritis Actually Feel Like?" },
  { id: "causes", label: "What Causes Osteoarthritis?" },
  { id: "risk-factors", label: "Risk Factors for Osteoarthritis" },
  { id: "early-symptoms", label: "Early Symptoms of Osteoarthritis" },
  { id: "progression", label: "Symptoms as the disease progresses" },
  { id: "not-oa", label: "When Your Joint Pain Might Not Be Osteoarthritis" },
  { id: "see-doctor", label: "When Should You See a Doctor?" },
  { id: "next-step", label: "Take the Next Step" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function SymptomsCausesOA() {
  const [activeSection, setActiveSection] = useState("feel-like")

  useEffect(() => {
    document.title = "Osteoarthritis, Symptoms and Causes: What Your Joints Are trying to Tell You | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Osteoarthritis, Symptoms and Causes</span>
            </div>

            {/* Split layout */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">

              {/* Left: Title */}
              <div className="flex-1 pb-7 text-left md:pb-0">
                <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
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
                  Osteoarthritis, Symptoms and Causes:
                  <span
                    style={{
                      display: "block",
                      fontSize: "clamp(22px, 2.9vw, 34px)",
                      lineHeight: 1.2,
                      letterSpacing: "0px",
                      color: "rgba(255,255,255,0.92)",
                      marginTop: "0.85rem",
                    }}
                  >
                    What Your Joints Are trying to Tell You
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
                    Deepa, a 45-year-old mom of two, leads a busy city life. Her mild joint discomfort gradually worsened. She was exhausted. Tired of following health hacks, hitting the gym, and people's never-ending advice.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Reasons for pain may vary. From a mild strain and sprain to long-term conditions like Gout, Rheumatoid arthritis and Osteoarthritis. Osteoarthritis does not begin with an obvious warning sign. It begins quietly. A stiff knee after sitting through a long meeting. A dull ache in the fingers after cooking. A grinding sensation after climbing the stairs that wasn't there a year ago. When life becomes busy, it is easy to ignore these signs. Often, a bit of joint discomfort feels like it comes with the territory of getting older.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    But these are signals worth paying attention to. Understanding what osteoarthritis feels like, what causes it, and which risk factors are most relevant in the Indian context can make a real difference in catching it early. This article walks you through all of that, including how to tell Osteoarthritis apart from other similar conditions.
                  </p>
                </div>

                {/* ── FEEL LIKE ── */}
                <div id="feel-like" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Does Osteoarthritis Actually Feel Like?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is a condition that affects both the bones and cartilage in your joints. Cartilage is a flexible and smooth tissue acting as a cushion in the joints. This cartilage, which protects bones from rubbing against each other, gradually breaks down. Over time, as the cushion wears thin, the joint and the tissues surrounding it start to react. This causes pain, stiffness, and swelling. The symptoms vary according to the joint affected and how far the condition has progressed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Osteoarthritis can affect your knees, hips, hands, feet and spine. Knees, hips and hands are the most frequent sites. One of the reasons osteoarthritis often goes unnoticed early is that symptoms creep in slowly. This is the reason why many people don't connect them to osteoarthritis until they've been living with them for many months.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Osteoarthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Daily activities like walking, climbing stairs, or squatting place repeated stress on your joints. Normally, the body can repair this everyday wear and tear.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    However, this ability is impaired in Osteoarthritis. The factors that cause this damage can vary. Over time, this leads to the gradual breakdown of cartilage. When cartilage wears off, bones start to rub against each other and wear down.
                  </p>
                </div>

                {/* ── RISK FACTORS ── */}
                <div id="risk-factors" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Risk Factors for Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis does not have a single cause. Many factors combine to damage the joints. These factors fall into two broad groups: Reversible and irreversible causes.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Understanding this difference is important. While some risks are unavoidable, others give you a chance to take control. Some of these can be managed with lifestyle changes, while others, like age or genetics cannot be changed. Knowing the difference helps you focus on what you can control and protect your joint health.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Factors you cannot reverse
                  </h3>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {irreversibleFactors.map((f, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{f.label}</strong> {f.detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Having these risk factors doesn&rsquo;t mean severe disease is inevitable. Many people manage osteoarthritis effectively with the right care and lifestyle support.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Factors you could reverse
                  </h3>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {reversibleFactors.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The encouraging part? Even addressing one of these factors can help slow down the progression of osteoarthritis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Risk Factors Specific to India
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A few lifestyle patterns make Osteoarthritis particularly relevant to Indian patients, while absent in the global scenario.
                  </p>
                  <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {indiaFactors.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── EARLY SYMPTOMS ── */}
                <div id="early-symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Early Symptoms of Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In the early stages, osteoarthritis is often ignored as signs of weakness and ageing. As the symptoms tend to be mild, inconsistent, and to progress over time, one might miss noticing the condition in their starting stage.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Some of the early red flags to be concerned about are-
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint Stiffness
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You may notice a stiff, sluggish feeling in your joints when you wake up or after sitting still for a long time. The good news is, this stiffness usually eases within 30 minutes of moving. That 30-minute threshold is actually helpful.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    If your stiffness lasts longer than an hour, it's more likely to be rheumatoid arthritis rather than osteoarthritis, and that needs a doctor's visit.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    A Dull Ache
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    In early Osteoarthritis, pain appears while walking, holding something tight, or climbing stairs. It typically settles down with rest. Though the pain is inconsistent in the early stages of Osteoarthritis, it's still worth noticing and discussing if it keeps coming back.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Creaking or Grinding Sensation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some notice a faint crackling when they move the affected joint. This is called crepitus. It happens when rough, worn-down cartilage rubs against each other. Crepitus, along with pain and stiffness, are the signs that deserve medical review.
                  </p>
                </div>

                {/* ── PROGRESSION ── */}
                <div id="progression" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms as the disease progresses
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    As cartilage continues to wear and tear, symptoms become more consistent and start to affect your everyday life, evidently.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The table below gives a simple picture of how Osteoarthritis gradually evolves over time if left untreated.
                  </p>
                  <img
                    src="/images/symtomsofdiese.webp"
                    alt="Symptoms of osteoarthritis disease progression"
                    className="w-full"
                    style={{ marginTop: "2rem", marginBottom: "2.5rem", display: "block" }}
                    loading="lazy"
                  />
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Starting as an occasional pain in mild cases, the symptoms change through various stages.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In the most severe cases, the bones at the joints may lose their normal shape and form bony lumps. They are called Heberden's nodes. They form near the finger joints, making it difficult to hold things with a tight grip.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    While you are limping, struggling to stretch your knees, and waking up at night, these are the signs of advanced Osteoarthritis. It is encouraging as the disease could be treated effectively. You could manage it efficiently before reaching an advanced stage.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint - Specific Symptoms of Osteoarthritis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis may develop in specific areas and the symptoms may vary, which are as follows-
                  </p>
                  <ul className="space-y-2 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {jointSpecificSymptoms.map((f, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{f.label}</strong> {f.detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── NOT OA ── */}
                <div id="not-oa" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Your Joint Pain Might Not Be Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Every joint pain is not going to be osteoarthritis. Several conditions can mimic osteoarthritis, and their treatment varies. Let&rsquo;s see how to differentiate between them.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Condition</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">How does it differ from Osteoarthritis?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {similarConditions.map((row) => (
                          <tr key={row.condition} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top whitespace-nowrap">{row.condition}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.difference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Correct and timely diagnosis saves months of managing the wrong health condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    As the symptoms are often misleading, a rheumatologist is the right specialist to see when joint pain is persistent or confusing.
                  </p>
                </div>

                {/* ── SEE DOCTOR ── */}
                <div id="see-doctor" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should You See a Doctor?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Consider seeing a doctor if you notice any of the following signs:
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {doctorSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Early evaluation gives you more treatment options and better outcomes. A rheumatologist can confirm whether you have osteoarthritis, rule out other conditions, and help you build a plan suited to your lifestyle.
                  </p>
                </div>

        {/* ═══════════ NEXT STEP + REFERENCES ═══════════ */}
              <div id="next-step" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  Take the Next Step
                </h2>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                  If the symptoms discussed in this article sound familiar, a proper diagnosis is the need of the hour. Joint pain that is persistent, limiting, or getting worse is not something to be ignored. A rheumatologist can give you clarity on what's happening to joints and a plan for managing it. The earlier you take action, the healthier your life can be.
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

export default SymptomsCausesOA
