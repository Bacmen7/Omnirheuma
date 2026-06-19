const topics = [
  { label: "Lupus", bgColor: "bg-slate-200", textColor: "text-slate-700", iconColor: "text-slate-400", iconHover: "group-hover:text-slate-600" },
  { label: "Infusion Therapy", bgColor: "bg-indigo-50", textColor: "text-indigo-900", iconColor: "text-indigo-300", iconHover: "group-hover:text-indigo-500" },
  { label: "Ankylosing Spondylitis", bgColor: "bg-rose-50", textColor: "text-rose-900", iconColor: "text-rose-300", iconHover: "group-hover:text-rose-500" },
  { label: "Gout Management", bgColor: "bg-amber-50", textColor: "text-amber-900", iconColor: "text-amber-300", iconHover: "group-hover:text-amber-500" },
]

function ExploreTopics() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl text-navy-deep leading-[1.05] tracking-tight !mb-12">Explore more topics</h2>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-8">
        {topics.map((topic) => (
          <div
            key={topic.label}
            className={`min-w-[280px] h-[180px] ${topic.bgColor} p-8 flex flex-col justify-between relative group cursor-pointer`}
          >
            <span className={`text-2xl font-medium relative z-10 ${topic.textColor}`}>{topic.label}</span>
            <div className={`absolute right-4 bottom-4 ${topic.iconColor} ${topic.iconHover} transition-colors`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExploreTopics
