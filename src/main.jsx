import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import "./index.css"
import "./App.css"
import App from "./App.jsx"
import BlogDetail from "./pages/BlogDetail.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Blog from "./pages/Blog.jsx"
import DoctorProfile from "./pages/DoctorProfile.jsx"
import HealthGuide from "./pages/HealthGuide.jsx"
import ArthritisGuide from "./pages/ArthritisGuide.jsx"
import ArthritisGuide2 from "./pages/ArthritisGuide2.jsx"
import LivingWithRA from "./pages/LivingWithRA.jsx"
import SpecialisedTreatmentRA from "./pages/SpecialisedTreatmentRA.jsx"
import SymptomsWarningSignsRA from "./pages/SymptomsWarningSignsRA.jsx"
import BloodTestsMonitoringRA from "./pages/BloodTestsMonitoringRA.jsx"
import SpecialisedTreatmentOA from "./pages/SpecialisedTreatmentOA.jsx"
import LivingWithOA from "./pages/LivingWithOA.jsx"
import DiagnosisTreatmentOA from "./pages/DiagnosisTreatmentOA.jsx"
import SymptomsCausesOA from "./pages/SymptomsCausesOA.jsx"
import LupusSymptomsDiagnosis from "./pages/LupusSymptomsDiagnosis.jsx"
import PsoriaticArthritisGuide from "./pages/PsoriaticArthritisGuide.jsx"
import LupusTreatmentOptions from "./pages/LupusTreatmentOptions.jsx"
import LivingWithLupus from "./pages/LivingWithLupus.jsx"
import PsoriaticArthritisSymptoms from "./pages/PsoriaticArthritisSymptoms.jsx"
import PsoriaticArthritisDiagnosis from "./pages/PsoriaticArthritisDiagnosis.jsx"
import PsoriaticArthritisTreatment from "./pages/PsoriaticArthritisTreatment.jsx"
import LivingWithPsoriaticArthritis from "./pages/LivingWithPsoriaticArthritis.jsx"
import FibromyalgiaSymptomsDiagnosis from "./pages/FibromyalgiaSymptomsDiagnosis.jsx"
import FibromyalgiaTreatment from "./pages/FibromyalgiaTreatment.jsx"
import AnkylosingSpondylitisGuide from "./pages/AnkylosingSpondylitisGuide.jsx"
import AnkylosingSpondylitisTreatment from "./pages/AnkylosingSpondylitisTreatment.jsx"
import LivingWithFibromyalgia from "./pages/LivingWithFibromyalgia.jsx"
import RheumatoidArthritisOverview from "./pages/overview/RheumatoidArthritisOverview.jsx"
import OsteoarthritisOverview from "./pages/overview/OsteoarthritisOverview.jsx"
import LupusOverview from "./pages/overview/LupusOverview.jsx"
import PsoriaticArthritisOverview from "./pages/overview/PsoriaticArthritisOverview.jsx"
import AnkylosingSpondylitisOverview from "./pages/overview/AnkylosingSpondylitisOverview.jsx"
import GoutOverview from "./pages/overview/GoutOverview.jsx"
import FibromyalgiaOverview from "./pages/overview/FibromyalgiaOverview.jsx"
import Arthritis from "./pages/Arthritis.jsx"
import KnowledgeHub from "./pages/KnowledgeHub.jsx"
import TreatmentGuides from "./pages/TreatmentGuides.jsx"
import Gout from "./pages/Gout.jsx"
import Osteoarthritis from "./pages/Osteoarthritis.jsx"
import OsteoarthritisGuide from "./pages/OsteoarthritisGuide.jsx"
import OsteoarthritisAdvanced from "./pages/OsteoarthritisAdvanced.jsx"
import OsteoarthritisLiving from "./pages/OsteoarthritisLiving.jsx"
import Doctors from "./pages/Doctors.jsx"
import Locations from "./pages/Locations.jsx"
import Conditions from "./pages/Conditions.jsx"
import BookAppointment from "./pages/BookAppointment.jsx"
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx"
import MobileBottomTabs from "./components/MobileBottomTabs.jsx"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<BlogDetail />} />
        <Route path="/specialist/:id" element={<DoctorProfile />} />
        <Route path="/health-guide" element={<HealthGuide />} />
        <Route path="/Rheumatoid-Arthritis" element={<ArthritisGuide />} />
        <Route path="/Rheumatoid-Arthritis-2" element={<ArthritisGuide2 />} />
        <Route path="/Living-With-Rheumatoid-Arthritis" element={<LivingWithRA />} />
        <Route path="/Specialised-Treatment-Rheumatoid-Arthritis" element={<SpecialisedTreatmentRA />} />
        <Route path="/Rheumatoid-Arthritis-Symptoms-Warning-Signs" element={<SymptomsWarningSignsRA />} />
        <Route path="/Rheumatoid-Arthritis-Blood-Tests-Monitoring" element={<BloodTestsMonitoringRA />} />
        <Route path="/Specialised-Treatment-Osteoarthritis" element={<SpecialisedTreatmentOA />} />
        <Route path="/Living-With-Osteoarthritis" element={<LivingWithOA />} />
        <Route path="/Osteoarthritis-Diagnosis-Treatment" element={<DiagnosisTreatmentOA />} />
        <Route path="/Osteoarthritis-Symptoms-Causes" element={<SymptomsCausesOA />} />
        <Route path="/Lupus-Symptoms-Warning-Signs" element={<LupusSymptomsDiagnosis />} />
        <Route path="/Psoriatic-Arthritis" element={<PsoriaticArthritisGuide />} />
        <Route path="/Lupus-Treatment-Options" element={<LupusTreatmentOptions />} />
        <Route path="/Living-With-Lupus" element={<LivingWithLupus />} />
        <Route path="/Psoriatic-Arthritis-Symptoms-Warning-Signs" element={<PsoriaticArthritisSymptoms />} />
        <Route path="/Psoriatic-Arthritis-Diagnosis" element={<PsoriaticArthritisDiagnosis />} />
        <Route path="/Psoriatic-Arthritis-Treatment" element={<PsoriaticArthritisTreatment />} />
        <Route path="/Living-With-Psoriatic-Arthritis" element={<LivingWithPsoriaticArthritis />} />
        <Route path="/Fibromyalgia-Symptoms-Warning-Signs" element={<FibromyalgiaSymptomsDiagnosis />} />
        <Route path="/Fibromyalgia-Treatment" element={<FibromyalgiaTreatment />} />
        <Route path="/Ankylosing-Spondylitis" element={<AnkylosingSpondylitisGuide />} />
        <Route path="/Ankylosing-Spondylitis-Treatment" element={<AnkylosingSpondylitisTreatment />} />
        <Route path="/Living-With-Fibromyalgia" element={<LivingWithFibromyalgia />} />
        <Route path="/Rheumatoid-Arthritis-overview" element={<RheumatoidArthritisOverview />} />
        <Route path="/Osteoarthritis-overview" element={<OsteoarthritisOverview />} />
        <Route path="/Lupus-overview" element={<LupusOverview />} />
        <Route path="/Psoriatic-Arthritis-overview" element={<PsoriaticArthritisOverview />} />
        <Route path="/Ankylosing-Spondylitis-overview" element={<AnkylosingSpondylitisOverview />} />
        <Route path="/Gout-overview" element={<GoutOverview />} />
        <Route path="/Fibromyalgia-overview" element={<FibromyalgiaOverview />} />
        <Route path="/rheumatoid-arthritis" element={<Navigate to="/Rheumatoid-Arthritis" replace />} />
        <Route path="/health-guide/Rheumatoid-Arthritis" element={<Navigate to="/Rheumatoid-Arthritis" replace />} />
        <Route path="/arthritis" element={<Arthritis />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/treatment-guides" element={<TreatmentGuides />} />
        <Route path="/gout" element={<Gout />} />
        <Route path="/osteoarthritis" element={<Osteoarthritis />} />
        <Route path="/Osteoarthritis-Guide" element={<OsteoarthritisGuide />} />
        <Route path="/Osteoarthritis-Advanced" element={<OsteoarthritisAdvanced />} />
        <Route path="/Osteoarthritis-Living" element={<OsteoarthritisLiving />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
      <FloatingWhatsApp />
      <MobileBottomTabs />
    </BrowserRouter>
  </StrictMode>,
)
