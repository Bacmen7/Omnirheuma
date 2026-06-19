import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import CtaBanner from "../components/CtaBanner"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const coverBoxes = [
  { title: "Inflammatory Arthritis", desc: "RA, PsA, AS, JIA -autoimmune conditions that cause chronic joint inflammation and require disease-modifying treatment." },
  { title: "Degenerative Disease", desc: "Osteoarthritis and age-related joint wear. Cartilage breakdown, bone spurs, and progressive joint narrowing." },
  { title: "Connective Tissue Disease", desc: "Lupus, scleroderma, Sjögren's, myositis -systemic conditions affecting collagen, skin, and internal organs." },
  { title: "Vasculitis", desc: "Inflammation of blood vessels, from giant cell arteritis to ANCA-associated vasculitis. Can affect any organ system." },
  { title: "Metabolic Bone Disease", desc: "Osteoporosis, Paget's disease, and vitamin D disorders. Bone density loss and fracture prevention." },
  { title: "Soft Tissue Disorders", desc: "Fibromyalgia, tendinitis, bursitis, carpal tunnel -conditions affecting muscles, tendons, and ligaments." },
]

const symptomQuestions = [
  { q: "Do you have pain in your joints?", sub: "Persistent aching, throbbing, or sharp pain in one or more joints" },
  { q: "Do your joints feel stiff in the morning?", sub: "Stiffness lasting more than 30 minutes after waking" },
  { q: "Do you notice swelling or warmth around any joint?", sub: "Visible puffiness, redness, or heat in joint areas" },
  { q: "Does back pain wake you at night or worsen with rest?", sub: "Inflammatory back pain pattern -improves with movement" },
  { q: "Have these symptoms lasted more than 6 weeks?", sub: "Duration is a key factor in distinguishing inflammatory conditions" },
  { q: "Do you have fatigue, rash, or family history of arthritis?", sub: "Systemic symptoms and genetic predisposition matter" },
]

