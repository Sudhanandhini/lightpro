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
              Lightpro Technologies Pvt Ltd is a customer-centric IT and hardware infrastructure solution provider having more 
              than 18 years of exposure in IT industry with  dedication to meet client needs by following consultative approach.
            
            </p>
            <p className="space-y-5 text-[15.5px] leading-relaxed text-ink-500">
               Since  inception in 2016, we have worked as an extended team for growing startups, established businesses, helping 
               them build, scale, and manage dynamic IT environments. Headquartered in Bengaluru, our team possesses the operational 
               excellence to execute hassle-free technology upgrade projects and provide ongoing support across India.
            </p>
            <p className="space-y-5 text-[15.5px] leading-relaxed text-ink-500">
               Along with providing solutions to end customers we constantly evolving ourselves to provide impactful, cost-effective,
                 and industry-aligned IT solutions.
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

      <Section tone="grey" eyebrow="Leadership" title="Our Management Team">
         <p className="mb-14 text-[15.5px] leading-relaxed text-ink-500">
          Our leadership team consists of seasoned IT professionals and business strategists dedicated to
          delivering value creation, uncompromised ethics, and continuous improvement. We operate
          with a people-first approach, prioritizing employee growth to maintain a positive environment
          that translates into exceptional service for our clients.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { name: 'Sanketh Thilak', role: 'Director' },
            { name: 'Sharath P C',    role: 'Director' },
            { name: 'Thilipkumar A',  role: 'Director' }
          ].map(m => (
            <div key={m.name} className="bg-white p-8 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-tint/60 font-display text-[1.6rem] font-light text-brand">
                {m.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
              </div>
              <h3 className="h3 mt-5">{m.name}</h3>
              <p className="mt-1 text-[13px] uppercase tracking-[0.14em] text-ink-300">{m.role}</p>
            </div>
          ))}
        </div>
       
      </Section>

      <CTA title="Want the reference calls before the proposal?" text="We will put you in touch with customers running the same shape of estate as yours." />
    </>
  )
}
