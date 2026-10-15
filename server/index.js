/**
 * Node / Express server.
 *  - serves the built React app from /dist
 *  - exposes POST /api/contact for the consultation form
 *  - falls back to index.html so client-side routes work on refresh
 *
 *   npm run build && npm start      ->  http://localhost:3000
 */
import express from 'express'
import compression from 'compression'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const PORT = process.env.PORT || 3000

const app = express()
app.use(compression())
app.use(express.json({ limit: '100kb' }))

/* --- contact form endpoint ---------------------------------------------
   Enquiries are appended to server/enquiries.log. Swap the writeFile call
   for Nodemailer, a CRM webhook or a database insert when you go live.   */
app.post('/api/contact', (req, res) => {
  const { name, email } = req.body || {}
  if (!name || !email || !String(email).includes('@')) {
    return res.status(400).json({ ok: false, error: 'Name and a valid email are required.' })
  }
  const record = { ...req.body, receivedAt: new Date().toISOString() }
  fs.appendFile(path.join(__dirname, 'enquiries.log'), JSON.stringify(record) + '\n', err => {
    if (err) console.error('Could not write enquiry:', err)
  })
  console.log('New enquiry from', name, '<' + email + '>')
  res.json({ ok: true })
})

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'lightpro-website' }))

/* --- static build ------------------------------------------------------ */
if (fs.existsSync(dist)) {
  // Each page is pre-rendered: /about -> dist/about.html, / -> dist/index.html
  const html = { setHeaders: res => res.setHeader('Cache-Control', 'no-cache') }
  // The build uses base '/lightpro/' (vite.config.js), so the site lives under that path
  const site = express.Router()
  app.get('/', (_req, res) => res.redirect('/lightpro/'))
  app.use('/lightpro', site)
  site.get('*', (req, res, next) => {
    const clean = req.path.replace(/\/+$/, '')
    const file = path.join(dist, clean ? clean + '.html' : 'index.html')
    if (!file.startsWith(dist) || !fs.existsSync(file)) return next()
    res.sendFile(file, html)
  })
  site.use(express.static(dist, { maxAge: '1y', immutable: true, index: false, redirect: false }))
  site.use((_req, res) => res.status(404).sendFile(path.join(dist, '404.html'), html))
} else {
  app.get('*', (_req, res) =>
    res.status(503).send('<h1>Build missing</h1><p>Run <code>npm run build</code> first.</p>')
  )
}

app.listen(PORT, () => console.log(`LightPro site running on http://localhost:${PORT}/lightpro/`))
