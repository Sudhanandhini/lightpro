import { PageHero, Section, BrandGrid, RuleList, Steps, CTA } from '../components/UI.jsx'
import { deviceManagementBrands } from '../data/site.js'

export default function DeviceManagement() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Device Management Solutions"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        crumbs={[{ label: 'Digital Workspace Solutions', to: '/digital-workspace-solutions' }, { label: 'Device Management Solutions' }]}
      />

      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" lede="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
        <BrandGrid items={deviceManagementBrands} />
      </Section>

      {/* <Section tone="grey" eyebrow="Lorem ipsum" title="Consectetur adipiscing elit">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RuleList items={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.'
          ]} />
          <div className="border border-hair bg-white p-8">
            <h3 className="h3">Lorem ipsum dolor</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-7 border-t border-hair pt-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Lorem ipsum</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* <Section eyebrow="Lorem ipsum" title="Sed do eiusmod tempor">
        <Steps items={[
          { title: 'Lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { title: 'Ipsum', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
          { title: 'Dolor', text: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
          { title: 'Amet',  text: 'Duis aute irure dolor in reprehenderit in voluptate.' }
        ]} />
      </Section> */}

      <CTA />
    </>
  )
}
