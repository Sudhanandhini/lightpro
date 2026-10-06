import { PageHero, Section, LinkCard, BrandGrid, CTA } from '../components/UI.jsx'
import { nav, deviceBrands, networkSecurityBrands, deviceManagementBrands, productivityBrands } from '../data/site.js'

const children = nav.find(n => n.label === 'Digital Workspace Solutions').children

const capabilities = [
  { t: 'Copilot+ PCs',              d: 'Copilot+ PCs with AI-ready performance.' },
  { t: 'Military-grade durability', d: 'Military-grade (MIL-STD 810H) durability standards.' },
  { t: 'Sustainable lifecycles',    d: 'Sustainable hardware lifecycles and recovery.' },
  { t: 'Configuration & imaging',   d: 'Customized configuration and imaging services.' }
]

export default function DigitalWorkspace() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Digital Workspace Solutions"
        lede=""
        crumbs={[{ label: 'Digital Workspace Solutions' }]}
      />

      <Section
        eyebrow="Key capabilities"
        title="Advance your digital workplace"
        lede="At Lightpro, we build, secure and maintain computing infrastructure for Digital workspace. Advance your digital workplace with the world’s most secure and sustainable PCs with their intelligent systems that provide a seamless balance of performance, security, and manageability."
      >
        <div className="grid gap-px bg-hair md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <div key={c.t} className="bg-white p-7">
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

      {/* <Section eyebrow="Partner ecosystem" title="Who we build with">
        <div className="space-y-12">
          <BrandGrid title="Devices" items={deviceBrands} />
          <BrandGrid title="Networking &amp; security" items={networkSecurityBrands} />
          <BrandGrid title="Device management" items={deviceManagementBrands} />
          <BrandGrid title="Productivity software" items={productivityBrands} />
        </div>
      </Section> */}

      <CTA />
    </>
  )
}