const conditionData = {
  ra: {
    name: "Rheumatoid Arthritis",
    typeLabel: "Autoimmune",
    overview: "Rheumatoid arthritis (RA) is a chronic autoimmune disorder that primarily affects joints, causing pain, swelling, stiffness, and progressive joint destruction. The immune system mistakenly attacks the synovial membrane lining the joints, leading to inflammation that can damage cartilage and bone.",
    keyPoints: [
      "Affects ~1% of the global population, women 2–3x more often than men",
      "Morning stiffness lasting >30 minutes is a hallmark symptom",
      "Symmetrical joint involvement (both hands, both wrists) is typical",
      "Early treatment within the 'window of opportunity' (first 12 weeks) dramatically improves outcomes",
      "Can affect organs beyond joints -heart, lungs, eyes, blood vessels",
    ],
    treatment: [
      "DMARDs (methotrexate as first-line)",
      "Biologics (TNF inhibitors, IL-6 blockers)",
      "JAK inhibitors (tofacitinib, baricitinib)",
      "Short-term corticosteroids for flare management",
      "Physical therapy and lifestyle modifications",
    ],
    when: "If you have joint swelling lasting more than 6 weeks, morning stiffness exceeding 30 minutes, or a positive RF/Anti-CCP blood test, consult a rheumatologist promptly.",
    articles: [
      { img: "/images/lab-test.webp", cat: "Research", title: "Treat-to-Target Strategies in RA", time: "8 min" },
      { img: "/images/medication.webp", cat: "Treatment", title: "Methotrexate: What You Need to Know", time: "6 min" },
    ],
  },
  oa: {
    name: "Osteoarthritis",
    typeLabel: "Degenerative",
    overview: "Osteoarthritis (OA) is the most common form of arthritis, affecting over 500 million people worldwide. It occurs when the protective cartilage cushioning the ends of bones wears down over time, leading to pain, stiffness, and reduced mobility.",
    keyPoints: [
      "Most common joint disease -affects over 500 million people globally",
      "Primarily affects knees, hips, hands, and spine",
      "Risk increases with age, obesity, joint injury, and repetitive stress",
      "Morning stiffness is brief (<15 minutes), unlike inflammatory arthritis",
      "Bone spurs (osteophytes) and joint space narrowing visible on X-ray",
    ],
    treatment: [
      "Weight management and low-impact exercise",
      "Physical therapy for joint mobilisation and strengthening",
      "NSAIDs and topical analgesics for pain relief",
      "Corticosteroid or hyaluronic acid injections",
      "Joint replacement surgery for advanced cases",
    ],
    when: "If joint pain limits daily activities, doesn't respond to over-the-counter treatments, or you hear grinding/clicking in your joints, see a specialist for evaluation.",
    articles: [
      { img: "/images/exercise.webp", cat: "Lifestyle", title: "Exercise Strategies for Knee OA", time: "7 min" },
      { img: "/images/medication.webp", cat: "Treatment", title: "When to Consider Joint Replacement", time: "9 min" },
    ],
  },
  psa: {
    name: "Psoriatic Arthritis",
    typeLabel: "Autoimmune",
    overview: "Psoriatic arthritis (PsA) is an inflammatory arthritis associated with psoriasis. It can affect any joint and often involves the skin, nails, and entheses (where tendons attach to bone). PsA is a heterogeneous disease with multiple clinical patterns.",
    keyPoints: [
      "Affects up to 30% of people with psoriasis",
      "Can present before, during, or after skin psoriasis appears",
      "Dactylitis (sausage digits) and enthesitis are hallmark features",
      "Five clinical patterns: asymmetric oligoarthritis, symmetric polyarthritis, DIP-predominant, spondylitis, arthritis mutilans",
      "Nail changes (pitting, onycholysis) occur in 80% of PsA patients",
    ],
    treatment: [
      "DMARDs (methotrexate, leflunomide)",
      "Biologics -TNF inhibitors, IL-17 inhibitors (secukinumab), IL-23 inhibitors",
      "JAK inhibitors (tofacitinib, upadacitinib)",
      "PDE4 inhibitor (apremilast) for mild-moderate disease",
      "Topical treatments for skin psoriasis component",
    ],
    when: "If you have psoriasis and develop joint pain, swelling, or stiffness -or if you notice sausage-like swelling of fingers/toes -seek rheumatology evaluation promptly.",
    articles: [
      { img: "/images/hero-doctor.webp", cat: "Research", title: "IL-17 vs TNF Inhibitors in PsA", time: "6 min" },
      { img: "/images/medication.webp", cat: "Diagnosis", title: "Recognising Early PsA", time: "5 min" },
    ],
  },
  as: {
    name: "Ankylosing Spondylitis",
    typeLabel: "Autoimmune",
    overview: "Ankylosing spondylitis (AS) is a chronic inflammatory disease primarily affecting the spine and sacroiliac joints. Over time, chronic spinal inflammation can lead to fusion of the vertebrae (ankylosis), resulting in reduced flexibility and a stooped posture.",
    keyPoints: [
      "Typically begins in young adults (ages 17–35), more common in men",
      "Back pain that improves with exercise and worsens with rest is characteristic",
      "Night pain and prolonged morning stiffness (>30 min) are hallmarks",
      "HLA-B27 gene is positive in ~90% of patients",
      "Can involve peripheral joints, eyes (uveitis), heart, and lungs",
    ],
    treatment: [
      "NSAIDs as first-line treatment (continuous use may slow spinal fusion)",
      "Biologics -TNF inhibitors and IL-17 inhibitors for active disease",
      "JAK inhibitors (upadacitinib) for refractory cases",
      "Structured exercise program and physical therapy are essential",
      "Posture management and ergonomic workplace adaptations",
    ],
    when: "If you're under 40 with back pain lasting more than 3 months that improves with movement and worsens at rest, especially with night pain, see a rheumatologist.",
    articles: [
      { img: "/images/exercise.webp", cat: "Lifestyle", title: "Exercise Programs for AS Patients", time: "7 min" },
      { img: "/images/lab-test.webp", cat: "Research", title: "HLA-B27 and Axial SpA", time: "8 min" },
    ],
  },
  gout: {
    name: "Gout",
    typeLabel: "Metabolic",
    overview: "Gout is a form of inflammatory arthritis caused by the deposition of monosodium urate (MSU) crystals in joints and soft tissues. It results from chronically elevated serum uric acid levels (hyperuricaemia) and presents as acute, excruciatingly painful joint attacks.",
    keyPoints: [
      "Affects ~4% of adults -most common inflammatory arthritis in men",
      "Classic presentation: sudden, severe pain in the big toe (podagra)",
      "Attacks often strike at night and peak within 12–24 hours",
      "Tophi (urate crystal deposits) can develop after years of uncontrolled disease",
      "Strongly associated with metabolic syndrome, kidney disease, and cardiovascular risk",
    ],
    treatment: [
      "Acute flare: colchicine, NSAIDs, or corticosteroids",
      "Urate-lowering therapy: allopurinol (first-line), febuxostat",
      "Target serum urate <6 mg/dL (or <5 mg/dL if tophi present)",
      "Dietary modifications: limit purines, alcohol, fructose",
      "Weight management and adequate hydration",
    ],
    when: "If you experience sudden, severe joint pain with redness and swelling -especially in the big toe, ankle, or knee -seek urgent evaluation to confirm gout and begin treatment.",
    articles: [
      { img: "/images/medication.webp", cat: "Treatment", title: "Urate-Lowering Therapy Guide", time: "6 min" },
      { img: "/images/hero-doctor.webp", cat: "Lifestyle", title: "Gout and Diet: What Works", time: "5 min" },
    ],
  },
  ctd: {
    name: "Connective Tissue Disease",
    typeLabel: "Autoimmune",
    overview: "Connective tissue diseases (CTDs) are a group of autoimmune conditions that affect collagen and connective tissue throughout the body. This includes scleroderma, Sjögren's syndrome, dermatomyositis, polymyositis, and mixed connective tissue disease (MCTD).",
    keyPoints: [
      "Systemic diseases that can affect skin, joints, muscles, blood vessels, and internal organs",
      "ANA (antinuclear antibody) testing is a key screening tool",
      "Raynaud's phenomenon is common across many CTDs",
      "Overlap syndromes are frequent -patients may have features of multiple CTDs",
      "Organ involvement (lungs, kidneys, heart) determines prognosis",
    ],
    treatment: [
      "Immunosuppressants (mycophenolate, azathioprine, cyclophosphamide)",
      "Corticosteroids for acute flares and organ-threatening disease",
      "Biologics (rituximab for refractory cases)",
      "Organ-specific management (e.g., ACE inhibitors for renal crisis)",
      "Regular screening for pulmonary and cardiac complications",
    ],
    when: "If you have Raynaud's phenomenon combined with joint pain, skin changes, muscle weakness, or unexplained organ dysfunction, a rheumatology evaluation is essential.",
    articles: [
      { img: "/images/lab-test.webp", cat: "Diagnosis", title: "Understanding ANA Testing", time: "7 min" },
      { img: "/images/medication.webp", cat: "Research", title: "Advances in Scleroderma Treatment", time: "8 min" },
    ],
  },
  fibro: {
    name: "Fibromyalgia",
    typeLabel: "Pain Syndrome",
    overview: "Fibromyalgia is a chronic condition characterised by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive difficulties ('fibro fog'). It involves central sensitisation -the nervous system amplifies pain signals.",
    keyPoints: [
      "Affects 2–4% of the population, predominantly women",
      "Widespread pain lasting >3 months on both sides of the body, above and below the waist",
      "Associated with fatigue, unrefreshing sleep, and cognitive dysfunction",
      "No inflammatory markers or imaging abnormalities -diagnosis is clinical",
      "Frequently co-exists with other rheumatic conditions (RA, lupus, OA)",
    ],
    treatment: [
      "Multimodal approach is essential -no single treatment is sufficient",
      "Medications: duloxetine, pregabalin, milnacipran, low-dose amitriptyline",
      "Regular aerobic exercise -strongest evidence base of any treatment",
      "Cognitive behavioural therapy (CBT) for pain management and coping",
      "Sleep hygiene optimisation and stress management",
    ],
    when: "If you have widespread pain lasting more than 3 months with significant fatigue and sleep problems that don't improve with rest, a rheumatologist can help establish the diagnosis and create a treatment plan.",
    articles: [
      { img: "/images/exercise.webp", cat: "Lifestyle", title: "Exercise for Fibromyalgia", time: "6 min" },
      { img: "/images/hero-doctor.webp", cat: "Treatment", title: "CBT and Chronic Pain", time: "7 min" },
    ],
  },
  vasculitis: {
    name: "Vasculitis",
    typeLabel: "Autoimmune",
    overview: "Vasculitis refers to a group of disorders characterised by inflammation of blood vessels. It can affect arteries, veins, and capillaries of any size, in any organ. Classification depends on the size of vessels involved -large, medium, or small vessel vasculitis.",
    keyPoints: [
      "Can affect any organ system -symptoms depend on which vessels are inflamed",
      "Large vessel: giant cell arteritis (GCA), Takayasu arteritis",
      "Medium vessel: polyarteritis nodosa (PAN), Kawasaki disease",
      "Small vessel: ANCA-associated vasculitis (GPA, MPA, EGPA), IgA vasculitis",
      "Constitutional symptoms (fever, weight loss, fatigue) are common across all types",
    ],
    treatment: [
      "High-dose corticosteroids for induction of remission",
      "Cyclophosphamide or rituximab for ANCA-associated vasculitis",
      "Tocilizumab for giant cell arteritis (steroid-sparing)",
      "Maintenance therapy with azathioprine, methotrexate, or rituximab",
      "Regular monitoring of organ function and disease activity",
    ],
    when: "If you experience unexplained fever, weight loss, new severe headaches (especially over age 50), skin purpura, or blood/protein in urine combined with joint pain, seek urgent evaluation.",
    articles: [
      { img: "/images/lab-test.webp", cat: "Research", title: "Rituximab in ANCA Vasculitis", time: "9 min" },
      { img: "/images/medication.webp", cat: "Diagnosis", title: "GCA: Recognising the Signs", time: "6 min" },
    ],
  },
  lupus: {
    name: "Lupus (SLE)",
    typeLabel: "Autoimmune",
    overview: "Systemic lupus erythematosus (SLE) is a chronic autoimmune disease that can affect virtually any organ system. The immune system produces autoantibodies that attack healthy tissue, causing widespread inflammation in the skin, joints, kidneys, brain, heart, and lungs.",
    keyPoints: [
      "Affects women 9x more often than men, typically ages 15–45",
      "Butterfly (malar) rash across the cheeks is a classic sign",
      "Lupus nephritis (kidney inflammation) occurs in ~50% of patients",
      "Disease course is characterised by flares and remissions",
      "ANA positive in >95% of cases; anti-dsDNA and anti-Smith are specific markers",
    ],
    treatment: [
      "Hydroxychloroquine -cornerstone therapy for ALL lupus patients",
      "Immunosuppressants (mycophenolate, azathioprine) for organ involvement",
      "Belimumab (first biologic approved for lupus)",
      "Voclosporin for lupus nephritis",
      "Corticosteroids for flares -with goal of minimising long-term use",
    ],
    when: "If you have a butterfly rash, joint pain, unexplained fatigue, mouth sores, sun sensitivity, or a positive ANA test, consult a rheumatologist for lupus evaluation.",
    articles: [
      { img: "/images/hero-doctor.webp", cat: "Research", title: "Belimumab + Voclosporin in Lupus Nephritis", time: "7 min" },
      { img: "/images/lab-test.webp", cat: "Treatment", title: "Hydroxychloroquine: The Lupus Essential", time: "5 min" },
    ],
  },
  reactive: {
    name: "Reactive Arthritis",
    typeLabel: "Inflammatory",
    overview: "Reactive arthritis develops after an infection -typically gastrointestinal or genitourinary. It causes joint inflammation, eye inflammation, and urinary symptoms. Most cases resolve within 6–12 months but some become chronic.",
    keyPoints: ["Triggered by infections (Chlamydia, Salmonella, Shigella)", "Classic triad: arthritis, urethritis, conjunctivitis", "Asymmetric joint involvement, often lower limbs", "ESR/CRP elevated, HLA-B27 positive in many cases"],
    treatment: ["NSAIDs for joint inflammation", "Antibiotics if active infection", "DMARDs for chronic cases", "Physiotherapy"],
    when: "Joint swelling after a gastrointestinal or genitourinary infection, especially with eye redness or urinary symptoms.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Guide", title: "Understanding Your Condition", time: "5 min" }],
  },
  sjogrens: {
    name: "Sjögren's Syndrome",
    typeLabel: "Autoimmune",
    overview: "Sjögren's syndrome is a chronic autoimmune condition primarily affecting the moisture-producing glands, causing dry eyes and dry mouth. It can also affect joints, lungs, kidneys, and nerves.",
    keyPoints: ["Dry eyes and dry mouth are cardinal symptoms", "ANA, SSA/SSB antibodies are key diagnostic markers", "Can occur alone (primary) or with other autoimmune conditions", "Increased risk of lymphoma"],
    treatment: ["Artificial tears and saliva substitutes", "Hydroxychloroquine for systemic features", "Pilocarpine for severe dryness", "Regular dental care essential"],
    when: "Persistent dry eyes/mouth with joint pain, fatigue, or positive ANA.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Guide", title: "Understanding Your Condition", time: "5 min" }],
  },
  jia: {
    name: "Juvenile Idiopathic Arthritis",
    typeLabel: "Paediatric",
    overview: "JIA is the most common chronic arthritis in children under 16. It encompasses several subtypes with different patterns of joint involvement and systemic features. Early treatment prevents growth problems and joint damage.",
    keyPoints: ["Persistent joint swelling in children lasting >6 weeks", "Multiple subtypes: oligoarticular, polyarticular, systemic", "ANA and ESR help classify subtypes", "Eye screening essential -risk of uveitis"],
    treatment: ["NSAIDs for mild disease", "Methotrexate for polyarticular JIA", "Biologics (TNF inhibitors, IL-6 blockers)", "Regular ophthalmology screening"],
    when: "Any child with persistent joint swelling, limping, or stiffness lasting more than 6 weeks.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Guide", title: "Understanding Your Condition", time: "5 min" }],
  },
  pmr: {
    name: "Polymyalgia Rheumatica",
    typeLabel: "Inflammatory",
    overview: "PMR causes severe stiffness and pain in the shoulders and hips, typically in adults over 50. It is closely associated with giant cell arteritis. ESR and CRP are markedly elevated.",
    keyPoints: ["Bilateral shoulder and hip stiffness and pain", "Age >50, rapid onset over days to weeks", "ESR/CRP dramatically elevated", "Dramatic response to low-dose prednisolone is diagnostic"],
    treatment: ["Low-dose prednisolone (15–20mg) -first-line", "Slow steroid taper over 12–18 months", "Methotrexate as steroid-sparing agent", "Monitor for giant cell arteritis symptoms"],
    when: "Sudden bilateral shoulder/hip stiffness in someone over 50 with raised inflammatory markers.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Guide", title: "Understanding Your Condition", time: "5 min" }],
  },
  osteoporosis: {
    name: "Osteoporosis",
    typeLabel: "Metabolic Bone",
    overview: "Osteoporosis is a condition of reduced bone density and increased fracture risk. It is often silent until a fracture occurs. DEXA scanning measures bone density and guides treatment.",
    keyPoints: ["Silent disease -often diagnosed after fracture", "DEXA scan is the gold standard for diagnosis", "Risk factors: age, female sex, steroid use, family history", "Vertebral and hip fractures cause significant morbidity"],
    treatment: ["Calcium and vitamin D supplementation", "Bisphosphonates (alendronate, zoledronic acid)", "Denosumab for high-risk patients", "Weight-bearing exercise"],
    when: "Fragility fracture, long-term steroid use, or DEXA T-score ≤ -2.5.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Guide", title: "Understanding Bone Density Tests", time: "5 min" }],
  },
  scleroderma: {
    name: "Systemic Sclerosis",
    typeLabel: "Autoimmune",
    overview: "Systemic sclerosis (scleroderma) causes hardening and tightening of the skin and connective tissues. It can affect blood vessels, internal organs, and the digestive tract. Raynaud's phenomenon is often the first symptom.",
    keyPoints: ["Skin tightening is the hallmark feature", "Raynaud's phenomenon in >90% of patients", "ANA and Scl-70 antibodies aid diagnosis", "Interstitial lung disease is a major complication"],
    treatment: ["Calcium channel blockers for Raynaud's", "Mycophenolate for skin and lung involvement", "Nintedanib for progressive lung fibrosis", "Regular pulmonary function monitoring"],
    when: "Skin tightening, Raynaud's phenomenon with digital ulcers, or unexplained shortness of breath.",
    articles: [{ img: "/images/lab-test.webp", cat: "Clinical", title: "Scleroderma: Early Recognition", time: "6 min" }],
  },
  septic: {
    name: "Septic Arthritis",
    typeLabel: "Infectious",
    overview: "Septic arthritis is a medical emergency -a joint infection that can destroy cartilage within days if untreated. It requires urgent joint aspiration and intravenous antibiotics.",
    keyPoints: ["Hot, swollen, extremely painful single joint", "Fever + joint swelling = emergency until proven otherwise", "Joint aspiration with culture is diagnostic gold standard", "Staphylococcus aureus is the most common cause"],
    treatment: ["Urgent joint aspiration", "IV antibiotics -empiric then targeted", "Surgical washout if no improvement", "Close monitoring of joint function"],
    when: "Any hot, swollen, extremely painful joint with fever -seek emergency care immediately.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Emergency", title: "Septic Arthritis: Act Fast", time: "4 min" }],
  },
  cppd: {
    name: "Crystal Arthropathies (CPPD)",
    typeLabel: "Crystal-Induced",
    overview: "Calcium pyrophosphate deposition disease (CPPD) causes acute joint inflammation similar to gout but due to calcium crystals. It commonly affects the knee and wrist, particularly in elderly patients.",
    keyPoints: ["Acute joint inflammation mimicking gout", "X-ray shows chondrocalcinosis (cartilage calcification)", "Crystal analysis confirms diagnosis", "Common in elderly, associated with osteoarthritis"],
    treatment: ["NSAIDs or colchicine for acute attacks", "Joint aspiration with corticosteroid injection", "Low-dose colchicine for prophylaxis", "No urate-lowering therapy needed (unlike gout)"],
    when: "Acute joint swelling in an elderly patient, especially knee or wrist, with X-ray showing calcification.",
    articles: [{ img: "/images/lab-test.webp", cat: "Diagnosis", title: "CPPD vs Gout: Key Differences", time: "5 min" }],
  },
  mctd: {
    name: "Mixed Connective Tissue Disease",
    typeLabel: "Autoimmune",
    overview: "MCTD is an overlap syndrome with features of lupus, scleroderma, and polymyositis. Anti-U1 RNP antibody is the hallmark. Raynaud's, swollen fingers, and joint pain are common early features.",
    keyPoints: ["Overlap features of lupus, scleroderma, myositis", "Anti-U1 RNP antibody is the diagnostic marker", "Raynaud's and puffy fingers are early signs", "Pulmonary hypertension is a serious complication"],
    treatment: ["NSAIDs for mild joint symptoms", "Corticosteroids for flares", "Hydroxychloroquine for skin and joints", "Immunosuppressants for organ involvement"],
    when: "Joint pain with Raynaud's, swollen fingers, and features of multiple autoimmune conditions.",
    articles: [{ img: "/images/hero-doctor.webp", cat: "Clinical", title: "Recognising MCTD", time: "6 min" }],
  },
  raynauds: {
    name: "Raynaud's Phenomenon",
    typeLabel: "Vascular",
    overview: "Raynaud's causes episodes of reduced blood flow to fingers and toes in response to cold or stress, causing colour changes (white → blue → red). It can be primary (benign) or secondary to autoimmune disease.",
    keyPoints: ["Finger colour change in cold: white → blue → red", "Primary Raynaud's is common and benign", "Secondary Raynaud's associated with scleroderma, lupus, MCTD", "Nailfold capillaroscopy helps distinguish primary from secondary"],
    treatment: ["Keep hands warm -prevention is key", "Calcium channel blockers (nifedipine)", "Avoid vasoconstrictors (smoking, certain medications)", "Investigate for underlying autoimmune cause"],
    when: "Finger colour changes with cold exposure, especially if associated with digital ulcers or other autoimmune symptoms.",
    articles: [{ img: "/images/lab-test.webp", cat: "Guide", title: "Raynaud's: When to Worry", time: "5 min" }],
  },
}

