import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import specialists from "../data/specialists"

function DoctorProfile() {
  const { id } = useParams()
  const doctor = specialists.find((s) => s.id === Number(id))
  const [activeTab, setActiveTab] = useState("overview")
  const [openSection, setOpenSection] = useState(null)
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)

  if (!doctor) {
    return (
      <div className="landing-page min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Doctor not found</h1>
            <Link to="/" className="text-teal-soft font-semibold underline">Back to home</Link>
          </div>
        </div>
        <BriefingFooter />
      </div>
    )
  }

  const toggle = (section) => setOpenSection(openSection === section ? null : section)

  const scrollToSection = (tabId) => {
    setActiveTab(tabId)
    const element = document.getElementById(tabId)
    if (element) {
      const offset = 120
      const pos = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: pos - offset, behavior: "smooth" })
    }
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "background", label: "Background" },
    { id: "reviews", label: "Reviews" },
    { id: "clinic", label: "Clinic" },
  ]

  const galleryImages = [
    { src: "/d3.webp", alt: "Dr. Raghavendra with patient" },
    { src: "/d2.webp", alt: "Doctor Portrait" },
    { src: "/d1.webp", alt: "Dr. Raghavendra H" },
  ]

  const changeGalleryImage = (direction) => {
    setActiveGalleryImage((current) => {
      if (direction === "next") return (current + 1) % galleryImages.length
      return (current - 1 + galleryImages.length) % galleryImages.length
    })
  }

  return (
    <div className="landing-page min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header + Gallery + Tabs section */}
        <div className="bg-[#0f616e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16">

          {/* Doctor Header */}
          <div style={{ marginBottom: "32px", marginTop: "16px", paddingBottom: "32px" }} className="sm:mt-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1 max-w-[900px]">
                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(52px, 6vw, 80px)", lineHeight: "1.1", color: "#ffffff", marginBottom: "24px" }}>
                  {doctor.name}
                </h1>
                <p style={{ fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.65", marginBottom: "14px", color: "rgba(255,255,255,0.7)", maxWidth: "900px" }}>
                  MBBS, MD - General Medicine, DM - Clinical Immunology and Rheumatology
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: "1.7", marginBottom: "16px", color: "rgba(255,255,255,0.85)" }}>
                  <span>Rheumatologist</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                  <span>14 Years Exp</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" style={{ color: "rgba(255,255,255,0.85)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Hebbal, Bengaluru
                  </span>
                </div>
              </div>

              <div className="hidden lg:block w-full max-w-[320px] shrink-0">
                <div className="overflow-hidden bg-white" style={{ borderRadius: "6px" }}>
                  <div className="relative w-full" style={{ height: "300px", background: "linear-gradient(135deg, #D4F3F2 0%, #e8f4f8 50%, #EEF2F9 100%)" }}>
                    <img src={doctor.image || "/raghav.webp"} alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Image Gallery
          <div className="pb-6 sm:pb-8 md:pb-10">
          <div className="max-w-7xl mx-auto" style={{ paddingTop: "8px" }}>
          <div className="relative overflow-hidden bg-gray-100 rounded-xl sm:rounded-2xl h-[220px] sm:h-[320px] lg:h-[430px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeGalleryImage * 100}%)` }}
            >
              {galleryImages.map((image) => (
                <div key={image.src} className="relative h-full w-full shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => changeGalleryImage("prev")}
              aria-label="Previous image"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 text-[#0f616e] shadow-md flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => changeGalleryImage("next")}
              aria-label="Next image"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 text-[#0f616e] shadow-md flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div className="absolute left-0 right-0 bottom-4 flex items-center justify-center gap-2 lg:hidden">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveGalleryImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-2 transition-all ${index === activeGalleryImage ? "w-7 bg-white" : "w-2 bg-white/60 hover:bg-white/80"}`}
                  style={{ borderRadius: "9999px" }}
                />
              ))}
            </div>

            <div className="absolute right-4 bottom-4 hidden sm:flex items-center gap-2 bg-black/45 text-white px-3 py-1.5" style={{ borderRadius: "9999px", fontFamily: "var(--font-base)", fontSize: "12px", fontWeight: 600 }}>
              <span>{activeGalleryImage + 1}</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>/</span>
              <span>{galleryImages.length}</span>
            </div>

            <div className="absolute inset-x-4 sm:inset-x-6 bottom-7 pointer-events-none">
              <div className="hidden lg:flex gap-2 justify-start">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveGalleryImage(index)}
                    className={`pointer-events-auto h-16 w-24 overflow-hidden border-2 bg-white transition-all ${index === activeGalleryImage ? "border-white opacity-100" : "border-white/60 opacity-70 hover:opacity-100"}`}
                    style={{ borderRadius: "8px" }}
                  >
                    <img src={image.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          </div>
          </div>
          */}

        </div>
        {/* Wavy bottom edge */}
        <div style={{ lineHeight: 0, backgroundColor: "#0f616e" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "56px" }}>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#F5F5F5" />
          </svg>
        </div>
        </div>

          {/* Mobile doctor summary card */}
          <div className="bg-[#F5F5F5] lg:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-3">
            <div className="overflow-hidden bg-white" style={{ borderRadius: "6px" }}>
              <div className="flex items-center gap-4 p-4">
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #D4F3F2 0%, #e8f4f8 50%, #EEF2F9 100%)" }}>
                  <img src="/raghav.webp" alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#0f616e] truncate" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "18px", lineHeight: "1.2", marginBottom: "4px" }}>{doctor.name}</h3>
                  <p style={{ fontFamily: "var(--font-base)", fontWeight: 500, fontSize: "12px", color: "#5a6577", marginBottom: "8px" }}>Rheumatologist</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span style={{ fontFamily: "var(--font-base)", fontSize: "12px", color: "#0f616e" }}><span style={{ fontWeight: 600 }}>14 Years</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Experience</span></span>
                    <span style={{ fontFamily: "var(--font-base)", fontSize: "12px", color: "#0f616e" }}><span style={{ fontWeight: 600 }}>Hebbal,</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Bengaluru</span></span>
                    <span style={{ fontFamily: "var(--font-base)", fontSize: "11px", fontWeight: 500, color: "#16a34a" }}>Verified Profile</span>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <a href="#" className="block w-full py-2.5 bg-[#1AA3B5] text-white text-center hover:bg-[#9ae5e1] transition-colors" style={{ borderRadius: "8px", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "13px" }}>Book Online</a>
              </div>
            </div>
          </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-2 mb-4">
            <div className="flex gap-2 sm:gap-3 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${activeTab === tab.id ? "bg-[#0f616e] text-white" : "bg-[#EEF2F9] text-gray-500 hover:text-[#0f616e]"}`}
                  style={{ borderRadius: "25px" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          </div>

        {/* Main Content */}
        <div className="bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">

              {/* Overview */}
              <section id="overview">
                <h2 className="text-[#0f616e]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px", marginBottom: "20px" }}>Overview</h2>
                <p className="text-xs sm:text-sm text-gray-500" style={{ marginBottom: "16px" }}>About</p>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-justify sm:text-left" style={{ fontFamily: "var(--font-base)", fontWeight: 400, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>
                  {doctor.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div style={{ marginTop: "32px" }}>
                  <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Specializations</h3>
                  <div className="flex flex-wrap gap-2" style={{ marginBottom: "24px" }}>
                    {["Rheumatologist"].map((spec, i) => (
                      <span key={i} className="text-xs sm:text-sm text-gray-600 bg-[#EEF2F9] px-3 py-1.5 rounded-full">{spec}</span>
                    ))}
                  </div>
                  <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Field of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((item, i) => (
                      <span key={i} className="text-xs sm:text-sm text-gray-600 bg-[#EEF2F9] px-3 py-1.5 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Background / Experience */}
              <section id="background">
                <h2 className="text-[#0f616e]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px", marginBottom: "20px" }}>Experience & Qualifications</h2>

                <div style={{ marginBottom: "32px" }}>
                  <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Education</h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {doctor.education.map((item, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-[#0f616e] rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-sm sm:text-base" style={{ fontFamily: "var(--font-base)", fontWeight: 400, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Awards & Achievements</h3>
                  <ul className="space-y-2">
                    {doctor.awards.map((item, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-[#0f616e] rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-sm sm:text-base" style={{ fontFamily: "var(--font-base)", fontWeight: 400, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Talks & Publications</h3>
                  <ul className="space-y-2">
                    {doctor.publications.map((item, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-[#0f616e] rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-sm sm:text-base" style={{ fontFamily: "var(--font-base)", fontWeight: 400, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Languages Spoken</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang, i) => (
                      <span key={i} className="text-sm text-gray-600 bg-[#EEF2F9] px-3 py-1.5" style={{ borderRadius: "25px" }}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Patient Stories (inline like boss version) */}
              <section id="reviews">
                <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                  <h2 className="text-[#0f616e]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px" }}>Patient Stories</h2>
                </div>
                <p className="text-sm text-gray-500" style={{ marginBottom: "16px" }}>
                  Real experiences from verified patients ·{" "}
                  <a href="https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info" target="_blank" rel="noopener noreferrer" className="text-teal-soft font-medium hover:underline">
                    Source: Practo
                  </a>
                </p>
                <PatientStoriesInline />
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* FAQs */}
              <section>
                <h2 className="text-[#0f616e]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(22px, 4vw, 34px)", lineHeight: "1.2", marginBottom: "24px" }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const isOpen = openSection === `faq-${i}`
                    return (
                      <div key={i} className="bg-white overflow-hidden transition-all" style={{ borderRadius: "12px" }}>
                        <button onClick={() => toggle(`faq-${i}`)} className="flex items-center justify-between w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left gap-3">
                          <h3 className="text-sm sm:text-base text-[#0f616e] leading-snug" style={{ fontFamily: "var(--font-base)", fontWeight: 500 }}>
                            {faq.question}
                          </h3>
                          <span className="w-7 h-7 flex items-center justify-center shrink-0 transition-colors" style={{ borderRadius: "50%", backgroundColor: isOpen ? "#1AA3B5" : "#EEF2F9", color: "#0f616e", fontSize: "16px", fontWeight: 500 }}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Clinic Locations */}
              <section id="clinic">
                <h2 className="text-[#0f616e]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px", marginBottom: "8px" }}>Clinic Locations</h2>
                <p className="text-gray-500 text-sm sm:text-base" style={{ marginBottom: "24px" }}>Dr. Raghavendra H currently consults at:</p>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    {
                      name: "Omni Rheuma Clinics: Rachenahalli, Thanisandra",
                      area: "Rachenahalli, Bangalore",
                      rating: 4.0,
                      address: "No.42 And 25, 1st Floor, 80 Feet Road, Dr Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Bengaluru 560077",
                      timings: [
                        { days: "Mon - Sat", time: "04:00 PM - 07:00 PM" },
                      ],
                      fee: "₹1200",
                      bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
                      featured: true,
                    },
                    {
                      name: "Manipal Hospital - Hebbal",
                      area: "Hebbal, Bangalore",
                      rating: 3.5,
                      address: "Kirloskar Business Park, Bellary Road, Landmark: Opposite Dairy Form & Near Esteem Mall, Bangalore",
                      timings: [
                        { days: "Mon, Wed, Fri", time: "10:00 AM - 04:00 PM" },
                        { days: "Tue", time: "04:30 PM - 06:30 PM" },
                        { days: "Sat", time: "09:00 AM - 10:30 AM" },
                      ],
                      fee: "₹1190",
                      bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
                    },
                    {
                      name: "Manipal Hospital - Yelahanka",
                      area: "Yelahanka, Bangalore",
                      rating: 5.0,
                      address: "Sy Number 23/3, Venkatala Village, Landmark: Next to Brigade Honda Showroom, Bangalore",
                      timings: [
                        { days: "Mon, Wed, Fri", time: "10:00 AM - 12:00 PM" },
                      ],
                      fee: "₹1200",
                      bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
                    },
                  ].map((loc, idx) => (
                    <div key={idx} className="bg-white overflow-hidden" style={{ borderRadius: "16px", border: loc.featured ? "2px solid #0f616e" : "1px solid #eaeef3", boxShadow: loc.featured ? "0 4px 24px rgba(15,97,110,0.12)" : "none" }}>
                      <div className="flex flex-col sm:flex-row">
                        {/* Left -Info */}
                        <div className="flex-1 min-w-0 p-4 sm:p-6 lg:px-7">
                          {loc.featured && (
                            <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", backgroundColor: "#0f616e", color: "#fff", padding: "2px 10px", borderRadius: "9999px", display: "inline-block", marginBottom: "6px" }}>
                              Our Clinic
                            </span>
                          )}
                          <h3 className="text-base sm:text-[17px]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, lineHeight: 1.3, color: "#0f616e", marginBottom: "4px" }}>{loc.name}</h3>
                          <p style={{ fontFamily: "var(--font-base)", fontSize: "13px", color: "#8a94a6", marginBottom: "6px" }}>{loc.area}</p>
                          <p style={{ fontFamily: "var(--font-base)", fontSize: "12px", color: "#8a94a6", lineHeight: 1.6, marginBottom: "12px" }}>📍 {loc.address}</p>
                          <div className="flex flex-col gap-2 sm:gap-1.5">
                            {loc.timings.map((t, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <svg className="w-3.5 h-3.5 text-[#1AA3B5] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span className="flex min-w-0 flex-col sm:flex-row sm:items-baseline sm:gap-1.5" style={{ fontFamily: "var(--font-base)", fontSize: "13px", lineHeight: 1.45 }}>
                                  <span style={{ fontWeight: 600, color: "#0f616e" }}>{t.days}</span>
                                  <span className="whitespace-normal sm:whitespace-nowrap" style={{ color: "#8a94a6" }}>{t.time}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Right -Embedded Map */}
                        <a
                          href={`https://www.google.com/maps/search/${encodeURIComponent(loc.name + ", Bangalore")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block shrink-0 relative group w-full sm:w-[180px] h-40 sm:h-auto min-h-[150px] sm:min-h-[140px]"
                        >
                          <iframe
                            title={loc.name}
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.name + ", Bangalore")}&output=embed&z=14`}
                            className="w-full h-full absolute inset-0 pointer-events-none"
                            style={{ border: 0 }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors flex items-center justify-center">
                            <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Desktop sidebar - sticky with image */}
              <div className="hidden lg:block sticky top-24">
                <div className="overflow-hidden bg-white" style={{ borderRadius: "6px" }}>
                  {/* Image with gradient bg */}
                  <div className="relative w-full" style={{ height: "280px", background: "linear-gradient(135deg, #D4F3F2 0%, #e8f4f8 50%, #EEF2F9 100%)" }}>
                    <img src="/raghav.webp" alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                  </div>
                  {/* Info */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-[#0f616e]" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "24px", lineHeight: "1.2", marginBottom: "6px" }}>{doctor.name}</h3>
                    <p style={{ fontFamily: "var(--font-base)", fontWeight: 500, fontSize: "13px", color: "#5a6577", marginBottom: "16px" }}>Rheumatologist</p>

                    <div className="space-y-3" style={{ marginBottom: "20px" }}>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-[16px] h-[16px] text-[#0f616e] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "13px", color: "#0f616e" }}><span style={{ fontWeight: 600 }}>14 Years</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Experience</span></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-[16px] h-[16px] text-[#0f616e] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "13px", color: "#0f616e" }}><span style={{ fontWeight: 600 }}>Hebbal,</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Bengaluru</span></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-[16px] h-[16px] text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Verified Profile</span>
                      </div>
                    </div>

                    <a href="#" className="block w-full py-2.5 bg-[#1AA3B5] text-white text-center hover:bg-[#9ae5e1] transition-colors" style={{ borderRadius: "8px", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "13px" }}>Book Online</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Book an Appointment CTA */}
      <section className="w-full flex flex-col overflow-visible" style={{ backgroundColor: "#F5F5F5" }}>
        {/* Wave SVG */}
        <svg
          className="w-full h-[32px] sm:h-[90px] md:h-[120px] text-[#0f616e] block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
            fill="currentColor"
          />
        </svg>

        {/* Content */}
        <div className="bg-[#0f616e] w-full">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24 pt-4 sm:pt-10 text-center flex flex-col items-center">
            <h2
              className="mx-auto max-w-[860px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 4vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                fontWeight: 400,
                color: "#ffffff",
                marginBottom: "clamp(12px, 3vw, 24px)",
              }}
            >
              Book an Appointment
            </h2>
            <p
              className="max-w-2xl mx-auto text-sm sm:text-base"
              style={{
                fontFamily: "var(--font-base)",
                fontWeight: 300,
                lineHeight: "1.75",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "clamp(20px, 4vw, 40px)",
              }}
            >
              Start your journey to better health with a specialist who understands autoimmune conditions inside-out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-sm sm:text-[15px] transition-all hover:opacity-90 text-center w-full sm:w-auto"
                style={{ backgroundColor: "#F97316", color: "#ffffff", padding: "14px 28px" }}
              >
                Schedule An Appointment
              </a>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm sm:text-[15px] text-gray-100 opacity-90">or</span>
                <a
                  href="tel:+918290638358"
                  className="text-sm sm:text-[15px] font-semibold underline decoration-2 underline-offset-[6px] hover:text-[#1AA3B5] transition-colors text-white"
                >
                  call +91 82906 38358
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BriefingFooter />
    </div>
  )
}

/* ── Data ── */

const faqs = [
  { question: "Why do patients visit Dr. Raghavendra H?", answer: "Patients visit Dr. Raghavendra H, a leading Consultant - Rheumatologist at Manipal Hospitals Hebbal - Bengaluru, for expert care and advanced treatments. Known for accurate diagnoses and patient centric care, Dr. Raghavendra H is a trusted choice for exceptional medical support." },
  { question: "What does Dr. Raghavendra H specialise in?", answer: "Dr. Raghavendra H specialises in managing Rheumatoid Arthritis, Spondyloarthritis, Psoriatic Arthritis, Vasculitis, SLE and Other Systemic Autoimmune Illness, and Intra-Articular Injections." },
  { question: "How can I book an appointment with Dr. Raghavendra H?", answer: "To book an appointment with Dr. Raghavendra H at Manipal Hospitals Hebbal - Bengaluru, please call 1800 102 5555. Our dedicated team will assist you in scheduling a convenient time for your consultation." },
  { question: "What are Dr. Raghavendra H's years of experience and qualifications?", answer: "Dr. Raghavendra H has extensive experience and qualifications in Rheumatology at Manipal Hospitals Hebbal - Bengaluru. With expertise spanning MBBS, MD (Internal Medicine), DM (Rheumatology & Clinical Immunology), bringing a wealth of knowledge and skill to their practice, ensuring top-notch patient care. Dr. Raghavendra H has also published numerous articles and publications in the field of Rheumatology." },
  { question: "What should I bring to my first appointment with Dr. Raghavendra H?", answer: "For your initial appointment with Dr. Raghavendra H, please bring any relevant medical records, including previous imaging scans, laboratory results, and medication lists. It's important to provide a detailed medical history and any pertinent information about your condition. If you have insurance, please bring your insurance card and any necessary referral documents. This will help facilitate a comprehensive evaluation and discussion during your appointment." },
]

const patientStories = [
  { name: "Ramakrishna Kakumani", initial: "R", verified: true, time: "8 months ago", visitedFor: null, tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money"], text: "My mother-in-law had been undergoing treatment for joint pains at KIMS Ongole for over two years, but unfortunately, there was no improvement. The doctor used to prescribe heavy medications every month, and eventually, her condition worsened.\n\nWe then came across Dr. Raghavendra H, Rheumatologist (TriLife) through the web. He is very friendly, approachable, and, most importantly, his treatment is highly effective. He focuses on identifying the root cause of the problem and prescribes only minimal medication.\n\nAlthough we are based in Andhra, we travel to Bangalore every three months to consult Dr. Raghavendra H sir. Her symptoms are now under control, and we are very happy with the treatment she is receiving." },
  { name: "T V Joy", initial: "T", verified: true, time: "3 years ago", visitedFor: null, tags: [], text: "First thing I want to say is that Dr. Raghavendra is always approachable, which is not the case with many others. He is the second Doctor I visited for the Arthritis problem of my wife and I am completely satisfied with his way of treatment and interaction with us. Most importantly he is never in a hurry and spend lot of time to comfort the patient." },
  { name: "Shoma Nair", initial: "S", verified: true, time: "3 years ago", visitedFor: null, tags: [], text: "I have been visiting Dr. Raghavendra for a year now for my mother Arthritis Management and I can easily say, he is one fine doctor in his field. He does thorough examination and is compassionate, and warm towards patients." },
  { name: "K K Mondal", initial: "K", verified: true, time: "a year ago", visitedFor: "Systemic Sclerosis", tags: [], text: "Extremely helpful appointment with Dr Raghavendra H for my mother-in-law's scleroderma treatment. The explanation of her health issues and management protocol advice was awesome." },
  { name: "Dharmaiah Chowdappa", initial: "D", verified: true, time: "a year ago", visitedFor: "Arthritis Management", tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money"], text: "Dr Raghavendra H is a very Good Doctor with immense Knowledge in the field. He is so cordial and friendly. I am highly satisfied with his Treatment and the service is Exemplary." },
  { name: "Purushotham", initial: "P", verified: true, time: "a year ago", visitedFor: "Rheumatic Arthritis", tags: [], text: "Very good doctor. My rheumatic arthritis pain reduced 80%. Doctor is very friendly. I like the treatment. Now I am walking without any pain in my joint." },
  { name: "Arpita Bhunia", initial: "A", verified: true, time: "2 years ago", visitedFor: "Knee Arthritis", tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money", "Wait time"], text: "Our doctor is very friendly and good human being... we are satisfied with Dr. Raghavendra sir... thank you sir." },
  { name: "Viraj S.", initial: "V", verified: true, time: "3 years ago", visitedFor: "Lupus", tags: [], text: "It is nice talking to Dr Raghavendra, made patient comfortable to discuss the symptoms. Didn't go to review the blood test reports, rather did the complete physical examination and review all reports to explain the situation very logically and in simple language.\n\nI would definitely recommend this doctor for others and best for those who reside in North Bengaluru." },
]

/* ── Components ── */

function PatientStoriesInline() {
  const [selectedStory, setSelectedStory] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? patientStories : patientStories.slice(0, 4)

  return (
    <>
      <div className="space-y-3 sm:space-y-4">
        {displayed.map((r, idx) => (
          <div key={idx} className="bg-white p-4 sm:p-5" style={{ borderRadius: "16px" }}>
            <div className="flex items-center gap-2.5 sm:gap-3" style={{ marginBottom: "10px" }}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 bg-[#EEF2F9] text-[#0f616e]">{r.initial}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <h4 className="font-semibold text-[#0f616e] text-sm">{r.name}</h4>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs bg-[#1AA3B5] text-white px-1.5 sm:px-2 py-0.5" style={{ borderRadius: "25px" }}>
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{r.time}</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1" style={{ marginBottom: "8px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {r.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {r.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#EEF2F9] text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            )}
            {r.visitedFor && (
              <div className="inline-block text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full mb-3">Visited for: {r.visitedFor}</div>
            )}
            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-base)", fontWeight: 400, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{r.text}</p>
            <button onClick={() => setSelectedStory(r)} className="text-[#0f616e] text-sm font-medium hover:underline mt-2">Read more</button>
          </div>
        ))}
      </div>

      {patientStories.length > 4 && (
        <button onClick={() => setShowAll(!showAll)} className="mt-4 text-[#0f616e] text-sm font-medium hover:underline">
          {showAll ? "Show less" : `Show all stories (${patientStories.length})`}
        </button>
      )}

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setSelectedStory(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto p-5 sm:p-8 animate-[slideUp_0.3s_ease-out]" style={{ borderRadius: "20px" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedStory(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 text-[#0f616e]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-gray-200 text-gray-600 shrink-0">{selectedStory.initial}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-[#0f616e] text-sm">{selectedStory.name}</h4>
                  {selectedStory.verified && (
                    <span className="inline-flex items-center gap-1 text-xs bg-[#1AA3B5] text-white px-2 py-0.5" style={{ borderRadius: "25px" }}>Verified</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                  <span>{selectedStory.time}</span>
                  {selectedStory.visitedFor && <span>· Visited for: {selectedStory.visitedFor}</span>}
                </div>
              </div>
            </div>
            {selectedStory.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "16px" }}>
                {selectedStory.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            )}
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: "var(--font-base)", fontWeight: 400 }}>{selectedStory.text}</p>
            <div className="border-t border-gray-200 mt-6 pt-4">
              <a href="https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info" target="_blank" rel="noopener noreferrer" className="text-teal-soft text-[13px] font-medium hover:underline">View on Practo</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function AccordionSection({ title, isOpen, onToggle, children, small }) {
  return (
    <div className="border-b border-gray-200">
      <button onClick={onToggle} className="flex items-center justify-between w-full py-3 sm:py-4 text-left gap-3 sm:gap-4">
        <h3 className={`${small ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"} text-[#0f616e] leading-snug`} style={{ fontFamily: small ? "var(--font-base)" : "var(--font-display)", fontWeight: small ? 600 : 400 }}>
          {title}
        </h3>
        <span className="w-5 h-5 flex items-center justify-center text-gray-400 shrink-0 text-lg font-light transition-transform">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <div className="pb-4 sm:pb-5">{children}</div>}
    </div>
  )
}

export default DoctorProfile
