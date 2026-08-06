// Set VITE_API_BASE_URL to "" when nginx proxies /api/ on the same domain, so
// requests stay relative. ?? (not ||) keeps that empty value from falling back.
const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5001").replace(/\/$/, "")
const API_KEY = import.meta.env.VITE_API_KEY || ""

async function request(path, { method = "POST", body } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { "x-api-key": API_KEY } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.error?.message || `Request failed with status ${res.status}`)
  }
  return data
}

/**
 * Submits the "Book a Consultation" form.
 * The backend sends the `enquiry_notification` WhatsApp template to the number
 * supplied in the form, using the name as the {{1}} parameter.
 *
 * @param {{ name: string, phone: string, message?: string, source?: string }} lead
 */
export function submitAppointmentLead(lead) {
  return request("/api/leads/appointment", { body: lead })
}
