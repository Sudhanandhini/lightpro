// Used only at build time by scripts/prerender.mjs to turn each route into static HTML.
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export { pages, notFound, SITE_URL, SITE_NAME } from './data/seo.js'
export { company } from './data/site.js'

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter basename="/lightpro" location={'/lightpro' + (url === '/' ? '' : url)}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}
