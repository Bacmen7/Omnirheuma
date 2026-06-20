import { useRef, useEffect, useCallback, useState } from "react"

const reviews = [
  {
    quote: "Dr. Raghavendra is always approachable, which is not the case with many others. He is the second Doctor I visited for the Arthritis problem of my wife and I am completely satisfied with his way of treatment and interaction with us. Most importantly he is never in a hurry and spends lot of time to comfort the patient. I strongly recommend Dr. Raghavendra to anyone suffering from Arthritis.",
    name: "T V Joy",
  },
  {
    quote: "I have been visiting Dr. Raghavendra for a year now for my mother's Arthritis Management and I can easily say, he is one fine doctor in his field. He does thorough examination and is compassionate, and warm towards patients. He prescribes limited medicines and has reduced dosage for my mother every alternate follow-up. Definitely a go-to doctor for RA Management.",
    name: "Shoma Nair",
  },
  {
    quote: "Extremely helpful appointment with Dr Raghavendra H for my mother-in-law's scleroderma treatment. The explanation of her health issues and subsequent management protocol advice was awesome. We can say that he is an excellent Doctor in the field of rheumatology.",
    name: "K K Mondal",
  },
  {
    quote: "Dr Raghavendra H is a very Good Doctor with immense Knowledge in the field. He is so cordial and friendly. I am highly satisfied with his Treatment and the service is Exemplary.",
    name: "Dharmaiah Chowdappa",
  },
  {
    quote: "Our doctor is very friendly and a good human being. We are satisfied with Dr. Raghavendra sir.",
    name: "Arpita Bhunia",
  },
  {
    quote: "It is nice talking to Dr Raghavendra, made patient comfortable to discuss the symptoms. Did the complete physical examination and reviewed all reports to explain the situation very logically and in simple language. Best for those who reside in North Bengaluru.",
    name: "Viraj",
  },
]

function ReviewCard({ r, onExpand }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="flex-shrink-0 w-[75vw] sm:w-[300px] md:w-[340px] p-5 sm:p-8 flex flex-col justify-between bg-[#f5f5f5] rounded-2xl">
      <div>
        <svg className="w-7 h-7 sm:w-10 sm:h-10 mb-3 sm:mb-5 text-sky-soft" viewBox="0 0 40 40" fill="currentColor">
          <path d="M10.4 28.8c-2.4 0-4.27-.73-5.6-2.2C3.47 25.13 2.8 23.2 2.8 20.8c0-2.93.87-5.6 2.6-8 1.73-2.4 4.07-4.33 7-5.8l1.6 2.4c-2.13 1.2-3.73 2.53-4.8 4-.93 1.47-1.4 2.93-1.4 4.4.27-.13.73-.2 1.4-.2 1.6 0 2.93.53 4 1.6 1.07 1.07 1.6 2.47 1.6 4.2 0 1.6-.6 3-1.8 4.2-1.2 1.07-2.73 1.6-4.6 1.6zm17.6 0c-2.4 0-4.27-.73-5.6-2.2-1.33-1.47-2-3.4-2-5.8 0-2.93.87-5.6 2.6-8 1.73-2.4 4.07-4.33 7-5.8l1.6 2.4c-2.13 1.2-3.73 2.53-4.8 4-.93 1.47-1.4 2.93-1.4 4.4.27-.13.73-.2 1.4-.2 1.6 0 2.93.53 4 1.6 1.07 1.07 1.6 2.47 1.6 4.2 0 1.6-.6 3-1.8 4.2-1.2 1.07-2.73 1.6-4.6 1.6z" />
        </svg>
        <p
          className="text-[13px] sm:text-[15px] leading-[1.7] font-medium text-navy-deep"
          style={expanded ? {} : { display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {r.quote}
        </p>
        <button
          onClick={() => { setExpanded(!expanded); onExpand(!expanded) }}
          className="text-[13px] sm:text-[14px] font-semibold text-[#0f616e] mt-2 hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
      <div className="mt-4 sm:mt-6 flex items-center justify-between">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-navy-muted">
          -{r.name}
        </p>
        <img src="/practo.png" alt="Practo" style={{ height: "20px", objectFit: "contain", opacity: 0.7 }} />
      </div>
    </div>
  )
}

function Testimonials() {
  const scrollRef = useRef(null)
  const pausedRef = useRef(false)
  const posRef = useRef(0)
  const animRef = useRef(null)

  // Triple the reviews for seamless loop
  const tripled = [...reviews, ...reviews, ...reviews]

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const cardWidth = el.scrollWidth / 3
    posRef.current = cardWidth
    el.scrollLeft = cardWidth

    let lastTime = performance.now()

    const step = (timestamp) => {
      const delta = timestamp - lastTime
      lastTime = timestamp

      if (!pausedRef.current && el) {
        posRef.current += delta * 0.04
        el.scrollLeft = posRef.current

        if (posRef.current >= cardWidth * 2) {
          posRef.current -= cardWidth
          el.scrollLeft = posRef.current
        }
      }

      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  const handleMouseEnter = useCallback(() => { pausedRef.current = true }, [])
  const handleMouseLeave = useCallback(() => { pausedRef.current = false }, [])
  const handleTouchStart = useCallback(() => { pausedRef.current = true }, [])
  const handleTouchEnd = useCallback(() => { pausedRef.current = false }, [])

  const handleScroll = useCallback(() => {
    if (pausedRef.current && scrollRef.current) {
      posRef.current = scrollRef.current.scrollLeft
    }
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-14 px-6">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-navy-muted" style={{ marginBottom: "12px" }}>
          Trusted by 15K+ People
        </p>
        <h2 className="text-[2.25rem] sm:text-[2.5rem] md:text-[3.5rem] leading-[1.08] tracking-[-1.2px] text-navy-deep">
          See why 98% of patients love us
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 px-6 overflow-x-auto hide-scrollbar"
        >
          {tripled.map((r, i) => (
            <ReviewCard key={i} r={r} onExpand={(paused) => { pausedRef.current = paused }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
