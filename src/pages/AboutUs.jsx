import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Search, Zap, MapPin } from "lucide-react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const trustCards = [
  { icon: MessageCircle, title: "Clear & Simple Communication", desc: "We explain your condition in plain language, answer your questions patiently, and help you feel confident about your treatment plan." },
  { icon: Search, title: "Early Diagnosis Matters", desc: "Finding rheumatic conditions early can help prevent joint damage, disability, and long-term complications." },
  { icon: Zap, title: "Accurate Assessment", desc: "We use advanced imaging and detailed clinical evaluations to understand the cause of your symptoms and guide the right treatment." },
  { icon: MapPin, title: "Easy Access to Care", desc: "With flexible appointments and multiple clinic locations, getting expert rheumatology care is simpler and more convenient." },
]

const steps = [
  { num: 1, title: "Book a consultation", desc: "Call us, WhatsApp, or book online. We usually respond within 1 hour and schedule your visit at your convenience." },
  { num: 2, title: "Diagnosis & evaluation", desc: "Your specialist reviews your symptoms, orders relevant tests, and performs a detailed joint and autoimmune evaluation." },
  { num: 3, title: "Treatment & follow-up", desc: "A personalised treatment plan is created. We monitor your progress and adjust therapy for the best long-term outcome." },
]

const qualifications = ["MBBS", "MD — Internal Medicine", "DM — Rheumatology"]

const specialistStats = [
  { num: "14+", label: "Years experience" },
  { num: "15K+", label: "Patients treated" },
  { num: "1", label: "Clinic, Rachenahalli" },
]

const whyUs = [
  { image: "/images/ra-treatment.webp", title: "No unnecessary procedures", desc: "We recommend treatment only when genuinely needed, with evidence-based, patient-first decision making." },
  { image: "/images/hero-doctora.webp", title: "Honest second opinions", desc: "Already advised treatment elsewhere? We provide an independent review so you can decide with clarity." },
  { image: "/images/ultrasound.webp", title: "Transparent costs", desc: "You receive a clear estimate before treatment, with guidance on insurance and available coverage support." },
  { image: "/knowledge-hub-images/doctor-600.webp", title: "Teleconsultation available", desc: "Connect online before visiting the clinic, especially if you live outside Bangalore or need initial guidance." },
]

const siteStats = [
  { num: "15K+", label: "Patients treated" },
  { num: "Omni Rheuma", label: "Rachenahalli, Bangalore" },
  { num: "14+", label: "Years in rheumatology" },
]

const conditions = [
  {
    title: "Rheumatoid Arthritis",
    prompt: "Persistent swelling, stiffness, or painful joints.",
    description: "Rheumatoid arthritis is an autoimmune condition in which inflammation affects joints, often causing morning stiffness, pain and swelling on both sides of the body.",
    note: "Timely specialist treatment can control inflammation and help protect joints from permanent damage.",
    symptoms: ["Morning stiffness", "Swollen joints", "Hand pain", "Fatigue", "Reduced movement"],
  },
  {
    title: "Osteoarthritis",
    prompt: "Knee or hip pain that worsens with movement.",
    description: "Osteoarthritis develops as joint cartilage wears down over time. Care can include exercise guidance, pain relief, injections and surgical referral when appropriate.",
    note: "A clear diagnosis helps you stay active without over-treating symptoms.",
    symptoms: ["Activity-related pain", "Knee stiffness", "Grinding sensation", "Limited motion"],
  },
  {
    title: "Gout",
    prompt: "Sudden severe pain, often in the big toe.",
    description: "Gout flares happen when urate crystals build up around a joint. Proper evaluation and long-term uric acid control can reduce repeated painful episodes.",
    note: "Repeated gout should be managed beyond temporary pain relief.",
    symptoms: ["Sudden flare", "Redness", "Severe tenderness", "Joint warmth"],
  },
  {
    title: "Lupus",
    prompt: "Joint pain with fatigue, rash, or other symptoms.",
    description: "Lupus is an autoimmune disease that may affect joints, skin and internal organs. A rheumatologist coordinates assessment and ongoing monitoring.",
    note: "Early evaluation matters when symptoms appear across several body systems.",
    symptoms: ["Fatigue", "Joint pain", "Rashes", "Sun sensitivity"],
  },
  {
    title: "Ankylosing Spondylitis",
    prompt: "Back stiffness that improves after activity.",
    description: "Inflammatory back pain can begin in younger adults and may gradually limit spinal movement without the right care plan.",
    note: "Treatment can reduce stiffness and preserve mobility.",
    symptoms: ["Morning back pain", "Hip pain", "Night waking", "Stiffness"],
  },
  {
    title: "Psoriatic Arthritis",
    prompt: "Joint symptoms alongside psoriasis or nail changes.",
    description: "Psoriatic arthritis can affect fingers, toes, spine and larger joints. Treatment addresses both inflammation and long-term joint protection.",
    note: "Mentioning skin and nail changes during your visit can aid diagnosis.",
    symptoms: ["Finger swelling", "Nail changes", "Heel pain", "Psoriasis"],
  },
]

