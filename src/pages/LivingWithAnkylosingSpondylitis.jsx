import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Living with Ankylosing Spondylitis
   ───────────────────────────────────────────── */

const dietEatMore = [
  "Fatty fish such as mackerel and sardines",
  "Turmeric and ginger",
  "Green leafy vegetables like palak and methi",
  "Fruits and berries",
  "Flaxseeds and walnuts",
  "Curd",
]

const dietEatLess = [
  "Red and processed meats",
  "Refined sugar and sugary drinks",
  "Fried and ultra-processed foods",
  "Excess alcohol",
  "High-starch foods",
  "Large quantities of nightshades",
]

const faqs = [
  {
    q: "Can I exercise during a flare?",
    a: "Answer: Gentle movement generally is better than complete rest. Short walks and easy stretches stop stiffness from worsening. Scale back high-intensity exercise during a flare. You can build it up again as symptoms improve.",
  },
  {
    q: "What is the best diet for ankylosing spondylitis in India?",
    a: "Answer: An anti-inflammatory approach works well. You can include turmeric, ginger, palak, methi, curd, flaxseeds and fruit, with less processed food, refined sugar and red meat. No food cures the condition, but consistent eating habits help.",
  },
  {
    q: "Does ankylosing spondylitis affect mental health?",
    a: "Answer: Yes. Depression and anxiety are considerably more common than in the general population, since chronic pain and fatigue take a cumulative toll. Raising it with your rheumatologist and connecting with communities like Antardhwani both help.",
  },
  {
    q: "Can I continue working?",
    a: "Answer: Most people do, including in physically demanding roles, with adjustments. Regular movement breaks, ergonomic support, and an honest conversation with your employer make a difference. Your rheumatologist can advise on workplace adaptations.",
  },
  {
    q: "Does smoking make it worse?",
    a: "Answer: Yes, significantly. It speeds up the disease progression, reduces how well medicines work, and raises inflammation throughout the body. Quitting is among the most impactful changes you can make.",
  },
  {
    q: "Is yoga safe with ankylosing spondylitis?",
    a: "Answer: Yes, with proper guidance. Poses that extend the spine, such as Bhujangasana and Ustrasana, and breathing practices like Pranayama are particularly useful. Avoid deep backbends and forceful twisting, and work with an instructor who knows the condition.",
  },
]

