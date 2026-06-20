import { useEffect, useState } from "react"
import Header from "../components/Header"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "Can I continue working with Osteoarthritis?",
    a: "Yes. With the right adjustments - making travel less tiring, comfortable seating, and taking breaks to move in between - you can continue working.",
  },
  {
    q: "Is walking good for knee Osteoarthritis?",
    a: "Yes. It strengthens your muscles and supports joint health. Just avoid pushing through sharp pain.",
  },
  {
    q: "What is a practical Indian diet for Osteoarthritis?",
    a: "A balanced diet with turmeric, ginger, whole grains, vegetables, and curd, while limiting fried, refined, and sugary foods.",
  },
  {
    q: "Can yoga replace physiotherapy?",
    a: "No. Yoga helps, but physiotherapy provides targeted strengthening to joints as well as supporting muscles. Both practices help ease pain and strengthen your joints.",
  },
  {
    q: "How do I manage night pain?",
    a: "Try using a warm compress before bed and supportive pillows. If pain persists, consult your doctor.",
  },
  {
    q: "Do supplements really help?",
    a: "Results vary. Some people benefit while others may not. Always seek medical advice first.",
  },
]

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "oa-over-time", label: "OA Over Time" },
  { id: "pain-flares", label: "Managing Pain & Flares" },
  { id: "eating", label: "Eating for Joint Health" },
  { id: "exercise", label: "Staying Active" },
  { id: "mental-health", label: "Mental Health" },
  { id: "daily-life", label: "Making Daily Life Easier" },
  { id: "costs", label: "Managing Expenses in India" },
  { id: "final-thought", label: "Final Thought" },
  { id: "faq", label: "FAQs" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function OsteoarthritisLiving() {
  const [activeSection, setActiveSection] = useState("")

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
    const sections = document.querySelectorAll("[data-toc-section]")
    sections.forEach((s) => observer.observe(s))
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
        .guide-article-content > [data-toc-section] {
          margin-bottom: 0 !important;
        }

        .guide-article-content > [data-toc-section] ~ [data-toc-section] {
          margin-top: 3.5rem !important;
          padding-top: 0 !important;
          border-top: 0 !important;
        }

        .guide-article-content > [data-toc-section] > h2 {
          margin-bottom: 2.25rem !important;
        }

        .guide-article-content > [data-toc-section] p {
          margin-bottom: 1.25rem !important;
        }

        .guide-article-content > [data-toc-section] p:last-child {
          margin-bottom: 0 !important;
        }

        .guide-article-content > [data-toc-section] > h2 + p,
        .guide-article-content > [data-toc-section] h3 + p {
          margin-top: 0 !important;
        }

        .guide-article-content > .guide-cta {
          margin-top: 2rem !important;
          margin-bottom: 0 !important;
        }

        .guide-article-content > .guide-cta + [data-toc-section] {
          margin-top: 3.5rem !important;
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

        .guide-toc,
        .guide-toc button {
          border-radius: 0 !important;
        }
      `}</style>
      <main>
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6" style={{ minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "3rem", paddingBottom: "2rem" }}>

            {/* Breadcrumb */}
            {/* <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium leading-snug sm:text-[13px]"
              style={{ color: "rgba(255,255,255,0.68)", position: "absolute", top: "1.5rem", left: "1.25rem" }}
              aria-label="Breadcrumb"
            >
              <span className="whitespace-nowrap">Home</span>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap">Diseases &amp; Conditions</span>
              <span aria-hidden="true">›</span>
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Osteoarthritis</span>
            </div> */}

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                lineHeight: "1.15",
                letterSpacing: "-0.5px",
                color: "#ffffff",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              <span style={{ display: "block", fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}>Living With Osteoarthritis:</span>
              <span style={{ display: "block", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "rgba(255,255,255,0.85)", marginTop: "0.6rem", fontWeight: 400 }}>Daily Habits That Make a Real Difference</span>
            </h1>

            {/* Image */}
            {/* <div className="hidden md:block" style={{ position: "absolute", top: 0, bottom: 0, right: "24px", width: "420px", overflow: "hidden" }}>
              <img
                src="/OA.webp"
                alt="Osteoarthritis knee illustration"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", display: "block" }}
              />
            </div> */}

          </div>
        </header>

        {/* ═══════════ ARTICLE BODY + SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-1 md:pt-4 md:pb-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: Article ── */}
              <div className="flex-1 min-w-0 guide-article-content" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section>
                  {/* <h1
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Living With Osteoarthritis: Daily Habits That Make a Real Difference
                  </h1> */}
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rita is a 56-year-old first-time nanny. The excitement of being a new granny and dreams of enjoying her retirement journey were shattered the moment she heard that she was being diagnosed with osteoarthritis. Being diagnosed with osteoarthritis can make you feel overwhelmed at first. But it doesn't mean your life has to shrink around pain.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    In reality, the small choices you make every day, like what you eat, how you move, how you rest, and how you care for your mind, can truly shape how you feel.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Think of managing osteoarthritis as building a strong bond with your body. It's not about doing things perfectly but taking little steps consistently. Over time, even these small habits can add up to some meaningful relief.
                  </p>
                </div>

                <ReviewedConsultationCta />

                {/* ── OA OVER TIME ── */}
                <div id="oa-over-time" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Understanding Osteoarthritis Over Time
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is a long-term condition, and it doesn't follow a straight path. Some days may feel much lighter and easier, while others may hit you hard with stiffness or discomfort. For many people, it progresses slowly or stays stable for many years, based on their healthy routine.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Once diagnosed, one shouldn't wait for a miracle pill that reverses the entire condition. Our focus must shift to keep us active and healthy with proper medical support.
                  </p>

                  <div style={{ borderLeft: "4px solid #1AA3B5", backgroundColor: "#E0F3F5", padding: "20px 24px", borderRadius: "0 4px 4px 0", marginTop: "1.5rem" }}>
                    <p className="text-[15px] font-bold text-navy-deep" style={{ marginBottom: "8px" }}>The most effective approach</p>
                    <p className="text-[15px] leading-[1.75] text-navy-deep">
                      The most effective approach to arthritis combines self-care with adequate medical treatment. Neither alone is enough.
                    </p>
                  </div>
                </div>

                {/* ── PAIN & FLARES ── */}
                <div id="pain-flares" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Pain and Flares at Home
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    One of the most useful skills when living with osteoarthritis is learning how to respond to changes in your pain.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Is a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A flare is a temporary spike in your pain, swelling, and stiffness. It can be triggered when you overuse the joint, sit still for too long, when the weather turns cold, or even due to stress.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Helps During a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    During a flare, it is better to take ample rest. Applying a cold pack for 15-20 minutes can reduce your swelling, while a warm pack works better for easing your stiffness. Taking medicines as prescribed by your doctor and putting less pressure on the joint, like using support if needed, can make the phase more manageable. Whenever necessary, do not forget to use your walking stick or a brace.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem", marginTop: "1.75rem" }}>
                    How to Prevent Flares
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A steady and healthy routine makes a big difference. Do not overwork your joint on good days. Stay consistent with gentle exercise, maintain a healthy weight and try to have a balanced diet. Keeping yourself warm in colder weather can help reduce the frequency of flares. These tiny steps make sure that you don't need to worry about flares anymore.
                  </p>
                </div>

                {/* ── EATING ── */}
                <div id="eating" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Eating for Joint Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    There isn't a strict "Osteoarthritis diet," but your daily food choices can either help calm the swelling or make it worse.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods for Your Joints
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Including oily fish such as mackerel, sardines, rohu, and hilsa in your daily meal can provide omega-3 fatty acids that help reduce inflammation. A variety of fruits and vegetables, like papaya, spinach, and carrots, supply antioxidants that support your joint health. Whole grains such as brown rice, jowar, bajra, and oats help with weight control and pain, while calcium-rich foods like curd, ragi, and sesame seeds strengthen bones. Using healthier oils like mustard oil or cold-pressed coconut oil instead of refined oils can also be beneficial.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods to Avoid
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    It is best to limit deep-fried foods like pakoras and pooris. Foods made from maida, such as white bread and biscuits, and sugary items like mithais and soft drinks can worsen your pain. Packaged and preserved snacks often contain high levels of salt and unhealthy fats that may negatively impact joint health.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Simple Indian Additions That Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your everyday kitchen already offers you the most powerful support. Turmeric and ginger help reduce your pain and swelling, while amla, which is rich in vitamin C, supports cartilage health. Using these regularly in your dishes makes you feel light and your bones strong.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What About Supplements?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some people consider supplements such as glucosamine and chondroitin, although results might vary. Vitamin D is especially important in India due to the prevailing deficiencies. Fish oil capsules can be helpful for those who do not consume fish regularly. It is always advisable to consult your doctor before starting any supplement.
                  </p>
                </div>

                {/* ── EXERCISE ── */}
                <div id="exercise" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Staying Active Without Overdoing It
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Movement is one of the most effective ways to manage osteoarthritis. The key is to choose the right kind of activity that suits your condition.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Types of Exercise Help?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A balanced exercise routine can include strengthening exercises like quadriceps workouts to reduce stress on joints, along with low-impact activities like walking, cycling, or swimming to improve overall fitness. Low-impact aerobic exercises can increase your flexibility. Gentle stretching helps to ease your stiffness, while balancing exercises can lower the risk of falling.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    During a Flare
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    During a flare, it is better to switch to much gentler or seated exercises. This reduces the intensity rather than stopping completely. As symptoms improve, you can gradually return to your usual routine.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Is Yoga Really Helpful?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Yoga can be a gentle and supportive addition. Some studies suggest that it may help improve pain, flexibility, and joint function. Safer options include chair yoga and modified standing poses. As these are slow and rhythmic movements, it doesn't hurt your joints much. But deep squats or high-pressure positions are best avoided.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Taking Care of Your Mental Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Living with this condition can affect your mood more than just your joints. Many people with osteoarthritis experience low mood, anxiety, and poor sleep. This is common, and you are not alone. It definitely deserves attention.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Disturbed sleep, inability to follow your daily routine, and even some lifestyle changes like eating healthy and exercising could make you feel anxious and isolated. Prioritise your mental well-being equally. Studies say that when you are too depressed or anxious, your tolerance to pain may even drop. Try getting help as and when needed. Joining clubs or trusts for arthritis patients helps you build a healthier and like-minded community. This way, even healthier habits that were once boring become enjoyable.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Can Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Breaking tasks into smaller and manageable steps while setting realistic daily goals can make everyday life feel less overwhelming. Practising breathing or relaxation techniques can help during difficult moments. Counselling or cognitive behavioural therapy, which is also available online, may also be useful. Staying connected with family, friends, or support groups can give you emotional support and reduce feelings of isolation.
                  </p>
                </div>

                {/* ── DAILY LIFE ── */}
                <div id="daily-life" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Making Daily Life Easier
                  </h2>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Work
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    At work, make simple adjustments such as setting up your chair and desk comfortably. Keeping your feet flat on the floor and taking short breaks every 45-60 minutes can reduce your strain. If needed, discuss modified duties to stay productive without worsening symptoms.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    While Travelling
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While travelling, choosing aisle seats allows easier movement. It also allows you to take some time to stretch or walk every 30-45 minutes. This can prevent stiffness. Carrying medicines with you and avoiding tightly packed schedules can make travel more comfortable. Make sure you eat healthy and have ample rest while travelling. One shouldn't forget to wear comfortable shoes with supportive soles while travelling. If you can, do not hesitate to customise the shoes for your needs.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Home
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    At home, make some small changes. Install grab rails in the bathroom to make you walk with ease. Using non-slip mats and using western lavatories to avoid squatting can be a great benefit. Using long-handled kitchen tools can significantly reduce the strain on your joints, and avoiding sitting on the floor for meals and prayers can reduce the strain on your knees.
                  </p>
                </div>

                {/* ── COSTS ── */}
                <div id="costs" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing the Expenses in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Long-term care doesn't always have to be very expensive. Jan Aushadhi stores offer generic medicines at affordable prices. Government hospitals provide physiotherapy sessions, which are very helpful, and some telemedicine services definitely help reduce your travel costs.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Helpful Schemes
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Schemes like Ayushman Bharat (PM-JAY) can cover up to 5 lakhs for major surgeries such as knee replacement in specific hospitals, while CGHS and ESI provide treatment support like offering physiotherapy, medicines and referrals for surgeries for eligible individuals. eSanjeevani offers free online doctor consultations. This helps people in remote places or those who need help to travel.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Regular Check-Ups Matter
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Even if symptoms feel stable, regular reviews will help you stay on track. Your doctor can monitor disease progression, adjust medicines when needed, and address issues early. A yearly check-up is always recommended, and it is better as doctors may notice changes in symptoms when you fail to keep track.
                  </p>
                </div>

                {/* ── FINAL THOUGHT ── */}
                <div id="final-thought" data-toc-section style={{ paddingTop: "0", marginTop: "0", borderTop: 0 }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "2rem" }}
                  >
                    Final Thought
                  </h2>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Living with osteoarthritis is not about making drastic changes overnight. It's about building steady, sustainable habits that support your body over time. When you stay consistent, listen to your body, and make thoughtful daily choices, it's entirely possible to live an active and fulfilling life with osteoarthritis.
                  </p>
                </div>

                {/* ── TAKE NEXT STEP ── */}
                <div style={{ backgroundColor: "#0f616e", color: "#ffffff", padding: "40px 36px", marginTop: "3.5rem", marginBottom: "32px", borderRadius: 0 }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "16px" }}>
                    Take the Next Step
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>
                    Managing osteoarthritis well requires a plan that fits your life. A rheumatologist can review your symptoms, adjust your treatment, and guide you through the daily habits that matter most for your specific condition.
                  </p>
                  <a
                    href="/book-appointment"
                    style={{ display: "inline-block", backgroundColor: "#E86531", color: "#ffffff", fontWeight: 700, fontSize: "15px", padding: "12px 28px", borderRadius: "9999px", textDecoration: "none" }}
                  >
                    Book Your First Visit
                  </a>
                </div>

                {/* ── NEWSLETTER ── */}
                <GoutNewsletter />

                {/* ── REFERENCES ── */}
                <div style={{ borderTop: "1px solid #dadfe8", paddingTop: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
                  <p className="text-[15px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "2rem" }}>
                    Medically reviewed by Dr. Raghavendra H, Consultant Rheumatologist. Last updated: May 2026. This content is for informational purposes only and does not substitute professional medical advice.
                  </p>
                  <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-navy-muted" style={{ marginBottom: "1rem" }}>References</p>
                  <ol className="space-y-3" style={{ paddingLeft: "1.25rem" }}>
                    {[
                      "Cramer H, et al. Yoga for Osteoarthritis: A Systematic Review and Meta-analysis. Current Rheumatology Reports. 2019.",
                      "British Dietetic Association. Osteoarthritis and Diet. bda.uk.com.",
                      "Kolasinski SL, et al. ACR/Arthritis Foundation Guideline for the Management of OA. Arthritis Care and Research. 2020.",
                      "Casagrande P, et al. Effects of Yoga on Depressive Symptoms in Rheumatic Diseases. PM&R Journal. 2023.",
                      "Indian Rheumatology Association. Patient Resources. indianrheumatology.org.",
                      "Nazarinasab M, et al. Investigating mental health in patients with osteoarthritis. Reumatologia. 2017;55(4):183-188. doi:10.5114/reum.2017.69778.",
                      "Merry Del Val B, et al. Prevalence of mental health disorders in knee osteoarthritis patients. Ann Med Surg (Lond). 2024;86(8):4705-4713. doi:10.1097/MS9.0000000000002258.",
                    ].map((ref, i) => (
                      <li key={i} className="text-[15px] leading-[1.7] text-navy-muted" style={{ listStyleType: "decimal" }}>{ref}</li>
                    ))}
                  </ol>
                </div>

                <hr className="border-none border-t border-[#dcdcdc] mt-10" />
              </div>

              {/* ── Right: TOC + Dr Card Sidebar ── */}
              <aside className="hidden lg:block w-[360px] shrink-0">
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 112px)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="guide-sidebar-scroll guide-toc" style={{ backgroundColor: "#E8F4F8", overflowY: "auto", overflowX: "hidden", flex: "1 1 auto", minHeight: 0, borderRadius: 0 }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#7f8da3", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocSections.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="text-left flex items-center gap-3 pr-5 transition-colors"
                            style={{ backgroundColor: isActive ? "#e2eef9" : "transparent", paddingLeft: "16px", paddingTop: "9px", paddingBottom: "9px", borderBottom: "1px solid rgba(15,97,110,0.08)", borderRadius: 0 }}
                          >
                            <div style={{ width: 3, alignSelf: "stretch", backgroundColor: isActive ? "#0f616e" : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#9aa7b8", minWidth: "18px" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "13.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>
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
                        <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.62)", marginBottom: "5px" }}>Medically reviewed by</p>
                        <p style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.2, color: "#ffffff" }}>Dr. Raghavendra H</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,0.78)", marginBottom: "14px" }}>
                      Consultant Rheumatologist for osteoarthritis evaluation and long-term joint care.
                    </p>
                    <a
                      href="/book-appointment"
                      className="group"
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "11px 16px 11px 18px", borderRadius: "9999px", textDecoration: "none" }}
                    >
                      Book Appointment
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                        <ArrowRight size={14} />
                      </span>
                    </a>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" data-toc-section className="py-16 md:py-20 bg-ghost">
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
                      <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-45" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-sm text-navy-muted leading-relaxed">{faq.a}</p>
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

export default OsteoarthritisLiving
