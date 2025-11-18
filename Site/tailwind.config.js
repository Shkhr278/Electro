// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgba(255,255,255,0)',
          100: 'rgba(255,255,255,0)',
          200: 'rgba(255,255,255,0)',
          300: 'rgba(255,255,255,0)',
          400: 'rgba(255,255,255,0)',
          500: 'rgba(255,255,255,0)',
          600: 'rgba(255,255,255,0)',
          700: 'rgba(255,255,255,0)',
          800: 'rgba(255,255,255,0)',
          900: 'rgba(255,255,255,0)',
          950: 'rgba(255,255,255,0)',
        },
        secondary: {
          50: 'rgba(255,255,255,0)',
          100: 'rgba(255,255,255,0)',
          200: 'rgba(255,255,255,0)',
          300: 'rgba(255,255,255,0)',
          400: 'rgba(255,255,255,0)',
          500: 'rgba(255,255,255,0)',
          600: 'rgba(255,255,255,0)',
          700: 'rgba(255,255,255,0)',
          800: 'rgba(255,255,255,0)',
          900: 'rgba(255,255,255,0)',
          950: 'rgba(255,255,255,0)',
        },
        dark: {
          50: 'rgba(255,255,255,0)',
          100: 'rgba(255,255,255,0)',
          200: 'rgba(255,255,255,0)',
          300: 'rgba(255,255,255,0)',
          400: 'rgba(255,255,255,0)',
          500: 'rgba(255,255,255,0)',
          600: 'rgba(255,255,255,0)',
          700: 'rgba(255,255,255,0)',
          800: 'rgba(255,255,255,0)',
          900: 'rgba(255,255,255,0)',
          950: 'rgba(255,255,255,0)',
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        slideIn: 'slideIn 0.6s ease-out',
        bounceIn: 'bounceIn 0.8s ease-out',
        scaleIn: 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};
