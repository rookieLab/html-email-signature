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
    },
    socialIcons: [
      { name: 'appstore', url: 'https://appstore.com' },
      { name: 'airbnb', url: 'https://airbnb.com' }
    ],
    "Addons": {
      "signOff": {
        "type": "",
        "radio": 0,
        "text": "",
        "fontFamily": "",
        "fontSize": "",
        "fontColor": "",
        "img": ""
      }
    },
    Image: {
      avatarImg: "",
      avatarLink: "",
      bannerImg: "",
      bannerLink: ""
    },
    design: {
      color: "#000000",
      font: "Arial",
      fontSize: 16,
      templateColor: "#000000",
      TextColor: "#000000",
      iconsType: "branded", // branded|colored|outline
      iconsSize: 16,
      iconsShape: "rounded", // circle|square|rounded
      iconsColor: "#000000",
      iconsBackground: "#000000",
    },
    // socialIcons: ['appstore', 'airbnb'], //  General|Images|Social|Add-ons|Design|Templates
  }),
  getters: {
    isChecked: (state) => {
      return (app) => state.socialApps.includes(app)
    }
  },
  actions: {
    init(data) {
      console.log('useEditingStore init', data)
      Object.assign(this, data)
      console.log('useEditingStore init', this.Addons, this.general)
    },
    addSocialIcon(value) {
      console.log('useEditingStore addSocialIcon', value, this.socialIcons)
      if (this.socialIcons.find(icon => icon.name === value)) {

      } else {
        this.socialIcons.push({ name: value, url: '' })
      }
    },
    removeSocialIcon(value) {
      this.socialIcons = this.socialIcons.filter(icon => icon.name !== value)
    },
    dump() {
      return JSON.stringify({
        general: this.general,
        Addons: this.Addons,
        socialIcons: this.socialIcons,
        Image: this.Image,
        design: this.design
      })
    }
    // setGeneral(value) {
    //   this.general = value;
    // },
    // setSignoff(value) {
    //   this.addons.signoff = value;
    // }
  },
});
