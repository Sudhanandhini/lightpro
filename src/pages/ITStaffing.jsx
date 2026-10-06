import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'

export default function ITStaffing() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="IT Staffing Services"
        lede=""
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'IT Staffing Services' }]}
      />

      <section  className="bg-white pt-16 sm:pt-20">
        <div className="wrap">
          <p className="lede ">
            LightPro staffing services provide flexible, skilled technology professionals to scale
            your workforce on demand, for short-term projects or permanent roles. Our staffing
            services empower your enterprise with skilled technology professionals, certified
            project teams and OEM-certified engineers tailored to your operational scale.
          </p>
        </div>
      </section>

      <Section eyebrow="Key offerings & capabilities" title="Skilled professionals, tailored to your scale">
        <div className="grid gap-px bg-hair md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Certified Project Teams',     d: 'End-to-end deployment, integration, and commissioning managed by qualified professionals.' },
            { t: 'On-Demand Technical Talent',  d: 'Access to L1/L2/L3 support engineers, network specialists, and infrastructure managers.' },
            { t: 'Flexible Engagement Models',  d: 'Scalable staffing solutions ranging from short-term project rollouts to SLA-backed managed services.' },
            { t: 'Pan-India On-Ground Support', d: 'Consistent technical deployment and localized workforce presence across multiple regions.' }
          ].map(c => (
            <div key={c.t} className="bg-white p-7">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* <Section tone="grey" eyebrow="Roles" title="Where our bench is deep">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RuleList items={[
            'Desktop and end-user support engineers, L1 through L3.',
            'Network engineers across Cisco Meraki, Aruba, Juniper and HPE.',
            'Security engineers for Fortinet, Sophos and endpoint detection platforms.',
            'System administrators for Windows Server, Microsoft 365 and virtualisation.',
            'Device management specialists for JAMF, Intune and Scalefusion.',
            'Field technicians and rollout crew for multi-site programmes.'
          ]} />
          <div className="border border-hair bg-white p-8">
            <h3 className="h3">How we screen</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Every candidate is assessed by a LightPro engineer working in the same discipline,
              on a practical task rather than a keyword-matched CV. Background verification and
              certification checks are completed before we put a name in front of you.
            </p>
            <div className="mt-7 border-t border-hair pt-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Replacement cover</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                If a placement does not work out inside the agreed window, we replace the engineer
                at our cost. That obligation is written into the contract, not offered verbally.
              </p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* <Section eyebrow="Process" title="From brief to badge">
        <Steps items={[
          { title: 'Brief',    text: 'Role, level, tooling, shift pattern, site and start date - captured in one call.' },
          { title: 'Shortlist',text: 'Screened and technically assessed candidates, typically within five working days.' },
          { title: 'Select',   text: 'You interview. We handle scheduling, feedback and offer negotiation.' },
          { title: 'Onboard',  text: 'Documentation, background checks, equipment and a thirty-day check-in.' }
        ]} />
      </Section> */}

      <CTA title="Send the role, not a job description." text="Tell us what needs to happen on the ground and we will tell you what shape of engineer does it." />
    </>
  )
}
