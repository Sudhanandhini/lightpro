import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'
import { company } from '../data/site.js'
import teamImage from '../assets/team.jpg'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An IT department you do not have to hire"
        lede={`${company.name} has equipped growing businesses since ${company.since}. We sit between the manufacturers and your teams, carrying the specification, the logistics, the configuration and the aftercare.`}
        crumbs={[{ label: 'About' }]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="h2 mt-5">Built around one uncomfortable truth</h2>
             <p className="space-y-5 text-[15.5px] leading-relaxed text-ink-500">
              Hardware is easy to buy and hard to run. Most companies discover this the week a
              new team starts and forty machines arrive in boxes with no image, no enrolment
              and no asset tag - and no one on the invoice is responsible for that gap.
            </p>
            <p className="space-y-5 text-[15.5px] leading-relaxed text-ink-500">
              LightPro was founded in {company.since} to close it. We began supplying devices to
              startups in {company.city}, then added the network they plugged into, the security
              policy that governed them, the management platform that enforced it and, eventually,
              the engineers who ran the whole thing day to day.
            </p>
            <p className="space-y-5 text-[15.5px] leading-relaxed text-ink-500">
              Today that is one continuous service: digital workspace solutions, network and cyber
              security services, and professional services. Different teams inside LightPro, but a
              single contract and a single point of accountability for the customer.
            </p>
          </div>
          <div >
           <img src={teamImage} alt="Our team" />
          </div>
        </div>
      </Section>

      <Section tone="grey" eyebrow="How we operate" title="Four commitments we hold ourselves to">
        <Steps items={[
          { title: 'Specify honestly', text: 'The right configuration for the workload, not the one with the best margin.' },
          { title: 'Deliver ready',    text: 'Imaged, enrolled, tagged and documented before it leaves our warehouse.' },
          { title: 'Answer fast',      text: 'Defined response times, a named manager and an engineer who already knows your estate.' },
          { title: 'Close the loop',   text: 'Certified erasure, buy-back options and responsible disposal at end of life.' }
        ]} />
      </Section>

      <Section eyebrow="At a glance" title="Where we operate">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RuleList items={[
            `Headquartered in ${company.city}, with a bonded warehouse and staging floor on site.`,
            'Onsite support across 18 cities, including Hyderabad, Chennai, Pune, Mumbai and Delhi NCR.',
            'Delivery nationwide under a single contract and a single invoice.',
            'Engineers certified across Microsoft, Apple, Cisco, Fortinet and Sophos platforms.'
          ]} />
          <div className="grid grid-cols-2 gap-px bg-hair">
            {[['2016', 'Founded'], ['400+', 'Business clients'], ['25,000+', 'Devices deployed'], ['18', 'Cities supported']].map(([n, l]) => (
              <div key={l} className="bg-white p-8">
                <p className="font-display text-[2.2rem] font-light tracking-tight text-ink">{n}</p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.14em] text-ink-300">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA title="Want the reference calls before the proposal?" text="We will put you in touch with customers running the same shape of estate as yours." />
    </>
  )
}
