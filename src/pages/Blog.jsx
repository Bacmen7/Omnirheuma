import { ChevronDown, ArrowRight } from 'lucide-react';
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

const articles = [
  {
    id: 1,
    image: "/blog-articles/morning-joint-stiffness.webp",
    category: "Early Symptoms",
    title: "Why does joint pain feel worse in the morning but improve during the day?",
    author: "Omni Rheuma Team",
    excerpt: "Explains the inflammatory cycle in rheumatoid arthritis and why movement reduces stiffness. Strong early-symptom awareness topic."
  },
  {
    id: 2,
    image: "/blog-articles/autoimmune-fatigue.webp",
    category: "Autoimmune Awareness",
    title: "Can unexplained fatigue be an early sign of an autoimmune disease?",
    author: "Omni Rheuma Team",
    excerpt: "Targets patients who don’t yet recognize RA - bridges fatigue to autoimmune awareness."
  },
  {
    id: 3,
    image: "/blog-articles/symmetrical-joint-pain.webp",
    category: "Symptom Pattern",
    title: "Why do both hands or both knees hurt at the same time?",
    author: "Omni Rheuma Team",
    excerpt: "Focuses on symmetrical joint pain - a key differentiator of rheumatoid arthritis."
  },
  {
    id: 4,
    image: "/blog-articles/joint-pain-assessment.webp",
    category: "Self-Assessment",
    title: "Is your joint pain temporary or something more serious like rheumatoid arthritis?",
    author: "Omni Rheuma Team",
    excerpt: "Helps users self-assess whether their symptoms are normal or need medical attention."
  },
  {
    id: 5,
    image: "/blog-articles/stiffness-after-rest.webp",
    category: "Daily Life",
    title: "Why does joint stiffness increase after rest or inactivity?",
    author: "Omni Rheuma Team",
    excerpt: "Explains the concept of inactivity stiffness in RA - very relatable for patients."
  },
  {
    id: 6,
    image: "/blog-articles/silent-joint-swelling.webp",
    category: "Silent Symptoms",
    title: "Can joint swelling happen without severe pain? What it could mean",
    author: "Omni Rheuma Team",
    excerpt: "Covers silent or mild RA symptoms that patients often ignore."
  },
  {
    id: 7,
    image: "/blog-articles/women-autoimmune-awareness.webp",
    category: "Women & Autoimmunity",
    title: "Why do autoimmune diseases like rheumatoid arthritis affect women more?",
    author: "Omni Rheuma Team",
    excerpt: "Addresses a highly searched but under-explained topic in simple language."
  },
  {
    id: 8,
    image: "/blog-articles/recurring-joint-pain.webp",
    category: "Warning Signs",
    title: "Is recurring joint pain a warning sign you should not ignore?",
    author: "Omni Rheuma Team",
    excerpt: "Focuses on flare-ups and recurring symptoms - strong for early diagnosis intent."
  },
  {
    id: 9,
    image: "/blog-articles/delayed-ra-diagnosis.webp",
    category: "Diagnosis Journey",
    title: "Why do some people delay rheumatoid arthritis diagnosis for years?",
    author: "Omni Rheuma Team",
    excerpt: "Behavior + awareness topic builds trust and connects emotionally with patients."
  },
  {
    id: 10,
    image: "/blog-articles/lifestyle-flare-triggers.webp",
    category: "Lifestyle & Flares",
    title: "Can stress or lifestyle habits trigger autoimmune flare-ups?",
    author: "Omni Rheuma Team",
    excerpt: "Links modern lifestyle with autoimmune activity - highly engaging topic."
  },
  {
    id: 11,
    image: "/blog-articles/untreated-joint-pain.webp",
    category: "Disease Progression",
    title: "What happens if joint pain is left untreated for too long?",
    author: "Omni Rheuma Team",
    excerpt: "Educates about disease progression and long-term joint damage."
  },
  {
    id: 12,
    image: "/blog-articles/see-a-rheumatologist.webp",
    category: "When To See A Specialist",
    title: "How do you know if your joint pain needs a rheumatologist?",
    author: "Omni Rheuma Team",
    excerpt: "Strong conversion-focused topic - directly leads to doctor consultation."
  }
];

function Blog() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Open+Sans:wght@300;400;500;600;700&display=swap');
          .blog-page .font-sans-blog { font-family: 'Open Sans', sans-serif; }
          .blog-page .font-serif-blog { font-family: 'Lora', serif; }
          .blog-list-hero { padding: 0 !important; overflow: hidden; }
          .blog-list-hero-inner { padding: clamp(48px, 6vw, 80px) 0; }
          .blog-hero-wave { line-height: 0; background-color: #0f616e; }
          .blog-hero-wave svg { display: block; width: 100%; height: 56px; }
          .filter-checkbox { accent-color: #1A355D; width: 16px; height: 16px; margin-right: 8px; cursor: pointer; }
        `}} />

        <div className="blog-page font-sans-blog text-[#1A355D] bg-white">
          {/* Hero Section */}
          <section className="blog-list-hero custom-approach-section relative" style={{ backgroundColor: "#0f616e" }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="blog-list-hero-inner">
                <div>
                  <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-1.4px", color: "#ffffff", marginBottom: "1.25rem" }}>
                    Rheumatoid Arthritis Blog
                  </h1>
                  <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-base)", margin: 0, maxWidth: "600px" }}>
                    Explore patient-friendly articles on early symptoms, diagnosis clues, flare triggers, and when joint pain may need a rheumatologist.
                  </p>
                </div>
              </div>
            </div>

            {/* Curved Bottom SVG */}
            <div className="blog-hero-wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
              </svg>
            </div>
          </section>

          {/* Main Content Area */}
          <section className="px-6 pb-16 pt-14 md:pb-20 md:pt-16 max-w-7xl mx-auto relative z-10">

            {/* Filter Bar */}
            <div className="flex justify-end mb-12 md:mb-14 relative -mt-16 md:-mt-14 z-20">
              <div className="relative group">
                <button className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full py-3.5 px-6 flex items-center gap-4 text-sm font-semibold text-[#515a6a]">
                  Content Type
                  <div className="bg-gray-100 rounded-full p-1">
                    <ChevronDown size={14} strokeWidth={3} />
                  </div>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm text-[#1A355D] cursor-pointer">
                      <input type="checkbox" id="filter-blog" className="filter-checkbox" />
                      <label htmlFor="filter-blog" className="cursor-pointer">Blog</label>
                    </li>
                    <li className="flex items-center text-sm text-[#1A355D] cursor-pointer">
                      <input type="checkbox" id="filter-recipes" className="filter-checkbox" />
                      <label htmlFor="filter-recipes" className="cursor-pointer">Symptom Awareness</label>
                    </li>
                    <li className="flex items-center text-sm text-[#1A355D] cursor-pointer">
                      <input type="checkbox" id="filter-patient" className="filter-checkbox" />
                      <label htmlFor="filter-patient" className="cursor-pointer">Diagnosis Support</label>
                    </li>
                    <li className="flex items-center text-sm text-[#1A355D] cursor-pointer">
                      <input type="checkbox" id="filter-research" className="filter-checkbox" />
                      <label htmlFor="filter-research" className="cursor-pointer">Lifestyle & Flares</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-16">
              {articles.map((article) => (
                <a key={article.id} href="#" className="group block flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6 rounded-sm shrink-0 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow flex flex-col px-1">
                    <div className="mb-4">
                      <span className="inline-block bg-[#e0f3f5] text-[#5E5E5E] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-serif-blog text-xl leading-snug mb-3 text-[#1A355D] group-hover:text-blue-600 transition-colors min-h-[5.5rem]">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#515a6a] mb-3">
                      By <strong className="text-[#1A355D] font-semibold">{article.author}</strong>
                    </p>
                    {article.excerpt && (
                      <p className="text-sm text-[#515a6a] font-light mb-6 flex-grow leading-7">
                        {article.excerpt}
                      </p>
                    )}
                    <div className={`flex items-center gap-2 text-sm font-bold text-[#1A355D] pt-1 ${article.excerpt ? 'mt-auto' : 'mt-auto'}`}>
                      Read More
                      <div className="w-6 h-6 rounded-full bg-[#1AA3B5] flex items-center justify-center">
                        <ArrowRight size={12} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-20 mb-10">
              <button className="w-10 h-10 rounded-full bg-[#e0f3f5] text-[#1A355D] flex items-center justify-center font-bold text-sm">
                1
              </button>
            </div>
          </section>

          {/* Newsletter */}
          <div className="bg-navy-deep relative mt-16">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: "translateY(-99%)" }}>
              <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[32px] md:h-[40px]">
                <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#0f616e" />
              </svg>
            </div>
            <Newsletter variant="dark" />
          </div>
        </div>
      </main>
      <BriefingFooter />
    </div>
  );
}

export default Blog;
