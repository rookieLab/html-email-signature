import { defineStore } from 'pinia';

export const useStore = defineStore('douyin', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    view: 'home',
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    switch(view) {
      this.view = view;
    },
  },
});
