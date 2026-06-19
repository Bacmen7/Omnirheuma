import { useState } from "react"

const YouTubeIcon = () => (
  <svg viewBox="0 0 28 20" className="w-5 h-3.5">
    <rect width="28" height="20" rx="4" fill="#FF0000" />
    <polygon points="11,4 11,16 20,10" fill="#FFFFFF" />
  </svg>
)

const videos = [
  {
    id: "niyfFNDQjok",
    title: "Understanding Rheumatoid Arthritis: Causes, Symptoms and Modern Treatment Options",
    doctor: "Dr. Sarah Miller",
  },
  {
    id: "niyfFNDQjok",
    title: "Did you know there's a connection between gut health and rheumatoid arthritis?",
    doctor: "Dr. James Chen",
  },
  {
    id: "niyfFNDQjok",
    title: "You can lower your risk of RA flares by making these lifestyle changes",
    doctor: "Dr. Elena Vasquez",
  },
  {
    id: "niyfFNDQjok",
    title: "Biologics vs DMARDs: What every RA patient needs to know about treatment options",
    doctor: "Dr. Sarah Miller",
  },
  {
    id: "niyfFNDQjok",
    title: "Early signs of rheumatoid arthritis most people ignore until it's too late",
    doctor: "Dr. James Chen",
  },
  {
    id: "niyfFNDQjok",
    title: "How physical therapy and exercise can transform your life with rheumatoid arthritis",
    doctor: "Dr. Elena Vasquez",
  },
]

const ITEMS_PER_PAGE = 3

function VideoLibrary() {
  const [currentPage, setCurrentPage] = useState(0)
  const [activeVideo, setActiveVideo] = useState(null)
  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE)
  const visibleVideos = videos.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400"
              style={{ fontFamily: "var(--font-base)", marginBottom: "0.5rem" }}
            >
              Rheumatology Video Library
            </p>
            <h2
              className="text-[2.25rem] md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Hear From Our Expert Rheumatologists
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-[14px] text-white transition-all hover:opacity-90 self-start md:self-auto"
            style={{ backgroundColor: "#e86531", padding: "13px 26px", fontFamily: "var(--font-base)" }}
          >
            View All Stories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Video cards -carousel on mobile, 3-col grid on desktop */}
        <div className="flex gap-6 overflow-x-auto hide-scrollbar md:grid md:grid-cols-3 md:overflow-visible mb-10">
          {visibleVideos.map((video, i) => (
            <div
              key={`${currentPage}-${i}`}
              onClick={() => setActiveVideo(video)}
              className="w-[280px] min-w-[280px] sm:w-[300px] sm:min-w-[300px] md:w-auto md:min-w-0 flex-shrink-0 md:flex-shrink flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white group cursor-pointer"
            >
              {/* Thumbnail with padding + border radius */}
              <div className="p-3 pb-0">
                <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-xl">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white ml-0.5" fill="currentColor">
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 pt-3 flex flex-col flex-grow">
                <p
                  className="text-sm text-gray-800 leading-relaxed mb-3 flex-grow"
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  {video.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-base)" }}>
                    {video.doctor}
                  </p>
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                i === currentPage ? "bg-[#1A355D]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ═══ Video Popup Modal ═══ */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
          style={{ animation: "fadeIn 0.2s ease" }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Modal */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideUp 0.3s ease" }}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube iframe */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video info below */}
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="text-white text-base font-semibold leading-snug" style={{ fontFamily: "var(--font-base)" }}>
                  {activeVideo.title}
                </p>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: "var(--font-base)" }}>
                  {activeVideo.doctor}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoLibrary
