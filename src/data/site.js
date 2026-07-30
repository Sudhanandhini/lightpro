// Single source of truth for navigation, brand partners and contact details.
// Edit here and every menu, sub-menu and footer link updates.

export const company = {
  name: 'LightPro Technologies Private Limited',
  short: 'LightPro',
  since: 2016,
  city: 'Bengaluru',
  phone: '+91 80 4123 4567',
  phoneHref: 'tel:+918041234567',
  email: 'sales@lightpro.in',
  support: 'support@lightpro.in',
  address: 'LightPro Technologies Pvt. Ltd., No. 32, BHCS Layout, Bannerghatta Main Road, Opp Gopalan Innovation Mall, Bangalore - 560076',
  hours: 'Monday to Saturday, 9:00 - 19:00 IST'
}

export const nav = [
  { label: 'About', to: '/about' },
  {
    label: 'Digital Workspace Solutions',
    to: '/digital-workspace-solutions',
    children: [
      { label: 'Network & End-point', to: '/digital-workspace-solutions/network-and-endpoint',
        blurb: 'Devices, networking and edge hardware' },
      { label: 'Device Management Solutions', to: '/digital-workspace-solutions/device-management-solutions',
        blurb: 'MDM, identity and backup platforms' },
      { label: 'Productivity Software & Tools', to: '/digital-workspace-solutions/productivity-software-and-tools',
        blurb: 'Licensing for the applications your teams run on' }
    ]
  },
  { label: 'Network & Cyber Security Services', to: '/network-and-cyber-security-services' },
  {
    label: 'LightPro Professional Services',
    to: '/professional-services',
    children: [
      { label: 'IT Staffing Services', to: '/professional-services/it-staffing-services',
        blurb: 'Certified engineers, on your site or ours' },
      { label: 'Seamless Deployment', to: '/professional-services/seamless-deployment',
        blurb: 'Imaging, rollout and desk-side handover' },
      { label: 'On-Demand Services', to: '/professional-services/on-demand-services',
        blurb: 'Break-fix, AMC and scheduled visits' },
      { label: 'Warehousing', to: '/professional-services/warehousing',
        blurb: 'Secure storage, staging and asset custody' }
    ]
  },
  { label: 'Contact Us', to: '/contact' }
]

/* ---------- Partner brands ---------- */

export const deviceBrands = [
  'Lenovo', 'HP', 'Dell', 'Asus', 'Microsoft',
  'Apple', 'Samsung', 'Legrand', 'Dynabook', 'MeadBar'
]

export const networkSecurityBrands = [
  'Cisco Meraki', 'Aruba', 'Juniper', 'HPE', 'Fortinet', 'Sophos'
]

export const deviceManagementBrands = [
  'JAMF', 'Microsoft Intune', 'Scalefusion', '42Gears',
  'One Identity', 'Yubico', 'Veeam'
]

export const productivityBrands = [
  'Microsoft 365', 'Adobe', 'Autodesk', 'WPS Office',
  'DocuSign', 'Bang & Olufsen', 'SentinelOne'
]

export const allBrands = [
  ...deviceBrands, ...networkSecurityBrands,
  ...deviceManagementBrands, ...productivityBrands
]

/* The three practice areas, used on the home page and in the footer */
export const practices = [
  {
    n: '01',
    title: 'Digital Workspace Solutions',
    to: '/digital-workspace-solutions',
    text: 'Everything an employee touches - the laptop, the network it joins, the policies that govern it and the software that runs on it.',
    points: ['Network & End-point', 'Device Management Solutions', 'Productivity Software & Tools']
  },
  {
    n: '02',
    title: 'Network & Cyber Security Services',
    to: '/network-and-cyber-security-services',
    text: 'Design, deployment and monitoring of the perimeter and the endpoint, with documentation your auditors will accept.',
    points: ['Firewall & perimeter security', 'Endpoint detection and response', 'Assessment, hardening and compliance']
  },
  {
    n: '03',
    title: 'LightPro Professional Services',
    to: '/professional-services',
    text: 'The people and logistics behind the hardware - engineers, rollouts, support visits and secure storage.',
    points: ['IT Staffing Services', 'Seamless Deployment', 'On-Demand Services', 'Warehousing']
  }
]
