import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA — Gout
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Gout is a painful joint condition caused by uric acid, a waste product that normally leaves the body through urine.",
  "Poor kidney function, high blood pressure, high blood sugar and certain foods and drinks, such as organ meat, seafood and sugary drinks, can cause gout.",
  "Gout attack symptoms include sudden & intense pain, redness, and swelling. Most often it occurs in the big toe, usually at night.",
  "There is no cure for gout. But pain attacks can be stopped completely with consistent uric acid-lowering medication.",
  "Stopping medication once the pain goes away causes attacks to return. Every time a new attack occurs, it is usually worse than the previous ones.",
]

const stages = [
  { stage: "Stage 1", title: "No Symptoms", desc: "The uric acid level is high in blood. But the body has no symptoms yet as the uric acid crystal has not yet formed and deposited in the joints. So there is no pain or swelling. It is usually discovered through a routine blood test. No treatment is often required in this stage. A healthy diet and regular monitoring can prevent the condition from progressing." },
  { stage: "Stage 2", title: "The Gout Attack", desc: "This is a sudden, painful attack which causes swelling and redness. It mostly occurs in the big toe. It may also occur in the ankles and knees. Pain becomes severe within 12 to 24 hours. Even without any treatment it usually resolves within 7 to 14 days. Most people often consult a doctor after a gout attack." },
  { stage: "Stage 3", title: "The Quiet Period Between Attacks", desc: "There is no pain, so everything feels normal. Many patients stop taking medications at this stage, thinking the disease got better. Stopping treatment at this stage causes uric acid to keep accumulating in the joints. As a result, the next gout pain attack affects more joints and can be more severe." },
  { stage: "Stage 4", title: "Long-Term Joint Damage", desc: "Without treatment, gout causes permanent joint damage. Uric acid crystals continue to collect and form hard chalky lumps. These are called tophi, which accumulates under the skin. These lumps are mostly seen around the joints of the fingers, toes, and elbows and sometimes on the outer ears. Pain becomes permanent and does not completely go away between attacks. Starting the uric acid-lowering treatment early and taking it regularly can prevent most people from reaching this stage. Knowing what causes gout can also help slow down the progression of the disease." },
]

const riskFactors = [
  "Men over 40 years of age",
  "Women after menopause",
  "People with a family history of gout",
  "People who are overweight or obese",
  "People with high sugar level, high blood pressure, or kidney disease",
  "People who are taking medicines like diuretics, aspirin and immunosuppressants",
]

const safeFoods = [
  "Dairy: curd, milk, paneer help lower uric acid",
  "Dal, rajma, chana in moderate amounts",
  "Plenty of water",
  "Fresh fruits and vegetables",
  "Maintaining a healthy body weight",
]

const unsafeFoods = [
  "Organ meats (liver, kidney, brain)",
  "Red meat, mutton, shellfish",
  "Alcohol, especially beer",
  "Packaged juices, cold drinks, sweets",
  "Skipping meals or crash dieting",
]

