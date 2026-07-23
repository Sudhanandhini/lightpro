/**
 * Signature element for the hero.
 * A live-looking read-out of a typical managed estate: cloud, perimeter
 * firewall and core switch, fanning out to the endpoint fleet - the same
 * shape as the "Managed Infrastructure View" panel this component mirrors.
 */
const stats = [
  { n: '250', l: 'Assets under AMC' },
  { n: '4 hr', l: 'Onsite response' },
  { n: '24×7', l: 'NOC monitoring' }
]

export default function InfraTopology() {
  return (
    <div className="w-full rounded-sm border border-brand/25 bg-white/[0.05] p-5 shadow-[0_40px_90px_-40px_rgba(103,169,59,.35)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Managed infrastructure view</p>
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-brand">
          <span className="h-[7px] w-[7px] rounded-full bg-brand animate-blip" />
          All systems healthy
        </p>
      </div>

      <svg viewBox="0 0 460 330" className="mt-5 w-full" role="img"
           aria-label="Diagram of a managed IT stack: cloud connected through a firewall and core switch to servers, laptops and MacBooks">
        <g stroke="rgba(255,255,255,.15)" strokeWidth="1.4" fill="none">
          <path d="M230 66 V104" />
          <path d="M230 152 V190" />
          <path d="M230 190 H110 V232" />
          <path d="M230 190 V232" />
          <path d="M230 190 H350 V232" />
        </g>
        <g stroke="#67A93B" strokeWidth="1.8" fill="none" className="animate-flow" opacity=".9">
          <path d="M230 66 V104" />
          <path d="M230 152 V190" />
          <path d="M230 190 H110 V232" />
          <path d="M230 190 V232" />
          <path d="M230 190 H350 V232" />
        </g>

        {/* cloud */}
        <g transform="translate(178,30)">
          <rect width="104" height="38" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.15)" />
          <path d="M28 24a7 7 0 0 1 .6-14 10 10 0 0 1 19 2 6 6 0 0 1-1.6 12z" fill="none" stroke="#67A93B" strokeWidth="1.6" transform="translate(6,2)" />
          <text x="62" y="24" fill="#D6D9D4" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="600">Cloud</text>
        </g>

        {/* firewall */}
        <g transform="translate(150,104)">
          <rect width="160" height="48" rx="8" fill="rgba(103,169,59,.14)" stroke="rgba(103,169,59,.45)" />
          <path d="M22 14l11-5 11 5v9c0 7-5 11-11 13-6-2-11-6-11-13z" fill="none" stroke="#67A93B" strokeWidth="1.7" transform="translate(2,4)" />
          <text x="62" y="23" fill="#fff" fontSize="12" fontFamily="Inter,sans-serif" fontWeight="700">Firewall</text>
          <text x="62" y="37" fill="#9AA096" fontSize="10" fontFamily="Inter,sans-serif">UTM · IPS · VPN</text>
        </g>

        {/* core switch */}
        <g transform="translate(150,168)">
          <rect width="160" height="44" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(103,169,59,.3)" />
          <g stroke="#67A93B" strokeWidth="1.6" fill="none" transform="translate(18,14)">
            <rect x="0" y="0" width="26" height="16" rx="3" />
            <path d="M5 6h3M11 6h3M17 6h3M5 11h3M11 11h3M17 11h3" />
          </g>
          <text x="60" y="21" fill="#fff" fontSize="12" fontFamily="Inter,sans-serif" fontWeight="700">Core switch</text>
          <text x="60" y="34" fill="#9AA096" fontSize="10" fontFamily="Inter,sans-serif">L3 · 48-port · PoE+</text>
        </g>

        {/* endpoints */}
        <g transform="translate(58,232)">
          <rect width="104" height="70" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(103,169,59,.22)" />
          <g transform="translate(36,16)" stroke="#67A93B" strokeWidth="1.8" fill="none">
            <rect x="0" y="0" width="32" height="20" rx="2.5" />
            <path d="M-5 24h42" />
          </g>
          <text x="52" y="58" fill="#D6D9D4" fontSize="11" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">180 Laptops</text>
        </g>
        <g transform="translate(178,232)">
          <rect width="104" height="70" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(103,169,59,.22)" />
          <g transform="translate(38,14)" stroke="#67A93B" strokeWidth="1.8" fill="none">
            <rect x="0" y="0" width="28" height="34" rx="3" />
            <path d="M6 8h16M6 14h16M6 20h10" />
          </g>
          <text x="52" y="58" fill="#D6D9D4" fontSize="11" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">6 Servers</text>
        </g>
        <g transform="translate(298,232)">
          <rect width="104" height="70" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(103,169,59,.22)" />
          <g transform="translate(36,16)" stroke="#67A93B" strokeWidth="1.8" fill="none">
            <rect x="0" y="0" width="32" height="20" rx="2.5" />
            <path d="M-5 24h42M13 24h6" />
          </g>
          <text x="52" y="58" fill="#D6D9D4" fontSize="11" fontFamily="Inter,sans-serif" textAnchor="middle" fontWeight="600">64 MacBooks</text>
        </g>
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {stats.map(s => (
          <div key={s.l} className="rounded-sm border border-white/10 bg-white/[0.04] px-3.5 py-3">
            <p className="font-display text-[17px] font-medium text-white">{s.n}</p>
            <p className="mt-0.5 text-[10.5px] uppercase tracking-wide text-white/40">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
