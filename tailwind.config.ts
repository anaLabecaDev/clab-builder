import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        "clab-light": {
          extend: "light",
          colors: {
            background: '#212833',
            focus: '#07584E',
            primary: {
              DEFAULT: '#07584E',
              100: '#C9F6E0',
              200: '#96EECB',
              300: '#5BCCAA',
              400: '#2F9A83',
              500: '#07584E',
              600: '#054B49',
              700: '#033B3F',
              800: '#022B33',
              900: '#01202A',
            },
            success: {
              100: '#DCF9D1',
              200: '#B4F3A6',
              300: '#7DDD73',
              400: '#4BBB4B',
              500: '#1D8E27',
              600: '#157A27',
              700: '#0E6626',
              800: '#095223',
              900: '#054421',
            },
            info: {
              100: '#C8F3FA',
              200: '#93E1F5',
              300: '#5ABFE3',
              400: '#3196C7',
              500: '#0064A3',
              600: '#004D8C',
              700: '#003975',
              800: '#00295E',
              900: '#001D4E',
            },
            warning: {
              100: '#FBF8C9',
              200: '#F8F095',
              300: '#EADD5E',
              400: '#D6C536',
              500: '#BCA601',
              600: '#A18C00',
              700: '#877400',
              800: '#6D5C00',
              900: '#5A4B00',
            },
            danger: {
              100: '#FBE4CC',
              200: '#F7C49A',
              300: '#E79665',
              400: '#CF6A3E',
              500: '#AF320C',
              600: '#961F08',
              700: '#7D1006',
              800: '#650503',
              900: '#530206',
            },
          },
        },
      },
    }),
  ],
};
export default config;
