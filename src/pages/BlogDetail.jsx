import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getArticleById, getRelatedArticles } from "../data/articles"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

function BlogDetail() {
  const { id } = useParams()
  const article = getArticleById(id)
  const [tocOpen, setTocOpen] = useState(false)

  if (!article) {
    return (
      <div className="bg-background-light text-navy-deep min-h-screen">
        <Header />
        <section className="max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl font-semibold mb-4">Article not found</h1>
          <p className="text-navy-muted mb-10">The page you are trying to open is not available.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-navy-deep text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Back to home
          </Link>
        </section>
        <BriefingFooter />
      </div>
    )
  }

  const related = article.relatedArticles ? getRelatedArticles(article.relatedArticles) : []
  const reviewerImage = article.reviewedBy.image

  return (
    <>
      <Header />
      <div className="blog-detail-page bg-background-light min-h-screen">

      <section className="bg-ghost relative pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 pt-5 md:pt-10">
          <nav className="flex items-center flex-wrap gap-1.5 md:gap-2 text-[12px] md:text-[13px] text-navy-muted mb-6 md:mb-10" style={{ fontFamily: "var(--font-base)", fontWeight: 600 }}>
            <Link to="/" className="hover:text-navy-deep transition-colors">Omni Rheuma</Link>
            <span>&gt;</span>
            <span>{article.category}</span>
            <span>&gt;</span>
            <span className="text-navy-deep">{article.title.length > 40 ? article.title.slice(0, 40) + "..." : article.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_450px] xl:grid-cols-[minmax(0,1fr)_480px] gap-6 md:gap-10 items-center">
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-5xl leading-[1.15] md:leading-tight mb-4 md:mb-5" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.8px" }}>
                {article.title}
              </h1>

              <div className="text-[12px] md:text-[13px] leading-6 text-navy-muted flex flex-wrap items-center gap-x-2" style={{ fontFamily: "var(--font-base)", fontWeight: 600 }}>
                <span>{article.readTime}</span>
                <span>&bull;</span>
                <span>Written by:</span>
                <span className="underline font-semibold">{article.author.name}</span>
                <span>&bull;</span>
                <span>Reviewed by:</span>
                <span className="underline font-semibold">{article.reviewedBy.name}</span>
                <span>&bull;</span>
                <span>Updated: <strong>{article.date}</strong></span>
              </div>

              {/* Reviewer card -shown below meta on mobile, beside title on desktop */}
              <div className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 mt-6 lg:hidden">
                <div className="grid grid-cols-[110px_1fr]">
                  <div className="h-full relative overflow-hidden bg-gradient-to-b from-slate-300 to-slate-500">
                    {reviewerImage && (
                      <img
                        src={reviewerImage}
                        alt={article.reviewedBy.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(event) => { event.currentTarget.style.display = "none" }}
                      />
                    )}
                  </div>
                  <div className="p-2.5">
                    <p className="text-[8px] font-semibold text-teal-soft mb-0.5">Reviewed By</p>
                    <h3 className="text-[0.8rem] leading-tight tracking-tight mb-0.5 text-navy-deep">
                      {article.reviewedBy.name}
                    </h3>
                    <p className="text-[9px] leading-[1.4] text-navy-deep/80 mb-1 line-clamp-2">{article.reviewedBy.bio}</p>
                    <span className="text-[9px] font-semibold underline cursor-pointer">View bio</span>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="flex md:inline-flex items-center justify-center mt-6 md:mt-8 px-10 py-3.5 md:py-3 rounded-full bg-navy-deep text-white text-[14px] font-semibold hover:bg-navy-deep/90 transition-colors w-full md:w-auto"
              >
                Explore more articles
              </Link>
            </div>

            {/* Reviewer card -desktop only (beside title) */}
            <div className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 hidden lg:block">
              <div className="grid grid-cols-[130px_1fr]">
                <div className="h-full relative overflow-hidden bg-gradient-to-b from-slate-300 to-slate-500">
                  {reviewerImage && (
                    <img
                      src={reviewerImage}
                      alt={article.reviewedBy.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(event) => { event.currentTarget.style.display = "none" }}
                    />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[8px] font-semibold text-teal-soft mb-0.5">Reviewed By</p>
                  <h3 className="text-[0.85rem] leading-tight tracking-tight mb-0.5 text-navy-deep">
                    {article.reviewedBy.name}
                  </h3>
                  <p className="text-[9px] leading-[1.4] text-navy-deep/80 mb-1 line-clamp-2">{article.reviewedBy.bio}</p>
                  <span className="text-[9px] font-semibold underline cursor-pointer">View bio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom SVG */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: "relative", display: "block", width: "calc(100% + 1.3px)", height: "50px" }}>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#F5F5F5"></path>
          </svg>
        </div>
      </section>

      {/* Mobile TOC -sticky collapsible bar */}
      <div className="lg:hidden sticky top-0 z-20 bg-white border-b border-border shadow-sm">
        <div className="max-w-[1100px] mx-auto px-5">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="flex items-center justify-between w-full py-3.5 text-left"
          >
            <span className="text-[15px] font-semibold text-navy-deep">Here's what we'll cover</span>
            <svg className={`w-4 h-4 text-navy-muted transition-transform ${tocOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          {tocOpen && (
            <div className="pb-4 space-y-3 max-h-[50vh] overflow-y-auto">
              {article.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setTocOpen(false)}
                  className="block text-[14px] leading-6 text-navy-deep hover:underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] gap-8 md:gap-12">
          <aside className="hidden lg:block lg:sticky lg:top-24 h-fit">
            <div className="p-0">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl leading-none tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Here's what we'll cover</h3>
                <span className="inline-flex items-center justify-center text-navy-muted" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </div>
              <div className="space-y-4">
                {article.tableOfContents.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-[16px] leading-7 text-navy-deep hover:underline">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="bg-ghost p-5 md:p-7 mb-10 md:mb-14">
              <h3 className="text-xl md:text-3xl leading-none tracking-tight mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>Key takeaways</h3>
              <ul className="space-y-4">
                {article.keyTakeaways.map((item, index) => (
                  <li key={index} className="text-[16px] leading-8 text-navy-deep flex gap-3">
                    <span>&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="leading-relaxed text-navy-deep space-y-4 md:space-y-6 mb-8 md:mb-10" style={{ fontFamily: "var(--font-base)", fontSize: "16px", lineHeight: 1.7, letterSpacing: "0.1px" }}>
              <p>{article.excerpt}</p>
              <p>Read on as we share an in-depth timeline and practical guidance based on clinically reviewed evidence.</p>
            </div>

            <div className="blog-article-content text-navy-deep" dangerouslySetInnerHTML={{ __html: article.content }} />

            {article.references?.length > 0 && (
              <div className="mt-14 pt-10 border-t border-border">
                <h3 className="text-2xl md:text-3xl leading-none tracking-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>References</h3>
                <ol className="space-y-3">
                  {article.references.map((ref, index) => (
                    <li key={index} className="text-[15px] leading-[1.7] text-navy-deep/80">
                      <span className="font-semibold mr-2">{index + 1}.</span>
                      {ref.text}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why trust our experts? */}
      <section className="bg-ghost border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
          <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-4xl tracking-tight text-navy-deep mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Why trust our experts?
              </h3>
              <p className="text-[16px] leading-7 text-navy-deep/80 mb-4">
                Every article on health guide goes through rigorous fact-checking by our team of medical reviewers.
              </p>
              <p className="text-[16px] leading-7 text-navy-deep/80">
                Our reviewers are trained medical professionals who ensure each article contains the most up-to-date information, and that medical details have been correctly interpreted by the writer.
              </p>
            </div>

            <div className="space-y-4">
              {/* Trust stat cards */}
              <div className="bg-white rounded-2xl border border-border p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#ecfdf5] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-teal-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[15px] font-semibold text-navy-deep mb-1">Clinically Reviewed</h5>
                  <p className="text-[13px] text-navy-muted leading-snug">Every article verified by board-certified specialists</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[15px] font-semibold text-navy-deep mb-1">Evidence-Based</h5>
                  <p className="text-[13px] text-navy-muted leading-snug">Sourced from peer-reviewed journals and clinical data</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#fef3c7] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[15px] font-semibold text-navy-deep mb-1">Regularly Updated</h5>
                  <p className="text-[13px] text-navy-muted leading-snug">Content reviewed and refreshed with latest research</p>
                </div>
              </div>
            </div>
          </div>

          {/* Written by / Last update row */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-8">
            <div>
              <p className="text-[13px] text-navy-muted mb-1">Written by</p>
              <p className="text-[15px] font-semibold text-navy-deep underline cursor-pointer">{article.author.name}</p>
            </div>
            <div className="text-right">
              <p className="text-[13px] text-navy-muted mb-1">Last update</p>
              <p className="text-[15px] font-semibold text-navy-deep">{article.date}</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 border-t border-border">
          <div className="flex items-end justify-between mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl text-navy-deep" style={{ fontFamily: "var(--font-display)" }}>Related Articles</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/article/${item.id}`}
                className="w-[260px] min-w-[260px] md:w-[300px] md:min-w-[300px] md:max-w-[300px] flex-shrink-0 flex flex-col article-card bg-[#fcfcfc] border border-gray-100 overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img alt={item.title} className="w-full h-full object-cover transition-transform duration-300" src={item.image} />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-xl font-medium leading-snug mb-4 line-clamp-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {item.readTime}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      </div>
      <BriefingFooter />
    </>
  )
}

export default BlogDetail
