export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Стилист Визажист Филипкина Дарья",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "yandex-verification", content: "7779afedb9cbf150" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Стилист визажист Филипкина Дарья",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Свадебные прически и макияж, организация фотосессий. Самые стильные образы в Ульяновске.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/134979552_228219648868675_344346831148977152_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=PW2i_ByTj-IAX8qrv8B&tn=-KYx3bfnkbY2uule&edm=AP_V10EBAAAA&ccb=7-4&oh=b6a3454aac05de5d14147764d8268ea7&oe=6104E2AE&_nc_sid=4f375e",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content:
          "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/134979552_228219648868675_344346831148977152_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=PW2i_ByTj-IAX8qrv8B&tn=-KYx3bfnkbY2uule&edm=AP_V10EBAAAA&ccb=7-4&oh=b6a3454aac05de5d14147764d8268ea7&oe=6104E2AE&_nc_sid=4f375e",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Стилист визажист Филипкина Дарья",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Свадебные прически, свадебный макияж, обучение на визажиста, коррекция и окраска бровей и другие услуги смотрите на моей странице",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/1.jpg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/styles/style"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: {
    color: "green",
    height: "1px",
  },

  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
}
