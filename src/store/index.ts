import { defineStore } from "pinia";

interface IState {
  records: IRecordItem[];
  typeName: Record<string, string>;
  type: Record<string, string>;
  currentPath: string;
  replaceReg: string;
  replaceStr: string;
}

interface IRecordItem {
  id: number | string;
  type: string;
  typeName: string;
  preName: string;
  name: string;
}

const useAppStore = defineStore("app", {
  state: (): IState => ({
    currentPath: "",
    replaceReg: "[^A-Z0-9]+",
    replaceStr: "",
    records: [],
    type: {
      image: "success",
      media: "warning",
      document: "info"
    },
    typeName: {
      image: "图片",
      media: "媒体",
      document: "文档"
    }
  }),
  getters: {
    recordsGetter: (state) => {
      return state.records.map((item) => {
        return {
          ...item,
          type: state.type[item.type],
          typeName: state.typeName[item.type]
        };
      });
    }
  },
  actions: {
    addRecord(item: IRecordItem) {
      this.records.push(item);
    },
    setFilePath(path: string) {
      this.currentPath = path;
    },
    setReplaceReg(reg: string) {
      if (reg) this.replaceReg = reg;
      else this.replaceReg = "[^A-Z0-9]+";
    },
    setReplaceStr(str: string) {
      if (str) this.replaceStr = str;
      else this.replaceStr = "";
    }
  }
});

export default useAppStore;
