import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Mail, MapPin, Phone, MessageCircle, ArrowUp } from "lucide-react"
import Header from "./Header"
import BriefingFooter from "./BriefingFooter"
import { BUSINESS } from "../data/legalInfo"

const TEAL = "#0f616e"
const AQUA = "#1AA3B5"
const BODY = "#4a5560"

const para = { color: BODY, fontSize: "15.5px", lineHeight: 1.85, marginBottom: "16px" }
const heading = {
  fontFamily: "var(--font-display)",
  color: TEAL,
  fontSize: "clamp(1.35rem, 2.1vw, 1.7rem)",
  fontWeight: 500,
  lineHeight: 1.3,
  letterSpacing: "-0.3px",
  marginBottom: "16px",
}
const subheading = { color: TEAL, fontSize: "16px", fontWeight: 700, lineHeight: 1.5, marginTop: "26px", marginBottom: "12px" }

/**
 * Renders one content block. Supported shapes:
 *   "plain text"                       -> paragraph
 *   { h: "Sub heading" }               -> sub heading
 *   { ul: ["a", "b"] }                 -> bulleted list
 *   { ol: ["a", "b"] }                 -> numbered list
 *   { note: "callout text" }           -> highlighted callout
 *   { table: { head: [], rows: [[]] } }-> comparison table
 */
