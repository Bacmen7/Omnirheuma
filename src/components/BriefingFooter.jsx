import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

function BriefingFooter() {
  return (
    <footer className="pt-14 pb-8 px-6" style={{ backgroundColor: "#F5F5F5", fontFamily: "var(--font-base)", fontSize: "16px", lineHeight: "28px", fontWeight: 400, color: "#0F616E" }}>
      <div className="max-w-7xl mx-auto">

        {/* Row 1: Logo+Desc+Social | Quick Links | Contact */}
        <div className="flex flex-col lg:flex-row gap-12 mb-10 items-start">

          {/* LEFT: Logo + tagline + social */}
          <div className="flex flex-col items-center lg:items-start" style={{ width: "260px", flexShrink: 0 }}>
            <Link to="/" className="inline-flex items-center mb-3" aria-label="Omni Rheuma home">
              <img src="/logo.png" alt="Omni Rheuma logo" className="h-32 w-32 object-contain" />
            </Link>
            <p className="text-center lg:text-left" style={{ marginBottom: "32px", lineHeight: "28px", color: "#5E5E5E" }}>
              Personalised care for people living with joint and autoimmune conditions. Led by a DM-qualified rheumatologist.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#0F616E", color: "#fff" }}>
                <Facebook fill="currentColor" strokeWidth={0} size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#0F616E", color: "#fff" }}>
                <Instagram size={15} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#0F616E", color: "#fff" }}>
                <Twitter fill="currentColor" strokeWidth={0} size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#0F616E", color: "#fff" }}>
                <Linkedin fill="currentColor" strokeWidth={0} size={15} />
              </a>
            </div>
          </div>

          {/* CENTER: Quick Links */}
          <div className="flex flex-row gap-12 flex-1 justify-center lg:justify-center" style={{ paddingLeft: "0" }}>
            <div>
              <h4 className="font-bold uppercase" style={{ marginBottom: "20px", letterSpacing: "0.04em", color: "#0F616E", fontSize: "20px", lineHeight: "26px", fontWeight: 700 }}>Quick Links</h4>
              <ul className="space-y-3" style={{ color: "#5E5E5E" }}>
                <li><Link to="/specialist/1" className="hover:text-[#0F616E] transition-colors">Doctor Profile</Link></li>
                <li><Link to="/conditions" className="hover:text-[#0F616E] transition-colors">Conditions we treat</Link></li>
                <li><Link to="/about" className="hover:text-[#0F616E] transition-colors">About Us</Link></li>
                <li><Link to="/knowledge-hub" className="hover:text-[#0F616E] transition-colors">Knowledge Hub</Link></li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Contact Us */}
          <div className="flex flex-col items-center lg:items-start flex-shrink-0" style={{ width: "420px", maxWidth: "100%" }}>
            <h4 className="font-bold uppercase text-center lg:text-left" style={{ marginBottom: "22px", letterSpacing: "0.04em", color: "#0F616E", fontSize: "20px", lineHeight: "26px", fontWeight: 700 }}>Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#1AA3B5" }} />
                <div>
                  <p className="font-semibold mb-1" style={{ color: "#0F616E" }}>Omni Rheuma Clinics: Rachenahalli, Thanisandra</p>
                  <p className="leading-relaxed" style={{ color: "#5E5E5E" }}>No. 42 &amp; 25, 1st Floor, 80 Feet Road, Dr. Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Thanisandra, above Pepperfry Furniture, RK Hegde Nagar, Bengaluru – 560077</p>
                  <p className="leading-relaxed mt-2" style={{ color: "#5E5E5E" }}>
                    Dr Raghavendra also practices at <span className="font-semibold" style={{ color: "#0F616E" }}>Manipal Hospital</span> (Hebbal and Yelahanka)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" style={{ color: "#1AA3B5" }} />
                <a href="tel:+918290638358" className="hover:text-[#0F616E] transition-colors" style={{ color: "#5E5E5E" }}>+91 82906 38358</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" style={{ color: "#1AA3B5" }} />
                <a href="mailto:omnirheuma@gmail.com" className="hover:text-[#0F616E] transition-colors" style={{ color: "#5E5E5E" }}>omnirheuma@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="pt-6" style={{ borderTop: "1px solid #e0e0e0" }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-center md:text-left">
            <p style={{ color: "#a0a4ac" }}>&copy; 2026 Omni Rheuma</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2" style={{ color: "#a0a4ac" }}>
              <a href="#" className="hover:text-[#0F616E] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0F616E] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#0F616E] transition-colors">Informed Consent</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default BriefingFooter
