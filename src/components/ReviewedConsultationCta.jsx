export default function ReviewedConsultationCta({ style = {} }) {
  return (
    <div
      className="guide-cta"
      style={{
        backgroundColor: "#0f616e",
        borderRadius: 0,
        padding: "0",
        marginBottom: "2rem",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        textAlign: "left",
        fontFamily: "var(--font-base)",
        ...style,
      }}
    >
      <div style={{ flex: 1, padding: "26px 30px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em", color: "#a0e2e4", marginBottom: "9px" }}>
          Reviewed consultation
        </p>
        <p style={{ fontFamily: "var(--font-base)", fontSize: "20px", fontWeight: 800, color: "#ffffff", marginBottom: "9px", lineHeight: 1.25 }}>
          Worried these symptoms sound familiar?
        </p>
        <p style={{ fontFamily: "var(--font-base)", fontSize: "14px", color: "rgba(255,255,255,0.82)", lineHeight: 1.65, maxWidth: "560px", marginBottom: "18px" }}>
          Get a personal review from Dr. Raghavendra. Most patients leave their first visit with clarity on what's happening and a plan for next steps.
        </p>
        <a
          href="/book-appointment"
          style={{
            display: "inline-block",
            backgroundColor: "#E86531",
            color: "#ffffff",
            fontFamily: "var(--font-base)",
            fontWeight: 700,
            fontSize: "14px",
            padding: "12px 22px",
            borderRadius: "9999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            alignSelf: "flex-start",
          }}
        >
          Book Visit
        </a>
      </div>
      <div className="hidden md:block" style={{ width: "200px", flexShrink: 0, overflow: "hidden" }}>
        <img src="/images/12hero-slide-1.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
    </div>
  )
}
