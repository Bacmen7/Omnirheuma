import { useRef } from "react"
import { Link } from "react-router-dom"
import allArticles from "../data/articles"

const featuredArticles = allArticles.slice(0, 6)

const articles = [
  {
    id: "biologics-vs-small-molecules-psa",
    title: "Biologics vs Small Molecules for PsA",
    image: "/images/medication.webp",
    readTime: "15 min read",
    category: "Treatment",
    author: "Dr. James Chen",
    excerpt: "Comparing biologic therapies with small molecule drugs to help you understand which approach may be right for your PsA.",
  },
  {
    id: "tips-morning-stiffness-fatigue",
    title: "Tips for Morning Stiffness and Fatigue",
    image: "/images/pain-relief.webp",
    readTime: "7 min read",
    category: "Lifestyle",
    author: "Angela Myers",
    excerpt: "Practical morning routines and strategies to help ease joint stiffness and combat fatigue from psoriatic arthritis.",
  },
]

function PsAArticles() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 320
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl text-navy-deep leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Psoriatic Arthritis Articles</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="w-[340px] min-w-[340px] flex-shrink-0 flex flex-col group bg-[#fcfcfc] border border-gray-100"
          >
            <div className="h-56 overflow-hidden">
              <img alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.image} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div style={{ marginBottom: "12px" }}>
                <span className="inline-block bg-[#e0f3f5] text-[#5E5E5E] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                  {article.category}
                </span>
              </div>
              <h4 className="text-xl leading-snug line-clamp-2 text-navy-deep group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}>{article.title}</h4>
              <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", marginBottom: "8px" }}>
                By <strong className="text-navy-deep font-semibold">{article.author}</strong>
              </p>
              <p className="text-sm text-navy-muted leading-relaxed line-clamp-2 flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "16px" }}>
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-navy-deep mt-auto" style={{ fontFamily: "var(--font-base)" }}>
                Read More
                <span className="w-6 h-6 rounded-full bg-[#1AA3B5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1A355D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
        {/* Featured Insight Articles */}
        {featuredArticles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="w-[340px] min-w-[340px] flex-shrink-0 flex flex-col group bg-[#fcfcfc] border border-gray-100"
          >
            <div className="h-56 overflow-hidden">
              <img alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.image} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div style={{ marginBottom: "12px" }}>
                <span className="inline-block bg-[#e0f3f5] text-[#5E5E5E] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                  {article.category}
                </span>
              </div>
              <h4 className="text-xl leading-snug line-clamp-2 text-navy-deep group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}>{article.title}</h4>
              <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", marginBottom: "8px" }}>
                By <strong className="text-navy-deep font-semibold">{article.author?.name || "Rheuma Team"}</strong>
              </p>
              {article.excerpt && (
                <p className="text-sm text-navy-muted leading-relaxed line-clamp-2 flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "16px" }}>
                  {article.excerpt}
                </p>
              )}
              <div className="flex items-center gap-2 text-sm font-bold text-navy-deep mt-auto" style={{ fontFamily: "var(--font-base)" }}>
                Read More
                <span className="w-6 h-6 rounded-full bg-[#1AA3B5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#1A355D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PsAArticles
