import { useState, useRef } from "react"

const YouTubeIcon = () => (
  <svg viewBox="0 0 28 20" className="w-5 h-3.5 mt-2">
    <rect width="28" height="20" rx="4" fill="#FF0000" />
    <polygon points="11,4 11,16 20,10" fill="#FFFFFF" />
  </svg>
)

const PlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-14 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center opacity-90">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white ml-0.5" fill="currentColor">
        <polygon points="8,5 20,12 8,19" />
      </svg>
    </div>
  </div>
)

const videos = [
  {
    id: "niyfFNDQjok",
    title: "Living with Rheumatoid Arthritis -A Patient's Journey to Remission",
    image: "/patient-stories/journey-to-remission.webp",
  },
  {
    id: "niyfFNDQjok",
    title: "How Early RA Diagnosis Changed My Life -Patient Success Story",
    image: "/patient-stories/early-diagnosis-changed-life.webp",
  },
  {
    id: "niyfFNDQjok",
    title: "Managing RA with Biologics -Real Patient Experience & Results",
    image: "/patient-stories/biologics-real-experience.webp",
  },
  {
    id: "niyfFNDQjok",
    title: "From Chronic Pain to Active Life -RA Treatment Success at Our Clinic",
    image: "/patient-stories/from-pain-to-active-life.webp",
  },
]

function SuccessStories() {
  const [activeVideo, setActiveVideo] = useState(null)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400"
            style={{ fontFamily: "var(--font-base)", marginBottom: "0.5rem" }}
          >
            Success Stories
          </p>
          <h2
            className="text-[2.25rem] md:text-[2.75rem] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem" }}
          >
            Our Patient Stories
          </h2>
          <p
            className="text-sm text-gray-500 leading-relaxed"
            style={{ fontFamily: "var(--font-base)" }}
          >
            Over 2,000 patients treated with consistent improvement in quality of life.
          </p>
        </div>

        {/* Video cards with arrows */}
        <div className="flex items-center gap-4">

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A355D] flex items-center justify-center cursor-pointer hidden md:flex"
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex-1 flex gap-5 overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible"
          >
            {videos.map((video, i) => (
              <div
                key={i}
                onClick={() => setActiveVideo(video)}
                className="w-[260px] min-w-[260px] sm:w-[280px] sm:min-w-[280px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink flex flex-col rounded-xl border border-gray-200 overflow-hidden bg-white group cursor-pointer"
              >
                <div className="p-3 pb-0">
                  <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <PlayButton />
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <p
                    className="text-sm text-gray-800 leading-relaxed mb-4 flex-grow"
                    style={{ fontFamily: "var(--font-base)" }}
                  >
                    {video.title}
                  </p>
                  <YouTubeIcon />
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A355D] flex items-center justify-center cursor-pointer hidden md:flex"
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>

      </div>

      {/* ═══ Video Popup Modal ═══ */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
          style={{ animation: "fadeIn 0.2s ease" }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideUp 0.3s ease" }}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-white text-base font-semibold leading-snug mt-4" style={{ fontFamily: "var(--font-base)" }}>
              {activeVideo.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default SuccessStories
