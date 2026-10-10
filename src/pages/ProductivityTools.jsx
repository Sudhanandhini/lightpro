import { PageHero, Section, BrandGrid, RuleList, CTA } from '../components/UI.jsx'
import { productivityBrands } from '../data/site.js'

export default function ProductivityTools() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Productivity Software &amp; Tools"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        crumbs={[{ label: 'Digital Workspace Solutions', to: '/digital-workspace-solutions' }, { label: 'Productivity Software & Tools' }]}
      />

      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" lede="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
        <BrandGrid items={productivityBrands} />
      </Section>

      {/* <Section tone="grey" eyebrow="Lorem ipsum" title="Consectetur adipiscing elit">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="lede">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <RuleList items={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.'
          ]} />
        </div>
      </Section> */}

      <CTA title="Lorem ipsum dolor sit amet." text="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </>
  )
}
