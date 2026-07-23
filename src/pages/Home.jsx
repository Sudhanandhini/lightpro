import { Link } from 'react-router-dom'
import InfraTopology from '../components/InfraTopology.jsx'
import { Section, LinkCard, IconCard, BrandGrid, RuleList, Steps, CTA } from '../components/UI.jsx'
import { practices, allBrands, company } from '../data/site.js'

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
    icon: <Icon><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.9 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 15a2 2 0 1 1 0-4 1.6 1.6 0 0 0 2.1-2.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 3a2 2 0 1 1 4 0 1.6 1.6 0 0 0 2.1 2.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 11a2 2 0 1 1 0 4z" /></Icon> }
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

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" />
                     {/* <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
             style={{ backgroundImage: 'repeating-linear-gradient(180deg,#fff 0 1px,transparent 1px 64px)' }} /> */}
        <div className="wrap relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="animate-rise">
            <p className="eyebrow">Since {company.since} &middot; {company.city}</p>
            <h1 className="h1 mt-6 !text-white">
              The complete <span className="text-brand">digital workspace</span>, built and run by one partner.
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
                <div key={l} className="bg-ink pt-6 px-5 text-center">
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
          Authorised partner and sourcing channel
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-slide gap-14 pr-14">
            {[...allBrands, ...allBrands].map((b, i) => (
              <span key={i} className="whitespace-nowrap font-display text-[19px] font-light tracking-tight text-ink-300">
                {b}
              </span>
            ))}
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
      <section className="section bg-ink text-white/70">
        <div className="wrap grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
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
              <div key={w.title} className={`bg-ink p-7 transition hover:bg-white/[0.04] ${w.wide ? 'sm:col-span-2' : ''}`}>
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

      {/* ---------------- LIFECYCLE ---------------- */}
      <Section
        tone="grey"
        eyebrow="How we work"
        title="A defined path from requirement to renewal"
        lede="Every engagement runs the same four stages, so you always know what happens next and who owns it."
      >
        <Steps items={[
          { title: 'Assess',   text: 'Requirement mapping, site survey, sizing and a budget model you can take to finance.' },
          { title: 'Supply',   text: 'OEM sourcing, quotation, purchase order handling and compliant invoicing.' },
          { title: 'Deploy',   text: 'Imaging, enrolment, racking, cabling and desk-side handover at every location.' },
          { title: 'Sustain',  text: 'Monitoring, patching, AMC cover, spares pool and scheduled refresh.' }
        ]} />
      </Section>

      {/* ---------------- BRANDS / PARTNER ECOSYSTEM ---------------- */}
      <Section
        eyebrow="Partner ecosystem"
        title="The brands we specify, supply and support"
        lede="We are vendor-aligned, not vendor-locked. The specification follows the workload."
      >
        <BrandGrid items={allBrands} />
      </Section>

      <CTA />
    </>
  )
}
