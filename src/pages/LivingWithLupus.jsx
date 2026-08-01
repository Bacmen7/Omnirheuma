import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const eatMore = [
  "Fatty fish (mackerel, sardines, hilsa)",
  "Turmeric and ginger",
  "Green leafy vegetables (palak, methi)",
  "Fruits and berries",
  "Whole grains and legumes",
  "Curd (dahi)",
]

const eatLess = [
  "Red and processed meats",
  "Refined sugar and sugary drinks",
  "Fried and ultra-processed foods",
  "Too much alcohol",
  "High-sodium packaged foods",
  "Garlic and alfalfa sprouts",
]

const faqs = [
  { q: "Is it safe to work out when I am having a lupus episode?", a: "Answer: It is better to move slowly rather than to stop. Short walks and breathing exercises keep joints movable without straining the body. High-intensity activity should be delayed until after the flare has settled. Discuss with your rheumatologist how active you can be during the episodes." },
  { q: "Do you need to eat anything specific if you have lupus?", a: "Answer: There is no “lupus diet,”. But eating foods that help reduce inflammation. Evidence supports foods, including vegetables, fatty fish, whole grains, and turmeric. Some foods have known immune-stimulating properties. These include garlic and alfalfa sprouts, and should be avoided." },
  { q: "Will I be able to work with lupus in India?", a: "Answer: Yes. Most people do. But sometimes changes are required. Sun protection must be a daily practice for outdoor workers or for those who commute for long hours. Managing fatigue through rest breaks and consistent sleep is crucial." },
  { q: "Is exposure to the sun linked to flare-ups of lupus in India?", a: "Answer: Yes. The most common trigger for lupus-induced flares is exposure to the sun's ultraviolet rays. The UV index in India is very high all year. SPF 50 sunscreen, protective clothing, and avoidance of direct sun exposure between 10 am and 4 pm are important in all seasons and weather conditions." },
  { q: "Can lupus impact mental health?", a: "Answer: Lupus can cause depression in approximately 25% of cases and anxiety in 37% of people. Prolonged pain, fatigue, and irregular flare-ups can worsen your mental health. Counselling and peer support are part of managing lupus well." },
  { q: "Is it possible to get pregnant and conceive with lupus?", a: "Answer: The majority of women with lupus will be healthy during pregnancy. The primary focus is on active disease. At least 6 months of stable lupus is needed for rheumatologists to advise conceiving. Early rheumatology consultation before and during the early stages of pregnancy is important for safe outcomes." },
]

