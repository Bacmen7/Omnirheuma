import LegalLayout from "../components/LegalLayout"
import { BUSINESS } from "../data/legalInfo"

const intro = [
  `<strong>${BUSINESS.legalName}</strong> ("Omni Rheuma", "we", "us" or "our") runs the rheumatology practice of ${BUSINESS.doctor} and the website at ${BUSINESS.website}. We know that health information is among the most personal information a person can share, and we treat it that way.`,
  "This Privacy Policy explains what information we collect from you, why we collect it, who we share it with, how long we keep it, and the choices and rights you have. It applies to our website, our appointment and enquiry forms, our WhatsApp Business number, our phone lines, and the records we maintain when you visit our clinic.",
  {
    note: "This policy is published in line with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and follows the principles of the Digital Personal Data Protection Act, 2023 (DPDP Act). It also sets out how we use the WhatsApp Business Platform provided by Meta.",
  },
]

const sections = [
  {
    id: "who-we-are",
    title: "Who we are and how to reach us",
    body: [
      "We are a specialist rheumatology practice based in Bengaluru, India, led by a DM-qualified rheumatologist. For the purposes of Indian data protection law, we are the <strong>Data Fiduciary</strong> in respect of the personal data described in this policy, which means we decide why and how your data is processed.",
      {
        ul: [
          `<strong>Practice:</strong> ${BUSINESS.legalName}`,
          `<strong>Registered clinic address:</strong> ${BUSINESS.address}`,
          `<strong>Email:</strong> <a href="mailto:${BUSINESS.email}" style="color:#0f616e;font-weight:600">${BUSINESS.email}</a>`,
          `<strong>Phone and WhatsApp:</strong> <a href="tel:${BUSINESS.phoneHref}" style="color:#0f616e;font-weight:600">${BUSINESS.phone}</a>`,
          `<strong>Website:</strong> ${BUSINESS.website}`,
        ],
      },
    ],
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: [
      "This policy covers personal data we collect when you:",
      {
        ul: [
          "browse or search our website, read our patient education articles, or use tools such as the symptom checker;",
          "fill in an appointment request, callback request, contact form or newsletter form;",
          "message us on WhatsApp, call us, or email us;",
          "book, attend, or follow up on a consultation at our clinic, including any tests, imaging or prescriptions arising from it;",
          "leave a review, respond to a feedback request, or interact with our posts on social media.",
        ],
      },
      "It does not cover the privacy practices of hospitals where our doctor also consults (for example Manipal Hospital, Hebbal and Yelahanka), diagnostic laboratories, pharmacies, insurers, or any third-party website we link to. Those organisations are separate controllers of your data and have their own policies.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      { h: "a. Information you give us directly" },
      {
        ul: [
          "<strong>Identity and contact details:</strong> name, age, gender, mobile number, WhatsApp number, email address, and city or area of residence.",
          "<strong>Appointment details:</strong> preferred clinic location, preferred date and time, whether you are a new or returning patient, and how you heard about us.",
          "<strong>Health information:</strong> symptoms you describe, duration of complaints, current and past medications, allergies, family history, previous diagnoses, and any reports, prescriptions, scans or lab results you share with us.",
          "<strong>Correspondence:</strong> the content of your WhatsApp messages, emails, form submissions, call notes, and feedback or reviews you send us.",
        ],
      },
      { h: "b. Information we create during your care" },
      {
        ul: [
          "Clinical notes, examination findings, working and confirmed diagnoses, treatment plans, prescriptions, follow-up schedules and referral letters.",
          "Investigation results ordered by us, including blood tests, imaging and other diagnostics.",
          "Billing records, receipts, and insurance or reimbursement paperwork where applicable.",
        ],
      },
      { h: "c. Information collected automatically" },
      {
        ul: [
          "IP address, approximate location derived from it, browser type, device type, operating system and screen size.",
          "Pages visited, time spent, links clicked, referring page or search term, and errors encountered.",
          "Cookie and similar identifiers, as described in the cookies section below.",
        ],
      },
      {
        note: "We do not ask for and do not want your Aadhaar number, PAN, full bank account details, card numbers, UPI PIN or passwords through the website, WhatsApp, or any form. Please do not send these to us. If you receive such a request claiming to be from Omni Rheuma, treat it as fraudulent and report it to us.",
      },
    ],
  },
  {
    id: "sensitive-data",
    title: "Health data and your explicit consent",
    body: [
      "Information about your physical or mental health, medical records and history is treated as <strong>sensitive personal data or information</strong> under Indian law. We collect and use it only where you have given clear consent, for example by submitting an appointment form, describing your symptoms to us on WhatsApp, or attending a consultation. We use it only for the purpose of assessing, diagnosing and treating your condition and for the follow-up care that flows from it.",
      "You are never obliged to share health information with us. However, if you choose not to, we may be unable to assess your condition safely, and we may decline to advise you until we can examine you in person.",
      "You may withdraw your consent at any time by writing to us. Withdrawal applies going forward: it does not affect anything lawfully done before withdrawal, and it does not require us to delete clinical records that we are legally required to retain (see the retention section below).",
    ],
  },
  {
    id: "how-we-use",
    title: "Why we use your information",
    body: [
      {
        table: {
          head: ["What we use it for", "What that involves"],
          rows: [
            [
              "<strong>Providing medical care</strong>",
              "Assessing your symptoms, arriving at a diagnosis, prescribing and adjusting treatment, ordering and interpreting investigations, and referring you onward where needed.",
            ],
            [
              "<strong>Appointments and coordination</strong>",
              "Booking, confirming, rescheduling and reminding you about consultations, and telling you when reports are ready for collection or review.",
            ],
            [
              "<strong>Responding to you</strong>",
              "Answering questions you send by form, phone, email or WhatsApp, and arranging callbacks.",
            ],
            [
              "<strong>Continuity of care</strong>",
              "Maintaining your medical record so that any doctor treating you at our practice has your full history, and tracking long-term disease activity in chronic conditions.",
            ],
            [
              "<strong>Billing and compliance</strong>",
              "Issuing receipts, maintaining accounts, supporting insurance claims, and meeting legal, tax, regulatory and medical-council obligations.",
            ],
            [
              "<strong>Improving our service</strong>",
              "Understanding which pages and health guides are useful, fixing website faults, and improving the way we explain conditions. This is done using aggregated or de-identified data wherever possible.",
            ],
            [
              "<strong>Health updates and education</strong>",
              "Sending occasional educational content, clinic updates or camp announcements, only where you have separately opted in and always with a way to stop.",
            ],
            [
              "<strong>Safety and security</strong>",
              "Preventing fraud, misuse of our website and WhatsApp number, and protecting our patients, staff and systems.",
            ],
          ],
        },
      },
      "We do not use your personal data for automated decision-making that produces legal or similarly significant effects on you, and we do not profile you for advertising purposes.",
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp and other messaging",
    body: [
      `We use WhatsApp — including the WhatsApp Business Platform (commonly known as the WhatsApp Business API) provided by Meta Platforms, Inc. and its affiliates, as one way of communicating with patients on the number ${BUSINESS.whatsapp}.`,
      {
        note: "<strong>Your consent to WhatsApp communication.</strong> When you submit an enquiry, appointment or callback form on this website, or give us your mobile number at our clinic reception, during a consultation, or on a phone call, you expressly consent to Omni Rheuma contacting you on WhatsApp at that number in connection with your enquiry, your appointments and your care. You give this consent voluntarily, it is not a condition of receiving treatment from us, and you may withdraw it at any time by replying <strong>STOP</strong> to any of our WhatsApp messages or by writing to us (see 'How to stop messages' below).",
      },
      { h: "How we get your number" },
      "We message you on WhatsApp only where you have given us your number and opted in to be contacted, which happens when you:",
      {
        ul: [
          "message our WhatsApp number first, or tap a WhatsApp or 'Chat with us' button on our website;",
          "submit an appointment, callback or enquiry form on our website with your mobile number;",
          "give your number and consent at the clinic reception or during a consultation;",
          "call us and ask us to send details on WhatsApp.",
        ],
      },
      "We do not buy, rent or scrape phone numbers, and we do not add you to broadcast lists or groups without your consent.",
      { h: "What we send" },
      {
        ul: [
          "<strong>Service and appointment messages:</strong> booking confirmations, reminders, rescheduling or cancellation notices, directions to the clinic, and notifications that a report or prescription is ready.",
          "<strong>Care-related replies:</strong> answers to the questions you ask us, requests for clarification, and follow-up checks after a consultation.",
          "<strong>Optional updates:</strong> health education content, new service or camp announcements, and clinic timing changes. These go only to patients who have opted in to receive them.",
        ],
      },
      { h: "How to stop messages" },
      `You can opt out at any time, free of charge. Reply <strong>STOP</strong> to any WhatsApp message from us, tell us on a call, or email <a href="mailto:${BUSINESS.email}" style="color:#0f616e;font-weight:600">${BUSINESS.email}</a> with the number you want removed. We honour opt-out requests immediately on receipt, and in every case within 7 working days. Opting out costs you nothing and does not affect the care you receive from us. If you opt out of optional updates, we will still send messages that are strictly necessary for an appointment you have booked, unless you ask us to stop those as well.`,
      { h: "What you should know before messaging us" },
      {
        ul: [
          "<strong>Messages travel through Meta.</strong> Every message sent between you and our WhatsApp Business number is transmitted and delivered through the WhatsApp Business Platform operated by Meta, and Meta may process it on servers located outside India. Messages are protected by WhatsApp's end-to-end encryption in transit, but the message content sits on your device and on our business device once delivered, and Meta processes account and metadata information (such as your phone number, delivery status and timestamps) under its own terms. See the <a href='https://www.whatsapp.com/legal/privacy-policy' target='_blank' rel='noreferrer' style='color:#0f616e;font-weight:600'>WhatsApp Privacy Policy</a> for details. We do not control Meta's processing.",
          "<strong>We never use your data for advertising.</strong> We do not share, sell or upload your phone number, health information or enquiry details to Meta, WhatsApp or any other platform for advertising, marketing, audience-building or profiling. Your number is used by us only to communicate with you as described above.",
          "Our WhatsApp number is a <strong>business account</strong>. Messages may be read by authorised clinic staff, not only by the doctor, so that appointments can be handled promptly. All such staff are bound by patient confidentiality.",
          "Anything clinically relevant that you send us on WhatsApp — symptoms, photographs of joints or rashes, or lab reports, may be saved into your medical record so that it is available at your consultation.",
          "We reply during clinic working hours. Messages sent outside those hours are answered on the next working day.",
        ],
      },
      {
        note: "<strong>WhatsApp is not for emergencies.</strong> Do not use WhatsApp, email or our contact forms to report a medical emergency such as severe chest pain, breathlessness, high fever with confusion, a suspected stroke, or a severe drug reaction. Call your nearest emergency service or go to the closest hospital emergency department immediately.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and website analytics",
    body: [
      "Our website uses a small number of cookies and similar technologies:",
      {
        ul: [
          "<strong>Essential cookies:</strong> needed for the site to load correctly, remember your consent choices, and keep the site secure. These cannot be switched off.",
          "<strong>Analytics cookies:</strong> help us understand, in aggregate, which pages are read, how visitors arrive, and where the site is confusing or broken. We use these to improve our patient education content.",
          "<strong>Preference cookies:</strong> remember minor choices such as a dismissed banner so you are not asked twice.",
        ],
      },
      "We do not use cookies to build advertising profiles or to track you across unrelated websites. You can block or delete cookies through your browser settings; if you block essential cookies, parts of the site may stop working.",
    ],
  },
  {
    id: "sharing",
    title: "When we share your information",
    body: [
      "We do not sell, rent or trade your personal data. We share it only in the situations below, and only to the extent necessary:",
      {
        ul: [
          "<strong>Clinical care teams:</strong> diagnostic laboratories, imaging centres, pharmacies, physiotherapists, or other specialists we refer you to, where this is needed for your investigation or treatment.",
          "<strong>Hospitals:</strong> where your consultation, procedure or admission takes place at a hospital our doctor is attached to, that hospital will hold its own record of your visit under its own privacy policy.",
          "<strong>Service providers:</strong> the vendors who host our website, run our forms, store our records, send our messages, and provide IT support. They act on our instructions, are permitted to use the data only for the service they provide to us, and are bound to keep it confidential.",
          "<strong>Insurers and TPAs:</strong> only where you ask us to support a claim or reimbursement and provide the necessary authorisation.",
          "<strong>Your family or caregiver:</strong> only where you have told us it is acceptable, or where you are unable to communicate and disclosure is in your immediate interest.",
          "<strong>Legal and regulatory bodies:</strong> courts, police, medical councils and government authorities, where we are required by law, a court order, or a valid legal process to disclose information, or where disclosure is necessary to prevent a serious threat to life.",
          "<strong>Professional advisers:</strong> our accountants, auditors, insurers and lawyers, under a duty of confidentiality.",
        ],
      },
      "Where we publish case discussions, before-and-after images or patient stories for education, we do so only with your separate written consent, and we remove details that could identify you unless you have expressly agreed otherwise.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party platforms we rely on",
    body: [
      "Running the practice involves a few well-known platforms. Each has its own privacy policy, which governs what it does with data on its side:",
      {
        table: {
          head: ["Platform", "What it is used for"],
          rows: [
            ["<strong>Meta / WhatsApp</strong>", "Patient messaging, appointment confirmations, reminders and replies through our WhatsApp Business number, using the WhatsApp Business Platform operated by Meta."],
            ["<strong>Google</strong>", "Website analytics, form submission handling, business listing, reviews and map directions."],
            ["<strong>Website hosting provider</strong>", "Serving the website and storing form submissions securely."],
            ["<strong>Email service provider</strong>", "Receiving your enquiries by email and sending appointment confirmations, replies and, where you have opted in, health updates."],
            ["<strong>Telecom and SMS providers</strong>", "Delivering calls and, where used, appointment and reminder SMS."],
          ],
        },
      },
      "We choose providers that offer reasonable security practices, and we keep the data we share with them to the minimum needed.",
    ],
  },
  {
    id: "security-retention",
    title: "Security, storage and how long we keep data",
    body: [
      "We maintain reasonable security practices and procedures proportionate to the sensitivity of the information we hold. These include access control so that only authorised staff can view patient records, password protection and device security on clinic systems, encryption in transit for data submitted through our website, secure storage of physical files, and confidentiality obligations on everyone who works with us.",
      "No system is completely secure, and no method of transmission over the internet is guaranteed. We cannot accept responsibility for the security of information while it is in transit to us over networks or platforms we do not control, but we will act promptly on any incident we detect.",
      { h: "Retention periods" },
      {
        ul: [
          "<strong>Medical records:</strong> retained for at least 3 years from the date of the last consultation, in line with medical council record-keeping requirements, and usually longer where continuity of care in chronic rheumatic disease makes it clinically necessary.",
          "<strong>Records relating to medico-legal matters:</strong> retained until the matter and any appeal period is fully concluded.",
          "<strong>Billing and tax records:</strong> retained for the period required under Indian tax and accounting law.",
          "<strong>Enquiries that do not lead to a consultation:</strong> retained for up to 24 months and then deleted.",
          "<strong>Marketing and newsletter contacts:</strong> retained until you opt out, and removed shortly afterwards.",
          "<strong>Website analytics:</strong> retained in aggregated form only.",
        ],
      },
      "When a retention period ends, we securely delete or anonymise the data.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    body: [
      "Subject to Indian law and to our clinical and legal record-keeping duties, you may:",
      {
        ul: [
          "<strong>Access</strong> the personal data we hold about you and ask for a summary of how it is being used.",
          "<strong>Obtain a copy</strong> of your medical records. We ordinarily provide these within 72 hours of a written request, in line with medical council guidance.",
          "<strong>Correct</strong> information that is inaccurate, misleading or incomplete. Note that a clinical opinion recorded at a point in time cannot be erased, but a correction or your own statement can be added to the record.",
          "<strong>Withdraw consent</strong> for future processing, including consent to be contacted on WhatsApp, by SMS or by email.",
          "<strong>Ask for erasure</strong> of data we are no longer required to keep.",
          "<strong>Nominate</strong> another person to exercise these rights on your behalf if you are unable to do so.",
          "<strong>Complain</strong> to us, and thereafter to the appropriate authority, if you believe your data has been mishandled.",
        ],
      },
      `To exercise any of these rights, write to <a href="mailto:${BUSINESS.email}" style="color:#0f616e;font-weight:600">${BUSINESS.email}</a> from the email address or phone number we have on record, or visit the clinic with photo identification. We may need to verify your identity before acting, to make sure health information is not disclosed to the wrong person. We respond to requests within 30 days.`,
    ],
  },
  {
    id: "children",
    title: "Children and persons unable to consent",
    body: [
      "Our website is intended for adults. Where a patient is under 18 years of age, we collect and process their health data only with the consent of a parent or lawful guardian, who must be present for the consultation. We do not knowingly collect personal data from a child through the website, and we do not use children's data for tracking or marketing.",
      "Where a patient is unable to give consent themselves, we accept consent from their lawful guardian or the person duly authorised to act for them.",
      "If you believe a child's data has been submitted to us without appropriate consent, contact us and we will delete it.",
    ],
  },
  {
    id: "external-links",
    title: "Links to other websites",
    body: [
      "Our pages sometimes link to hospital websites, medical societies, research papers, patient support groups, and mapping or booking platforms. Those sites are not under our control. Once you leave our website, this policy no longer applies, and we are not responsible for the content or privacy practices of the destination site. We encourage you to read their policies before sharing information with them.",
    ],
  },
  {
    id: "transfers",
    title: "Where your data is processed",
    body: [
      "Your data is primarily stored and processed in India. Some of the service providers we use, including cloud hosting, analytics and messaging platforms such as WhatsApp, may process data on servers located outside India. Where that happens, we take reasonable steps to ensure the provider offers a comparable standard of protection and processes the data only for the purposes we have specified, in accordance with applicable Indian law.",
    ],
  },
  {
    id: "breach",
    title: "If something goes wrong",
    body: [
      "If we become aware of a security incident that affects your personal data, we will investigate it promptly, take steps to contain it, notify the affected individuals and the relevant authority where the law requires it, and tell you what you can do to protect yourself.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time to reflect changes in our practice, technology, or the law. The revised version takes effect from the date it is published on this page, and the 'last updated' date at the top will change. Where the change is significant, we will make it clear on the website, and where required, we will seek your consent again.",
      "Continuing to use our website, our WhatsApp number or our services after a change means you accept the revised policy.",
    ],
  },
  {
    id: "grievance",
    title: "Grievance Officer",
    body: [
      "In accordance with the Information Technology Act, 2000 and the rules made under it, the details of the Grievance Officer are given below. You may contact the Grievance Officer with any complaint about how your personal data has been collected, used, shared or secured.",
      {
        ul: [
          `<strong>Name:</strong> ${BUSINESS.grievanceOfficer}`,
          `<strong>Designation:</strong> Grievance Officer, ${BUSINESS.legalName}`,
          `<strong>Email:</strong> <a href="mailto:${BUSINESS.email}" style="color:#0f616e;font-weight:600">${BUSINESS.email}</a>`,
          `<strong>Phone:</strong> <a href="tel:${BUSINESS.phoneHref}" style="color:#0f616e;font-weight:600">${BUSINESS.phone}</a>`,
          `<strong>Address:</strong> ${BUSINESS.address}`,
          "<strong>Hours:</strong> Monday to Saturday, during clinic working hours (excluding public holidays)",
        ],
      },
      "We acknowledge every grievance within 48 hours of receipt and resolve it within 30 days.",
    ],
  },
]

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Omni Rheuma collects, uses, protects and shares your personal and health information, including how we communicate with you on WhatsApp."
      intro={intro}
      sections={sections}
    />
  )
}

export default PrivacyPolicy
