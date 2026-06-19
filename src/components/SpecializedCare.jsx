import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight, Play, FileText, ArrowRight } from "lucide-react"

const diseasesData = [
  {
    id: 0,
    title: "Rheumatoid Arthritis (RA)",
    description: "Rheumatoid arthritis (RA) is a chronic autoimmune disease where the body's immune system attacks healthy joints, leading to inflammation, pain, and eventual joint damage. It primarily affects the small joints of the hands, wrists, and feet.",
    url: "/Rheumatoid-Arthritis",
    image: "/content/1.webp",
    videoThumb: "/images/article1.webp",
    videoTitle: "Videos on Rheumatoid Arthritis (RA)",
    videoLink: "#",
    articleThumb: "/images/article2.webp",
    articleTitle: "Articles on Rheumatoid Arthritis (RA)",
    articleLink: "#",
  },
  {
    id: 1,
    title: "Osteoarthritis (OA)",
    description: "Osteoarthritis occurs when the protective cartilage that cushions the ends of the bones wears down over time. Over time, the cartilage breaks down, leading to pain, stiffness, and reduced mobility.",
    url: "/health-guide/osteoarthritis",
    image: "/content/2.webp",
    videoThumb: "/k1.webp",
    videoTitle: "Videos on Osteoarthritis (OA)",
    videoLink: "#",
    articleThumb: "/images/article2.webp",
    articleTitle: "Articles on Osteoarthritis (OA)",
    articleLink: "#",
  },
  {
    id: 2,
    title: "Ankylosing Spondylitis (AS)",
    description: "Ankylosing spondylitis is a type of arthritis that causes inflammation in the joints and ligaments of the spine. It may also affect peripheral joints like the knees, ankles, and hips. Normally, the joints and ligaments in the spine help us move and bend.",
    url: "/health-guide/ankylosing-spondylitis",
    image: "/content/3.webp",
    videoThumb: "/k2.webp",
    videoTitle: "Videos on Ankylosing Spondylitis (AS)",
    videoLink: "#",
    articleThumb: "/i1.webp",
    articleTitle: "Articles on Ankylosing Spondylitis (AS)",
    articleLink: "#",
  },
  {
    id: 3,
    title: "Psoriatic Arthritis (PSA)",
    description: "Psoriatic arthritis is a type of arthritis linked with psoriasis, a chronic skin and nail disease. Psoriasis causes red, scaly rashes and thick, pitted fingernails.",
    url: "/health-guide/psoriatic-arthritis",
    image: "/content/4.webp",
    videoThumb: "/k3.webp",
    videoTitle: "Videos on Psoriatic Arthritis (PSA)",
    videoLink: "#",
    articleThumb: null,
    articleTitle: "",
    articleLink: "",
  },
  {
    id: 4,
    title: "Fibromyalgia",
    description: "Fibromyalgia is a disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues. Researchers believe that fibromyalgia amplifies painful sensations by affecting the way your brain and spinal cord process painful and nonpainful signals.",
    url: "/health-guide/fibromyalgia",
    image: "/content/5.webp",
    videoThumb: "/k4.webp",
    videoTitle: "Videos on Fibromyalgia",
    videoLink: "#",
    articleThumb: "/k4.webp",
    articleTitle: "Articles on Fibromyalgia",
    articleLink: "#",
  },
  {
    id: 5,
    title: "Lupus (SLE)",
    description: "Systemic Lupus Erythematosus (SLE) is a chronic autoimmune disease where the immune system mistakenly attacks healthy tissues, affecting multiple organs, including the skin, kidneys, joints, and heart.",
    url: "/health-guide/lupus",
    image: "/content/6.webp",
    videoThumb: "/content-thumbs/lupus-video.webp",
    videoTitle: "Videos on Lupus (SLE)",
    videoLink: "#",
    articleThumb: "/content-thumbs/lupus-article.webp",
    articleTitle: "Articles on Lupus (SLE)",
    articleLink: "#",
  },
  {
    id: 6,
    title: "Vasculitis",
    description: "Vasculitis refers to a group of disorders characterized by inflammation of the blood vessels, which can cause damage to tissues and organs. It can be classified into primary vasculitis and secondary vasculitis.",
    url: "/health-guide/vasculitis",
    image: "/content/7.webp",
    videoThumb: "/content-thumbs/vasculitis-video.webp",
    videoTitle: "Videos on Vasculitis",
    videoLink: "#",
    articleThumb: "/content-thumbs/vasculitis-article.webp",
    articleTitle: "Articles on Vasculitis",
    articleLink: "#",
  },
]

