// Search-engine metadata for every page. The build pre-renders each path listed here
// into its own HTML file and adds it to sitemap.xml, so a new page needs an entry here.

// Public address of the site, without a trailing slash. Must match `base` in vite.config.js.
export const SITE_URL = 'https://www.sunsysweb.co.in/lightpro'

export const SITE_NAME = 'Lightpro Technologies'

export const pages = {
  '/': {
    title: 'Lightpro Technologies | Global System Integrator & Network Solution Provider',
    description: 'Lightpro Technologies Private Limited - Bengaluru based IT infrastructure partner since 2016. Digital workspace solutions, network and cyber security services, IT staffing, deployment, on-demand support and warehousing.',
    priority: '1.0'
  },
  '/about': {
    title: 'About Us | Lightpro Technologies',
    description: 'Lightpro Technologies is a Bengaluru based IT infrastructure partner since 2016, delivering devices, networks, security and on-ground IT services across India.',
    priority: '0.8'
  },
  '/digital-workspace-solutions': {
    title: 'Digital Workspace Solutions | Lightpro Technologies',
    description: 'End-to-end digital workspace solutions: laptops and end-point devices, networking, device management platforms and productivity software for businesses across India.',
    priority: '0.9'
  },
  '/digital-workspace-solutions/network-and-endpoint': {
    title: 'Network & End-point Solutions | Lightpro Technologies',
    description: 'Business laptops, desktops, networking and edge hardware from Lenovo, HP, Dell, Cisco Meraki, Aruba, Juniper, Fortinet and more, supplied and deployed by Lightpro.',
    priority: '0.8'
  },
  '/digital-workspace-solutions/device-management-solutions': {
    title: 'Device Management Solutions (MDM) | Lightpro Technologies',
    description: 'Mobile device management, identity and backup platforms including JAMF, Microsoft Intune, Scalefusion, 42Gears, One Identity, Yubico and Veeam.',
    priority: '0.8'
  },
  '/digital-workspace-solutions/productivity-software-and-tools': {
    title: 'Productivity Software & Tools | Lightpro Technologies',
    description: 'Licensing for Microsoft 365, Adobe, Autodesk, WPS Office, DocuSign, SentinelOne and other productivity software your teams run on.',
    priority: '0.8'
  },
  '/network-and-cyber-security-services': {
    title: 'Network & Cyber Security Services | Lightpro Technologies',
    description: 'Wired and wireless network design, firewall and perimeter security, endpoint protection, risk assessment and compliance services for businesses in India.',
    priority: '0.9'
  },
  '/professional-services': {
    title: 'Lightpro Professional Services | IT Staffing, Deployment & Support',
    description: 'IT staffing, seamless device deployment, on-demand on-site support and pan India last mile delivery and warehousing from Lightpro Technologies.',
    priority: '0.9'
  },
  '/professional-services/it-staffing-services': {
    title: 'IT Staffing Services | Lightpro Technologies',
    description: 'Flexible, skilled technology professionals on contract or permanent basis to scale your IT team, assessed by Lightpro engineers.',
    priority: '0.8'
  },
  '/professional-services/seamless-deployment': {
    title: 'Seamless IT Deployment & Device Rollouts | Lightpro Technologies',
    description: 'Launch-ready IT and device rollouts across India - imaging, configuration, delivery and installation handled end to end.',
    priority: '0.8'
  },
  '/professional-services/on-demand-services': {
    title: 'On-Demand IT Services & In-Warranty Support | Lightpro Technologies',
    description: 'On-site technicians, helpdesk support and in-warranty hardware support, available exactly when you need it.',
    priority: '0.8'
  },
  '/professional-services/warehousing': {
    title: 'Pan India Last Mile Delivery & Warehousing | Lightpro Technologies',
    description: 'Secure IT asset storage and final-destination delivery across India for devices and infrastructure.',
    priority: '0.8'
  },
  '/contact': {
    title: 'Contact Us | Lightpro Technologies',
    description: 'Contact Lightpro Technologies, Bannerghatta Main Road, Bangalore. Share your requirement and get a written scope and costed proposal within two working days.',
    priority: '0.7'
  }
}

export const notFound = {
  title: 'Page not found | Lightpro Technologies',
  description: 'The page you are looking for does not exist.'
}
