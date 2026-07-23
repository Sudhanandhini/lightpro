import { PageHero, Section, RuleList, Steps, CTA } from '../components/UI.jsx'

export default function ITStaffing() {
  return (
    <>
      <PageHero
        eyebrow="LightPro Professional Services"
        title="IT Staffing Services"
        lede="Certified engineers placed with your team - for a project, a peak, a parental leave or a permanent seat. Screened by people who do the work themselves."
        crumbs={[{ label: 'LightPro Professional Services', to: '/professional-services' }, { label: 'IT Staffing Services' }]}
      />

      <Section eyebrow="Engagement models" title="Four ways to take our people">
        <div className="grid gap-px bg-hair md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Contract',           d: 'A defined term, billed monthly. The engineer reports into your manager and follows your process.' },
            { t: 'Contract to hire',   d: 'Evaluate on the job, convert when you are certain. Conversion terms agreed up front.' },
            { t: 'Permanent placement',d: 'We source, screen and shortlist. You interview a shorter list of people who can actually do it.' },
            { t: 'Managed team',       d: 'A pod with its own team lead, delivering against an outcome rather than a headcount.' }
          ].map(c => (
            <div key={c.t} className="bg-white p-7">
              <span className="rule block !w-8" />
              <h3 className="h3 mt-5 text-[17px]">{c.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey" eyebrow="Roles" title="Where our bench is deep">
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
      </Section>

      <Section eyebrow="Process" title="From brief to badge">
        <Steps items={[
          { title: 'Brief',    text: 'Role, level, tooling, shift pattern, site and start date - captured in one call.' },
          { title: 'Shortlist',text: 'Screened and technically assessed candidates, typically within five working days.' },
          { title: 'Select',   text: 'You interview. We handle scheduling, feedback and offer negotiation.' },
          { title: 'Onboard',  text: 'Documentation, background checks, equipment and a thirty-day check-in.' }
        ]} />
      </Section>

      <CTA title="Send the role, not a job description." text="Tell us what needs to happen on the ground and we will tell you what shape of engineer does it." />
    </>
  )
}
