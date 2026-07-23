import { PageHero, Section, BrandGrid, RuleList, CTA } from '../components/UI.jsx'
import { deviceBrands, networkSecurityBrands } from '../data/site.js'

export default function NetworkEndpoint() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Network &amp; End-point"
        lede="The physical layer of the workspace: the machine on the desk and the infrastructure it connects through. Sourced, configured and installed as one job."
        crumbs={[{ label: 'Digital Workspace Solutions', to: '/digital-workspace-solutions' }, { label: 'Network & End-point' }]}
      />

      <Section eyebrow="Devices" title="End-point hardware" lede="Business-class machines specified to the workload - not a single catalogue model stretched across every role.">
        <BrandGrid items={deviceBrands} note="Brand availability and configurations confirmed at quotation stage." />
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="h3">What we supply</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Laptops, desktops, all-in-ones, workstations, tablets and the docking, display and
              peripheral estate around them. Available to purchase or on rental terms.
            </p>
          </div>
          <RuleList items={[
            'Standard operating environment applied before dispatch - your image, your applications.',
            'Domain join or MDM enrolment completed at our staging floor.',
            'Asset tagging, serial capture and a register that reconciles with your finance system.',
            'Warranty registration and single-point warranty claims handled by us.',
            'Buy-back, refresh and certified erasure at end of term.'
          ]} />
        </div>
      </Section>

      <Section tone="grey" eyebrow="Infrastructure" title="Networking &amp; security hardware" lede="Switching, routing, wireless and perimeter, designed for multi-floor and multi-site offices.">
        <BrandGrid items={networkSecurityBrands} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: 'Design', d: 'Site survey, heat mapping, VLAN and addressing plan, and a bill of materials you can tender against.' },
            { t: 'Install', d: 'Structured cabling, racking, patching, configuration and labelled documentation on handover.' },
            { t: 'Operate', d: 'Firmware currency, configuration backup, monitoring and change control under AMC.' }
          ].map(c => (
            <div key={c.t} className="border border-hair bg-white p-7">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA title="Send us a floor plan and a headcount." text="We will return a specification, a bill of materials and a deployment schedule." />
    </>
  )
}
