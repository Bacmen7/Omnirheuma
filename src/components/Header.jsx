import { useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, ArrowRight, Phone } from "lucide-react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const [whatWeCoverOpen, setWhatWeCoverOpen] = useState(false)
  const [whatWeCoverMounted, setWhatWeCoverMounted] = useState(false)
  const [whatWeCoverVisible, setWhatWeCoverVisible] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const desktopNav = [
    { label: "Patient Education", to: "/health-guide" },
    { label: "Doctors", to: "/doctors" },
    { label: "Locations", to: "/locations" },
    { label: "About Us", to: "/about" },
  ]

  const mobileQuickLinks = [
    { label: "Conditions We Treat", type: "dropdown" },
    ...desktopNav,
  ]

  const conditions = [
    "Rheumatoid Arthritis",
    "Psoriatic Arthritis",
    "Lupus",
    "Osteoarthritis",
    "Gout",
    "Vasculitis",
    "Spondyloarthritis",
    "Ankylosing Spondylitis",
  ]

  // Track scroll for header shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile Menu animation
  useEffect(() => {
    let frame
    let visibleFrame
    if (mobileMenuOpen) {
      frame = requestAnimationFrame(() => {
        setMobileMenuMounted(true)
        visibleFrame = requestAnimationFrame(() => setMobileMenuVisible(true))
      })
    } else {
      frame = requestAnimationFrame(() => setMobileMenuVisible(false))
      const timer = setTimeout(() => setMobileMenuMounted(false), 350)
      return () => {
        cancelAnimationFrame(frame)
        clearTimeout(timer)
      }
    }
    return () => {
      cancelAnimationFrame(frame)
      if (visibleFrame) cancelAnimationFrame(visibleFrame)
    }
  }, [mobileMenuOpen])

  // Conditions We Treat animation
  useEffect(() => {
    let frame
    let visibleFrame
    if (whatWeCoverOpen) {
      frame = requestAnimationFrame(() => {
        setWhatWeCoverMounted(true)
        visibleFrame = requestAnimationFrame(() => setWhatWeCoverVisible(true))
      })
    } else {
      frame = requestAnimationFrame(() => setWhatWeCoverVisible(false))
      const timer = setTimeout(() => setWhatWeCoverMounted(false), 900)
      return () => {
        cancelAnimationFrame(frame)
        clearTimeout(timer)
      }
    }
    return () => {
      cancelAnimationFrame(frame)
      if (visibleFrame) cancelAnimationFrame(visibleFrame)
    }
  }, [whatWeCoverOpen])

  // Lock body scroll (mobile-safe)
  useEffect(() => {
    const isOpen = whatWeCoverOpen || mobileMenuOpen
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${window.scrollY}px`
      document.documentElement.style.overflow = "hidden"
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      document.documentElement.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
    return () => {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      document.documentElement.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [whatWeCoverOpen, mobileMenuOpen])

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const closeWhatWeCover = useCallback(() => setWhatWeCoverOpen(false), [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_20px_rgba(24,36,57,0.06)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="px-6 lg:px-10 h-[88px] flex items-center justify-between">
        {/* ===== Left: Logo ===== */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center" aria-label="Omni Rheuma home">
            <img src="/logo.png" alt="Omni Rheuma logo" className="h-28 w-28 object-contain" />
          </Link>
        </div>

        {/* ===== Center: Nav ===== */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <nav className="hidden md:flex items-center gap-1">
            {/* Conditions We Treat - Dropdown */}
            <button
              aria-expanded={whatWeCoverOpen}
              className={`relative inline-flex items-center gap-1 px-3.5 py-2 rounded-lg transition-all duration-200 ${
                whatWeCoverOpen
                  ? "bg-navy-deep/[0.06]"
                  : "hover:bg-navy-deep/[0.04]"
              }`}
              style={{ fontFamily: "var(--font-base)", fontSize: "15px", fontWeight: 400, lineHeight: "16px", color: whatWeCoverOpen ? "rgba(91,168,163,1)" : "#0f616e" }}
              onClick={() => {
                setWhatWeCoverOpen((prev) => !prev)
                setMobileMenuOpen(false)
              }}
              type="button"
            >
              Conditions We Treat
              <span
                className="material-symbols-outlined text-[16px] transition-transform duration-300"
                style={{ transform: whatWeCoverOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>

            {/* Regular nav links */}
            {desktopNav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative px-3.5 py-2 rounded-lg hover:bg-navy-deep/[0.04] transition-all duration-200"
                style={{ fontFamily: "var(--font-base)", fontSize: "15px", fontWeight: 400, lineHeight: "16px", color: "#0f616e" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ===== Right: Actions ===== */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Book Consultation CTA */}
          <Link
            to="/book-appointment"
            className="hidden md:inline-flex items-center gap-2 text-white pl-5 pr-4 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 hover:opacity-90 group"
            style={{ backgroundColor: "#e86531" }}
          >
            Book Consultation
            <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight size={14} />
            </span>
          </Link>

          {/* Mobile Phone Call */}
          <a
            href="tel:+918290638358"
            aria-label="Call clinic"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors"
            style={{ borderColor: "#e86531", color: "#e86531" }}
          >
            <Phone size={16} strokeWidth={2.5} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-navy-deep hover:bg-navy-deep/[0.04] transition-colors"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev)
              setWhatWeCoverOpen(false)
            }}
            type="button"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span
                className="absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300"
                style={{
                  transform: mobileMenuOpen ? "rotate(45deg)" : "translateY(-4px)",
                }}
              />
              <span
                className="absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300"
                style={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: mobileMenuOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300"
                style={{
                  transform: mobileMenuOpen ? "rotate(-45deg)" : "translateY(4px)",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ===== Mobile Full-Screen Menu ===== */}
      {mobileMenuMounted && (
        <div
          className="md:hidden flex flex-col"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)",
            opacity: mobileMenuVisible ? 1 : 0,
            transform: mobileMenuVisible ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: mobileMenuVisible ? "auto" : "none",
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 pt-5">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu} aria-label="Omni Rheuma home">
              <img src="/logo.png" alt="Omni Rheuma logo" className="h-24 w-24 object-contain" />
            </Link>
            <button
              className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center hover:bg-navy-deep/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-xl" style={{ pointerEvents: "none" }}>close</span>
            </button>
          </div>

          {/* Centered Nav Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 -mt-6 px-8">
            {mobileQuickLinks.map((item, index) => {
              const staggerDelay = mobileMenuVisible ? `${index * 60 + 80}ms` : "0ms"
              const linkStyle = {
                opacity: mobileMenuVisible ? 1 : 0,
                transform: mobileMenuVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}`,
              }
              const baseClass =
                "w-full max-w-xs flex items-center justify-between py-3.5 px-5 rounded-2xl text-[17px] font-semibold text-navy-deep hover:bg-white/80 transition-colors"

              if (item.type === "dropdown") {
                return (
                  <button
                    key={item.label}
                    className={baseClass}
                    style={linkStyle}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setTimeout(() => setWhatWeCoverOpen(true), 200)
                    }}
                    type="button"
                  >
                    {item.label}
                    <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                  </button>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={baseClass}
                  style={linkStyle}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                </Link>
              )
            })}
          </nav>

          {/* Bottom CTA */}
          <div
            className="px-8 pb-10 flex flex-col items-center gap-3"
            style={{
              opacity: mobileMenuVisible ? 1 : 0,
              transform: mobileMenuVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 400ms, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 400ms",
            }}
          >
            <Link
              to="/book-appointment"
              className="w-full max-w-[300px] text-center text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-[0_4px_20px_rgba(232,101,49,0.3)] hover:opacity-90"
              style={{ backgroundColor: "#e86531" }}
              onClick={closeMobileMenu}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}

      {/* ===== Conditions We Treat - Desktop Dropdown ===== */}
      {/* ===== Conditions We Treat - Full Page Slide Down (Desktop) ===== */}
      {whatWeCoverMounted && (
        <div
          className="hidden md:block fixed inset-x-0 top-[88px] z-40"
          style={{
            maxHeight: whatWeCoverVisible ? "85vh" : "0",
            overflow: "hidden",
            transition: "max-height 800ms cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <div className="bg-[#f0f5f5] border-t border-gray-200">
            <div className="max-w-[1240px] mx-auto px-10 py-12">
              <div className="flex justify-center">
                <div
                  className="w-full"
                  style={{
                    opacity: whatWeCoverVisible ? 1 : 0,
                    transform: whatWeCoverVisible ? "translateY(0)" : "translateY(-10px)",
                    transition: "opacity 500ms ease-out 250ms, transform 500ms ease-out 250ms",
                  }}
                >
                  <div className="grid grid-cols-4 gap-x-10 gap-y-12 text-center">
                    {conditions.map((item) => {
                      const conditionRoutes = { "Rheumatoid Arthritis": "/Rheumatoid-Arthritis", "Gout": "/gout", "Osteoarthritis": "/osteoarthritis" }
                      const to = conditionRoutes[item]
                      return (
                        <div key={item} className="flex justify-center">
                          {to ? (
                            <Link
                              to={to}
                              className="inline-flex items-center justify-center gap-1 text-[#0f616e] font-semibold text-[15px] hover:underline"
                              onClick={closeWhatWeCover}
                            >
                              {item}
                              <ArrowUpRight size={14} />
                            </Link>
                          ) : (
                            <a
                              className="inline-flex items-center justify-center gap-1 text-[#0f616e] font-semibold text-[15px] hover:underline cursor-pointer"
                              onClick={closeWhatWeCover}
                            >
                              {item}
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Treatments below */}
                  {/* <div className="mt-12 pt-10 border-t border-gray-200">
                    <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#0f616e", marginBottom: "40px" }}>Treatment Options</h3>
                    <div className="grid grid-cols-4 gap-x-12 gap-y-8">
                      {treatments.map((item) => (
                        <div key={item}>
                          <a
                            className="flex items-center gap-1 text-[#0f616e] font-semibold text-[15px] hover:underline cursor-pointer"
                            onClick={closeWhatWeCover}
                          >
                            {item}
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Conditions We Treat - Mobile Full-Screen ===== */}
      {whatWeCoverMounted && (
        <div
          className="md:hidden flex flex-col overflow-y-auto"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)",
            opacity: whatWeCoverVisible ? 1 : 0,
            transform: whatWeCoverVisible ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Top Bar: Back + Close */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-navy-muted transition-colors"
              onClick={() => {
                setWhatWeCoverOpen(false)
                setTimeout(() => setMobileMenuOpen(true), 200)
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
            <button
              className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center"
              onClick={closeWhatWeCover}
              type="button"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pt-4 pb-10">
            <h3
              className="text-[26px] mb-2 text-navy-deep"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease 80ms, transform 0.35s ease 80ms",
              }}
            >
              Conditions We Treat
            </h3>
            <p
              className="text-sm text-navy-muted mb-8"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease 150ms, transform 0.35s ease 150ms",
              }}
            >
              Explore the conditions we treat and the treatment options available.
            </p>

            {/* Conditions */}
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-bold text-navy-muted/70 mb-4"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.35s ease 200ms, transform 0.35s ease 200ms",
              }}
            >
              Conditions
            </p>
            <div className="space-y-1 mb-8">
              {conditions.map((item, index) => {
                const condRoutes = { "Rheumatoid Arthritis": "/Rheumatoid-Arthritis", "Gout": "/gout", "Osteoarthritis": "/osteoarthritis" }
                const condTo = condRoutes[item]
                const condStyle = {
                  opacity: whatWeCoverVisible ? 1 : 0,
                  transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.35s ease ${230 + index * 40}ms, transform 0.35s ease ${230 + index * 40}ms`,
                }
                const rightIcon = (
                  <span className="w-7 h-7 rounded-full bg-[#a0e2e4] inline-flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={15} className="text-[#0f616e]" />
                  </span>
                )
                const condInner = (
                  <>
                    <span className="flex items-center gap-3.5 text-navy-deep font-semibold text-[15px]">
                      {item}
                    </span>
                    {rightIcon}
                  </>
                )
                return (
                  <div key={item} className="border-b border-gray-100" style={condStyle}>
                    {condTo ? (
                      <Link
                        to={condTo}
                        className="flex items-center justify-between py-4"
                        onClick={closeWhatWeCover}
                      >
                        {condInner}
                      </Link>
                    ) : (
                      <a
                        className="flex items-center justify-between py-4 cursor-pointer"
                        onClick={closeWhatWeCover}
                      >
                        {condInner}
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Treatments */}
            {/* <p
              className="text-[11px] tracking-[0.2em] uppercase font-bold text-navy-muted/70 mb-4"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.35s ease 500ms, transform 0.35s ease 500ms",
              }}
            >
              Treatments
            </p>
            <div className="space-y-1 mb-8">
              {treatments.map((item, index) => {
                const treatStyle = {
                  opacity: whatWeCoverVisible ? 1 : 0,
                  transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.35s ease ${530 + index * 40}ms, transform 0.35s ease ${530 + index * 40}ms`,
                }
                return (
                  <a
                    key={item}
                    className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer"
                    onClick={closeWhatWeCover}
                    style={treatStyle}
                  >
                    <span className="flex items-center gap-3.5 text-navy-deep font-semibold text-[15px]">
                      {item}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#e86531]/15 inline-flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={15} className="text-[#e86531]" />
                    </span>
                  </a>
                )
              })}
            </div> */}

            {/* CTA */}
            <div
              className="rounded-2xl bg-gradient-to-r from-[#1AA3B5]/10 to-[#e86531]/10 p-5"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 650ms, transform 0.4s ease 650ms",
              }}
            >
              <p className="text-[14px] font-semibold text-navy-deep mb-2">Not sure where to start?</p>
              <p className="text-[13px] text-navy-muted mb-3">Our specialists can help identify your condition and the right treatment plan.</p>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#e86531" }}
                onClick={closeWhatWeCover}
              >
                Book Consultation
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header
