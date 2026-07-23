import { Link } from 'react-router-dom'
import InfraTopology from '../components/InfraTopology.jsx'
import { Section, LinkCard, BrandGrid, RuleList, Steps, CTA } from '../components/UI.jsx'
import { practices, allBrands, company } from '../data/site.js'

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]"
             style={{ backgroundImage: 'repeating-linear-gradient(180deg,#fff 0 1px,transparent 1px 64px)' }} />
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
                <div key={l} className="bg-ink pt-6">
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

      {/* ---------------- PRACTICES ---------------- */}
      <Section
        eyebrow="What we do"
        title="Three practices that cover the whole estate"
        lede="Most businesses buy hardware from one vendor, security from another and hands from a third. LightPro carries all three, so accountability never splits."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {practices.map(p => <LinkCard key={p.to} {...p} />)}
        </div>
      </Section>

      {/* ---------------- WHY ---------------- */}
      <section className="section bg-[#F7F8F6]">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Why LightPro</p>
            <h2 className="h2 mt-5">We stay on the asset, not just the invoice</h2>
            <p className="lede mt-5">
              A box arriving is the easy part. What follows - the imaging, the enrolment, the
              policy, the failed unit at 4pm on a Friday, the audit trail at year end - is
              where an infrastructure partner is actually judged.
            </p>
            <Link to="/about" className="btn-outline mt-8">More about us</Link>
          </div>
          <RuleList items={[
            'Nine years in continuous operation, with references you can call before you commit.',
            'OEM-certified network, server and security engineers on staff, not subcontracted at the point of escalation.',
            'A named account manager who knows your estate, your renewal dates and your procurement process.',
            'Four-hour onsite response in Bengaluru and next-business-day cover across 18 cities.',
            'Asset registers, erasure certificates and GST-compliant paperwork that reconcile at audit.',
            'One contract, one invoice, one point of accountability across every site.'
          ]} />
        </div>
      </section>

      {/* ---------------- LIFECYCLE ---------------- */}
      <Section
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

      {/* ---------------- BRANDS ---------------- */}
      <Section
        tone="grey"
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
