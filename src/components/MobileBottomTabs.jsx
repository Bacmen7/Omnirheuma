import { Link } from "react-router-dom"

const tabBase = "flex flex-col items-center justify-center gap-1 flex-1 py-2"
const labelStyle = { fontSize: "11px", fontWeight: 600, color: "#0F616E" }

function DoctorIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="10" fill="#1A355D" />
      <path d="M12 56c0-11 9-20 20-20s20 9 20 20" fill="#1A355D" />
      <rect x="29" y="34" width="6" height="20" rx="1" fill="#ffffff" />
      <rect x="22" y="41" width="20" height="6" rx="1" fill="#ffffff" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="48" height="44" rx="4" fill="#1A355D" />
      <rect x="8" y="12" width="48" height="12" rx="4" fill="#E86531" />
      <rect x="16" y="6" width="6" height="12" rx="2" fill="#1A355D" />
      <rect x="42" y="6" width="6" height="12" rx="2" fill="#1A355D" />
      <rect x="16" y="30" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="29" y="30" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="42" y="30" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="16" y="42" width="6" height="6" rx="1" fill="#ffffff" />
      <rect x="29" y="42" width="6" height="6" rx="1" fill="#E86531" />
      <rect x="42" y="42" width="6" height="6" rx="1" fill="#ffffff" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" fill="#25D366" />
      <path
        d="M44.6 38.3c-.7-.3-4.2-2.1-4.8-2.3-.6-.2-1.1-.3-1.6.3-.5.7-1.8 2.3-2.2 2.7-.4.5-.8.5-1.5.2-3.9-2-6.5-3.6-9.1-8.1-.7-1.2.7-1.1 2-3.6.2-.5.1-.9-.1-1.2-.2-.3-1.6-3.8-2.1-5.2-.6-1.4-1.1-1.2-1.6-1.2H22c-.5 0-1.2.2-1.9.9-.7.7-2.5 2.4-2.5 5.9 0 3.5 2.6 6.9 2.9 7.4.4.5 5.1 7.8 12.5 10.9 4.4 1.9 6.1 2 8.3 1.7 1.3-.2 4.1-1.7 4.7-3.3.6-1.7.6-3.1.4-3.3-.1-.3-.6-.5-1.3-.8z"
        fill="#ffffff"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" stroke="#1A355D" strokeWidth="3" fill="#ffffff" />
      <path
        d="M22 24c0-1.7 1.3-3 3-3h4l3 7-3.5 2c1.4 3.4 4 6 7.4 7.4l2-3.5 7 3v4c0 1.7-1.3 3-3 3-11 0-20-9-20-20z"
        fill="#1A355D"
      />
      <circle cx="48" cy="18" r="9" fill="#E86531" />
      <text x="48" y="21" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ffffff" fontFamily="Arial, sans-serif">24/7</text>
    </svg>
  )
}

function MobileBottomTabs() {
  return (
    <nav className="mobile-bottom-tabs">
      <Link to="/specialist/1" className={tabBase}>
        <DoctorIcon />
        <span style={labelStyle}>Doctors</span>
      </Link>
      <Link to="/book-appointment" className={tabBase}>
        <CalendarIcon />
        <span style={labelStyle}>Book Appt.</span>
      </Link>
      <a href="https://wa.me/918290638358" target="_blank" rel="noreferrer" className={tabBase}>
        <WhatsAppIcon />
        <span style={labelStyle}>Chat</span>
      </a>
      <a href="tel:+918290638358" className={tabBase}>
        <PhoneIcon />
        <span style={labelStyle}>Call Us</span>
      </a>
    </nav>
  )
}

export default MobileBottomTabs
