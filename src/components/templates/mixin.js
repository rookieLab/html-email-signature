import { shallowRef, ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
import * as iconComponents from '@/components/svg-icon-a'
import jsonData from '@/stores/data.json'
import IconsMeet from '@/components/svg-meeting/Index'

export const myMixin = {
  data() {
    return {
      editing: {},
      socialIconsMap: {}
    }
  },
  components: {
    IconsMeet
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
    loadSocialIcons() {
      Object.values(iconComponents).map(component => (
        this.socialIconsMap[component.name] = shallowRef(component)
      ))
    },
    init() {
      this.initEditingStore(this.$options.name);
      this.loadSocialIcons();
    }
  },
  computed: {
    textStyle() {
      let fontName = this.editing?.design?.font || "Arial"
      return {
        color: this.editing.design?.TextColor,
        fontFamily: jsonData.fontList[fontName],
        fontSize: this.editing.design?.fontSize + 'px'
      }
    },
    meetStyle() {
      let fontName = this.editing?.Addons?.video?.font || "Arial"
      let shapemap = {
        square: '0px',
        rounded: '5px',
        circle: '30px'
      }
      return {
        color: this.editing.Addons?.video?.color,
        fontFamily: jsonData.fontList[fontName],
        marginTop: this.editing.Addons?.video?.top + 'px',
        backgroundColor: this.editing.Addons?.video?.bgcolor,
        borderRadius: shapemap[this.editing.Addons?.video?.shape]
      }
    }
  },
  mounted() {
    this.store = useStore();
    this.templates = useTemplatesStore()
    this.init()
  }
}