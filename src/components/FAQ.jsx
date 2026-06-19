import { useState } from "react"

const faqs = [
  {
    question: "How long does it take to get a diagnosis?",
    answer: "Diagnosis time varies based on the condition. While some forms like Gout can be identified quickly, autoimmune diseases like RA or Lupus may require multiple blood tests and monitoring over several weeks for an accurate diagnosis.",
  },
  {
    question: "Are biologics covered by my insurance?",
    answer: "Most major insurance plans cover biologic therapies for approved conditions. Our team works directly with your insurer to verify coverage and explore patient assistance programs if needed.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your photo ID, insurance card, a list of current medications, any previous lab results or imaging reports, and a written summary of your symptoms and medical history.",
  },
  {
    question: "Is rheumatoid arthritis hereditary?",
    answer: "While RA is not directly inherited, genetic factors can increase susceptibility. Having a family member with RA or other autoimmune conditions may raise your risk, but environmental factors also play a significant role.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-100 overflow-hidden">
              <button
                className={`faq-btn w-full px-6 py-5 text-left font-bold flex justify-between items-center ${openIndex === index ? "bg-slate-50" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span className="material-symbols-outlined text-primary">
                  {openIndex === index ? "expand_less" : "expand_more"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-slate-600 border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
