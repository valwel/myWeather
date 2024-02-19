const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  base: "/weather/",
})
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/chat/" : "/",
};
