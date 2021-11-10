/*
 * @Author       : 晓晓晓晓丶vv
 * @Date         : 2021-11-04 20:12:56
 * @LastEditTime : 2021-11-10 15:24:11
 * @LastEditors  : 晓晓晓晓丶vv
 * @Description  : 重命名composable
 */
import fs from "fs";
import path from "path";
import useAppStore from "@/store";

const FILE_IGNORE = [".DS_Store"];

const doReadFiles = (pathStr: string) => {
  fs.readdir(pathStr, (_, file) => {
    for (let index in file) {
      // 直接略过一些不必要的文件
      if (FILE_IGNORE.includes(file[index])) continue;

      const URL = path.join(pathStr, file[index]);
      const fileStat = fs.statSync(URL);

      if (fileStat.isFile()) doRenameFile(URL, index);
      else doReadFiles(URL);
    }
  });
};

const doRenameFile = (pathStr: string, index: string | number) => {
  const appStore = useAppStore();
  // 直接重命名所有文件夹
  const fileData = path.parse(pathStr);
  const ext = fileData.ext;
  const name = fileData.name;
  const reg = new RegExp(appStore.replaceReg, "ig");
  const newName = name.replace(reg, appStore.replaceStr).trim();

  const oldPath = pathStr;
  const newPath = path.join(fileData.dir, newName + ext);

  fs.rename(oldPath, newPath, () => {
    const item = {
      id: index,
      type: "image",
      typeName: "",
      preName: name + ext,
      name: newName + ext
    };
    appStore.addRecord(item);
  });
};

export default doReadFiles;
