import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'

export default function SeamlessDeployment() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="Seamless Deployment"
        lede=""
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'Seamless Deployment' }]}
      />


        <section  className="bg-white pt-16 sm:pt-20">
        <div className="wrap">
          <p className="lede ">
          Seamless deployment delivers launch-ready IT, device rollouts, and infrastructure systems with single-point accountability and zero friction.
          </p>
        </div>
      </section>

      <Section eyebrow="Fast, Flawless IT Rollouts" title="Launch-ready from day one">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {[
            { t: 'End-to-End Ownership',  d: 'One integrated program team manages your entire deployment lifecycle from planning to launch.' },
            { t: 'Speed to Productivity', d: 'Devices and systems arrive pre-configured, tested, and ready for immediate employee use.' },
            { t: 'Minimized Downtime',    d: 'Structured migration frameworks prevent disruptions during active business hours.' }
          ].map((c, i) => (
            <div key={c.t} className="bg-white p-8">
              <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="h3 mt-4 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="grey"
        eyebrow="Pan India Last Mile Delivery & Warehousing"
        title="Secure storage, delivered to the final destination"
        lede="Pan India last mile delivery and warehousing services provide secure nationwide storage and final-destination transport for enterprise IT assets and goods."
      >
        <h3 className="h3 mb-6">Key features</h3>
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {[
            'Widespread logistical reach spanning hundreds of cities across India for secure, last-mile dispatch.',
            'Safe transit and coordinated delivery of sensitive compute, mobility, and data center infrastructure.',
            'Integrated IT asset relocation, inventory management, and systematic device deployment from regional staging hubs.'
          ].map((f, i) => (
            <div key={f} className="bg-white p-8">
              <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{f}</p>
            </div>
          ))}
        </div>
      </Section>
{/* 
      <Section eyebrow="Scope" title="What a deployment includes">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="lede">
              A rollout is a logistics problem wearing a technical costume. The configuration is
              the small part; the sequencing, the access, the lift schedule and the person who
              is on leave the day their machine arrives are the rest of it.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              We plan against your calendar, stage everything at our warehouse, and put an
              engineer at the desk so the user starts the day working rather than waiting.
            </p>
          </div>
          <RuleList items={[
            'Standard operating environment built, tested and version controlled.',
            'Zero-touch enrolment into your MDM or domain before dispatch.',
            'Asset tagging, serial capture and register reconciliation.',
            'Staged delivery matched to joining dates, floor by floor or site by site.',
            'Desk-side handover, data migration and first-day user orientation.',
            'Old device collection, certified erasure and disposal or buy-back.'
          ]} />
        </div>
      </Section> */}

      {/* <Section tone="grey" eyebrow="Programme types" title="Deployments we run">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {[
            { t: 'New office build', d: 'From empty floor to working desks - cabling, network, devices and meeting rooms on a fixed date.' },
            { t: 'Fleet refresh',    d: 'Generation change across an existing estate, with migration and zero unplanned downtime.' },
            { t: 'Onboarding waves', d: 'Recurring delivery synchronised to weekly or monthly joiner batches.' }
          ].map(c => (
            <div key={c.t} className="bg-white p-8">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section> */}

      {/* <Section eyebrow="Method" title="The four stages of a rollout">
        <Steps items={[
          { title: 'Plan',    text: 'Site survey, access requirements, delivery windows and a named client-side owner.' },
          { title: 'Stage',   text: 'Build, image, enrol and tag at our warehouse, then quality check every unit.' },
          { title: 'Deploy',  text: 'Scheduled delivery, installation and desk-side handover with sign-off per user.' },
          { title: 'Close',   text: 'Snag list cleared, asset register issued, old hardware collected and certified.' }
        ]} />
      </Section> */}

      <CTA title="Give us the date the floor opens." text="We will work backwards from it and tell you what has to be ordered this week." />
    </>
  )
}
