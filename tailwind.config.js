/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A68966',        // Sophisticated gold/muted brown
        secondary: '#000000',      // Black for headlines
        accent: '#E8F5E9',         // Light mint/pale green
        neutral: '#454D5D',        // Dark gray for body text
        'light-bg': '#FFFFFF',     // White background
        'gold': '#A68966',         // Gold accent
        'mint': '#E8F5E9',         // Mint background
        'gray-text': '#6C757D',    // Tagline text color
        'heading-dark': '#212529', // Main heading color
        'guarantee-green': '#3B8C6E', // Guarantee text color
        'teal': {
          700: '#2F7C6E',          // Primary CTA button
          800: '#266B5E',          // Primary CTA button hover
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '1.1'],
        '6xl': ['60px', '1.1'],
      },
    },
  },
  plugins: [],
}