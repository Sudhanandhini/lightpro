import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Signature element.
 * The logo is a stack of rules that widen as they descend. Read from the top down
 * that is exactly how a workspace is built: a person at the top, resting on
 * software, devices, management, network and, at the base, the people who run it.
 * Hovering a layer widens it and names what LightPro delivers there.
 */
const layers = [
  { label: 'Productivity software',  to: '/digital-workspace-solutions/productivity-software-and-tools', detail: 'Microsoft 365, Adobe, Autodesk, DocuSign - licensed and renewal-tracked.' },
  { label: 'Device management',      to: '/digital-workspace-solutions/device-management-solutions',      detail: 'JAMF, Intune, Scalefusion and identity control across every endpoint.' },
  { label: 'End-point hardware',     to: '/digital-workspace-solutions/network-and-endpoint',             detail: 'Lenovo, HP, Dell, Apple and more - specified, imaged and asset tagged.' },
  { label: 'Network infrastructure', to: '/digital-workspace-solutions/network-and-endpoint',             detail: 'Cisco Meraki, Aruba, Juniper and HPE switching, routing and wireless.' },
  { label: 'Cyber security',         to: '/network-and-cyber-security-services',                          detail: 'Fortinet and Sophos perimeter, SentinelOne endpoint, documented policy.' },
  { label: 'Professional services',  to: '/professional-services',                                        detail: 'Engineers, deployment crews, on-demand support and warehousing.' }
]

export default function LayerStack() {
  const [active, setActive] = useState(2)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">The LightPro stack</p>
        <p className="text-[11px] uppercase tracking-[0.14em] text-brand">Six layers, one partner</p>
      </div>

      <ul className="mt-7 space-y-2.5">
        {layers.map((l, i) => {
          const isActive = active === i
          const width = 40 + i * 10          // ascending, exactly like the mark
          return (
            <li key={l.label}>
              <Link
                to={l.to}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="block"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`block h-[5px] transition-all duration-300 ${isActive ? 'bg-brand' : 'bg-white/25'}`}
                    style={{ width: `${isActive ? width + 8 : width}%` }}
                  />
                  <span className={`whitespace-nowrap text-[13px] transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/40'}`}>
                    {l.label}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="mt-8 border-l-2 border-brand pl-5">
        <p className="font-display text-[15px] font-medium text-white">{layers[active].label}</p>
        <p className="mt-1.5 text-[14px] leading-relaxed text-white/50">{layers[active].detail}</p>
      </div>
    </div>
  )
}
