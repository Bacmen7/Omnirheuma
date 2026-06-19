import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const featured = [
  { href: "/Rheumatoid-Arthritis", category: "Get started", title: "What is Rheumatoid Arthritis?", image: "/c1.webp" },
  { href: "/Rheumatoid-Arthritis", category: "Early signs", title: "Could morning stiffness be Rheumatoid Arthritis?", image: "/c2.webp" },
  { href: "/Rheumatoid-Arthritis", category: "Diagnosis", title: "How is Rheumatoid Arthritis diagnosed?", image: "/c1.webp" },
]

const categoryLinks = [
  { label: "Common subtypes & symptoms", href: "/Rheumatoid-Arthritis" },
  { label: "Treatment options", href: "/health-guide" },
  { label: "Rheumatology stats & science", href: "/blog" },
  { label: "Living with arthritis", href: "/health-guide" },
  { label: "Related symptoms & conditions", href: "/health-guide" },
]

const videos = [
  { image: "/content-thumbs/psa-video.webp", title: "What is Rheumatoid Arthritis? Causes, Symptoms & When To See A Doctor" },
  { image: "/content-thumbs/lupus-video.webp", title: "Osteoarthritis vs Rheumatoid Arthritis — What's the difference?" },
  { image: "/content-thumbs/fibromyalgia-video.webp", title: "How to recognise rheumatic disease: Key warning signs" },
]

const subtypes = [
  "Rheumatoid Arthritis",
  "Psoriatic Arthritis",
  "Ankylosing Spondylitis",
  "Osteoarthritis",
  "Lupus",
  "Gout",
  "Fibromyalgia",
  "Back & Neck Pain",
  "Sjögren's Syndrome",
  "Vasculitis",
  "Scleroderma",
]

const conditionCards = [
  { name: "Rheumatoid Arthritis", image: "/condition/Rheumatoid Arthritis (RA).webp", desc: "Autoimmune joint inflammation affecting 1.3M+ Americans. Learn about early diagnosis and modern treatments.", href: "/Rheumatoid-Arthritis" },
  { name: "Psoriatic Arthritis", image: "/condition/Psoriatic Arthritis.webp", desc: "Where skin meets joints. Understanding the psoriasis-arthritis connection and targeted therapies.", href: "#" },
  { name: "Osteoarthritis", image: "/condition/Osteoarthritis.webp", desc: "The most common form of arthritis. Evidence-based approaches to manage cartilage loss and pain.", href: "#" },
  { name: "Lupus", image: "/condition/Lupus.webp", desc: "A complex autoimmune disease affecting multiple organ systems. Expert guidance for flare management.", href: "#" },
  { name: "Gout", image: "/condition/Gout.webp", desc: "Caused by uric acid crystal deposits. Prevent flares with medication, diet, and lifestyle strategies.", href: "#" },
  { name: "Ankylosing Spondylitis", image: "/condition/Ankylosing Spondylitis (AS).webp", desc: "Chronic spinal inflammation that can fuse vertebrae. Early treatment preserves mobility and posture.", href: "#" },
  { name: "Fibromyalgia", image: "/condition/Fibromyalgia.webp", desc: "Widespread pain with fatigue and cognitive difficulties. Multi-modal treatment can restore quality of life.", href: "#" },
  { name: "Back & Neck Pain", image: "/condition/back.webp", desc: "Identifying whether spinal pain is mechanical or inflammatory is a critical distinction for treatment.", href: "#" },
]

function Conditions() {
  const [query, setQuery] = useState("")
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef(null)
  const scrollCarousel = (dir) => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" })
  }

  const prev = () => setCurrent((i) => (i === 0 ? featured.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === featured.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrent((i) => (i === featured.length - 1 ? 0 : i + 1))
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-ghost" style={{ fontFamily: "var(--font-base)" }}>
      <Header />

      <main>

        {/* ── 1. HERO SEARCH ── */}
        <section style={{ background: "#0f616e", padding: "40px 24px 72px", textAlign: "center" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(2.2rem,3.5vw,3rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.3px", margin: "0 auto 52px" }}>
              Browse rheumatic conditions<br/>reviewed by experts
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
        {query === "" && (
          <section style={{ padding: "48px 0", background: "#f5f5f5" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", height: "380px", background: "#0f616e" }}>

                {/* Slide image */}
                <img
                  src={featured[current].image}
                  alt={featured[current].title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />

                {/* Prev */}
                <button onClick={prev} aria-label="Previous"
                  style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.85)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
                  <ChevronLeft size={20} color="#0f2e33" />
                </button>

                {/* Next */}
                <button onClick={next} aria-label="Next"
                  style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.85)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
                  <ChevronRight size={20} color="#0f2e33" />
                </button>

                {/* Text overlay */}
                <Link to={featured[current].href} style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px", textDecoration: "none", zIndex: 10 }}>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "8px" }}>
                    {featured[current].category}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 300, lineHeight: 1.2, marginBottom: "20px" }}>
                    {featured[current].title}
                  </h2>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {featured.map((_, i) => (
                      <button key={i}
                        onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                        style={{ width: "10px", height: "10px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === current ? "#fff" : "rgba(255,255,255,0.35)", padding: 0, transition: "background 0.2s" }}
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
        <section style={{ padding: "48px 0", background: "#f5f5f5" }}>
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
        </section>


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

        {/* ── 8. EXPLORE BY SUBTYPE ── */}
        <section style={{ padding: "56px 0 64px", background: "#ffffff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 400, marginBottom: "32px" }}>Explore by subtype</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {subtypes.map((subtype, i) => (
                <Link key={i} to="/health-guide"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "50px", borderRadius: "100px", border: "1.5px solid #dde8e7", background: "#fff", padding: "0 22px", fontSize: "16px", color: "#0f2e33", textDecoration: "none", fontFamily: "var(--font-base)", transition: "all 0.15s", boxShadow: "0 1px 3px rgba(15,97,110,0.05)" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#0f616e"; e.currentTarget.style.color = "#0f616e" }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#dde8e7"; e.currentTarget.style.color = "#0f2e33" }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#9DE5D4", flexShrink: 0 }} />
                  {subtype}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <BriefingFooter />
    </div>
  )
}

export default Conditions
