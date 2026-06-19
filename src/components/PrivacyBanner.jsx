import { useState } from "react"

function PrivacyBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] bg-white border-t border-gray-200 p-6 shadow-2xl md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        <div className="flex-grow">
          <h6 className="text-xl font-bold mb-2">Your Privacy Choices</h6>
          <p className="text-sm text-gray-500 leading-relaxed">
            We process your personal data, including limited information about the products and services in which you
            express an interest, to show you Omni Rheuma ads online and to send you offers through email. We and our
            other tracking technologies show you Omni Rheuma ads on other sites. These activities may be considered
            &quot;sales&quot; or &quot;sharing&quot; of personal data or &quot;targeted advertising&quot; under applicable
            state law. By clicking &quot;Allow&quot;, you agree to these activities. Click &quot;Manage&quot; to
            customize your privacy preferences. View our{" "}
            <a className="underline" href="#">
              Privacy Policy
            </a>{" "}
            to learn more.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-48 shrink-0">
          <button onClick={() => setVisible(false)} className="w-full py-2 border border-gray-900 font-bold hover:bg-gray-50 text-sm">
            Allow
          </button>
          <button onClick={() => setVisible(false)} className="w-full py-2 border border-gray-200 font-bold hover:bg-gray-50 text-sm">
            Do not allow
          </button>
          <button onClick={() => setVisible(false)} className="w-full py-2 border border-gray-200 font-bold hover:bg-gray-50 text-sm text-center">
            Manage
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyBanner
