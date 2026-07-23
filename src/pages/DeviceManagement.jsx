import { PageHero, Section, BrandGrid, RuleList, Steps, CTA } from '../components/UI.jsx'
import { deviceManagementBrands } from '../data/site.js'

export default function DeviceManagement() {
  return (
    <>
      <PageHero
        eyebrow="Digital Workspace Solutions"
        title="Device Management Solutions"
        lede="Control of every endpoint from one console - enrolment, policy, identity, patching and backup - whether the machine is in the office, at home or on a client site."
        crumbs={[{ label: 'Digital Workspace Solutions', to: '/digital-workspace-solutions' }, { label: 'Device Management Solutions' }]}
      />

      <Section eyebrow="Platforms" title="The management stack we deploy and run" lede="We licence, configure and administer these platforms, or hand them over fully documented for your own team to run.">
        <BrandGrid items={deviceManagementBrands} />
      </Section>

      <Section tone="grey" eyebrow="Capability" title="What management actually covers">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RuleList items={[
            'Zero-touch enrolment so a device configures itself the first time a user signs in.',
            'Configuration profiles, application deployment and version control across Windows, macOS, iOS and Android.',
            'Conditional access and multi-factor authentication tied to hardware security keys.',
            'Patch and update rings, with staged rollout and rollback.',
            'Remote lock, locate and wipe for lost or separated devices.',
            'Backup and recovery for endpoints, servers and virtual workloads.',
            'Compliance reporting your auditors can read without translation.'
          ]} />
          <div className="border border-hair bg-white p-8">
            <h3 className="h3">Who this is for</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Teams that have outgrown manual setup. The threshold is usually somewhere near
              fifty devices, or the first time an employee leaves and nobody is certain what
              was on their laptop.
            </p>
            <div className="mt-7 border-t border-hair pt-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Typical outcome</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                New joiner productive on day one without an engineer visit. Leaver revoked in
                minutes. Estate reportable at any moment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Engagement" title="How a rollout runs">
        <Steps items={[
          { title: 'Discover',  text: 'Inventory the existing estate, identity provider and application set.' },
          { title: 'Design',    text: 'Policy baselines, enrolment method, access rules and exception handling.' },
          { title: 'Pilot',     text: 'A controlled group proves the build before the estate moves.' },
          { title: 'Transition',text: 'Staged migration, documentation handover and administrator training.' }
        ]} />
      </Section>

      <CTA />
    </>
  )
}
