import { PageHero, Section, BrandGrid, RuleList, CTA } from '../components/UI.jsx'
import { deviceBrands, networkSecurityBrands } from '../data/site.js'

export default function NetworkEndpoint() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Network &amp; End-point"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        crumbs={[{ label: 'Digital Workspace Solutions', to: '/digital-workspace-solutions' }, { label: 'Network & End-point' }]}
      />

      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" lede="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
        <BrandGrid items={deviceBrands} note="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="h3">Lorem ipsum dolor</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <RuleList items={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
          ]} />
        </div>
      </Section>

      <Section tone="grey" eyebrow="Lorem ipsum" title="Consectetur adipiscing elit" lede="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.">
        <BrandGrid items={networkSecurityBrands} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
            { t: 'Dolor sit',   d: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
            { t: 'Amet elit',   d: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' }
          ].map(c => (
            <div key={c.t} className="border border-hair bg-white p-7">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA title="Lorem ipsum dolor sit amet." text="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </>
  )
}
