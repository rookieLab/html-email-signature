
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 17.1px;" width="550">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 20px 0px 0px; border-right: 3px solid rgb(30, 189, 255);" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px; font: 23.7px / 30.2px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(30, 189, 255); cursor: pointer;">Mia
                                                                                Williams</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 200 17.1px / 21.6px Georgia, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                            Food Blogger &amp; </td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 200 17.1px / 21.6px Georgia, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                            Gourmet Chef </td>
</tr><!-- -->
</table>
</td>
<td style="margin: 0.1px; padding: 0px 0px 0px 20px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 17.1px / 21.6px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(30, 189, 255); font-weight: 600;">☏  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">+1
                                                                                733 953
                                                                                6362</span>  <!-- --><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;"></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 17.1px / 21.6px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(30, 189, 255); font-weight: 600;">✉  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">your@mysignature.io</span>  <!-- --><span style="color: rgb(0, 0, 1);"></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 17.1px / 21.6px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(30, 189, 255); font-weight: 600;">⌨  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">mysignature.io</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 17.1px / 21.6px Georgia, serif; color: rgb(0, 0, 1);">
<!-- --><span style="color: rgb(224, 16, 108); font-weight: 400; cursor: pointer;"></span><!-- --><!-- -->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
<span><img alt="facebook" height="29" src="https://img.mysignature.io/addons/v2/facebook_v1_shape2_i.png" style="display: block;" width="102"/></span>
</td>
<td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
<span><img alt="youtube" height="29" src="https://img.mysignature.io/addons/v2/youtube_v3_shape2_i.png" style="display: block;" width="102"/></span>
</td>
<td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
<td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="500">
<tr>
<td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
<span><img alt="created with MySignature.io" src="https://img.mysignature.io/b/e/0/9/e0962b23-a56c-5912-bb49-580595d48f3c.png?time=1709203140" style="display: block;" valign="top" width="388"/></span>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" width="500">
<tr>
<td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                                                         </td>
</tr>
</table>
</div><!-- -->
</div>
</template>
<script>
import { shallowRef, ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
import * as iconComponents from '@/components/svg-icon-a'
import jsonData from '@/stores/data.json'

export default {
    name: 'Template86',
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
    