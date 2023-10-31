export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {
    colors: {
      'lime':'#f1f2e3'
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('flowbite/plugin')
];