/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#67A93B',   // logo green
          dark:    '#528B2C',
          deep:    '#3C6A1D',
          tint:    '#F1F7EA',
          line:    '#D6E7C4'
        },
        ink: {
          DEFAULT: '#0B0C0B',   // logo black
          800:     '#171A16',
          700:     '#2C302A',
          500:     '#5C6259',
          300:     '#9AA096'
        },
        hair: '#E6E9E3'
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: { none: '0', sm: '2px', DEFAULT: '3px' },
      maxWidth: { wrap: '1240px' },
      keyframes: {
        grow:  { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
        rise:  { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'none' } },
        slide: { to: { transform: 'translateX(-50%)' } }
      },
      animation: {
        grow: 'grow .9s cubic-bezier(.22,.8,.3,1) both',
        rise: 'rise .7s cubic-bezier(.22,.8,.3,1) both',
        slide: 'slide 42s linear infinite'
      }
    }
  },
  plugins: []
}