function Block({ block, lead }) {
  if (typeof block === "string") {
    const style = lead ? { ...para, fontSize: "16.5px", lineHeight: 1.8, color: "#3d4a55" } : para
    return <p style={style} dangerouslySetInnerHTML={{ __html: block }} />
  }

  if (block.h) {
    return <h3 style={subheading}>{block.h}</h3>
  }

  if (block.ul || block.ol) {
    const items = block.ul || block.ol
    const ListTag = block.ul ? "ul" : "ol"
    return (
      <ListTag
        style={{
          margin: "0 0 18px",
          paddingLeft: "22px",
          listStyleType: block.ul ? "disc" : "decimal",
          color: BODY,
          fontSize: "15.5px",
          lineHeight: 1.8,
        }}
      >
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: "9px", paddingLeft: "4px" }} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ListTag>
    )
  }

  if (block.note) {
    return (
      <div
        style={{
          background: "#e8f6f8",
          borderLeft: `4px solid ${AQUA}`,
          borderRadius: "10px",
          padding: "18px 20px",
          margin: "0 0 20px",
        }}
      >
        <p style={{ ...para, marginBottom: 0, color: "#0f4a54", fontSize: "15px" }} dangerouslySetInnerHTML={{ __html: block.note }} />
      </div>
    )
  }

  if (block.table) {
    return (
      <div style={{ overflowX: "auto", margin: "0 0 22px", borderRadius: "12px", border: "1px solid #dfe8ea" }}>
        <table style={{ width: "100%", minWidth: "520px", borderCollapse: "collapse", fontSize: "14.5px" }}>
          <thead>
            <tr style={{ background: "#f1f8f9" }}>
              {block.table.head.map((cell) => (
                <th
                  key={cell}
                  style={{ textAlign: "left", padding: "13px 16px", color: TEAL, fontWeight: 700, borderBottom: "1px solid #dfe8ea" }}
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "13px 16px",
                      color: BODY,
                      lineHeight: 1.65,
                      borderBottom: i === block.table.rows.length - 1 ? "none" : "1px solid #eef3f4",
                      verticalAlign: "top",
                    }}
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return null
}

function LegalLayout({ title, subtitle, sections, intro }) {
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const [showTop, setShowTop] = useState(false)
  const { hash } = useLocation()

  // Deep links such as /terms-and-conditions#medical-disclaimer land on the section.
  useEffect(() => {
    if (!hash) return
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(hash.slice(1))
      if (el) window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash])

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600)
      const marker = window.scrollY + 160
      let current = sections[0]?.id
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= marker) current = section.id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background-light" style={{ fontFamily: "var(--font-base)" }}>
      <Header />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#e0f3f5", padding: "clamp(48px, 6vw, 78px) clamp(24px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#5a6577", marginBottom: "18px" }}>
            <Link to="/" style={{ color: TEAL, textDecoration: "none", fontWeight: 600 }}>Home</Link>
            <span style={{ margin: "0 8px", color: "#9bb0b4" }}>/</span>
            <span>{title}</span>
          </nav>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              color: TEAL,
              fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: "-0.8px",
              marginBottom: "20px",
            }}
          >
            {title}
          </h1>
          <p style={{ color: "#5a6577", fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: 1.75, maxWidth: "760px", marginBottom: "26px" }}>
            {subtitle}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ background: "#fff", color: TEAL, borderRadius: "100px", padding: "7px 16px", fontSize: "13px", fontWeight: 600 }}>
              Effective from {BUSINESS.effectiveDate}
            </span>
            <span style={{ background: "#fff", color: TEAL, borderRadius: "100px", padding: "7px 16px", fontSize: "13px", fontWeight: 600 }}>
              Last updated {BUSINESS.lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ padding: "clamp(40px, 5vw, 64px) clamp(24px, 5vw, 64px) clamp(56px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(28px, 4vw, 56px)", alignItems: "flex-start" }}>

          {/* TABLE OF CONTENTS */}
          <aside className="w-full lg:w-[262px]" style={{ flexShrink: 0, position: "sticky", top: "104px" }}>
            <div style={{ background: "#fff", border: "1px solid #e4ecee", borderRadius: "14px", padding: "20px 18px" }}>
              <p style={{ color: TEAL, fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
                On this page
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "2px", maxHeight: "58vh", overflowY: "auto" }}>
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        background: activeId === section.id ? "#e8f6f8" : "transparent",
                        color: activeId === section.id ? TEAL : "#69757e",
                        fontWeight: activeId === section.id ? 700 : 500,
                        fontSize: "13.5px",
                        lineHeight: 1.45,
                        padding: "8px 10px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-base)",
                      }}
                    >
                      <span style={{ color: AQUA, fontWeight: 700, marginRight: "7px" }}>{i + 1}.</span>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT — one continuous document sheet */}
          <article
            style={{
              flex: "1 1 520px",
              minWidth: 0,
              background: "#fff",
              border: "1px solid #e6edef",
              borderRadius: "18px",
              padding: "clamp(26px, 3.6vw, 48px)",
              boxShadow: "0 1px 3px rgba(15,97,110,0.04)",
            }}
          >
            {intro && (
              <div style={{ marginBottom: "34px", paddingBottom: "30px", borderBottom: "1px solid #eef3f4" }}>
                {intro.map((block, i) => (
                  <Block key={i} block={block} lead />
                ))}
              </div>
            )}

            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                style={{
                  marginBottom: "36px",
                  paddingTop: i === 0 ? 0 : "32px",
                  borderTop: i === 0 ? "none" : "1px solid #eef3f4",
                  scrollMarginTop: "110px",
                }}
              >
                <h2 style={heading}>
                  <span style={{ color: AQUA, fontWeight: 400, marginRight: "10px" }}>{i + 1}.</span>
                  {section.title}
                </h2>
                {section.body.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </section>
            ))}

            {/* CONTACT CARD */}
            <div
              id="contact"
              style={{
                background: TEAL,
                borderRadius: "16px",
                padding: "clamp(26px, 3.5vw, 38px)",
                color: "#fff",
                scrollMarginTop: "110px",
                marginTop: "44px",
              }}
            >
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 400, marginBottom: "10px" }}>
                Questions about this page?
              </h2>
              <p style={{ color: "#c9e6ea", fontSize: "15px", lineHeight: 1.75, marginBottom: "22px", maxWidth: "620px" }}>
                Write to us and we will respond within 30 days, as required under applicable Indian law. For anything urgent about your health, please call the clinic instead.
              </p>
              <div style={{ display: "grid", gap: "14px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <MapPin size={17} style={{ color: "#7fd4de", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#e2f3f5" }}>
                    <strong style={{ color: "#fff" }}>{BUSINESS.legalName}</strong>
                    <br />
                    {BUSINESS.address}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <Mail size={17} style={{ color: "#7fd4de", flexShrink: 0 }} />
                  <a href={`mailto:${BUSINESS.email}`} style={{ fontSize: "14.5px", color: "#e2f3f5", textDecoration: "none" }}>
                    {BUSINESS.email}
                  </a>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <Phone size={17} style={{ color: "#7fd4de", flexShrink: 0 }} />
                  <a href={`tel:${BUSINESS.phoneHref}`} style={{ fontSize: "14.5px", color: "#e2f3f5", textDecoration: "none" }}>
                    {BUSINESS.phone}
                  </a>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <MessageCircle size={17} style={{ color: "#7fd4de", flexShrink: 0 }} />
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noreferrer" style={{ fontSize: "14.5px", color: "#e2f3f5", textDecoration: "none" }}>
                    WhatsApp {BUSINESS.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <p style={{ color: "#8a949c", fontSize: "13px", lineHeight: 1.7, marginTop: "26px" }}>
              This document was last reviewed on {BUSINESS.lastUpdated}. Where a printed or forwarded copy differs from the version published at{" "}
              {BUSINESS.website}, the published version applies.
            </p>
          </article>
        </div>
      </section>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            position: "fixed",
            right: "22px",
            bottom: "150px",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: TEAL,
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 18px rgba(15,97,110,0.28)",
            zIndex: 40,
          }}
        >
          <ArrowUp size={19} />
        </button>
      )}

      <BriefingFooter />
    </div>
  )
}

export default LegalLayout
