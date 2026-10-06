import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from './Logo.jsx'
import { nav, company } from '../data/site.js'
import logo from '../assets/logo.jpg'

function Caret({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
         className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [openKey, setOpenKey] = useState(null)   // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSub, setMobileSub] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const barRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close everything on route change
  useEffect(() => { setOpenKey(null); setMobileOpen(false); setMobileSub(null) }, [pathname])

  // close desktop dropdown on outside click / Escape
  useEffect(() => {
    const onDown = e => { if (barRef.current && !barRef.current.contains(e.target)) setOpenKey(null) }
    const onKey = e => { if (e.key === 'Escape') { setOpenKey(null); setMobileOpen(false) } }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [])

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[16px] font-medium tracking-tight transition-colors ${
      isActive ? 'text-brand' : 'text-black hover:text-brand'
    }`

  return (
    <>
      {/* utility strip */}
      <div className="hidden bg-ink text-white lg:block">
        <div className="wrap flex h-9 items-center justify-between text-[12px]">
          <p className="text-white/60">
            IT infrastructure partner since {company.since} &middot; {company.city} &middot; deploying across India
          </p>
          <div className="flex items-center gap-6 text-white/75">
            <a href={company.phoneHref} className="hover:text-brand">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="hover:text-brand">{company.email}</a>
          </div>
        </div>
      </div>

      <header
        ref={barRef}
        className={`sticky top-0 z-50 border-b bg-white backdrop-blur transition-shadow ${
          scrolled
            ? 'border-hair shadow-[0_6px_20px_-4px_rgba(11,12,11,.18)]'
            : 'border-transparent shadow-[0_4px_14px_-2px_rgba(11,12,11,.12)]'
        }`}
      >
        <div className="wrap flex h-auto items-center justify-between gap-6">
          {/* logo, left */}
          <Link to="/" aria-label="LightPro Technologies home" className="shrink-0">
            {/* <LogoMark className="h-auto w-[200px]" /> */}
            <img src={logo} alt="LightPro Technologies" className="h-auto w-[160px]" />
          </Link>

          {/* menu, right */}
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(item =>
              item.children ? (
                <div key={item.to} className="relative"
                     onMouseEnter={() => setOpenKey(item.to)}
                     onMouseLeave={() => setOpenKey(null)}>
                  <button
                    className={`flex items-center gap-1.5 py-2 text-[16px] font-medium tracking-tight transition-colors ${
                      pathname.startsWith(item.to) ? 'text-brand' : 'text-black hover:text-brand'
                    }`}
                    aria-expanded={openKey === item.to}
                    aria-haspopup="true"
                    onClick={() => setOpenKey(openKey === item.to ? null : item.to)}
                  >
                    {item.label}<Caret open={openKey === item.to} />
                  </button>

                  {openKey === item.to && (
                    <div className="absolute left-1/2 top-full w-[330px] -translate-x-1/2 pt-3">
                      <div className="border border-hair bg-white shadow-[0_28px_60px_-30px_rgba(11,12,11,.5)]">
                        <div className="rule" />
                        <Link to={item.to}
                              className="block border-b border-hair px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black hover:text-brand">
                          Overview
                        </Link>
                        {item.children.map(c => (
                          <NavLink key={c.to} to={c.to}
                            className={({ isActive }) =>
                              `group block border-b border-hair px-5 py-3.5 last:border-0 transition-colors ${
                                isActive ? 'bg-brand-tint' : 'hover:bg-brand-tint'
                              }`}>
                            <span className="block text-[14px] font-medium text-ink group-hover:text-brand-dark">{c.label}</span>
                            <span className="mt-0.5 block text-[12px] leading-snug text-ink-300">{c.blurb}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.label === 'Contact Us' ? (
                <Link key={item.to} to={item.to} className="btn-primary bg-[#1d4601] !px-5 !py-2.5 !text-[13px]">
                  Contact Us
                </Link>
              ) : (
                <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
              )
            )}
          </nav>

          {/* burger */}
          <button
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-hair lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span className={`block h-[2px] w-5 bg-ink transition ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-5 bg-ink transition ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-5 bg-brand transition ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* mobile drawer */}
        {mobileOpen && (
          <div className="border-t border-hair bg-white lg:hidden">
            <nav className="wrap py-2">
              {nav.map(item =>
                item.children ? (
                  <div key={item.to} className="border-b border-hair">
                    <button
                      className="flex w-full items-center justify-between py-4 text-left text-[16px] font-medium text-ink"
                      onClick={() => setMobileSub(mobileSub === item.to ? null : item.to)}
                      aria-expanded={mobileSub === item.to}
                    >
                      {item.label}<Caret open={mobileSub === item.to} />
                    </button>
                    {mobileSub === item.to && (
                      <div className="border-l-2 border-brand pb-3 pl-4">
                        <Link to={item.to} className="block py-2 text-[16px] text-ink-500">Overview</Link>
                        {item.children.map(c => (
                          <Link key={c.to} to={c.to} className="block py-2 text-[16px] text-ink-500 hover:text-brand">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.to} to={item.to}
                        className="block border-b border-hair py-4 text-[16px] font-medium text-ink">
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/contact" className="btn-primary my-5 w-full">Request a consultation</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
