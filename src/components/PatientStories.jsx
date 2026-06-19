function PatientStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-rheuma-blue rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Progress dots */}
            <div className="flex gap-1 mb-10">
              <span className="w-12 h-1 bg-primary" />
              <span className="w-12 h-1 bg-white/20" />
              <span className="w-12 h-1 bg-white/20" />
            </div>

            <p className="text-3xl md:text-4xl font-medium leading-tight mb-12">
              "Before Omni Rheuma, even holding a coffee cup was a challenge. After three months of their biological infusion therapy, I'm back to playing tennis twice a week."
            </p>

            <div className="flex items-center gap-4">
              <img
                alt="Jonathan Wright"
                className="w-16 h-16 rounded-full border-2 border-white object-cover"
                src="/images/patient-sarah.webp"
              />
              <div className="text-left">
                <h5 className="font-bold text-xl">Jonathan Wright</h5>
                <p className="text-primary/80 font-medium">Arthritis Patient for 8 Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientStories
