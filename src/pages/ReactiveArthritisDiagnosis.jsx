import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import ReviewedConsultationCta from "../components/ReviewedConsultationCta"
import { ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   DATA - Reactive Arthritis Diagnosis: Tests and What to Expect
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "My tests came back normal. Does that mean I do not have it?",
    a: "Not at all. Normal results are common in reactive arthritis, especially once it has been going on a while. The diagnosis rests on your history and symptoms as much as on any test.",
  },
  {
    q: "Is there a blood test that confirms reactive arthritis?",
    a: "No such test exists. Blood tests show inflammation, check for an inherited marker, and rule out other conditions. None of them confirms this one on its own.",
  },
  {
    q: "Does a negative HLA-B27 test rule out reactive arthritis?",
    a: "It does not. Many people with reactive arthritis test negative for the marker, and plenty of people who test positive never develop the condition at all.",
  },
  {
    q: "Why is my X-ray normal when my joint is clearly swollen?",
    a: "Because X-rays usually show nothing in the early stages. Changes appear later, if at all. Ultrasound and MRI detect inflammation much sooner if your doctor needs to see it.",
  },
  {
    q: "Why am I being tested for rheumatoid arthritis and lupus?",
    a: "This is done to exclude them, rather than because they are actively suspected. Since multiple conditions present with comparable joint symptoms, eliminating these other possibilities is how your physician reaches the correct diagnosis.",
  },
]

const references = [
  "Jogu P, Swamy V, Maher L. Reactive Arthritis. StatPearls, updated 15 May 2026.",
  "Reactive Arthritis: Diagnosis, Treatment, and Steps to Take. National Institute of Arthritis and Musculoskeletal and Skin Diseases, National Institutes of Health, 2025.",
  "Reactive arthritis: Diagnosis and treatment. Mayo Clinic, 22 December 2025.",
  "Giraudo C, Astorri D, Reijnierse M. Reactive arthritis: a comprehensive journey through diagnostic findings. Skeletal Radiology, November 2025.",
  "Sidhwa K. Syndromic Approach: Reactive Arthritis. Private Practice Infectious Disease, 2024.",
  "Reactive Arthritis. Merck Manual Professional Edition, 2026.",
  "Thyrocare, Dr Lal PathLabs and LabsAdvisor test pricing, accessed August 2026.",
]

