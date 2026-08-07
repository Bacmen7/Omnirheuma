import { useState } from "react"

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUDPYes__c1Zt8e_DM7Q5kgdiBIfFfPLrTr8MouZa1je8uGW8LgO6j83uE0qO_3RU0/exec"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import { submitAppointmentLead } from "../lib/api"

const fieldStyle = {
  width: "100%",
  fontFamily: "var(--font-base)",
  fontSize: "16px",
  color: "#2b3a3a",
  padding: "12px 14px",
  border: "1px solid #d9e4e4",
  borderRadius: "8px",
  background: "#ffffff",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
}

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <label style={{ display: "block", fontWeight: 600, fontSize: "0.94rem", marginBottom: "6px", color: "#2b3a3a", fontFamily: "var(--font-base)" }}>
        {label} {required && <span style={{ color: "#e86531" }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const PHONE_LENGTH = 10
const PHONE_ERROR = `Please enter a valid ${PHONE_LENGTH}-digit mobile number.`
const DANGER = "#d92d20"

export default function BookAppointment() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const [phoneFocused, setPhoneFocused] = useState(false)

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }))

  // Keep the field to digits only so a pasted "+91 98765 43210" still validates.
  const updatePhone = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, PHONE_LENGTH)
    update("phone", digits)
    if (digits.length === PHONE_LENGTH) setPhoneError("")
  }

  const handleSubmit = async () => {
    if (!form.name) {
      alert("Please fill in your name and phone number.")
      return
    }
    if (form.phone.length !== PHONE_LENGTH) {
      setPhoneError(PHONE_ERROR)
      return
    }
    if (loading) return
    setLoading(true)

    const lead = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      source: "book-appointment",
    }

    // Sheet logging and the WhatsApp acknowledgement run side by side; neither
    // one failing should stop the patient from seeing a confirmation.
    await Promise.allSettled([
      fetch(APPS_SCRIPT_URL, { method: "POST", body: JSON.stringify(lead) }),
      submitAppointmentLead(lead).catch(err => {
        console.error("WhatsApp acknowledgement failed:", err.message)
      }),
    ])

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen" style={{ background: "#f4fafa", fontFamily: "var(--font-base)", color: "#2b3a3a" }}>
      <Header />

      {/* Hero */}
      <section style={{ background: "linear-gradient(150deg, #0f616e 0%, #095457 100%)", padding: "54px 0 64px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 22px" }}>
          <h1 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontSize: "clamp(2.1rem, 4vw, 2.7rem)", fontWeight: 400, marginBottom: "10px", lineHeight: 1.2 }}>
            Book a Consultation
          </h1>
          <p style={{ color: "#d4ebeb", fontSize: "1.06rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Share your details and we will get in touch to confirm your visit.
          </p>
        </div>
      </section>

      {/* Card */}
      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #d9e4e4", borderRadius: "14px", padding: "clamp(36px, 5vw, 56px)", marginTop: "-36px", boxShadow: "0 10px 30px rgba(13,115,119,0.08)" }}>

          {!submitted ? (
            <>
              <h2 style={{ fontFamily: "var(--font-display)", color: "#095457", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 400, marginBottom: "6px", textAlign: "center" }}>
                Tell Us About You
              </h2>
              <p style={{ color: "#5c6b6b", fontSize: "0.99rem", marginBottom: "36px", lineHeight: 1.65, textAlign: "center" }}>
                Fill in a few details and our team will reach out shortly.
              </p>

              <Field label="Full Name" required>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => update("name", e.target.value)}
                  style={fieldStyle}
                  onFocus={e => { e.target.style.borderColor = "#0f616e"; e.target.style.boxShadow = "0 0 0 3px #e6f2f2" }}
                  onBlur={e => { e.target.style.borderColor = "#d9e4e4"; e.target.style.boxShadow = "none" }}
                />
              </Field>

              <Field label="Phone Number" required>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={PHONE_LENGTH}
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={e => updatePhone(e.target.value)}
                  aria-invalid={Boolean(phoneError)}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                  style={{
                    ...fieldStyle,
                    background: phoneError ? "#fff6f5" : "#ffffff",
                    borderColor: phoneError ? DANGER : phoneFocused ? "#0f616e" : "#d9e4e4",
                    boxShadow: phoneError ? "0 0 0 3px #fde5e2" : phoneFocused ? "0 0 0 3px #e6f2f2" : "none",
                  }}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => {
                    setPhoneFocused(false)
                    if (form.phone && form.phone.length !== PHONE_LENGTH) setPhoneError(PHONE_ERROR)
                  }}
                />
                {phoneError && (
                  <p id="phone-error" style={{ color: DANGER, fontSize: "0.85rem", lineHeight: 1.5, marginTop: "7px" }}>
                    {phoneError}
                  </p>
                )}
              </Field>

              <Field label="Message (optional)">
                <textarea
                  placeholder="Briefly describe your symptoms or any questions for the doctor."
                  value={form.message}
                  onChange={e => update("message", e.target.value)}
                  style={{ ...fieldStyle, minHeight: "120px", resize: "vertical" }}
                  onFocus={e => { e.target.style.borderColor = "#0f616e"; e.target.style.boxShadow = "0 0 0 3px #e6f2f2" }}
                  onBlur={e => { e.target.style.borderColor = "#d9e4e4"; e.target.style.boxShadow = "none" }}
                />
              </Field>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                style={{ background: loading ? "#a0a4ac" : "#e86531", color: "#ffffff", border: "none", fontFamily: "var(--font-base)", fontSize: "1rem", fontWeight: 700, padding: "12px 40px", borderRadius: "100px", cursor: loading ? "not-allowed" : "pointer", transition: "background 0.2s", display: "block", width: "100%" }}
                onMouseOver={e => { if (!loading) e.target.style.background = "#d06020" }}
                onMouseOut={e => { if (!loading) e.target.style.background = "#e86531" }}
              >
                {loading ? "Sending..." : "Request My Consultation"}
              </button>
              <p style={{ fontSize: "0.86rem", color: "#5c6b6b", marginTop: "14px", textAlign: "center" }}>
                We call back within 1 hour · No spam
              </p>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "30px 20px" }}>
              <div style={{ width: "60px", height: "60px", background: "#e6f2f2", borderRadius: "50%", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="28" fill="none" stroke="#0f616e" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "#095457", fontSize: "clamp(1.6rem, 3vw, 1.9rem)", fontWeight: 400, marginBottom: "8px" }}>Request Received</h3>
              <p style={{ color: "#5c6b6b", fontSize: "1rem", lineHeight: 1.7 }}>
                Thank you. Our team will contact you shortly to confirm your consultation time.
              </p>
            </div>
          )}
        </div>
      </main>

      <BriefingFooter />
    </div>
  )
}
