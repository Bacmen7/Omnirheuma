import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

function BriefingFooter() {
  return (
    <footer className="bg-[#0f2d3d] pt-14 pb-8 px-6" style={{ fontFamily: "usual, system-ui, sans-serif", fontSize: "16px", lineHeight: "28px", fontWeight: 400 }}>
      <div className="max-w-7xl mx-auto">

        {/* Row 1: Logo+Desc+Social | Quick Links + Conditions | Contact */}
        <div className="flex flex-col lg:flex-row gap-12 mb-10 items-start">

          {/* LEFT: Logo + tagline + social */}
          <div className="flex flex-col items-center lg:items-start" style={{ width: "260px", flexShrink: 0 }}>
            <Link to="/" className="inline-flex items-center mb-3" aria-label="Omni Rheuma home">
              <img src="/logo.png" alt="Omni Rheuma logo" className="h-16 w-16 object-contain" />
            </Link>
            <p className="text-slate-300 text-center lg:text-left" style={{ marginBottom: "32px", lineHeight: "28px" }}>
              Personalized, whole-person rheumatology care for people living with joint and autoimmune conditions.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1AA3B5] transition-colors">
                <Facebook fill="currentColor" strokeWidth={0} size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1AA3B5] transition-colors">
                <Instagram size={15} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1AA3B5] transition-colors">
                <Twitter fill="currentColor" strokeWidth={0} size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1AA3B5] transition-colors">
                <Linkedin fill="currentColor" strokeWidth={0} size={15} />
              </a>
            </div>
          </div>

          {/* CENTER: Quick Links + Conditions */}
          <div className="flex flex-row gap-12 flex-1 justify-center">
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider" style={{ marginBottom: "20px", marginTop: "0px", letterSpacing: "0.1em" }}>Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/knowledge-hub" className="hover:text-white transition-colors">Knowledge Hub</Link></li>
                <li><Link to="/treatment-guides" className="hover:text-white transition-colors">Treatment Guide</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider" style={{ marginBottom: "20px", letterSpacing: "0.1em" }}>Conditions</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/Rheumatoid-Arthritis" className="hover:text-white transition-colors">Rheumatoid Arthritis</Link></li>
                <li><Link to="/osteoarthritis" className="hover:text-white transition-colors">Osteoarthritis</Link></li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Contact Us */}
          <div className="flex flex-col items-center lg:items-start flex-shrink-0" style={{ width: "360px" }}>
            <h4 className="text-white font-bold uppercase text-center lg:text-left" style={{ marginBottom: "20px", letterSpacing: "0.1em" }}>Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#1AA3B5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Omni Rheuma Clinics: Rachenahalli, Thanisandra</p>
                  <p className="text-slate-300 leading-relaxed">No. 42 &amp; 25, 1st Floor, 80 Feet Road, Dr. Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Thanisandra, above Pepperfry Furniture, RK Hegde Nagar, Bengaluru – 560077</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#1AA3B5] flex-shrink-0" />
                <a href="tel:+918290638358" className="text-slate-300 hover:text-white transition-colors">+91 82906 38358</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#1AA3B5] flex-shrink-0" />
                <a href="mailto:omnirheuma@gmail.com" className="text-slate-300 hover:text-white transition-colors">omnirheuma@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#1AA3B5] mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 leading-relaxed">
                  Dr Raghavendra also practices at <span className="text-white font-semibold">Manipal Hospital</span> (Hebbal and Yelahanka)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-center md:text-left">
            <p className="text-slate-400">&copy; 2026 Omni Rheuma, Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Informed Consent</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default BriefingFooter
