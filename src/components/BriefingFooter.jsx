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
    <footer className="bg-[#F5F5F5] pt-16 pb-8 px-6" style={{ fontFamily: "var(--font-base)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Top: links grid + right (form) */}
        <div className="flex flex-col lg:flex-row gap-12 mb-10">
          <div className="flex-1">

        {/* Link Columns - 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          <div>
            <h4 className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full inline-block" style={{ marginBottom: "28px", fontFamily: "usual, Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px" }}>Who We Serve</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#1A355D]">
              <li><a href="#" className="hover:text-[#515a6a]">Individuals</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">Employers</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">Health Plans</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">Providers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full inline-block" style={{ marginBottom: "28px", fontFamily: "usual, Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px" }}>What We Treat</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#1A355D]">
              <li><Link to="/arthritis" className="hover:text-[#515a6a]">Arthritis</Link></li>
              <li><Link to="/Rheumatoid-Arthritis" className="hover:text-[#515a6a]">Rheumatoid Arthritis</Link></li>
              <li><Link to="/osteoarthritis" className="hover:text-[#515a6a]">Osteoarthritis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full inline-block" style={{ marginBottom: "28px", fontFamily: "usual, Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px" }}>Resources</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#1A355D]">
              <li><Link to="/knowledge-hub" className="hover:text-[#515a6a]">Knowledge Hub</Link></li>
              <li><Link to="/treatment-guides" className="hover:text-[#515a6a]">Treatment Guide</Link></li>
              <li><Link to="/blog" className="hover:text-[#515a6a]">Blog</Link></li>
              <li><a href="#" className="hover:text-[#515a6a]">Research Articles</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">Book Consultation</a></li>
              <li><Link to="/about" className="hover:text-[#515a6a]">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full inline-block" style={{ marginBottom: "28px", fontFamily: "usual, Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px" }}>Company</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#1A355D]">
              <li><Link to="/about" className="hover:text-[#515a6a]">About Us</Link></li>
              <li><Link to="/our-approach" className="hover:text-[#515a6a]">Our Approach</Link></li>
              <li><a href="#" className="hover:text-[#515a6a]">Our Providers</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">Careers</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">Newsroom</a></li>
              <li><a href="#" className="hover:text-[#515a6a]">FAQs</a></li>
            </ul>
          </div>
        </div>
          </div>{/* end left */}

          {/* RIGHT: form */}
          <div style={{ width: "360px", flexShrink: 0, backgroundColor: "#fff", borderRadius: "16px", padding: "1.75rem", border: "1px solid #e2e8f0", alignSelf: "flex-start", marginTop: "0" }}>
            <p style={{ fontWeight: 700, fontSize: "17px", color: "#0f616e", marginBottom: "4px", fontFamily: "var(--font-display)" }}>Book a Consultation</p>
            <p style={{ fontSize: "12px", color: "#888", marginBottom: "1.25rem", fontFamily: "var(--font-base)" }}>We'll call back within 24 hours.</p>
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
                <input ref={nameRef} type="text" placeholder="Name" required style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#1a3a4a", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }} />
                <input ref={phoneRef} type="tel" placeholder="Phone Number" required style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#1a3a4a", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }} />
                <textarea ref={messageRef} placeholder="Message" rows={3} style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "13px", color: "#1a3a4a", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }} />
                <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px", backgroundColor: loading ? "#a0a4ac" : "#e86531", color: "#fff", border: "none", borderRadius: "8px", fontWeight: 700, fontSize: "13px", cursor: loading ? "not-allowed" : "pointer", fontFamily: "var(--font-base)" }}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>{/* end flex row */}

        {/* Logo + Social + Address row */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10 pt-10 border-t border-gray-200 items-center">
          <div className="flex flex-col lg:flex-row gap-8 flex-1">
            <div className="flex-1">
              <p className="text-xs font-bold text-[#1A355D] mb-1">Omni Rheuma Clinics: Rachenahalli, Thanisandra</p>
              <p className="text-sm text-[#515a6a] leading-relaxed" style={{ maxWidth: "340px" }}>No. 42 &amp; 25, 1st Floor, 80 Feet Road, Dr. Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Thanisandra, above Pepperfry Furniture, RK Hegde Nagar, Bengaluru – 560077</p>
              <p className="text-sm text-[#515a6a]" style={{ marginTop: "24px" }}>Dr Raghavendra also practices at <span className="font-semibold text-[#1A355D]">Manipal Hospital</span> (Hebbal and Yelahanka)</p>
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center lg:items-end">
            <Link to="/" className="inline-flex items-center mb-4" aria-label="Omni Rheuma home">
              <img src="/logo.png" alt="Omni Rheuma logo" className="h-32 w-32 object-contain" />
            </Link>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Facebook fill="currentColor" strokeWidth={0} size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Instagram size={20} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Twitter fill="currentColor" strokeWidth={0} size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1AA3B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Linkedin fill="currentColor" strokeWidth={0} size={20} />
              </a>
            </div>
            <p className="text-xs font-bold text-[#1A355D] mb-1 text-center lg:text-right">For appointments, please call</p>
            <a href="tel:+918290638358" className="block text-sm font-semibold text-[#1A355D] hover:text-[#0f616e] text-center lg:text-right">+91 82906 38358</a>
            <a href="mailto:omnirheuma@gmail.com" className="block text-sm font-semibold text-[#1A355D] hover:text-[#0f616e] text-center lg:text-right">omnirheuma@gmail.com</a>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="border-t border-gray-200 pt-8 text-[#515a6a]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-center md:text-left">
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
          <p className="text-[12px] mt-8 text-center md:text-left">&copy; 2026 Omni Rheuma, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default BriefingFooter
