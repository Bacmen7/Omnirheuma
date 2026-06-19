import { useState } from "react"

const updates = [
  {
    date: "JAN 24, 2024",
    title: "New Oral JAK Inhibitor Shows Promising Results for Psoriatic Arthritis",
    summary: "Findings from the latest Phase 3 trial indicate significant reduction in joint swelling with fewer side effects...",
  },
  {
    date: "JAN 18, 2024",
    title: "Study Links Gut Microbiome Diversity to Lupus Disease Activity",
    summary: "New research suggests that specific probiotic strains might help stabilize symptoms in SLE patients...",
  },
  {
    date: "JAN 05, 2024",
    title: "The Impact of Vitamin D on Chronic Joint Pain: A 5-Year Review",
    summary: "Analyzing data from 10,000 patients to understand the critical role of Vitamin D in bone health maintenance...",
  },
]

function ResearchUpdates() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[2.5rem]">Research Updates</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <div className="space-y-3 md:space-y-6">
          {updates.map((item, index) => (
            <div key={item.title}>
              {/* Desktop card */}
              <div className="hidden md:flex flex-row gap-6 p-6 rounded-2xl border border-border hover:bg-white transition-colors cursor-pointer group">
                <div className="text-navy-deep text-sm min-w-[120px]" style={{ fontFamily: "var(--font-base)", fontWeight: 600 }}>{item.date}</div>
                <div className="flex-1">
                  <h4 className="text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-navy-muted text-base">{item.summary}</p>
                </div>
                <span className="material-symbols-outlined self-center text-navy-muted/30">chevron_right</span>
              </div>

              {/* Mobile collapsible card */}
              <div className="md:hidden rounded-xl border border-border overflow-hidden cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <div className="flex items-center gap-2 p-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-navy-deep text-[10px] mb-1" style={{ fontFamily: "var(--font-base)", fontWeight: 600 }}>{item.date}</div>
                    <h4 className="text-[13px] leading-snug text-navy-deep font-medium">{item.title}</h4>
                    {openIndex === index && (
                      <p className="text-navy-muted text-xs leading-relaxed mt-2">{item.summary}</p>
                    )}
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 text-navy-muted transition-transform ${openIndex === index ? "rotate-90" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchUpdates
