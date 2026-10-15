/**
 * Resizes the large source images and writes a compressed .webp next to each one.
 * Components import the .webp files; the originals are kept only as masters.
 *
 *   node scripts/optimize-images.mjs
 *
 * Add a line to `images` when you add a new photo or banner.
 */
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const assets = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets')

// [file, max width in px]. Banners are full-bleed, logos render at 160px (480 covers 3x screens).
const images = [
  ['cisco.png', 1920],
  ['minecast.png', 1920],
  ['dura.png', 1920],
  ['lenovo.png', 1920],
  ['data-center.png', 1920],
  ['cyber-security.png', 1920],
  ['mobile-cisco.jpg', 800],
  ['mobile-minecast.jpg', 800],
  ['mobile-dura.jpg', 800],
  ['mobile-lenovo.jpg', 800],
  ['mobile-datacenter.jpg', 800],
  ['mobile-cyber-security.jpg', 800],
  ['team.jpg', 1400],
  ['logo.jpg', 480],
  ['footer-logo2.png', 480]
]

for (const [file, width] of images) {
  const input = path.join(assets, file)
  const output = input.replace(/\.(png|jpe?g)$/i, '.webp')
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(output)
  console.log(`${file} -> ${path.basename(output)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}
