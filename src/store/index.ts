import { defineStore } from "pinia";

interface IRecordItem {
  id: number | string;
  type: string;
  preName: string;
  name: string;
}

const useAppStore = defineStore<
  string,
  { records: IRecordItem[] },
  any,
  { addRecord: (item: IRecordItem) => void }
>("app", {
  state: () => ({
    records: []
  }),
  actions: {
    addRecord(item: IRecordItem) {
      this.records.push(item);
    }
  }
});

export default useAppStore;
