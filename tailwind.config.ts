import type { Config } from 'tailwindcss'

export default {
  darkMode:'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      container: {
        center:true
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
} satisfies Config

