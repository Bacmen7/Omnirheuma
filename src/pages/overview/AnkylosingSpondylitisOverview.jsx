import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BriefingFooter from "../../components/BriefingFooter"
import ReviewedConsultationCta from "../../components/ReviewedConsultationCta"
import { ArrowRight, Stethoscope } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA — Ankylosing Spondylitis (AS)
   ───────────────────────────────────────────── */

const quickAnswers = [
  "Ankylosing spondylitis is a condition that mainly occurs in the backbone and lower joints in the back.",
  "The key feature is back pain. It becomes worse while resting and in the morning, but improves with movement. This is the opposite of normal back pain, which is relieved by rest.",
  "It develops mostly in younger men in their 20s and 30s.",
  "There is no cure, but early treatment can prevent the fusion of bones in the backbone.",
  "Treatment includes medicines such as pain relievers (NSAIDs) and newer treatments called biologics. Regular exercise and physiotherapy are beneficial.",
]

const riskFactors = [
  "Young men between 17– 35 years",
  "People with a close family member who has ankylosing spondylitis or a related condition",
  "People who carry the HLA-B27 gene",
  "People with a history of swelling, pain and irritation in the stomach and skin",
]

const faqs = [
  { q: "Is ankylosing spondylitis curable?", a: "There is no cure for ankylosing spondylitis. When the right treatment is started early, most people can control symptoms. They can prevent backbone fusion and stay active." },
  { q: "Will the spine always fuse completely with ankylosing spondylitis?", a: "No, complete fusion is not guaranteed. The level of fusion depends on how early treatment begins. It also depends on the consistency of treatment and habit changes. Many people live with minimal change in the bone structure for years with proper management." },
  { q: "Can women get ankylosing spondylitis?", a: "Yes, women can develop ankylosing spondylitis. In women, spinal involvement is mild. The symptoms usually appear as peripheral joint pain in the hips and knees, along with fatigue. Because the back symptoms are mild, diagnosis in women is often delayed." },
  { q: "How is ankylosing spondylitis different from normal back pain?", a: "Normal back pain is usually worse after activity and better with rest. In ankylosing spondylitis, the opposite is true. Pain is worse during rest and in the morning and improves with movement. Night pain that wakes the person from sleep is another differentiating feature from other types of back pain." },
  { q: "Does exercise help or make ankylosing spondylitis worse?", a: "Exercise helps with ankylosing spondylitis. Regular physical activity maintains backbone flexibility. It is one of the most important parts of long-term disease management. Stopping exercise when the pain increases could further worsen it. Gentle movement, such as swimming, yoga, and daily stretching, is the most beneficial choice for ankylosing spondylitis." },
]

/* DARK GREEN divider between sections */
const DarkDivider = () => (
  <hr style={{ border: "none", borderTop: "2px solid #0a4f5a", margin: "3.5rem 0" }} />
)

const tabs = ["Overview", "Symptoms", "Diagnosis", "Treatment", "Daily Living"]
const tabTargets = { Overview: "what-is-as", Symptoms: "symptoms", Diagnosis: "diagnosis", Treatment: "treatment", "Daily Living": "living" }

const H3Style = { letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textDecorationThickness: "2px", textUnderlineOffset: "6px" }

function AnkylosingSpondylitisOverview() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.title = "Ankylosing Spondylitis: What It Is, Symptoms, Causes and Treatment Options | Omni Rheuma"
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
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-1px", color: "#0f616e", marginBottom: "1rem" }}>
              Ankylosing Spondylitis
            </h1>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, color: "#4a6068", marginBottom: "2.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              What it is, symptoms, causes and treatment options, explained for patients and caregivers
            </p>

            <div style={{ position: "relative", paddingBottom: "52px" }}>
              <div style={{ background: "linear-gradient(135deg, #0f616e 0%, #1AA3B5 100%)", borderRadius: "6px", padding: "32px clamp(16px, 4vw, 32px) 70px", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "clamp(200px, 40vw, 300px)", height: "clamp(200px, 40vw, 300px)", borderRadius: "50%", margin: "0 auto", overflow: "hidden", border: "5px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/overvIew/Ankylosing-Spondylitis.webp" alt="Ankylosing Spondylitis" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
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
                Ajith, a young man aged 30 years had lower back pain for several months. He works at an IT company, where it involves mostly a desk job. The pain was severe, but he ignored it. He thought the pain could be due to poor posture, long hours at a desk, or some muscle strain. He took a painkiller, got some rest, but never went for a proper consultation with a doctor. The pain kept coming back. Upon repeated advice from his family and colleagues, he finally visited the doctor. After proper evaluation and diagnosis, the doctors referred to the case as ankylosing spondylitis. Not all long-term pain refers to a serious condition, but getting a proper evaluation keeps conditions under control.
              </p>
              <p className="text-[16px] leading-[1.8] text-navy-muted">
                About 7–9 people in 10000 suffer from ankylosing spondylitis. It is 2 to 3 times more common in men than in women. It most commonly affects people at a young age but is often ignored. Consulting a rheumatologist early instead of ignoring it could prevent the condition from worsening. This article explains what ankylosing spondylitis is, how it progresses, what causes it, its symptoms, how it is diagnosed, and what treatments are available.
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

            {/* WHAT IS AS */}
            <div id="what-is-as" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Is Ankylosing Spondylitis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Ankylosing spondylitis is a long-term disease that mainly affects the spine. The immune system is the body&apos;s defence system to fight against infection. In healthy people, the immune system accurately targets outside germs and fights against them.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                In Ankylosing spondylitis, the immune system becomes overactive. The immune system attacks the healthy joints in the backbone. Tendons are the fibres that connect muscles and bones to support movement, whereas ligaments connect bones. The attack also occurs at tendons and ligaments. The immune system&apos;s attack causes pain, swelling and irritation in the joints and these fibres.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Slowly, the body tries to heal from the swelling and irritation. This is by producing new bones. The new bone starts filling the gaps between bones in the back. This continuous filling causes the bones to fuse with each other. Due to this fusion, the backbone loses its natural flexibility and becomes stiff and rigid. This is why the condition is sometimes called &ldquo;bamboo spine&rdquo; (bamboo-like backbone).
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Ankylosing spondylitis is not only a condition of the backbone. It can also affect the hips, shoulders, knees, ankles, and eyes. In India, many patients first notice this condition in the knees or ankles before any pain in the back.
              </p>

              <h3 style={H3Style}>How Common Is Ankylosing Spondylitis in India?</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Ankylosing spondylitis mainly affects young Indian men. The condition is 3 times more common in men than in women. Studies show that the average age of developing this condition is around 21 years.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Despite its widespread occurrence, the condition is frequently ignored as pain due to poor posture or muscle pain. Most patients reach the right specialist, a rheumatologist, only after several years of back pain.
              </p>
            </div>

            <DarkDivider />

            {/* CAUSES */}
            <div id="causes" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>What Causes Ankylosing Spondylitis?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The exact cause of ankylosing spondylitis is still not fully known. Genes play a central role. The defence system of the body attacks joints of the backbone and places where tendons and ligaments attach to bone. This attack causes swelling and irritation, which can persist even when pain is not present.
              </p>

              <h3 style={H3Style}>The Role of the HLA-B27 Gene</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                Human Leukocyte Antigen-B27 (HLA-B27) is a gene that is mainly seen in patients with ankylosing spondylitis. 84% of patients in India who develop ankylosing spondylitis carry this gene. Only 6% of the Indian population carries this gene but does not develop this condition. Therefore, it is important to check for the presence of this gene, especially when there is pain and swelling in the joints.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Having this gene does not mean the condition will develop. Some people develop it without having this gene. The HLA-B27 test helps to detect the condition, and a positive result alone cannot confirm the diagnosis. A positive test result without any pain or swelling only tells one thing: the chances of ankylosing spondylitis are high.
              </p>

              <h3 style={H3Style}>How does an Overactive Immune System Affect the Body</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                The overactive immune system attacks the joints in the back ie. the tailbone and hip. Some stomach infections can also trigger this attack in high-risk people. An injury, sitting for long hours, poor posture, and staying inactive for too long cause stress in the tailbone. Continuous stress on these joints can also trigger ankylosing spondylitis.
              </p>

              <h3 style={H3Style}>Indian-Specific Risk Factors</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                In India, ankylosing spondylitis usually develops between 15–30 years of age. Most people first develop pain in joints like the knees, ankles, or elbows, even before back pain. This pattern makes it look like a sports injury or joint pain after an infection. Due to the delay in diagnosis, the swelling and irritation remain untreated for years. As a result, the damage causes irreversible changes in the structure of bones and surrounding tissue. Therefore, it is important to consult a rheumatologist for long-term lower back pain before it causes permanent damage.
              </p>

              <h3 style={H3Style}>Who Is Most at Risk?</h3>
              <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                {riskFactors.map((r, i) => (<li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{r}</li>))}
              </ul>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Women can also develop ankylosing spondylitis. They develop mild back pain, joint pain, and fatigue. The joints that usually ache are the knees, ankles, hips, and hands. This mimics other conditions, such as joint pain due to ageing or muscle pain. This delays their diagnosis even further. But knowing the symptoms can help detect the condition early and prevent living in pain for years.
              </p>
            </div>

            <div style={{ marginTop: "2.5rem" }}><ReviewedConsultationCta /></div>

            <DarkDivider />

            {/* SYMPTOMS */}
            <div id="symptoms" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Symptoms of Ankylosing Spondylitis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Ankylosing spondylitis symptoms may vary. The symptoms depend on the part of the body that is affected and how long the condition has been active. The backbone is almost always involved. Many people develop pain and stiffness in other joints before back pain.
              </p>

              <h3 style={H3Style}>Back and Spine Symptoms</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Pain and stiffness in the lower back and hip are most common. These symptoms become worse in the morning or after a long period of rest and are relieved after some movement. Some patients also complain of waking up from pain during the night.
              </p>

              <h3 style={H3Style}>Symptoms Beyond the Spine</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                Ankylosing spondylitis can also involve joints other than the back. Pain in smaller joints such as knees, hands, and ankles is more common among younger patients in India. Joints in the shoulder and the sole of the foot are involved. Other symptoms include eye pain, stomach pain and fatigue.
              </p>

              <h3 style={H3Style}>How Ankylosing Spondylitis Progresses Over Time</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                When left untreated for a long time, the body tries to heal. This is by forming new bones. The new bone fills the gap between the backbones and causes them to gradually fuse together. This reduces backbone mobility. In advanced cases, the backbone loses its curves and becomes stiff. If the joint in the chest also becomes stiff, it reduces the chest expansion. This makes deep breathing more difficult. Early diagnosis and correct treatment may prevent the condition from causing stiffness and breathing problems.
              </p>
            </div>

            <DarkDivider />

            {/* DIAGNOSIS */}
            <div id="diagnosis" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is Ankylosing Spondylitis Diagnosed?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                There is no test to diagnose ankylosing spondylitis. The rheumatologist will detect the condition based on the symptoms, physical checkup, X-rays, MRI and blood tests together. Doctors assess how the back and hip move and measure how much the chest expands during breathing. The doctor will ask about back pain patterns, any eye or bowel problems and family history of ankylosing spondylitis. They will also assess pain while resting and moving. All these details help the doctor make an accurate diagnosis.
              </p>
              <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                <h3 style={{ letterSpacing: "-0.2px", marginBottom: "0.75rem", color: "#0f616e", fontSize: "1.15rem" }}>Imaging and Blood Tests</h3>
                <p className="text-[16px] leading-[1.75] text-navy-deep">A blood test is done to measure inflammation through ESR and CRP. X-rays can detect changes in the bone structure, especially when the condition has advanced. The HLA-B27 (human leukocyte antigen gene) test is done to detect the presence of this gene. MRI is the most important test to detect the condition early. It can detect swelling and irritation before X-ray changes are visible.</p>
              </div>
            </div>

            <DarkDivider />

            {/* TREATMENT */}
            <div id="treatment" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Treatment Options for Ankylosing Spondylitis</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                There is no cure for ankylosing spondylitis. The main aim of treatment is to reduce pain and stiffness and keep the backbone as flexible as possible. The treatment slows down further damage to the joints and bones. Treatment works best when it is started early, before any permanent damage.
              </p>

              <h3 style={H3Style}>Medications Overview</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                NSAIDs are medicines that reduce pain, swelling, and irritation. In ankylosing spondylitis, doctors prescribe them regularly, not only when pain increases. Regular use helps control pain and swelling and also relieves stiffness in the backbone. Newer medicines called Biologics calm the overactive immune system and are used when pain killers do not provide enough relief. Government-approved low-cost biologics are also available.
              </p>

              <h3 style={H3Style}>Physiotherapy and Exercise</h3>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Regular exercise and physiotherapy are as important as medication in ankylosing spondylitis. Specific stretching and breathing exercises keep the backbone mobile and also maintain chest expansion. Swimming and yoga are particularly beneficial for patients with ankylosing spondylitis. These activities combine flexibility and strength without putting a heavy load on the joints. Gentle activity, such as walking or bending, should be continued even when the symptoms become worse. Stopping the movement will make joint stiffness worse.
              </p>
            </div>

            <DarkDivider />

            {/* AS vs regular back pain */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>How Is It Different from Regular Back Pain?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Mostly, back pain is caused by muscle strain, poor posture, or disc problems. But back pain in ankylosing spondylitis is caused by an overactive immune system. Knowing the difference between the two can help you get the right treatment early.
              </p>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                Ankylosing spondylitis pain worsens after resting or early in the morning and improves with exercise. This is the opposite of the other type of back pain, which worsens after heavy work. Unlike normal back pain, pain from ankylosing spondylitis occurs at a very young age, often in the mid-20s.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse text-left min-w-[560px]">
                  <thead>
                    <tr style={{ backgroundColor: "#e0f3f5" }}>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Feature</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Ankylosing Spondylitis</th>
                      <th className="p-4 text-[14px] font-bold text-navy-deep">Regular Back Pain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#dadfe8]">
                      <td className="p-4 text-[15px] font-semibold text-navy-deep align-top">Pain pattern</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Worse with rest and in the morning; improves with movement</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Worse after activity; better with rest</td>
                    </tr>
                    <tr className="border-b border-[#dadfe8]">
                      <td className="p-4 text-[15px] font-semibold text-navy-deep align-top">Age of onset</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Very young, often mid-20s</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Any age, usually after strain</td>
                    </tr>
                    <tr className="border-b border-[#dadfe8]">
                      <td className="p-4 text-[15px] font-semibold text-navy-deep align-top">Night pain / morning stiffness</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Wakes you at night; stiffness &gt; 30 min</td>
                      <td className="p-4 text-[15px] leading-[1.7] text-navy-deep align-top">Rare</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[16px] leading-[1.8] text-navy-muted">If you are waking up at night due to back pain and have stiffness in the morning for more than 30 minutes, it could be ankylosing spondylitis and not normal back pain. Only a rheumatologist can diagnose this type of back pain and give proper treatment.</p>
            </div>

            <DarkDivider />

            {/* LIVING WITH */}
            <div id="living" style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>Living With Ankylosing Spondylitis in India</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep">
                Ankylosing spondylitis is a lifelong condition, and most people manage it well. Regular movement, such as morning stretches, swimming, yoga, and walking, helps maintain flexibility and also reduces stiffness. Maintaining a healthy weight also helps protect the joints by reducing the load on them. Following an anti-inflammatory diet and stopping smoking can help prevent the condition from causing further damage to bones. Living with long-term back pain from a young age affects work, relationships and confidence. Therefore, proper counselling and support from friends and family matter, along with medical treatment. Early diagnosis and consistent treatment help most people with ankylosing spondylitis to lead active lives.
              </p>
            </div>

            <DarkDivider />

            {/* WHEN TO CONSULT + CTA */}
            <div style={{ scrollMarginTop: "80px" }}>
              <h2 className="text-navy-deep" style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}>When Should a Rheumatologist Be Consulted?</h2>
              <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                You keep living with ankylosing spondylitis, spending years with back pain that never fully resolves. Keep visiting multiple specialists, but no one diagnoses the underlying cause. You may spend years without a correct diagnosis, allowing the condition to worsen. This usually changes the spine in ways that cannot be reversed. A rheumatologist is the right doctor for long-term back pain caused by an overactive immune system. Getting the right diagnosis early can change the outcome of the condition and prevent further progression.
              </p>
              <div style={{ backgroundColor: "#FFF3E8", borderRadius: 0, padding: "28px", fontFamily: "var(--font-base)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <Stethoscope size={28} color="#E86531" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f616e", lineHeight: 1.3, margin: 0 }}>Long-term back pain? See a rheumatologist early</p>
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

export default AnkylosingSpondylitisOverview
