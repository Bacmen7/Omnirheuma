import { useEffect, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const defaultConditionName = "Rheumatoid Arthritis"

const buildFeatured = (slug, name) => {
  if (slug === "sjogrens-syndrome") {
    return [
      {
        href: "/sjogrens-syndrome",
        category: "Get started",
        title: `What is ${name}? Autoimmune Gland Overview`,
        image: "/sjogren-carousel-overview.jpg",
      },
      {
        href: "/sjogrens-syndrome-symptoms",
        category: "Early signs",
        title: "Persistent Dry Eyes, Dry Mouth & Deep Fatigue",
        image: "/sjogren-carousel-symptoms.jpg",
      },
      {
        href: "/sjogrens-syndrome-diagnosis",
        category: "Diagnosis",
        title: "Schirmer Test, Antibody Blood Panels & Biopsy",
        image: "/treatmnetguide/blood_test.webp",
      },
      {
        href: "/sjogrens-syndrome-treatment",
        category: "Treatment",
        title: "Moisture Therapies, Tear Substitutes & Immune Care",
        image: "/drysyndrome.jpg",
      },
    ]
  }

  if (slug === "ankylosing-spondylitis") {
    return [
      {
        href: "/Ankylosing-Spondylitis-overview",
        category: "Get started",
        title: `What is ${name}? Spine Inflammation & Mobility`,
        image: "/condition-cards/akrlysis/spine-inflammation-3d.webp",
      },
      {
        href: "/Ankylosing-Spondylitis-Treatment",
        category: "Early signs",
        title: "Chronic Inflammatory Back Pain & Morning Stiffness",
        image: "/condition-cards/akrlysis/morning-back-stiffness.webp",
      },
      {
        href: "/Ankylosing-Spondylitis-overview",
        category: "Diagnosis & Imaging",
        title: "HLA-B27 Testing, Pelvic MRI & Spine Evaluation",
        image: "/condition-cards/akrlysis/mri-spine-diagnosis.webp",
      },
      {
        href: "/ankylosing-spondylitis-specialised-procedures",
        category: "Specialised care",
        title: "Posture Preservation, Biologics & Surgical Procedures",
        image: "/condition-cards/akrlysis/biologic-injection-therapy.webp",
      },
    ]
  }

  if (slug === "reactive-arthritis") {
    return [
      {
        href: "/reactive-arthritis",
        category: "Get started",
        title: `What is ${name}? Post-Infection Joint Swelling`,
        image: "/condition-cards/reaxr/swollen-ankle-joint.webp",
      },
      {
        href: "/reactive-arthritis-symptoms",
        category: "Warning signs",
        title: "Joint Pain & Inflammation Following Infection",
        image: "/condition-cards/reaxr/joint-pain-examination.webp",
      },
      {
        href: "/reactive-arthritis-diagnosis",
        category: "Diagnosis & tests",
        title: "Clinical Evaluation, Synovial Tests & Recovery Plan",
        image: "/condition-cards/reaxr/synovial-lab-tests.webp",
      },
    ]
  }

  if (slug === "osteoarthritis") {
    return [
      {
        href: "/Osteoarthritis-overview",
        category: "Get started",
        title: `What is ${name}? Cartilage Health & Joint Wear`,
        image: "/condition-cards/osestoarthis/cartilage-joint-wear.webp",
      },
      {
        href: "/Osteoarthritis-Symptoms-Causes",
        category: "Early signs",
        title: "Joint Stiffness, Crepitus & Activity-Related Pain",
        image: "/condition-cards/osestoarthis/physiotherapy-knee-care.webp",
      },
      {
        href: "/Osteoarthritis-Diagnosis-Treatment",
        category: "Diagnosis & Care",
        title: "Targeted Physiotherapy, Joint Preservation & Pain Relief",
        image: "/treatmnetguide/knee.webp",
      },
      {
        href: "/Specialised-Treatment-Osteoarthritis",
        category: "Specialised Care",
        title: "Viscosupplementation, Injections & Joint Restoration",
        image: "/treatmnetguide/xray.webp",
      },
    ]
  }

  if (slug === "psoriatic-arthritis") {
    return [
      {
        href: "/Psoriatic-Arthritis-overview",
        category: "Get started",
        title: `What is ${name}? Where Skin Meets Joints`,
        image: "/condition-cards/psoritc/skin-joint-psoriasis-patch.webp",
      },
      {
        href: "/Psoriatic-Arthritis-Symptoms-Warning-Signs",
        category: "Early signs",
        title: "Dactylitis (Sausage Digits), Nail Pitting & Swollen Joints",
        image: "/condition-cards/psoritc/nail-pitting-changes.webp",
      },
    ]
  }

  if (slug === "lupus") {
    return [
      {
        href: "/Lupus-overview",
        category: "Get started",
        title: `What is ${name}? Multi-System Autoimmune Disease`,
        image: "/condition-cards/luous/forearm-skin-rash.webp",
      },
      {
        href: "/Lupus-Symptoms-Warning-Signs",
        category: "Warning signs",
        title: "Malar Rash, Joint Pain, Sun Sensitivity & Flares",
        image: "/condition-cards/luous/malar-butterfly-rash.webp",
      },
      {
        href: "/Lupus-overview",
        category: "Diagnosis",
        title: "ANA, Anti-dsDNA Antibody Panels & Organ Protection",
        image: "/treatmnetguide/blood_test.webp",
      },
      {
        href: "/Lupus-Treatment-Options",
        category: "Treatment",
        title: "Modern Flare Management & Vital Organ Preservation",
        image: "/condition-cards/luous/medication-flare-management.webp",
      },
    ]
  }

  if (slug === "gout") {
    return [
      {
        href: "/Gout-overview",
        category: "Get started",
        title: `What is ${name}? Uric Acid Crystals & Inflammatory Attacks`,
        image: "/condition-cards/gout/swollen-toe-inflammation.webp",
      },
      {
        href: "/Gout-overview",
        category: "Early signs",
        title: "Sudden Intense Big Toe Pain & Night Flare Management",
        image: "/condition/symptom-gout.webp",
      },
      {
        href: "/Gout-overview",
        category: "Diagnosis",
        title: "Serum Uric Acid Levels & Joint Fluid Analysis",
        image: "/condition-cards/gout/blood-test-diagnosis.webp",
      },
      {
        href: "/Gout-overview",
        category: "Prevention",
        title: "Urate-Lowering Therapy & Dietary Lifestyle Strategies",
        image: "/condition-cards/gout/diet-prevention-plate.webp",
      },
    ]
  }

  if (slug === "fibromyalgia") {
    return [
      {
        href: "/Fibromyalgia-overview",
        category: "Get started",
        title: `What is ${name}? Central Sensitization & Chronic Pain`,
        image: "/condition-cards/fiberoo/widespread-pain-neck.webp",
      },
      {
        href: "/Fibromyalgia-Symptoms-Warning-Signs",
        category: "Early signs",
        title: "Tender Points, Chronic Fatigue & Cognitive Brain Fog",
        image: "/condition-cards/fiberoo/tender-points-anatomy.webp",
      },
      {
        href: "/Fibromyalgia-Symptoms-Warning-Signs",
        category: "Diagnosis",
        title: "Widespread Pain Index (WPI) & Symptom Evaluation",
        image: "/condition-cards/fiberoo/tender-point-exam.webp",
      },
      {
        href: "/Fibromyalgia-Treatment",
        category: "Treatment",
        title: "Multimodal Care, Physical Conditioning & Pain Relief",
        image: "/condition-cards/fiberoo/multimodal-care-items.webp",
      },
    ]
  }

  if (slug === "vasculitis") {
    return [
      {
        href: "/vasculitis",
        category: "Get started",
        title: `What is ${name}? Blood Vessel Wall Inflammation`,
        image: "/Vasculitis.jpg",
      },
      {
        href: "/vasculitis",
        category: "Warning signs",
        title: "Recognizing Organ Involvement, Purpura & Vessel Changes",
        image: "/vasculitis.jpg",
      },
      {
        href: "/vasculitis",
        category: "Diagnosis",
        title: "ANCA Serology, Blood Panels & Tissue Biopsy",
        image: "/treatmnetguide/blood_test.webp",
      },
      {
        href: "/vasculitis",
        category: "Treatment",
        title: "Targeted Immunotherapy & Long-Term Vascular Health",
        image: "/treatmnetguide/joint.webp",
      },
    ]
  }

  // Default / Rheumatoid Arthritis
  return [
    {
      href: "/Rheumatoid-Arthritis-overview",
      category: "Get started",
      title: `What is ${name}? Autoimmune Joint Overview`,
      image: "/condition-cards/what-is-condition.webp",
    },
    {
      href: "/Rheumatoid-Arthritis-Symptoms-Warning-Signs",
      category: "Early signs",
      title: `Could Morning Stiffness & Swollen Joints be ${name}?`,
      image: "/condition-cards/early-signs-symptoms.webp",
    },
    {
      href: "/Rheumatoid-Arthritis-Blood-Tests-Monitoring",
      category: "Diagnosis",
      title: `Anti-CCP, RF Blood Tests & Monitoring ${name}`,
      image: "/condition-cards/diagnosis-xray.webp",
    },
  ]
}

/* slug (from ?c=) → overview page route */
const overviewRouteMap = {
  "arthritis": "/Rheumatoid-Arthritis-overview",
  "rheumatoid-arthritis": "/Rheumatoid-Arthritis-overview",
  "osteoarthritis": "/Osteoarthritis-overview",
  "lupus": "/Lupus-overview",
  "psoriatic-arthritis": "/Psoriatic-Arthritis-overview",
  "ankylosing-spondylitis": "/Ankylosing-Spondylitis-overview",
  "gout": "/Gout-overview",
  "fibromyalgia": "/Fibromyalgia-overview",
  "reactive-arthritis": "/reactive-arthritis",
  "sjogrens-syndrome": "/sjogrens-syndrome",
  "vasculitis": "/vasculitis",
}

const buildCategoryLinks = (name, overviewHref, livingHref, specialisedHref, symptomsHref, monitoringHref, diagnosisHref, conditionSlug) => {
  if (conditionSlug === "ankylosing-spondylitis") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Treatment options", href: "/Ankylosing-Spondylitis-Treatment" },
      { label: "Specialised procedures and surgical options", href: "/ankylosing-spondylitis-specialised-procedures" },
      { label: `Living with ${name}`, href: "/living-with-ankylosing-spondylitis" },
    ]
  }

  if (conditionSlug === "reactive-arthritis") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Symptoms and Warning Signs", href: "/reactive-arthritis-symptoms" },
      { label: "Diagnosis: Tests and What to Expect", href: "/reactive-arthritis-diagnosis" },
      { label: "Treatment and Recovery", href: "/reactive-arthritis-treatment" },
    ]
  }

  if (conditionSlug === "sjogrens-syndrome") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Symptoms and Warning Signs", href: "/sjogrens-syndrome-symptoms" },
      { label: "Diagnosis: Tests and What to Expect", href: "/sjogrens-syndrome-diagnosis" },
      { label: "Treatment Options", href: "/sjogrens-syndrome-treatment" },
      { label: "Living with Sjögren's Syndrome", href: "/living-with-sjogrens-syndrome" },
      { label: "Beyond Dryness: Effects on the Rest of the Body", href: "/sjogrens-beyond-dryness" },
    ]
  }

  if (conditionSlug === "lupus") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Symptoms and Warning Signs", href: "/Lupus-Symptoms-Warning-Signs" },
      { label: "Treatment Options", href: "/Lupus-Treatment-Options" },
      { label: `Living with ${name}`, href: "/Living-With-Lupus" },
    ]
  }

  if (conditionSlug === "osteoarthritis") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Symptoms and Causes", href: "/Osteoarthritis-Symptoms-Causes" },
      { label: "Diagnosis and Treatment", href: "/Osteoarthritis-Diagnosis-Treatment" },
      { label: "Specialised treatment options", href: "/Specialised-Treatment-Osteoarthritis" },
      { label: `Living with ${name}`, href: "/Living-With-Osteoarthritis" },
    ]
  }

  if (conditionSlug === "psoriatic-arthritis") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Symptoms and Warning Signs", href: "/Psoriatic-Arthritis-Symptoms-Warning-Signs" },
      { label: "Diagnosis: Tests and What to Expect", href: "/Psoriatic-Arthritis-Diagnosis" },
      { label: "Treatment Options", href: "/Psoriatic-Arthritis-Treatment" },
      { label: `Living with ${name}`, href: "/Living-With-Psoriatic-Arthritis" },
    ]
  }

  if (conditionSlug === "fibromyalgia") {
    return [
      { label: "An overview", href: overviewHref },
      { label: "Symptoms and Warning Signs", href: "/Fibromyalgia-Symptoms-Warning-Signs" },
      { label: "Treatment Options", href: "/Fibromyalgia-Treatment" },
      { label: `Living with ${name}`, href: "/Living-With-Fibromyalgia" },
    ]
  }

  if (conditionSlug === "gout") {
    return [
      { label: "An overview", href: overviewHref },
    ]
  }

  if (conditionSlug === "vasculitis") {
    return [
      { label: "An overview", href: overviewHref },
    ]
  }

  // Rheumatoid Arthritis / default
  return [
    { label: "An overview", href: overviewHref },
    { label: "Symptoms and Warning Signs", href: "/Rheumatoid-Arthritis-Symptoms-Warning-Signs" },
    { label: "Blood Tests and Monitoring", href: "/Rheumatoid-Arthritis-Blood-Tests-Monitoring" },
    { label: "Specialised treatment options", href: "/Specialised-Treatment-Rheumatoid-Arthritis" },
    { label: `Living with ${name}`, href: "/Living-With-Rheumatoid-Arthritis" },
  ]
}

