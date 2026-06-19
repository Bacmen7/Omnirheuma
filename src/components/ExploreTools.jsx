const tools = [
  "SDAI / CDAI Calculator",
  "Biologics Coverage Checker",
  "Joint Inflammation Tracker",
  "Infusion Center Locator",
  "Medication Interaction Guide",
]

function ExploreTools() {
  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">Explore Tools</span>
        <div className="space-y-6">
          {tools.map((tool) => (
            <a key={tool} className="block text-2xl md:text-3xl font-medium hover:underline text-gray-900" href="#">
              {tool}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreTools
