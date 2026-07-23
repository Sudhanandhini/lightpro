import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'

export default function SeamlessDeployment() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="Seamless Deployment"
        lede="Devices that arrive working. Imaging, enrolment, asset tagging, delivery and desk-side handover, sequenced against your joining calendar rather than ours."
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'Seamless Deployment' }]}
      />

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
      </Section>

      <Section tone="grey" eyebrow="Programme types" title="Deployments we run">
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
      </Section>

      <Section eyebrow="Method" title="The four stages of a rollout">
        <Steps items={[
          { title: 'Plan',    text: 'Site survey, access requirements, delivery windows and a named client-side owner.' },
          { title: 'Stage',   text: 'Build, image, enrol and tag at our warehouse, then quality check every unit.' },
          { title: 'Deploy',  text: 'Scheduled delivery, installation and desk-side handover with sign-off per user.' },
          { title: 'Close',   text: 'Snag list cleared, asset register issued, old hardware collected and certified.' }
        ]} />
      </Section>

      <CTA title="Give us the date the floor opens." text="We will work backwards from it and tell you what has to be ordered this week." />
    </>
  )
}
