import sveltePreprocess from "svelte-preprocess";

const config = {
  preprocess: sveltePreprocess({
    scss: {
      //allow use of variable.scss for global scss variables
      // prependData: '@use "src/styles/variables.scss";',
    },
  }),
};

export default config;
