import { PageHero, Section, LinkCard, RuleList, CTA } from '../components/UI.jsx'
import { nav } from '../data/site.js'

const children = nav.find(n => n.label === 'LightPro Professional Services').children

export default function ProfessionalServices() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="LightPro Professional Services"
        lede=""
        crumbs={[{ label: 'LightPro Professional Services' }]}
      />

      <Section eyebrow="Four services" title="Hands, wherever the work is">
        <div className="grid gap-6 md:grid-cols-2">
          {children.map((c, i) => (
            <LinkCard key={c.to} to={c.to} n={`0${i + 1}`} title={c.label} text={c.blurb} />
          ))}
        </div>
      </Section>

      {/* <Section tone="grey" eyebrow="Why it matters" title="Hardware arrives on time. Projects fail on people.">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <p className="lede">
            The gap between a purchase order and a working desk is measured in engineer hours -
            imaging, enrolment, cabling, handover, the second visit for the machine that would
            not join the domain. That gap is what this practice exists to close.
          </p>
          <RuleList items={[
            'Certified engineers available by the day, the month or the project.',
            'Deployment crews that scale to a floor, a building or a national rollout.',
            'Break-fix and scheduled maintenance under a defined response time.',
            'Bonded warehouse capacity for staging, buffer stock and asset custody.'
          ]} />
        </div>
      </Section> */}

      <CTA />
    </>
  )
}
