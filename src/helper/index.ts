/*
 * @Author       : 晓晓晓晓丶vv
 * @Date         : 2021-11-02 16:19:02
 * @LastEditTime : 2021-11-04 19:36:21
 * @LastEditors  : 晓晓晓晓丶vv
 * @Description  : 帮助方法
 */

import fs from "fs";
import path from "path";

const FILE_IGNORE = [".DS_Store"];

export const doReadFiles = (pathStr: string) => {
  fs.readdir(pathStr, (_, file) => {
    for (let index in file) {
      // 直接略过一些不必要的文件
      if (FILE_IGNORE.includes(file[index])) continue;

      const URL = path.join(pathStr, file[index]);
      const fileStat = fs.statSync(URL);

      if (fileStat.isFile()) doRenameFile(URL);
      else doReadFiles(URL);
    }
  });
};

const doRenameFile = (pathStr: string) => {
  // 直接重命名所有文件夹
  const fileData = path.parse(pathStr);
  const ext = fileData.ext;
  const name = fileData.name;
  const newName = name
    .replace(/[(\s+)|()|_|-]/g, " ")
    .trim()
    .replace(/\s+/g, "_");

  const oldPath = pathStr;
  const newPath = path.join(fileData.dir, `${newName + ext}`);

  fs.rename(oldPath, newPath, () => {
    console.log("success");
  });
};