const videos = [
  { image: "/content-thumbs/psa-video.webp", title: "What is Rheumatoid Arthritis? Causes, Symptoms & When To See A Doctor" },
  { image: "/content-thumbs/lupus-video.webp", title: "Osteoarthritis vs Rheumatoid Arthritis - What's the difference?" },
  { image: "/content-thumbs/fibromyalgia-video.webp", title: "How to recognise rheumatic disease: Key warning signs" },
]

const conditionCards = [
  { name: "Rheumatoid Arthritis", image: "/condition/Rheumatoid Arthritis (RA).webp", desc: "Autoimmune joint inflammation affecting 1.3M+ Americans. Learn about early diagnosis and modern treatments.", href: "/conditions?c=rheumatoid-arthritis" },
  { name: "Psoriatic Arthritis", image: "/condition/Psoriatic Arthritis.webp", desc: "Where skin meets joints. Understanding the psoriasis-arthritis connection and targeted therapies.", href: "/conditions?c=psoriatic-arthritis" },
  { name: "Osteoarthritis", image: "/condition/Osteoarthritis.webp", desc: "The most common form of arthritis. Evidence-based approaches to manage cartilage loss and pain.", href: "/conditions?c=osteoarthritis" },
  { name: "Lupus", image: "/condition/Lupus.webp", desc: "A complex autoimmune disease affecting multiple organ systems. Expert guidance for flare management.", href: "/conditions?c=lupus" },
  { name: "Gout", image: "/condition/Gout.webp", desc: "Caused by uric acid crystal deposits. Prevent flares with medication, diet, and lifestyle strategies.", href: "/conditions?c=gout" },
  { name: "Ankylosing Spondylitis", image: "/condition/Ankylosing Spondylitis (AS).webp", desc: "Chronic spinal inflammation that can fuse vertebrae. Early treatment preserves mobility and posture.", href: "/conditions?c=ankylosing-spondylitis" },
  { name: "Fibromyalgia", image: "/condition/Fibromyalgia.webp", desc: "Widespread pain with fatigue and cognitive difficulties. Multi-modal treatment can restore quality of life.", href: "/conditions?c=fibromyalgia" },
  { name: "Reactive Arthritis", image: "/Reactivearthirits.png", desc: "Joint pain and swelling that follows a gut or urinary infection. Causes, symptoms, treatment, and how long it lasts.", href: "/conditions?c=reactive-arthritis" },
  { name: "Sjögren's Syndrome", image: "/drysyndrome.jpg", desc: "An immune system overreaction that attacks the glands that make tears and saliva. Dry eyes, dry mouth, fatigue, and joint pain.", href: "/conditions?c=sjogrens-syndrome" },
  { name: "Vasculitis", image: "/Vasculitis.jpg", desc: "Swelling of the blood vessel walls that reduces blood flow to the organs. Types, causes, symptoms, and treatment.", href: "/conditions?c=vasculitis" },
]

