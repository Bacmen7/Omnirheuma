import { Link } from "react-router-dom"
import specialists from "../data/specialists"

function Specialists() {
  const doc = specialists[0]

  return (
    <section className="py-16 md:py-24 pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "12px" }} className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Meet Our <span style={{ color: "#1AA3B5" }}>Specialist</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#5E5E5E", lineHeight: 1.7, fontFamily: "var(--font-base)" }}>
            Our board-certified expert represents the global frontier of autoimmune research and clinical care.
          </p>
        </div>

        {/* Single Doctor Card */}
        <div className="max-w-[320px] sm:max-w-[360px] mx-auto">
          <SpecialistCard doc={doc} />
        </div>
      </div>
    </section>
  )
}

function SpecialistCard({ doc }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <Link to={`/specialist/${doc.id}`} className="block overflow-hidden bg-[#e0f3f5]" style={{ borderRadius: "0" }}>
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full h-[300px] sm:h-[340px] object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
        />
      </Link>

      {/* Info */}
      <div style={{ paddingTop: "1rem" }}>
        <Link to={`/specialist/${doc.id}`} className="inline-block">
          <h3 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25, marginBottom: "0.25rem" }}>
            {doc.name}
          </h3>
        </Link>
        <p className="text-[13px]" style={{ color: "#5e5e5e", marginBottom: "0.75rem" }}>Rheumatologist</p>
        <Link
          to={`/specialist/${doc.id}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
          style={{ color: "#0f616e" }}
        >
          Read bio
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Specialists
