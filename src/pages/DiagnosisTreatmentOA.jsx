import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const doctorQuestions = [
  "When does your pain start?",
  "Does morning stiffness ease within 30 minutes?",
  "Which activities make your pain worse?",
]

const klGrades = [
  "Grade 1: Early changes where the narrowing of the joint space begins",
  "Grade 2: Definite narrowing with small bone spurs around the joint may become visible",
  "Grade 3: Moderate damage with multiple spurs is evident.",
  "Grade 4: Severe damage where the cartilage is worn down completely with very little joint space",
]

const bloodTestRuleOuts = [
  "Rheumatoid arthritis (A positive RF and anti-CCP result)",
  "Gout (Raised serum uric acid levels)",
]

const jointCareHabits = [
  "Try to avoid prolonged squatting or kneeling. If you fail to move, you will slowly start to lose.",
  "Always use supportive footwear. According to Robert M. Joseph, DPM, PhD, a podiatrist at Scholl Foot and Ankle Centre in North Chicago, “Shoe gear plays a critical role because it can change, for better or worse, how those forces are distributed.”",
]

const medications = [
  "Paracetamol, like Calpol and Crocin, is always a safe starting option for mild to moderate pain.",
  "Non-steroidal anti-inflammatory drugs like Ibuprofen and Diclofenac help reduce your pain and swelling, but you should use them cautiously.",
  "Gels or creams like diclofenac gel or Volini that act locally with fewer side effects",
  "Duloxetine can be used for long-term or nerve-related pain occasionally.",
]

const physioPoints = [
  "Physiotherapists will focus on quadriceps strengthening while the knee joint is affected.",
  "Hip stabilising exercises target the specific muscles to help strengthen the joint.",
  "They help you increase your grip strength and flexibility through exercise in case of hand Osteoarthritis.",
]

const assistiveTools = [
  "Knee braces or sleeves that support and reduce the load on the joints",
  "Walking sticks are used correctly on the opposite side.",
  "Orthopaedic insoles help redistribute pressure while you move.",
]

const surgicalOptions = [
  "Total knee replacement known as arthroplasty is a surgical procedure to replace damaged knee cartilage and bone with metal and plastic implants. It is a procedure for end-stage knee Osteoarthritis.",
  "Partial knee replacement is recommended when only a portion of the knee is damaged.",
  "Osteotomy is a surgical procedure that reshapes the bones to realign the joints. This relieves pressure, and corrects the deformities in younger patients with minimal joint damage.",
]

const accessOptions = [
  "Thousands of Jan Aushadhi stores spread across the nation sell generic medicines at an affordable cost. They cost 50 to 90% less than their branded equivalent",
  "Schemes like PM-JAY (Ayushman Bharat): Covers knee replacement surgeries up to ₹5 lakh annually. This includes prehospitalisation, posthospitalisation and implant costs too.",
  "If you are a Central government employee or an ESI-registered worker, you can access physiotherapy, medicines, and surgical treatment at covered facilities.",
  "People in remote places can use the eSanjeevani portal to book their free online consultations with specialists.",
]

const faqs = [
  { q: "1. Do I need an MRI?", a: "No, MRI is not needed all the time. In most cases, you are diagnosed with a clinical evaluation and X-rays. Only some complicated cases demand MRI." },
  { q: "2. How many steroid injections are safe for me?", a: "Usually, doctors prescribe up to 3-4 per joint per year. Though it gives you a short break from your pain, it shouldn’t be overused." },
  { q: "3. Can physiotherapy replace my medication?", a: "In the early stages, yes, it can reduce or delay the need for medicines. But one should follow that regularly with lifestyle changes and under doctor’s guidance." },
  { q: "4. How long will it take to recover after my knee replacement?", a: "Usually, one can start to walk with support in two to three days after the surgery. But the full rehabilitation process takes about 3 to 6 months, where the physiotherapist gives you a hand." },
  { q: "5. Can Osteoarthritis be reversed or stopped from progressing?", a: "No, but progression speed can be slowed down as your symptoms are managed in their early stages effectively. It is advisable to consult your doctor as he is the correct person to guide you based on your symptoms." },
]

const references = [
  "Kolasinski SL, et al. ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Care and Research. 2020.",
  "American Academy of Orthopaedic Surgeons. Management of Osteoarthritis of the Hip: Clinical Practice Guideline. 2024.",
  "Ontario Health. Care for Adults With Osteoarthritis: Quality Standard. 2024.",
  "Rout SK, Dutta A. Economic Evaluation of Total Knee Replacement in India. PharmacoEconomics Open. 2024.",
  "Mayo Clinic. Osteoarthritis: Diagnosis and Treatment. mayoclinic.org. 2025.",
  "www.arthritis.org. A Guide to the Best Shoes for Arthritis",
  "www.aafp.org. Osteoarthritis: Diagnosis and Treatment",
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "diagnosis", label: "How Is Osteoarthritis Diagnosed?" },
  { id: "treatment-options", label: "Treatment Options for Osteoarthritis" },
  { id: "conservative", label: "When Conservative Treatment Isn’t Enough" },
  { id: "access-india", label: "Accessing Osteoarthritis Treatment in India" },
  { id: "next-step", label: "Ready to take your next step?" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function DiagnosisTreatmentOA() {
  const [activeSection, setActiveSection] = useState("diagnosis")

  useEffect(() => {
    document.title = "Osteoarthritis: How It Is Diagnosed and Treated | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>How It Is Diagnosed and Treated</span>
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
                  Diagnosis and Treatment of<br />
                  <span className="whitespace-nowrap">Osteoarthritis:</span>
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
                    How It Is Diagnosed and Treated
                  </span>
                </h1>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", marginTop: "16px" }}>
                  Written by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Shafali Nagpal</strong> | Reviewed by <strong style={{ color: "#ffffff", fontWeight: 700 }}>Dr. Raghavendra</strong> | Last Updated: July 29, 2026
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
                    Rani, a 50-year-old woman, lived with joint pain for months before getting the correct diagnosis. She dismissed it as one of the usual changes women have to experience around menopause. Like many, she felt that women are destined to these sufferings. A painkiller in the morning, a hot pack at night, and gradually avoiding activities that once felt easy became her daily routine. But when pain starts interfering with her daily life, the obvious question keeps popping up. &rdquo;What will actually help&rdquo;?
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    Understanding what&rsquo;s happening inside your joints is the first step toward meaningful treatment. The answer should begin with some clarity. Here&rsquo;s a simple and practical guide on how Osteoarthritis is diagnosed and treated, especially in the Indian context.
                  </p>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Osteoarthritis Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Osteoarthritis is usually diagnosed through a clinical evaluation. In many cases, doctors confirm it based on the symptoms and physical examination. This is the first step, and it doesn&rsquo;t need extensive tests. This is followed by a couple of blood tests to rule out other similar conditions. Some imaging tests will be prescribed to find the stage of the disease progression.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What will your doctor look into?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    During a consultation, doctors will examine the affected joint for swelling, pain on touch, warmth, or any visible changes like redness over the affected area. They&rsquo;ll also assess how well the joint can be moved.. They may observe the walking pattern if your knee or hip is involved.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    You&rsquo;ll likely be asked:
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {doctorQuestions.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Often, this conversation alone gives enough clues to arrive at the diagnosis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Imaging tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    As the doctor completes his examination, they advise to some imaging tests.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    An X-ray is the most commonly used tool to examine the site. It often shows the soft tissue, which cushions the joint (Cartilage), being worn down. In some cases bony growth or bone spurs formed around the joint can be also seen.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Doctors may use the Kellgren&ndash;Lawrence grading system to assess the severity. This is the standard method used by doctors. It helps them measure how severe the osteoarthritis (joint wear and tear) is, usually, in the knee or hip, based on the X-ray findings.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {klGrades.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    An MRI is not a routine test. It&rsquo;s only used if your doctor suspects a ligament or soft tissue injury along with joint damage.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Blood tests and joint fluid analysis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Though the doctor might not prescribe blood tests to diagnose Osteoarthritis, they might be needed to rule out other conditions.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {bloodTestRuleOuts.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Sometimes, fluid may be drawn from the joint to check for infection or any crystal deposits. These tests help exclude other causes rather than confirming Osteoarthritis.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── TREATMENT OPTIONS ── */}
                <div id="treatment-options" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Treatment Options for Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Though there&rsquo;s no absolute cure for Osteoarthritis, the right approach can ease your pain, slow down its progression, and keep you active. Treatment usually follows a step-by-step approach, starting simple and moving up the ladder only if needed. The treatment options available range from simple lifestyle modifications to medications,physiotherapy, joint injections and surgeries.This varies upon the severity of the condition.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Lifestyle Measures: The Foundation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Often, the biggest gains happen here with some real improvements. Sometimes, it&rsquo;s the small, everyday changes that make a meaningful difference. Taking care of the joints through gentle movement, maintaining a healthy weight, and building simple supportive habits can go a long way in easing the pain and helps to move more comfortably over time.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    <strong className="font-semibold">Weight management</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Extra weight puts pressure and makes the joints weaker. Even small weight loss can significantly reduce the pain.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    <strong className="font-semibold">Exercise</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Contrary to popular belief, movement helps and does not harm. Walking, cycling, swimming, or doing yoga, strengthens muscles around the joint.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Avoiding movement actually worsens the stiffness over time.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    <strong className="font-semibold">Joint care habits</strong>
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Some simple changes can help achieve bigger goals.
                  </p>
                  <ul className="space-y-1 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {jointCareHabits.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Medications for Pain Relief
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The patient or the caregivers shouldn&rsquo;t forget that medicines can only support their lifestyle changes and do not replace them. Your doctor might prescribe any of the given medicines based on your condition. That includes
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {medications.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Oral non-steroidal anti-inflammatory drugs should not be used long-term without medical advice, as they might disturb your gut, kidneys, and heart. In India, affordable generic versions of these medicines are widely available through Jan Aushadhi stores at significantly lower prices. Medications should be taken under the guidance of a qualified healthcare professional, as the choice, dosage, and suitability vary for each individual.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Physiotherapy and Assistive Devices
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    As the condition has been diagnosed, doctors refer to a physiotherapist who might plan exercises specific to the condition. A personalised physiotherapy plan can help you feel a noticeable difference.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {physioPoints.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Some of the assistive tools can also make your daily routine much easier. They are
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {assistiveTools.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These practical tools ease your pain and help you enjoy your daily routine.
                  </p>
                </div>

                {/* ── CONSERVATIVE NOT ENOUGH ── */}
                <div id="conservative" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Conservative Treatment Isn&rsquo;t Enough
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    If you continue to suffer and cannot tolerate the pain despite lifestyle changes and medication, the doctor will suggest injections or surgery based on the body's needs.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Joint injections
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The doctor can prescribe some corticosteroid injections that reduce the pain and swelling while providing relief for 4- 8 weeks. These are limited to a few times per year. They can also prescribe hyaluronic acid injections. This improves joint lubrication mainly in knee osteoarthritis. Results might vary from person to person.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    One of the satisfying things is that these are outpatient procedures, and these do not require any hospital admission.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    When would the doctor suggest surgery?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Surgery becomes an option when pain is severe and unbearable, affecting the daily routine. If there is no response to other treatment options it is the last resort that the physician suggests.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Some of the surgical options doctors suggest are
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {surgicalOptions.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── ACCESS IN INDIA ── */}
                <div id="access-india" data-toc-section style={{ marginBottom: "2rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Accessing Osteoarthritis Treatment in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Good care doesn&rsquo;t always have to be expensive. Several options make treatment more accessible to the common people in India.
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {accessOptions.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Early treatment, especially with some lifestyle changes and physiotherapy, costs you little but gives you a big difference.
                  </p>
                </div>

        {/* ═══════════ NEXT STEP + REFERENCES ═══════════ */}
              <div id="next-step" data-toc-section style={{ marginTop: "0" }}>
                <h2
                  className="text-navy-deep"
                  style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                >
                  Ready to take your next step?
                </h2>
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                  If you&rsquo;ve been managing joint pain on your own, it may be the correct time for a proper evaluation. A rheumatologist can confirm the diagnosis, assess the severity, and guide you toward the most effective, yet affordable, treatment options. Early action makes your life much easier.
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
                <ol className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem" }}>
                  {references.map((r, i) => (
                    <li key={i} className="text-[14px] leading-[1.7] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                      {r}
                    </li>
                  ))}
                </ol>
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

export default DiagnosisTreatmentOA
