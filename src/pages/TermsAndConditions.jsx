import LegalLayout from "../components/LegalLayout"
import { BUSINESS } from "../data/legalInfo"

const intro = [
  `These Terms and Conditions ("Terms") govern your use of the website at ${BUSINESS.website}, our WhatsApp Business number, our appointment and enquiry forms, and the services provided by <strong>${BUSINESS.legalName}</strong> ("Omni Rheuma", "we", "us" or "our").`,
  "Please read them carefully. By visiting the website, submitting a form, messaging us on WhatsApp, calling us, or booking a consultation, you confirm that you have read, understood and agreed to these Terms. If you do not agree, please do not use the website or our services.",
  {
    note: "<strong>Nothing on this website is medical advice for your individual case.</strong> Our articles, guides, symptom tools and messages are general health information. They are not a substitute for an in-person examination, diagnosis or treatment by a qualified doctor who knows your history.",
  },
]

const sections = [
  {
    id: "eligibility",
    title: "Who may use this website and these services",
    body: [
      "You may use this website and contact us if you are 18 years of age or older and legally capable of entering into a binding contract under Indian law.",
      "If you are under 18, you may use the website and book appointments only through a parent or lawful guardian, who must accompany you to the consultation and who accepts these Terms on your behalf. If you are booking on behalf of another adult — for example a parent or spouse — you confirm that you have their permission to share their details with us.",
      "The website is intended for users in India. We make no representation that the content is appropriate or available for use in other jurisdictions, and you are responsible for complying with local laws if you access it from outside India.",
    ],
  },
  {
    id: "services",
    title: "What we provide",
    body: [
      "Omni Rheuma is a specialist rheumatology practice. Through this website and our contact channels we offer:",
      {
        ul: [
          "patient education about rheumatic and autoimmune conditions, including articles, guides and overviews;",
          "information about our doctor, clinic locations, timings and areas of specialisation;",
          "a facility to request an appointment, a callback, or general information;",
          "communication with our clinic team by phone, email and WhatsApp;",
          "in-person consultation, diagnosis, treatment planning and follow-up care at our clinic.",
        ],
      },
      "An appointment request submitted through the website is a <strong>request</strong>, not a confirmed booking. Your appointment is confirmed only when our team confirms the date and time with you by phone, WhatsApp or email.",
    ],
  },
  {
    id: "medical-disclaimer",
    title: "Medical disclaimer",
    body: [
      "This is the most important section on this page. Please read it in full.",
      {
        ul: [
          "The content on this website is provided for <strong>general information and education only</strong>. It is written for a broad audience and cannot account for your age, history, other conditions, medications, allergies or test results.",
          "Reading this website, using a symptom tool, or exchanging messages with us <strong>does not create a doctor-patient relationship</strong>. That relationship begins only when you are formally consulted, examined and accepted as a patient by our doctor.",
          "<strong>Never delay seeking medical advice, disregard advice you have been given, or stop a prescribed medicine</strong> because of something you read on this website or received in a message from us.",
          "Medicine changes. Guidelines, drug approvals and dosing recommendations are revised over time. We update our content periodically, but we do not warrant that every page reflects the very latest evidence at the moment you read it.",
          "Any outcome described on this website, including in patient stories, reflects one individual's experience. Rheumatic diseases behave differently in different people, and <strong>no result is promised or guaranteed</strong>.",
          "Descriptions of medicines, biologics, injections or procedures are informational. They are not a recommendation that a particular treatment is right for you, and they are not a prescription.",
        ],
      },
      {
        note: "<strong>In an emergency, do not use this website, WhatsApp or email.</strong> If you have chest pain, breathlessness, sudden weakness or numbness, slurred speech, a severe allergic or drug reaction, high fever with confusion, a seizure, or any condition you believe is life-threatening — call emergency services or go to the nearest hospital emergency department immediately.",
      },
    ],
  },
  {
    id: "appointments",
    title: "Appointments, rescheduling and cancellation",
    body: [
      {
        ul: [
          "Appointment slots are indicative. Clinical practice is unpredictable, and a consultation ahead of yours may run long. We try hard to run on time and we appreciate your patience when we cannot.",
          "Please arrive at least 10 minutes before your slot and bring all previous prescriptions, reports, scans and a list of your current medicines. Incomplete records may mean the consultation has to be repeated.",
          "If you need to reschedule or cancel, please tell us at least 4 hours in advance by phone or WhatsApp so the slot can be offered to another patient.",
          "We may need to reschedule your appointment because of an emergency, the doctor's unavailability, or circumstances beyond our control. We will inform you as early as we can and offer you the next available slot.",
          "Repeated no-shows without notice may result in us asking for confirmation or advance payment before allotting future slots.",
        ],
      },
    ],
  },
  {
    id: "fees",
    title: "Consultation fees and payments",
    body: [
      {
        ul: [
          "Consultation fees, review-visit fees and procedure charges are informed to you before the consultation and are payable at the clinic.",
          "Fees cover the doctor's professional time and opinion. They do not include the cost of investigations, medicines, imaging, injections or procedures, which are billed separately or paid directly to the provider.",
          "A consultation fee, once the consultation has taken place, is <strong>not refundable</strong>, since the service has been delivered. Where an appointment is cancelled by us and you have already paid, you may choose a full refund or a rescheduled visit.",
          "Fees may be revised from time to time without prior notice. The fee applicable is the one communicated to you at the time of booking.",
          "We do not ask for payment through personal UPI IDs or bank transfers over WhatsApp. Pay only at the clinic through the official channels shown to you, and always take a receipt.",
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communicating with us on WhatsApp, phone and email",
    body: [
      `Our WhatsApp Business number is ${BUSINESS.whatsapp}. We operate it on the WhatsApp Business Platform provided by Meta Platforms, Inc., which means your messages to and from us are delivered through Meta's systems and are also governed by WhatsApp's own terms and privacy policy.`,
      `<strong>By submitting an enquiry, appointment or callback form on this website, or by otherwise giving us your mobile number, you expressly consent to receiving WhatsApp messages from Omni Rheuma on that number</strong> — including appointment confirmations, reminders, replies to your enquiry, and notifications that a report or prescription is ready. This consent is voluntary and is not a condition of receiving treatment from us.`,
      `You can withdraw that consent at any time, free of charge, by replying <strong>STOP</strong> to any WhatsApp message from us, telling us on a call, or emailing <a href="mailto:${BUSINESS.email}" style="color:#0f616e;font-weight:600">${BUSINESS.email}</a>. We do not use your number for advertising, and we do not share it with third parties for marketing. How we handle these messages is set out in full in our <a href='/privacy-policy#whatsapp' style='color:#0f616e;font-weight:600'>Privacy Policy</a>.`,
      { h: "What these channels are for" },
      {
        ul: [
          "booking, confirming, rescheduling and cancelling appointments;",
          "directions, timings, fees and general clinic information;",
          "simple follow-up questions arising from a consultation you have already had;",
          "letting you know a report or prescription is ready.",
        ],
      },
      { h: "What they are not for" },
      {
        ul: [
          "emergencies of any kind;",
          "obtaining a diagnosis without an examination — we cannot and will not diagnose a rheumatic condition over chat;",
          "obtaining a first prescription, or a prescription for a controlled or scheduled drug;",
          "second opinions on complex reports without a formal consultation.",
        ],
      },
      "Messages are answered during clinic working hours. We cannot guarantee that a message has been read, and we are not responsible for delivery failures, network outages, or delays caused by the messaging platform. If a matter is urgent, call us — do not rely on a message.",
      "Any clinical guidance given over these channels is limited by the fact that we cannot examine you. It is offered on that basis and may be revised once you are seen in person.",
    ],
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: [
      "When you use our website or services, you agree to:",
      {
        ul: [
          "give complete, accurate and honest information about your identity, symptoms, medical history, allergies and current medications — incomplete or incorrect information can lead to an incorrect diagnosis or unsafe treatment, and we are not liable for the consequences of information you withheld or misstated;",
          "follow the treatment plan and follow-up schedule agreed with your doctor, and tell us promptly if you stop a medicine, develop a side effect, or start a treatment prescribed elsewhere;",
          "use the website only for lawful purposes, and not to transmit malware, attempt to gain unauthorised access, scrape content in bulk, overload our systems, or interfere with other users;",
          "not impersonate another person, book appointments in false names, or misuse our WhatsApp number for spam, abuse or solicitation;",
          "not copy, republish, or commercially exploit our content without written permission.",
        ],
      },
      "We may refuse service, cancel a booking, or block a number where these Terms are breached, where a person is abusive to our staff, or where we reasonably believe our services are being misused.",
    ],
  },
  {
    id: "reports",
    title: "Prescriptions, reports and records",
    body: [
      {
        ul: [
          "Prescriptions are issued after a consultation, are specific to you, and must not be shared with or used by anyone else — including a family member with apparently similar symptoms.",
          "Do not alter, extend or repeat a prescription without review. Many rheumatology medicines require monitoring blood tests at defined intervals.",
          "You are entitled to a copy of your medical records on written request; we ordinarily provide them within 72 hours.",
          "We maintain your records as required by law and medical council regulations. We are not responsible for reports or records lost after they have been handed over to you, or for records held by a third-party laboratory or hospital.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: [
      `All content on this website — text, patient guides, articles, illustrations, photographs, icons, layout, design, the ${BUSINESS.name} name and logo, and the compilation of all of it — is owned by us or licensed to us and is protected under Indian copyright and trade mark law.`,
      "You may read, print and share individual pages for your own personal, non-commercial use, provided you do not remove any credit or notice. Any other use — republication, translation, bulk copying, use in training a machine-learning model, or use in a commercial product — requires our prior written permission.",
      "If you believe any material on this website infringes your rights, write to us with details and we will investigate and act promptly.",
    ],
  },
  {
    id: "user-content",
    title: "Reviews, testimonials and anything you send us",
    body: [
      "If you send us a review, testimonial, photograph, question or suggestion, you grant us a non-exclusive, royalty-free right to use, reproduce and display it in connection with our practice, unless you tell us otherwise in writing. You confirm that the content is your own, is truthful, and does not infringe anyone else's rights.",
      "We will not publish anything that identifies you as a patient — including case photographs or before-and-after images — without your separate written consent.",
      "We may decline to publish, or may remove, content that is abusive, misleading, defamatory, unlawful, or that constitutes advertising of medical services in a manner not permitted by the National Medical Commission's regulations.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party links and platforms",
    body: [
      "Our website links to hospitals, laboratories, medical societies, research articles, booking platforms, maps and social media. We provide these links for convenience and information. We do not control those services, we do not endorse everything on them, and we are not responsible for their content, accuracy, availability, pricing or privacy practices.",
      "Similarly, where a service is delivered through a third-party platform — such as WhatsApp for messaging or a maps provider for directions — your use of that platform is governed by that platform's own terms and privacy policy in addition to these Terms.",
    ],
  },
  {
    id: "availability",
    title: "Availability of the website",
    body: [
      "We aim to keep the website available and accurate, but we provide it on an <strong>'as is' and 'as available'</strong> basis. We do not warrant that it will be uninterrupted, error-free, secure, or free of viruses, or that any defect will be corrected.",
      "We may change, suspend, restrict or withdraw all or part of the website, or any feature on it, at any time and without notice, including for maintenance.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law:",
      {
        ul: [
          "we are not liable for any loss or harm arising from your reliance on general information published on this website, or from any decision you take without consulting a doctor;",
          "we are not liable for indirect, incidental, special, punitive or consequential loss, including loss of income, opportunity, data or goodwill;",
          "we are not liable for failures, delays, interceptions or non-delivery of messages caused by telecom networks, the internet, or third-party platforms including WhatsApp;",
          "we are not liable for the acts, omissions, results or charges of any third-party laboratory, imaging centre, pharmacy, hospital or specialist, whether or not we referred you to them;",
          "where liability cannot be excluded, our total aggregate liability to you in connection with our services is limited to the amount of the consultation fee you actually paid to us for the consultation to which the claim relates.",
        ],
      },
      "Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded, including liability for death or personal injury caused by proven professional negligence. These Terms do not affect the rights available to you as a consumer under the Consumer Protection Act, 2019, or your right to raise a complaint before the appropriate medical council or consumer forum.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: [
      "You agree to indemnify and hold harmless Omni Rheuma, its doctor, staff and service providers against any claim, loss, liability or expense (including reasonable legal costs) arising out of your breach of these Terms, your misuse of the website or our contact channels, your submission of false or misleading information, or your infringement of any third party's rights.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    body: [
      "Our handling of your personal and health information is described in our <a href='/privacy-policy' style='color:#0f616e;font-weight:600'>Privacy Policy</a>, which forms part of these Terms. By using our services, you also agree to that policy.",
    ],
  },
  {
    id: "suspension",
    title: "Suspension and termination",
    body: [
      "We may suspend or end your access to the website, our WhatsApp number, or our services, with or without notice, if you breach these Terms, misuse our channels, behave abusively towards our staff or other patients, or where we are required to do so by law.",
      "A doctor may also decline to continue treating a patient where the therapeutic relationship has broken down, where advice is repeatedly disregarded in a way that makes safe care impossible, or where the required care falls outside their scope of practice. In such cases we will tell you and, where appropriate, help you find alternative care.",
    ],
  },
  {
    id: "force-majeure",
    title: "Events beyond our control",
    body: [
      "We are not liable for any failure or delay in providing our services caused by events beyond our reasonable control, including illness of the doctor, medical emergencies, epidemics, strikes, civil unrest, government orders, power or internet failure, natural disasters, or the failure of a third-party platform.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law and jurisdiction",
    body: [
      `These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms, the website, or our services is subject to the exclusive jurisdiction of the competent courts at ${BUSINESS.jurisdiction}.`,
      "Before commencing any proceedings, we ask that you write to us so that we have a fair opportunity to resolve the matter directly. Most concerns are resolved quickly by simply talking to us.",
    ],
  },
  {
    id: "general",
    title: "General terms",
    body: [
      {
        ul: [
          "<strong>Entire agreement</strong> — these Terms, together with the Privacy Policy, form the entire agreement between you and us regarding the website and our contact channels.",
          "<strong>Severability</strong> — if any provision is found to be invalid or unenforceable, the remaining provisions continue in full force.",
          "<strong>No waiver</strong> — if we do not enforce a right on one occasion, that does not waive our right to enforce it later.",
          "<strong>Assignment</strong> — you may not assign your rights under these Terms. We may assign ours in connection with a reorganisation or transfer of the practice.",
          "<strong>Headings</strong> — section headings are for convenience only and do not affect interpretation.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: [
      "We may revise these Terms at any time to reflect changes in our practice, our services, or the law. The revised version takes effect from the date it is published on this page, and the 'last updated' date at the top will change.",
      "Please check this page from time to time. Your continued use of the website or our services after a change means you accept the revised Terms.",
    ],
  },
  {
    id: "grievance",
    title: "Grievance redressal and contact",
    body: [
      "If you have a complaint about our services, our website, or anything published on it, please write to us first. We take every complaint seriously and treat it confidentially.",
      {
        ul: [
          `<strong>Grievance Officer:</strong> ${BUSINESS.grievanceOfficer}`,
          `<strong>Email:</strong> <a href="mailto:${BUSINESS.email}" style="color:#0f616e;font-weight:600">${BUSINESS.email}</a>`,
          `<strong>Phone:</strong> <a href="tel:${BUSINESS.phoneHref}" style="color:#0f616e;font-weight:600">${BUSINESS.phone}</a>`,
          `<strong>Address:</strong> ${BUSINESS.address}`,
        ],
      },
      "We acknowledge complaints within 48 hours and aim to resolve them within 30 days.",
    ],
  },
]

function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      subtitle="The terms on which you may use the Omni Rheuma website, contact us on WhatsApp, and receive care at our clinic — including our medical disclaimer and appointment policy."
      intro={intro}
      sections={sections}
    />
  )
}

export default TermsAndConditions