const treatmentCards = [
  {
    img: "/images/medication.webp",
    badge: "Disease-Modifying",
    title: "DMARDs",
    desc: "Methotrexate, Hydroxychloroquine, Sulfasalazine, Leflunomide",
    footer: "First-line therapy for inflammatory arthritis",
  },
  {
    img: "/images/lab-test.webp",
    badge: "Biologics",
    title: "Biologic Therapies",
    desc: "TNF inhibitors, IL-6, IL-17, B-cell",
    footer: "Precision-targeted immune modulation",
  },
  {
    img: "/images/hero-doctor.webp",
    badge: "JAK Inhibitors",
    title: "JAK Inhibitors",
    desc: "Baricitinib, Tofacitinib, Upadacitinib",
    footer: "Oral small-molecule targeted therapy",
  },
  {
    img: "/images/exercise.webp",
    badge: "Physiotherapy",
    title: "Physiotherapy & Exercise",
    desc: "Joint mobilisation, strength training, hydrotherapy",
    footer: "Restore function and reduce pain",
  },
  {
    img: "/images/medication.webp",
    badge: "Procedures",
    title: "Joint Injections",
    desc: "Corticosteroid, hyaluronic acid, PRP",
    footer: "Targeted relief for specific joints",
  },
  {
    img: "/images/joints.webp",
    badge: "Surgery",
    title: "Surgery",
    desc: "TKR, THR, synovectomy, arthroscopy, spinal fusion",
    footer: "When conservative options aren't enough",
  },
  {
    img: "/images/diet.webp",
    badge: "Lifestyle",
    title: "Diet & Nutrition",
    desc: "Mediterranean diet, omega-3, weight management",
    footer: "Anti-inflammatory eating strategies",
  },
  {
    img: "/images/pain-relief.webp",
    badge: "Pain Management",
    title: "Pain Management",
    desc: "NSAIDs, analgesics, topical agents, TENS, CBT",
    footer: "Multi-modal pain control",
  },
]

