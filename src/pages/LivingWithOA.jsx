import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const foodsForJoints = [
  "Including oily fish such as mackerel, sardines, rohu, and hilsa in your daily meal can provide omega-3 fatty acids that help reduce inflammation.",
  "A variety of fruits and vegetables, like papaya, spinach, and carrots, supply antioxidants that support your joint health.",
  "Whole grains such as brown rice, jowar, bajra, and oats help with your weight control and pain, while calcium-rich foods like curd, ragi, and sesame seeds strengthen bones.",
  "Using healthier oils like mustard oil or cold-pressed coconut oil instead of refined oils can also be beneficial.",
]

const faqs = [
  { q: "Can I continue working with Osteoarthritis?", a: "Yes. With the right adjustments, like making travel less tiring, workplace changes like comfortable seating and taking breaks to move in between can help you continue." },
  { q: "Is walking good for knee Osteoarthritis?", a: "Yes. It strengthens your muscles and supports joint health. You should just avoid pushing through sharp pain." },
  { q: "What is a practical Indian diet for Osteoarthritis?", a: "A balanced diet with turmeric, ginger, whole grains, vegetables, and curd, while limiting fried, refined and sugary foods." },
  { q: "Can yoga replace physiotherapy?", a: "No. Yoga helps, but physiotherapy provides targeted strengthening to joints as well as your supporting muscles. Both practices help you ease your pain and strengthen your joints" },
  { q: "How do I manage night pain?", a: "Try using a warm compress before bed, and try supportive pillows. If pain persists, do not hesitate to consult your doctor." },
  { q: "Do supplements really help?", a: "Results might vary. Some people benefit while others may not. Always seek medical advice first." },
]