const references = [
  { text: "NIAMS. Living With Lupus. National Institutes of Health. 2025. ", url: "https://www.niams.nih.gov/community-outreach-initiative/understanding-joint-health/living-with-lupus" },
  { text: "UCSF Osher Center. Nutrition and Systemic Lupus Erythematosus. 2024. ", url: "https://osher.ucsf.edu/patient-care/clinical-specialties/integrative-rheumatology/nutrition-and-rheumatic-diseases/nutrition-lupus" },
  { text: "Lupus Foundation of America. Diet and Nutrition With Lupus. ", url: "https://www.lupus.org/resources/diet-and-nutrition-with-lupus" },
  { text: "WebMD. Tips for Everyday Living With Lupus. 2026. ", url: "https://www.webmd.com/lupus/lupus-tips-everyday-living" },
  { text: "Johns Hopkins Lupus Center. Diet and Lupus. ", url: "https://www.hopkinslupus.org/lupus-info/lifestyle-additional-information/lupus-diet/" },
  { text: "PubMed Central. Depression and Anxiety in SLE Patients. ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10634407/" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "flares", label: "Understanding Flares and How to Manage Them" },
  { id: "sun-protection", label: "Sun Protection - The Most Important Daily Habit" },
  { id: "diet", label: "Diet and Nutrition" },
  { id: "exercise", label: "Exercise and Physical Activity" },
  { id: "mental-health", label: "Mental Health and Emotional Wellbeing" },
  { id: "daily-life", label: "Daily Life - Work, Sleep, and Smoking" },
  { id: "financial", label: "Financial Planning and Long-Term Costs" },
  { id: "monitoring", label: "Monitoring and Regular Check-Ups" },
  { id: "not-alone", label: "You Are Not Managing This Alone - Speak to a Rheumatologist" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LivingWithLupus() {
  const [activeSection, setActiveSection] = useState("flares")

  useEffect(() => {
    document.title = "Living With Lupus - Daily Management, Diet, Exercise and Wellbeing | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Living With Lupus</span>
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
                  Living With Lupus -
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
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 29, 2026
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
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Living with lupus does change your life, but doesn't stop it. Over 90% of lupus patients live full, active lives. Medicine is part of that, but what happens between appointments matters as much. A person's habits, diet, sleep, sun exposure, and emotional status have an impact on the way lupus affects them. It&rsquo;s as significant as the medicine in a family in India where close family members take care of one another. Topics include flare and skin protection, diet, exercise, mental health, and planning finances to make long-term care manageable. Read more to explore it in detail.
                  </p>
                </div>

                {/* ── FLARES ── */}
                <div id="flares" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Understanding Flares and How to Manage Them
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When lupus becomes more active, it is called an episode or a flare. Pain comes back, and fatigue becomes more evident. All the symptoms that had settled returns. Flares don&rsquo;t mean things are getting permanently worse. They are part of living with lupus. Most people can identify their own patterns over time.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Lupus has common triggers that can start a flare. They are sunlight, emotional or physical stress, infections, hormonal changes, and smoking. When a flare hits, rest more and use cold packs on swollen joints. Continue the medicines as prescribed. Call your rheumatologist if the flare is severe. Or if it comes back with new symptoms, or does not go away within a few days.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── SUN PROTECTION ── */}
                <div id="sun-protection" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Sun Protection - The Most Important Daily Habit
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sun exposure is the most common trigger. In India, due to high UV index, outdoor work culture, and long commutes, managing it takes real daily effort.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some basic habits must be followed for protection from the sun. Use SPF 50 broad-spectrum sunscreen every morning, including cloudy days. Wear protective clothing, a wide-brimmed hat, and UV-protective sunglasses. Additionally, avoid going in direct sun between 10 am and 4 pm. In India, avoiding the sun also increases the risk of vitamin D deficiency. A rheumatologist may give you vitamin D supplements to compensate for this.
                  </p>
                </div>

                {/* ── DIET ── */}
                <div id="diet" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Diet and Nutrition
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    There is no one-diet-fits-all routine for lupus patients. However, research recommends an anti-inflammatory diet. It is built more around vegetables, fruits, whole grains, healthy fats, and lean protein. Turmeric should be given a special mention. It contains curcumin, the compound that gives turmeric its colour. According to the UCSF study, curcumin benefited lupus patients with kidney involvement when taken alongside medicines. It is a practical addition that may help lupus patients in recovery.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[480px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Eat More</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Eat Less</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eatMore.map((item, i) => (
                          <tr key={i} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{eatLess[i]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The last row is crucial. Garlic and alfalfa sprouts are seen in Indian cooking and traditional remedies. But both can worsen lupus. Patients using home remedies or Ayurvedic preparations should inform their rheumatologist before continuing.
                  </p>
                </div>

                {/* ── EXERCISE ── */}
                <div id="exercise" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Exercise and Physical Activity
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Exercise helps reduce fatigue and keeps joints movable. It also helps manage the risk for heart disease that comes with lupus. It is not optional. The key is to stay low-impact. Swimming, walking, gentle yoga, and cycling can be beneficial. Yoga is suitable for Indian patients. It can be done anywhere and is adaptable to different energy levels.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The gentle extension poses with Pranayama (breathing exercises) help maintain flexibility and lung function. If you are having a mild lupus episode, reduce rather than stopping entirely. A short walk or a few breathing exercises are also helpful. Talk to your rheumatologist before starting anything new.
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
                    Lupus is an emotional burden that&apos;s no joke. Many people don&apos;t talk about it very much. Depression occurs in about 25% of lupus patients and anxiety in 37%. It is far higher than the rates for the general population. The unpredictability of flares, chronic pain, and the long-term burden of care wear people down. This is an inevitable consequence of suffering from an unpleasant disease.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Seeking help is part of coping with lupus. Counselling, peer support groups and straightforward discussions with the family can help a lot. For Indian families, members can help in care. Inclusion can diminish isolation and share caregiving responsibility. If needed, your rheumatologist may refer the patient to a mental health professional.
                  </p>
                </div>

                {/* ── DAILY LIFE ── */}
                <div id="daily-life" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Daily Life - Work, Sleep, and Smoking
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most people with Lupus continue to work. However, changes may be needed. To cope with sun exposure, it&apos;s important to use sunscreen daily. Wear protective clothing and consider timing. Resting during the day helps reduce fatigue and joint stiffness.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    One of the important features of lupus is fatigue, and the lack of sleep can worsen it. 7-9 hours of consistent sleep in a cool, quiet room is required.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Lupus is more difficult to treat in smokers. It worsens the symptoms of lupus. It can make the episodes more frequent. And it contributes to the risk of heart disease associated with lupus. One of the greatest changes that a lupus patient and their doctor can make is to quit.
                  </p>
                </div>

                {/* ── FINANCIAL PLANNING ── */}
                <div id="financial" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Financial Planning and Long-Term Costs
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Lupus has a lot of costs over the course of years. Worsened episodes, consultations, blood and urine tests, and medications all add up, as does hospitalisation. Planning early helps. Government employees belonging to CGHS may avail of subsidized treatment at the empanelled hospitals. Patients visiting the hospital should enquire about the coverage of PMJAY. Before the onset of problems, consider private insurance for autoimmune conditions and rheumatology consultations. Keep the records of diagnosis, test results, etc. It is easier to make an insurance claim if everything is in one place.
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
                    Treatment plan accuracy is ensured by monitoring. The blood tests include markers of immune activity (ANA), a marker specific to lupus (anti-dsDNA), markers of inflammation (ESR and CRP), and urine tests to check for early changes in the kidneys; regular eye examinations are also conducted.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    <strong className="font-semibold">SLEDAI</strong> (Systemic Lupus Erythematosus Disease Activity Index)assists both patient and physician in determining the status of the disease and the disease score. It is a brief questionnaire that tracks how active the disease is. Don&apos;t assume it&apos;s wrong if you don&apos;t have regular check-ups.
                  </p>
                </div>

                {/* ── NOT ALONE ── */}
                <div id="not-alone" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    You Are Not Managing This Alone - Speak to a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Carrying out a consistent regimen is essential, as well as support from family and friends and ongoing care with a physician. No one should be working out this problem by themselves. Your rheumatologist can plan a tailored treatment program. It will be tailored to your medications, lifestyle, diet, and mental health.
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
                      Consultant Rheumatologist for lupus evaluation and long-term care.
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

export default LivingWithLupus
