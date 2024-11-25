import { shallowRef, ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
// import * as iconComponents from '@/components/svg-icon-a'
import jsonData from '@/stores/data.json'
import ContactIndex from '@/components/contacts/Index.vue'
import Calender from '@/components/svg/Calender.vue'
import Layout1Contact from '@/components/contacts/Layout1Contact.vue'
import Banner from '@/components/Banner.vue'

import Contact from '@/components/Contact.vue'
import Avatar from '@/components/Avatar.vue'
import SignOff from '@/components/SignOff.vue'
import SocialShare from '@/components/SocialShare.vue'
import SocialShareLarge from '@/components/SocialShareLarge.vue'
import Marketplace from '@/components/Marketplace.vue'
import Disclaimer from '@/components/Disclaimer.vue'
import Conference from '@/components/Conference.vue'

export const myMixin = {
  data() {
    return {
      editing: {},
      // socialIconsMap: {}
    }
  },
  components: {
    ContactIndex, Calender, Layout1Contact, Banner, SocialShare, Contact,
    Avatar, SignOff, SocialShareLarge, Marketplace, Disclaimer, Conference
  },
  props: {
    type: {
      type: String,
      default: 'preview' // editing | preview
    },
    data: {
      type: Object,
      default: () => (null)
    }
  },
  methods: {
    // saveTemplate() {
    //     this.store.saveTemplate('Template1', this.editing);
    // },
    initEditingStore() {
      // console.log('initEditingStore', this.$options.name, this.type)
      if (this.type === 'preview') {
        let data = this.store.loadTemplateByName(this.$options.name);
        if (!data) {
          data = this.templates.getTemplate(this.$options.name)
        }
        this.editing = data
      }

      if (this.type === 'editing') {
        let data = this.store.loadTemplateByName(this.$options.name);
        if (!data) {
          data = this.templates.getTemplate(this.$options.name)
        }
        // console.log('initEditingStore3', this.$options.name, data)
        this.editing = useEditingStore()
        this.editing.init(data);
      }

    },
    // loadSocialIcons() {
    //   Object.values(iconComponents).map(component => (
    //     this.socialIconsMap[component.name] = shallowRef(component)
    //   ))
    // },
    init() {
      this.initEditingStore(this.$options.name);
      // this.loadSocialIcons();
    }
  },
  computed: {
    contacts() {
      let contacts = this.editing?.general?.contacts || []
      return contacts.filter(c => c.key != "" || c.value != "")
    },
    templateStyle() {  // 模版的样式
      return {
        fontFamily: this.editing.design?.fontFamily,
        fontSize: this.editing.design?.fontSize + 'px',
        color: this.editing.design?.templateColor
      }
    },
    fontFamily() {
      let fontName = this.editing?.design?.font || "Arial"
      return jsonData.fontList[fontName]
    },
    textStyle() { // 文本样式 baseStyle
      let fontName = this.editing?.design?.font || "Arial"
      let data = {
        color: this.editing.design?.color,
        fontFamily: jsonData.fontList[fontName],
        fontSize: this.editing.design?.fontSize + 'px'
      }
      // console.log('mixin textStyle', fontName, data)
      return data
    }
  },
  mounted() {
    this.store = useStore();
    this.templates = useTemplatesStore()
    this.init()
  }
}