/* Condition tiles -mirrors the Knowledge Hub "Know more about Your condition" section */
const arthritisConditions = [
  { key: "ra", name: "Rheumatoid Arthritis", typeLabel: "Autoimmune", href: "/conditions?c=rheumatoid-arthritis" },
  { key: "oa", name: "Osteoarthritis", typeLabel: "Degenerative", href: "/conditions?c=osteoarthritis" },
  { key: "psa", name: "Psoriatic Arthritis", typeLabel: "Autoimmune", href: "/conditions?c=psoriatic-arthritis" },
  { key: "as", name: "Ankylosing Spondylitis", typeLabel: "Autoimmune", href: "/conditions?c=ankylosing-spondylitis" },
]

/* href = condition hub (/conditions?c=slug) for conditions with content; null = disabled tile.
   Clickable conditions are listed first so they render at the top of the grid. */
const otherConditions = [
  { key: "gout", name: "Gout", href: "/conditions?c=gout" },
  { key: "fibro", name: "Fibromyalgia", href: "/conditions?c=fibromyalgia" },
  { key: "lupus", name: "Lupus (SLE)", href: "/conditions?c=lupus" },
  { key: "reactive", name: "Reactive Arthritis", href: "/conditions?c=reactive-arthritis" },
  { key: "sjogrens", name: "Sjögren's Syndrome", href: "/conditions?c=sjogrens-syndrome" },
  { key: "vasculitis", name: "Vasculitis", href: "/conditions?c=vasculitis" },
  { key: "ctd", name: "Connective Tissue Disease", href: null },
  { key: "jia", name: "Juvenile Idiopathic Arthritis", href: null },
  { key: "pmr", name: "Polymyalgia Rheumatica", href: null },
  { key: "scleroderma", name: "Systemic Sclerosis", href: null },
  { key: "osteoporosis", name: "Osteoporosis", href: null },
  { key: "septic", name: "Septic Arthritis", href: null },
  { key: "cppd", name: "Crystal Arthropathies (CPPD)", href: null },
  { key: "mctd", name: "Mixed Connective Tissue Disease", href: null },
  { key: "raynauds", name: "Raynaud's Phenomenon", href: null },
]

