import { useState } from "react"
import { Link } from "react-router-dom"

const doctors = [
  // { name: "Dr. Priya Menon", title: "Senior Consultant Rheumatologist", img: "/images/dr-elena.webp" },
  { name: "Dr. Raghavendra H", title: "Senior Rheumatologist", img: "/raghav.webp" },
  // { name: "Dr. Sarah Miller", title: "Clinical Rheumatologist", img: "/images/dr-sarah-miller.webp" },
  // { name: "Dr. James Chen", title: "Rheumatologist & Researcher", img: "/images/dr-james.webp" },
]

function MeetDoctors() {
  const [start, setStart] = useState(0)
  const canPrev = start > 0
  const canNext = start < doctors.length - 4

  return (
    <section style={{ backgroundColor: "#e0f3f5", padding: "4rem 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "0.75rem" }}>
            Meet Our Rheumatology Specialists
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#5e5e5e", margin: "0 auto", maxWidth: "560px" }}>
            Our board-certified expert represents the global frontier of autoimmune research and clinical care.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:flex md:justify-center md:gap-6 md:overflow-visible md:pb-0">
          {doctors.map((doc, i) => (
            <div key={i} className="min-w-[70vw] sm:min-w-[260px] md:min-w-0 md:w-[300px] snap-start flex flex-col">
              {/* Image */}
              <div className="overflow-hidden" style={{ backgroundColor: "#f5c6b0", borderRadius: 0 }}>
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-[280px] sm:h-[320px] object-cover object-top"
                />
              </div>
              {/* Info */}
              <div style={{ paddingTop: "1rem" }}>
                <h3 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25, marginBottom: "0.25rem" }}>
                  {doc.name}
                </h3>
                <p className="text-[13px]" style={{ color: "#5e5e5e", marginBottom: "0.75rem" }}>{doc.title}</p>
                <Link
                  to="/specialist/1"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                  style={{ color: "#0f616e" }}
                >
                  Read bio
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetDoctors
