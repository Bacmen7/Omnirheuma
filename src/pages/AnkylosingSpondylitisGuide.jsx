import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
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

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "quick-answer", label: "Quick Answer Points" },
  { id: "what-is-as", label: "What Is Ankylosing Spondylitis?" },
  { id: "causes", label: "What Causes Ankylosing Spondylitis?" },
  { id: "symptoms", label: "Symptoms of Ankylosing Spondylitis" },
  { id: "diagnosis", label: "How Is Ankylosing Spondylitis Diagnosed?" },
  { id: "treatment", label: "Treatment Options for Ankylosing Spondylitis" },
  { id: "living", label: "Living With Ankylosing Spondylitis in India" },
  { id: "different-from-back-pain", label: "How Is Ankylosing Spondylitis Different from Regular Back Pain?" },
  { id: "when-to-consult", label: "When Should a Rheumatologist Be Consulted?" },
  { id: "references", label: "Reference" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function AnkylosingSpondylitisGuide() {
  const [activeSection, setActiveSection] = useState("quick-answer")

  useEffect(() => {
    document.title = "Ankylosing Spondylitis: What It Is, Symptoms, Causes and Treatment Options | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Ankylosing Spondylitis</span>
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
                  Ankylosing Spondylitis:
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
                    What It Is, Symptoms, Causes and Treatment Options
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Chaitali Waghmore</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 31, 2026
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
                    Ajith, a young man aged 30 years had lower back pain for several months. He works at an IT company, where it involves mostly a desk job. The pain was severe, but he ignored it. He thought the pain could be due to poor posture, long hours at a desk, or some muscle strain. He took a painkiller, got some rest, but never went for a proper consultation with a doctor. The pain kept coming back. Upon repeated advice from his family and colleagues, he finally visited the doctor. After proper evaluation and diagnosis, the doctors referred to the case as ankylosing spondylitis. <strong className="font-semibold">Not all long-term pain refers to a serious condition, but getting a proper evaluation keeps conditions under control.</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    About 7–9 people in 10000 suffer from ankylosing spondylitis. It is 2 to 3 times more common in men than in women. It most commonly affects people at a young age but is often ignored. Consulting a rheumatologist early instead of ignoring it could prevent the condition from worsening. This article explains what ankylosing spondylitis is, how it progresses, what causes it, its symptoms, how it is diagnosed, and what treatments are available.
                  </p>
                </div>

                {/* ── QUICK ANSWER POINTS ── */}
                <div id="quick-answer" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Quick Answer Points
                  </h2>
                  <ul className="space-y-2 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {quickAnswers.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── WHAT IS AS ── */}
                <div id="what-is-as" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Is Ankylosing Spondylitis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Ankylosing spondylitis is a long-term disease that mainly affects the spine. The immune system is the body's defence system to fight against infection. In healthy people, the immune system accurately targets outside germs and fights against them.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In Ankylosing spondylitis, the immune system becomes overactive. The immune system attacks the healthy joints in the backbone. Tendons are the fibres that connect muscles and bones to support movement, whereas ligaments connect bones. The attack also occurs at tendons and ligaments. The immune system's attack causes pain, swelling and irritation in the joints and these fibres.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Slowly, the body tries to heal from the swelling and irritation. This is by producing new bones. The new bone starts filling the gaps between bones in the back. This continuous filling causes the bones to fuse with each other. Due to this fusion, the backbone loses its natural flexibility and becomes stiff and rigid. This is why the condition is sometimes called <strong className="font-semibold">"bamboo spine" (bamboo-like backbone).</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Ankylosing spondylitis is not only a condition of the backbone. It can also affect the hips, shoulders, knees, ankles, and eyes. In India, many patients first notice this condition in the knees or ankles before any pain in the back.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    How Common Is Ankylosing Spondylitis in India?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Ankylosing spondylitis mainly affects young Indian men. The condition is 3 times more common in men than in women. Studies show that the average age of developing this condition is around 21 years.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Despite its widespread occurrence, the condition is frequently ignored as pain due to poor posture or muscle pain. Most patients reach the right specialist, a rheumatologist, only after several years of back pain.
                  </p>
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Ankylosing Spondylitis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The exact cause of ankylosing spondylitis is still not fully known. Genes play a central role. The defence system of the body attacks joints of the backbone and places where tendons and ligaments attach to bone. This attack causes swelling and irritation, which can persist even when pain is not present.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    The Role of the HLA-B27 Gene
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Human Leukocyte Antigen-B27 (HLA-B27) is a gene that is mainly seen in patients with ankylosing spondylitis. 84% of patients in India who develop ankylosing spondylitis carry this gene. Only 6% of the Indian population carries this gene but does not develop this condition. Therefore, it is important to check for the presence of this gene, especially when there is pain and swelling in the joints.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Having this gene does not mean the condition will develop. Some people develop it without having this gene. <strong className="font-semibold">The HLA-B27 test helps to detect the condition, and a positive result alone cannot confirm the diagnosis.</strong> A positive test result without any pain or swelling only tells one thing: the chances of ankylosing spondylitis are high.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    How does an Overactive Immune System Affect the Body
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The overactive immune system attacks the joints in the back ie. the tailbone and hip. Some stomach infections can also trigger this attack in high-risk people. An injury, sitting for long hours, poor posture, and staying inactive for too long cause stress in the tailbone. Continuous stress on these joints can also trigger ankylosing spondylitis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Indian-Specific Risk Factors
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In India, ankylosing spondylitis usually develops between 15–30 years of age. Most people first develop pain in joints like the knees, ankles, or elbows, even before back pain. This pattern makes it look like a sports injury or joint pain after an infection.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Due to the delay in diagnosis, the swelling and irritation remain untreated for years. As a result, the damage causes irreversible changes in the structure of bones and surrounding tissue. Therefore, it is important to consult a rheumatologist for long-term lower back pain before it causes permanent damage.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Who Is Most at Risk?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Certain factors increase the risk of developing ankylosing spondylitis, such as
                  </p>
                  <ul className="space-y-1 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Women can also develop ankylosing spondylitis. They develop mild back pain, joint pain, and fatigue. The joints that usually ache are the knees, ankles, hips, and hands. This mimics other conditions, such as joint pain due to ageing or muscle pain. This delays their diagnosis even further. But knowing the symptoms can help detect the condition early and prevent living in pain for years.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Symptoms of Ankylosing Spondylitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Ankylosing spondylitis symptoms may vary. The symptoms depend on the part of the body that is affected and how long the condition has been active. The backbone is almost always involved. Many people develop pain and stiffness in other joints before back pain.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Back and Spine Symptoms
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Pain and stiffness in the lower back and hip are most common. These symptoms become worse in the morning or after a long period of rest and are relieved after some movement. Some patients also complain of waking up from pain during the night.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Symptoms Beyond the Spine
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Ankylosing spondylitis can also involve joints other than the back. Pain in smaller joints such as knees, hands, and ankles is more common among younger patients in India. Joints in the shoulder and the sole of the foot are involved. Other symptoms include eye pain, stomach pain and fatigue.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    How Ankylosing Spondylitis Progresses Over Time
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    When left untreated for a long time, the body tries to heal. This is by forming new bones. The new bone fills the gap between the backbones and causes them to gradually fuse together. This reduces backbone mobility.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In advanced cases, the backbone loses its curves and becomes stiff. If the joint in the chest also becomes stiff, it reduces the chest expansion. This makes deep breathing more difficult. Early diagnosis and correct treatment may prevent the condition from causing stiffness and breathing problems.
                  </p>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Ankylosing Spondylitis Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There is no test to diagnose ankylosing spondylitis. The rheumatologist will detect the condition based on the symptoms, physical checkup, X-rays, MRI and blood tests together. Doctors assess how the back and hip move and measure how much the chest expands during breathing. The doctor will ask about back pain patterns, any eye or bowel problems and family history of ankylosing spondylitis. They will also assess pain while resting and moving. All these details help the doctor make an accurate diagnosis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Imaging and Blood Tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A blood test is done to measure inflammation through ESR and CRP. X-rays can detect changes in the bone structure, especially when the condition has advanced. The HLA-B27 (human leukocyte antigen gene) test is done to detect the presence of this gene. MRI is the most important test to detect the condition early. It can detect swelling and irritation before X-ray changes are visible.
                  </p>
                </div>

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treatment Options for Ankylosing Spondylitis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There is no cure for ankylosing spondylitis. The main aim of treatment is to reduce pain and stiffness and keep the backbone as flexible as possible. The treatment slows down further damage to the joints and bones. Treatment works best when it is started early, before any permanent damage.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Medications Overview
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    NSAIDs are medicines that reduce pain, swelling, and irritation. In ankylosing spondylitis, doctors prescribe them regularly, not only when pain increases. Regular use helps control pain and swelling and also relieves stiffness in the backbone. Newer medicines called Biologics calm the overactive immune system and are used when pain killers  do not provide enough relief. Government-approved low-cost biologics are also available.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    Physiotherapy and Exercise
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Regular exercise and physiotherapy are as important as medication in ankylosing spondylitis. Specific stretching and breathing exercises keep the backbone mobile and also maintain chest expansion. Swimming and yoga are particularly beneficial for patients with ankylosing spondylitis. These activities combine flexibility and strength without putting a heavy load on the joints. Gentle activity, such as walking or bending, should be continued even when the symptoms become worse. Stopping the movement will make joint stiffness worse.
                  </p>
                </div>

                {/* ── LIVING ── */}
                <div id="living" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Living With Ankylosing Spondylitis in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Ankylosing spondylitis is a lifelong condition, and most people manage it well. Regular movement, such as morning stretches, swimming, yoga, and walking, helps maintain flexibility and also reduces stiffness. Maintaining a healthy weight also helps protect the joints by reducing the load on them. Following an anti-inflammatory diet and stopping smoking can help prevent the condition from causing further damage to bones. Living with long-term back pain from a young age affects work, relationships and confidence. Therefore, proper counselling and support from friends and family matter, along with medical treatment. Early diagnosis and consistent treatment help most people with ankylosing spondylitis to lead active lives.
                  </p>
                </div>

                {/* ── DIFFERENT FROM BACK PAIN ── */}
                <div id="different-from-back-pain" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Ankylosing Spondylitis Different from Regular Back Pain?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Mostly, back pain is caused by muscle strain, poor posture, or disc problems. But back pain in ankylosing spondylitis is caused by an overactive immune system. Knowing the difference between the two can help you get the right treatment early.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Ankylosing spondylitis pain worsens after resting or early in the morning and improves with exercise. This is the opposite of the other type of back pain, which worsens after heavy work. Unlike normal back pain, pain from ankylosing spondylitis occurs at a very young age, often in the mid-20s.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If you are waking up at night due to back pain and have stiffness in the morning for more than 30 minutes, it could be ankylosing spondylitis and not normal back pain. Only a rheumatologist can diagnose this type of back pain and give proper treatment.
                  </p>
                </div>

                {/* ── WHEN TO CONSULT ── */}
                <div id="when-to-consult" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should a Rheumatologist Be Consulted?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You keep living with ankylosing spondylitis, spending years with back pain that never fully resolves. Keep visiting multiple specialists, but no one diagnoses the underlying cause. You may spend years without a correct diagnosis, allowing the condition to worsen. This usually changes the spine in ways that cannot be reversed.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A rheumatologist is the right doctor for long-term back pain caused by an overactive immune system. Getting the right diagnosis early can change the outcome of the condition and prevent further progression.
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

                {/* ── REFERENCE ── */}
                <div id="references" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Reference
                  </h2>
                  <details className="group" open>
                    <summary className="cursor-pointer inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden" style={{ color: "#0f616e", fontWeight: 700, fontSize: "15px" }}>
                      View Sources
                      <svg className="transition-transform group-open:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
                    </summary>
                    <ul className="space-y-2 mt-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                      <li className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        Prakash S, Mehra NK, Bhargava S, Vaidya MC, Malaviya AN. Ankylosing spondylitis in North India: a clinical and immunogenetic study. Ann Rheum Dis. 1984;43(3):381-385. doi:10.1136/ard.43.3.381
                      </li>
                      <li className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        Malaviya, Anand N. Spondyloarthritis in India. Indian Journal of Rheumatology 15(Suppl 1):p S2-S5, May 2020. | DOI: 10.4103/0973-3698.284742
                      </li>
                      <li className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        medlineplus.gov/genetics/condition/ankylosing-spondylitis
                      </li>
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

export default AnkylosingSpondylitisGuide
