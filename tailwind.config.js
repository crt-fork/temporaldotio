module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDelay: {
        3000: '3000ms'
      },
      fontFamily: {
        light: ['Aeonik-Light'],
        bold: ['Aeonik-Bold']
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      colors: {
        gray: {
          100: '#ecedee',
          200: '#9ba1a6',
          300: '#3a3f42',
          400: '#313538',
          500: '#2b2f31',
          600: '#26292b',
          700: '#202425',
          800: '#1a1d1e',
          900: '#151718',
          1000: '#0000007a'
        },
        blue: {
          50: '#effbfffa',
          100: '#53acfffa',
          150: '#37a1fffa',
          200: '#0095fffa',
          300: '#057eff98',
          350: '#047dff6f',
          400: '#097cff52',
          500: '#0f7bfe40',
          600: '#1476fe32',
          700: '#1677fe22',
          800: '#0f5afc0f',
          900: '#00000000'
        },
        red: {
          50: '#feecee',
          100: '#ff6369',
          150: '#f2555a',
          200: '#e5484d',
          300: '#aa2429',
          350: '#822025',
          400: '#671e22',
          500: '#541b1f',
          600: '#481a1d',
          700: '#3c181a',
          800: '#291415',
          900: '#1f1315'
        },
        green: {
          50: '#e5fbeb',
          100: '#4cc38a',
          150: '#3cb179',
          200: '#30a46c',
          300: '#236e4a',
          350: '#1b543a',
          400: '#164430',
          500: '#133929',
          600: '#113123',
          700: '#0f291e',
          800: '#0c1f17',
          900: '#0d1912'
        },
        offwhite: '#F2F2F2',
        temporalblue: '#0091ff',
        temporalbrightblue: '#127AE5',
        temporalpurple: '#B8B4DC',
        temporalbrightpurple: '#8F86DA',
        spaceblack: '#141414',
        green1: '#9EE587',
        green2: '#32D67B',
        orange1: '#FFA280',
        orange2: '#FF7065',
        gray5: '#E0E0E0',
        lightgray: 'rgba(242,242,242,0.5)',
        lightteal: '#C7EDEF'
      },
      boxShadow: {
        blue: '0 25px 50px -12px rgba(15,123,254,0.1)'
      },
      gridTemplateColumns: {
        usecases: '200px minmax(0, 1fr)'
      },
      maxWidth: {
        700: '700px'
      },
      width: {
        200: '200px',
        300: '300px',
        700: '700px',
        800: '800px',
        '3/1': '300%'
      },
      height: {
        60: '60px',
        200: '200px',
        300: '300px',
        400: '400px',
        700: '700px',
        800: '800px',
        '3/1': '300%'
      },
      fontSize: {
        60: '60px',
        144: '144px'
      },
      lineHeight: {
        36: '36px',
        48: '48px',
        60: '60px',
        72: '72px',
        144: '144px'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    visibility: ['responsive', 'hover', 'focus'],
    animation: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
