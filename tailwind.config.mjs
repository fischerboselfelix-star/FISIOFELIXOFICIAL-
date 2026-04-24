/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:        '#0EA5E9',
        'primary-dark': '#0284C7',
        secondary:      '#F0F9FF',
        accent:         '#10B981',
        brand:          '#1E293B',
        surface:        '#FDFBF7',
        whatsapp:       '#25D366',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body:    ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        soft:  '0 8px 30px rgb(14 165 233 / 0.08)',
        card:  '0 4px 20px rgb(14 165 233 / 0.10)',
        hover: '0 12px 40px rgb(14 165 233 / 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse2':  'pulse2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
