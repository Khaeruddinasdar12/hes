export default {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.{html,php}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669',
        secondary: '#0d8659',
        accent: '#10b981',
        'accent-light': '#34d399',
        light: '#ecfdf5',
        dark: '#064e3b',
        text: '#1e293b',
        'text-light': '#64748b',
        'bg-light': '#f0fdfa',
        // Islamic Gold accents
        gold: '#d97706',
        'gold-light': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}