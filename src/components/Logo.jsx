/**
 * LightPro mark, redrawn as SVG from the supplied logo:
 * an ascending stack of rules resting on a green baseline,
 * with the "LighTPRO" wordmark below it.
 */
export default function Logo({ className = 'h-11', light = false }) {
  const ink = light ? '#FFFFFF' : '#0B0C0B'
  const bars = [
    { w: 30 }, { w: 62 }, { w: 94 }, { w: 126 }, { w: 158 }, { w: 190 }
  ]
  return (
    <svg viewBox="0 0 260 115" className={className} role="img" aria-label="LightPro Technologies">
      <g fill={ink}>
        {bars.map((b, i) => (
          <rect key={i} x={(260 - b.w) / 2} y={6 + i * 9} width={b.w} height="3.2" />
        ))}
      </g>
      <rect x="18" y="61" width="224" height="5" fill="#67A93B" />
      <text
        x="18" y="102"
        fontFamily="Outfit, system-ui, sans-serif"
        fontSize="46"
        fontWeight="300"
        letterSpacing="0.5"
      >
        <tspan fill={ink}>Ligh</tspan><tspan fill="#67A93B">TPRO</tspan>
      </text>
    </svg>
  )
}

/** Compact mark for the sticky header and mobile bar. */
export function LogoMark({ className = 'h-9', light = false }) {
  const ink = light ? '#FFFFFF' : '#0B0C0B'
  return (
    <svg viewBox="0 0 200 62" className={className} role="img" aria-label="LightPro Technologies">
      <g fill={ink}>
        <rect x="86" y="2" width="28" height="2.6" />
        <rect x="70" y="9" width="60" height="2.6" />
        <rect x="54" y="16" width="92" height="2.6" />
        <rect x="38" y="23" width="124" height="2.6" />
      </g>
      <rect x="26" y="30" width="148" height="4" fill="#67A93B" />
      <text x="26" y="57" fontFamily="Outfit, system-ui, sans-serif" fontSize="27" fontWeight="300">
        <tspan fill={ink}>Ligh</tspan><tspan fill="#67A93B">TPRO</tspan>
      </text>
    </svg>
  )
}
