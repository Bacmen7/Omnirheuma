import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const fatigueSteps = [
  "Take rest even before feeling exhausted.",
  "Sit down while chopping vegetables or working in the kitchen.",
  "Instead of doing all chores at once, split the chores across the day.",
  "Ask for help whenever needed.",
]

const flareSigns = [
  "Stiffness that lasts longer than usual",
  "Joints feel warmer or fatigue becomes more intense.",
  "New joints become painful or swollen.",
  "Tiredness which increases despite adequate rest.",
]

const flareTips = [
  "Use warm compress to loosen stiffness and a cold compress to calm swollen joints.",
  "Take medications as directed by the doctor.",
  "Get adequate sleep. Practice yoga or meditation to keep stress in check.",
  "Contact your rheumatologist if a flare is severe and if it does not settle within 1-2 weeks.",
]

const foodsToEat = [
  "Turmeric with a pinch of black pepper and some ginger in daily cooking.",
  "Healthy fats from flaxseeds, walnuts, and coconut.",
  "Fresh vegetables, fruits, and sprouts for fibre and easier digestion.",
  "Cruciferous vegetables like cabbage, broccoli, and cauliflower, which help lower inflammation.",
  "Whole grains in place of refined flour.",
  "Probiotics like curd, buttermilk, or kefir to support a healthy gut.",
]

const foodsToLimit = [
  "Packaged snacks like namkeen and biscuits.",
  "Deep-fried foods like samosa and bhatura.",
  "Sugary drinks like sharbat and packaged juices.",
]

