import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import "./Hero.css"

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">

        <div className="home-hero__left">
          <h1 className="home-hero__title">
            Suffering with{" "}
            <span style={{ color: "#0f8c6e" }}>joint pain,</span>{" "}
            <span style={{ color: "#0f8c6e" }}>swollen joints,</span>{" "}
            morning stiffness?
          </h1>

          <p className="home-hero__body">
            You may be dealing with Rheumatoid Arthritis, Gout, or another rheumatic condition. Get a clear diagnosis and a treatment plan that actually fits your life.
          </p>

          <Link to="/book-appointment" className="group home-hero__cta">
            Book Consultation
            <span className="group-hover:bg-white/30 home-hero__cta-icon">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        <div className="home-hero__right">
          <img src="/hero.png" alt="Dr. Raghavendra H" className="home-hero__img" />
        </div>

      </div>
    </section>
  )
}

export default Hero
