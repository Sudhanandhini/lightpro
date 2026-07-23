import { Link } from 'react-router-dom'
import { getBrandLogo } from '../data/brandLogos.js'

/* ---------- section shell ---------- */
export function Section({ eyebrow, title, lede, children, tone = 'white', center = false, id }) {
  const tones = {
    white: 'bg-white',
    tint: 'bg-brand-tint/60',
    grey: 'bg-[#F7F8F6]',
    dark: 'bg-ink text-white/70'
  }
  return (
    <section id={id} className={`section ${tones[tone]}`}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
            {eyebrow && <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p>}
            {title && <h2 className={`h2 mt-5 ${tone === 'dark' ? '!text-white' : ''}`}>{title}</h2>}
            {lede && <p className={`lede mt-5 ${tone === 'dark' ? 'text-white/60' : ''}`}>{lede}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/* ---------- page header, used by every sub page ---------- */
export function PageHero({ eyebrow, title, lede, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-14 text-white sm:pb-20 sm:pt-16">
      {/* the logo's ascending rules, used as page furniture */}
      <div aria-hidden className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block">
        {[26, 60, 94, 128, 162, 196, 230].map((w, i) => (
          <div key={i} className="mb-[10px] h-[3px] bg-white/10" style={{ width: w + 'px', marginLeft: (230 - w) / 2 }} />
        ))}
        <div className="h-[5px] w-[280px] -translate-x-[25px] bg-brand" />
      </div>

      <div className="wrap relative">
        {crumbs.length > 0 && (
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-[12px] text-white/40">
            <Link to="/" className="hover:text-brand">Home</Link>
            {crumbs.map(c => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-white/25">/</span>
                {c.to ? <Link to={c.to} className="hover:text-brand">{c.label}</Link>
                      : <span className="text-white/70">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="h1 mt-5 max-w-[20ch] !text-white">{title}</h1>
        {lede && <p className="mt-6 max-w-[62ch] text-[1.05rem] leading-relaxed text-white/60">{lede}</p>}
      </div>
    </section>
  )
}

/* ---------- brand list, rendered as a technical index ---------- */
export function BrandGrid({ title, note, items }) {
  return (
    <div>
      {title && (
        <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-hair pb-3">
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink">{title}</h3>
          <span className="text-[12px] text-ink-300">{items.length} partners</span>
        </div>
      )}
      <ul className="grid grid-cols-2 gap-px  sm:grid-cols-3 lg:grid-cols-5">
        {items.map(b => {
          const logo = getBrandLogo(b)
          return (
            <li key={b}
                className="group flex min-h-[86px] items-center justify-center bg-white px-5 text-center transition hover:bg-brand-tint/60">
              {logo ? (
                <img
                  src={logo}
                  alt={b}
                  className="max-h-8 max-w-[120px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />

                //  <img
                //   src={logo}
                //   alt={b}
                //   className="max-h-8 max-w-[120px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                // />
              ) : (
                <span className="font-display text-[15px] font-medium tracking-tight text-ink-700 transition group-hover:text-brand">
                  {b}
                </span>
              )}
            </li>
          )
        })}
      </ul>
      {note && <p className="mt-4 text-[13px] text-ink-300">{note}</p>}
    </div>
  )
}

/* ---------- bullet list with the logo rule as the marker ---------- */
export function RuleList({ items, dark = false }) {
  return (
    <ul className="space-y-4">
      {items.map(i => (
        <li key={i} className="flex gap-4">
          <span className="mt-[11px] h-[3px] w-5 shrink-0 bg-brand" />
          <span className={`text-[15px] leading-relaxed ${dark ? 'text-white/65' : 'text-ink-500'}`}>{i}</span>
        </li>
      ))}
    </ul>
  )
}

/* ---------- icon card, used for solutions and industries grids ---------- */
export function IconCard({ icon, title, text, meta }) {
  return (
    <div className="card group flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-hair bg-[#F7F8F6] text-brand transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
        {icon}
      </div>
      <h3 className="h3">{title}</h3>
      {text && <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-500">{text}</p>}
      {meta && (
        <div className="mt-5 flex items-center justify-between border-t border-dashed border-hair pt-4 text-[12px] font-semibold text-ink-700">
          <span>{meta[0]}</span>
          <span className="text-brand">{meta[1]}</span>
        </div>
      )}
    </div>
  )
}

/* ---------- linked card ---------- */
export function LinkCard({ to, n, title, text, points = [] }) {
  return (
    <Link to={to} className="card group flex flex-col">
      {n && <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">{n}</span>}
      <h3 className="h3 mt-3 group-hover:text-brand-dark">{title}</h3>
      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-500">{text}</p>
      {points.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-hair pt-4">
          {points.map(p => (
            <li key={p} className="flex items-center gap-3 text-[13.5px] text-ink-700">
              <span className="h-[2px] w-3 bg-brand" />{p}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-brand">
        Explore
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
             strokeLinecap="round" strokeLinejoin="round"
             className="transition-transform group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  )
}

/* ---------- numbered process steps ---------- */
export function Steps({ items }) {
  return (
    <ol className="grid gap-px bg-hair sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.title} className="bg-white p-7">
          <div className="flex items-center gap-3">
            <span className="font-display text-[13px] font-semibold text-brand">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="h-[3px] flex-1 bg-hair">
              <span className="block h-full bg-brand" style={{ width: `${((i + 1) / items.length) * 100}%` }} />
            </span>
          </div>
          <h3 className="h3 mt-5 text-[17px]">{s.title}</h3>
          <p className="mt-2.5 text-[14px] leading-relaxed text-ink-500">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}

/* ---------- closing call to action ---------- */
export function CTA({ title = 'Tell us what you are trying to build.', text = 'Send the headcount, the sites and the timeline. You will get a written scope and a costed proposal within two working days.', primary = { to: '/contact', label: 'Contact Us' } }) {
  return (
    <section className="bg-brand">
      <div className="wrap flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="h2 !text-white">{title}</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to={primary.to} className="btn bg-ink text-white hover:bg-white hover:text-ink">{primary.label}</Link>
          <a href="tel:+918041234567" className="btn-light">Call +91 80 4123 4567</a>
        </div>
      </div>
    </section>
  )
}
