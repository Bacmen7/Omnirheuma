import { useState } from "react"

const questions = [
  {
    question: "Do you have pain in your joints?",
    subtitle: "Persistent aching, throbbing, or sharp pain in one or more joints",
  },
  {
    question: "Do you experience morning stiffness?",
    subtitle: "Stiffness lasting more than 30 minutes after waking up",
  },
  {
    question: "Have you noticed swelling in your joints?",
    subtitle: "Visible swelling, warmth, or redness around joints",
  },
  {
    question: "Do you have fatigue or tiredness?",
    subtitle: "Persistent tiredness that doesn't improve with rest",
  },
  {
    question: "Is there a family history of autoimmune disease?",
    subtitle: "Rheumatoid arthritis, lupus, or other autoimmune conditions in your family",
  },
  {
    question: "Have your symptoms lasted more than 6 weeks?",
    subtitle: "Ongoing joint pain, stiffness, or swelling for over 6 weeks",
  },
]

function SymptomQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setFinished(true)
    }
  }

  const reset = () => {
    setCurrentQ(0)
    setAnswers([])
    setFinished(false)
  }

  const yesCount = answers.filter((a) => a === "yes").length

  return (
    <section className="custom-approach-section" style={{ backgroundColor: "#0f616e", padding: "5rem 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left -Text */}
          <div className="lg:w-[40%]">
            <h2 className="text-[2.25rem] md:text-[clamp(1.8rem,3.5vw,2.8rem)]" style={{ color: "#ffffff", fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", marginBottom: "20px" }}>
              When should you see a rheumatologist?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.7, fontFamily: "var(--font-base)" }}>
              Answer a few short questions -we'll help you understand whether a specialist consultation would be beneficial.
            </p>
          </div>

          {/* Right -Quiz Card */}
          <div className="lg:w-[60%] w-full">
            <div style={{ minHeight: "280px" }}>

              {!finished ? (
                <>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px", fontFamily: "var(--font-base)" }}>
                    Question {currentQ + 1} of {questions.length}
                  </p>

                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#ffffff", marginBottom: "8px", fontFamily: "var(--font-display)" }}>
                    {questions[currentQ].question}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "28px", fontFamily: "var(--font-base)" }}>
                    {questions[currentQ].subtitle}
                  </p>

                  <div className="flex gap-3" style={{ marginBottom: "28px" }}>
                    <button
                      onClick={() => handleAnswer("yes")}
                      style={{ backgroundColor: "#e86531", color: "#ffffff", padding: "10px 32px", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-base)", border: "none", cursor: "pointer" }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer("no")}
                      style={{ backgroundColor: "transparent", color: "#ffffff", padding: "10px 32px", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-base)", border: "2px solid rgba(255,255,255,0.5)", cursor: "pointer" }}
                    >
                      No
                    </button>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between" style={{ marginBottom: "6px" }}>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-base)" }}>Progress</span>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-base)" }}>{currentQ}/{questions.length}</span>
                    </div>
                    <div style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(currentQ / questions.length) * 100}%`, backgroundColor: "#1AA3B5", borderRadius: "4px", transition: "width 300ms" }} />
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center" style={{ padding: "1rem 0" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#ffffff", marginBottom: "12px", fontFamily: "var(--font-display)" }}>
                    {yesCount >= 3 ? "We recommend seeing a rheumatologist" : "Your symptoms may not require a specialist yet"}
                  </h3>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontFamily: "var(--font-base)", lineHeight: 1.7 }}>
                    {yesCount >= 3
                      ? "Based on your answers, a consultation with a rheumatologist could help identify and manage your condition early."
                      : "However, if symptoms persist or worsen, consider consulting a rheumatologist for a thorough evaluation."}
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="/book-appointment"
                      style={{ backgroundColor: "#e8fa6d", color: "#0f616e", padding: "12px 28px", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-base)", textDecoration: "none" }}
                    >
                      Book Consultation
                    </a>
                    <button
                      onClick={reset}
                      style={{ backgroundColor: "transparent", color: "#ffffff", padding: "12px 28px", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-base)", border: "2px solid rgba(255,255,255,0.5)", cursor: "pointer" }}
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SymptomQuiz
