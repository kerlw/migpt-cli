import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './src/**/*.{ts,tsx,html,js}',
    path.join(
      path.dirname(fileURLToPath(import.meta.resolve('@migptgui/options'))),
      '**/*.{ts,tsx,html,js}',
    ),
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
