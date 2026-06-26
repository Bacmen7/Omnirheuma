import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const conditions = [
  {
    eyebrow: "Autoimmune",
    title: "Rheumatoid Arthritis",
    subtitle: "When the body's defence system attacks its own joints",
    description:
      "Rheumatoid arthritis is a condition where the body's defence system mistakenly attacks healthy joints. It usually affects the small joints of the hands and feet and can gradually worsen over time. The condition often affects the same joints on both sides of the body. Early diagnosis can help prevent long-term joint damage.",
    symptoms: [
      "Joint pain that does not go away",
      "Swelling in the hands, wrists, or feet",
      "Tiredness and low energy levels",
    ],
    image: "/condition/symptom-rheumatoid-arthritis.webp",
  },
  {
    eyebrow: "Degenerative",
    title: "Osteoarthritis",
    subtitle: "Wear and tear of the joints over time",
    description:
      "Osteoarthritis occurs when the protective cushioning between the joints gradually wears down over time. It is more common with ageing. It affects the knees, hips, hands, and spine. Early care can help reduce discomfort and keep the joints moving comfortably.",
    symptoms: [
      "Joint pain that worsens with activity",
      "Stiffness after resting or sitting for a long time",
      "A cracking or grinding feeling while moving a joint",
    ],
    image: "/condition/symptom-osteoarthritis.webp",
  },
  {
    eyebrow: "Spine inflammation",
    title: "Ankylosing Spondylitis",
    subtitle: "Back pain and stiffness that often improve with movement",
    description:
      "Ankylosing spondylitis is a condition that mainly affects the spine and lower back. It can cause pain and stiffness that is often worse in the morning or after long periods of rest. Over time, the stiffness may make it harder to move comfortably. Early diagnosis can help manage symptoms and maintain mobility.",
    symptoms: [
      "Persistent lower back pain",
      "Stiffness, especially in the morning",
      "Pain that improves with movement and exercise",
    ],
    image: "/condition/symptom-ankylosing-spondylitis.webp",
  },
  {
    eyebrow: "Skin and joints",
    title: "Psoriatic Arthritis",
    subtitle: "Joint pain linked to the skin condition psoriasis",
    description:
      "Psoriatic arthritis is a condition that can develop in people who have psoriasis, a skin condition that causes scaly patches on the skin. It can affect different joints in the body and may vary from person to person. Early diagnosis can help prevent long-term joint problems.",
    symptoms: [
      "Joint pain and stiffness",
      "Swelling in the fingers or toes",
      "Scaly skin patches along with joint symptoms",
    ],
    image: "/condition/symptom-psoriatic-arthritis.webp",
  },
  {
    eyebrow: "Pain sensitivity",
    title: "Fibromyalgia",
    subtitle: "Widespread body pain with tiredness and poor sleep",
    description:
      "Fibromyalgia is a long-term condition that causes pain and tenderness in different parts of the body. It can also affect sleep, energy levels, and concentration. The symptoms may come and go and can vary from person to person.",
    symptoms: [
      "Pain in different areas of the body",
      "Constant tiredness or low energy",
      "Difficulty sleeping or feeling rested",
    ],
    image: "/condition/symptom-fibromyalgia.webp",
  },
  {
    eyebrow: "Crystal arthritis",
    title: "Gout",
    subtitle: "Sudden joint pain caused by a build-up of uric acid",
    description:
      "Gout happens when excess uric acid builds up in the body and forms crystals in the joints. It most commonly affects the big toe, but it can also affect the ankles, feet, knees, and other joints. Gout attacks can come on suddenly and may last for several days.",
    symptoms: [
      "Sudden severe pain in a joint",
      "Redness and swelling around the joint",
      "Difficulty walking or moving the affected area",
    ],
    image: "/condition/symptom-gout.webp",
  },
]

function SymptomsExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCondition = conditions[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? conditions.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveIndex((current) => (current === conditions.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="symptoms-explorer bg-[#f7fcfc] py-10 md:py-12" style={{ fontFamily: "var(--font-base)", letterSpacing: 0 }}>
      <div className="w-full px-5 md:px-8 lg:px-12">
        <div className="bg-[#f7fcfc]">
          <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative", zIndex: 10 }}>
            <h2 style={{ fontFamily: "loretta, Georgia, serif", fontSize: "51px", lineHeight: "56px", fontWeight: 400, letterSpacing: 0, color: "rgb(15, 97, 110)" }}>
              Do you recognise your symptoms?
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "16px", lineHeight: 1.65, color: "#5E5E5E", marginTop: "12px", letterSpacing: 0, textAlign: "center" }}>
              Tap the arrows to explore each condition, what it is, how it feels, and when to see a doctor.
            </p>
          </div>

          <div className="mx-auto grid min-h-[420px] w-full overflow-hidden bg-white shadow-[0_18px_60px_rgba(15,97,110,0.08)] md:grid-cols-[1fr_0.95fr] lg:min-h-[500px]">
            <div className="relative min-h-[290px] bg-[#c9e7e7] p-6 md:min-h-[420px] md:p-8 lg:min-h-[500px]">
              <span className="inline-flex rounded-full bg-[#fff0d1] px-4 py-2 text-[12px] font-semibold text-[#b57918]">
                {activeCondition.eyebrow}
              </span>

              <div className="absolute inset-x-8 bottom-8 top-20 flex items-center justify-center">
                <img
                  src={activeCondition.image}
                  alt={activeCondition.title}
                  className="max-h-full max-w-[76%] object-contain opacity-95"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-5 right-5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-navy-muted">
                {String(activeIndex + 1).padStart(2, "0")} / {String(conditions.length).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <h3 className="text-[1.8rem] leading-[1.1] text-navy-deep md:text-[2.35rem]" style={{ fontFamily: "var(--font-display)", letterSpacing: 0, marginBottom: "14px" }}>
                {activeCondition.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-navy-muted md:text-[16px]" style={{ letterSpacing: 0, fontStyle: "italic", marginBottom: "12px" }}>
                {activeCondition.subtitle}
              </p>
              <p className="mt-5 text-[14px] leading-[1.75] text-navy-muted md:text-[15px]" style={{ letterSpacing: 0 }}>
                {activeCondition.description}
              </p>

              <ul className="mt-5 space-y-3">
                {activeCondition.symptoms.map((symptom) => (
                  <li key={symptom} className="flex gap-3 text-[14px] leading-[1.55] text-navy-deep" style={{ letterSpacing: 0 }}>
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1AA3B5]" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e86531] px-5 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90"
                >
                  Book a consultation
                  <ArrowRight size={16} />
                </Link>

                <div className="ml-auto flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cfe4e4] bg-white text-navy-deep"
                    aria-label="Show previous condition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cfe4e4] bg-white text-navy-deep"
                    aria-label="Show next condition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SymptomsExplorer