const references = [
  "Spondylitis Association of America. Exercise and Posture for Ankylosing Spondylitis.",
  "Chen et al. Combined Home Exercise is More Effective Than Range-of-Motion Exercise in Ankylosing Spondylitis.",
  "Antardhwani. Patient Advocacy and Support for Ankylosing Spondylitis in India.",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "managing-flares", label: "Managing Pain and Flares Day to Day" },
  { id: "exercise", label: "Exercise: The Most Important Daily Habit" },
  { id: "diet", label: "Diet and Nutrition" },
  { id: "mental-health", label: "Mental Health and Emotional Wellbeing" },
  { id: "work-sleep", label: "Work, Sleep and Smoking" },
  { id: "costs", label: "Planning for Long-Term Costs" },
  { id: "monitoring", label: "Staying on Top of Your Health" },
  { id: "not-alone", label: "You Are Not Managing This Alone" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function LivingWithAnkylosingSpondylitis() {
  const [activeSection, setActiveSection] = useState("managing-flares")

  useEffect(() => {
    document.title = "Living with Ankylosing Spondylitis: Exercise, Diet and Daily Management | Omni Rheuma"
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
              <Link to="/" className="hover:underline text-white/80">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/health-guide" className="hover:underline text-white/80">Health Guide</Link>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>
                Living with Ankylosing Spondylitis
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
                  Living with Ankylosing Spondylitis:
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
                    Exercise, Diet and Daily Management
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
                    Stiffness in the morning is one of the most challenging symptoms for patients with Ankylosing Spondylitis. You get out of bed, and it takes twenty minutes of movement before your back feels like it belongs to you again. Some days that is the whole story. Other days the fatigue arrives by mid-afternoon and refuses to shift.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Most people with ankylosing spondylitis keep working, stay active, travel, and hold on to the relationships that matter. It is seldom a single major intervention that distinguishes between coping successfully and struggling. It comes down to small habits repeated daily. They are built around movement, food, rest, and caring for your mind and your spine as well.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    None of this replaces your treatment. It works alongside it. And exercise in particular is one of the best supported things you can do for this condition. This article covers handling the episodes, exercises that matter most, eating well in an Indian kitchen, sleep, work, mental health, and long-term costs.
                  </p>
                </div>

                {/* ── MANAGING PAIN AND FLARES ── */}
                <div id="managing-flares" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Pain and Flares Day to Day
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A flare is an episode when symptoms worsen. Pain and stiffness increase, fatigue deepens, and ordinary tasks feel more difficult than usual.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The instinct is to rest completely, and that instinct is worth resisting. Staying still lets stiffness set in. Therefore, gentle movement is better than bed rest. While heat helps stiff joints, cold suits swollen and inflamed joints. The prescribed medicines also should be continued as directed throughout.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Contact your rheumatologist if the flare is severe or stays for more than a few days without improving. Flares are a normal part of living with this condition. Having one does not mean your treatment has failed.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── EXERCISE ── */}
                <div id="exercise" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Exercise: The Most Important Daily Habit
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Exercise is not optional in ankylosing spondylitis. It is one of the most clinically supported non-medicine treatments available. It does three things at once: <strong>reduces stiffness, improves posture, and helps prevent the spine fusing</strong> in a bent-forward position over the years.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A randomised controlled trial found that combined programmes, mixing stretching, strengthening and aerobic activity, work significantly better than range-of-movement exercise alone. The earlier and more consistently you build exercise into your routine, the more you benefit from it.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Which Exercises Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong>Swimming</strong> is among the most effective options. It keeps the spine and joints moving without putting impact stress through them. <strong>Walking</strong> is easy to access and good for your heart. It also breaks up the stiffness that builds during long periods of sitting.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong>Yoga</strong> suits Indian patients well and has clinical evidence behind it. Gentle poses such as <strong>Bhujangsana</strong> and <strong>Ustrasana</strong> open out the spine. They work against the forward-bending tendency of this condition. Pranayama matters too because ankylosing spondylitis can restrict how far the chest expands over time.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    Work with a physiotherapist or a certified yoga instructor who understands this condition rather than following a general class.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Posture Through the Day
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Sleep on a firm mattress with the thinnest pillow you find comfortable, or none at all. It keeps the spine in better alignment throughout the night.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    While awake, sit upright with proper back support and stand or walk briefly every <strong>30 to 45 minutes</strong>. This matters more than it used to in previous times. Many people with ankylosing spondylitis in India now work from home. The incidental movement that came with commuting and moving around an office has largely disappeared.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    What to Avoid
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    It is better to avoid high-impact contact sports, deep backbends, forceful twisting of the spine, and holding one position for long stretches. Or modify them if absolutely needed. Check with your rheumatologist or physiotherapist before you start any new activities.
                  </p>
                </div>

                {/* ── DIET AND NUTRITION ── */}
                <div id="diet" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Diet and Nutrition
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    No diet can cure ankylosing spondylitis. But an <strong>anti-inflammatory diet</strong> pattern would support your general health and help with inflammation overall.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The <strong>Mediterranean style</strong> of eating has the strongest evidence behind it, and it translates comfortably into an Indian kitchen. It includes plenty of vegetables, fruit, healthy fats and lean protein.
                  </p>

                  {/* Diet Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[480px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Eat more</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Eat less</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dietEatMore.map((item, idx) => (
                          <tr key={idx} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{dietEatLess[idx]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    <strong>Calcium</strong> and <strong>vitamin D</strong> deserve extra attention here, because this condition raises the risk of bone thinning over time. Regular sunlight, dairy or fortified foods, and supplements are helpful as and when your doctor advises them.
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
                    Living with a condition that is chronic and unpredictable impacts more than your physical health. Depression and anxiety are considerably more common in people with ankylosing spondylitis than in the general population. Some studies estimate depression in up to 64% of patients.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Prolonged pain and constant fatigue wear you down. So never quit, knowing when the next flare is coming.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Asking for emotional support is a recognised part of managing this condition properly, not an admission of weakness. Raising it to your rheumatologist is a sensible first step. They can facilitate subsequent referrals. For peer support in India, Antardhwani is a patient advocacy community for people living with ankylosing spondylitis and rheumatoid arthritis.
                  </p>
                </div>

                {/* ── WORK, SLEEP AND SMOKING ── */}
                <div id="work-sleep" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Work, Sleep and Smoking
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    For <strong>desk work</strong>, the most useful habit is simply building movement into the day. A short walk or stretch every <strong>30 to 45 minutes</strong> does more than any chair. Ergonomic seating and an adjustable desk help, but they are secondary to actually getting up.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    <strong>Sleep quality</strong> directly affects pain and fatigue. A firm mattress, low pillow, consistent sleep schedule, and a cool, quiet environment improve rest. Fatigue in this condition is a symptom in its own right rather than ordinary tiredness. It makes protecting sleep a necessity rather than a lifestyle.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    <strong>Smoking</strong> is the single most damaging choice for someone with ankylosing spondylitis. It speeds up disease progression. It also makes medicines, including biologics, work less well, and raises inflammation throughout the body. Quitting is worth discussing with your doctor. They can offer structured support rather than leaving you to manage it alone.
                  </p>
                </div>

                {/* ── PLANNING FOR LONG-TERM COSTS ── */}
                <div id="costs" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Planning for Long-Term Costs
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is a lifelong condition, and the costs can stack up over years. Rheumatology consultations, blood tests, imaging, physiotherapy sessions, and medicines range from inexpensive anti-inflammatories to considerably costlier biologics.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Planning early helps. Government employees covered under <strong>CGHS</strong> may access subsidised rheumatology care at empanelled hospitals. If you are eligible under <strong>PMJAY</strong>, confirm what hospitalisation and treatment costs your scheme covers.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Since options narrow later, <strong>private health insurance</strong> including rheumatology consultations and hospitalisation is worth exploring before the condition has progressed.
                  </p>
                </div>

                {/* ── STAYING ON TOP OF YOUR HEALTH ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Staying on Top of Your Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Regular monitoring ensures your treatment stays up to date. At follow-up appointments, your rheumatologist will check ESR and CRP, two blood markers that indicate inflammation. Periodic imaging tracks any structural change in the spine or joints. Eye checks also matter given the risk of eye inflammation with this condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A short questionnaire called <strong>BASDAI</strong> helps you and your doctor track how active your symptoms are between appointments.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Monitoring is routine, forward-looking care. It is not a sign that something has gone wrong.
                  </p>
                </div>

                {/* ── YOU ARE NOT MANAGING THIS ALONE ── */}
                <div id="not-alone" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    You Are Not Managing This Alone
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Living with ankylosing spondylitis involves daily choices, family support, and consistent care over many years. A rheumatologist can pull the pieces together into one plan. It would cover medicines, physiotherapy, diet and mental health support, shaped around your life rather than a template.
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
                      marginTop: "1.5rem",
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
                      Consultant Rheumatologist for ankylosing spondylitis evaluation and long-term joint care.
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
      </main>

      <BriefingFooter />
    </div>
  )
}

export default LivingWithAnkylosingSpondylitis
