module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/colors.scss";
          @import "@/assets/styles/variables.scss";
          @import "@/assets/styles/fonts.scss";
          @import "@/assets/styles/extends.scss";
          @import "@/assets/styles/mixins.scss";
          @import "@/assets/styles/normalize.scss";
          @import "@/assets/styles/basics.scss";
        `
      }
    }
  }
}
