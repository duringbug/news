/*
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-10-08 14:57:32
 * @LastEditors: ${author}
 * @LastEditTime: 2023-10-08 15:27:55
 */
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
    },
    screens: {
      phone: '463px',
      computer: '9999999px'
    },
    colors: {
      blue: colors.sky,
      white: colors.white,
      orange: colors.orange,
      primary: '#f56692',
      green: colors.green,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow,
      pink: colors.pink,
      gray: colors.gray,
    },
    blur: {
      sm: '4px',
      md: '8px',
      lg: '16px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
