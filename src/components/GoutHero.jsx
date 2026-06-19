import { Link } from "react-router-dom"
import { Calendar } from "lucide-react"

const navTabs = [
  { label: "Symptoms &\nCauses", active: false },
  { label: "Diagnosis &\nTreatment", active: true },
  { label: "Doctors &\nDepartments", active: false },
]

function GoutHero() {
  return (
    <header>
      {/* Top Section */}
      <div style={{ backgroundColor: "#0f616e" }} className="text-white">
        <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] pt-6 pb-12 flex flex-col items-start">
          {/* Breadcrumb */}
          <Link
            to="/health-guide"
            className="inline-flex items-center text-white text-sm font-medium mb-10 hover:opacity-80 transition-opacity hover:underline"
          >
            <svg className="w-2.5 h-2.5 mr-2 fill-current" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Diseases & Conditions
          </Link>

          {/* Title */}
          <h1
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-0.5px",
            }}
          >
            Gout
          </h1>

          {/* Appointment Link */}
          <a
            href="#"
            className="inline-flex items-center text-white text-[15px] font-semibold hover:opacity-80 transition-opacity hover:underline"
          >
            <Calendar className="w-[22px] h-[22px] mr-3" strokeWidth={1.5} />
            Request an Appointment
          </a>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ backgroundColor: "#0a4f5a" }} className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] py-6 flex justify-start gap-5 overflow-x-auto">
          {navTabs.map((tab) => (
            <a
              key={tab.label}
              href="#"
              className={`inline-block rounded-full px-5 py-2.5 text-[13px] font-medium leading-tight text-left whitespace-nowrap transition-colors ${
                tab.active
                  ? "bg-white text-navy-deep"
                  : "bg-white/[0.12] text-white hover:bg-white/20"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default GoutHero
