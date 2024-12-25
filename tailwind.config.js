/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A2E',
        foreground: '#E6E6E6',
        'primary-dark': '#16213E',
        'secondary-dark': '#0F3460',
        'accent-gold': '#E9B872',
        'accent-light-gold': '#F1D4AF',
      },
      backgroundColor: {
        'dark-primary': '#1A1A2E',
        'dark-secondary': '#16213E',
      },
      textColor: {
        'gold': '#E9B872',
        'light-gold': '#F1D4AF',
      },
      animation: {
        'subtle-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(233, 184, 114, 0.5)',
        'dark-glow': '0 0 20px rgba(22, 33, 62, 0.7)',
      },
    },
  },
  plugins: [],
};
