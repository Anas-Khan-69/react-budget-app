
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '0px',
      md: '600px',
      lg: '840px'
    },
    colors: {
      primary:{
        light: '#00677E',
        DEFAULT: '#00677E',
        dark: '#59D5F8'
      },
      onPrimary: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#003542'
      },
      background: {
        light: '#FAFCFD',
        DEFAULT: '#40484BFAFCFD',
        dark: '#191C1D',
      },
      onBackground: {
        light: '#191C1D',
        DEFAULT: '#191C1D',
        dark: '#E1E3E4',
      },
      surface: {
        light: '#FAFCFD',
        DEFAULT: '#FAFCFD',
        dark: '#191C1D',
      },
      surfaceVariant: {
        light: '#DBE4E8',
        DEFAULT: '#DBE4E8',
        dark: '#40484B'
      },
      onSurface: {
        light: '#191C1D',
        DEFAULT: '#191C1D',
        dark: '#E1E3E4'
      },
      onSurfaceVariant: {
        light: '#40484B',
        DEFAULT: '#40484B',
        dark: '#BFC8CC'
      },
      error: {
        light: '#BA1B1B',
        DEFAULT: '#BA1B1B',
        dark: '#FFB4A9'
      },
      onError: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#680003'
      },
      outline: {
        light: '#70787C',
        DEFAULT: '#70787C',
        dark: '#899296'
      }
    } ,
    fontSize: {
      'headline-large': ['32px', '40px'],
      'headline-small': ['24px', '32px'],
      'title-large': ['22px', '28px'],
      'title-medium': ['16px', {lineHeight: '24px', letterSpacing:'0.001em'}],
      'label-large': ['14px', {lineHeight: '20px', letterSpacing: '0.001em'}],
      'label-medium': ['12px', {lineHeight: '16px', letterSpacing: '0.005em'}],
      'body-large': ['16px', {lineHeight: '24px', letterSpacing: '0.005em'}],
      'body-medium': ['14px', {lineHeight: '20px', letterSpacing: '0.0025em'}]
    } ,
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
