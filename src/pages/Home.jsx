import { useState } from 'react'
import { Link } from 'react-router-dom'
import InfraTopology from '../components/InfraTopology.jsx'
import { Section, LinkCard, IconCard, BrandGrid, CTA } from '../components/UI.jsx'
import { practices, allBrands, company } from '../data/site.js'
import { getBrandLogo } from '../data/brandLogos.js'

function Icon({ children }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

const solutions = [
  { title: 'Corporate laptop rental', text: 'Business-class Dell, Lenovo and HP laptops with pre-imaged builds, domain join and asset tagging before dispatch.', meta: ['i5 / i7 / Ryzen', '1-500 units'],
    icon: <Icon><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></Icon> },
  { title: 'MacBook rental', text: 'MacBook Air and Pro on M-series silicon for design, engineering and leadership teams, MDM-enrolled on arrival.', meta: ['M2 / M3 / M4', 'Apple MDM'],
    icon: <Icon><rect x="4" y="5" width="16" height="11" rx="1.6" /><path d="M2 19h20l-2-3H4z" /></Icon> },
  { title: 'Desktop & workstation rental', text: 'All-in-one desktops for operations floors and GPU workstations for CAD, rendering and data science workloads.', meta: ['RTX / Quadro', 'ISV certified'],
    icon: <Icon><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></Icon> },
  { title: 'Servers & storage', text: 'Rack and tower servers, NAS and SAN storage, virtualisation and backup - sized to your actual workload, not a template.', meta: ['PowerEdge / ProLiant', 'VMware'],
    icon: <Icon><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></Icon> },
  { title: 'Networking', text: 'Structured cabling, managed switching, enterprise Wi-Fi and SD-WAN links designed for multi-floor and multi-site offices.', meta: ['Cisco / Aruba', 'Wi-Fi 6E'],
    icon: <Icon><circle cx="12" cy="12" r="3" /><path d="M12 2v7M12 15v7M2 12h7M15 12h7" /></Icon> },
  { title: 'Firewalls & security', text: 'Next-gen firewall deployment, endpoint protection, VPN, content filtering and audit-ready policy documentation.', meta: ['Fortinet / Sophos', 'UTM'],
    icon: <Icon><path d="M12 3l8 3.5v5.8c0 5-3.4 8.4-8 9.7-4.6-1.3-8-4.7-8-9.7V6.5z" /><path d="M9.5 12l1.8 1.8 3.4-3.6" /></Icon> },
  { title: 'Software licensing', text: 'Microsoft 365, Windows Server, Adobe, antivirus and OEM licences - genuine, compliant and renewal-tracked for you.', meta: ['Volume licensing', 'Renewal alerts'],
    icon: <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></Icon> },
  { title: 'Managed IT & AMC', text: 'Your extended IT team: helpdesk, onsite engineers, patching, monitoring and annual maintenance under a clear SLA.', meta: ['4-hr response', '24x7 NOC'],
    icon: <Icon><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.9 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 15a2 2 0 1 1 0-4 1.6 1.6 0 0 0 2.1-2.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 3a2 2 0 1 1 4 0 1.6 1.6 0 0 0 2.1 2.1l-.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 11a2 2 0 1 1 0 4z" /></Icon> }
]

const whyItems = [
  { title: 'Established since 2016', text: 'Nine years in continuous operation, with references you can call before you commit.',
    icon: <Icon><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" /></Icon> },
  { title: 'Certified experts', text: 'OEM-certified network, server and security engineers on staff, not subcontracted at the point of escalation.',
    icon: <Icon><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5" /></Icon> },
  { title: 'Dedicated account manager', text: 'A named account manager who knows your estate, your renewal dates and your procurement process.',
    icon: <Icon><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /></Icon> },
  { title: 'Enterprise support', text: 'Four-hour onsite response in Bengaluru and next-business-day cover across 18 cities.',
    icon: <Icon><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.8a2 2 0 0 1 1.7 2z" /></Icon> },
  { title: 'Audit-ready paperwork', text: 'Asset registers, erasure certificates and GST-compliant paperwork that reconcile at audit.',
    icon: <Icon><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Icon> },
  { title: 'Single point of accountability', text: 'One contract, one invoice, one point of accountability across every site.',
    icon: <Icon><path d="M9 17H7a5 5 0 1 1 0-10h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8" /></Icon> }
]

const industries = [
  { title: 'IT & software', text: 'Developer-grade laptops, high-core workstations and staging servers.',
    icon: <Icon><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></Icon> },
  { title: 'Startups', text: 'Rent instead of buy - preserve runway and scale headcount without capex.',
    icon: <Icon><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></Icon> },
  { title: 'Healthcare', text: 'HIS-ready endpoints, secure storage and patient-data-safe disposal.',
    icon: <Icon><path d="M12 5v14M5 12h14" /><circle cx="12" cy="12" r="9" /></Icon> },
  { title: 'Education', text: 'Lab rollouts, exam-season rentals and campus-wide Wi-Fi coverage.',
    icon: <Icon><path d="M22 9L12 4 2 9l10 5z" /><path d="M6 11v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6" /></Icon> },
  { title: 'Manufacturing', text: 'Shop-floor terminals, rugged devices and plant network hardening.',
    icon: <Icon><path d="M3 21V8l7-5 7 5v13" /><path d="M17 12h4v9M7 21v-6h6v6" /></Icon> },
  { title: 'BFSI & finance', text: 'Hardened endpoints, encrypted disks and audit-ready asset registers.',
    icon: <Icon><path d="M3 20h18M5 20V9l7-5 7 5v11M10 20v-6h4v6" /></Icon> },
  { title: 'Retail', text: 'POS systems, back-office servers and multi-store network links.',
    icon: <Icon><path d="M6 2L3 6v14h18V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></Icon> },
  { title: 'Government & PSU', text: 'GeM-compliant supply, tender documentation and long-term AMC.',
    icon: <Icon><path d="M12 3l8 3.5v5.8c0 5-3.4 8.4-8 9.7-4.6-1.3-8-4.7-8-9.7V6.5z" /></Icon> }
]

const lifecycle = [
  { n: '01', title: 'Consultation',  text: 'Requirement mapping, sizing and budget modelling with your team.' },
  { n: '02', title: 'Procurement',   text: 'OEM sourcing, quotation, PO handling and compliant invoicing.' },
  { n: '03', title: 'Deployment',    text: 'Delivery, racking, cabling and desk-side handover at every site.' },
  { n: '04', title: 'Configuration', text: 'Imaging, domain join, MDM enrolment and security baselines.' },
  { n: '05', title: 'Maintenance',   text: 'Preventive checks, patching, monitoring and AMC coverage.' },
  { n: '06', title: 'Upgrade',       text: 'Capacity reviews, refresh cycles and mid-term hardware swaps.' },
  { n: '07', title: 'Support',       text: 'Helpdesk, onsite engineers, spares pool and SLA reporting.' }
]

const products = [
  { tag: 'Rental', title: 'Business laptop fleet', text: 'Dell Latitude, Lenovo ThinkPad and HP EliteBook - imaged and asset-tagged before dispatch.', specs: ['i5 / i7', '8-32GB RAM', '256GB-1TB SSD'],
    icon: <Icon><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></Icon> },
  { tag: 'Rental', title: 'MacBook Air & Pro', text: 'M-series MacBooks, MDM-enrolled on arrival for design, engineering and leadership teams.', specs: ['M2 / M3 / M4', '16-36GB RAM', 'Apple MDM'],
    icon: <Icon><rect x="4" y="5" width="16" height="11" rx="1.6" /><path d="M2 19h20l-2-3H4z" /></Icon> },
  { tag: 'Rental / Purchase', title: 'Rack & tower servers', text: 'PowerEdge and ProLiant servers sized to your workload, with virtualisation and backup built in.', specs: ['Dual Xeon', 'Up to 128GB RAM', 'RAID storage'],
    icon: <Icon><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></Icon> },
  { tag: 'Purchase', title: 'Enterprise Wi-Fi & firewall', text: 'Managed switching, Wi-Fi 6E access points and next-gen firewalls, installed and configured.', specs: ['Cisco Meraki', 'Fortinet', 'Wi-Fi 6E'],
    icon: <Icon><path d="M12 3l8 3.5v5.8c0 5-3.4 8.4-8 9.7-4.6-1.3-8-4.7-8-9.7V6.5z" /><path d="M9.5 12l1.8 1.8 3.4-3.6" /></Icon> }
]

const plans = [
  { term: 'Short term', title: 'Project & pilot', text: 'For proof-of-concepts, short projects and seasonal headcount.',
    points: ['1-6 month terms', 'Same laptop model guaranteed', 'Swap on failure within 24 hrs', 'Flexible unit count'] },
  { term: 'Standard', title: 'Growth plan', featured: true, text: 'The most common plan for scaling teams.',
    points: ['12-24 month terms', 'Mid-term scale-up and swap-out', 'Asset tagging & imaging included', 'Priority 4-hr onsite response'] },
  { term: 'Long term', title: 'Enterprise plan', text: 'For estates on a three-year refresh cycle.',
    points: ['36-month terms', 'Buy-back option at term end', 'Dedicated account manager', 'Consolidated single invoice'] }
]

// Placeholder quotes - swap for verified customer feedback before this goes live.
const testimonials = [
  { quote: 'LightPro re-imaged and shipped 40 laptops in two days when we had a new cohort starting. Nobody else quoted that turnaround.', name: 'IT Manager', role: 'SaaS company, Bengaluru' },
  { quote: 'One invoice for laptops, the network and the firewall. Our finance team stopped chasing three different vendors.', name: 'Operations Lead', role: 'D2C retail brand' },
  { quote: 'Their engineers know our estate better than our own helpdesk did - renewal dates, warranty status, all of it.', name: 'Head of IT', role: 'Manufacturing company, Pune' }
]

// Illustrative outcomes - replace with verified figures from real engagements before this goes live.
const cases = [
  { sector: 'SaaS / Startup', title: '180 seats deployed in under four weeks for a scaling fintech', text: 'A fast-growing fintech needed laptops, MDM enrolment and a new office network live before their new office opened.',
    metrics: [['180', 'Devices deployed'], ['4 wks', 'Start to handover'], ['0', 'Missed SLA windows']] },
  { sector: 'Manufacturing', title: 'AMC coverage cut unplanned downtime across three plants', text: 'Preventive maintenance and a four-hour onsite SLA replaced a patchwork of local vendors across three manufacturing sites.',
    metrics: [['3', 'Plants covered'], ['4 hr', 'Onsite SLA'], ['-50%', 'Unplanned downtime']] },
  { sector: 'BFSI', title: 'Nationwide branch rollout under one audit-ready contract', text: 'Hardened endpoints and encrypted storage delivered to branches in nine cities under one consolidated, audit-ready contract.',
    metrics: [['9', 'Cities covered'], ['1', 'Consolidated contract'], ['100%', 'Assets tagged']] }
]

const faqs = [
  { q: 'What is the minimum rental term?', a: 'Our shortest standard term is one month, though most customers run 12-36 month plans. Project-based short-term rentals can be arranged case by case.' },
  { q: 'How fast can you deliver a bulk laptop order?', a: 'Standard bulk orders from our Bengaluru stock dispatch within 48 hours, imaged, asset-tagged and ready to hand over.' },
  { q: 'Do you support offices outside Bengaluru?', a: 'Yes. We deliver and support nationwide, with onsite engineers and next-business-day cover across 18 cities.' },
  { q: 'What happens if a rented device fails?', a: 'We swap it under SLA, typically within four hours in Bengaluru and next business day elsewhere, so your team is never without a working machine.' },
  { q: 'Can we mix rental and outright purchase in one order?', a: 'Yes - many customers rent laptops for flexible headcount and purchase servers and network hardware outright, all on one consolidated invoice.' },
  { q: 'Is GST-compliant invoicing included?', a: 'Every order, rental or purchase, comes with GST-compliant invoicing and, on request, an asset register for your audit trail.' }
]

function ProductCard({ tag, title, text, specs, icon }) {
  return (
    <div className="group flex flex-col border border-hair bg-white transition duration-300 hover:border-brand hover:shadow-[0_18px_40px_-24px_rgba(11,12,11,.35)]">
      <div className="relative flex h-36 items-center justify-center border-b border-hair bg-[#F7F8F6] text-brand">
        <span className="absolute left-4 top-4 bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">{tag}</span>
        <span className="scale-[1.7] transition duration-300 group-hover:scale-[1.9]">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="h3 text-[16.5px]">{title}</h3>
        <p className="mt-2 flex-1 text-[13.8px] leading-relaxed text-ink-500">{text}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {specs.map(s => <span key={s} className="border border-hair bg-[#F7F8F6] px-2.5 py-1 text-[11.5px] font-medium text-ink-700">{s}</span>)}
        </div>
      </div>
    </div>
  )
}

function PlanCard({ term, title, text, points, featured }) {
  return (
    <div className={`relative flex flex-col border bg-white p-8 ${featured ? 'border-brand shadow-[0_20px_50px_-26px_rgba(103,169,59,.45)]' : 'border-hair'}`}>
      {featured && <span className="absolute -top-3 right-7 bg-brand px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white">Most popular</span>}
      <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand">{term}</p>
      <h3 className="h3 mt-3 text-[19px]">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{text}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {points.map(p => (
          <li key={p} className="flex items-start gap-3 text-[14px] text-ink-700">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5" /></svg>
            {p}
          </li>
        ))}
      </ul>
      <Link to="/contact" className={`mt-8 ${featured ? 'btn-primary' : 'btn-outline'}`}>Request this plan</Link>
    </div>
  )
}

function QuoteCard({ quote, name, role }) {
  return (
    <div className="flex flex-col border border-hair bg-white p-8">
      <div className="flex gap-1 text-brand">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-5 flex-1 font-display text-[16px] font-medium leading-relaxed text-ink">&ldquo;{quote}&rdquo;</blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-hair pt-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink font-display text-[13px] font-bold text-white">
          {name.split(' ').map(w => w[0]).slice(0, 2).join('')}
        </div>
        <div>
          <p className="font-display text-[14px] font-medium text-ink">{name}</p>
          <p className="text-[12.5px] text-ink-300">{role}</p>
        </div>
      </div>
    </div>
  )
}

function CaseCard({ sector, title, text, metrics }) {
  return (
    <div className="flex flex-col border border-white/10 bg-white/[0.03] p-8 transition hover:border-brand/50">
      <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand">{sector}</p>
      <h3 className="mt-4 font-display text-[18px] font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-3 flex-1 text-[13.8px] leading-relaxed text-white/50">{text}</p>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {metrics.map(([n, l]) => (
          <div key={l}>
            <p className="font-display text-[19px] font-bold text-white">{n}</p>
            <p className="mt-0.5 text-[10.5px] leading-tight text-white/40">{l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-hair border-t border-hair">
      {items.map((f, i) => (
        <div key={f.q}>
          <button
            className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[16px] font-medium text-ink hover:text-brand"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {f.q}
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center border transition duration-200 ${
              open === i ? 'rotate-45 border-brand bg-brand text-white' : 'border-hair text-ink-500'}`}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
            <p className="max-w-[62ch] text-[14.5px] leading-relaxed text-ink-500">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-[#1d4601] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0"
             style={{ backgroundImage: 'radial-gradient(900px 480px at 78% 18%, rgba(103, 169, 59, 0.35), transparent 62%), radial-gradient(620px 420px at 12% 92%, rgba(103,169,59,.16), transparent 65%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="wrap relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="animate-rise">
            <p className="eyebrow1" style={{borderRadius:'50px', backgroundColor:'#a1a1a159', padding:'10px'}} >
            <span>Since {company.since} </span>    Bengaluru-headquartered · PAN-India delivery</p>
            <h1 className="h1 mt-6 !text-brand">
              Global Systems Integrator and Network Security Solutions Provider
            </h1>
            <p className="mt-7 max-w-[56ch] text-[1.08rem] leading-relaxed text-white/60">
              LightPro Technologies supplies the devices, the network, the security and the
              people behind them - from a single laptop to a multi-site rollout, specified,
              deployed and supported end to end.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Request a consultation</Link>
              <Link to="/digital-workspace-solutions" className="btn-light">Explore solutions</Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-px border-t border-white/10 bg-white/10">
              {[['400+', 'Business clients'], ['25,000+', 'Devices deployed'], ['18', 'Cities supported']].map(([n, l]) => (
                <div key={l} className=" pt-6 px-5 text-center">
                  <dt className="font-display text-[1.7rem] font-light tracking-tight text-white">{n}</dt>
                  <dd className="mt-1 text-[12.5px] text-white/40">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pl-6">
            <InfraTopology />
          </div>
        </div>
      </section>

      {/* ---------------- BRAND MARQUEE ---------------- */}
      <div className="border-b border-hair bg-white py-9">
        <p className="wrap mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-300">
          30+ Partners Across  IT Verticals
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-slide items-center gap-16 pr-16">
            {[...allBrands, ...allBrands].map((b, i) => {
              const logo = getBrandLogo(b)
              return logo ? (
                <img key={i} src={logo} alt={b}
                     className="h-8 max-w-[120px] shrink-0 object-contain grayscale-0 transition duration-300 hover:grayscale" />
              ) : (
                <span key={i} className="whitespace-nowrap font-display text-[19px] font-light tracking-tight text-ink-300">
                  {b}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* ---------------- OUR SOLUTIONS ---------------- */}
      <Section
        eyebrow="Our solutions"
        title="One partner for every layer of your IT infrastructure"
        lede="From a single MacBook for a new joiner to a full branch rollout with servers, switches and firewalls - sourced, configured, deployed and supported end to end."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(s => <IconCard key={s.title} {...s} />)}
        </div>
      </Section>

      {/* ---------------- PRACTICES ---------------- */}
      <Section
        tone="grey"
        eyebrow="What we do"
        title="Three practices that cover the whole estate"
        lede="Most businesses buy hardware from one vendor, security from another and hands from a third. LightPro carries all three, so accountability never splits."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {practices.map(p => <LinkCard key={p.to} {...p} />)}
        </div>
      </Section>

      {/* ---------------- WHY ---------------- */}
      <section className="section bg-[#1d4601]  text-white/70"  
        style={{ backgroundImage: 'radial-gradient(900px 480px at 78% 18%, rgba(103, 169, 59, 0.35), transparent 62%), radial-gradient(620px 420px at 12% 92%, rgba(103,169,59,.16), transparent 65%)' }}>
        <div className="wrap grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <p className="eyebrow">Why LightPro</p>
            <h2 className="h2 mt-5 !text-white">We stay on the asset, not just the invoice</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/60">
              A box arriving is the easy part. What follows - the imaging, the enrolment, the
              policy, the failed unit at 4pm on a Friday, the audit trail at year end - is
              where an infrastructure partner is actually judged.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['ISO-aligned processes', 'GST compliant invoicing', 'Asset tagging & audit reports', 'Buy-back & e-waste disposal'].map(c => (
                <span key={c} className="border border-white/15 px-4 py-2 text-[12.5px] text-white/70">{c}</span>
              ))}
            </div>

            <Link to="/about" className="btn-light mt-9">More about us</Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
            {whyItems.map(w => (
              <div key={w.title} className=" p-7 transition hover:bg-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-brand">{w.icon}</span>
                  <h3 className="font-display text-[15.5px] font-medium text-white">{w.title}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/50">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <Section
        eyebrow="Industries served"
        title="Infrastructure tuned to how your industry actually works"
        lede="Compliance needs, uptime tolerance and device profiles differ by sector. We build the specification around yours."
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(i => <IconCard key={i.title} {...i} />)}
        </div>
      </Section>

      {/* ---------------- IT INFRASTRUCTURE LIFECYCLE ---------------- */}
      <Section
        tone="grey"
        eyebrow="IT infrastructure lifecycle"
        title="Seven stages, one accountable partner at every one"
        lede="Most vendors sell you a box and disappear. We stay on the asset from the first requirement call to the day it is refreshed or retired."
        center
      >
        <div className="relative mt-4">
          <div aria-hidden className="absolute left-[7%] right-[7%] top-7 hidden h-px bg-hair lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-2">
            {lifecycle.map(step => (
              <div key={step.n} className="group relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-hair bg-white font-display text-[15px] font-bold text-brand transition duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  {step.n}
                </div>
                <h3 className="font-display text-[15px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 px-1 text-[13px] leading-relaxed text-ink-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- FEATURED PRODUCTS ---------------- */}
      <Section
        eyebrow="Featured products"
        title="Enterprise hardware, available to rent or purchase"
        lede="Current stock from our Bengaluru warehouse. Configuration and availability confirmed at quotation stage."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(p => <ProductCard key={p.title} {...p} />)}
        </div>
      </Section>

      {/* ---------------- CORPORATE RENTAL SOLUTIONS ---------------- */}
      <Section
        tone="grey"
        eyebrow="Corporate rental solutions"
        title="A plan for wherever you are in the growth curve"
        lede="Every plan includes imaging, asset tagging and GST-compliant invoicing. Mix and match across your estate as needed."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map(p => <PlanCard key={p.title} {...p} />)}
        </div>
      </Section>

      {/* ---------------- CLIENT FEEDBACK ---------------- */}
      <Section
        eyebrow="Client feedback"
        title="What it is like to run your estate through us"
        lede="A sample of the feedback our account managers hear directly from customers."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(t => <QuoteCard key={t.name + t.role} {...t} />)}
        </div>
      </Section>

      {/* ---------------- CASE STUDIES ---------------- */}
      <section className="section bg-[#1d4601] ">
        <div className="wrap">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Case studies</p>
            <h2 className="h2 mt-5 !text-white">Engagements built the same way we describe them</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/60">Illustrative outcomes based on the shape of engagements we run - ask your account manager for references from your sector.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map(c => <CaseCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ---------------- FAQS ---------------- */}
      <section className="section bg-[#F7F8F6]">
        <div className="wrap grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="h2 mt-5">Answers before you ask</h2>
            <p className="lede mt-5">Can&apos;t find what you need here? Send it straight to the team that will actually answer it.</p>
            <Link to="/contact" className="btn-outline mt-8">Ask us directly</Link>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ---------------- BRANDS / PARTNER ECOSYSTEM ---------------- */}
      {/* <Section
        eyebrow="Partner ecosystem"
        title="The brands we specify, supply and support"
        lede="We are vendor-aligned, not vendor-locked. The specification follows the workload."
      >
        <BrandGrid items={allBrands} />
      </Section> */}

      <CTA />
    </>
  )
}
