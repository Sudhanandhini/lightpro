import { PageHero, Section, RuleList, CTA } from '../components/UI.jsx'

const features = [
  'Certified on-site technicians available for urgent troubleshooting and hardware configurations across a massive city footprint.',
  'Rapid response helpdesk and remote management support for hybrid and remote workforces.',
  'Plug-and-play mobility and device management packages designed for rapid enterprise rollout.'
]

const warrantyFeatures = [
  'OEM-certified repair services performed directly at client locations using genuine parts.',
  'End-to-end asset lifecycle management, tracking warranty compliance, and minimizing asset downtime.',
  'Direct coordination with leading hardware and mobile technology vendors for seamless claim processing.'
]

const tiers = [
  { t: 'Per-incident',  d: 'A single call-out, quoted before we travel. No contract, no retainer.',
    points: ['Response quoted per visit', 'Parts billed at cost plus labour', 'Report issued after every visit'] },
  { t: 'Scheduled visits', d: 'A fixed number of engineer days a month, used for maintenance and backlog.',
    points: ['Same engineer each visit', 'Preventive checklist per site', 'Unused days roll one month'] },
  { t: 'Annual maintenance contract', d: 'Full cover for a defined asset list, with a response time written into the agreement.',
    points: ['Four-hour onsite response in Bengaluru', 'Next business day across 18 cities', 'Spares pool for fleets above 100 units'] }
]

export default function OnDemandServices() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="On-Demand Services"
        lede=""
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'On-Demand Services' }]}
      />


       <section  className="bg-white pt-16 sm:pt-20">
        <div className="wrap">
          <p className="lede ">
            Empower your business with flexible, on-demand technology solutions, expert technical assistance, and SLA-backed managed infrastructure designed to eliminate downtime and drive workplace efficiency.
          </p>
        </div>
      </section>


      <Section eyebrow="Key features" title="Expert help, exactly when you need it">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {features.map((f, i) => (
            <div key={f} className="bg-white p-8">
              <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey" eyebrow="In-Warranty Support" title="Protect your hardware investments">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="lede">
              Protect your hardware investments with manufacturer-authorized repairs, genuine OEM
              spare parts, and rapid turnaround times.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              In-warranty support manages authorized repair, replacement, and technical
              troubleshooting for hardware covered under manufacturer or enterprise warranties.
            </p>
          </div>
          <div>
            <h3 className="h3 mb-6">Key features</h3>
            <RuleList items={warrantyFeatures} />
          </div>
        </div>
      </Section>

      {/* <Section eyebrow="Cover levels" title="Three ways to buy support">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div key={tier.t} className={`flex flex-col border p-8 ${i === 2 ? 'border-brand bg-brand-tint/40' : 'border-hair bg-white'}`}>
              <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="h3 mt-4">{tier.t}</h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-500">{tier.d}</p>
              <ul className="mt-6 space-y-3 border-t border-hair pt-5">
                {tier.points.map(p => (
                  <li key={p} className="flex gap-3 text-[14px] text-ink-700">
                    <span className="mt-[10px] h-[2px] w-3 shrink-0 bg-brand" />{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section> */}

      {/* <Section tone="grey" eyebrow="What we cover" title="Inside the contract">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RuleList items={[
            'Laptops, desktops, workstations, printers and peripherals.',
            'Servers, storage, backup jobs and virtualisation hosts.',
            'Switching, routing, wireless access points and structured cabling.',
            'Firewalls, VPN links and endpoint security agents.',
            'Operating system and application support for the managed estate.'
          ]} />
          <div className="border border-hair bg-white p-8">
            <h3 className="h3">What you get every month</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              A ticket summary, an asset movement log, an SLA adherence figure and a short note
              on anything trending badly. Four pages, not forty - written so a finance director
              can read it without an interpreter.
            </p>
            <div className="mt-7 border-t border-hair pt-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Escalation</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                A named account manager, a named engineer and a documented path to a director.
                No ticket roulette when something serious breaks.
              </p>
            </div>
          </div>
        </div>
      </Section> */}

      <CTA title="Send us your asset list." text="We will price cover against it and tell you which assets are not worth contracting." />
    </>
  )
}