const patientReviews = [
  {
    quote: "After months of painful mornings, I finally understood my diagnosis. The doctor listened carefully and explained every test and treatment step in simple words.",
    name: "Anita R.",
    location: "Hebbal, Bengaluru",
    initials: "AR",
  },
  {
    quote: "I was worried about starting long-term treatment. Omni Rheuma gave me time to ask questions and made a practical plan. My mobility is much better now.",
    name: "Suresh K.",
    location: "Indiranagar, Bengaluru",
    initials: "SK",
  },
  {
    quote: "I visited for a second opinion on my joint swelling. The advice was honest, clear and never rushed. The follow-up support has been excellent.",
    name: "Meena P.",
    location: "Whitefield, Bengaluru",
    initials: "MP",
  },
  {
    quote: "The appointment process was easy and my gout plan was explained properly. I know what triggers to watch for and when to contact the clinic.",
    name: "Rahul M.",
    location: "Jayanagar, Bengaluru",
    initials: "RM",
  },
  {
    quote: "My symptoms were confusing for a long time. Getting a clear autoimmune assessment helped me feel supported and confident about next steps.",
    name: "Lakshmi D.",
    location: "Yelahanka, Bengaluru",
    initials: "LD",
  },
  {
    quote: "The team was warm and transparent throughout my visit. Every concern was answered without technical language, and treatment has helped greatly.",
    name: "Kiran S.",
    location: "Koramangala, Bengaluru",
    initials: "KS",
  },
]

function GoogleIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
        <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.33-1.58-5.04-3.72H.96v2.34A9 9 0 0 0 9 18z" />
        <path fill="#FBBC05" d="M3.96 10.7A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.16.28-1.7V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3-2.34z" />
        <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58A8.66 8.66 0 0 0 9 0 9 9 0 0 0 .96 4.96l3 2.34C4.67 5.16 6.66 3.58 9 3.58z" />
      </svg>
    </span>
  )
}

