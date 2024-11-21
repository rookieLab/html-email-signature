import { defineStore } from 'pinia';

export const useInjectStore = defineStore('inject', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    show: false,
    savedTemplates: [],
  }),
  actions: {
    getSavedTemplates() {
      return this.savedTemplates
    },
    showDialog() {
      window.postMessage({
        type: 'FROM_INJECT',
        action: 'getSavedTemplates',
      }, '*')
      this.show = true
    }
  },
});
