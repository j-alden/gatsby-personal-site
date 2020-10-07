import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: '#000', // #294145 Text color
    secondary: '#CAE4D7',
    accent: '#6166DC',
    grey: '#73737D',
    background: '#dde8d8', //'#d5e3cf',
  },
};
