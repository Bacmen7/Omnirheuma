const allArticles = [
  {
    id: "musculoskeletal-ultrasound-protocols",
    category: "Diagnostic Imaging",
    readTime: "9 min read",
    title: "Early Detection: Musculoskeletal Ultrasound Protocols",
    excerpt: "How standard ultrasound protocols can catch inflammatory arthritis before X-rays do.",
    image: "/images/ultrasound.webp",
    author: {
      name: "Dr. Emily Chen, MD",
      role: "Diagnostic Radiologist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Emily Chen specializes in musculoskeletal imaging with a focus on early detection of inflammatory arthritis using advanced ultrasound techniques.",
    },
    date: "Oct 18, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health and a fellow of the American College of Rheumatology.",
    },
    tableOfContents: [
      { id: "introduction", label: "Introduction to MSK ultrasound" },
      { id: "standardization", label: "Standardizing protocols" },
      { id: "key-findings", label: "Key ultrasound findings" },
      { id: "clinical-application", label: "Clinical application" },
    ],
    keyTakeaways: [
      "Ultrasound catches synovitis and erosions before X-ray can.",
      "Standard scanning protocols mean less variation between doctors.",
      "Power Doppler shows active inflammation in real time.",
      "Having ultrasound in the clinic room speeds up both diagnosis and treatment decisions.",
    ],
    content: `
      <h2 id="introduction">Introduction to MSK ultrasound</h2>
      <p>Musculoskeletal ultrasound lets rheumatologists see soft tissue inflammation in real time, without radiation. That alone makes it useful. But what really sets it apart is convenience: unlike MRI, it's portable, relatively cheap, and can happen right in the exam room.</p>
      <p>For tracking disease activity and checking whether a treatment is working, having imaging at the point of care speeds things up considerably.</p>

      <h2 id="standardization">Standardizing protocols</h2>
      <p>The problem with MSK ultrasound has always been consistency. One doctor scans different joints than another, uses different machine settings, reads the images differently. EULAR and ACR have been working on fixing that.</p>
      <p>A standard protocol usually means scanning bilateral MCP joints (2-5), wrists, and MTP joints with both B-mode and Power Doppler, in longitudinal and transverse planes.</p>

      <h2 id="key-findings">Key ultrasound findings</h2>
      <p>What you're looking for in inflammatory arthritis:</p>
      <ul>
        <li>Synovial hypertrophy: thickened synovial tissue showing up as hypoechoic or anechoic areas inside the joint capsule.</li>
        <li>Effusion: fluid collecting in the joint space.</li>
        <li>Power Doppler signal: increased blood flow, which means active inflammation.</li>
        <li>Bone erosions: cortical breaks that ultrasound can catch before X-ray does.</li>
      </ul>

      <h2 id="clinical-application">Clinical application</h2>
      <p>When ultrasound is part of routine visits, treatment decisions get more precise. You can see subclinical disease activity that the patient might not even feel yet, which helps decide whether to escalate or taper medication.</p>
    `,
    references: [
      {
        text: 'Backhaus, M. et al. (2023). Guidelines for musculoskeletal ultrasound in rheumatology. Annals of the Rheumatic Diseases, 81(4), 555-563.',
      },
    ],
    relatedArticles: ["gout-vs-pseudogout"],
  },
  {
    id: "gout-vs-pseudogout",
    category: "Differential Diagnosis",
    readTime: "11 min read",
    title: "Gout vs. Pseudogout: A Differential Diagnostic Guide",
    excerpt: "They look similar at the bedside but the crystals tell different stories.",
    image: "/images/crystal-deposits.webp",
    author: {
      name: "Dr. James Patel, MD",
      role: "Rheumatology Fellow",
      image: "/images/author-sarah.webp",
      bio: "Dr. James Patel is a rheumatology fellow specializing in crystal arthropathies and metabolic bone disease.",
    },
    date: "Oct 10, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "overview", label: "Overview" },
      { id: "clinical-presentation", label: "Clinical presentation" },
      { id: "diagnostic-workup", label: "Diagnostic workup" },
      { id: "side-by-side", label: "Side-by-side comparison" },
      { id: "treatment", label: "Treatment approaches" },
      { id: "prevention", label: "Long-term prevention" },
      { id: "when-to-see-doctor", label: "When to see a doctor" },
    ],
    keyTakeaways: [
      "Gout comes from MSU crystals; pseudogout from CPP crystals. Different cause, different treatment.",
      "Polarized light microscopy on synovial fluid is the only definitive way to tell them apart.",
      "You can't reliably distinguish them by symptoms alone; the overlap is too big.",
      "Treatment depends on crystal type: urate-lowering drugs for gout, mostly symptom management for pseudogout.",
    ],
    content: `
      <h2 id="overview">Overview</h2>
      <p>Gout and pseudogout are both crystal arthropathies, which is a clinical way of saying "your joints hurt because tiny crystals are forming inside them." The crystals themselves are different, the joints they tend to hit are different, and the long-term treatment isn't the same. But in the middle of an acute attack? They can look and feel almost identical.</p>
      <p>That's the problem. A red, hot, swollen joint could be either one. It could also be infection, which is a whole different emergency. So the workup matters, and skipping it because "it's probably gout" is how diagnoses get missed.</p>
      <p><strong><u>Gout</u></strong> is caused by monosodium urate (MSU) crystals. These form when uric acid levels in the blood stay elevated over time. <strong><u>Pseudogout</u></strong>, formally called calcium pyrophosphate deposition disease (CPPD), is caused by calcium pyrophosphate (CPP) crystals depositing in cartilage and joint tissue. The mechanism is different, the risk factors are different, and the prevention strategy is different.</p>

      <img src="/images/crystal-deposits.webp" alt="Microscopic crystal deposits in joint tissue" />
      <p class="article-img-caption">Crystal arthropathies cause acute joint inflammation when crystals deposit in synovial fluid and trigger an immune response.</p>

      <h2 id="clinical-presentation">Clinical presentation</h2>
      <p>Gout has a classic debut: you go to bed feeling fine and wake up at 2am with your big toe on fire. The first metatarsophalangeal joint (MTP) is the most common site, which is why doctors call it <strong>podagra</strong>. The joint is red, swollen, warm to touch, and exquisitely tender. Even a bedsheet brushing against it can be agonizing.</p>
      <p>That said, gout doesn't always follow the script. It can hit ankles, knees, wrists, fingers, or elbows. Polyarticular attacks (hitting multiple joints at once) become more common in chronic untreated disease.</p>
      <p>Pseudogout tends to be less dramatic in onset but can still produce intense pain. It favors the <strong>knee</strong> and <strong>wrist</strong>, and the onset is sometimes more gradual, building over hours to days rather than the overnight explosion typical of gout. In older patients, pseudogout can mimic a chronic low-grade arthritis that looks a lot like RA, which makes diagnosis even trickier.</p>
      <p>Shared features that make bedside diagnosis unreliable:</p>
      <ul>
        <li>Acute monoarticular swelling with redness and warmth</li>
        <li>Pain severe enough to limit use of the joint entirely</li>
        <li>Low-grade fever (can happen with both)</li>
        <li>Elevated inflammatory markers (CRP, ESR) in blood work</li>
        <li>Self-limited episodes that resolve in 1-2 weeks even without treatment</li>
      </ul>

      <div class="article-callout">
        <h4>Who gets each condition?</h4>
        <p><strong>Gout:</strong> Men over 30, postmenopausal women, people with obesity, kidney disease, or high alcohol intake. Certain medications (thiazide diuretics) raise uric acid.</p>
        <p><strong>Pseudogout:</strong> Adults over 60, people with hyperparathyroidism, hemochromatosis, or hypomagnesemia. Unlike gout, diet and alcohol don't play a role.</p>
      </div>

      <h2 id="diagnostic-workup">Diagnostic workup</h2>
      <p>The gold standard is <strong><u>synovial fluid analysis</u></strong>. You aspirate the joint (stick a needle in and draw fluid), then look at it under polarized light microscopy. This is non-negotiable for a definitive diagnosis.</p>
      <p>Here's what you find:</p>
      <ul>
        <li><strong>Gout:</strong> Needle-shaped crystals that show <strong>negative birefringence</strong> (yellow when parallel to the slow ray of the compensator). These are MSU crystals.</li>
        <li><strong>Pseudogout:</strong> Rhomboid or rod-shaped crystals with <strong>positive birefringence</strong> (blue when parallel). These are CPP crystals.</li>
      </ul>
      <p>The fluid itself usually shows elevated white blood cell counts (often 20,000-100,000/mm3), predominantly neutrophils. You also need to send the fluid for Gram stain and culture. The reason: septic arthritis can coexist with crystal disease, and missing an infection is dangerous.</p>
      <p>Blood work helps but doesn't confirm the diagnosis. Serum uric acid is elevated in gout, but it can be <strong>normal during an acute attack</strong> because the crystals are in the joint, not floating in the blood. This trips up a lot of doctors. A normal uric acid during a flare doesn't rule out gout.</p>
      <p>Imaging can add information. X-rays may show <strong>chondrocalcinosis</strong> (calcification of cartilage) in pseudogout, which is fairly specific. Dual-energy CT (DECT) can detect urate crystal deposits in gout, but it's expensive and not available everywhere.</p>

      <h2 id="side-by-side">Side-by-side comparison</h2>

      <table class="article-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Gout</th>
            <th>Pseudogout (CPPD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Crystal type</strong></td>
            <td>Monosodium urate (MSU)</td>
            <td>Calcium pyrophosphate (CPP)</td>
          </tr>
          <tr>
            <td><strong>Crystal shape</strong></td>
            <td>Needle-shaped, negatively birefringent</td>
            <td>Rhomboid, positively birefringent</td>
          </tr>
          <tr>
            <td><strong>Typical joints</strong></td>
            <td>1st MTP (big toe), ankle, knee</td>
            <td>Knee, wrist, shoulder</td>
          </tr>
          <tr>
            <td><strong>Age of onset</strong></td>
            <td>30-50 years (men), post-menopause (women)</td>
            <td>Usually over 60</td>
          </tr>
          <tr>
            <td><strong>Risk factors</strong></td>
            <td>Diet, alcohol, obesity, kidney disease, diuretics</td>
            <td>Age, hyperparathyroidism, hemochromatosis</td>
          </tr>
          <tr>
            <td><strong>X-ray findings</strong></td>
            <td>Erosions with overhanging edges (chronic); tophi</td>
            <td>Chondrocalcinosis (cartilage calcification)</td>
          </tr>
          <tr>
            <td><strong>Serum uric acid</strong></td>
            <td>Usually elevated (can be normal during flare)</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td><strong>Prevention</strong></td>
            <td>Urate-lowering therapy (allopurinol, febuxostat)</td>
            <td>No proven preventive therapy</td>
          </tr>
        </tbody>
      </table>

      <h2 id="treatment">Treatment approaches</h2>
      <p>Acute flares of both conditions respond to the same initial drugs. The difference is what comes after.</p>
      <h3>Acute treatment (same for both)</h3>
      <ul>
        <li><strong><u>NSAIDs</u></strong> (indomethacin, naproxen): first-line for most patients. Use full dose, start early.</li>
        <li><strong><u>Colchicine</u></strong>: works best if started within 24 hours of symptom onset. The current dosing is lower than the old regimen (1.2mg then 0.6mg one hour later).</li>
        <li><strong><u>Corticosteroids</u></strong>: oral prednisone or intra-articular injection. Good option when NSAIDs are contraindicated (kidney disease, GI bleeding risk).</li>
        <li><strong><u>IL-1 inhibitors</u></strong> (anakinra): for refractory cases that don't respond to the above. Used more in pseudogout than gout.</li>
      </ul>

      <h3>Long-term gout management</h3>
      <p>Gout is the one you can actually prevent from coming back. Once you lower uric acid below the saturation point (target: below 6 mg/dL), existing crystals gradually dissolve and new ones stop forming.</p>
      <ul>
        <li><strong>Allopurinol:</strong> first-line urate-lowering drug. Start low, titrate up. Requires HLA-B*5801 testing in certain populations (Southeast Asian, African American) to avoid severe hypersensitivity reactions.</li>
        <li><strong>Febuxostat:</strong> alternative for patients who can't tolerate allopurinol. Has a boxed warning regarding cardiovascular risk.</li>
        <li><strong>Probenecid:</strong> promotes uric acid excretion through the kidneys. Less commonly used but an option for patients with good kidney function.</li>
      </ul>
      <p>Diet matters for gout, though less than most people think. Reducing red meat, organ meats, shellfish, and alcohol (especially beer) helps lower uric acid by maybe 1 mg/dL. That's not nothing, but it's rarely enough on its own. Most patients with recurrent gout need medication.</p>

      <h3>Long-term pseudogout management</h3>
      <p>This is where it gets frustrating. There is no equivalent of allopurinol for pseudogout. No drug dissolves CPP crystals or prevents new deposits. Treatment is reactive, not preventive.</p>
      <p>For patients with frequent attacks, low-dose colchicine (0.6mg daily or twice daily) can reduce flare frequency. Low-dose NSAIDs are another option. Beyond that, you treat underlying metabolic conditions if they exist (hyperparathyroidism, hemochromatosis) and manage each flare as it comes.</p>

      <h2 id="prevention">Long-term prevention</h2>
      <p>Prevention strategies differ sharply between the two conditions:</p>

      <div class="article-callout">
        <h4>Gout prevention checklist</h4>
        <p><strong>Medication:</strong> Urate-lowering therapy if you've had 2+ flares per year, tophi, kidney stones, or chronic kidney disease.</p>
        <p><strong>Diet:</strong> Limit purine-rich foods (organ meats, certain seafood), reduce alcohol, increase water intake, consider cherry extract (modest evidence).</p>
        <p><strong>Medication review:</strong> Ask your doctor about switching off thiazide diuretics if possible. Losartan and fenofibrate have mild uric acid-lowering effects.</p>
        <p><strong>Weight management:</strong> Losing weight reduces uric acid levels. Even modest weight loss helps.</p>
      </div>

      <p>For pseudogout, prevention amounts to: treat any underlying metabolic condition, keep a supply of colchicine or NSAIDs on hand for flares, and check with your rheumatologist if attacks become more frequent. There's active research into new treatments, but nothing has come out of trials yet.</p>

      <h2 id="when-to-see-doctor">When to see a doctor</h2>
      <p>Any hot, swollen joint needs medical evaluation. It might be crystals, or it might be infection. You can't tell the difference at home, and you shouldn't try.</p>
      <p>See a doctor urgently if:</p>
      <ul>
        <li>The joint is red, hot, and swollen, especially with fever</li>
        <li>You can't bear weight or use the joint at all</li>
        <li>Symptoms came on within hours and are getting worse fast</li>
        <li>You have a prosthetic joint (septic arthritis in a prosthesis is a surgical emergency)</li>
      </ul>
      <p>If you've already been diagnosed with gout or pseudogout and are getting more frequent flares, that's also a reason to go back. More frequent attacks mean something about the management plan needs to change.</p>

      <div class="article-cta">
        <h4>Joint pain keeping you up at night?</h4>
        <p>Get the right diagnosis first. A rheumatologist can analyze your joint fluid and build a treatment plan.</p>
        <a href="/">Find a specialist</a>
      </div>
    `,
    references: [
      {
        text: 'Neogi, T. et al. (2022). Gout classification criteria. Arthritis & Rheumatology, 74(2), 312-321.',
      },
      {
        text: 'FitzGerald, J.D. et al. (2020). 2020 American College of Rheumatology guideline for management of gout. Arthritis Care & Research, 72(6), 744-760.',
      },
      {
        text: 'Rosenthal, A.K. et al. (2016). Calcium pyrophosphate deposition disease. New England Journal of Medicine, 374(26), 2575-2584.',
      },
    ],
    relatedArticles: ["musculoskeletal-ultrasound-protocols"],
  },
  // RA Articles
  {
    id: "modern-treatments-ra",
    category: "Treatment",
    readTime: "10 min read",
    title: "Modern Treatments for RA: What You Need to Know",
    excerpt: "What's actually available for RA right now, from methotrexate to the newest biologics.",
    image: "/images/ra-treatment.webp",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Sarah Jenkins is a board-certified rheumatologist specializing in RA treatment strategies.",
    },
    date: "Nov 2, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "overview", label: "Treatment overview" },
      { id: "dmards", label: "DMARDs: the foundation" },
      { id: "biologics", label: "Biologic agents" },
      { id: "treatment-ladder", label: "The treatment ladder" },
      { id: "emerging", label: "Emerging therapies" },
      { id: "living-with-treatment", label: "Living with treatment" },
    ],
    keyTakeaways: [
      "Start DMARDs early. Waiting too long lets the disease get ahead of you.",
      "Methotrexate is still the first drug most rheumatologists reach for, and for good reason.",
      "If methotrexate alone isn't enough, biologics or JAK inhibitors are the next step.",
      "There are now over a dozen approved advanced therapies for RA. Running out of options is less common than it used to be.",
    ],
    content: `
      <h2 id="overview">Treatment overview</h2>
      <p>RA treatment looks nothing like it did twenty years ago. Back then, doctors often waited to see how bad things got before prescribing anything aggressive. That approach let a lot of joint damage happen that didn't need to.</p>
      <p>The current standard is called <strong>"treat to target."</strong> You pick a goal, usually remission or at least low disease activity, and you adjust medication until you get there. If the first drug doesn't work well enough by 3 months, you don't wait around hoping. You add or switch.</p>
      <p>That sounds straightforward on paper. In practice, finding the right drug or combination for each patient takes trial and error. People respond differently to the same medication, and what works well for one person may do nothing for another.</p>

      <img src="/images/ra-treatment.webp" alt="Doctor discussing treatment plan with RA patient" />
      <p class="article-img-caption">Treatment decisions in RA are made together with your rheumatologist, based on disease severity, other health conditions, and how you've responded to prior drugs.</p>

      <h2 id="dmards">DMARDs: the foundation</h2>
      <p><strong><u>Methotrexate</u></strong> is still the starting point for most RA patients. It's been around since the 1980s for RA, it works for roughly 40-60% of patients as monotherapy, and we know its safety profile inside and out. It's taken once weekly, either as a pill or injection.</p>
      <p>Side effects include nausea (taking it at night or switching to injectable form helps), mouth sores, and liver enzyme elevations. You'll need regular blood work. You absolutely cannot take it during pregnancy.</p>
      <p>If methotrexate alone isn't enough, your doctor may add another conventional DMARD:</p>
      <ul>
        <li><strong>Hydroxychloroquine</strong> (Plaquenil) is mild, often used in combination. Requires annual eye exams.</li>
        <li><strong>Sulfasalazine</strong> can be combined with methotrexate. GI side effects are the main complaint.</li>
        <li><strong>Leflunomide</strong> (Arava) is sometimes used instead of methotrexate in patients who can't tolerate it.</li>
      </ul>

      <h2 id="biologics">Biologic agents</h2>
      <p>When conventional DMARDs aren't controlling the disease well enough, biologics are the next step. These are proteins made in a lab that target specific parts of the immune system.</p>
      <p><strong><u>TNF inhibitors</u></strong> were the first class of biologics for RA and are still the most widely prescribed. They include adalimumab (Humira), etanercept (Enbrel), infliximab (Remicade), certolizumab (Cimzia), and golimumab (Simponi). Most are self-injected every 1-2 weeks; infliximab is an IV infusion every 6-8 weeks.</p>
      <p>After TNF inhibitors, other biologic classes include:</p>
      <ul>
        <li><strong>IL-6 inhibitors:</strong> tocilizumab (Actemra), sarilumab (Kevzara)</li>
        <li><strong>B cell depletion:</strong> rituximab (Rituxan), given as IV infusion every 6 months</li>
        <li><strong>T cell co-stimulation blocker:</strong> abatacept (Orencia)</li>
      </ul>
      <p>Each one works on a different part of the immune cascade. If one class doesn't work, another might, because they're hitting different targets.</p>

      <h2 id="treatment-ladder">The treatment ladder</h2>
      <p>Here's the typical sequence most rheumatologists follow:</p>

      <table class="article-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Treatment</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Methotrexate (with or without short-term steroids)</td>
            <td>First 3 months</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Add or switch conventional DMARD (sulfasalazine, hydroxychloroquine, leflunomide)</td>
            <td>3-6 months if step 1 isn't enough</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Add a biologic (usually TNF inhibitor first) to methotrexate</td>
            <td>6+ months if still not at target</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Switch biologic class or try a JAK inhibitor</td>
            <td>After failing first biologic</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Third-line agents, clinical trials, or combination strategies</td>
            <td>After multiple failures</td>
          </tr>
        </tbody>
      </table>

      <p>Not everyone follows this exact path. Some patients skip steps because their disease is aggressive from the start. Others respond to methotrexate alone and never need anything else. The ladder is a guide, not a rule.</p>

      <h2 id="emerging">Emerging therapies</h2>
      <p>For patients who've been through the standard options, the pipeline is worth knowing about.</p>
      <p><strong><u>Selective JAK inhibitors</u></strong> are getting more targeted. First-gen JAK inhibitors (tofacitinib) hit multiple JAK enzymes. Newer ones aim for JAK1 or TYK2 specifically, which should mean fewer off-target side effects.</p>
      <p><strong><u>BTK inhibitors,</u></strong> already used in some blood cancers, are being studied in RA. They go after B cell signaling through a different mechanism than rituximab. Early trial data is being watched closely.</p>
      <p>There's also growing interest in <strong>biomarker-guided treatment selection</strong>, the idea being that a blood test or gene panel could predict which drug is most likely to work for a given patient. We aren't there yet, but the research is active.</p>

      <div class="article-cta">
        <h4>Not sure where you are on the treatment ladder?</h4>
        <p>A rheumatologist can review your history and help figure out the right next step.</p>
        <a href="/">Talk to a specialist</a>
      </div>

      <h2 id="living-with-treatment">Living with treatment</h2>
      <p>RA treatment is a long game. Most of these drugs take weeks to months to reach full effect, and you'll likely be on some form of medication for years, possibly indefinitely.</p>
      <p>A few practical things worth knowing:</p>
      <ul>
        <li>Keep up with your lab work. Methotrexate, biologics, and JAK inhibitors all require monitoring.</li>
        <li>Stay current on vaccinations. Many RA drugs suppress parts of your immune system. Get your flu shot, COVID boosters, and shingles vaccine. <strong>Avoid live vaccines</strong> while on immunosuppressive therapy.</li>
        <li>Don't stop drugs on your own. If something isn't working or side effects are bothering you, talk to your rheumatologist before making changes. Sudden stops can trigger flares.</li>
        <li>Exercise matters. Medication handles the inflammation, but physical activity maintains joint function and reduces stiffness. Even 20-30 minutes of walking or swimming most days makes a measurable difference.</li>
      </ul>
    `,
    references: [
      {
        text: 'Smolen, J.S. et al. (2023). Rheumatoid arthritis treatment guidelines update. Nature Reviews Rheumatology, 19(1), 45-56.',
      },
      {
        text: 'Fraenkel, L. et al. (2021). 2021 American College of Rheumatology guideline for the treatment of RA. Arthritis Care & Research, 73(7), 924-939.',
      },
    ],
    relatedArticles: ["understanding-blood-work-rf-anti-ccp"],
  },
  {
    id: "understanding-blood-work-rf-anti-ccp",
    category: "Lab Tests",
    readTime: "12 min read",
    title: "Understanding your Blood Work: RF and Anti-CCP",
    excerpt: "What RF and anti-CCP results actually tell your doctor, and what they don't.",
    image: "/images/lab-test.webp",
    author: {
      name: "Dr. Lisa Wang, MD",
      role: "Clinical Immunologist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Lisa Wang specializes in clinical immunology and laboratory diagnostics for autoimmune diseases.",
    },
    date: "Nov 10, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "basics", label: "Blood test basics" },
      { id: "rf", label: "Rheumatoid factor explained" },
      { id: "anti-ccp", label: "Anti-CCP antibodies" },
      { id: "other-markers", label: "Other inflammatory markers" },
      { id: "interpretation", label: "Interpreting your results" },
      { id: "seronegative", label: "What if both tests are negative?" },
      { id: "monitoring", label: "Using blood work to track treatment" },
    ],
    keyTakeaways: [
      "RF and anti-CCP are the two main blood tests for diagnosing RA.",
      "Anti-CCP is more specific: 95% specificity versus RF's broader hit rate.",
      "Anti-CCP can turn positive years before you feel anything wrong.",
      "No single test confirms RA; results need to match the clinical picture.",
    ],
    content: `
      <h2 id="basics">Blood test basics</h2>
      <p>If your doctor suspects RA, two blood tests will come up almost immediately: <strong><u>rheumatoid factor (RF)</u></strong> and <strong><u>anti-CCP antibodies</u></strong>. Neither one tells the whole story on its own. Together, though, they're the strongest lab evidence we have for confirming an RA diagnosis.</p>
      <p>You'll probably get these drawn at your first rheumatology appointment, sometimes even before. Your primary care doctor may order them based on joint symptoms alone. The results help determine how likely RA is, how aggressive it might be, and how urgently treatment needs to start.</p>
      <p>But there's a catch most patients don't hear about: these tests have limits. A positive result doesn't guarantee RA, and a negative one doesn't rule it out. Understanding what your numbers actually mean, and what they don't, saves a lot of confusion down the road.</p>

      <img src="/images/lab-test.webp" alt="Blood sample tubes in a clinical laboratory" />
      <p class="article-img-caption">RF and anti-CCP are usually drawn together at the first rheumatology visit. Results typically come back within a few days.</p>

      <h2 id="rf">Rheumatoid factor explained</h2>
      <p><strong><u>Rheumatoid factor</u></strong> is an antibody, specifically an IgM antibody that binds to the Fc portion of IgG. In plain English: it's a protein your immune system makes that shouldn't be there in large amounts.</p>
      <p>About 70-80% of RA patients test positive for RF. That sounds useful until you learn that RF also turns up in:</p>
      <ul>
        <li>Hepatitis C and other chronic infections</li>
        <li>Sjogren's syndrome</li>
        <li>Lupus</li>
        <li>Healthy elderly adults (up to 10-15% of people over 65)</li>
        <li>Chronic liver disease</li>
      </ul>
      <p>So a positive RF is a clue, not a diagnosis. The higher the number, the more it points toward RA, but context matters. An RF of 15 in a 70-year-old with no joint swelling means something very different from an RF of 200 in a 35-year-old with bilateral hand swelling.</p>

      <div class="article-callout">
        <h4>RF levels and what they suggest</h4>
        <p><strong>Low positive (14-39 IU/mL):</strong> Could be RA, could be something else entirely. Needs clinical correlation.</p>
        <p><strong>Moderate positive (40-99 IU/mL):</strong> More likely to be RA, especially with matching symptoms.</p>
        <p><strong>High positive (100+ IU/mL):</strong> Strongly associated with RA. Also associated with more aggressive joint disease and a higher chance of extra-articular manifestations like rheumatoid nodules.</p>
      </div>

      <h2 id="anti-ccp">Anti-CCP antibodies</h2>
      <p><strong><u>Anti-CCP</u></strong> (anti-cyclic citrullinated peptide) antibodies are more specific to RA than RF is. The specificity sits around 95%, meaning if you test positive, there's a very high chance the diagnosis is RA and not something else.</p>
      <p>What makes anti-CCP especially interesting is timing. These antibodies can show up in your blood <strong>years before you feel any symptoms</strong>. One study found anti-CCP positivity up to 10 years before joint pain started. That's a potentially huge window for early intervention, though we're still working out exactly how to use that clinically.</p>
      <p>The sensitivity is similar to RF, around 60-75% depending on the study and the assay used. So about a quarter of RA patients will test negative for anti-CCP. That doesn't mean they don't have RA.</p>
      <p>Higher anti-CCP levels tend to predict more erosive disease. If your anti-CCP comes back at 3x the upper limit of normal, your rheumatologist will probably push for earlier, more aggressive treatment.</p>

      <h2 id="other-markers">Other inflammatory markers</h2>
      <p>RF and anti-CCP get the most attention, but your doctor will also look at two general inflammation markers:</p>

      <table class="article-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>What it measures</th>
            <th>Normal range</th>
            <th>What high results mean</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ESR</strong> (sed rate)</td>
            <td>How fast red blood cells settle in a tube</td>
            <td>0-20 mm/hr (varies by age/sex)</td>
            <td>General inflammation present, but doesn't say where or why</td>
          </tr>
          <tr>
            <td><strong>CRP</strong> (C-reactive protein)</td>
            <td>A liver protein that rises with inflammation</td>
            <td>Less than 3 mg/L</td>
            <td>Active inflammation, responds faster than ESR to changes</td>
          </tr>
          <tr>
            <td><strong>CBC</strong></td>
            <td>Overall blood cell counts</td>
            <td>Varies by component</td>
            <td>Anemia is common in active RA; elevated platelets can indicate inflammation</td>
          </tr>
          <tr>
            <td><strong>CMP</strong></td>
            <td>Liver and kidney function</td>
            <td>Varies by component</td>
            <td>Baseline before starting drugs like methotrexate that affect the liver</td>
          </tr>
        </tbody>
      </table>

      <p>ESR and CRP don't diagnose RA on their own. Plenty of conditions raise them. But when combined with positive RF and anti-CCP plus the right clinical picture, they strengthen the diagnosis. They're also useful for tracking disease activity over time: if your CRP drops on treatment, that's a good sign things are working.</p>

      <h2 id="interpretation">Interpreting your results</h2>
      <p>Here's where it all comes together. The 2010 ACR/EULAR classification criteria for RA use a point system, and your antibody results contribute to that score:</p>
      <ul>
        <li><strong>Negative RF and negative anti-CCP:</strong> 0 points</li>
        <li><strong>Low-positive RF or low-positive anti-CCP:</strong> 2 points</li>
        <li><strong>High-positive RF or high-positive anti-CCP:</strong> 3 points</li>
      </ul>
      <p>You need 6 or more points total (across joint involvement, serology, acute-phase reactants, and symptom duration) for classification as RA. So serology alone won't get you there, but it can tip the scale.</p>
      <p>Being positive for <strong>both RF and anti-CCP</strong>, sometimes called "double positive," is the strongest lab combination. It correlates with more aggressive erosive disease, higher disability risk, and a stronger argument for starting treatment immediately rather than watching and waiting.</p>

      <div class="article-callout">
        <h4>Double positive vs. single positive vs. seronegative</h4>
        <p><strong>Double positive (RF+ and anti-CCP+):</strong> Highest certainty of RA diagnosis. Also associated with more aggressive joint damage over time.</p>
        <p><strong>Single positive (one but not both):</strong> Still significant, but your doctor will weigh clinical findings more heavily.</p>
        <p><strong>Seronegative (both negative):</strong> RA is still possible. About 20% of RA patients are seronegative. Diagnosis relies more on imaging and clinical exam.</p>
      </div>

      <h2 id="seronegative">What if both tests are negative?</h2>
      <p>This is more common than most people realize. Roughly 1 in 5 RA patients test negative for both RF and anti-CCP. Doctors call this "seronegative RA." It's real RA, it still damages joints, and it still needs treatment.</p>
      <p>The diagnosis in these cases leans more heavily on:</p>
      <ul>
        <li>Physical exam findings: symmetrical joint swelling, especially in the small joints of the hands and feet</li>
        <li>Imaging: ultrasound showing synovitis, or MRI showing bone marrow edema</li>
        <li>Elevated ESR/CRP</li>
        <li>Duration: symptoms lasting more than 6 weeks</li>
        <li>Ruling out other causes (gout, lupus, psoriatic arthritis, viral arthritis)</li>
      </ul>
      <p>Some rheumatologists will repeat the antibody tests after 6-12 months. Occasionally patients who were initially seronegative will seroconvert, meaning the antibodies show up later. It doesn't happen often, but it happens.</p>

      <h2 id="monitoring">Using blood work to track treatment</h2>
      <p>Once you're diagnosed and on treatment, blood tests shift from diagnostic to monitoring. You'll still get regular labs, but the focus changes.</p>
      <p><strong>ESR and CRP</strong> are checked every 3-6 months to see if inflammation is dropping. A falling CRP on methotrexate is encouraging. A rising CRP despite treatment means something needs to change.</p>
      <p><strong>CBC and liver function</strong> are monitored because the drugs themselves have side effects. Methotrexate can suppress blood counts and raise liver enzymes. Biologics can lower white blood cells. These checks catch problems before they become serious.</p>
      <p>RF and anti-CCP levels don't usually change much with treatment, so retesting them isn't standard. Some studies show anti-CCP can drop modestly with effective therapy, but it's not reliable enough to use as a treatment response marker.</p>

      <div class="article-cta">
        <h4>Confused by your lab results?</h4>
        <p>A rheumatologist can walk you through what your specific numbers mean for your situation.</p>
        <a href="/">Talk to a specialist</a>
      </div>

      <p>The bottom line: RF and anti-CCP are the most important lab tests for diagnosing RA, but they're part of a bigger picture. High levels of both antibodies make the diagnosis more certain and predict a tougher disease course. Negative results don't mean you're fine. And once you're on treatment, different blood tests take over to make sure the drugs are working safely.</p>
      <p>Ask your rheumatologist to walk you through your specific numbers. Generic reference ranges on the lab report don't tell you much without clinical context.</p>
    `,
    references: [
      {
        text: 'Aletaha, D. et al. (2023). Diagnosis and management of rheumatoid arthritis: a review. JAMA, 329(14), 1194-1210.',
      },
      {
        text: 'Nishimura, K. et al. (2007). Meta-analysis: diagnostic accuracy of anti-CCP antibody and RF for RA. Annals of Internal Medicine, 146(11), 797-808.',
      },
      {
        text: 'Aletaha, D. et al. (2010). 2010 Rheumatoid arthritis classification criteria: an ACR/EULAR collaborative initiative. Arthritis & Rheumatism, 62(9), 2569-2581.',
      },
    ],
    relatedArticles: ["modern-treatments-ra"],
  },
  {
    id: "gentle-exercises-flaring-joints",
    category: "Lifestyle",
    readTime: "8 min read",
    title: "Gentle Exercises for Flaring Joints",
    excerpt: "What you can (and should) do when your joints are flaring up.",
    image: "/images/exercise.webp",
    author: {
      name: "Dr. Karen Mitchell, PT",
      role: "Physical Therapist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Karen Mitchell is a licensed physical therapist with expertise in rheumatic disease rehabilitation.",
    },
    date: "Nov 5, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "when-to-exercise", label: "When to exercise during flares" },
      { id: "gentle-movements", label: "Gentle movement exercises" },
      { id: "water-therapy", label: "Water-based therapy" },
      { id: "recovery", label: "Recovery strategies" },
    ],
    keyTakeaways: [
      "Some movement during flares is better than none. Total rest makes stiffness worse.",
      "Range-of-motion exercises are safe even when joints are inflamed.",
      "Water takes 90% of the load off your joints, making pool exercise much easier.",
      "If it hurts more, stop. Pain is the signal to back off.",
    ],
    content: `
      <h2 id="when-to-exercise">When to exercise during flares</h2>
      <p>Every instinct says to stay still during a flare. But lying in bed all day actually makes the stiffness worse. The trick is doing the right kind of movement, not pushing through pain.</p>

      <h2 id="gentle-movements">Gentle movement exercises</h2>
      <p>Range-of-motion exercises are the safest bet during a flare. Move each joint through whatever range feels comfortable. You can do these sitting down or even lying in bed. Go slowly. If it hurts more, back off.</p>

      <h2 id="water-therapy">Water-based therapy</h2>
      <p>Water takes up to 90% of the load off your joints. A warm pool session during a flare can feel dramatically better than the same movements on dry land. The warmth also helps loosen tight muscles.</p>

      <h2 id="recovery">Recovery strategies</h2>
      <p>Ice the inflamed joints for 15-20 minutes after exercise to bring down swelling. And try some gentle stretching before bed. It won't cure morning stiffness, but it can take the edge off.</p>
    `,
    references: [
      {
        text: 'Hurkmans, E. et al. (2023). Dynamic exercise programs for patients with RA. Cochrane Database of Systematic Reviews.',
      },
    ],
    relatedArticles: ["anti-inflammatory-diet", "modern-treatments-ra"],
  },
  {
    id: "anti-inflammatory-diet",
    category: "Nutrition",
    readTime: "10 min read",
    title: "The Anti-Inflammatory Diet: Truths vs Myths",
    excerpt: "Which dietary advice actually holds up, and which is just noise.",
    image: "/images/diet.webp",
    author: {
      name: "Dr. Rachel Green, RD",
      role: "Clinical Dietitian",
      image: "/images/author-sarah.webp",
      bio: "Dr. Rachel Green is a registered dietitian specializing in anti-inflammatory nutrition for autoimmune conditions.",
    },
    date: "Oct 28, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "what-is-it", label: "What is an anti-inflammatory diet?" },
      { id: "foods-to-eat", label: "Foods that help" },
      { id: "foods-to-avoid", label: "Foods to limit" },
      { id: "myths", label: "Common myths debunked" },
    ],
    keyTakeaways: [
      "Focus on whole foods, omega-3s (fish), and colorful produce. That's the core of it.",
      "No single food cures arthritis. Patterns matter more than individual ingredients.",
      "The Mediterranean diet has the best evidence for lowering inflammation.",
      "Supplements can help, but they're not a substitute for eating well.",
    ],
    content: `
      <h2 id="what-is-it">What is an anti-inflammatory diet?</h2>
      <p>There's no single "anti-inflammatory diet" you can download and follow. It's more of a pattern: eat more of the foods that seem to calm inflammation, less of the ones that don't. The Mediterranean diet has the most research behind it.</p>

      <h2 id="foods-to-eat">Foods that help</h2>
      <p>Fatty fish like salmon, sardines, and mackerel are the headliners. Leafy greens, berries, nuts, olive oil, and whole grains also show up consistently in studies linking diet to lower inflammatory markers.</p>

      <h2 id="foods-to-avoid">Foods to limit</h2>
      <p>Processed foods, added sugar, trans fats, and too much red meat are all linked to higher inflammation. Alcohol is a grey area, but less is generally better.</p>

      <h2 id="myths">Common myths debunked</h2>
      <p>Nightshade vegetables (tomatoes, peppers, eggplant) get blamed a lot online, but the evidence that they worsen arthritis is thin. Same with gluten-free diets. Unless you actually have celiac disease, cutting gluten probably won't help your RA.</p>
    `,
    references: [
      {
        text: 'Philippou, E. et al. (2023). Mediterranean diet and rheumatoid arthritis: a systematic review. Clinical Nutrition, 42(5), 1234-1245.',
      },
    ],
    relatedArticles: ["gentle-exercises-flaring-joints", "understanding-blood-work-rf-anti-ccp"],
  },
  // PsA Articles
  {
    id: "managing-dual-impact-skin-joint-pain",
    category: "Psoriatic Arthritis",
    readTime: "11 min read",
    title: "Managing the Dual Impact of Skin and Joint Pain",
    excerpt: "When your disease attacks skin and joints at the same time, treatment gets complicated.",
    image: "/images/psa-insight.webp",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Sarah Jenkins specializes in psoriatic arthritis management with integrated dermatological care.",
    },
    date: "Oct 15, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "dual-burden", label: "The dual burden of PsA" },
      { id: "treatment-strategies", label: "Integrated treatment strategies" },
      { id: "biologic-options", label: "Biologic options" },
      { id: "lifestyle", label: "Lifestyle management" },
    ],
    keyTakeaways: [
      "PsA hits skin and joints together, so treatment has to cover both.",
      "IL-17 and IL-23 inhibitors work on both fronts, which simplifies the regimen.",
      "Treating early prevents joint damage that can't be reversed later.",
      "Best results come when rheumatology and dermatology coordinate instead of working in silos.",
    ],
    content: `
      <h2 id="dual-burden">The dual burden of PsA</h2>
      <p>PsA is frustrating because it hits you twice. You're dealing with painful, swollen joints and visible skin plaques at the same time. Treating one without the other leaves patients only half-helped.</p>

      <h2 id="treatment-strategies">Integrated treatment strategies</h2>
      <p>The best outcomes happen when the rheumatologist and dermatologist actually talk to each other. You need to pick drugs that work for both the skin and the joints, which narrows the options but also simplifies the regimen.</p>

      <h2 id="biologic-options">Biologic options</h2>
      <p>A few biologic classes can handle both sides of PsA. TNF inhibitors were the first to show this. IL-17 inhibitors (secukinumab, ixekizumab) and IL-23 inhibitors (guselkumab, risankizumab) have since joined the list, and some of them are especially strong on the skin side.</p>

      <h2 id="lifestyle">Lifestyle management</h2>
      <p>Losing weight if you're overweight, staying active, managing stress, and not smoking all make a measurable difference in PsA. These aren't vague wellness tips; there's real data showing they affect both skin and joint outcomes.</p>
    `,
    references: [
      {
        text: 'Gossec, L. et al. (2023). EULAR recommendations for the management of PsA. Annals of the Rheumatic Diseases, 82(3), 345-356.',
      },
    ],
    relatedArticles: ["biologics-vs-small-molecules-psa"],
  },
  {
    id: "biologics-vs-small-molecules-psa",
    category: "Treatment Comparison",
    readTime: "15 min read",
    title: "Biologics vs Small Molecules for PsA",
    excerpt: "Injections vs pills for PsA: what the head-to-head data actually shows.",
    image: "/images/medication.webp",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Sarah Jenkins is a board-certified rheumatologist with expertise in PsA treatment options.",
    },
    date: "Oct 20, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "overview", label: "Treatment landscape overview" },
      { id: "biologics", label: "Biologic therapies" },
      { id: "small-molecules", label: "Small molecule options" },
      { id: "comparison", label: "Head-to-head comparison" },
    ],
    keyTakeaways: [
      "Both biologics and small molecules work for PsA. Neither category is universally better.",
      "Biologics are stronger on average but need injections or infusions.",
      "Small molecules (JAK inhibitors, PDE4 inhibitors) are pills, which patients tend to prefer.",
      "The decision comes down to disease severity, what else the patient has going on, and insurance.",
    ],
    content: `
      <h2 id="overview">Treatment landscape overview</h2>
      <p>Ten years ago, PsA treatment options were limited. Now there are enough choices that the real challenge is figuring out which one fits each patient best.</p>

      <h2 id="biologics">Biologic therapies</h2>
      <p>Biologics go after specific immune pathways driving PsA. The main classes are TNF inhibitors, IL-17 inhibitors, and IL-23 inhibitors. They're effective but require injections or infusions, which some patients don't want.</p>

      <h2 id="small-molecules">Small molecule options</h2>
      <p>If a patient wants a pill, apremilast (a PDE4 inhibitor) and tofacitinib (a JAK inhibitor) are the two main options. They're also reasonable alternatives when biologics are contraindicated.</p>

      <h2 id="comparison">Head-to-head comparison</h2>
      <p>When you compare them directly, biologics generally give stronger responses for both joints and skin. Small molecules are less potent on average but the convenience of a daily pill counts for something, especially for adherence.</p>
    `,
    references: [
      {
        text: 'Coates, L.C. et al. (2023). Comparison of biologics and targeted synthetic DMARDs in PsA. The Lancet, 401(10380), 883-895.',
      },
    ],
    relatedArticles: ["managing-dual-impact-skin-joint-pain"],
  },
  {
    id: "tips-morning-stiffness-fatigue",
    category: "Patient Guide",
    readTime: "7 min read",
    title: "Tips for Morning Stiffness and Fatigue",
    excerpt: "The first hour of the day is the hardest. Here's how to make it less miserable.",
    image: "/images/pain-relief.webp",
    author: {
      name: "Dr. Karen Mitchell, PT",
      role: "Physical Therapist",
      image: "/images/author-sarah.webp",
      bio: "Dr. Karen Mitchell specializes in rehabilitation for inflammatory arthritis patients.",
    },
    date: "Oct 12, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/specialist-1.webp",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "understanding", label: "Understanding morning stiffness" },
      { id: "strategies", label: "Management strategies" },
      { id: "fatigue", label: "Combating fatigue" },
      { id: "when-to-call", label: "When to call your doctor" },
    ],
    keyTakeaways: [
      "Morning stiffness lasting over 30 minutes points to inflammatory arthritis, not just aging.",
      "Warm showers, bed stretches, and scheduling around your energy peaks all help.",
      "PsA fatigue has multiple causes: poor sleep, depression, and uncontrolled disease can all pile on.",
      "If stiffness is getting worse, that's a sign your treatment may need adjusting.",
    ],
    content: `
      <h2 id="understanding">Understanding morning stiffness</h2>
      <p>You wake up and everything feels locked. That's inflammatory mediators pooling in your joints overnight while you're not moving. For PsA patients, morning stiffness is one of the most disruptive daily symptoms.</p>

      <h2 id="strategies">Management strategies</h2>
      <p>A warm shower first thing helps loosen things up. Some people do gentle range-of-motion exercises while still in bed, before even standing up. It sounds small, but it can make the first hour of the day much less miserable.</p>

      <h2 id="fatigue">Combating fatigue</h2>
      <p>Fatigue in PsA doesn't get talked about enough. It's not just "being tired." It affects everything. Start with the basics: are you sleeping well? Is there depression going on? Is the disease actually under control? Then pace your activities through the day instead of burning out by noon.</p>

      <h2 id="when-to-call">When to call your doctor</h2>
      <p>If morning stiffness is lasting longer than it used to, if new joints are getting involved, or if fatigue is keeping you from normal daily activities even when you've rested, call your rheumatologist. These could be signs the treatment needs adjusting.</p>
    `,
    references: [
      {
        text: 'Orbai, A.M. et al. (2023). Morning stiffness and fatigue in PsA: patient perspectives. Rheumatology, 62(8), 2845-2854.',
      },
    ],
    relatedArticles: ["gentle-exercises-flaring-joints", "managing-dual-impact-skin-joint-pain"],
  },
]

export function getArticleById(id) {
  return allArticles.find((a) => a.id === id)
}

export function getRelatedArticles(ids) {
  return allArticles.filter((a) => ids.includes(a.id))
}

export default allArticles
