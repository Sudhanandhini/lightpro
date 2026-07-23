import { PageHero, Section, LinkCard, BrandGrid, CTA } from '../components/UI.jsx'
import { nav, deviceBrands, networkSecurityBrands, deviceManagementBrands, productivityBrands } from '../data/site.js'

const children = nav.find(n => n.label === 'Digital Workspace Solutions').children

export default function DigitalWorkspace() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Everything an employee touches, from the desk to the cloud"
        lede="The laptop, the network it joins, the policy that governs it and the software that runs on it. Specified together so nothing falls between vendors."
        crumbs={[{ label: 'Digital Workspace Solutions' }]}
      />

      <Section
        eyebrow="Three disciplines"
        title="Choose the layer you need, or take all three"
        lede="Each one stands on its own. Together they are a complete, managed workspace."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {children.map((c, i) => (
            <LinkCard key={c.to} to={c.to} n={`0${i + 1}`} title={c.label} text={c.blurb} />
          ))}
        </div>
      </Section>

      <Section tone="grey" eyebrow="Partner ecosystem" title="Who we build with">
        <div className="space-y-12">
          <BrandGrid title="Devices" items={deviceBrands} />
          <BrandGrid title="Networking &amp; security" items={networkSecurityBrands} />
          <BrandGrid title="Device management" items={deviceManagementBrands} />
          <BrandGrid title="Productivity software" items={productivityBrands} />
        </div>
      </Section>

      <CTA />
    </>
  )
}
