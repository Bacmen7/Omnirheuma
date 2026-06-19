import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import allArticles from "../data/articles"

const insightArticles = allArticles.slice(0, 6)
const filters = ["All", "Clinical", "Treatment", "Lifestyle"]

const aspects = ["aspect-video", "aspect-[4/5]", "aspect-square", "aspect-video", "aspect-[4/5]", "aspect-square"]

function FeaturedInsights() {
  const [showAll, setShowAll] = useState(false)
  const scrollRef = useRef(null)

  const visible = showAll ? insightArticles : insightArticles.slice(0, 3)

  // Desktop masonry columns
  const columns = [[], [], []]
  visible.forEach((article, i) => {
    columns[i % 3].push(article)
  })

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep mb-4">
              Featured Insights
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              What's new in rheumatic disease treatment, written by the doctors who actually prescribe it.
            </p>
          </div>
          {/* Filter Pills */}
          <div className="flex gap-2 flex-nowrap overflow-x-auto pl-1 md:pl-0 hide-scrollbar">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  i === 0
                    ? "bg-navy-deep text-white"
                    : "bg-[#bcf0ef] text-navy-deep hover:bg-[#a5e8e6]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {insightArticles.slice(0, 4).map((article) => (
              <div key={article.id} className="snap-start shrink-0 w-[280px]">
                <Card article={article} aspect="aspect-square" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Masonry Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            {columns[0].map((article, i) => (
              <Card key={article.id} article={article} aspect="aspect-video" />
            ))}
          </div>
          <div className="flex flex-col gap-6 md:mt-12">
            {columns[1].map((article) => (
              <Card key={article.id} article={article} aspect="aspect-[4/5]" />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {columns[2].map((article) => (
              <Card key={article.id} article={article} aspect="aspect-square" />
            ))}
          </div>
        </div>

        {/* See More / View All - desktop only */}
        <div className="mt-14 text-center hidden md:block">
          {!showAll && insightArticles.length > 3 ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-navy-deep text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-navy-deep/90 transition-colors"
            >
              See More
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
          ) : (
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-rheuma-blue font-bold hover:underline group"
            >
              View all articles
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          )}
        </div>

        {/* Mobile See More link */}
        <div className="mt-6 text-center md:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy-deep font-bold text-sm group"
          >
            See more
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Card({ article, aspect }) {
  return (
    <Link to={`/article/${article.id}`} className="group block">
      <div className={`${aspect} rounded-none md:rounded-3xl overflow-hidden mb-4 bg-slate-100`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-1">
        <h3 className="text-lg font-bold text-navy-deep group-hover:text-rheuma-blue transition-colors mb-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <span className="inline-block bg-primary/20 text-navy-deep text-xs font-semibold px-3 py-1 rounded-full">
          {article.readTime}
        </span>
      </div>
    </Link>
  )
}

export default FeaturedInsights
