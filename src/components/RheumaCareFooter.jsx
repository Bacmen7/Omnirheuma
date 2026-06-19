const footerSections = {
  Popular: ["Rheumatoid Arthritis", "Psoriatic Arthritis", "Biologics", "Infusions", "Lupus"],
  About: ["Founders Letter", "Medical Board", "Careers", "Health Guide"],
  Support: ["Contact us", "FAQ", "Billing & Insurance"],
  Legal: ["Terms of Service", "Privacy Policy", "Data Privacy"],
}

function RheumaCareFooter() {
  return (
    <footer className="bg-[#0e0e0e] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a className="inline-flex items-center" href="#" aria-label="Omni Rheuma home">
              <img src="/logo.png" alt="Omni Rheuma logo" className="h-40 w-40 object-contain" />
            </a>
            <div className="mt-6 space-y-2 text-sm font-semibold">
              <a href="tel:+918290638358" className="block text-gray-400 hover:text-white transition-colors">+91 82906 38358</a>
              <a href="mailto:omnirheuma@gmail.com" className="block text-gray-400 hover:text-white transition-colors">omnirheuma@gmail.com</a>
            </div>
          </div>
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">{title}</h5>
              <ul className="space-y-4 text-sm font-medium">
                {links.map((link) => (
                  <li key={link}>
                    <a className="text-gray-400 hover:text-white transition-colors" href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center opacity-50">
            <img src="/logo.png" alt="Omni Rheuma logo" className="h-32 w-32 object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-900/30 p-2 rounded-lg flex items-center gap-2 border border-blue-800/50">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-tighter">LegitScript Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default RheumaCareFooter
