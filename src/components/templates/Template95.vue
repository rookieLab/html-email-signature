
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.1px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px;" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 0px 2px; font: 15.6px / 19.8px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(97, 24, 24); font-weight: 600; cursor: pointer;">LEY
                                                                                HERRERA</span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 0px 0px 10px; font: 600 13.1px / 16.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Fashion
                                                                                Blogger</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(97, 24, 24);">w: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(97, 24, 24);">e: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">ley@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(97, 24, 24);">p: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">838
                                                                                3837 3344</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(97, 24, 24);">s:
                                                                                 </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">ley_herrera</span>
</td>
</tr>
</table>
</td>
<td style="margin: 0.1px; padding: 0px 0px 0px 15px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/6/6/e/66e67908-eee6-5455-ae24-72a16a42354b.png?time=1709313373" style="display: block; min-width: 122px;" width="122"/>
</td>
</tr>
</table>
</td>
</tr>
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
<span><img alt="instagram" height="41" src="https://img.mysignature.io/addons/v2/instagram_v1_shape2_i.png" style="display: block;" width="144"/></span>
</td>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
<span><img alt="youtube" height="41" src="https://img.mysignature.io/addons/v2/youtube_v1_shape2_i.png" style="display: block;" width="144"/></span>
</td>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">

</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="500">
<tr>
<td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
<span><img alt="created with MySignature.io" src="https://img.mysignature.io/b/6/6/e/66e67908-eee6-5455-ae24-72a16a42354b.png?time=1709313373" style="display: block;" valign="top" width="292"/></span>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="500">
<tr>
<td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                                                         </td>
</tr>
</table>
</div>
</div>
</template>
<script>
import { shallowRef, ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
import * as iconComponents from '@/components/svg-icon-a'
import jsonData from '@/stores/data.json'

export default {
    name: 'Template95',
    data() {
        return {
            editing: {},
            socialIconsMap: {}
        }
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
        //     this.store.saveTemplate('Template1', this.data);
        // },
         initEditingStore() {
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
        }
    },
    mounted() {
        this.store = useStore();
        
        this.templates = useTemplatesStore()

        this.init()
    }
}
</script>
<style scoped></style>
    