const faqs = [
  { q: "Is gout curable?", a: "Gout cannot be cured, but it can be completely controlled. With uric acid-lowering medication and the right dietary adjustments, most people prevent attacks from occurring. Treatment also prevents the condition from causing any damage." },
  { q: "Which foods should be avoided with gout in India?", a: "The high-risk foods for gout are organ meats, along with red meat, mutton, and shellfish. Beer can also increase the risk of gout. Packaged cold drinks, fruit juices, and sweets are lesser-known foods that increase the risk because of their high sugar content. Reducing high-risk foods, staying hydrated and taking medicine regularly can help in the long-term treatment of gout." },
  { q: "Can vegetarians get gout?", a: "Yes, eating large amounts of packaged cold drinks, commercial juices, and sweets, along with health conditions like obesity or diabetes, increases the risk of developing gout in vegetarians." },
  { q: "Is allopurinol safe to take for life?", a: "Yes, it is advised for most people who have repeated gout attacks. The dose of allopurinol is adjusted based on kidney function and uric acid levels and is reviewed regularly. It can be used for long-term treatment." },
  { q: "Can gout damage the kidneys?", a: "Yes, consistently high uric acid levels in the body can form crystals in the kidneys. This causes kidney stones and leads to kidney damage. Therefore, kidney function should be checked regularly." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Living With Gout"]
const tabTargets = { Overview: "what-is-gout", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Living With Gout": "living" }

const H3Style = { letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }

function GoutOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Gout: Symptoms, Causes and Treatment Options | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(100, Math.max(0, scrolled * 100)))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 60, backgroundColor: "transparent" }}>
        <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#E86531", transition: "width 0.1s linear" }} />
      </div>

      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#E8F4F8" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-8 pb-0 text-center">
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#1AA3B5", marginBottom: "16px" }}>A Patient Guide for India</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 7vw, 68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Gout
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Symptoms, causes and treatment options — explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/overvIew/gout.png" alt="Gout" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4" style={{ position: "relative", marginTop: "-40px", padding: "0 clamp(4px, 3vw, 24px)" }}>
                {tabs.map((t) => (
                  <button key={t} onClick={() => scrollTo(tabTargets[t])} className="nav-tab transition-all hover:-translate-y-1" style={{ flex: "1 1 130px", maxWidth: "180px", backgroundColor: "#ffffff", border: "1px solid #e6ecf1", borderRadius: "6px", color: "#0f616e", padding: "clamp(16px, 4vw, 22px) clamp(8px, 3vw, 14px)", fontSize: "clamp(12px, 3.2vw, 14px)", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(15,97,110,0.12)", fontFamily: "var(--font-base)" }}>
                    {t}
                  </button>
                ))}
              </div>

              {/* Medically reviewed by */}
              <p style={{ marginTop: "28px", fontSize: "14px", color: "#4a6068", fontFamily: "var(--font-base)" }}>
                Medically reviewed by <strong style={{ color: "#0f616e" }}>Dr. Raghavendra H</strong>
              </p>
            </div>
          </div>
        </header>

        {/* ═══════════ CONTENT ═══════════ */}
        <section className="bg-white">
          <div className="overview-content max-w-[820px] mx-auto px-5 sm:px-6 pt-14 pb-14" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

            {/* INTRO */}
            <div id="overview" style={{ scrollMarginTop: "80px" }}>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Sudden, extreme pain in the toe that wakes you up at night is easy to be mistaken as an injury. It becomes so painful to touch that even wearing socks or the touch of a bedsheet feels unbearable. The pain may improve slowly. But without treatment, similar attacks can return and affect other joints. This condition is called gout.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                Gout is a painful condition that affects around 10 out of every 10,000 people in India. It happens when too much of a natural waste product called &lsquo;uric acid&rsquo; builds up in the body. Early diagnosis by a rheumatologist and the right treatment can help control symptoms, prevent future attacks, and protect the joints from long-term damage. This article will help you understand what gout is, how it progresses through four stages, what causes it, its symptoms, how it is diagnosed, and what treatments are available in India.
              </p>
            </div>

            <DarkDivider />

            {/* QUICK ANSWER */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Quick Answers</h2>
              <div style={{ backgroundColor: "#f5f7f8", borderRadius: "10px", padding: "22px 26px" }}>
                <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {quickAnswers.map((q, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg width="16" height="16" viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0, marginTop: "6px" }}><path d="M1 4l2.5 2.5L9 1" stroke="#1AA3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-[16px] leading-[1.7] text-navy-deep">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <DarkDivider />

            {/* WHAT IS GOUT */}
            <div id="what-is-gout" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Is Gout?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Food items like meat, sugary food and drinks like alcohol contain purines. When the body breaks down purines, it releases uric acid, which is a waste product. In a healthy body, the kidney removes uric acid as by product via urine.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Gout is a condition that causes pain and swelling in the joints, which is due to increased uric acid accumulation. The condition occurs when too much uric acid collects in the body. The raised uric acid slowly starts forming tiny, sharp, needle-like crystals. These crystals settle in and around the joints. Think of these crystals as tiny shards of glass inside the joint.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Every time the joints move during activities such as standing, walking or running, the crystals grind against the surrounding tissue. The body&apos;s protective system sees the crystals as harmful and quickly attacks them. This causes pain, swelling, redness, and warmth in the joint. The sudden, painful episode is known as a gout attack.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Gout most commonly occurs in the big toe. It can also develop in the ankles, knees, wrists, and elbows.
              </p>

              <h3 style={H3Style}>How Common Is Gout in India?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Gout is common in India. It affects around 10 out of 10,000 people in big cities . It mainly affects men after 40 years of age. Women often develop gout after menopause. The condition progresses in stages over the years. Acting in the early stages can prevent the disease from progressing to the next stage.
              </p>
            </div>

            <DarkDivider />

            {/* HOW IT PROGRESSES — 4 stages */}
            <div id="stages" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Does Gout Progress?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                Gout slowly progresses over many years. Without treatment, it moves from one stage to the next, causing more frequent and severe attacks.
              </p>
              <div className="flex flex-col gap-3">
                {stages.map((s, i) => (
                  <div key={s.stage} style={{ display: "flex", gap: "18px", alignItems: "flex-start", backgroundColor: i === stages.length - 1 ? "#0f616e" : "#f5f7f8", padding: "18px 22px", borderRadius: "6px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: i === stages.length - 1 ? "#5fdae8" : "#0f616e", minWidth: "62px", paddingTop: "2px" }}>{s.stage}</span>
                    <div>
                      <p className="text-[15px] leading-[1.6]" style={{ color: i === stages.length - 1 ? "#fff" : "#1a1a1a", fontWeight: 700, marginBottom: "4px" }}>{s.title}</p>
                      <p className="text-[14px] leading-[1.65]" style={{ color: i === stages.length - 1 ? "rgba(255,255,255,0.85)" : "#5E5E5E" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Causes Gout?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The main cause of gout is too much uric acid in the body. Factors such as diet, genes, medications and poor health can increase uric acid levels.
              </p>

              <h3 style={H3Style}>Diet and Lifestyle Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                What you eat and drink can affect the uric acid levels. Eating large amounts of organ meats like liver, kidney, and brain, red meat, mutton, and shellfish can raise uric acid levels. Alcoholic drinks, especially beer, also increase the uric acid level in the body. Sugary drinks, such as soft drinks, packaged fruit juices, and other sweetened beverages, can increase the chances of gout, even in vegetarians. Drinking less water can make it harder for the kidneys to remove the uric acid efficiently. As a result, the uric acid levels increase in the blood and can trigger gout.
              </p>

              <h3 style={H3Style}>Health Conditions Linked to Gout</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Gout mostly occurs in patients who have high blood sugar, high blood pressure, and kidney disease. Overweight people are also at higher risk. Kidney disease is one of the main causes of gout because it becomes harder to remove uric acid from the body.
              </p>

              <h3 style={H3Style}>Medications That Can Raise Uric Acid</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Some medicines can increase the uric acid levels in the body. Medicines like thiazides, which are used for treatment of high blood pressure are among the most common medicines which cause gout. Blood-thinning medicines like Aspirin and medicines that suppress the body&apos;s defence system (immunosuppressants) can also cause gout. If gout starts after beginning a new medicine or gout becomes worse, you should speak to your doctor. Do not stop taking your prescribed medicine on your own. Your doctor will review your treatment and recommend the safest option for you.
              </p>

              <h3 style={H3Style}>Indian-Specific Risk Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                In India, gout is becoming more common, especially in big cities. Factors such as poorly managed health conditions like high blood sugar and high blood pressure, consuming large amounts of organ meat and seafood, and a less active lifestyle can increase the risk of gout.
              </p>

              <h3 style={H3Style}>Who Is Most at Risk?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>Anyone can develop gout. But certain factors, such as age, gender, family history, dietary habits, and unmanaged health conditions, make you more prone to developing it.</p>
              <ul className="space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{r}</li>))}
              </ul>
            </div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Symptoms of Gout</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The sudden extreme pain in the big toe is the main feature of a gout attack. Gout symptoms can change as the condition progresses. In the early stage, the attacks are sudden and usually affect one joint. Without treatment, they can become more frequent and involve other joints. As the condition progresses, the pain and swelling become permanent.
              </p>

              <h3 style={H3Style}>Symptoms During an Acute Attack</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                A gout attack is a sudden episode of severe joint pain that often occurs at night. The pain reaches its worst within 12–24 hours. Many people describe it as the worst joint pain they have experienced. Even the weight of a bedsheet resting on the joint can be unbearable. Gout pain most commonly occurs in the big toe. It can also occur in the ankle, knee, wrist, or elbow.
              </p>

              <h3 style={H3Style}>Symptoms in Advanced Gout</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                When gout is left untreated for years, tophi forms under the skin. Tophi are hard, whitish lumps which usually form around the fingers, elbows, ears, and toes. In some cases, they break open through the skin, releasing a chalky white substance. The pain, swelling and stiffness in the joint usually become permanent as the condition progresses.
              </p>

              <h3 style={H3Style}>Complications of Untreated Gout</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Without treatment, gout can lead to complications. In some people, the high uric acid level affects other organs, such as the heart and kidneys. Uric acid kidney stones are one of the major problems in untreated gout. It can also weaken kidney function and increase the risk of heart disease. Keeping the uric acid levels under control is important not only for pain-free joints but also for preventing kidney and heart problems. Diagnosing gout early can help you get the right treatment before it causes permanent pain and damage.
              </p>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is Gout Diagnosed?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                A rheumatologist confirms the diagnosis with a physical examination and blood test. They may recommend X-ray, ultrasound, and joint fluid examination to confirm the condition.
              </p>
              <div className="grid grid-cols-1 gap-5">
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ letterSpacing: "-0.2px", marginBottom: "0.75rem", color: "#0f616e", fontSize: "1.15rem" }}>Physical Examination and Blood Tests</h3>
                  <p className="text-[16px] leading-[1.75] text-navy-deep">The doctor examines the affected joint for swelling, redness, and warmth and hard lumps. They also ask about your attack patterns, diet, alcohol use, medicines, and family history. The doctor may recommend a blood test to measure uric acid levels and kidney function. High uric acid levels can damage the kidneys. Poorly functioning kidneys make it harder for the body to remove uric acid, making gout worse.</p>
                </div>
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ letterSpacing: "-0.2px", marginBottom: "0.75rem", color: "#0f616e", fontSize: "1.15rem" }}>Confirming the Diagnosis</h3>
                  <p className="text-[16px] leading-[1.75] text-navy-deep">Sometimes, gout is confused with a joint infection or other forms of joint pain and swelling. Doctors recommend a fine needle aspiration test to confirm gout. During this test, a small amount of fluid is taken from the affected joint and checked for uric acid crystals. This is the most reliable test to confirm gout. The doctor performs an ultrasound in the early stages to detect uric acid crystals in the joints. They can recommend an X-ray in advanced stages to check the bone damage. After the condition is diagnosed, the rheumatologist will start the treatment depending on the stage of your condition.</p>
                </div>
              </div>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Treatment Options for Gout</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The main goal of gout treatment is to relieve sudden pain and swelling and prevent future attacks. Most people with gout can manage their symptoms well with the right treatment.
              </p>

              <h3 style={H3Style}>Medicine during an acute attack</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Doctors usually prescribe medicines called NSAIDs to reduce pain and swelling. If a doctor is consulted within 12–24 hours of the first gout attack, they may prescribe a pain-relieving medicine called &lsquo;colchicine&rsquo; for quick relief. If these two medicines do not provide relief, then they may recommend a corticosteroid. Corticosteroids calm the body&apos;s protective system and reduce swelling.
              </p>

              <h3 style={H3Style}>Medicine to prevent future attacks</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                To prevent future attacks, doctors prescribe uric acid-lowering medicine &lsquo;allopurinol&rsquo; for a long term. <strong className="font-semibold">Do not stop allopurinol when the pain goes away.</strong> Stopping the medicine is the single most common cause of repeated attacks. This can also worsen joint damage over time. Treating only the pain without managing the uric acid level can worsen the disease. Febuxostat is a second-choice medicine when allopurinol does not work. Allopurinol is also available as a low-cost generic medicine in India through Jan Aushadhi outlets.
              </p>
              <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                <p className="text-[14px] leading-[1.65] text-navy-deep"><strong className="font-semibold">Disclaimer:</strong> This is for informational purposes only. For medical advice or diagnosis, consult a professional doctor.</p>
              </div>

              <h3 style={H3Style}>Diet and Lifestyle Changes</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Diet changes are important in controlling gout symptoms along with medicine. Avoiding foods that can raise uric acid can provide a long-term benefit. Maintaining a healthy body weight, eating fresh food and vegetables and drinking plenty of water can prevent the condition from progressing. Here is the list of safe and unsafe foods for gout.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div style={{ border: "1px solid #cbe6ea", borderRadius: "12px", overflow: "hidden" }}>
                  <div style={{ backgroundColor: "#e0f3f5", padding: "12px 18px" }}>
                    <span className="text-[14px] font-bold text-navy-deep">✓ SAFE: Include in your diet</span>
                  </div>
                  <ul className="p-4 space-y-2" style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
                    {safeFoods.map((f, i) => (<li key={i} className="text-[14px] leading-[1.6] text-navy-deep">{f}</li>))}
                  </ul>
                </div>
                <div style={{ border: "1px solid #f3d6c8", borderRadius: "12px", overflow: "hidden" }}>
                  <div style={{ backgroundColor: "#fff3ec", padding: "12px 18px" }}>
                    <span className="text-[14px] font-bold text-navy-deep">✕ UNSAFE: Reduce or avoid in your diet</span>
                  </div>
                  <ul className="p-4 space-y-2" style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
                    {unsafeFoods.map((f, i) => (<li key={i} className="text-[14px] leading-[1.6] text-navy-deep">{f}</li>))}
                  </ul>
                </div>
              </div>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginTop: "1.5rem" }}>
                Taking your medicine regularly as prescribed and maintaining a healthy lifestyle can prevent future gout attacks. This can also protect your joints from permanent damage.
              </p>
            </div>

            <DarkDivider />

            {/* LIVING WITH */}
            <div id="living" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Living With Gout in India</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Gout is one of the most controllable forms of arthritis. Living well with gout involves taking your medicines regularly and making healthy lifestyle changes. Keeping uric acid levels under control is the best way to prevent future attacks and protect your joints over time. It is also important to manage diabetes and high blood pressure along with gout to prevent the condition from worsening. Uric acid levels, kidney function, blood pressure, and blood sugar should all be checked regularly. Many Indian patients usually return to the doctor when the next attack occurs. The goal is to prevent future attacks and control the condition before it worsens. With proper long-term treatment, most people live a normal daily life.
              </p>
            </div>

            <DarkDivider />

            {/* WHEN TO CONSULT + CTA */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>When Should a Rheumatologist Be Consulted?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Many people manage each attack with a painkiller and get on with life. They never address the high levels of uric acid causing these attacks. As the pain reduces, they stop treatment. Then the next attack comes, which is usually worse and involves more joints. Over the years, this pattern leads to joint damage and tophi from increased duration of gout.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                A rheumatologist can confirm the diagnosis properly and start uric acid-lowering treatment at the right dose. They will monitor uric acid levels in the body and kidney function and manage any underlying conditions. All this helps completely manage the symptoms when addressed early. Early treatment with consistency helps most gout patients live attack-free long-term.
              </p>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Don&apos;t just treat the pain — control the uric acid</p>
                </div>
                <Link to="/book-appointment" className="group" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E86531", color: "#ffffff", fontWeight: 700, fontSize: "14px", padding: "12px 18px 12px 26px", borderRadius: "9999px", textDecoration: "none" }}>
                  Book a Specialist Visit
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#eef3f5" }}>
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl overflow-hidden group" style={{ border: "1px solid #dbe5e9", boxShadow: "0 2px 10px rgba(15,97,110,0.06)" }}>
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e0f3f5" }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      {faq.a.split("\n").map((line, j) => (<p key={j}>{line}</p>))}
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

export default GoutOverview
