import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const bodySymptoms = [
  { label: "Skin:", detail: "A reddish, butterfly-shaped rash caused by exposure to the sun. It spreads over the cheeks and nose. It can often be mistaken on darker Indian skin tones as a pigmented area." },
  { label: "Joints:", detail: "Notice that there is pain and swelling that shifts location, as opposed to a typical sports injury that remains in one location. For many, it feels like pain that just never goes away." },
  { label: "Whole Body Fatigue:", detail: "This is not the tiredness that goes away with a good night's rest. It is persistent and similar to being burdened all day long." },
  { label: "Kidneys:", detail: "If you notice swelling of your legs or around your eyes, or foamy urine? Or does fluid build up in your body for no apparent reason? It could be a warning sign. Lupus can make the kidneys leaky, like a filter. When this happens, the fluid that should be leaving the kidneys remains in the body." },
  { label: "Chest and Breathing:", detail: "A sharp chest pain when taking a deep breath can be mistaken for a heart problem or gas. This occurs due to swelling of the lining of the lungs or around the heart." },
  { label: "Brain and Thinking:", detail: "Difficulty focusing on tasks, forgetfulness, and chronic headaches. Some patients describe this as thinking in a really thick fog. Even simple things are more difficult." },
  { label: "Fingers and Toes:", detail: "White or blue discoloration of fingers and toes in cold weather or under stress. The blood circulation is just like a circuit that shuts down when there is an overload of electricity." },
]

const warningSigns = [
  "Constant tiredness that does not go away with rest.",
  "A mild fever that keeps returning without any infection.",
  "Recurring mouth ulcers that come and go.",
  "Hair thinning or hair loss in patches.",
  "Joint pain that keeps shifting between different joints.",
  "Skin rashes worsen after sun exposure.",
]

const similarConditions = [
  { condition: "Rheumatoid Arthritis", overlap: "Joint pain, swelling, fatigue", difference: "Rheumatoid arthritis stays in joints, does not cause butterfly rash or organ involvement" },
  { condition: "Fibromyalgia", overlap: "Fatigue, widespread pain, brain fog", difference: "No redness, swelling, or organ involvement" },
  { condition: "Viral Infections", overlap: "Fever, fatigue, joint pain, rash", difference: "Infections resolve; lupus symptoms persist and come back" },
  { condition: "Sjögren's Syndrome", overlap: "Fatigue, dry eyes, dry mouth", difference: "Can overlap with lupus and both can occur together" },
  { condition: "Thyroid Disease", overlap: "Fatigue, hair loss, weight changes", difference: "Thyroid tests help distinguish; lupus needs ANA testing" },
]

const doctorSigns = [
  "A facial rash on the cheeks and nose that worsens with exposure to sunlight.",
  "Constant tiredness and joint pain for more than 4 to 6 weeks without a clear reason.",
  "Unusual hair loss, persistent mouth ulcers, or low-grade fevers that are commonly repeated",
  "Heavy, puffy-looking swelling in the legs, ankles, or around the eyes with no known origin.",
  "Fingers or toes turning white or blue in cold or stressful situations.",
  "A close family member diagnosed with lupus or another autoimmune condition.",
]

const faqs = [
  { q: "How to know the commonest early signs of lupus?", a: "Answer: Constant tiredness is the most common early sign. It affects up to 90% of patients. It differs from regular tiredness, and it does not improve with rest. Repeated joint pain shifting between different joints is another early signal." },
  { q: "Is it possible for lupus to affect the kidneys?", a: "Answer: Yes. Kidney involvement is called lupus nephritis. It is one of the most serious complications of lupus. It can develop silently with no obvious symptoms. This is why regular urine and blood tests are essential throughout treatment." },
  { q: "Why do people with lupus get a butterfly rash on their face?", a: "Answer: The butterfly rash occurs due to swelling in small blood vessels under the facial skin. It appears as a reddish rash across the cheeks and nose. It is often triggered or worsened by sunlight. On darker Indian skin tones, it may look like a darker pigmented patch, making it harder to spot." },
  { q: "Why is lupus diagnosed so late in India?", a: "Answer: Lupus may look like other conditions. This makes it difficult to identify sooner. In India, most patients first see a general physician, dermatologist, or orthopaedician before reaching the rheumatologist. Less awareness also adds to the delay." },
  { q: "Does lupus affect teens in India?", a: "Answer: Yes. Juvenile-onset lupus is diagnosed before age 18. It tends to be more severe in Indian patients than in Western populations. Kidney and blood involvement are particularly common in young Indian patients. That is why early specialist care is important." },
  { q: "Is lupus and rheumatoid arthritis the same?", a: "Answer: No, they are different. Although both are autoimmune and cause joint pain, they are distinct. Rheumatoid arthritis mainly affects joints and can cause permanent joint damage. Lupus can affect multiple organs, including the kidneys, skin, heart, and nervous system. Its joint pain shifts between the joints rather than staying fixed." },
]

