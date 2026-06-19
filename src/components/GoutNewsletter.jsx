function GoutNewsletter() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "40px 36px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        border: "1px solid #f0f0f0",
        marginTop: "48px",
        marginBottom: "48px",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "30px",
          fontWeight: 400,
          color: "#0f616e",
          marginBottom: "20px",
          letterSpacing: "-0.5px",
          lineHeight: 1.2,
        }}
      >
        From Omni Rheuma to your inbox
      </h2>

      <p
        style={{
          fontFamily: "var(--font-base)",
          fontSize: "16px",
          lineHeight: 1.6,
          color: "#111111",
          marginBottom: "28px",
        }}
      >
        Sign up for free and stay up to date on research advancements, health
        tips, current health topics, and expertise on managing health.{" "}
        <a
          href="#"
          style={{
            color: "#0f616e",
            textDecoration: "underline",
          }}
        >
          Click here for an email preview.
        </a>
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "48px",
            padding: "0 16px",
            fontSize: "16px",
            fontFamily: "var(--font-base)",
            border: "1px solid #767676",
            borderRadius: "4px",
            marginBottom: "20px",
            outline: "none",
            display: "block",
          }}
        />

        <div style={{ marginBottom: "28px" }}>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-base)",
              color: "#0f616e",
              textDecoration: "none",
              fontSize: "16px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Learn more about Omni Rheuma&apos;s use of data.
            <svg
              style={{
                width: "14px",
                height: "14px",
                marginLeft: "6px",
                fill: "currentColor",
                marginTop: "2px",
              }}
              viewBox="0 0 24 24"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </a>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#e86531",
            color: "#ffffff",
            border: "none",
            borderRadius: "24px",
            padding: "12px 28px",
            fontSize: "16px",
            fontFamily: "var(--font-base)",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Subscribe!
        </button>
      </form>
    </div>
  )
}

export default GoutNewsletter
