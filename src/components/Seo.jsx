import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pages, notFound, SITE_URL } from '../data/seo.js'

/* The pre-rendered HTML already carries the right <head> for each page.
   This keeps it in step when visitors move between pages without a reload. */
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const meta = pages[path] || notFound
    const url = SITE_URL + (path === '/' ? '/' : path)

    document.title = meta.title
    const set = (selector, value) => document.querySelector(selector)?.setAttribute('content', value)
    set('meta[name="description"]', meta.description)
    set('meta[property="og:title"]', meta.title)
    set('meta[property="og:description"]', meta.description)
    set('meta[property="og:url"]', url)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  }, [pathname])

  return null
}
