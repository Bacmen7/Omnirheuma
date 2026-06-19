const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="#FBBC04"
    />
  </svg>
)

const GoogleGIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

const reviewsData = [
  {
    id: 1,
    name: "T V Joy",
    text: "Dr. Raghavendra is always approachable, which is not the case with many others. I am completely satisfied with his way of treatment and interaction with us. Most importantly he is never in a hurry and spends lot of time to comfort the patient.",
  },
  {
    id: 2,
    name: "Shoma Nair",
    text: "I have been visiting Dr. Raghavendra for a year now for my mother's Arthritis Management and I can easily say, he is one fine doctor in his field. He does thorough examination and is compassionate, and warm towards patients.",
  },
  {
    id: 3,
    name: "Suresh R.",
    text: "Very good doctor. My rheumatic arthritis pain reduced 80%. Doctor is very friendly. I like the treatment. Now I am walking without any pain in my joint.",
  },
  {
    id: 4,
    name: "Dharmaiah Chowdappa",
    text: "Dr Raghavendra H is a very Good Doctor with immense Knowledge in the field. He is so cordial and friendly. I am highly satisfied with his Treatment and the service is Exemplary.",
  },
]

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-7 flex flex-col text-left h-full shadow-sm">
      {/* Review text */}
      <p className="text-[13.5px] text-[#5e5e5e] leading-[1.75] mb-6 flex-grow" style={{ fontFamily: "var(--font-base)" }}>
        {review.text}
      </p>

      {/* Name */}
      <div className="mb-5">
        <p className="text-[14px] text-[#0f616e] font-semibold" style={{ fontFamily: "var(--font-base)" }}>{review.name}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mb-4" />

      {/* Stars + Google icon */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <GoogleGIcon />
      </div>
    </div>
  )
}

function GoogleReviews() {
  return (
    <section className="bg-[#a0e2e4] py-20 md:py-28 custom-approach-section relative">
      {/* Top wave */}
      <svg className="absolute -top-[33px] left-0 w-full block" style={{ height: "34px" }} preserveAspectRatio="none" viewBox="0 0 1440 40" fill="none">
        <path d="M0 40H1440V18C1200 38 960 38 720 18C480 -2 240 -2 0 18V40Z" fill="#a0e2e4" />
      </svg>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#5e5e5e]"
            style={{ fontFamily: "var(--font-base)", marginBottom: "1rem" }}
          >
            Testimonials
          </p>
          <h2
            className="text-[2.25rem] md:text-[2.75rem] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#0f616e", marginBottom: "1.25rem" }}
          >
            What Are Patients Saying?
          </h2>
          <p
            className="text-sm text-[#5e5e5e] leading-relaxed"
            style={{ fontFamily: "var(--font-base)", marginBottom: "1.5rem" }}
          >
            With over 15,000 patients treated at our rheumatology practice, and specialist expertise in autoimmune conditions, you can trust us to deliver expert care and consistent results.
          </p>
          {/* Google Rating */}
          <div className="flex items-center gap-3">
            <GoogleGIcon />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#0f616e] text-[22px] font-bold leading-none">5.0</span>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
              <span className="text-[#5e5e5e] text-[12px] block" style={{ marginTop: "0.25rem" }}>202 reviews &middot; Google Rating</span>
            </div>
          </div>
        </div>

        {/* Cards -carousel on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible mb-12">
          {reviewsData.map((review) => (
            <div key={review.id} className="w-[280px] min-w-[280px] sm:w-[300px] sm:min-w-[300px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* View All button */}
        <div>
          <button
            className="text-[14px] font-semibold text-white rounded-full px-8 py-3 hover:opacity-90 transition-colors cursor-pointer"

            style={{ backgroundColor: "#e86531", fontFamily: "var(--font-base)" }}
          >
            View All
          </button>
        </div>

      </div>
    </section>
  )
}

export default GoogleReviews