const featuredArticle = {
  img: "/images/lab-test.webp",
  cat: "Research",
  title: "Treat-to-Target in RA: Does Achieving Remission Actually Prevent Long-Term Joint Damage?",
  author: "Dr. Priya Menon",
  time: "10 min read",
  date: "March 2026",
}

const articleList = [
  { img: "/images/hero-doctor.webp", cat: "Research", title: "IL-17 vs TNF Inhibitors in PsA", time: "6 min read" },
  { img: "/images/medication.webp", cat: "Safety", title: "JAK Inhibitors in 2025: Updated CV Risk Data", time: "9 min read" },
  { img: "/images/lab-test.webp", cat: "Research", title: "Belimumab + Voclosporin in Lupus Nephritis", time: "7 min read" },
  { img: "/images/diet.webp", cat: "Lifestyle", title: "Mediterranean Diet and CRP Reduction in RA", time: "5 min read" },
]

/* ─────────────────────────────────────────────
   BOOK ICON SVG (used in condition tiles)
   ───────────────────────────────────────────── */
const BookIcon = ({ size = 28, color = "#0f616e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function KnowledgeHub() {
  useEffect(() => {
    document.title = "Knowledge Hub | Omni Rheuma"
    return () => { document.title = "Omni Rheuma | Professional Rheumatology Resource" }
  }, [])

  /* Symptom checker state */
  const [answers, setAnswers] = useState(Array(6).fill(null))
  const [checkerStep, setCheckerStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (value) => {
    const next = [...answers]
    next[checkerStep] = value
    setAnswers(next)
    if (checkerStep < 5) {
      setCheckerStep(checkerStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetChecker = () => {
    setAnswers(Array(6).fill(null))
    setCheckerStep(0)
    setShowResult(false)
  }

  const yesCount = answers.filter((a) => a === true).length

  const getRiskLevel = () => {
    if (yesCount <= 1) return { key: "safe", label: "Low Risk -Unlikely Inflammatory", color: "#3aa876", bg: "rgba(58,168,118,.12)", border: "rgba(58,168,118,.25)", icon: "\u2714", message: "Your responses suggest a low likelihood of inflammatory arthritis. Maintain a healthy lifestyle and monitor for any changes.", cta: "Learn About Prevention" }
    if (yesCount <= 3) return { key: "consult", label: "Moderate -Consider Evaluation", color: "#e07a3a", bg: "rgba(224,122,58,.12)", border: "rgba(224,122,58,.25)", icon: "!", message: "Some of your responses suggest features that may warrant further evaluation. Consider booking an appointment with a rheumatologist for a thorough assessment.", cta: "Find a Rheumatologist" }
    return { key: "urgent", label: "High Risk -See a Specialist", color: "#d94f4f", bg: "rgba(217,79,79,.12)", border: "rgba(217,79,79,.25)", icon: "!!", message: "Multiple responses suggest features consistent with inflammatory arthritis. We strongly recommend consulting a rheumatologist as soon as possible for proper evaluation and early treatment.", cta: "Book Urgent Consultation" }
  }

  /* Condition panel state */
  const [activeCondition, setActiveCondition] = useState(null)

  /* Show more conditions */
  const [showAllConditions, setShowAllConditions] = useState(false)

  /* Newsletter state */
  const [email, setEmail] = useState("")

  /* Treatment carousel */
  const [treatDot, setTreatDot] = useState(0)
  const treatCarouselRef = useRef(null)
  const articleScrollRef = useRef(null)
  const handleTreatCarousel = useCallback(() => {
    const el = treatCarouselRef.current
    if (!el) return
    const cardW = el.firstChild?.offsetWidth || 1
    const idx = Math.round(el.scrollLeft / (cardW + 16))
    setTreatDot(Math.min(idx, 7))
  }, [])

  return (
    <div className="text-navy-deep bg-white" style={{ fontFamily: "var(--font-base)" }}>
      <Header />
      <main>

        {/* ═══════════ 1 · HERO ═══════════ */}
        <section style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div style={{ padding: "clamp(48px, 6vw, 80px) 0" }}>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-1.4px", color: "#ffffff", marginBottom: "1.25rem" }}>
                Rheuma <span style={{ color: "#7DE8F0" }}>Knowledge Hub</span>
              </h1>
              <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-base)", margin: 0, maxWidth: "600px" }}>
                Your comprehensive resource for understanding rheumatic conditions, treatment options, and the latest research -written and reviewed by board-certified rheumatologists.
              </p>
            </div>
          </div>
          {/* Wave */}
          <div style={{ lineHeight: 0, backgroundColor: "#0f616e" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "56px" }}>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" />
            </svg>
          </div>
        </section>


        {/* ═══════════ 2 · WHAT IS RHEUMATOLOGY ═══════════ */}
        <section style={{ backgroundColor: "#ffffff", padding: "clamp(64px, 8vw, 120px) 0" }}>
          <div style={{ width: "90vw", maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

            {/* Top: Heading + Description -left aligned */}
            <div className="text-left" style={{ marginBottom: "clamp(48px, 5vw, 80px)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.85rem, 3.6vw, 2.9rem)", lineHeight: 1.12, letterSpacing: "-0.6px", color: "#0f616e", marginBottom: "20px" }}>
                What Is Rheumatology?
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)", marginBottom: "18px" }}>
                Rheumatology is a branch of medicine that focuses on conditions affecting your joints, muscles, and bones. These include everyday problems like joint, bone or muscle pain and stiffness. It also comprises conditions where the body's immune system mistakenly attacks its own tissues.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>
                A doctor who specialises in this field is called a rheumatologist. They are trained to diagnose, treat, and manage conditions such as Rheumatoid Arthritis, Gout, Lupus, Osteoporosis, and Ankylosing Spondylitis, among others.
              </p>
            </div>

            {/* Bottom: Two info cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(16px, 2vw, 32px)" }}>

              {/* Card 1 -When Should You See */}
              <div style={{ backgroundColor: "#e8f4f8", borderRadius: "16px", padding: "clamp(32px, 3vw, 48px)", transition: "box-shadow 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 36px 60px 0px rgba(0,0,0,0.06)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.2rem, 2.1vw, 1.55rem)", color: "#0f616e", lineHeight: 1.22, marginBottom: "18px" }}>
                  When Should You See a Rheumatologist?
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)", marginBottom: "22px" }}>
                  You should consider a visit if you notice any of the following:
                </p>
                <div className="flex flex-col" style={{ gap: "20px" }}>
                  {[
                    "Joint pain or swelling that lasts more than a few weeks",
                    "Morning stiffness that takes more than 30 minutes to ease",
                    "Unexplained fatigue along with joint or muscle pain",
                    "Joints that feel warm or look red",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="shrink-0 mt-1" style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#1AA3B5" }} />
                      <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2 -Why Early Care Matters */}
              <div style={{ backgroundColor: "#e8f4f8", borderRadius: "16px", padding: "clamp(32px, 3vw, 48px)", transition: "box-shadow 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 36px 60px 0px rgba(0,0,0,0.06)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.2rem, 2.1vw, 1.55rem)", color: "#0f616e", lineHeight: 1.22, marginBottom: "18px" }}>
                  Why Early Care Matters
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)", marginBottom: "22px" }}>
                  Many joint and immune conditions get worse over time if left untreated. Seeing a specialist early can prevent permanent joint damage, help you stay active, and improve your quality of life significantly.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#5E5E5E", fontFamily: "var(--font-base)" }}>
                  The good news is that with the right diagnosis and treatment plan, most patients are able to manage their condition well and continue living a normal, fulfilling life.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* Wave: ghost → dark */}
        <svg className="block w-full -mt-px" style={{ height: "60px", backgroundColor: "#0f616e" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 0H1440V30C1200 62 960 62 720 30C480 -2 240 -2 0 30V0Z" fill="#f8f9fb" />
        </svg>

        {/* ═══════════ 3 · SYMPTOM CHECKER ═══════════ */}
        <section id="symptom-checker" className="bg-[#0f616e] py-12 md:py-16 px-6">
          <div className="max-w-7xl mx-auto">

            {!showResult ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                {/* Left -heading */}
                <div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#ffffff", fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.12, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                    When should you see a rheumatologist?
                  </h2>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Answer a few short questions -we&apos;ll help you understand whether a specialist consultation would be beneficial.
                  </p>
                </div>

                {/* Right -question card */}
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#1AA3B5] block" style={{ marginBottom: "0.75rem" }}>
                    Question {checkerStep + 1} of 6
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, color: "#fff", marginBottom: "0.5rem" }}>
                    {symptomQuestions[checkerStep].q}
                  </h3>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}>
                    {symptomQuestions[checkerStep].sub}
                  </p>

                  {/* Yes / No buttons */}
                  <div className="flex gap-3" style={{ marginBottom: "1.5rem" }}>
                    <button
                      onClick={() => handleAnswer(true)}
                      className="py-2.5 px-8 rounded-full font-semibold text-[14px] cursor-pointer transition-all duration-200"
                      style={{ backgroundColor: "#F97316", color: "#fff", border: "none" }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="py-2.5 px-8 rounded-full font-semibold text-[14px] cursor-pointer transition-all duration-200"
                      style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.7)" }}
                    >
                      No
                    </button>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "0.5rem" }}>
                      <span>Progress</span>
                      <span>{checkerStep} / 6</span>
                    </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                    <div
                      className="h-full bg-[#1AA3B5] rounded-full transition-all duration-500"
                      style={{ width: `${((checkerStep) / 6) * 100}%` }}
                    />
                  </div>
                </div>
                </div>
              </div>
            ) : (
              /* ── Results ── */
              <div className="max-w-[600px] mx-auto bg-white/[.06] rounded-2xl p-6 md:p-10 border border-white/[.08]">
                {(() => {
                  const risk = getRiskLevel()
                  return (
                    <div className="text-center">
                      <div
                        className="w-14 h-14 rounded-full text-white flex items-center justify-center text-2xl mx-auto mb-4"
                        style={{ background: risk.color }}
                      >
                        {risk.icon}
                      </div>
                      <h3 className="text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}>
                        {risk.label}
                      </h3>
                      <div className="inline-block rounded-full px-4 py-1 mb-4 text-[12px] font-bold" style={{ background: risk.bg, border: `1.5px solid ${risk.border}`, color: risk.color }}>
                        {answers.filter(a => a === true).length} of 6 symptoms identified
                      </div>
                      <p className="text-[14px] text-white/55 leading-[1.7] mb-6 max-w-[440px] mx-auto">
                        {risk.message}
                      </p>
                      <div className="flex gap-3 justify-center flex-wrap">
                        <button
                          onClick={resetChecker}
                          className="py-3 px-7 rounded-full bg-white/[.08] border border-white/[.15] text-white/70 font-semibold text-[14px] cursor-pointer hover:bg-white/[.14] transition-colors"
                        >
                          Start Again
                        </button>
                        <Link
                          to="/doctor"
                          className="py-3 px-7 rounded-full text-white font-semibold text-[14px] no-underline hover:opacity-90 transition-opacity"
                          style={{ background: "#1AA3B5" }}
                        >
                          {risk.cta}
                        </Link>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </section>

        {/* Wave: dark → white -commented out */}
        {/* <svg className="block w-full -mt-px" style={{ height: "60px", backgroundColor: "#ffffff" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 0H1440V30C1200 62 960 62 720 30C480 -2 240 -2 0 30V0Z" fill="#0f616e" />
        </svg> */}

        {/* ═══════════ 4 · CONDITIONS ═══════════ */}
        <section id="conditions" className="py-12 md:py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-navy-deep mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Conditions We Treat
              </h2>
            </div>

            {/* Arthritis group label */}
            <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
              Arthritis Conditions
            </div>

            {/* Big tiles -2 column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#dde6ee] rounded-lg overflow-hidden mb-8">
              {[
                { key: "ra", ...conditionData.ra },
                { key: "oa", ...conditionData.oa },
                { key: "psa", ...conditionData.psa },
                { key: "as", ...conditionData.as },
              ].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCondition(activeCondition === c.key ? null : c.key)}
                  className={`flex min-h-[124px] gap-6 items-center px-7 py-7 md:min-h-[138px] md:px-8 md:py-8 border-none cursor-pointer text-left transition-colors ${
                    activeCondition === c.key ? "bg-white" : "bg-[#e0f3f5] hover:bg-[#d4ebf8]"
                  }`}
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  <BookIcon size={30} color="#0f616e" />
                  <div className="flex-1">
                    <div className="text-[1.15rem] font-bold leading-snug text-navy-deep mb-1">{c.name}</div>
                    <div className="text-[13px] text-navy-muted">{c.typeLabel}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Other conditions label */}
            <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
              Other Conditions
            </div>

            {/* Small tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#dde6ee] rounded-lg overflow-hidden mb-4">
              {[
                { key: "gout", ...conditionData.gout },
                { key: "ctd", ...conditionData.ctd },
                { key: "fibro", ...conditionData.fibro },
                { key: "vasculitis", ...conditionData.vasculitis },
                { key: "lupus", ...conditionData.lupus },
                { key: "reactive", ...conditionData.reactive },
                { key: "sjogrens", ...conditionData.sjogrens },
                { key: "jia", ...conditionData.jia },
                { key: "pmr", ...conditionData.pmr },
                { key: "scleroderma", ...conditionData.scleroderma },
                { key: "osteoporosis", ...conditionData.osteoporosis },
                { key: "septic", ...conditionData.septic },
                { key: "cppd", ...conditionData.cppd },
                { key: "mctd", ...conditionData.mctd },
                { key: "raynauds", ...conditionData.raynauds },
              ].map((c, idx) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCondition(activeCondition === c.key ? null : c.key)}
                  className={`flex gap-3 items-center p-5 border-none cursor-pointer text-left transition-colors ${
                    activeCondition === c.key ? "bg-white" : "bg-[#e0f3f5] hover:bg-[#d4ebf8]"
                  } ${!showAllConditions && idx >= 5 ? "hidden sm:flex" : ""}`}
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  <BookIcon size={22} color="#0f616e" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-navy-deep">{c.name}</div>
                  </div>
                  <div className="w-7 h-7 rounded-full text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAllConditions(!showAllConditions)}
              className="text-[14px] font-semibold cursor-pointer sm:hidden mb-6"
              style={{ color: "#1AA3B5", background: "none", border: "none", padding: 0 }}
            >
              {showAllConditions ? "See less ↑" : "See more ↓"}
            </button>

            {/* Detail panel -removed */}
          </div>
        </section>


        {/* Treatment Options section removed */}

        {/* ═══════════ 6 · RESEARCH ARTICLES ═══════════ */}
        <section className="bg-white pt-20 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <h2 className="text-3xl text-navy-deep leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, marginBottom: "0.75rem" }}>
                Treatment Options
              </h2>
              <p className="text-[16px] text-navy-muted leading-[1.75]">
                Modern rheumatology offers a wide range of evidence-based treatments. Here&apos;s an overview of your options.
              </p>
            </div>
            <div className="flex items-end justify-between mb-8">
              <div className="flex gap-2">
                <button onClick={() => { articleScrollRef.current?.scrollBy({ left: -340, behavior: "smooth" }) }} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
                <button onClick={() => { articleScrollRef.current?.scrollBy({ left: 340, behavior: "smooth" }) }} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div ref={articleScrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {[featuredArticle, ...articleList].map((article, i) => (
                <div
                  key={i}
                  className="w-[340px] min-w-[340px] flex-shrink-0 flex flex-col group bg-[#fcfcfc] border border-gray-100"
                >
                  <div className="h-56 overflow-hidden">
                    <img alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.img} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div style={{ marginBottom: "12px" }}>
                      <span className="inline-block bg-[#e0f3f5] text-[#5E5E5E] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                        {article.cat}
                      </span>
                    </div>
                    <h4 className="text-xl leading-snug line-clamp-2 text-navy-deep group-hover:text-[#1AA3B5] transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}>{article.title}</h4>
                    {article.author && (
                      <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", marginBottom: "8px" }}>
                        By <strong className="text-navy-deep font-semibold">{article.author}</strong>
                      </p>
                    )}
                    <p className="text-sm text-navy-muted leading-relaxed flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "16px" }}>
                      {article.time}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-navy-deep mt-auto" style={{ fontFamily: "var(--font-base)" }}>
                      Read More
                      <span className="w-6 h-6 rounded-full bg-[#1AA3B5] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════ 7 · NEWSLETTER ═══════════ */}
        {/* ═══════════ CTA BANNER ═══════════ */}
        <CtaBanner />

        {/* ═══════════ NEWSLETTER ═══════════ */}
        <Newsletter />

      </main>
      <BriefingFooter />
    </div>
  )
}

export default KnowledgeHub
