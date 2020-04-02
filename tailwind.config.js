module.exports = {
  theme: {
    extend: {
      width: {
        "200": "200px",
        "300": "300px",
        "320": "320px",
        "350": "350px",
        "400": "400px",
        "500": "500px",
      },
      height: {
        "200": "200px",
        "250": "250px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
      },
      minHeight: {
        '0': '0',
        "100": "100px",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
    screens: {
      'mb': {'min': '300px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
    fontFamily: {
      // 'sans': ['-apple-system', 'BlinkMacSystemFont'],
      // 'serif': ['Georgia', 'Cambria'],
      // 'mono': ['SFMono-Regular', 'Menlo'],
      // 'display': ['Oswald'],
      // 'body': ['Open Sans'],
      'doHyeon' : ['Do Hyeon'],
      'spicyRice' : ['Spicy Rice'],
      'abrilFatface' : ['Abril Fatface'],
      'fredokaOne' : ['Fredoka One'],
    }
  },
  variants: {},
  plugins: [],
};
