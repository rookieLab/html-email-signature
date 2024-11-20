import { defineStore } from 'pinia';

export const useInjectStore = defineStore('inject', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    show: false,
  }),
  actions: {
    handleMenuClick(value) {
      this.activeMenu = value;
    },
  },
});
