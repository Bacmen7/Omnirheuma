const categories = [
  { label: "All Topics", active: true },
  { label: "Biologics", active: false },
  { label: "Lupus", active: false },
  { label: "Imaging", active: false },
  { label: "Osteoarthritis", active: false },
  { label: "Pediatric", active: false },
  { label: "Infusion Therapy", active: false },
]

function CategoryFilters() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={
                cat.active
                  ? "px-6 py-2.5 rounded-full bg-navy-deep text-white text-sm font-bold"
                  : "px-6 py-2.5 rounded-full bg-primary/20 hover:bg-primary/30 text-teal-soft text-sm font-bold transition-colors"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryFilters
