import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const flareTriggers = [
  "Stress",
  "Infections",
  "Smoking",
  "Drinking alcohol",
  "Stopping medicines suddenly",
]

const foodInclude = [
  "Fatty fish (mackerel, sardines, hilsa)",
  "Turmeric and ginger",
  "Green leafy vegetables (palak, methi)",
  "Fruits and berries",
  "Whole grains and legumes",
  "Probiotic curd (dahi)",
]

const foodAvoid = [
  "Red and processed meats",
  "Refined sugar and sugary drinks",
  "Fried and ultra-processed foods",
  "Excess alcohol",
  "Full-fat dairy in large quantities",
  "High-sodium packaged foods",
]

const footCareTips = [
  "Wearing comfortable shoes with soft cushioning and good support.",
  "Choosing footwear with enough space for the swollen toes may help reduce foot pain.",
  "Avoid wearing footwear that increases pressure on painful areas.",
  "Doctors may recommend special shoe inserts to make walking easier and more comfortable.",
]

const nailCareTips = [
  "Trimming the nails short can help protect them and prevent further damage.",
  "Taking extra care during manicures and pedicures to avoid any small injuries, as they can also worsen nail symptoms.",
  "Wearing gloves while cleaning or washing dishes may help protect the nails and surrounding skin from irritation.",
]

const faqs = [
  { q: "Can I exercise during a psoriatic arthritis flare?", a: "Yes, gentle movement such as short walks and stretching is usually better than complete rest during a mild flare. High-intensity exercise should be avoided until symptoms improve." },
  { q: "What is the best diet for psoriatic arthritis in India?", a: "An anti-inflammatory Mediterranean-style diet is considered best for people with psoriatic arthritis. It includes foods such as turmeric, green leafy vegetables like palak and methi, fatty fish, probiotic curd, and whole grains, which support overall health." },
  { q: "Can I drink alcohol if I am taking methotrexate for psoriatic arthritis?", a: "No, alcohol should be avoided or kept to a minimum while taking methotrexate. Drinking alcohol with methotrexate can increase the risk of liver damage. Even occasional drinking at social or family events may not be safe. A rheumatologist can provide personalised advice on alcohol use while taking this medicine." },
  { q: "How do I manage foot pain from psoriatic arthritis in India?", a: "Wearing comfortable shoes with a wide toe area, good cushioning, and proper support can help reduce daily foot pain. Flat chappals and sandals commonly worn in India may worsen foot pain in some people. If needed, a rheumatologist or foot specialist (podiatrist) may recommend special shoe inserts or supportive devices. These can provide extra comfort while walking and are often a practical and affordable option" },
]

const references = [
  { text: "Arthritis Foundation. Psoriatic Arthritis Self-Care Tips. ", url: "https://www.arthritis.org/diseases/more-about/psoriatic-arthritis-self-care-tips" },
  { text: "American College of Rheumatology. Tips for Managing Psoriatic Arthritis. ", url: "https://rheumatology.org/patient-blog/tips-for-managing-psoriatic-arthritis" },
  { text: "PMC. Triple Jump for the Optimal Management of Psoriatic Arthritis. 2023. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10471880/" },
  { text: "Cleveland Clinic. Living With Psoriatic Arthritis. 2025. ", url: "https://health.clevelandclinic.org/living-with-psoriatic-arthritis" },
  { text: "PMC. Disabling Foot Pain and Its Impact on Daily Living in Psoriatic Arthritis. 2024. ", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11462968/" },
  { text: "WebMD. Living With Psoriatic Arthritis. 2024. ", url: "https://www.webmd.com/arthritis/psoriatic-arthritis/guide-chapter-psoriatic-arthritis-living-with" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "flares", label: "Managing Flares Day to Day" },
  { id: "diet", label: "Diet, Nutrition and Weight Management" },
  { id: "exercise", label: "Exercise and Staying Active" },
  { id: "foot-nail-care", label: "Foot and Nail Care: Unique to Psoriatic Arthritis" },
  { id: "skin-care", label: "Skin Care and Sun Protection" },
  { id: "mental-health", label: "Mental Health and Emotional Wellbeing" },
  { id: "daily-life", label: "Daily Life: Work, Sleep, Smoking and Alcohol" },
  { id: "monitoring", label: "Monitoring and Regular Check-Ups" },
  { id: "speak-to-doctor", label: "When To Speak To A Rheumatologist" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LivingWithPsoriaticArthritis() {
  const [activeSection, setActiveSection] = useState("flares")

  useEffect(() => {
    document.title = "Living With Psoriatic Arthritis: Daily Management, Diet, Exercise and Wellbeing | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Living With Psoriatic Arthritis</span>
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
                  Living With Psoriatic Arthritis:
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
                    Daily Management, Diet, Exercise and Wellbeing
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
                    Living with psoriatic arthritis is not just about taking medicines every day. Pain in joints and heels may make walking in the morning or climbing stairs uncomfortable. Swollen fingers or toes can make even simple tasks such as writing, cooking or buttoning clothes more difficult. Skin symptoms, tiredness, and stiffness may also affect work, sleep, and exercise. However, small changes in daily habits such as staying active, looking after the skin and nails, and eating a healthy diet can help manage everyday symptoms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Most people with psoriatic arthritis can continue working, exercising, and leading active lives with the right treatment and lifestyle changes. Learning how to manage the condition can help reduce discomfort and support long-term health. This page explains ways to manage psoriatic arthritis, including diet, exercise, and other lifestyle habits that can help in everyday life.
                  </p>
                </div>

                {/* ── FLARES ── */}
                <div id="flares" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Flares Day to Day
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Psoriatic arthritis symptoms do not always remain the same.  Certain factors can make the skin and joint symptoms worse, such as
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {flareTriggers.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In people with skin psoriasis, minor cuts, scratches, or excessive sun exposure can trigger a new patch of psoriasis in that area. This is called the Koebner phenomenon and is very common in people with psoriasis. Taking simple precautions during everyday activities such as cooking, gardening, or outdoor work may help protect the skin and reduce the risk of cuts, scratches, and irritation.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When the symptoms suddenly become worse, resting the painful and swollen joint can help reduce discomfort. Cold packs may help ease swelling, while warm compresses can improve stiffness. It is important to continue taking medicines as prescribed unless a doctor advises otherwise.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If symptoms become severe or do not improve within a few days, speaking with a doctor can help prevent further problems. Knowing what makes the symptoms worse and managing them early can make daily life easier and help keep the condition under control.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── DIET ── */}
                <div id="diet" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Diet, Nutrition and Weight Management
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Maintaining a healthy weight can help manage symptoms of psoriatic arthritis. Excess weight puts excess pressure on painful joints and also affects how well the medicine works.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    It is recommended to follow an anti-inflammatory diet such as a Mediterranean-style diet. This diet mainly contains fruits, vegetables, whole grains, legumes, fish, and healthy fats. It can be easily adapted to Indian meals. Turmeric and ginger are commonly used in Indian cooking that also help reduce inflammation. The following dietary choices may be helpful for people living with psoriatic arthritis:
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[480px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Food To Include In The Diet</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Food To Avoid In The Diet</th>
                        </tr>
                      </thead>
                      <tbody>
                        {foodInclude.map((item, i) => (
                          <tr key={i} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{foodAvoid[i]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    It is important to speak with a doctor before consuming alcohol, especially if you are taking methotrexate. Drinking alcohol with methotrexate can increase the risk of liver damage.
                  </p>
                </div>

                {/* ── EXERCISE ── */}
                <div id="exercise" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Exercise and Staying Active
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    People often think that exercise may worsen joint pain. In reality, gentle movement can help reduce stiffness and make daily activities easier. Staying active also helps maintain a healthy weight and improves heart health and overall mood.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Gentle exercises like swimming, walking, yoga, and cycling are often recommended. Swimming is especially helpful for people with psoriatic arthritis. In water, the body feels lighter, which reduces pressure on painful joints. This makes movement much more comfortable. Yoga and breathing exercises help reduce stiffness and improve mood. If pain and swelling increase, it is best to reduce the intensity of the exercise instead of stopping it completely.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If the pain increases suddenly or the symptoms worsen, speak to a doctor. They will suggest activities that are more suitable for the condition.
                  </p>
                </div>

                {/* ── FOOT AND NAIL CARE ── */}
                <div id="foot-nail-care" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Foot and Nail Care: Unique to Psoriatic Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In psoriatic arthritis, pain in the heel or sole of the foot and swelling of the toes are common symptoms that can affect movement.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Foot Care Tips
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    In India, people often wear flat chappals and thin sandals, which do not provide enough support for painful feet. Simple changes can help reduce discomfort during daily activities.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
                    {footCareTips.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Nail Care Tips
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Nail changes in psoriatic arthritis are common and often need simple daily care.
                  </p>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    {nailCareTips.map((t, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{t}</li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Simple changes in daily habits can make everyday activities more comfortable and help protect the feet and nails.
                  </p>
                </div>

                {/* ── SKIN CARE ── */}
                <div id="skin-care" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Skin Care and Sun Protection
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriasis can make the skin dry, itchy and sensitive. As a result, small injuries and sunburn can further worsen the skin condition. Taking care of the skin every day may help reduce irritation and also lower the risk of forming a new psoriasis patch.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Applying fragrance-free moisturising creams, avoiding harsh soaps and wearing loose-fitting clothes can help protect the skin. Applying sunscreen with SPF 30 or higher can help protect the skin from sun damage, especially during prolonged sun exposure.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Mental Health and Emotional Wellbeing
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Due to long-term pain, skin rashes and changes in appearance, people often develop anxiety, low mood and poor confidence. Looking after emotional well-being is just as important as managing other symptoms in psoriatic arthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Regular counselling sessions, online support groups, and open conversations with family can make living with the condition easier. In many Indian families, emotional support from family members can help reduce daily challenges and feelings of isolation.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If anxiety, stress, or low mood is affecting daily life, speak with a doctor. They can recommend the right support or refer to a mental health professional if needed.
                  </p>
                </div>

                {/* ── DAILY LIFE ── */}
                <div id="daily-life" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Daily Life: Work, Sleep, Smoking and Alcohol
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most people with psoriatic arthritis find it difficult to continue working or carrying on with their daily activities. Taking regular movement breaks during long hours of sitting or standing can help reduce pain and stiffness. Using comfortable seating and protecting the joints while travelling may also help manage symptoms.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Extreme tiredness in psoriatic arthritis is common. Even simple daily activities may feel more difficult on some days. Getting adequate sleep and maintaining a consistent sleep schedule may help.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Smoking can worsen the symptoms of both psoriasis and psoriatic arthritis. It can also affect how well the treatment works. Quitting smoking may help improve symptoms and overall health. People taking methotrexate should speak with their doctor before drinking alcohol. Drinking alcohol while taking methotrexate can increase the risk of liver damage.
                  </p>
                </div>

                {/* ── MONITORING ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Monitoring and Regular Check-Ups
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Psoriatic arthritis symptoms do not remain the same all the time. They may improve for a while before returning again. Regular monitoring is often done to help check whether the treatment is working as expected. A rheumatologist may recommend blood tests for ESR and CRP to check how active the condition is. Liver function tests are also recommended at regular intervals, especially for people taking methotrexate. Imaging scans may be advised to look for joint changes.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Sometimes, people with psoriatic arthritis develop pain and redness in the eyes. In such cases, the doctor often recommends regular eye check-ups. Doctors use a scoring tool called <strong className="font-semibold">DAPSA ( Disease Activity Index for Psoriatic Arthritis) </strong> to check how active the disease is, how much pain is felt, and how well the treatment is working. Regular check-ups help doctors monitor the condition and adjust treatment if needed. These check-ups are a routine part of care and do not mean that the condition is getting worse.
                  </p>
                </div>

                {/* ── SPEAK TO DOCTOR ── */}
                <div id="speak-to-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When To Speak To A Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Living with psoriatic arthritis involves consistent treatment, healthy lifestyle habits, and regular follow-up care. A rheumatologist can create a treatment plan that addresses joint symptoms, skin care, and overall well-being. With the right treatment and support, most people can manage their symptoms and continue their daily activities comfortably.
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
                  <details className="group" open>
                    <summary className="cursor-pointer inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden" style={{ color: "#0f616e", fontWeight: 700, fontSize: "15px" }}>
                      View Sources
                      <svg className="transition-transform group-open:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                    </summary>
                    <ul className="space-y-2 mt-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                      {references.map((r, i) => (
                        <li key={i} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                          {r.text}
                        </li>
                      ))}
                    </ul>
                  </details>
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
                      Consultant Rheumatologist for psoriatic arthritis evaluation and long-term joint care.
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

export default LivingWithPsoriaticArthritis
