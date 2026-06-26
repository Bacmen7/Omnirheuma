import heartHandIcon from "../assets/icons/heart-hand.svg"
import qualityCareIcon from "../assets/icons/quality-care.svg"
import chatBubbleIcon from "../assets/icons/chat-bubble.svg"
import seenHeardIcon from "../assets/icons/seen-heard.svg"

function ApproachSection() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-white pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-navy-deep">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2
          className="!mb-12 md:!mb-16 max-w-[800px] text-4xl md:text-5xl leading-tight"
          style={{ color: "#0F616E", fontFamily: "var(--font-display)" }}
        >
          Experience relief to joint pain from{" "}
          <span className="relative inline-block">
            personalised care
            <svg
              className="absolute -bottom-2 left-0 h-3 w-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 400 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-[72px] gap-x-[100px]">
          {/* Card 1 */}
          <div className="flex items-start gap-6">
            <div className="relative flex h-[74px] w-[70px] shrink-0 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 70 74" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z" fill="rgba(26,163,181,0.15)" />
              </svg>
              <img src={heartHandIcon} alt="" className="relative z-10 h-[44px] w-[44px]" style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(58%) saturate(548%) hue-rotate(143deg) brightness(91%) contrast(91%)" }} />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[18px] md:!text-[20px] !font-semibold leading-[1.35] md:!leading-[1.4]">Whole-person &amp; collaborative care</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-[#5E5E5E]">
                Rheumatology experts working across specialties (musculoskeletal, immune, and lifestyle) treats you as a whole.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-6">
            <div className="relative flex h-[74px] w-[72px] shrink-0 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 72 74" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M55.1256 5.62319C69.5284 18.4233 75.3527 39.7894 70.0964 55.9976C65.1006 71.3957 49.3485 76.6043 33.3275 72.8197C18.4814 69.3135 4.89883 56.0577 0.773067 39.6249C-2.87611 25.0844 7.0102 15.5753 17.3399 9.11354C28.7557 1.97144 42.7234 -5.39849 55.1256 5.62319Z" fill="rgba(26,163,181,0.15)" />
              </svg>
              <img src={qualityCareIcon} alt="" className="relative z-10 h-[48px] w-[48px]" style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(58%) saturate(548%) hue-rotate(143deg) brightness(91%) contrast(91%)" }} />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[18px] md:!text-[20px] !font-semibold leading-[1.35] md:!leading-[1.4]">Quality care that works</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-[#5E5E5E]">
                Clinically-proven results, with most patients seeing significant reduction in swelling and stiffness through evidence-based therapies.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-6">
            <div className="relative flex h-[74px] w-[68px] shrink-0 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 68 74" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M61.2722 61.651C48.113 74.675 28.0401 77.5078 13.8247 69.6181C0.313371 62.1241 -2.78863 44.9948 2.32593 28.9416C7.06625 14.0642 20.5554 1.95861 35.9545 0.146643C49.5794 -1.45508 57.2138 10.23 62.0234 21.9179C67.3404 34.8367 72.6018 50.4362 61.2694 61.6482L61.2722 61.651Z" fill="rgba(26,163,181,0.15)" />
              </svg>
              <img src={chatBubbleIcon} alt="" className="relative z-10 h-[44px] w-[44px]" style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(58%) saturate(548%) hue-rotate(143deg) brightness(91%) contrast(91%)" }} />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[18px] md:!text-[20px] !font-semibold leading-[1.35] md:!leading-[1.4]">Convenient &amp; accessible</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-[#5E5E5E]">
                Easy to schedule and virtual follow-ups available to keep your treatment on track anytime you need us.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-6">
            <div className="relative flex h-[74px] w-[72px] shrink-0 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 72 74" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.18816 64.3795C-3.39958 48.4772 -1.49202 26.3721 9.46198 11.9611C19.8727 -1.73098 37.2185 -2.93384 51.6141 4.63228C64.9551 11.6447 73.574 27.7867 71.7584 44.7011C70.1524 59.6658 57.0392 66.4641 44.5771 70.2053C30.8047 74.3397 14.4416 78.0716 6.18816 64.3795Z" fill="rgba(26,163,181,0.15)" />
              </svg>
              <img src={seenHeardIcon} alt="" className="relative z-10 h-[48px] w-[48px]" style={{ filter: "brightness(0) saturate(100%) invert(48%) sepia(58%) saturate(548%) hue-rotate(143deg) brightness(91%) contrast(91%)" }} />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[18px] md:!text-[20px] !font-semibold leading-[1.35] md:!leading-[1.4]">Be seen &amp; heard</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-[#5E5E5E]">
                We take the time to listen, ensuring your symptoms are validated and your care plan is personalized. We're proud of our high patient satisfaction and long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#e0f3f5" />
      </svg>
    </section>
  )
}

export default ApproachSection
