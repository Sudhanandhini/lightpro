import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'

export default function Warehousing() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="Warehousing"
        lede="Secure storage, staging and asset custody in Bengaluru. Buy when the price is right, hold until the floor is ready, and ship the day the team lands."
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'Warehousing' }]}
      />

      <Section eyebrow="Why hold stock with us" title="Procurement and readiness rarely share a calendar">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="lede">
              Hardware pricing moves on the manufacturer's quarter. Office fit-outs move on the
              landlord's. Warehousing lets you buy on the first schedule and deploy on the second
              without stacking cartons in a meeting room.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Stock is held under your name, insured, inventoried and released against your
              written instruction - and staged, imaged and tagged before it ever leaves.
            </p>
          </div>
          <RuleList items={[
            'Racked, access-controlled and CCTV-monitored floor space.',
            'Per-serial inventory with a portal-visible or emailed stock position.',
            'Insurance cover on stored goods, with your title preserved throughout.',
            'Buffer stock held for replacement and warranty swaps under AMC.',
            'Staging bay for imaging, enrolment, tagging and quality check.',
            'Reverse logistics - collection, quarantine, erasure and disposal.'
          ]} />
        </div>
      </Section>

      <Section tone="grey" eyebrow="Use cases" title="Who uses the warehouse">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {[
            { t: 'Delayed fit-outs',  d: 'Devices bought at the right price, held until the site handover date moves for the third time.' },
            { t: 'Buffer and spares', d: 'A standing pool of identical units so a failed machine is replaced the same day.' },
            { t: 'Distributed teams', d: 'Central stock, individual dispatch - one machine at a time to wherever the joiner lives.' }
          ].map(c => (
            <div key={c.t} className="bg-white p-8">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Custody chain" title="From receipt to release">
        <Steps items={[
          { title: 'Receive', text: 'Goods inward check against the purchase order, serial capture and damage inspection.' },
          { title: 'Store',   text: 'Racked by customer and batch, insured, inventoried and reconciled monthly.' },
          { title: 'Stage',   text: 'Image, enrol, tag and quality check on written release instruction.' },
          { title: 'Release', text: 'Dispatch to site or to individual addresses, tracked and signed for on delivery.' }
        ]} />
      </Section>

      <CTA title="Buying ahead of a move?" text="Tell us the volume and the likely hold period and we will quote storage alongside the hardware." />
    </>
  )
}