/* ─────────────────────────────────────────────
   TOC CONFIGURATION
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "no-single-test", label: "Why There Is No Single Test" },
  { id: "first-consultation", label: "What Happens at the First Consultation" },
  { id: "blood-tests", label: "Blood Tests and What They Show" },
  { id: "testing-infection", label: "Testing for the Original Infection" },
  { id: "joint-fluid", label: "Testing Fluid From the Joint" },
  { id: "scans-xrays", label: "Scans and X-rays" },
  { id: "ruled-out", label: "What Else Gets Ruled Out" },
  { id: "test-costs", label: "What These Tests Cost in India" },
  { id: "care-team", label: "Who Will Be Involved in Your Care" },
  { id: "prepare-appointment", label: "How to Prepare for Your Appointment" },
  { id: "references", label: "References" },
  { id: "faq", label: "Frequently Asked Questions" },
]

function ReactiveArthritisDiagnosis() {
  const [activeSection, setActiveSection] = useState("no-single-test")

  useEffect(() => {
    document.title = "Reactive Arthritis Diagnosis: Tests and What to Expect | Omni Rheuma"
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
    <div className="landing-page bg-white text-navy-deep antialiased">
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
                Reactive Arthritis Diagnosis
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
                  Reactive Arthritis Diagnosis:
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
                    Tests and What to Expect
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
                    There is no single test for reactive arthritis. No blood test confirms it, and no scan shows it. Doctors start to suspect it when you have joint pain and have had an infection of the gut, urinary tract, or genitals in the past few weeks.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The diagnosis is made with these 3 factors: your infection history, the pattern of your symptoms, and ruling out other conditions that look similar. To reach a diagnosis, your doctor may order various tests, including blood work (to check for inflammation or genetic markers like HLA-B27), stool or urine samples (to detect infections), joint fluid analysis, and imaging such as X-rays, ultrasound, CT, or MRI scans.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    This guide provides a detailed overview of the consultation process, diagnostic testing, the clinical significance of normal results, and the associated testing costs within India.
                  </p>
                </div>

                {/* ── 1. WHY THERE IS NO SINGLE TEST ── */}
                <div id="no-single-test" data-toc-section style={{ marginBottom: "1.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Why There Is No Single Test
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While certain medical conditions can be diagnosed using an established checklist, reactive arthritis lacks a formal set of diagnostic criteria. Because doctors do not have a standard checklist to work from, the condition is frequently underrecognised.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Instead, your doctor builds a complete picture by looking at several clues: your history of recent infections, your current joint symptoms, and the exclusion of other possible causes. Each test helps provide more information. Understanding this process from the beginning can help manage your expectations, as it may take more time than you anticipate to reach a clear answer.
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <ReviewedConsultationCta />

                {/* ── 2. WHAT HAPPENS AT THE FIRST CONSULTATION ── */}
                <div id="first-consultation" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Happens at the First Consultation
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your doctor will ask about your symptoms and when they started, including whether you have had any infection in the previous weeks. Then comes the physical examination.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    They check your joints for tenderness and swelling, look at your skin and inside your mouth for rashes or ulcers. They also examine your eyes for signs of inflammation, and test how well your spine and affected joints move. The eye and skin checks can seem odd when you come for a consultation about a knee issue. But both are part of this condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    One question remains absolutely critical, yet it is the one patients most frequently answer incorrectly. A bout of stomach upset 6 weeks prior, a burning sensation when passing urine, or diarrhea while traveling are often left out. People omit these details because they have cleared up and seem completely unrelated to a swollen knee, but you must mention them anyway.
                  </p>
                </div>

                {/* ── 3. BLOOD TESTS AND WHAT THEY SHOW ── */}
                <div id="blood-tests" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Blood Tests and What They Show
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Blood tests do three separate jobs in this assessment, and they are given below as follows:
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    1. Tests That Measure Inflammation
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Two tests, namely ESR and CRP, indicate that something in your body is inflamed. A raised result fits reactive arthritis, and it indicates other conditions equally well.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A normal result is not a guarantee that nothing is wrong. These markers rise in any inflammatory condition, so they are not specific. In prolonged reactive arthritis, they are frequently not raised at all. If your blood work comes back with entirely normal results a few months after symptoms begin, this is an expected finding rather than a sign that the condition is absent.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    2. The HLA-B27 Test
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    This test represents an inherited genetic marker. Carrying it may indicate reactive arthritis, but it does not confirm the diagnosis on its own. Plenty of people with the condition test negative. Most people who test positive never develop reactive arthritis at all.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    3. Tests for Other Conditions
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    You may find rheumatoid factor, anti-CCP, or ANA on your test list. These are markers for rheumatoid arthritis and lupus, not for reactive arthritis. It might be alarming to see these tests recommended by your doctor. They may suggest these for ruling out other conditions. A negative result helps rule them out, and that is how this diagnosis is confirmed.
                  </p>
                </div>

                {/* ── 4. TESTING FOR THE ORIGINAL INFECTION ── */}
                <div id="testing-infection" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Testing for the Original Infection
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Stool tests indicate the gut bacteria that trigger this condition. Urine tests or swabs look for chlamydia.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    These often come back clear, and that changes very little. In most cases, the infection has already gone by the time your joints react, so there is nothing left to find. Tracking down the organism helps when it happens, but the diagnosis does not depend on it.
                  </p>
                </div>

                {/* ── 5. TESTING FLUID FROM THE JOINT ── */}
                <div id="joint-fluid" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Testing Fluid From the Joint
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    If a joint is swollen, your doctor may draw a small sample of fluid from it using a thin needle and send it to a laboratory.
                  </p>

                  <h3 style={{ letterSpacing: "-0.2px", color: "#0f616e" }}>
                    What the Fluid Is Checked For
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    The laboratory looks for three things:
                  </p>
                  <ul className="text-[17px] leading-[1.8] text-navy-deep space-y-2 mb-5" style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                    <li>White blood cells, because high levels indicate inflammation or infection.</li>
                    <li>Bacteria, because it means the joint itself is infected, which is a different condition and needs urgent treatment.</li>
                    <li>Crystals, which would point to gout instead.</li>
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    In reactive arthritis, the fluid is inflamed, but nothing grows from it. That combination is what separates it from an infected joint.
                  </p>
                </div>

                {/* ── 6. SCANS AND X-RAYS ── */}
                <div id="scans-xrays" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Scans and X-rays
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    X-rays of your lower back, pelvis, and affected joints can show inflammation at the base of the spine, and they help rule out other causes of the pain. Early on, though, they often show nothing at all. A clear X-ray does not mean nothing is wrong with a visibly swollen joint, and this catches a lot of people out.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Changes are detected much earlier through ultrasound, CT, and MRI scans. They are especially useful around the back of the ankle and the base of the heel, which are common spots for this condition.
                  </p>
                </div>

                {/* ── 7. WHAT ELSE GETS RULED OUT ── */}
                <div id="ruled-out" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Else Gets Ruled Out
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Several other conditions produce a similar picture. The closest of them belong to the same family as reactive arthritis, which is exactly why they come up.
                  </p>

                  {/* Differentials Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[560px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Condition</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Why it is considered</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { condition: "Psoriatic arthritis", reason: "Same family and can look very similar" },
                          { condition: "Ankylosing spondylitis", reason: "Same family, mainly affects the spine" },
                          { condition: "Arthritis linked to inflammatory bowel disease", reason: "Same family, follows gut inflammation rather than gut infection" },
                          { condition: "Infection inside the joint", reason: "Sudden, one joint, usually with fever. An emergency" },
                          { condition: "Gout", reason: "Sudden severe pain in one joint, ruled out by crystals in the fluid" },
                          { condition: "Rheumatoid arthritis or lupus", reason: "Ruled out with the antibody blood tests described above" },
                          { condition: "Joint tuberculosis", reason: "Uncommon but important to exclude, particularly in India" },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{row.condition}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{row.reason}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── 8. WHAT THESE TESTS COST IN INDIA ── */}
                <div id="test-costs" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What These Tests Cost in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Basic inflammation tests are inexpensive, with a combined blood count and ESR listed from around Rs 120. The HLA-B27 test cost in India runs roughly from Rs 1,000 to Rs 3,200 depending on the laboratory, the city, and the testing method. Larger chains generally sit at the upper end.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Stool tests, chlamydia testing, joint fluid analysis, and scans vary widely between government hospitals, small diagnostic centres, and corporate hospitals. So ask for an estimate before booking. Prices may vary according to cities and may change over time.
                  </p>
                </div>

                {/* ── 9. WHO WILL BE INVOLVED IN YOUR CARE ── */}
                <div id="care-team" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Who Will Be Involved in Your Care
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A rheumatologist usually leads the assessment for reactive arthritis. Depending on which parts of your body are affected, other specialists may be required as well. An eye specialist for eye inflammation, a skin specialist for rashes and nail changes. A urologist or gynaecologist for urinary and genital symptoms. And a physiotherapist for movement and strength once things settle.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Involvement of multiple specialists is normal here. It reflects how many parts of the body this condition can affect.
                  </p>
                </div>

                {/* ── 10. HOW TO PREPARE FOR YOUR APPOINTMENT ── */}
                <div id="prepare-appointment" data-toc-section style={{ marginBottom: "1.5rem", marginTop: "0" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How to Prepare for Your Appointment
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A little preparation makes the first appointment considerably more useful.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginBottom: "0.75rem", color: "#0f616e" }}>
                    Bring or note down:
                  </p>
                  <ul className="text-[17px] leading-[1.8] text-navy-deep space-y-2 mb-6" style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                    <li>Any infection in the past couple of months, even if it cleared up completely.</li>
                    <li>When your symptoms started, which joints are involved, and whether they come and go.</li>
                    <li>All medicines and supplements you take.</li>
                    <li>Any family history of arthritis or related conditions.</li>
                  </ul>

                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginBottom: "0.75rem", color: "#0f616e" }}>
                    Expect to be asked:
                  </p>
                  <ul className="text-[17px] leading-[1.8] text-navy-deep space-y-2 mb-5" style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                    <li>When did your symptoms start?</li>
                    <li>Whether they are constant or come and go?</li>
                    <li>How severe the pain and stiffness are?</li>
                    <li>What makes them better or worse?</li>
                    <li>Whether you have had any recent infections?</li>
                  </ul>
                </div>

                {/* ── CTA CARD ── */}
                <div
                  style={{
                    backgroundColor: "#0f616e",
                    borderRadius: "16px",
                    padding: "clamp(28px, 6vw, 48px) clamp(20px, 4vw, 42px)",
                    marginTop: "2.5rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, marginBottom: "8px", textDecoration: "none" }}>
                    Concerned about your symptoms?
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: 1.6, marginBottom: "6px" }}>
                    Get a thorough evaluation from a specialist who understands reactive arthritis.
                  </p>
                  <Link
                    to="/book-appointment"
                    className="group inline-flex items-center gap-2"
                    style={{
                      backgroundColor: "#E86531",
                      color: "#ffffff",
                      fontFamily: "var(--font-base)",
                      fontWeight: 700,
                      fontSize: "14px",
                      padding: "12px 18px 12px 26px",
                      borderRadius: "9999px",
                      textDecoration: "none",
                      marginTop: "1rem",
                    }}
                  >
                    Book a Consultation with Dr Raghavendra H
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors group-hover:bg-white/30" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

                {/* ── 11. REFERENCES ── */}
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

                  <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                    <p className="text-[13px] leading-[1.6] text-navy-muted italic">
                      <strong className="font-semibold not-italic text-navy-deep">Medical disclaimer:</strong> This article is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified doctor about any medical concern.
                    </p>
                  </div>
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
                            <span style={{ fontSize: "15px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.45 }}>
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
                      Consultant Rheumatologist specializing in inflammatory arthritis, reactive arthritis, and post-infection joint care.
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
                      <p>{faq.a}</p>
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

export default ReactiveArthritisDiagnosis
