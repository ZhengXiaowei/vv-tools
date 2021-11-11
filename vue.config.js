module.exports = {
  publicPath: "./",
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: "vv.tools",
        productName: "VV-Tools",
        copyright: "Copyright © 2021 vv",
        directories: {
          buildResources: "build"
        },
        win: {
          icon: "./public/avatar_circle_256.ico"
        },
        mac: {
          icon: "./public/avatar_circle_512.png"
        }
      }
    }
  }
};
