function WellnessSeminars() {
  return (
    <section className="py-0 md:py-24 bg-ghost">
      {/* Mobile: full-width, no border-radius. Desktop: contained with rounded corners */}
      <div className="max-w-7xl mx-auto md:px-6">
        <div className="bg-white/70 backdrop-blur-[12px] border-y md:border border-white/30 p-8 md:p-12 lg:p-20 rounded-none md:rounded-[4rem] relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
                Join Our Wellness Seminars
              </h2>
              <p className="text-navy-muted text-base md:text-lg mb-8">
                We host monthly sessions—both in-person and digital—to help patients manage their conditions through lifestyle and community support.
              </p>
              <div className="space-y-4 md:space-y-6">
                {/* Event 1 */}
                <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-sm">
                  <div className="w-14 h-14 bg-sky-soft rounded-2xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold uppercase text-navy-deep">Oct</span>
                    <span className="text-xl font-bold text-navy-deep">24</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-navy-deep">Managing Lupus in the Workplace</h4>
                    <p className="text-navy-muted text-sm">Virtual Seminar &bull; 6:00 PM EST</p>
                  </div>
                </div>
                {/* Event 2 */}
                <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-sm">
                  <div className="w-14 h-14 bg-primary/30 rounded-2xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold uppercase text-navy-deep">Nov</span>
                    <span className="text-xl font-bold text-navy-deep">12</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-navy-deep">New Frontiers in Psoriatic Arthritis</h4>
                    <p className="text-navy-muted text-sm">Main Campus Hall &bull; 5:30 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative group">
              <img
                alt="Wellness Seminar Session"
                className="rounded-2xl md:rounded-[3rem] w-full h-[300px] md:h-[500px] object-cover shadow-2xl group-hover:rotate-2 transition-transform duration-500"
                src="/images/exercise.webp"
              />
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-navy-deep text-white p-6 md:p-10 rounded-2xl md:rounded-[3rem] shadow-xl">
                <h5 className="text-xl md:text-2xl font-bold mb-2">Next Event</h5>
                <p className="opacity-80 text-sm md:text-base">Registration is now open for all patients.</p>
                <button className="mt-4 md:mt-6 font-bold flex items-center gap-2 underline underline-offset-4 text-sm md:text-base">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WellnessSeminars