const references = [
  "Cramer H, et al. Yoga for Osteoarthritis: A Systematic Review and Meta-analysis. Current Rheumatology Reports. 2019.",
  "British Dietetic Association. Osteoarthritis and Diet. bda.uk.com.",
  "Kolasinski SL, et al. ACR/Arthritis Foundation Guideline for the Management of OA. Arthritis Care and Research. 2020.",
  "Casagrande P, et al. Effects of Yoga on Depressive Symptoms in Rheumatic Diseases. PM&R Journal. 2023.",
  "Indian Rheumatology Association. Patient Resources. indianrheumatology.org.",
  "Nazarinasab M, Motamedfar A, Moqadam AE. Investigating mental health in patients with osteoarthritis and its relationship with some clinical and demographic factors. Reumatologia. 2017;55(4):183-188. doi:10.5114/reum.2017.69778",
  "Merry Del Val B, Shukla SR, Oduoye MO, Nsengiyumva M, Tesfaye T, Glinkowski WM. Prevalence of mental health disorders in knee osteoarthritis patients: a systematic review and meta-analysis. Ann Med Surg (Lond). 2024;86(8):4705-4713. Published 2024 Jun 24. doi:10.1097/MS9.0000000000002258",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "understanding", label: "Understanding Osteoarthritis Over Time" },
  { id: "flares", label: "Managing Pain and Flares at Home" },
  { id: "eating-habits", label: "Eating habits for a Healthy Joint" },
  { id: "staying-active", label: "Staying Active Without Overdoing It" },
  { id: "mental-health", label: "Taking Care of Your Mental Health" },
  { id: "daily-life", label: "Making Daily Life Easier" },
  { id: "expenses", label: "Managing the expenses in India" },
  { id: "final-thought", label: "Final Thought" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LivingWithOA() {
  const [activeSection, setActiveSection] = useState("understanding")

  useEffect(() => {
    document.title = "Living With Osteoarthritis: Daily Habits That Make a Real Difference | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Living With Osteoarthritis</span>
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
                  Living With Osteoarthritis:
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
                    Daily Habits That Make a Real Difference
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
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Rita is a 56-year-old first-time nanny. The excitement of being a new granny and dreams of enjoying her retirement journey were shattered the moment she heard that she was being diagnosed with osteoarthritis. Being diagnosed with osteoarthritis can make you feel overwhelmed at first. But it doesn&rsquo;t mean your life has to shrink around pain. In reality, the small choices you make every day, like what you eat, how you move, how you rest, and how you care for your mind, can truly shape how you feel.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Think of managing osteoarthritis as building a strong bond with your body. It&rsquo;s not about doing things perfectly but taking little steps consistently. Over time, even these small habits can add up to some meaningful relief.
                  </p>
                </div>

                {/* ── UNDERSTANDING ── */}
                <div id="understanding" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Understanding Osteoarthritis Over Time
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is a long-term condition, and it doesn&rsquo;t follow a straight path. Some days may feel much lighter and easier, while others may hit you hard with stiffness or discomfort. For many people, it progresses slowly or stays stable for many years, based on their healthy routine.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Once diagnosed, one shouldn&rsquo;t wait for a miracle pill that reverses the entire condition. Our focus must shift to keep us active and healthy with proper medical support. The most effective approach to arthritis combines self-care with adequate medical treatment.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── FLARES ── */}
                <div id="flares" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Pain and Flares at Home
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    One of the most useful skills when living with osteoarthritis is learning how to respond to changes in your pain.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What is a flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A flare is a temporary spike in your pain, swelling, and stiffness. It can be triggered when you overuse the joint. It can also occur if you sit still for too long, when the weather turns cold, or even due to stress.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Helps You During a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    During a flare, it is better to take ample rest. Applying a cold pack for 15-20 minutes can reduce your swelling, while a warm pack works better for easing your stiffness. Taking medicines as prescribed by your doctor and putting less pressure on the joint, like using support if needed, can make the phase more manageable. Whenever necessary, do not forget to use your walking stick or a brace.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    How to Prevent Flares
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A steady and healthy routine makes a big difference. Do not overwork your work on good days. Stay consistent with gentle exercise, maintain a healthy weight and try to have a balanced diet. Keeping yourself warm in colder weather can help reduce the frequency of flares. These tiny steps you take make sure that you don&rsquo;t need to worry about flares anymore.
                  </p>
                </div>

                {/* ── EATING HABITS ── */}
                <div id="eating-habits" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Eating habits for a Healthy Joint
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There isn&rsquo;t a strict &ldquo;Osteoarthritis diet,&rdquo; but your daily food choices can either help calm the swelling or make it worse.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods for Your Joints
                  </h3>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {foodsForJoints.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods you should avoid
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    It is best to limit deep-fried foods like pakoras and pooris. Foods made from maida, such as white bread and biscuits and sugary items like mithais and soft drinks, can worsen your pain. Packaged and preserved snacks often contain high levels of salt and unhealthy fats that may negatively impact joint health.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Simple Indian Additions That Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Your everyday kitchen already offers you the most powerful support. Turmeric and ginger help reduce your pain and swelling, while Amla, which is rich in vitamin C, supports cartilage health. Using these regularly in your dishes makes you feel light and your bones strong.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What About Supplements?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some people consider supplements such as glucosamine and chondroitin, although results might vary. Vitamin D is especially important in India due to the prevailing deficiencies. Fish oil capsules can be helpful for those who do not consume fish regularly. It is always advisable to consult your doctor before starting any supplement.
                  </p>
                </div>

                {/* ── STAYING ACTIVE ── */}
                <div id="staying-active" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Staying Active Without Overdoing It
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Movement is one of the most effective ways to manage osteoarthritis. The key is to choose the right kind of activity that suits your condition.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Exercises that help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A balanced exercise routine can include strengthening exercises like quadriceps workouts to reduce stress on joints, along with low-impact activities like walking, cycling, or swimming to improve overall fitness. Low-impact aerobic exercises can increase your flexibility. Gentle stretching helps to ease your stiffness, while balancing exercises can lower the risk of falling.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    During a Flare
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    During a flare, it is better to switch to much gentler or seated exercises. This reduces the intensity rather than stopping completely. As symptoms improve, you can gradually return to your usual routine.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Role of Yoga
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Yoga can be a gentle and supportive addition. Some studies suggest that it may help improve pain, flexibility, and joint function. Safer options include chair yoga and modified standing poses. As these are slow and rhythmic movements, it doesn&rsquo;t hurt your joints much. But deep squats or high-pressure positions are best avoided.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Taking Care of Your Mental Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Living with this condition can affect your mood more than just your joints. Many people with osteoarthritis experience low mood, anxiety, and poor sleep. This is common, and you are not alone. It definitely deserves attention.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Disturbed sleep, inability to follow your daily routine, and even some of the lifestyle changes like eating healthy and exercising could even make you feel anxious and isolated. Prioritise your mental well-being equally. Studies say that when you are too depressed or anxious, your tolerance to pain may even drop. Try getting some help as and when needed. Joining clubs or any trusts for arthritis patients doesn't make you feel lonely. They help you build a healthier and like-minded community. This way, even your healthier habits that were once boring become enjoyable.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Can Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Breaking tasks into smaller and manageable steps while setting realistic daily goals can make everyday life feel less overwhelming. Practising breathing or relaxation techniques can help during difficult moments. Counselling or cognitive behavioural therapy, which is also available online, may also be useful. Staying connected with family, friends, or support groups can give you emotional support and reduce feelings of isolation.
                  </p>
                </div>

                {/* ── DAILY LIFE ── */}
                <div id="daily-life" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Making Daily Life Easier
                  </h2>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Work
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    At work, make simple adjustments such as setting up your chair and desk comfortably. Keeping your feet flat on the floor and taking short breaks every 45-60 minutes can reduce your strain. If needed, discuss modified duties to stay productive without worsening symptoms.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    While Travelling
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    While travelling, choosing aisle seats allows easier movement. It also allows you to take some time to stretch or walk every 30-45 minutes. This can prevent stiffness. Carrying medicines with you and avoiding tightly packed schedules can make travel more comfortable. Make sure you eat healthy and have ample rest while travelling. One shouldn&rsquo;t forget to wear comfortable shoes with supportive soles while travelling. If you can, do not hesitate to customise the shoes for your needs.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Home
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    At home, make some small changes. Install grab rails in the bathroom to make you walk with ease. Using non-slip mats and using western lavatories to avoid squatting can be a great benefit. Using long-handled kitchen tools can significantly reduce the strain on your joints, and avoiding sitting on the floor for meals and prayers can reduce the strain on your knees.
                  </p>
                </div>

                {/* ── EXPENSES ── */}
                <div id="expenses" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing the expenses in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Long-term care doesn&rsquo;t always have to be very expensive.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Jan Aushadhi stores offer generic medicines at affordable prices. Government hospitals provide physiotherapy sessions, which are very helpful, and some telemedicine services definitely help reduce your travel costs.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Helpful Schemes
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Schemes like Ayushman Bharat (PM-JAY) can cover up to 5 Lakhs for major surgeries such as knee replacement in specific hospitals, while CGHS and ESI provide treatment support like offering physiotherapy, medicines and referrals for surgeries for eligible individuals. eSanjeevani offers free online doctor consultations. This helps people in remote places or who need help to travel in a great way.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Regular Check-Ups Matter
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Even if symptoms feel stable, regular reviews will help you stay on track. Your doctor can monitor disease progression, adjust medicines when needed, and address issues early.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A yearly check-up is always recommended, and it is better as doctors may notice changes in symptoms when you fail to keep a track.
                  </p>
                </div>

        {/* ═══════════ FINAL THOUGHT + REFERENCES ═══════════ */}
              <div id="final-thought" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  Final Thought
                </h2>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                  Living with osteoarthritis is not about making drastic changes overnight. It&rsquo;s about building steady, sustainable habits that support your body over time. When you stay consistent, listen to your body, and make thoughtful daily choices, it&rsquo;s entirely possible to live an active and fulfilling life with osteoarthritis.
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
                <details className="group" open>
                  <summary className="cursor-pointer inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden" style={{ color: "#0f616e", fontWeight: 700, fontSize: "15px" }}>
                    View Sources
                    <svg className="transition-transform group-open:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                  </summary>
                  <ul className="space-y-2 mt-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {references.map((r, i) => (
                      <li key={i} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        {r}
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

export default LivingWithOA
