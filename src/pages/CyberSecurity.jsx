import { PageHero, Section, BrandGrid, RuleList, Steps, CTA } from '../components/UI.jsx'
import { networkSecurityBrands } from '../data/site.js'

const services = [
  { t: 'Risk Assessment and Management', d: 'We conduct a comprehensive cybersecurity risk assessment to identify potential vulnerabilities and threats to your organization. We then work with you to create a risk management plan to address and mitigate these risks.' },
  { t: 'Perimeter & Network Security',   d: 'Our team uses the latest cybersecurity technologies to secure your network against unauthorized access, malware, and other security threats. We also provide continuous monitoring and management of your network to ensure that it remains secure.' },
  { t: 'Data Protection',                d: 'We help you protect your sensitive data by implementing robust data protection measures, including encryption, access controls, and data backup and recovery.' },
  { t: 'Incident Response',              d: 'In the event of a cybersecurity breach, we provide rapid incident response services to minimize the impact on your organization. We work with you to contain the breach, investigate the incident, and restore normal operations as quickly as possible.' }
]

export default function CyberSecurity() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Network &amp; Cyber Security Services"
        lede=""
        crumbs={[{ label: 'Network & Cyber Security Services' }]}
      />

      <Section eyebrow="Wired and Wireless Solutions" title="Future-proof networks, built for business">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <p className="lede">
            Recognized as an expert partner with leading enterprise wired &amp; wireless products,
            extensive experience and proactive solutions. LightPro ensures to deliver more reliable
            wired &amp; wireless designs and deployment that let clients focus on business without
            connectivity concerns, building future-proof networks.
          </p>
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-500">
            <p>
              We provide both controller-based and controller-less network management solutions,
              delivering high-performance connectivity for any deployment size - large, small, or
              distributed - while ensuring resilience, security, and scalability.
            </p>
            <p>
              With expertise in creating efficient, highly available networks, our team at LightPro
              can help design robust infrastructures that maintain stability during peak loads,
              simplifying management with intelligent automation for streamlined operations.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="grey" eyebrow="Cyber security" title="Protecting your organization end to end">
        <div className="grid gap-px bg-hair md:grid-cols-2">
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

      {/* <Section eyebrow="Technology partners" title="Platforms we deploy and support">
        <BrandGrid items={[...networkSecurityBrands, 'SentinelOne', 'One Identity', 'Yubico', 'Veeam']} />
      </Section> */}

      {/* <Section tone="grey" eyebrow="Engagement" title="How a security engagement runs">
        <Steps items={[
          { title: 'Assess',    text: 'Current-state review of network, endpoints, identity and backup, with findings ranked by exposure.' },
          { title: 'Design',    text: 'Target architecture, policy set and a phased remediation plan costed against your budget cycle.' },
          { title: 'Implement', text: 'Controlled deployment with change windows, rollback plans and no unannounced outages.' },
          { title: 'Operate',   text: 'Monitoring, patching, periodic review and an annual reassessment against the original baseline.' }
        ]} />
      </Section> */}

      {/* <section className="section bg-ink">
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
      </section> */}

      <CTA title="Start with an assessment, not a proposal." text="A current-state review gives you a ranked list of exposures and a costed plan. What you do next is your decision." />
    </>
  )
}
