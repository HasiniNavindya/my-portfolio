/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette mapped to existing red-500/red-600 usages
        primary: '#0077B6',
        'primary-dark': '#023E8A',
        red: {
          500: '#0077B6',
          600: '#005f91'
        },
        // Neutral / gray shades tuned for a minimal light theme
        gray: {
          50: '#F8F9FA',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0b0c0d'
        }
      }
    }
  },
  plugins: []
};
