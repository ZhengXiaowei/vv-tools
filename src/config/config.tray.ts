/*
 * @Author       : 晓晓晓晓丶vv
 * @Date         : 2021-12-06 14:19:03
 * @LastEditTime : 2021-12-06 16:44:59
 * @LastEditors  : 晓晓晓晓丶vv
 * @Description  : 系统托盘设置
 */
import { app, Tray, Menu, BrowserWindow } from "electron";
import path from "path";

const getPath = (router?: string) => {
  const appRoute = router ? router : "/rename";

  // 测试环境
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    const baseSrc = process.env.WEBPACK_DEV_SERVER_URL as string;
    // Load the url of the dev server if in development mode
    return `${baseSrc}/#${appRoute}`;
  }
  // 线上
  else return `app://./index.html/#${appRoute}`;
};

const installTray = (mainFn: (path?: string) => void) => {
  let tray = null;

  app.whenReady().then((_) => {
    tray = new Tray(path.resolve(__dirname, "../public/avatar_pan_16.png"));

    tray.setToolTip("vv tools");

    tray.setContextMenu(
      Menu.buildFromTemplate([
        {
          label: "Tools - 重命名",
          click: () => {
            mainFn("/rename");
          }
        },
        {
          label: "Tools - 图片压缩",
          click: () => {
            mainFn("/compressor");
            // window.loadURL(getPath("/compressor"));
            // window.show();
          }
        },
        {
          label: "退出",
          click: () => {
            app.quit();
          }
        }
      ])
    );
  });
};

export { getPath, installTray };
