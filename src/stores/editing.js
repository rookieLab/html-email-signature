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
    socialIcons: [
      { name: 'appstore', url: 'https://appstore.com' },
      { name: 'airbnb', url: 'https://airbnb.com' }
    ],
    addons: {
      signoff: ""
    },
    Image: {
      avatarImg: "",
      avatarLink: "",
      bannerImg: "",
      bannerLink: ""
    }
    // socialIcons: ['appstore', 'airbnb'], //  General|Images|Social|Add-ons|Design|Templates
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    init(data) {
      Object.assign(this, data)
    },
    addSocialIcon(value) {
      if (this.socialIcons.find(icon => icon.name === value)) {

      } else {
        this.socialIcons.push({ name: value, url: '' })
      }
    },
    removeSocialIcon(value) {
      this.socialIcons = this.socialIcons.filter(icon => icon.name !== value)
    },
    setGeneral(value) {
      this.general = value;
    },
    setSignoff(value) {
      this.addons.signoff = value;
    }
  },
});
