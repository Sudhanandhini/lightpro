import { PageHero, Section, BrandGrid, RuleList, CTA } from '../components/UI.jsx'
import { productivityBrands } from '../data/site.js'

export default function ProductivityTools() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Productivity Software &amp; Tools"
        lede="Genuine licences for the applications your teams actually work in, procured on the right agreement and tracked to renewal so nothing lapses or over-runs."
        crumbs={[{ label: 'Digital Workspace Solutions', to: '/digital-workspace-solutions' }, { label: 'Productivity Software & Tools' }]}
      />

      <Section eyebrow="Software partners" title="What we licence" lede="Volume, subscription and perpetual agreements across the productivity, creative, engineering and security estate.">
        <BrandGrid items={productivityBrands} />
      </Section>

      <Section tone="grey" eyebrow="Licensing service" title="Procurement is the easy half">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="lede">
              Most licensing waste is not caused by paying too much per seat. It is caused by
              seats nobody cancelled, tiers nobody reviewed and renewals nobody diarised.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              We hold the register, flag the renewal ninety days out, and tell you where you are
              over-licensed before the invoice arrives - including when that means selling you less.
            </p>
          </div>
          <RuleList items={[
            'Licence position audit across every publisher on your estate.',
            'Right-sizing before renewal - tier changes, seat reclamation and consolidation.',
            'Renewal calendar with ninety, sixty and thirty day alerts.',
            'Deployment through your management platform, not a shared download link.',
            'Single GST-compliant invoice covering multiple publishers.',
            'True-up support and audit-ready documentation of entitlement.'
          ]} />
        </div>
      </Section>

      <CTA title="Send us your current renewal list." text="We will return a licence position and tell you plainly where you are paying for seats you do not use." />
    </>
  )
}