const faqs = [
  { q: "Q1. How do I manage morning stiffness before work?", a: "Taking a hot shower or directing warm water to stiff joints for several minutes can ease movement. Gentle exercises like finger stretches, wrist circles, and ankle rotations can help loosen joints." },
  { q: "Q2. Can I fast during Navratri, Ramadan, or other festivals while on Methotrexate?", a: "Short fasts that involve dietary changes rather than complete restriction are usually manageable. However, fasting for long hours without water can affect how medicines are cleared from the body, potentially increasing its levels in your blood. It is important to consult your rheumatologist before undertaking extended fasts." },
  { q: "Q3. My family doesn't understand how sick I am because I look fine. What should I do?", a: "Involving a family member in your medical appointments can help them hear directly from your doctor. Share educational resources and ask your rheumatologist to explain disease activity in simple terms. This can also bridge the gap." },
  { q: "Q4. Will Rheumatoid Arthritis affect my ability to have children?", a: "Rheumatoid Arthritis itself does not cause infertility, but certain medications require careful planning before conception. Drugs like Methotrexate and Leflunomide must be stopped in advance under medical supervision. With coordinated care between your rheumatologist and gynaecologist, most women with the disease can have healthy pregnancies." },
  { q: "Q5. Can I do household work like cooking and cleaning with Rheumatoid Arthritis?", a: "Yes, but with thoughtful adjustments. Using lightweight utensils, sitting while working, and relying on appliances like mixer-grinders can reduce strain. Breaking tasks into smaller segments and scheduling them during periods of lower stiffness helps conserve energy." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "managing-fatigue", label: "Managing Fatigue, the Symptom Few People Talk About" },
  { id: "managing-flares", label: "Managing flares at home" },
  { id: "diet", label: "Diet for Rheumatoid Arthritis" },
  { id: "movement", label: "Small movements to Stay Strong" },
  { id: "mental-health", label: "Looking After Your Mental Health" },
  { id: "monitoring", label: "Regular Monitoring to Stay on Top of Your Disease" },
  { id: "speak-to-specialist", label: "You Are Not Alone, Speak to a Specialist" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LivingWithRA() {
  const [activeSection, setActiveSection] = useState("managing-fatigue")

  useEffect(() => {
    document.title = "Living with Rheumatoid arthritis: Diet, exercise and mental wellbeing | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Living with Rheumatoid arthritis</span>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
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
                  Living with Rheumatoid arthritis:
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
                    Diet, exercise and mental wellbeing
                  </span>
                </h1>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by Dr. Shafali Nagpal | Reviewed by Dr. Raghavendra | Last Updated: July 29, 2026
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
                    Being diagnosed with Rheumatoid arthritis can change how your day begins and often in ways you don&rsquo;t even expect. Starting with stiffness while sipping the chai, struggling to button the kurta, you start to calculate how much the body will be suffering today.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    This is not about medicines or disease scores. This is about everything that happens in the spaces between clinic visits. It is more about how you manage on a busy day, what you choose to eat, how you explain your condition to people who can only see it and not feel it, and how you protect your mental peace over the years of living with something unavoidable. People with the long term disease like Rheumatoid arthritis should always learn the art of surviving through the day with determination. In this guide, we will see in detail what it really takes to live with Rheumatoid arthritis.
                  </p>
                </div>

                {/* ── MANAGING FATIGUE ── */}
                <div id="managing-fatigue" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Fatigue, the Symptom Few People Talk About
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Fatigue is one of the difficult symptoms that is not talked about often. Anyone can feel tired after a long day, and usually a good rest fixes it.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Fatigue with Rheumatoid arthritis is different. It can drain even after a full night&apos;s sleep, slows the body down and even makes simpler tasks feel like hard work. Fatigue in Rheumatoid arthritis is caused by an inflammatory process (the same reason for the cause of Rheumatoid arthritis). Many patients say it is harder to explain too.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    How to manage fatigue?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Understanding the body&apos;s rhythm is very important. Plan the most important tasks for the hours when your energy is highest, and protect that energy throughout the day. Few steps to manage fatigue are :
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {fatigueSteps.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Explaining it to people around can be challenging. Ask your rheumatologist to explain fatigue to a key family member at your next appointment. The explanation from a doctor makes people more understandable than a patient&apos;s words.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── MANAGING FLARES ── */}
                <div id="managing-flares" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing flares at home
                  </h2>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Is a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When under treatments, we tend to think everything will be fine soon. But, sometimes the symptoms worsens all of a sudden, even when treatment goes well. This sudden worsening is called a flare. The pain can reach a point that feels hard to bear.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Common reasons for a flare include overexertion, poor sleep, weather changes, or any infections. Flares are a part of the journey in rheumatoid arthritis. Remember that a flare does not mean the condition is getting worse permanently.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    How Do You Know a Flare Is Starting?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Early recognition of a flare makes it easier to manage. This needs to be differentiated from a difficult day. The following maybe noticed :
                  </p>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {flareSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Tips to overcome flare easily at home
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Here are a few tips to overcome the flare easily at home.
                  </p>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {flareTips.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    How to prevent Flares
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The best way to prevent flare is to make sure you don&rsquo;t miss any medication dosages. This is the most important step. Set aside an alarm for the medication dosages. Also, for any infections, consult the doctor.
                  </p>

                  {/* Note */}
                  <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      <strong className="font-semibold">India-specific tip:</strong> Festivals, being a part of Indian culture, can make your plans off track. So, always plan ahead so that exercise, medicines, and meals do not get skipped during busy celebrations.
                    </p>
                  </div>
                </div>

                {/* ── DIET ── */}
                <div id="diet" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Diet for Rheumatoid Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Food will not cure rheumatoid arthritis, but it quietly shapes how the body handles inflammation. For Indians, many helpful foods are already in the kitchen. A few small additions are usually all it takes.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods to Eat More Often
                  </h3>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {foodsToEat.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods to Limit
                  </h3>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {foodsToLimit.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Build these habits gently over time rather than forcing big changes overnight.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Vitamin D, Calcium, and Bone Health
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Vitamin D deficiency is very common in India, affecting an estimated 70 to 80% of people. It matters because Rheumatoid arthritis and some of its medicines can weaken bones and lead to a rapid bone loss. A short morning walk in the sun, calcium-rich foods, and supplements when doctors advise can make a real difference. Good Indian sources of calcium include ragi (finger millet), sesame seeds, dairy, and leafy greens.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Always check with your doctor before starting any supplement.
                  </p>
                </div>

                {/* ── MOVEMENT ── */}
                <div id="movement" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Small movements to Stay Strong
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Movement is one of the best things for the joints. When joints ache, people mostly tend to rest. But, long hours of sitting or lying down actually leave joints stiffer and weaker over time. Breaking that cycle matters.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Gentle, consistent movement works best. Daily walks, light stretching, or basic yoga can ease stiffness, improve flexibility, and lift up the mood. Yoga is easy to find across India, but doing it under proper guidance is very important, to avoid any strains.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    During flares, do simple, smoother and easier moves. Patients are usually advised not to train hard but to practice consistently. The goal is consistency, not intensity.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Looking After Your Mental Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid arthritis affects more than the joints. It can change how people see themselves and relate to others, and picture their future. The emotional weight is real. Surrounding with supportive people, practising mindfulness, and reaching out to a mental health professional whenever required is necessary.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Join support groups like Mission Arthritis India to be a part of a like-minded community. This way, you never feel isolated as you have a place to share your sufferings and receive some meaningful insights. Speak to your rheumatologist to get connected with such groups in your locality. At times, hospitals can also provide such facilities to ensure patients&apos; wellness.
                  </p>
                </div>

                {/* ── MONITORING ── */}
                <div id="monitoring" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Regular Monitoring to Stay on Top of Your Disease
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Regular monitoring is crucial for both tracking disease activity and making sure the treatment is safe. When things are stable, most patients see their rheumatologist every 3-6 months. They visit more often if there&apos;s a flare-up or they need a medication change.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    During these check-ups, doctors do a joint exam, calculate the DAS28 score, look at blood test results, and talk about any symptoms or how treatments are working. Annual bone density scans for patients on long-term steroids, eye examinations for those on Hydroxychloroquine, and heart health risk assessments, as Rheumatoid arthritis increases the risk of heart disease.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Vaccinations are another important aspect of care. Annual flu shots, pneumococcal vaccine, and hepatitis B boosters when needed are recommended, while live vaccines require careful planning with your doctor.
                  </p>
                </div>

        {/* ═══════════ YOU ARE NOT ALONE ═══════════ */}
                <div id="speak-to-specialist" data-toc-section style={{ marginTop: "0" }}>
              <h2
                className="text-navy-deep"
                style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
              >
                You Are Not Alone, Speak to a Specialist
              </h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Living with rheumatoid arthritis in India comes with its own unique set of challenges, shaped by cultural expectations, family demands, and limited awareness about your pain and flares. But it is important to remember that you are not alone in this journey.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                What makes the biggest difference over time is not just the treatment you receive, but how you learn to support yourself through it. Understanding your body, staying consistent with your medicines as per the doctor&apos;s advice, moving regularly, eating thoughtfully, and allowing yourself to ask for some help as and when needed are the foundations of living well with Rheumatoid arthritis.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The journey may not always be easy, but it is far from hopeless. With the right approach and support, it is possible to weave a life where rheumatoid arthritis is just one part of your story, and you can knit it more colourful than you could imagine.
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
                      Consultant Rheumatologist for rheumatoid arthritis evaluation and long-term joint care.
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

export default LivingWithRA
