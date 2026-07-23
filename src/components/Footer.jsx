import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { nav, company } from '../data/site.js'

export default function Footer() {
  const groups = nav.filter(n => n.children)
  return (
    <footer className="bg-ink text-ink-300">
      <div className="rule" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-20 w-auto" light />
          <p className="mt-6 max-w-[32ch] text-[14px] leading-relaxed text-white/55">
            IT infrastructure partner since {company.since}. We build and run the digital
            workspace - devices, network, security and the people who keep it all working.
          </p>
          <a href={company.phoneHref} className="mt-6 inline-block font-display text-xl font-light text-white hover:text-brand">
            {company.phone}
          </a>
        </div>

        {groups.map(g => (
          <div key={g.to}>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{g.label}</h4>
            <ul className="mt-5 space-y-3">
              {g.children.map(c => (
                <li key={c.to}>
                  <Link to={c.to} className="text-[14px] text-white/60 transition hover:text-white">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Company</h4>
          <ul className="mt-5 space-y-3">
            <li><Link to="/about" className="text-[14px] text-white/60 hover:text-white">About</Link></li>
            <li><Link to="/network-and-cyber-security-services" className="text-[14px] text-white/60 hover:text-white">Network &amp; Cyber Security</Link></li>
            <li><Link to="/contact" className="text-[14px] text-white/60 hover:text-white">Contact Us</Link></li>
          </ul>
          <address className="mt-6 not-italic text-[13.5px] leading-relaxed text-white/45">
            {company.address}<br />
            <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