const BookIcon = ({ size = 28, color = "#0f616e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const conditionNameMap = {
  "arthritis": "Rheumatoid Arthritis",
  "rheumatoid-arthritis": "Rheumatoid Arthritis",
  "psoriatic-arthritis": "Psoriatic Arthritis",
  "osteoarthritis": "Osteoarthritis",
  "lupus": "Lupus",
  "gout": "Gout",
  "ankylosing-spondylitis": "Ankylosing Spondylitis",
  "fibromyalgia": "Fibromyalgia",
  "reactive-arthritis": "Reactive Arthritis",
  "sjogrens-syndrome": "Sjögren's Syndrome",
  "vasculitis": "Vasculitis",
}

function Conditions() {
  const [searchParams] = useSearchParams()
  const conditionSlug = searchParams.get("c")
  const conditionName = conditionSlug ? conditionNameMap[conditionSlug] : null
  const displayName = conditionName || defaultConditionName
  const overviewHref = (conditionSlug && overviewRouteMap[conditionSlug]) || "/Rheumatoid-Arthritis-overview"
  const isRA = !conditionSlug || conditionSlug === "arthritis" || conditionSlug === "rheumatoid-arthritis"
  const livingHref = isRA
    ? "/Living-With-Rheumatoid-Arthritis"
    : conditionSlug === "osteoarthritis"
      ? "/Living-With-Osteoarthritis"
      : conditionSlug === "lupus"
        ? "/Living-With-Lupus"
        : conditionSlug === "psoriatic-arthritis"
          ? "/Living-With-Psoriatic-Arthritis"
          : conditionSlug === "fibromyalgia"
            ? "/Living-With-Fibromyalgia"
            : conditionSlug === "ankylosing-spondylitis"
              ? "/living-with-ankylosing-spondylitis"
              : null
  const specialisedHref = isRA
    ? "/Specialised-Treatment-Rheumatoid-Arthritis"
    : conditionSlug === "osteoarthritis"
      ? "/Specialised-Treatment-Osteoarthritis"
      : conditionSlug === "lupus"
        ? "/Lupus-Treatment-Options"
        : conditionSlug === "psoriatic-arthritis"
          ? "/Psoriatic-Arthritis-Treatment"
          : conditionSlug === "fibromyalgia"
            ? "/Fibromyalgia-Treatment"
            : conditionSlug === "ankylosing-spondylitis"
              ? "/Ankylosing-Spondylitis-Treatment"
              : null
  const symptomsHref = isRA
    ? "/Rheumatoid-Arthritis-Symptoms-Warning-Signs"
    : conditionSlug === "osteoarthritis"
      ? "/Osteoarthritis-Symptoms-Causes"
      : conditionSlug === "lupus"
        ? "/Lupus-Symptoms-Warning-Signs"
        : conditionSlug === "psoriatic-arthritis"
          ? "/Psoriatic-Arthritis-Symptoms-Warning-Signs"
          : conditionSlug === "fibromyalgia"
            ? "/Fibromyalgia-Symptoms-Warning-Signs"
            : conditionSlug === "reactive-arthritis"
              ? "/reactive-arthritis-symptoms"
              : null
  const monitoringHref = isRA ? "/Rheumatoid-Arthritis-Blood-Tests-Monitoring" : null
  const diagnosisHref = conditionSlug === "osteoarthritis"
    ? "/Osteoarthritis-Diagnosis-Treatment"
    : conditionSlug === "psoriatic-arthritis"
      ? "/Psoriatic-Arthritis-Diagnosis"
      : conditionSlug === "reactive-arthritis"
        ? "/reactive-arthritis-diagnosis"
        : null
  const featured = buildFeatured(conditionSlug, displayName)
  const categoryLinks = buildCategoryLinks(displayName, overviewHref, livingHref, specialisedHref, symptomsHref, monitoringHref, diagnosisHref, conditionSlug)

  const [query, setQuery] = useState("")
  const [current, setCurrent] = useState(0)
  const [activeCondition, setActiveCondition] = useState(null)
  const [showAllConditions, setShowAllConditions] = useState(false)
  const carouselRef = useRef(null)
  const scrollCarousel = (dir) => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" })
  }

  const prev = () => setCurrent((i) => (i === 0 ? featured.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === featured.length - 1 ? 0 : i + 1))

  useEffect(() => {
    setCurrent(0)
  }, [conditionSlug])

  useEffect(() => {
    if (!featured.length) return
    const intervalId = window.setInterval(() => {
      setCurrent((i) => (i + 1) % featured.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [featured.length, conditionSlug])

  const activeSlide = featured[current % featured.length] || featured[0]

  return (
    <div className="min-h-screen bg-ghost" style={{ fontFamily: "var(--font-base)" }}>
      <Header />

      <main>

        {/* ── 1. HERO SEARCH ── */}
        <section style={{ background: "#0f616e", padding: "40px 24px 72px", textAlign: "center" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {conditionName && (
              <p style={{ color: "#a0e2e4", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "14px" }}>
                {conditionName}
              </p>
            )}
            <h1 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(2.2rem,3.5vw,3rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.3px", margin: "0 auto 52px" }}>
              {conditionName ? (
                <>Browse {conditionName}<br/>reviewed by experts</>
              ) : (
                <>Browse rheumatic conditions<br/>reviewed by experts</>
              )}
            </h1>
            <div style={{ position: "relative", maxWidth: "540px", margin: "0 auto" }}>
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: "100%", borderRadius: "100px", padding: "16px 52px 16px 24px",
                  fontSize: "16px", outline: "none", boxSizing: "border-box",
                  background: "rgba(255,255,255,0.15)", color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontFamily: "var(--font-base)"
                }}
              />
              <Search style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.6)" }} size={18} />
            </div>
          </div>
        </section>

        {/* ── 2. FEATURED CAROUSEL ── */}
        {query === "" && activeSlide && (
          <section style={{ padding: "48px 0", background: "#f5f5f5" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", height: "380px", background: "#0f616e" }}>

                {/* Slide image */}
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15, 46, 51, 0.94) 0%, rgba(15, 46, 51, 0.48) 55%, rgba(0,0,0,0.2) 100%)" }} />

                {/* Prev */}
                <button onClick={prev} aria-label="Previous"
                  style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                  <ChevronLeft size={20} color="#0f2e33" />
                </button>

                {/* Next */}
                <button onClick={next} aria-label="Next"
                  style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                  <ChevronRight size={20} color="#0f2e33" />
                </button>

                {/* Text overlay */}
                <Link to={activeSlide.href} style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px", textDecoration: "none", zIndex: 10 }}>
                  <p style={{ color: "#a0e2e4", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "8px" }}>
                    {activeSlide.category}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(1.35rem,2.8vw,1.9rem)", fontWeight: 500, lineHeight: 1.25, marginBottom: "20px", maxWidth: "92%" }}>
                    {activeSlide.title}
                  </h2>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {featured.map((_, i) => (
                      <button key={i}
                        onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                        style={{ width: "10px", height: "10px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === (current % featured.length) ? "#fff" : "rgba(255,255,255,0.35)", padding: 0, transition: "background 0.2s" }}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 3. EXPLORE BY CATEGORY ── */}
        <section style={{ padding: "48px 0", background: "#f5f5f5" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", border: "1.5px solid #ebebeb" }}>
              <div style={{ padding: "24px 32px", borderBottom: "1.5px solid #ebebeb" }}>
                <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "2.2rem", fontWeight: 400, margin: 0 }}>Explore by category</h2>
              </div>
              {categoryLinks.map((item, i) => (
                <Link key={i} to={item.href}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px", borderBottom: i < categoryLinks.length - 1 ? "1.5px solid #ebebeb" : "none", textDecoration: "none", transition: "background 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.background = "#f7fffe"}
                  onMouseOut={e => e.currentTarget.style.background = "transparent"}
                >
                  <span style={{ fontFamily: "var(--font-base)", fontSize: "1.25rem", fontWeight: 600, color: "#0f2e33" }}>{item.label}</span>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e6f6f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ChevronRight size={16} color="#0f616e" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. EXPLORE VIDEOS ── */}
        {/* <section style={{ padding: "48px 0", background: "#f5f5f5" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "2.8rem", fontWeight: 400, textAlign: "center", marginBottom: "28px" }}>Explore videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {videos.map((video, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", border: "1.5px solid #ebebeb", cursor: "pointer" }}>
                  <div style={{ width: "100%", aspectRatio: "8 / 5", position: "relative", overflow: "hidden", background: "#eef3f2" }}>
                    <img src={video.image} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#0f616e"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", background: "#e6f6f7", color: "#0f616e", width: "fit-content" }}>
                      Video
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                    <h3 style={{ fontFamily: "var(--font-base)", color: "#0f2e33", fontSize: "16px", fontWeight: 600, lineHeight: 1.45, letterSpacing: "0.01em", margin: 0 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}


        {/* ── 7. EDITORIAL PROCESS ── */}
        <section style={{ padding: "32px 0 48px", background: "#f5f5f5" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ background: "#fff", borderRadius: "20px", padding: "40px 48px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px", border: "1.5px solid #ebebeb" }}>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "2rem", fontWeight: 400, marginBottom: "8px" }}>Our Editorial Process</h3>
                <p style={{ color: "#888", fontSize: "16px", lineHeight: 1.65, margin: 0 }}>
                  Every piece of educational content is thoroughly reviewed by a member of{" "}
                  <Link to="/about" style={{ color: "#0f616e", fontWeight: 600, textDecoration: "none" }}>our Clinical Team</Link>.
                </p>
              </div>
              <Link to="/about"
                style={{ background: "#e86531", color: "#fff", borderRadius: "100px", padding: "12px 28px", fontSize: "14px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "var(--font-base)" }}>
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. KNOW MORE ABOUT YOUR CONDITION (square tiles) ── */}
        <section id="conditions" className="py-12 md:py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-navy-deep mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Know more about Your condition
              </h2>
            </div>

            {/* Arthritis group label */}
            <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
              Arthritis Conditions
            </div>

            {/* Big tiles -2 column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#dde6ee] rounded-lg overflow-hidden mb-8">
              {arthritisConditions.map((c) => (
                <Link
                  key={c.key}
                  to={c.href}
                  className="flex min-h-[124px] gap-6 items-center px-7 py-7 md:min-h-[138px] md:px-8 md:py-8 border-none cursor-pointer text-left transition-colors bg-[#e0f3f5] hover:bg-[#d4ebf8] no-underline"
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  <BookIcon size={30} color="#0f616e" />
                  <div className="flex-1">
                    <div className="text-[1.15rem] font-bold leading-snug text-navy-deep mb-1">{c.name}</div>
                    <div className="text-[13px] text-navy-muted">{c.typeLabel}</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-navy-deep text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Other conditions label */}
            <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
              Other Conditions
            </div>

            {/* Small tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#dde6ee] rounded-lg overflow-hidden mb-4">
              {/* Tiles with href navigate to the condition hub; others render as disabled (faded, no arrow) */}
              {otherConditions.map((c, idx) => {
                const hideCls = !showAllConditions && idx >= 5 ? "hidden sm:flex" : ""
                const inner = (
                  <>
                    <BookIcon size={22} color={c.href ? "#0f616e" : "#8aa4a8"} />
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${c.href ? "text-navy-deep" : "text-[#7d9296]"}`}>{c.name}</div>
                    </div>
                    {c.href && (
                      <div className="w-7 h-7 rounded-md text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                      </div>
                    )}
                  </>
                )
                return c.href ? (
                  <Link
                    key={c.key}
                    to={c.href}
                    className={`flex gap-3 items-center p-5 border-none cursor-pointer text-left transition-colors bg-[#e0f3f5] hover:bg-[#d4ebf8] no-underline ${hideCls}`}
                    style={{ fontFamily: "var(--font-base)" }}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={c.key}
                    aria-disabled="true"
                    className={`flex gap-3 items-center p-5 border-none text-left bg-[#eef6f7] select-none ${hideCls}`}
                    style={{ fontFamily: "var(--font-base)", cursor: "not-allowed", opacity: 0.65 }}
                  >
                    {inner}
                  </div>
                )
              })}
            </div>

            <button
              onClick={() => setShowAllConditions(!showAllConditions)}
              className="text-[14px] font-semibold cursor-pointer sm:hidden mb-6"
              style={{ color: "#1AA3B5", background: "none", border: "none", padding: 0 }}
            >
              {showAllConditions ? "See less ↑" : "See more ↓"}
            </button>
          </div>
        </section>

      </main>

      <BriefingFooter />
    </div>
  )
}

export default Conditions
