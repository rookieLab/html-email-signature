import { defineStore } from 'pinia';

export const useEditingStore = defineStore('editing', {
  persist: {
    key: 'ap-store',
    storage: localStorage
  },
  state: () => ({
    general: {
      name: "",
      pronoun: "",
      company: "",
      position: "",
      department: "",
      email: "",
      phone: "",
      website: "",
      CellPhone: "",
      skype: "",
      mobile: "",
      // Contacts: [
      //   { name: "CellPhone", value: "" },
      //   { name: "Emai", value: "" },
      //   { name: "Address", value: "" },
      //   { name: "phone", value: "" },
      //   { name: "skype", value: "" },
      //   { name: "mobile", value: "" },
      // ]
    },
    socialIcons: [], //  General|Images|Social|Add-ons|Design|Templates
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    addSocialIcon(value) {
      if (this.socialIcons.includes(value)) {

      } else {
        this.socialIcons.push(value)
      }
    },
    removeSocialIcon(value) {
      this.socialIcons = this.socialIcons.filter(icon => icon !== value)
    },
    setGeneral(value) {
      this.general = value;
    }
  },
});
