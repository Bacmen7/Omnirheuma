import Header from "./components/Header"
import Hero from "./components/Hero"
import HealthGuideHero from "./components/HealthGuideHero"
import ApproachSection from "./components/ApproachSection"
import CategoryFilters from "./components/CategoryFilters"
import QuickLinks from "./components/QuickLinks"
import FeaturedInsights from "./components/FeaturedInsights"
import RAArticles from "./components/RAArticles"
import PsAArticles from "./components/PsAArticles"
import Specialists from "./components/Specialists"
import Testimonials from "./components/Testimonials"
import CTASection from "./components/CTASection"
import StatsBar from "./components/StatsBar"
import InsurancePartners from "./components/InsurancePartners"
import ConditionsGrid from "./components/ConditionsGrid"
import PatientControl from "./components/PatientControl"
import WhyRheuma from "./components/WhyRheuma"

import BriefingHero from "./components/BriefingHero"
import FocusJAK from "./components/FocusJAK"
import FocusDiagnostic from "./components/FocusDiagnostic"
import ResearchUpdates from "./components/ResearchUpdates"
import ExploreTopics from "./components/ExploreTopics"
import FAQ from "./components/FAQ"
import WellnessSeminars from "./components/WellnessSeminars"
import StrategicNetwork from "./components/StrategicNetwork"
import Newsletter from "./components/Newsletter"
import CtaBanner from "./components/CtaBanner"
import BriefingFooter from "./components/BriefingFooter"
import PrivacyBanner from "./components/PrivacyBanner"
import GoogleReviews from "./components/GoogleReviews"
import SpecializedCare from "./components/SpecializedCare"
import SymptomQuiz from "./components/SymptomQuiz"
import SuccessStories from "./components/SuccessStories"
import VideoLibrary from "./components/VideoLibrary"

function App() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        {/* ═══════════════════════════════════════════════
            ZONE 1 -INTRO & DISCOVERY
        ═══════════════════════════════════════════════ */}
        <Hero />
        <StatsBar />
        {/* <PatientControl /> */}

        {/* <InsurancePartners /> */}
        {/* <ConditionsGrid /> */}

        <WhyRheuma />

        <SpecializedCare />

        <SymptomQuiz />

        {/* <div className="bg-white">
          <CategoryFilters />
        </div> */}

        {/* <div className="bg-white">
          <FeaturedInsights />
        </div> */}

        {/* ═══════════════════════════════════════════════
            ZONE 2 -HEALTH GUIDE & CONDITIONS
        ═══════════════════════════════════════════════ */}
        <HealthGuideHero />
        {/* <QuickLinks /> */}

        {/* <div className="bg-white">
          <RAArticles />
        </div>

        <div className="bg-ghost">
          <PsAArticles />
        </div> */}

        {/* ═══════════════════════════════════════════════
            ZONE 3 -CLINICAL EXPERTISE & SPECIALISTS
        ═══════════════════════════════════════════════ */}
        <ApproachSection />

        <Specialists />

        <Testimonials />

        <GoogleReviews />

        {/* <div className="bg-white">
          <SuccessStories />
        </div> */}

        {/* <VideoLibrary /> */}

        {/* ═══════════════════════════════════════════════
            ZONE 4 -EXECUTIVE BRIEFING & RESEARCH
        ═══════════════════════════════════════════════ */}
        {/* <div className="bg-white">
          <ResearchUpdates />
        </div> */}

        {/* ═══════════════════════════════════════════════
            ZONE 5 -ENGAGE & CONVERT
        ═══════════════════════════════════════════════ */}
        {/* <div className="bg-white">
          <ExploreTopics />
        </div> */}

        {/* <div className="bg-ghost">
          <FAQ />
        </div> */}

        {/* <WellnessSeminars /> */}

        {/* <StrategicNetwork /> */}

        <CtaBanner spacerColor="#a0e2e4" />

        {/* <div className="pt-6 md:pt-10 bg-white">
          <Newsletter />
        </div> */}

        {/* <CTASection /> */}
      </main>

      <BriefingFooter />
      {/* <PrivacyBanner /> */}
    </div>
  )
}

export default App
