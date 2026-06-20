import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUDPYes__c1Zt8e_DM7Q5kgdiBIfFfPLrTr8MouZa1je8uGW8LgO6j83uE0qO_3RU0/exec"

function BriefingFooter() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current?.value || "",
          phone: phoneRef.current?.value || "",
          message: messageRef.current?.value || "",
          source: "footer-form",
        }),
      })
    } catch (_) {}
    setLoading(false)
    setDone(true)
  }

  return (
    <footer className="bg-[#F5F5F5] pt-14 pb-8 px-6" style={{ fontFamily: "var(--font-base)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Row 1: Logo+Contact | Links | Form */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10">

          {/* LEFT: Logo + Social + Contact */}
          <div className="flex flex-col items-center lg:items-start flex-shrink-0">
            <Link to="/" className="inline-flex items-center mb-3" aria-label="Omni Rheuma home">
              <img src="/logo.png" alt="Omni Rheuma logo" className="h-28 w-28 object-contain" />
            </Link>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-9 h-9 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Facebook fill="currentColor" strokeWidth={0} size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Instagram size={18} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Twitter fill="currentColor" strokeWidth={0} size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Linkedin fill="currentColor" strokeWidth={0} size={18} />
              </a>
            </div>
            <p className="text-xs font-bold text-[#1A355D] mb-1 text-center lg:text-left">For appointments, please call</p>
            <a href="tel:+918290638358" className="block text-[15px] font-semibold text-[#1A355D] hover:text-[#0f616e] text-center lg:text-left">+91 82906 38358</a>
            <a href="mailto:omnirheuma@gmail.com" className="block text-[15px] font-semibold text-[#1A355D] hover:text-[#0f616e] text-center lg:text-left">omnirheuma@gmail.com</a>
          </div>

          {/* CENTER: Nav Links + Address */}
          <div className="flex flex-row gap-12 flex-1 justify-center lg:justify-start lg:pl-10">
            <div>
              <h4 className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full inline-block" style={{ marginBottom: "20px" }}>Resources</h4>
              <ul className="space-y-3 text-[15px] font-semibold text-[#1A355D]">
                <li><Link to="/knowledge-hub" className="hover:text-[#515a6a]">Knowledge Hub</Link></li>
                <li><Link to="/treatment-guides" className="hover:text-[#515a6a]">Treatment Guide</Link></li>
                <li><Link to="/blog" className="hover:text-[#515a6a]">Blog</Link></li>
                <li><Link to="/about" className="hover:text-[#515a6a]">About Us</Link></li>
                <li><Link to="/arthritis" className="hover:text-[#515a6a]">Arthritis</Link></li>
                <li><Link to="/Rheumatoid-Arthritis" className="hover:text-[#515a6a]">Rheumatoid Arthritis</Link></li>
                <li><Link to="/osteoarthritis" className="hover:text-[#515a6a]">Osteoarthritis</Link></li>
              </ul>
            </div>
            <div style={{ maxWidth: "380px" }}>
              <h4 className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full inline-block" style={{ marginBottom: "20px" }}>Our Clinic</h4>
              <p className="text-xs font-bold text-[#1A355D] mb-1">Omni Rheuma Clinics: Rachenahalli, Thanisandra</p>
              <p className="text-sm text-[#515a6a] leading-relaxed">No. 42 &amp; 25, 1st Floor, 80 Feet Road, Dr. Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Thanisandra, above Pepperfry Furniture, RK Hegde Nagar, Bengaluru – 560077</p>
              <p className="text-sm text-[#515a6a] mt-2">Dr Raghavendra also practices at <span className="font-semibold text-[#1A355D]">Manipal Hospital</span> (Hebbal and Yelahanka)</p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div style={{ width: "320px", flexShrink: 0, backgroundColor: "#fff", borderRadius: "16px", padding: "1.5rem", border: "1px solid #e2e8f0", alignSelf: "flex-start" }}>
            <p style={{ fontWeight: 700, fontSize: "16px", color: "#0f616e", marginBottom: "1rem", fontFamily: "var(--font-base)", textAlign: "center" }}>Book Your Consultation</p>
            {done ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#e8f4f6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p style={{ fontWeight: 700, color: "#0f616e", fontSize: "15px", margin: 0 }}>Message Sent!</p>
                <p style={{ color: "#888", fontSize: "12px", marginTop: "4px" }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input ref={nameRef} type="text" placeholder="Name" required style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#1a3a4a", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }} />
                <input ref={phoneRef} type="tel" placeholder="Phone Number" required style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#1a3a4a", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }} />
                <textarea ref={messageRef} placeholder="Post Your Problem (optional)" rows={3} style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#1a3a4a", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }} />
                <button type="submit" disabled={loading} style={{ width: "100%", padding: "11px", backgroundColor: loading ? "#a0a4ac" : "#e86531", color: "#fff", border: "none", borderRadius: "24px", fontWeight: 700, fontSize: "13px", cursor: loading ? "not-allowed" : "pointer", fontFamily: "var(--font-base)" }}>
                  {loading ? "Sending..." : "Book Appointment"}
                </button>
                <p style={{ textAlign: "center", fontSize: "11px", color: "#aaa", marginTop: "2px", fontFamily: "var(--font-base)" }}>We call back within 1 hour · No spam</p>
              </form>
            )}
          </div>
        </div>

        {/* Row 2: Legal */}
        <div className="border-t border-gray-200 pt-6 text-[#515a6a]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 text-center md:text-left">
            <p className="leading-relaxed text-[12px] md:max-w-[65%]">
              Omni Rheuma delivers personalized, whole-person medical care to people living with rheumatic conditions. Testimonials reflect individual patient experiences and results may vary.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-3 text-[12px] underline decoration-gray-300 underline-offset-4 md:text-right">
              <a href="#" className="hover:text-[#1A355D]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1A355D]">Terms of Use</a>
              <a href="#" className="hover:text-[#1A355D]">Informed Consent</a>
              <a href="#" className="hover:text-[#1A355D]">Notice of Privacy Practices</a>
            </div>
          </div>
          <p className="text-[12px] mt-6 text-center md:text-left">&copy; 2026 Omni Rheuma, Inc.</p>
        </div>

      </div>
    </footer>
  )
}

export default BriefingFooter
