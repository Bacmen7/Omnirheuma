import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="home-hero" style={{ fontFamily: "usual, system-ui, sans-serif", marginTop: 0, paddingTop: 0 }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "calc(100vh - 72px)",
      }}>

        {/* LEFT */}
        <div style={{
          flex: "0 0 50%",
          backgroundColor: "#e0f3f5",
          padding: "5rem 3rem 4rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "1.4rem",
        }}>
          {/* Heading */}
          <h1 style={{ fontSize: "clamp(36px, 4vw, 62px)", fontWeight: 400, lineHeight: "1.15", color: "#0F616E", margin: 0, fontFamily: "loretta, Georgia, serif" }}>
            Suffering with{" "}
            <span style={{ color: "#0f8c6e" }}>joint pain,</span>{" "}
            <span style={{ color: "#0f8c6e" }}>swollen joints,</span>{" "}
            morning stiffness?
          </h1>

          {/* Body */}
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#5a6577", margin: 0, maxWidth: "420px" }}>
            You may be dealing with Rheumatoid Arthritis, Gout, or another rheumatic condition. Get a clear diagnosis and a treatment plan that actually fits your life.
          </p>

          {/* CTA */}
          <Link
            to="/book-appointment"
            className="group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#e86531",
              color: "#fff",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.025em",
              padding: "10px 16px 10px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              alignSelf: "flex-start",
              marginTop: "4px",
              transition: "opacity 300ms ease",
            }}
          >
            Book Consultation
            <span
              className="group-hover:bg-white/30"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "999px",
                backgroundColor: "rgba(255,255,255,0.2)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 300ms ease",
              }}
            >
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* RIGHT: Doctor image */}
        <div style={{
          flex: "0 0 50%",
          backgroundColor: "#cfe8e3",
          position: "relative",
          minHeight: "calc(100vh - 72px)",
        }}>
          <img
            src="/hero.png"
            alt="Dr. Raghavendra H"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
