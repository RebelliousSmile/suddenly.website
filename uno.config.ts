import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],

  theme: {
    colors: {
      // ── Dark theatrical base ────────────────────────────
      deep: '#0A0915',
      surface: '#100E20',
      card: '#18162A',
      'card-hover': '#211E36',
      border: '#2D2845',
      // ── Crimson accent ─────────────────────────────────
      crimson: '#E03558',
      'crimson-hover': '#C82A4A',
      'crimson-muted': 'rgba(224,53,88,0.15)',
      rose: '#FF6B8A',
      // ── Text ───────────────────────────────────────────
      primary: '#EDE8F5',
      secondary: '#B0A8CC',
      muted: '#7A7290',
      // ── Feedback ───────────────────────────────────────
      success: '#30A46C',
    },
    fontFamily: {
      serif: ["'Crimson Text'", 'Georgia', 'serif'],
      sans: ["'Inter'", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      display: ["'Playfair Display'", 'Georgia', 'serif'],
    },
  },

  shortcuts: {
    // Layout
    'container': 'max-w-[1200px] mx-auto px-5',

    // Typography
    'label': 'text-crimson text-[12px] tracking-[3px] uppercase font-medium',
    'section-heading': 'font-serif text-primary font-normal',
    'logo-text': 'font-display italic font-bold text-primary tracking-[-0.02em]',

    // Cards
    'card': 'bg-card border border-border rounded-2xl',

    // Buttons
    'btn': 'inline-block px-7 py-[13px] rounded-xl font-semibold text-[15px] no-underline transition-all duration-250',
    'btn-primary': 'btn bg-crimson text-white hover:bg-crimson-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(224,53,88,0.35)]',
    'btn-secondary': 'btn bg-transparent text-secondary border border-border hover:border-crimson hover:text-crimson hover:-translate-y-0.5',
  },
})
