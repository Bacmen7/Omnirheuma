import { useEffect } from "react"
import Header from "../components/Header"
import MeetDoctors from "../components/MeetDoctors"
import BriefingFooter from "../components/BriefingFooter"
import CtaBanner from "../components/CtaBanner"

function Doctors() {
  useEffect(() => {
    document.title = "Our Doctors | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  return (
    <div className="landing-page bg-[#F5F5F5] min-h-screen flex flex-col" style={{ fontFamily: "var(--font-base)" }}>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="custom-approach-section relative overflow-hidden" style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4", marginBottom: "16px" }}>
              Our Team
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-1.4px", color: "#ffffff", marginBottom: "1.25rem" }}>
              Meet Our Specialists
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-base)", margin: 0, maxWidth: "600px" }}>
              Our board-certified expert represents the global frontier of autoimmune research and clinical care.
            </p>
          </div>
          <div style={{ lineHeight: 0, backgroundColor: "#0f616e" }}>
            <svg className="block w-full h-[56px]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                fill="#e0f3f5"
              />
            </svg>
          </div>
        </section>

        {/* Doctor Cards - reuse existing MeetDoctors component */}
        <MeetDoctors />

        <CtaBanner spacerColor="#e0f3f5" />
      </main>
      <BriefingFooter />
    </div>
  )
}

export default Doctors
