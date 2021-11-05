import { defineStore } from "pinia";

interface IState {
  records: IRecordItem[];
  typeName: Record<string, string>;
  type: Record<string, string>;
}

interface IGetters<T> {
  recordGetters: (state: IState) => IRecordItem[];
}

interface IActions {
  addRecord: (item: IRecordItem) => void;
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
    }
  }
});

export default useAppStore;
