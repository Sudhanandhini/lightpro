import { useState } from 'react'
import { PageHero } from '../components/UI.jsx'
import { company, nav } from '../data/site.js'

const interests = [
  'Network & End-point',
  'Device Management Solutions',
  'Productivity Software & Tools',
  'Network & Cyber Security Services',
  'IT Staffing Services',
  'Seamless Deployment',
  'On-Demand Services',
  'Last Mile Delivery & Warehousing',
  
]

export default function Contact() {
  const [status, setStatus] = useState('idle')   // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    if (!payload.name?.trim() || !payload.email?.includes('@')) {
      setError('Add your name and a valid work email so we can reply.')
      setStatus('error')
      return
    }

    setStatus('sending'); setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      e.target.reset()
    } catch {
      setError('That did not send. Email us directly at ' + company.email + ' and we will pick it up.')
      setStatus('error')
    }
  }

  const field = 'w-full border border-hair bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-brand'
  const label = 'mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-300'

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you are trying to build"
        lede="Send the headcount, the sites and the timeline. You will get a written scope and a costed proposal within two working days."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          {/* details */}
          <div>
            <p className="eyebrow">Reach us</p>
            <h2 className="h2 mt-5">Bengaluru, and wherever your sites are</h2>

            <dl className="mt-10 divide-y divide-hair border-y border-hair">
              {[
                ['Head office', company.address],
                ['Sales and procurement', `  ${company.hours}`],
                ['Email', `${company.email} / ${company.support}`],
                ['Support desk', '24x7 for AMC and managed services customers']
              ].map(([k, v]) => (
                <div key={k} className="py-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">{k}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink-500">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-l-2 border-brand pl-5">
              <p className="text-[15px] leading-relaxed text-ink-500">
                Prefer to talk first? Call the sales line and ask for the practice you need -
                digital workspace, security, or professional services.
              </p>
            </div>
          </div>

          {/* form */}
          <div className="border border-hair bg-white">
            <div className="rule" />
            <div className="p-8 sm:p-10">
              {status === 'sent' ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-brand">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
                         strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 className="h3">Request received</h3>
                  <p className="mx-auto mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-500">
                    An account manager will reply within one working day. If it is urgent,
                    call {company.phone}.
                  </p>
                  <button className="btn-outline mt-8" onClick={() => setStatus('idle')}>Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="h3">Request a consultation</h3>
                  <p className="mt-2 text-[14px] text-ink-500">
                    A scoping conversation with an engineer, not a call centre.
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="name">Full name</label>
                      <input className={field} id="name" name="name" type="text" placeholder="Priya Sharma" required />
                    </div>
                    <div>
                      <label className={label} htmlFor="companyName">Company</label>
                      <input className={field} id="companyName" name="company" type="text" placeholder="Acme Technologies" />
                    </div>
                    <div>
                      <label className={label} htmlFor="email">Work email</label>
                      <input className={field} id="email" name="email" type="email" placeholder="priya@acme.com" required />
                    </div>
                    <div>
                      <label className={label} htmlFor="phone">Phone</label>
                      <input className={field} id="phone" name="phone" type="tel" placeholder="+91 98xxx xxxxx" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="interest">What do you need?</label>
                      <select className={field} id="interest" name="interest" defaultValue={interests[0]}>
                        {interests.map(i => <option key={i}>{i}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={label} htmlFor="message">Requirement details</label>
                      <textarea className={`${field} min-h-[120px] resize-y`} id="message" name="message"
                                placeholder="Team size, locations, timeline and any configuration standards you follow." />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="mt-5 border-l-2 border-brand bg-brand-tint px-4 py-3 text-[14px] text-ink-700">{error}</p>
                  )}

                  <button type="submit" className="btn-primary mt-7 w-full" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send request'}
                  </button>
                  <p className="mt-4 text-center text-[12.5px] text-ink-300">
                    We reply within one working day. Your details stay with our sales team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section className="border-t border-hair">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.05578330411296!2d77.59997288000902!3d12.914628141421968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156151379205%3A0x82c9f9b521bd8304!2sLightpro%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1785385477749!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="LightPro Technologies location"
        />
      </section>

      {/* direct lines to the management team */}
      <section className="border-t border-hair bg-white py-14">
        <div className="wrap">
          <p className="eyebrow">Contact Us</p>
          <h2 className="h2 mt-5">Speak to the management team directly</h2>
          <div className="mt-10 grid gap-px bg-hair sm:grid-cols-3">
            {[
              { name: 'Sanketh Thilak', phone: '+91-9449973956', email: 'sanketh@lightprotechnologies.com' },
              { name: 'Sharath PC',      phone: '+91-9739349449', email: 'sharath.pallakki@lightprotechnologies.com' },
              { name: 'Thilipkumar A',   phone: '+91-8296831382', email: 'thilip@lightprotechnologies.com' }
            ].map(p => (
              <div key={p.name} className="bg-white p-8">
                <h3 className="h3">{p.name}</h3>
                <a href={`tel:${p.phone}`} className="mt-3 block text-[15px] text-ink-500 hover:text-brand">{p.phone}</a>
                <a href={`mailto:${p.email}`} className="mt-1 block text-[14px] text-ink-500 hover:text-brand">{p.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* quick links to every service, so contact is never a dead end */}
      <section className="border-t border-hair bg-[#F7F8F6] py-14">
        <div className="wrap">
          <p className="eyebrow">Not sure who to ask for?</p>
          <div className="mt-8 grid gap-px  sm:grid-cols-2 lg:grid-cols-3">
            {nav.filter(n => n.children).flatMap(g => g.children).map(c => (
              <a key={c.to} href={c.to} className="group bg-white p-6 transition hover:bg-ink">
                <span className="block font-display text-[15px] font-medium text-ink transition group-hover:text-brand">{c.label}</span>
                <span className="mt-1 block text-[13px] text-ink-300 transition group-hover:text-white/50">{c.blurb}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
