/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false // https://mui.com/material-ui/integrations/interoperability/#tailwind-css
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%'
      },
      colors: {
          'md3-primary': {
            100: 'var(--md-sys-color-primary)'
          },
          'md3-inverse-primary': {
            100: 'var(--md-sys-color-inverse-primary)'
          },
          'md3-primary-container': {
            100: 'var(--md-sys-color-primary-container)'
          },
          'md3-primary-fixed': {
            100: 'var(--md-sys-color-primary-fixed)'
          },
          'md3-secondary-container':{
            100: '#D9E7CB'
          },
          'md3-secondary': {
            100: 'var(--md-sys-color-secondary)'
          },
          'md3-error': {
            30: '#ffD8D1',
            50: '#DE3730',
            60: '#FF5449',
            80: '#FFB4AB',
            100: '#BA1A1A',
            200: '#68000e'
          },
          'md3-error-container': {
            100: 'var(--md-sys-color-on-error-container)'
          },
          'md3-bg': {
            100: '#F7FBEE'
          },
          'md3-on-surface': {
            100: '#181D15'
          },
          'md3-tertiary': {
            60: "#5B9B9C",
            70: '#76B6B7',
            100: 'var(--md-sys-color-tertiary)'
          },
          'md3-tertiary-fixed': {
            100: 'var(--md-sys-color-tertiary-fixed)'
          },
          'md3-surface-dim': {
            100: '#D7DCCF'
          },
          'md3-surface-variant': {
            100: '#41493B'
          }
      }
    },
  }
}

