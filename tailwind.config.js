/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wechat: {
          primary: '#07C160',
          'primary-light': '#1AAD19',
          'primary-dark': '#06A759',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F7F7F7',
          card: '#FFFFFF',
        },
        text: {
          primary: '#353535',
          secondary: '#888888',
          tertiary: '#B2B2B2',
        },
        border: {
          light: '#E5E5E5',
          medium: '#D9D9D9',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}