import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import InfraTopology from '../components/InfraTopology.jsx'
import { Section, LinkCard, IconCard, BrandGrid, CTA } from '../components/UI.jsx'
import { practices, allBrands, company } from '../data/site.js'
import { getBrandLogo } from '../data/brandLogos.js'
import ciscoImg from '../assets/cisco.png'
import mimecastImg from '../assets/minecast.png'
import druvaImg from '../assets/dura.png'
import lenovoImg from '../assets/lenovo.png'
import dataCenterImg from '../assets/data-center.png'
import cyberSecurityImg from '../assets/cyber-security.png'
import ciscoMobile from '../assets/mobile-cisco.jpg'
import mimecastMobile from '../assets/mobile-minecast.jpg'
import druvaMobile from '../assets/mobile-dura.jpg'
import lenovoMobile from '../assets/mobile-lenovo.jpg'
import dataCenterMobile from '../assets/mobile-datacenter.jpg'
import cyberSecurityMobile from '../assets/mobile-cyber-security.jpg'

function Icon({ children }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

const solutions = [
  { title: 'Occaecat cupidatat non', text: 'Proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit.', meta: ['Lorem ipsum dolor sit amet', 'In reprehenderit'],
    icon: <Icon><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></Icon> },
  { title: 'Amet consectetur', text: 'Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.', meta: ['Elit sed do eiusmod tempor', 'In voluptate'],
    icon: <Icon><rect x="4" y="5" width="16" height="11" rx="1.6" /><path d="M2 19h20l-2-3H4z" /></Icon> },
  { title: 'Minim veniam quis nostrud', text: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in.', meta: ['Labore et dolore', 'Velit esse'],
    icon: <Icon><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></Icon> },
  { title: 'Reprehenderit in voluptate', text: 'Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.', meta: ['Ut enim ad', 'Cillum'],
    icon: <Icon><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></Icon> },
  { title: 'Mollit', text: 'Anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.', meta: ['Veniam quis nostrud', 'Dolore eu'],
    icon: <Icon><circle cx="12" cy="12" r="3" /><path d="M12 2v7M12 15v7M2 12h7M15 12h7" /></Icon> },
  { title: 'Tempor incididunt ut', text: 'Labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.', meta: ['Laboris nisi ut', 'Fugiat'],
    icon: <Icon><path d="M12 3l8 3.5v5.8c0 5-3.4 8.4-8 9.7-4.6-1.3-8-4.7-8-9.7V6.5z" /><path d="M9.5 12l1.8 1.8 3.4-3.6" /></Icon> },
  { title: 'Exercitation ullamco', text: 'Laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate.', meta: ['Ex ea', 'Nulla pariatur'],
    icon: <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></Icon> },
  { title: 'Velit esse cillum dolore', text: 'Eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.', meta: ['Duis aute', 'Excepteur sint'],
    icon: <Icon><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.9 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 15a2 2 0 1 1 0-4 1.6 1.6 0 0 0 2.1-2.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 3a2 2 0 1 1 4 0 1.6 1.6 0 0 0 2.1 2.1l-.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 11a2 2 0 1 1 0 4z" /></Icon> }
]

// Slides for the technology partner slider.
const spotlights = [
  { title: 'Cisco', tag: 'Enterprise networking', img: ciscoImg, mobileImg: ciscoMobile,
    text: 'Intelligent Networks for the Modern Enterprise. Secure, scale, and automate your hybrid infrastructure with industry-leading Cisco networking and cloud solutions.',
    points: ['Campus & branch LAN / WLAN', 'SD-WAN and Meraki cloud', 'Network assessment & AMC'],
    to: '/digital-workspace-solutions/network-and-endpoint' },
  { title: 'Mimecast', tag: 'Email & collaboration security', img: mimecastImg, mobileImg: mimecastMobile,
    text: 'Protect your communications, workforce, and critical cloud data with AI-powered human risk management and advanced email defense.',
    points: ['AI-powered threat protection', 'Secure archiving & e-discovery', 'Security awareness training'],
    to: '/network-and-cyber-security-services' },
  { title: 'Druva', tag: 'Cloud data protection', img: druvaImg, mobileImg: druvaMobile,
    text: 'Secure your enterprise data across workloads, SaaS apps, and edge devices with Druva’s 100% SaaS data resiliency platform. No hardware. No complexity.',
    points: ['Endpoint & M365 backup', 'Ransomware recovery', 'Compliance-ready retention'],
    to: '/network-and-cyber-security-services' },
  { title: 'Lenovo', tag: 'Devices & infrastructure', img: lenovoImg, mobileImg: lenovoMobile,
    text: 'Focuses on structuring high-performance data centre portfolios, cloud environments, and edge computing solutions.',
    points: ['ThinkPad & ThinkCentre fleets', 'ThinkSystem servers & HCI', 'Imaging, tagging & warranty'],
    to: '/digital-workspace-solutions' },
  { title: 'Data Center', tag: 'Infrastructure services', img: dataCenterImg, mobileImg: dataCenterMobile,
    text: 'Scale your digital footprint with high-availability colocation, cloud connectivity, and ultra-secure enterprise infrastructure designed to support next-generation AI and enterprise workloads.',
    points: ['Rack, power & structured cabling', 'Compute, storage & virtualisation', 'Migration with zero data loss'],
    to: '/professional-services' },
  { title: 'Cyber Security', tag: 'Managed security', img: cyberSecurityImg, mobileImg: cyberSecurityMobile,
    text: 'Protect your digital assets, workforce, and infrastructure from evolving cyber threats with 24/7/365 managed detection, response, and strategic security architecture.',
    points: ['Firewall & perimeter security', 'EDR / XDR endpoint protection', '24x7 monitoring & response'],
    to: '/network-and-cyber-security-services' }
]

const whyItems = [
  { title: 'Enim ad minim', text: 'Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: <Icon><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" /></Icon> },
  { title: 'Duis aute', text: 'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.',
    icon: <Icon><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5" /></Icon> },
  { title: 'Sint occaecat cupidatat', text: 'Non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum.',
    icon: <Icon><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /></Icon> },
  { title: 'Dolor sit', text: 'Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    icon: <Icon><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.8a2 2 0 0 1 1.7 2z" /></Icon> },
  { title: 'Et dolore', text: 'Magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.',
    icon: <Icon><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Icon> },
  { title: 'Laboris nisi ut aliquip', text: 'Ex ea commodo consequat duis aute irure dolor in reprehenderit in.',
    icon: <Icon><path d="M9 17H7a5 5 0 1 1 0-10h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8" /></Icon> }
]

const industries = [
  { title: 'Voluptate velit esse', text: 'Cillum dolore eu fugiat nulla pariatur excepteur.',
    icon: <Icon><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></Icon> },
  { title: 'Sint', text: 'Occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.',
    icon: <Icon><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></Icon> },
  { title: 'Id', text: 'Est laborum lorem ipsum dolor sit amet.',
    icon: <Icon><path d="M12 5v14M5 12h14" /><circle cx="12" cy="12" r="9" /></Icon> },
  { title: 'Consectetur', text: 'Adipiscing elit sed do eiusmod tempor incididunt ut.',
    icon: <Icon><path d="M22 9L12 4 2 9l10 5z" /><path d="M6 11v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6" /></Icon> },
  { title: 'Labore', text: 'Et dolore magna aliqua ut enim ad minim.',
    icon: <Icon><path d="M3 21V8l7-5 7 5v13" /><path d="M17 12h4v9M7 21v-6h6v6" /></Icon> },
  { title: 'Veniam quis nostrud', text: 'Exercitation ullamco laboris nisi ut aliquip ex ea.',
    icon: <Icon><path d="M3 20h18M5 20V9l7-5 7 5v11M10 20v-6h4v6" /></Icon> },
  { title: 'Commodo', text: 'Consequat duis aute irure dolor in reprehenderit in.',
    icon: <Icon><path d="M6 2L3 6v14h18V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></Icon> },
  { title: 'Officia deserunt', text: 'Mollit anim id est laborum sed ut perspiciatis.',
    icon: <Icon><path d="M12 3l8 3.5v5.8c0 5-3.4 8.4-8 9.7-4.6-1.3-8-4.7-8-9.7V6.5z" /></Icon> }
]

// Placeholder copy for the practice cards; links still come from site data
const practiceItems = practices.map((p, i) => ({
  ...p,
  title: ['Lorem ipsum dolor sit', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor'][i],
  text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.',
  points: p.points.map((_, j) => ['Lorem ipsum dolor', 'Sit amet consectetur', 'Adipiscing elit sed', 'Eiusmod tempor'][j])
}))

const lifecycle = [
  { n: '01', title: 'Sint',  text: 'Occaecat cupidatat non proident sunt in culpa qui officia.' },
  { n: '02', title: 'Deserunt',   text: 'Mollit anim id est laborum lorem ipsum dolor.' },
  { n: '03', title: 'Sit',    text: 'Amet consectetur adipiscing elit sed do eiusmod tempor incididunt.' },
  { n: '04', title: 'Ut', text: 'Labore et dolore magna aliqua ut enim ad.' },
  { n: '05', title: 'Minim',   text: 'Veniam quis nostrud exercitation ullamco laboris nisi.' },
  { n: '06', title: 'Ut',       text: 'Aliquip ex ea commodo consequat duis aute irure.' },
  { n: '07', title: 'Dolor',       text: 'In reprehenderit in voluptate velit esse cillum dolore.' }
]

const products = [
  { tag: 'Eu', title: 'Fugiat nulla pariatur', text: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.', specs: ['Mollit anim id', 'Est laborum', 'Lorem ipsum'],
    icon: <Icon><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></Icon> },
  { tag: 'Anim', title: 'Id est laborum lorem', text: 'Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.', specs: ['Dolor sit amet consectetur adipiscing', 'Elit sed', 'Do eiusmod'],
    icon: <Icon><rect x="4" y="5" width="16" height="11" rx="1.6" /><path d="M2 19h20l-2-3H4z" /></Icon> },
  { tag: 'Incididunt ut labore', title: 'Et dolore magna aliqua', text: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.', specs: ['Tempor incididunt', 'Ut labore et dolore', 'Magna aliqua'],
    icon: <Icon><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></Icon> },
  { tag: 'Ea', title: 'Commodo consequat duis aute', text: 'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.', specs: ['Ut enim', 'Ad', 'Minim veniam'],
    icon: <Icon><path d="M12 3l8 3.5v5.8c0 5-3.4 8.4-8 9.7-4.6-1.3-8-4.7-8-9.7V6.5z" /><path d="M9.5 12l1.8 1.8 3.4-3.6" /></Icon> }
]

const plans = [
  { term: 'Nulla pariatur', title: 'Excepteur sint occaecat', text: 'Cupidatat non proident sunt in culpa qui.',
    points: ['Quis nostrud exercitation', 'Ullamco laboris nisi ut', 'Aliquip ex ea commodo consequat duis', 'Aute irure dolor'] },
  { term: 'Officia', title: 'Deserunt mollit', featured: true, text: 'Anim id est laborum lorem ipsum dolor.',
    points: ['In reprehenderit in', 'Voluptate velit esse cillum', 'Dolore eu fugiat nulla pariatur', 'Excepteur sint occaecat cupidatat'] },
  { term: 'Sit amet', title: 'Consectetur adipiscing', text: 'Elit sed do eiusmod tempor incididunt ut.',
    points: ['Non proident', 'Sunt in culpa qui officia', 'Deserunt mollit anim', 'Id est laborum'] }
]

// Placeholder quotes - swap for verified customer feedback before this goes live.
const testimonials = [
  { quote: 'Labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.', name: 'Consequat duis', role: 'Aute irure dolor' },
  { quote: 'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non.', name: 'Proident sunt', role: 'In culpa qui' },
  { quote: 'Officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.', name: 'Incididunt ut labore', role: 'Et dolore magna' }
]

// Illustrative outcomes - replace with verified figures from real engagements before this goes live.
const cases = [
  { sector: 'Aliqua ut enim', title: 'Ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip', text: 'Ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    metrics: [['180', 'Lorem ipsum'], ['4 wks', 'Dolor sit amet'], ['0', 'Consectetur adipiscing elit']] },
  { sector: 'Nulla', title: 'Pariatur excepteur sint occaecat cupidatat non proident sunt', text: 'In culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing.',
    metrics: [['3', 'Sed do'], ['4 hr', 'Eiusmod tempor'], ['-50%', 'Incididunt ut']] },
  { sector: 'Elit', title: 'Sed do eiusmod tempor incididunt ut labore', text: 'Et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.',
    metrics: [['9', 'Labore et'], ['1', 'Dolore magna'], ['100%', 'Aliqua ut']] }
]

const faqs = [
  { q: 'Aliquip ex ea commodo consequat duis?', a: 'Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in.' },
  { q: 'Culpa qui officia deserunt mollit anim id est laborum?', a: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { q: 'Aliqua ut enim ad minim veniam?', a: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.' },
  { q: 'Dolor in reprehenderit in voluptate velit esse?', a: 'Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum.' },
  { q: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor?', a: 'Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.' },
  { q: 'Ea commodo consequat duis?', a: 'Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.' }
]

function ProductCard({ tag, title, text, specs, icon }) {
  return (
    <div className="group flex flex-col border border-hair bg-white transition duration-300 hover:border-brand hover:shadow-[0_18px_40px_-24px_rgba(11,12,11,.35)]">
      <div className="relative flex h-36 items-center justify-center border-b border-hair bg-[#F7F8F6] text-brand">
        <span className="absolute left-4 top-4 bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">{tag}</span>
        <span className="scale-[1.7] transition duration-300 group-hover:scale-[1.9]">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="h3 text-[16.5px]">{title}</h3>
        <p className="mt-2 flex-1 text-[13.8px] leading-relaxed text-ink-500">{text}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {specs.map(s => <span key={s} className="border border-hair bg-[#F7F8F6] px-2.5 py-1 text-[11.5px] font-medium text-ink-700">{s}</span>)}
        </div>
      </div>
    </div>
  )
}

// Timing copied from brilyant.com's banner: 5s autoplay, 500ms horizontal slide
const SLIDE_MS = 5000
const SLIDE_SPEED = 500
// The image shows first; the copy rises in from below after this delay
const TEXT_DELAY = 600

function TechSlider({ items }) {
  const n = items.length
  // Track holds [last clone, ...items, first clone] so the loop always slides forward/back one step
  const track = [items[n - 1], ...items, items[0]]
  const [pos, setPos] = useState(1)
  const [animate, setAnimate] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [stopped, setStopped] = useState(false)
  const moving = useRef(false)
  const active = (pos - 1 + n) % n

  const slideTo = p => {
    if (moving.current) return
    moving.current = true
    setAnimate(true)
    setPos(p)
    // Once the slide finishes, a clone is swapped for the real slide it mirrors, without animation
    setTimeout(() => {
      moving.current = false
      if (p === 0 || p === n + 1) {
        setAnimate(false)
        setPos(p === 0 ? n : 1)
      }
    }, SLIDE_SPEED)
  }
  // Like Elementor's pause_on_interaction: any manual navigation ends autoplay
  const userGo = p => { setStopped(true); slideTo(p) }

  // Autoplay, paused while hovered
  useEffect(() => {
    if (hovered || stopped) return
    const t = setTimeout(() => slideTo(pos + 1), SLIDE_MS)
    return () => clearTimeout(t)
  }, [pos, hovered, stopped])

  useEffect(() => {
    if (animate) return
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    return () => cancelAnimationFrame(id)
  }, [animate])

  const current = items[active]

  return (
    // Boxed banner like brilyant.com: image slides, side arrows, dots
    // .wrap lines the banner up with the header's content width, as on brilyant.com
    <section className="wrap pt-6 lg:pt-10" aria-roledescription="carousel" aria-label="Technology partners">
      <div className="relative overflow-hidden rounded-3xl bg-[#1d4601] text-white"
           onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {/* Image area keeps the artwork's shape so it is never cropped:
            1040x787 mobile images below md, 1997x788 banners from md up */}
        <div className="relative aspect-[1040/787] w-full md:aspect-[1997/788]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="flex h-full"
                 style={{
                   transform: `translateX(-${pos * 100}%)`,
                   transition: animate ? `transform ${SLIDE_SPEED}ms ease` : 'none'
                 }}>
              {track.map((s, i) => (
                <picture key={i} className="h-full w-full shrink-0">
                  <source media="(max-width: 767px)" srcSet={s.mobileImg} />
                  <img src={s.img} alt="" aria-hidden
                       className="pointer-events-none h-full w-full object-cover" />
                </picture>
              ))}
            </div>
          </div>
          {/* Shade only the empty left half, where the copy sits on wide screens */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block"
               style={{ backgroundImage: 'linear-gradient(90deg, rgba(29,70,1,.55) 0%, rgba(29,70,1,.3) 35%, transparent 50%)' }} />

          {/* Large side arrows */}
          {[['Previous slide', -1, 'M15 18l-6-6 6-6', 'left-1 sm:left-3'], ['Next slide', 1, 'M9 18l6-6-6-6', 'right-1 sm:right-3']].map(([label, d, path, side]) => (
            <button key={label} type="button" aria-label={label} onClick={() => userGo(pos + d)}
                    className={`absolute top-1/2 z-10 -translate-y-1/2 p-1 text-white/80 transition hover:text-white sm:p-2 ${side}`}>
              <svg className="h-7 w-7 sm:h-11 sm:w-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
            </button>
          ))}
        </div>

        {/* Slide copy: stacked under the image on small screens; on xl it sits over the image's
            empty left side, capped at 46% width so it never runs into the artwork */}
        <div className="px-6 pb-16 pt-8 sm:px-10 xl:absolute xl:inset-y-0 xl:left-0 xl:flex xl:w-[46%] xl:items-center xl:py-0 xl:pl-20 xl:pr-4">
          <div key={current.title} className="animate-fade-in-up" aria-live="polite"
               style={{ animationDelay: `${TEXT_DELAY}ms` }}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-[13px]">
              {/* {current.title} */}
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-white sm:text-[19px] xl:text-[21px]">{current.text}</p>
            <div className="mt-6 flex flex-wrap gap-3 xl:mt-8">
              {/* <Link to={current.to}
                    className="rounded-full bg-brand px-6 py-2.5 text-[14px] font-medium text-white transition hover:bg-brand-dark sm:px-7 sm:py-3 sm:text-[15px]">
                Explore {current.title}
              </Link> */}
              <Link to="/contact"
                    className="rounded-full bg-brand   px-6 py-2.5 text-[14px] font-medium text-white transition hover:bg-white hover:text-[#1d4601] sm:px-7 sm:py-3 sm:text-[15px]">
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>

        {/* Dot pagination */}
        <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2.5">
          {items.map((s, i) => (
            <button key={s.title} type="button" onClick={() => i !== active && userGo(i + 1)}
                    aria-label={`Show ${s.title}`} aria-current={i === active}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${i === active ? 'bg-brand' : 'bg-white hover:bg-white/80'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ term, title, text, points, featured }) {
  return (
    <div className={`relative flex flex-col border bg-white p-8 ${featured ? 'border-brand shadow-[0_20px_50px_-26px_rgba(103,169,59,.45)]' : 'border-hair'}`}>
      {featured && <span className="absolute -top-3 right-7 bg-brand px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white">Most popular</span>}
      <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand">{term}</p>
      <h3 className="h3 mt-3 text-[19px]">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{text}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {points.map(p => (
          <li key={p} className="flex items-start gap-3 text-[14px] text-ink-700">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5" /></svg>
            {p}
          </li>
        ))}
      </ul>
      <Link to="/contact" className={`mt-8 ${featured ? 'btn-primary' : 'btn-outline'}`}>Request this plan</Link>
    </div>
  )
}

function QuoteCard({ quote, name, role }) {
  return (
    <div className="flex flex-col border border-hair bg-white p-8">
      <div className="flex gap-1 text-brand">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-5 flex-1 font-display text-[16px] font-medium leading-relaxed text-ink">&ldquo;{quote}&rdquo;</blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-hair pt-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink font-display text-[13px] font-bold text-white">
          {name.split(' ').map(w => w[0]).slice(0, 2).join('')}
        </div>
        <div>
          <p className="font-display text-[14px] font-medium text-ink">{name}</p>
          <p className="text-[12.5px] text-ink-300">{role}</p>
        </div>
      </div>
    </div>
  )
}

function CaseCard({ sector, title, text, metrics }) {
  return (
    <div className="flex flex-col border border-white/10 bg-white/[0.03] p-8 transition hover:border-brand/50">
      <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand">{sector}</p>
      <h3 className="mt-4 font-display text-[18px] font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-3 flex-1 text-[13.8px] leading-relaxed text-white/50">{text}</p>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {metrics.map(([n, l]) => (
          <div key={l}>
            <p className="font-display text-[19px] font-bold text-white">{n}</p>
            <p className="mt-0.5 text-[10.5px] leading-tight text-white/40">{l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-hair border-t border-hair">
      {items.map((f, i) => (
        <div key={f.q}>
          <button
            className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[16px] font-medium text-ink hover:text-brand"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {f.q}
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center border transition duration-200 ${
              open === i ? 'rotate-45 border-brand bg-brand text-white' : 'border-hair text-ink-500'}`}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
            <p className="max-w-[62ch] text-[14.5px] leading-relaxed text-ink-500">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
    {/* <section className="relative overflow-hidden bg-[#1d4601] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0"
             style={{ backgroundImage: 'radial-gradient(900px 480px at 78% 18%, rgba(103, 169, 59, 0.35), transparent 62%), radial-gradient(620px 420px at 12% 92%, rgba(103,169,59,.16), transparent 65%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="wrap relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div className="animate-rise">
            <p className="eyebrow1" style={{borderRadius:'50px', backgroundColor:'#a1a1a159', padding:'10px'}} >
            <span>Since {company.since} </span>    Bengaluru-headquartered · PAN-India delivery</p>
            <h1 className="h1 mt-6 !text-brand">
              Global Systems Integrator and Network Security Solutions Provider
            </h1>
            <p className="mt-7 max-w-[56ch] text-[1.08rem] leading-relaxed text-white/60">
              LightPro Technologies supplies the devices, the network, the security and the
              people behind them - from a single laptop to a multi-site rollout, specified,
              deployed and supported end to end.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Request a consultation</Link>
              <Link to="/digital-workspace-solutions" className="btn-light">Explore solutions</Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-px border-t border-white/10 bg-white/10">
              {[['400+', 'Business clients'], ['25,000+', 'Devices deployed'], ['18', 'Cities supported']].map(([n, l]) => (
                <div key={l} className=" pt-6 px-5 text-center">
                  <dt className="font-display text-[1.7rem] font-light tracking-tight text-white">{n}</dt>
                  <dd className="mt-1 text-[12.5px] text-white/40">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pl-6">
            <InfraTopology />
          </div>
        </div>
      </section>  */}

         <TechSlider items={spotlights} />

      {/* ---------------- BRAND MARQUEE ---------------- */}
      <div className="border-hair bg-white py-9 " style={{ marginTop: '100px' }}>
        <p className="wrap mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-300">
          Lorem ipsum dolor sit amet
        </p>
        {/* .wrap keeps the logo strip the same width as the banner above */}
        <div className="wrap">
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-slide items-center gap-16 pr-16">
            {[...allBrands, ...allBrands].map((b, i) => {
              const logo = getBrandLogo(b)
              return logo ? (
                <img key={i} src={logo} alt={b}
                     className="h-8 max-w-[120px] shrink-0 object-contain grayscale-0 transition duration-300 hover:grayscale" />
              ) : (
                <span key={i} className="whitespace-nowrap font-display text-[19px] font-light tracking-tight text-ink-300">
                  {b}
                </span>
              )
            })}
          </div>
        </div>
        </div>
      </div>



      {/* ---------------- OUR SOLUTIONS ---------------- */}
      <Section
        eyebrow="Lorem ipsum"
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        lede="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(s => <IconCard key={s.title} {...s} />)}
        </div>
      </Section>


      {/* ---------------- TECHNOLOGY PARTNERS SLIDER ---------------- */}
   

      {/* ---------------- PRACTICES ---------------- */}
      <Section
        tone="grey"
        eyebrow="Dolor sit amet"
        title="Duis aute irure dolor in reprehenderit"
        lede="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {practiceItems.map(p => <LinkCard key={p.to} {...p} />)}
        </div>
      </Section>

      {/* ---------------- WHY ---------------- */}
      <section className="section bg-[#1d4601]  text-white/70"  
        style={{ backgroundImage: 'radial-gradient(900px 480px at 78% 18%, rgba(103, 169, 59, 0.35), transparent 62%), radial-gradient(620px 420px at 12% 92%, rgba(103,169,59,.16), transparent 65%)' }}>
        <div className="wrap grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <p className="eyebrow">Lorem ipsum</p>
            <h2 className="h2 mt-5 !text-white">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/60">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Lorem ipsum dolor', 'Sit amet consectetur', 'Adipiscing elit sed do', 'Eiusmod tempor incididunt'].map(c => (
                <span key={c} className="border border-white/15 px-4 py-2 text-[12.5px] text-white/70">{c}</span>
              ))}
            </div>

            <Link to="/about" className="btn-light mt-9">More about us</Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
            {whyItems.map(w => (
              <div key={w.title} className=" p-7 transition hover:bg-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-brand">{w.icon}</span>
                  <h3 className="font-display text-[15.5px] font-medium text-white">{w.title}</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/50">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <Section
        eyebrow="Consectetur adipiscing"
        title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
        lede="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam."
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(i => <IconCard key={i.title} {...i} />)}
        </div>
      </Section>

      {/* ---------------- IT INFRASTRUCTURE LIFECYCLE ---------------- */}
      <Section
        tone="grey"
        eyebrow="Ut enim ad minim"
        title="Quis autem vel eum iure reprehenderit qui in ea"
        lede="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        center
      >
        <div className="relative mt-4">
          <div aria-hidden className="absolute left-[7%] right-[7%] top-7 hidden h-px bg-hair lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-2">
            {lifecycle.map(step => (
              <div key={step.n} className="group relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-hair bg-white font-display text-[15px] font-bold text-brand transition duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  {step.n}
                </div>
                <h3 className="font-display text-[15px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 px-1 text-[13px] leading-relaxed text-ink-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- FEATURED PRODUCTS ---------------- */}
      <Section
        eyebrow="Sed do eiusmod"
        title="Temporibus autem quibusdam et aut officiis debitis"
        lede="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(p => <ProductCard key={p.title} {...p} />)}
        </div>
      </Section>

      {/* ---------------- CORPORATE RENTAL SOLUTIONS ---------------- */}
      <Section
        tone="grey"
        eyebrow="Tempor incididunt"
        title="Nam libero tempore cum soluta nobis est eligendi"
        lede="Omnis voluptas assumenda est, omnis dolor repellendus. Et harum quidem rerum facilis est et expedita distinctio."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map(p => <PlanCard key={p.title} {...p} />)}
        </div>
      </Section>

      {/* ---------------- CLIENT FEEDBACK ---------------- */}
      <Section
        eyebrow="Magna aliqua"
        title="Similique sunt in culpa qui officia deserunt mollitia"
        lede="Animi, id est laborum et dolorum fuga harum quidem rerum facilis est."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(t => <QuoteCard key={t.name + t.role} {...t} />)}
        </div>
      </Section>

      {/* ---------------- CASE STUDIES ---------------- */}
      <section className="section bg-[#1d4601] ">
        <div className="wrap">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Quis nostrud</p>
            <h2 className="h2 mt-5 !text-white">Ullamco laboris nisi ut aliquip ex ea commodo</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/60">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map(c => <CaseCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ---------------- FAQS ---------------- */}
      <section className="section bg-[#F7F8F6]">
        <div className="wrap grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">Lorem ipsum</p>
            <h2 className="h2 mt-5">Dolor sit amet consectetur</h2>
            <p className="lede mt-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
            <Link to="/contact" className="btn-outline mt-8">Ask us directly</Link>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ---------------- BRANDS / PARTNER ECOSYSTEM ---------------- */}
      {/* <Section
        eyebrow="Partner ecosystem"
        title="The brands we specify, supply and support"
        lede="We are vendor-aligned, not vendor-locked. The specification follows the workload."
      >
        <BrandGrid items={allBrands} />
      </Section> */}

      <CTA
        title="Lorem ipsum dolor sit amet consectetur."
        text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      />
    </>
  )
}
