import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    activeMenu: 'Templates', //  General|Images|Social|Add-ons|Design|Templates
    editingTemplate: "Template3",
    savedTemplates: []
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    getSavedTemplates() {
      // .map(template => template.data = JSON.parse(template.data))
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
      // console.log('store saveTemplate', templateName, data)
      const template = this.savedTemplates.find(template => template.name === templateName)
      if (template) {
        template.data = data
      } else {
        this.savedTemplates.push({
          name: templateName,
          data: data
        });
      }
      // 如果是chrome插件，则将数据发送到插件中
      if (chrome.runtime) {
        console.log('store saveTemplate', chrome)
        chrome.runtime.sendMessage({
          action: 'saveSavedTemplates',
          data: this.savedTemplates
        });
      }
    },
    loadTemplateByName(templateName) {
      // console.log('store loadTemplateByName', templateName)
      let data = this.savedTemplates.find(template => template.name === templateName)?.data;
      // console.log('store loadTemplateByName2', templateName, data)
      if (data) {
        return JSON.parse(data)
      }
      return null
    }
  },
});