function SpecializedCare() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const tabContainerRef = useRef(null)

  const handleScrollLeft = () => {
    tabContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const handleScrollRight = () => {
    tabContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" })
  }

  const handleTabClick = (index, e) => {
    if (index === activeSlideIndex) return
    setActiveSlideIndex(index)
    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }

  return (
    <section className="custom-approach-section" style={{ backgroundColor: "#f0f5f5", padding: "3rem 0 5rem", fontFamily: "var(--font-base)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: "3rem" }}>
          <h2 className="text-[2.25rem] md:text-[clamp(2rem,4vw,3rem)] leading-[1.12]" style={{ fontWeight: 400, color: "#0f616e", letterSpacing: "-0.8px", fontFamily: "var(--font-display)" }}>
            Know your <span style={{ color: "#1AA3B5", fontWeight: 600 }}>condition</span>
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex items-center justify-center w-full" style={{ marginBottom: "2.5rem" }}>
          <button
            onClick={handleScrollLeft}
            className="hidden md:flex shrink-0 items-center justify-center rounded-full border transition-colors"
            style={{ width: "40px", height: "40px", borderColor: "rgba(15,97,110,0.3)", color: "#0f616e" }}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide py-1 scroll-smooth mx-0 md:mx-3"
            ref={tabContainerRef}
          >
            <a
              href="/health-guide"
              className="shrink-0 px-6 py-2.5 rounded-full border flex items-center gap-2 transition-colors"
              style={{ backgroundColor: "#ffffff", borderColor: "#0f616e", color: "#0f616e", fontWeight: 500, fontSize: "14px", fontFamily: "var(--font-base)" }}
            >
              View all
              <ArrowUpRight size={14} />
            </a>

            {diseasesData.map((disease, index) => (
              <button
                key={`tab-${disease.id}`}
                onClick={(e) => handleTabClick(index, e)}
                className="shrink-0 px-5 md:px-5 py-2.5 md:py-2.5 rounded-full transition-colors whitespace-nowrap"
                style={{
                  fontWeight: 500,
                  fontSize: "14px",
                  fontFamily: "var(--font-base)",
                  backgroundColor: index === activeSlideIndex ? "#0f616e" : "#ffffff",
                  color: index === activeSlideIndex ? "#ffffff" : "#0f616e",
                }}
              >
                {disease.title}
              </button>
            ))}
          </div>

          <button
            onClick={handleScrollRight}
            className="hidden md:flex shrink-0 items-center justify-center rounded-full border transition-colors"
            style={{ width: "40px", height: "40px", borderColor: "rgba(15,97,110,0.3)", color: "#0f616e" }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Content */}
        <div className="relative w-full" style={{ minHeight: "500px" }}>
          {diseasesData.map((disease, index) => {
            const isActive = index === activeSlideIndex
            return (
              <div
                key={`slide-${disease.id}`}
                className="w-full transition-all duration-500 ease-in-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  position: isActive ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  transform: isActive ? "translateY(0)" : "translateY(16px)",
                  visibility: isActive ? "visible" : "hidden",
                  pointerEvents: isActive ? "auto" : "none",
                  zIndex: isActive ? 10 : 0,
                }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                  {/* Image Left */}
                  <div className="w-full lg:w-[50%] shrink-0 flex justify-center px-4 md:px-0">
                    <a href={disease.url} className="block overflow-hidden rounded-[2rem] md:rounded-[2.5rem] w-full max-w-[320px] md:max-w-none">
                      <img
                        src={disease.image}
                        alt={disease.title}
                        className="w-full h-auto object-contain transition-none"
                        style={{ borderRadius: "2rem" }}
                        loading="lazy"
                      />
                    </a>
                  </div>

                  {/* Content Right */}
                  <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 400, color: "#0f616e", marginBottom: "16px", fontFamily: "var(--font-display)", letterSpacing: "-0.8px" }}>
                      {disease.title}
                    </h2>
                    <p style={{ color: "#5E5E5E", lineHeight: 1.7, marginBottom: "24px", fontSize: "15px", fontFamily: "var(--font-base)", fontWeight: 400 }}>
                      {disease.description}
                    </p>

                    <a
                      href={disease.url}
                      className="inline-flex items-center gap-2 transition-colors"
                      style={{ color: "#1AA3B5", fontWeight: 700, fontSize: "15px", marginBottom: "40px", fontFamily: "var(--font-base)" }}
                    >
                      Know more
                      <ArrowUpRight size={18} style={{ color: "#1AA3B5" }} />
                    </a>

                    {/* Video & Article -desktop only */}
                    <div className="hidden md:flex flex-col sm:flex-row justify-start gap-6 w-full max-w-xl">
                      <a href={disease.videoLink} className="group block w-full sm:w-[48%]">
                        <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-gray-100">
                          <img
                            src={disease.videoThumb}
                            alt={disease.videoTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                            <Play size={12} fill="#0f616e" className="ml-0.5" />
                          </div>
                        </div>
                        <h5 style={{ fontSize: "14px", fontWeight: 500, color: "#5E5E5E", fontFamily: "var(--font-base)", lineHeight: 1.5 }}>{disease.videoTitle}</h5>
                      </a>

                      {disease.articleThumb && (
                        <a href={disease.articleLink} className="group block w-full sm:w-[48%]">
                          <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-gray-100">
                            <img
                              src={disease.articleThumb}
                              alt={disease.articleTitle}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                              <FileText size={14} className="text-[#1AA3B5]" />
                            </div>
                          </div>
                          <h5 style={{ fontSize: "14px", fontWeight: 500, color: "#5E5E5E", fontFamily: "var(--font-base)", lineHeight: 1.5 }}>{disease.articleTitle}</h5>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default SpecializedCare
