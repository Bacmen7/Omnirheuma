const conditions = [
  {
    name: "Rheumatoid Arthritis (RA)",
    image: "/condition/Rheumatoid Arthritis (RA).webp",
  },
  {
    name: "Ankylosing Spondylitis (AS)",
    image: "/condition/Ankylosing Spondylitis (AS).webp",
  },
  {
    name: "Osteoarthritis",
    image: "/condition/Osteoarthritis.webp",
  },
  {
    name: "Lupus",
    image: "/condition/Lupus.webp",
  },
  {
    name: "Gout",
    image: "/condition/Gout.webp",
  },
  {
    name: "Psoriatic Arthritis",
    image: "/condition/Psoriatic Arthritis.webp",
  },
  {
    name: "Fibromyalgia",
    image: "/condition/Fibromyalgia.webp",
  },
  {
    name: "Back & Neck Pain",
    image: "/condition/back.webp",
  },
]

function ConditionsGrid() {
  return (
    <section className="py-20 md:py-28 bg-ghost">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.08] tracking-[-1.2px] text-navy-deep mb-4">
            Expert care for all rheumatic symptoms and conditions
          </h2>
          <p className="text-navy-muted text-base leading-relaxed">
            From osteoarthritis to complex autoimmune disorders, we diagnose and treat hundreds of rheumatic conditions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl py-8 px-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={c.image}
                  alt={c.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-navy-deep leading-snug">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConditionsGrid
