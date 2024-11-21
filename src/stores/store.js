import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    activeMenu: 'General', //  General|Images|Social|Add-ons|Design|Templates
    editingTemplate: "Template1",
    savedTemplates: []
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    getSavedTemplates() {
      return this.savedTemplates
    },
    handleMenuClick(value) {
      this.activeMenu = value;
    },
    handleSelectTemplate(value) {
      this.editingTemplate = value;
      this.activeMenu = 'General'
    },
    saveTemplate(templateName, data) {
      const template = this.savedTemplates.find(template => template.name === templateName)
      if (template) {
        template.data = data
      } else {
        this.savedTemplates.push({
          name: templateName,
          data: data
        });
      }
      chrome.runtime.sendMessage({
        action: 'saveSavedTemplates',
        data: this.savedTemplates
      });
    },
    loadTemplateByName(templateName) {
      return this.savedTemplates.find(template => template.name === templateName)?.data;
    }
  },
});
