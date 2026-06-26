import { Link } from "react-router-dom"
import { MapPin, CalendarDays, Award, Stethoscope } from "lucide-react"

const meetCredentials = "MBBS · MD (Internal Medicine) · DM Clinical Immunology & Rheumatology"

const meetTags = [
  { label: "DM Gold Medalist", highlight: true },
  { label: "Clinical Immunology", highlight: false },
  { label: "Rheumatology", highlight: false },
  { label: "Autoimmune Disorders", highlight: false },
  { label: "Joint Disease Management", highlight: false },
  { label: "TN MGR University", highlight: true },
]

function MeetRheumatologist() {
  return (
    <section className="w-full bg-white" style={{ padding: "clamp(56px, 6vw, 96px) 0" }}>
      <div className="max-w-[1200px]" style={{ margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]" style={{ gap: "clamp(28px, 4vw, 48px)", alignItems: "start" }}>

          <div className="flex flex-col" style={{ gap: "14px" }}>
            <div style={{ background: "#e0f3f5", borderRadius: "20px", overflow: "hidden", aspectRatio: "3 / 4" }}>
              <img src="/raghav.webp" alt="Dr. Raghavendra H" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
            </div>
            <div className="flex items-start" style={{ gap: "12px", background: "#eef7f5", borderRadius: "16px", padding: "16px 18px" }}>
              <span className="flex items-center justify-center shrink-0" style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#0f616e", color: "#fff", marginTop: "2px" }}>
                <MapPin size={14} />
              </span>
              <div>
                <p style={{ color: "#0f2e33", fontSize: "14px", fontWeight: 700 }}>Omni Rheuma Clinic, Rachenahalli, Thanisandra</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#e86531", marginBottom: "12px" }}>Meet Your Rheumatologist</p>
            <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "12px" }}>Dr. Raghavendra H</h2>
            <p style={{ color: "#5e5e5e", fontSize: "14px", lineHeight: 1.6 }}>{meetCredentials}</p>
            <p style={{ color: "#5e5e5e", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>DM Gold Medalist, TN MGR University</p>

            <div style={{ background: "#e8f4f6", borderLeft: "3px solid #0f616e", borderRadius: "8px", padding: "22px 24px", marginBottom: "28px" }}>
              <p style={{ fontStyle: "italic", color: "#3f5258", fontSize: "15px", lineHeight: 1.7, marginBottom: "12px" }}>
                &ldquo;Most patients who come to me have spent years being told their pain is normal. It is not. Every joint condition has a name, a cause, and a treatment. My job is to find all three.&rdquo;
              </p>
              <p style={{ fontWeight: 700, color: "#0f2e33", fontSize: "13px" }}>Dr. Raghavendra H, DM Rheumatology</p>
            </div>

            <div className="grid grid-cols-3" style={{ gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "#fdeee5", borderRadius: "12px", padding: "20px 12px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", color: "#e86531", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1, marginBottom: "6px" }}>14+</p>
                <p style={{ color: "#5e5e5e", fontSize: "12px", fontWeight: 500 }}>Years of Experience</p>
              </div>
              <div style={{ background: "#fdeee5", borderRadius: "12px", padding: "20px 12px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", color: "#e86531", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1, marginBottom: "6px" }}>DM</p>
                <p style={{ color: "#5e5e5e", fontSize: "12px", fontWeight: 500 }}>Gold Medalist</p>
              </div>
              <div style={{ background: "#fdeee5", borderRadius: "12px", padding: "20px 12px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", color: "#e86531", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, lineHeight: 1, marginBottom: "6px" }}>15K+</p>
                <p style={{ color: "#5e5e5e", fontSize: "12px", fontWeight: 500 }}>Patients Treated</p>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#0f2e33", marginBottom: "12px", letterSpacing: "0.08em" }}>Conditions He Treats</p>
            <div className="flex flex-wrap" style={{ gap: "8px", marginBottom: "28px" }}>
              {["Rheumatoid Arthritis", "Osteoarthritis", "Lupus", "Gout", "Ankylosing Spondylitis", "Psoriatic Arthritis", "Fibromyalgia", "Osteoporosis", "Juvenile Arthritis", "Autoimmune Disorders"].map((cond) => (
                <span key={cond} className="inline-flex items-center" style={{ gap: "6px", borderRadius: "100px", padding: "6px 14px", fontSize: "13px", fontWeight: 500, border: "1px solid #dfe5e7", background: "#fff", color: "#0f2e33" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1AA3B5" }} />
                  {cond}
                </span>
              ))}
            </div>

            <Link to="/book-appointment" className="inline-flex items-center rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ gap: "8px", padding: "12px 24px", background: "#e86531" }}>
              <CalendarDays size={15} /> Book a Consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MeetRheumatologist