export default function AboutUs() {
  const [reviewIndex, setReviewIndex] = useState(0)
  const visibleReviews = useMemo(
    () => [0, 1, 2].map((offset) => patientReviews[(reviewIndex + offset) % patientReviews.length]),
    [reviewIndex],
  )

  return (
    <div className="min-h-screen bg-background-light" style={{ fontFamily: "var(--font-base)" }}>
      <Header />

      {/* ── 1. HERO ── */}
      <section style={{ backgroundColor: "#0f616e", overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", flexWrap: "wrap", minHeight: "560px" }}>
          <div style={{ flex: "1.02 1 450px", padding: "clamp(54px, 7vw, 88px) clamp(28px, 5vw, 72px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(2.5rem, 4.4vw, 4rem)", fontWeight: 300, lineHeight: 1.11, letterSpacing: "-0.8px", maxWidth: "650px", marginBottom: "30px" }}>
              Relief you can trust.{" "}
              <span style={{ color: "#9DE5D4" }}>Care you can count on.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "clamp(16px, 1.25vw, 18px)", lineHeight: 1.78, maxWidth: "600px", marginBottom: "42px" }}>
              Rheumatic conditions affect millions of Indians, yet most people wait years before seeking specialist help. At Omni Rheuma, we make expert rheumatology care simple, accessible, and reassuring for every patient.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <Link to="/doctors" style={{ background: "#fff", color: "#0f616e", borderRadius: "100px", padding: "12px 28px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Meet our specialists <ArrowRight size={16} />
              </Link>
              <Link to="/book-appointment" style={{ border: "2px solid rgba(255,255,255,0.7)", color: "#fff", borderRadius: "100px", padding: "12px 28px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                Book consultation
              </Link>
            </div>
          </div>
          <div style={{ flex: "0.98 1 420px", minHeight: "560px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <img src="/ri.webp" alt="Rheumatology specialist caring for a patient" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,97,110,0.12), transparent 18%)", pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      {false && <section className="w-full overflow-hidden" style={{ background: "#0f616e", padding: "clamp(30px, 3vw, 40px) 0 clamp(36px, 4vw, 44px)" }}>
        <div className="max-w-[1200px]" style={{ margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "clamp(24px, 4vw, 48px)" }}>
            {siteStats.map((stat) => (
              <div key={stat.label} className="overflow-hidden" style={{ textAlign: "center" }}>
                <div className="relative" style={{ height: "clamp(130px, 12vw, 160px)" }}>
                  <span className="absolute select-none whitespace-nowrap font-bold leading-none tracking-tight" style={{ left: "50%", top: 0, transform: "translateX(-50%)", fontSize: "clamp(52px, 5.5vw, 80px)", color: "rgba(255,255,255,0.07)" }}>{stat.num}</span>
                  <span className="absolute select-none whitespace-nowrap font-bold leading-none tracking-tight" style={{ left: "50%", top: "clamp(28px, 2.7vw, 38px)", transform: "translateX(-50%)", fontSize: "clamp(52px, 5.5vw, 80px)", color: "rgba(255,255,255,0.14)" }}>{stat.num}</span>
                  <span className="absolute whitespace-nowrap font-bold leading-none tracking-tight" style={{ left: "50%", top: "clamp(56px, 5.2vw, 72px)", transform: "translateX(-50%)", fontSize: "clamp(52px, 5.5vw, 80px)", color: "rgba(255,255,255,0.94)" }}>{stat.num}</span>
                </div>
                <p className="font-semibold uppercase" style={{ color: "rgba(255,255,255,0.68)", fontSize: "clamp(12px, 1vw, 14px)", letterSpacing: "0.14em", lineHeight: 1.35, margin: "12px 0 0" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>}

      {/* ── 3. WHY TRUST US ── */}
      <section className="w-full bg-[#eef7f5]" style={{ padding: "clamp(40px, 4vw, 48px) 0" }}>
        <div className="max-w-[1320px]" style={{ margin: "0 auto", padding: "0 clamp(16px, 3vw, 28px)" }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1AA3B5]" style={{ marginBottom: "12px" }}>Our Approach</p>
          <h2 className="text-3xl font-normal text-[#0f2e33] lg:text-4xl" style={{ marginBottom: "16px" }}>Why patients trust Omni Rheuma</h2>
          <p className="w-full text-base leading-relaxed text-[#5e5e5e] lg:text-lg" style={{ marginBottom: "32px" }}>
            We believe good care starts with understanding your concerns. That&apos;s why we give every patient enough time to talk, understand their situation, and get a treatment plan that&apos;s clear and easy to follow. No rushed visits. No complicated medical terms. Just honest advice from specialists you can trust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
            {trustCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white transition-colors hover:border-[#1AA3B5]/30" style={{ padding: "32px" }}>
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#e0f3f5] text-[#0f616e]" style={{ marginBottom: "20px" }}>
                  <item.icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="text-lg font-normal leading-snug text-[#0f2e33]" style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section className="w-full bg-[#f9f9f9]" style={{ padding: "clamp(48px, 5vw, 64px) 0" }}>
        <div className="max-w-[1200px]" style={{ margin: "0 auto", padding: "0 16px" }}>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#1AA3B5]" style={{ marginBottom: "12px" }}>How It Works</p>
          <h2 className="text-center text-3xl font-normal text-[#0f2e33] lg:text-4xl" style={{ marginBottom: "48px" }}>Your care journey in 3 steps</h2>
          <div className="relative flex flex-col md:flex-row" style={{ gap: "clamp(32px, 4vw, 40px)" }}>
            <div className="absolute left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] top-6 hidden h-px bg-[#1AA3B5]/30 md:block" />
            {steps.map((step) => (
              <div key={step.num} className="flex flex-1 flex-col items-center text-center" style={{ padding: "0 24px" }}>
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f616e]" style={{ marginBottom: "20px" }}>
                  <span className="text-lg text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-normal text-[#0f616e]" style={{ marginBottom: "12px" }}>{step.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SPECIALIST ── */}
      <section className="relative w-full bg-white" style={{ padding: "clamp(48px, 5vw, 64px) 0 96px" }}>
        <div className="max-w-[1200px]" style={{ margin: "0 auto", padding: "0 16px" }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1AA3B5]" style={{ marginBottom: "12px" }}>Our Specialist</p>
          <h2 className="text-3xl font-normal text-[#0f2e33] lg:text-4xl" style={{ marginBottom: "40px" }}>Expert care, delivered with clarity</h2>
          <div className="flex flex-col items-start lg:flex-row" style={{ gap: "40px" }}>
            <div className="flex w-full shrink-0 flex-col lg:w-64" style={{ gap: "16px" }}>
              <div className="aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl border border-[#0f616e]/20 bg-[#e0f3f5]">
                <img src="/raghav.webp" alt="Dr. Raghavendra H" className="h-full w-full object-cover object-top" />
              </div>
              <div>
                <h3 className="text-xl font-normal text-[#0f2e33]">Dr. Raghavendra H</h3>
                <p className="text-sm font-semibold text-[#1AA3B5]" style={{ marginTop: "2px" }}>Consultant Rheumatologist</p>
                <p className="text-sm text-gray-400" style={{ marginTop: "2px" }}>Omni Rheuma, Bangalore</p>
              </div>
              <div className="flex flex-col" style={{ gap: "8px" }}>
                {qualifications.map((qualification) => (
                  <span key={qualification} className="w-fit rounded-md bg-[#e0f3f5] text-sm font-medium text-[#0f616e]" style={{ padding: "4px 12px" }}>{qualification}</span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap border-b border-gray-100" style={{ gap: "32px", marginBottom: "32px", paddingBottom: "32px" }}>
                {specialistStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl font-normal text-[#0f616e]">{stat.num}</span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-gray-600" style={{ marginBottom: "16px" }}>
                Dr. Raghavendra H is a consultant rheumatologist with a focused practice in inflammatory arthritis, autoimmune disorders, and musculoskeletal conditions. He has treated over 15,000 patients across leading hospitals in Bangalore.
              </p>
              <p className="text-base leading-relaxed text-gray-600" style={{ marginBottom: "16px" }}>
                His approach is thorough, patient-first, and built around helping people understand their condition before any treatment decision is made. Every consultation is unhurried, evidence-based, and focused on finding the right path for each individual.
              </p>
              <p className="text-base leading-relaxed text-gray-600" style={{ marginBottom: "32px" }}>
                Dr. Raghavendra believes that no patient should feel rushed or confused during their care. He takes the time to explain diagnoses clearly, in language patients can understand.
              </p>
              <Link to="/book-appointment" className="inline-flex items-center rounded-full bg-[#e86531] text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ gap: "8px", padding: "12px 28px" }}>
                Book a consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        <svg className="absolute -bottom-px left-0 block w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F9F9F9" />
        </svg>
      </section>

      {/* ── 6. WHAT WE TREAT ── */}
      <section className="relative w-full bg-[#f9f9f9]" style={{ padding: "clamp(48px, 5vw, 64px) 0 80px" }}>
        <div className="max-w-[1200px]" style={{ margin: "0 auto", padding: "0 16px" }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1AA3B5]" style={{ marginBottom: "12px" }}>What We Treat</p>
          <h2 className="text-3xl font-normal text-[#0f2e33] lg:text-4xl" style={{ marginBottom: "16px" }}>Rheumatic conditions we specialise in</h2>
          <p className="w-full text-base leading-relaxed text-gray-600 lg:text-lg" style={{ marginBottom: "40px" }}>
            Our specialists care for major inflammatory, autoimmune and degenerative rheumatic conditions that affect joints, movement and quality of life.
          </p>
          <div className="rounded-2xl bg-white" style={{ border: "1px solid #e4eef0", overflow: "hidden", boxShadow: "0 4px 24px rgba(15,97,110,0.07)" }}>
            {conditions.map((condition, idx) => (
              <div
                key={condition.title}
                className="group flex items-center transition-colors hover:bg-[#f0fafa]"
                style={{
                  padding: "20px 32px",
                  borderBottom: idx < conditions.length - 1 ? "1px solid #edf4f5" : "none",
                  gap: "20px",
                }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700, color: "#c8e8eb", minWidth: "48px", lineHeight: 1, flexShrink: 0 }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "16px", fontWeight: 600, color: "#0f2e33", lineHeight: 1.3, flex: 1 }}>{condition.title}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#1AA3B5", flexShrink: 0 }}>
                  <ArrowRight size={18} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHOOSE US ── */}
      <section className="relative w-full bg-white" style={{ padding: "clamp(48px, 5vw, 64px) 0 80px" }}>
        <div className="max-w-[1360px]" style={{ margin: "0 auto", padding: "0 16px" }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1AA3B5]" style={{ marginBottom: "12px" }}>Why Patients Choose Us</p>
          <h2 className="text-3xl font-normal text-[#0f2e33] lg:text-4xl" style={{ marginBottom: "16px" }}>Relief that goes beyond treatment</h2>
          <p className="w-full text-lg leading-relaxed text-gray-600" style={{ marginBottom: "40px" }}>
            Choosing the right rheumatology centre is about more than just treatment. It is about feeling heard, supported, and confident in the care you receive at every step.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "20px" }}>
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-[#1AA3B5]/30">
                <div className="h-40 w-full overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 className="text-lg font-normal text-[#0f2e33]" style={{ marginBottom: "8px" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PATIENT STORIES ── */}
      <section className="relative w-full bg-[#f9f9f9]" style={{ padding: "clamp(48px, 5vw, 64px) 0 clamp(112px, 9vw, 128px)" }}>
        <div className="max-w-[1360px]" style={{ margin: "0 auto", padding: "0 16px" }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1AA3B5]" style={{ marginBottom: "12px" }}>Patient Stories</p>
          <h2 className="text-3xl font-normal text-[#0f2e33] lg:text-4xl" style={{ marginBottom: "16px" }}>
            15,000+ patients.
            <br />
            15,000+ reasons to seek care earlier.
          </h2>
          <p className="w-full text-lg leading-relaxed text-gray-600" style={{ marginBottom: "40px" }}>
            Here is what some of our patients have shared about their experience at Omni Rheuma. Real words, real progress.
          </p>
          <div className="grid grid-cols-1 items-stretch md:grid-cols-3" style={{ gap: "24px" }}>
            {visibleReviews.map((review) => (
              <div key={`${review.name}-${review.location}`} className="flex min-h-[370px] flex-col rounded-2xl border border-gray-200 bg-white" style={{ gap: "16px", padding: "24px" }}>
                <div className="flex items-center justify-between" style={{ gap: "16px" }}>
                  <div className="flex items-center" style={{ gap: "8px" }}>
                    <GoogleIcon />
                    <div>
                      <p className="text-sm font-semibold leading-none text-[#0f2e33]">Google Review</p>
                      <p className="text-xs text-gray-400" style={{ marginTop: "4px" }}>Verified patient feedback</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#e0f3f5] text-xs font-semibold text-[#0f616e]" style={{ padding: "4px 12px" }}>5.0</span>
                </div>
                <div className="flex items-center text-[#F59E0B]" style={{ gap: "2px" }} aria-label="Five star rating">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <svg key={star} width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="flex-1 text-base italic leading-relaxed text-gray-600">{review.quote}</p>
                <div className="flex items-center" style={{ gap: "12px", marginTop: "auto" }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e0f3f5] text-xs font-semibold text-[#0f616e]">{review.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f2e33]">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center" style={{ gap: "12px", marginTop: "32px" }}>
            <button type="button" aria-label="Previous review" onClick={() => setReviewIndex((current) => (current === 0 ? patientReviews.length - 1 : current - 1))} className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0f2e33] transition-colors hover:border-[#0f616e] hover:text-[#0f616e]">
              <ChevronLeft size={22} />
            </button>
            <button type="button" aria-label="Next review" onClick={() => setReviewIndex((current) => (current + 1) % patientReviews.length)} className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0f2e33] transition-colors hover:border-[#0f616e] hover:text-[#0f616e]">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
        <svg className="absolute -bottom-px left-0 block w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#0f616e" />
        </svg>
      </section>

      {/* ── 9. CTA ── */}
      <section className="w-full bg-[#0f616e] text-center" style={{ padding: "80px 0 96px" }}>
        <div className="max-w-[1200px]" style={{ margin: "0 auto", padding: "0 16px" }}>
          <h2 style={{ color: "#ffffff", fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.2vw, 3.25rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 auto 24px", maxWidth: "820px", display: "block" }}>Take the first step toward relief from arthritis.</h2>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.82)", margin: "0 auto 40px" }}>
            Expert rheumatology care is just one appointment away.
          </p>
          <div className="flex flex-col justify-center sm:flex-row" style={{ gap: "16px" }}>
            <Link to="/book-appointment" className="group inline-flex items-center justify-center rounded-full bg-white font-semibold text-[#0f616e] shadow-lg transition-all hover:bg-gray-100" style={{ gap: "8px", padding: "12px 32px" }}>
              Book Your Consultation <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <Link to="/doctors" className="inline-flex items-center justify-center rounded-full border-2 border-white font-semibold text-white transition-colors hover:bg-white/10" style={{ padding: "12px 32px" }}>
              Find a Doctor Near You
            </Link>
          </div>
        </div>
      </section>

      <BriefingFooter />
    </div>
  )
}
