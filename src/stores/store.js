import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    activeMenu: 'General', //  General|Images|Social|Add-ons|Design|Templates
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    handleMenuClick(value) {
      this.activeMenu = value;
    },
  },
});
