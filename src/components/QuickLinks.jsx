const categories = [
  // { label: "Rheumatoid Arthritis" },
  // { label: "Psoriatic Arthritis" },
  // { label: "Biologics Guide" },
]

function QuickLinks() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <a
            key={cat.label}
            className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow group"
            href="#"
          >
            <div className="flex items-center gap-4">
              <div className="text-gray-400 group-hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-xl font-medium">{cat.label}</span>
            </div>
            <div className="bg-black rounded-full p-2 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default QuickLinks