const references = [
  { text: "Lupus Foundation of America. Symptoms and Diagnosis of Lupus. ", url: "https://www.lupus.org/resources/symptoms-diagnosis" },
  { text: "Mayo Clinic. Lupus Symptoms and Causes. 2025. ", url: "https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789" },
  { text: "Healthline. 10 Early Signs of Lupus. 2023. ", url: "https://www.healthline.com/health/lupus/early-signs" },
  { text: "Pace Hospital. Lupus Disease Overview. 2026. ", url: "https://www.pacehospital.com/lupus" },
  { text: "Gupta R et al. Systemic Lupus Erythematosus in India. PubMed Central. 2022. ", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9270079/" },
  { text: "ScienceDirect. Challenges in the Diagnosis and Management of SLE in India. 2023. ", url: "https://www.sciencedirect.com/science/article/pii/S2772613423000276" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "common-symptoms", label: "Common Symptoms of Lupus" },
  { id: "progress", label: "How Symptoms Progress Over Time" },
  { id: "groups", label: "How Symptoms Differ Across Groups" },
  { id: "early-warning", label: "Early Warning Signs of Lupus" },
  { id: "similar-conditions", label: "Conditions That Can Cause Similar Symptoms" },
  { id: "diagnosis", label: "How Is Lupus Diagnosed?" },
  { id: "see-doctor", label: "When Should You See a Doctor?" },
  { id: "speak-rheumatologist", label: "Think These Symptoms Sound Familiar? Speak to a Rheumatologist" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]


function LupusSymptomsDiagnosis() {
  const [activeSection, setActiveSection] = useState("common-symptoms")

  useEffect(() => {
    document.title = "Lupus (SLE) - Symptoms, Warning Signs and Diagnosis | Omni Rheuma"
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
              <span className="whitespace-nowrap" style={{ color: "#ffffff" }}>Lupus Symptoms and Diagnosis</span>
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
                  Lupus (SLE) -
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
                    Symptoms, Warning Signs and Diagnosis
                  </span>
                </h1>
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
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#5E5E5E", marginBottom: "1.5rem" }}>
                    Written by Medical Content Team | Last Updated: July 29, 2026
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Lupus is oftentimes referred to as &ldquo;The Great Imitator&rdquo;. This is because it mimics so many diseases. For instance, constant fatigue and weakness are commonly overlooked as low hemoglobin (anemia). Joint discomfort is blamed on work stress or posture. And repeated skin breakouts are mistaken for simple allergies or heat rashes. Due to the commonness of symptoms, it takes approximately 4 years to receive a confirmed diagnosis. However, the wait is even longer in India due to low awareness and limited access to rheumatologists.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    SLE is the most common form of this disease. It is a condition where the body's immune system attacks its own tissues. It can occur in the skin, joints, kidneys, and other parts of the body. This page can guide patients/caretakers to identify the early warning signs. It will help to know what symptoms to put the spotlight on and what the diagnosis involves.
                  </p>
                </div>

                {/* ── COMMON SYMPTOMS ── */}
                <div id="common-symptoms" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Common Symptoms of Lupus
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    As lupus becomes more active, the symptoms become more apparent and can begin to affect more than one organ. It usually comes and goes in episodes. Lupus is different for each person.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    This is how lupus is seen throughout the body:
                  </p>
                  <ul className="space-y-2 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {bodySymptoms.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{s.label}</strong> {s.detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Not all of these occur in people with lupus. Some have symptoms in a few areas, others more broadly. The best picture a rheumatologist can have is how frequent the symptoms are, when they occur, and what their origins are.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── PROGRESS OVER TIME ── */}
                <div id="progress" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Symptoms Progress Over Time
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Lupus affects people in an episodic manner throughout their lives. At times, symptoms are worse. At other times, they are relatively better. Typical causes are exposure to sunlight, emotional upset, infections, periods, pregnancy, and some medications.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The reason why it is important to monitor in quiet periods is that damage to the organs can occur without the person feeling unwell. Early kidney injury can occur with no symptoms. These changes can be detected through regular examinations and blood and urine tests. Long-term organ damage can be minimised if treatment is started early and regularly.
                  </p>
                </div>

                {/* ── GROUPS ── */}
                <div id="groups" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Symptoms Differ Across Groups
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Lupus does not have the same symptoms for every person. The appearance of the condition is dependent on age, gender and life stage.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Women
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Lupus is most often diagnosed in women. It typically occurs between 15 and 45 years of age. Women are commonly affected by hormonal shifts at puberty, pregnancy, and during the menstrual cycle. Women with lupus planning a pregnancy need early rheumatology support. It increases the risk of miscarriage, premature birth, and high blood pressure during pregnancy.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Teenagers and Young Adults
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Lupus may occur at any time during the teens. Children developing lupus before age 18 are more likely to have severe lupus in Indian patients than in Western patients. Early diagnosis is especially significant as kidney and blood system involvement is very common in young Indian patients.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Men
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Lupus is much less prevalent but more severe in men. They are also less likely to be referred to a specialist, contributing to delayed diagnosis.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Symptoms in Older Adults
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Lupus that develops at age 50 years or older tends to have less involvement of the kidney. It may have more joint and lung involvement. Pregnant or elderly patients are more likely to present with drug-induced lupus. This occurs from several blood pressure and anti-seizure drugs.
                  </p>
                </div>

                {/* ── EARLY WARNING SIGNS ── */}
                <div id="early-warning" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Early Warning Signs of Lupus
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Lupus is very easy to miss, as the initial symptoms are simple to overlook. Most people believe they are due to stress, tiredness, or other illnesses.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The common warning signs are:
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {warningSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The problem with recognising the early signs of lupus is that they may come on slowly. One week it may be joint pain and the next a rash. Then it may be feeling relatively well for weeks in between. Lupus can take a while to be diagnosed because of this erratic pattern.
                  </p>
                </div>

                {/* ── SIMILAR CONDITIONS ── */}
                <div id="similar-conditions" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Conditions That Can Cause Similar Symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    It is common to be tested for other conditions before a lupus diagnosis is made. This is because symptoms can overlap with many other diseases. The table below presents the most frequent diseases considered together with lupus.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[680px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Condition</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">How It Overlaps With Lupus</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Key Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {similarConditions.map((row) => (
                          <tr key={row.condition} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.condition}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.overlap}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.difference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Lupus Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    No one test can diagnose lupus. The diagnosis is constructed through several means. It involves history, physical examination, blood tests, and imaging. All of these are done by a rheumatologist. This process may take time, and that is normal.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Physical Examination and Medical History
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The first steps in a rheumatologist's evaluation involve asking about the nature of the symptoms. It is about when they began, what makes them better, and what makes them worse. Whether any family member has a similar or autoimmune disorder. A physical examination is performed to look for the butterfly rash, swollen joints, mouth ulcers, and other visible symptoms.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Blood Tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    The most important blood test is an ANA (anti-nuclear antibody) test. It is positive in nearly every lupus patient. It indicates that the immune system is creating antibodies that attack the body's own cells. Anti-dsDNA antibodies, ESR, and CRP (measuring the inflammation) further narrow the diagnosis, if necessary.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Urine Tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A urine analysis is performed to determine if there is protein or blood in the urine. This may indicate kidney involvement even if there are no symptoms. Urine testing is performed regularly during the diagnostic process and monitoring.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Imaging
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A chest X-ray, heart ultrasound, or kidney ultrasound might be ordered depending on the involved organs. If there is a concern for kidney involvement, a kidney biopsy may be suggested.
                  </p>
                </div>

                {/* ── SEE DOCTOR ── */}
                <div id="see-doctor" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When Should You See a Doctor?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    If you have any of the following, see a rheumatologist:
                  </p>
                  <ul className="space-y-1 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {doctorSigns.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    The earlier lupus is identified, the better the long-term outcomes. Don&apos;t delay treatment until symptoms are severe.
                  </p>
                </div>

                {/* ── SPEAK TO RHEUMATOLOGIST ── */}
                <div id="speak-rheumatologist" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Think These Symptoms Sound Familiar? Speak to a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    If you feel any or all of the symptoms on this page are familiar, visit a rheumatologist sooner. The sooner recognized, the sooner diagnosed, and the better the outcomes will be. Don&apos;t wait until things get &quot;bad&quot; to take action. Action is preferable to inaction. Get the right care when it is needed.
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
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#5E5E5E", marginBottom: "2.5rem" }}>
                    This content has been written for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified rheumatologist or healthcare provider if you have questions about a medical condition or treatment plan.
                  </p>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    References
                  </h2>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {references.map((r, i) => (
                      <li key={i} className="text-[15px] leading-[1.75] text-navy-muted pl-1" style={{ wordBreak: "break-word" }}>
                        {r.text}
                        <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0f616e", textDecoration: "underline" }}>{r.url}</a>
                      </li>
                    ))}
                  </ul>
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

export default LupusSymptomsDiagnosis
