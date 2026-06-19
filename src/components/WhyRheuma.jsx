import { useRef, useEffect, useCallback } from "react"

const conditions = [
  {
    name: "Rheumatoid Arthritis",
    image: "/rheumatic/RheumatoidArthritis.webp",
  },
  {
    name: "Psoriatic Arthritis",
    image: "/rheumatic/Psoriatic_Arthritis.webp",
  },
  {
    name: "Lupus",
    image: "/rheumatic/Lupus.webp",
  },
  {
    name: "Osteoarthritis",
    image: "/rheumatic/joint_pain.webp",
  },
  {
    name: "Gout",
    image: "/rheumatic/Gout.webp",
  },
  {
    name: "Spondylitis",
    image: "/rheumatic/Spondylitis.webp",
  },
  {
    name: "Vasculitis",
    image: "/rheumatic/Vasculitis.webp",
  },
  {
    name: "Undiagnosed",
    image: "/rheumatic/Undiagoned.webp",
  },
]

function WhyRheuma() {
  const scrollRef = useRef(null)
  const isScrolling = useRef(false)

  // 3 sets: [...conditions, ...conditions, ...conditions]
  // Start in the middle set so we can scroll both directions
  const tripled = [...conditions, ...conditions, ...conditions]

  // On mount, jump to the middle set (no animation)
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    // Wait for render
    requestAnimationFrame(() => {
      const oneSetWidth = el.scrollWidth / 3
      el.scrollLeft = oneSetWidth
    })
  }, [])

  // When scroll settles, silently jump back to middle set if we've gone too far
  const handleScroll = useCallback(() => {
    if (isScrolling.current) return
    const el = scrollRef.current
    if (!el) return
    const oneSetWidth = el.scrollWidth / 3
    if (el.scrollLeft < oneSetWidth * 0.15) {
      el.style.scrollBehavior = "auto"
      el.scrollLeft += oneSetWidth
      el.style.scrollBehavior = "smooth"
    } else if (el.scrollLeft > oneSetWidth * 1.85) {
      el.style.scrollBehavior = "auto"
      el.scrollLeft -= oneSetWidth
      el.style.scrollBehavior = "smooth"
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let timeout
    const onScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(handleScroll, 100)
    }
    el.addEventListener("scroll", onScroll)
    return () => { el.removeEventListener("scroll", onScroll); clearTimeout(timeout) }
  }, [handleScroll])

  const scroll = (direction) => {
    if (scrollRef.current) {
      isScrolling.current = true
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" })
      setTimeout(() => { isScrolling.current = false }, 500)
    }
  }

  return (
    <section className="custom-approach-section" style={{ backgroundColor: "#e8f4f8", overflow: "hidden" }}>

      {/* ── Mobile Layout ── */}
      <div className="block md:hidden">
        <div className="px-5 pt-12 pb-8 text-center">
          <h2 style={{ color: "#0f616e", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "2.25rem", lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "16px" }}>
            Expert care for all rheumatic symptoms and conditions
          </h2>
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>
            From osteoarthritis to complex autoimmune disorders, we diagnose and treat{" "}
            <strong style={{ color: "#ffffff", background: "#1AA3B5", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>rheumatic and autoimmune conditions</strong>.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4 pb-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
          {conditions.map((c) => (
              <div key={c.name} className="flex-shrink-0 flex flex-col items-center" style={{ width: "185px" }}>
              <div className="w-full overflow-hidden" style={{ height: "245px", borderRadius: "16px" }}>
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f616e", fontFamily: "var(--font-base)", marginTop: "10px", textAlign: "center", lineHeight: 1.3 }}>
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden md:block" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        {/* Header -centered */}
        <div className="max-w-7xl mx-auto px-6 text-center" style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ color: "#0f616e", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.8px", marginBottom: "20px" }}>
            Expert care for all rheumatic
            <br />
            symptoms and conditions
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#5E5E5E", fontFamily: "var(--font-base)", maxWidth: "600px", margin: "0 auto" }}>
            From osteoarthritis to complex autoimmune disorders, we diagnose and treat{" "}
            <strong style={{ color: "#ffffff", background: "#1AA3B5", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>rheumatic and autoimmune conditions</strong>.
          </p>
        </div>

        {/* Image carousel -full width with arrows */}
        <div className="relative">
          {/* Left arrow -white border circle, white arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            style={{ border: "2px solid #ffffff", backgroundColor: "transparent" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="#ffffff" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right arrow -white border circle, white arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            style={{ border: "2px solid #ffffff", backgroundColor: "transparent" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="#ffffff" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
          >
            {tripled.map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex-shrink-0 flex flex-col items-center cursor-pointer group" style={{ width: "272px", padding: "0 clamp(14px, 1.111vw, 16px)" }}>
                <div className="w-full overflow-hidden" style={{ height: "340px", borderRadius: "20px" }}>
                  <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                </div>
                <p className="w-full text-center" style={{ fontSize: "16px", fontWeight: 600, color: "#182439", fontFamily: "var(--font-base)", marginTop: "16px", lineHeight: 1.3, paddingInline: "6px" }}>
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default WhyRheuma
