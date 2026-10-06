import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'

export default function Warehousing() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="Pan India Last Mile Delivery &amp; Warehousing"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'Last Mile Delivery & Warehousing' }]}
      />

      <Section eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
          ].map((f, i) => (
            <div key={f} className="bg-white p-8">
              <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey" eyebrow="Lorem ipsum" title="Consectetur adipiscing elit">
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
      </Section>

      <Section eyebrow="Lorem ipsum" title="Sed do eiusmod tempor">
        <div className="grid gap-px bg-hair md:grid-cols-3">
          {[
            { t: 'Lorem ipsum', d: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
            { t: 'Dolor sit',   d: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
            { t: 'Amet elit',   d: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' }
          ].map(c => (
            <div key={c.t} className="bg-white p-8">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey" eyebrow="Lorem ipsum" title="Ut enim ad minim veniam">
        <Steps items={[
          { title: 'Lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { title: 'Ipsum', text: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
          { title: 'Dolor', text: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
          { title: 'Amet',  text: 'Duis aute irure dolor in reprehenderit in voluptate.' }
        ]} />
      </Section>

      <CTA title="Lorem ipsum dolor sit amet." text="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </>
  )
}
