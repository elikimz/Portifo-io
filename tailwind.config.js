/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Bright Blue
        secondary: '#D9A020', // Gold
        accent: '#D8E8A1', // Light Green
        dark: '#2C3E50', // Dark Blue
        background: '#F7F9FC', // Light Gray
        lightAccent: '#B9D6D8', // Light Cyan
        muted: '#F3E4B2', // Soft Yellow
        contrast: '#1D1F20', // Almost Black
        footerBg: '#2B2D42', // Dark Gray for Footer
      },
    },
  },
  plugins: [],
};
