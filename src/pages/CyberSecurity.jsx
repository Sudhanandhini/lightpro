import { PageHero, Section, BrandGrid, RuleList, Steps, CTA } from '../components/UI.jsx'
import { networkSecurityBrands } from '../data/site.js'

const services = [
  { t: 'Perimeter security',   d: 'Next-generation firewall design, deployment and policy authoring, with segmentation between corporate, guest and operational networks.' },
  { t: 'Endpoint protection',  d: 'Detection and response rolled out across every managed device, with alerting that reaches a human rather than an unread console.' },
  { t: 'Secure connectivity',  d: 'Site-to-site and remote access VPN, SD-WAN links and conditional access for a workforce that is not always in the building.' },
  { t: 'Email and web control',d: 'Filtering, anti-phishing and content policy, plus the user awareness material that makes the controls stick.' },
  { t: 'Assessment & hardening', d: 'Vulnerability assessment, configuration review and a remediation plan ranked by exposure rather than by ease.' },
  { t: 'Monitoring & response', d: 'Continuous monitoring, log retention, incident triage and a defined escalation path with named owners.' }
]

export default function CyberSecurity() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Network &amp; Cyber Security Services"
        lede="Design, deployment and monitoring of the perimeter and the endpoint - with the documentation your auditors, your insurers and your largest customer will ask to see."
        crumbs={[{ label: 'Network & Cyber Security Services' }]}
      />

      <Section eyebrow="Capability" title="Six services, delivered together or on their own">
        <div className="grid gap-px bg-hair md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.t} className="group bg-white p-8 transition hover:bg-ink">
              <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="h3 mt-4 text-[18px] transition group-hover:text-white">{s.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500 transition group-hover:text-white/60">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey" eyebrow="Technology partners" title="Platforms we deploy and support">
        <BrandGrid items={[...networkSecurityBrands, 'SentinelOne', 'One Identity', 'Yubico', 'Veeam']} />
      </Section>

      <Section eyebrow="Engagement" title="How a security engagement runs">
        <Steps items={[
          { title: 'Assess',    text: 'Current-state review of network, endpoints, identity and backup, with findings ranked by exposure.' },
          { title: 'Design',    text: 'Target architecture, policy set and a phased remediation plan costed against your budget cycle.' },
          { title: 'Implement', text: 'Controlled deployment with change windows, rollback plans and no unannounced outages.' },
          { title: 'Operate',   text: 'Monitoring, patching, periodic review and an annual reassessment against the original baseline.' }
        ]} />
      </Section>

      <section className="section bg-ink">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Straight answer</p>
            <h2 className="h2 mt-5 !text-white">What we will not do</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/55">
              Security sales runs on fear. We would rather be the vendor that tells you your
              existing firewall is adequate and the real gap is that nobody has tested a restore
              in two years.
            </p>
          </div>
          <RuleList dark items={[
            'We will not quote a platform you have no capacity to operate.',
            'We will not describe an assessment finding as critical to accelerate a purchase order.',
            'We will not run a change outside an agreed window without your written approval.',
            'We will tell you when the cheaper fix is a process change rather than a product.'
          ]} />
        </div>
      </section>

      <CTA title="Start with an assessment, not a proposal." text="A current-state review gives you a ranked list of exposures and a costed plan. What you do next is your decision." />
    </>
  )
}
