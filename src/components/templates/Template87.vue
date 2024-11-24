
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.4px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px;" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style='margin: 0.1px; padding: 0px 0px 2px; font: 16.1px / 20.5px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(165, 229, 99); font-weight: 600; cursor: pointer;">
                                                                                AVA
                                                                                WILSON</span>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 0px 0px 10px; font: 600 13.4px / 17.1px "Trebuchet MS", Helvetica, sans-serif; color: rgb(48, 79, 71);'>
<span style="cursor: pointer;">Sweet
                                                                                Treats Baker
                                                                                &amp; Dessert Lover</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Trebuchet MS", Helvetica, sans-serif; color: rgb(48, 79, 71);'>
<span style="color: rgb(165, 229, 99);">email: </span><span style='color: rgb(48, 79, 71); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>ava.wilson@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Trebuchet MS", Helvetica, sans-serif; color: rgb(48, 79, 71);'>
<span style="color: rgb(165, 229, 99);">mobile </span><span style='color: rgb(48, 79, 71); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>(555)
                                                                                567-8901</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Trebuchet MS", Helvetica, sans-serif; color: rgb(48, 79, 71);'>
<span style="color: rgb(165, 229, 99);">skype </span><span style='color: rgb(48, 79, 71); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>ava.wilson</span>
</td>
</tr>
</table>
</td>
<td style="margin: 0.1px; padding: 0px 0px 0px 15px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/b/9/6/b964f00a-d835-5d71-9087-f3eb8dd85c50.png?time=1709205071" style="display: block; min-width: 109px;" width="109"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 15px 0px 0px; font: 13.4px / 17.1px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;'>
<span><img alt="created with MySignature.io" src="https://img.mysignature.io/b/b/9/6/b964f00a-d835-5d71-9087-f3eb8dd85c50.png?time=1709205071" style="display: block;" valign="top" width="347"/></span>
</td>
</tr>
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 10px 4px 4px 0px; margin: 0.1px;">
<span><img alt="pinterest" height="32" src="https://img.mysignature.io/addons/v2/pinterest_v1_shape3_i.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 10px 4px 4px 0px; margin: 0.1px;">
<span><img alt="instagram" height="32" src="https://img.mysignature.io/addons/v2/instagram_v1_shape3_i.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 10px 4px 4px 0px; margin: 0.1px;">
<span><img alt="behance" height="32" src="https://img.mysignature.io/addons/v2/behance_v1_shape3_i.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 10px 4px 4px 0px; margin: 0.1px;">

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
    name: 'Template87',
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
    