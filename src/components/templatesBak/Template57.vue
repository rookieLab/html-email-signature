
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 14.4px;" width="400">
<tr>
<td style="margin: 0.1px; padding: 0px; cursor: pointer;">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/5/8/9/589b1a98-b088-514f-98a3-8a98a736dfc2.png?time=1685569257" style="display: block; min-width: 138px;" width="138"/>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 10px 10px 0px 0px; font: 18.7px / 23.8px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); letter-spacing: 0.4pt; cursor: pointer;">
<span style="font-weight: 600; color: rgb(74, 74, 74); text-transform: uppercase; cursor: pointer;">Rudra
                                                        Rosales</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 5px 0px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Marketing Manager
                                                        at</span> <span style="cursor: pointer;">Yesty</span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 15px 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td height="1" style="margin: 0.1px; padding: 0px; border-top: 2px solid rgb(74, 74, 74); font: 1px / 1px Verdana, Geneva, sans-serif; width: 30px;">
</td>
</tr>
</table>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="font-weight: 600;">M: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">428-328-3289</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="font-weight: 600;">T: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">499-3900</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="font-weight: 600;">E: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">rudrar@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="font-weight: 600;">W: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr><!-- --><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<!-- -->
<tr>
<td style="padding: 15px 0px 0px; margin: 0.1px; cursor: pointer;">
<span><img alt="Meet me on Zoom" src="https://img.mysignature.io/a/v1/3/b/e/3be1ed76-e5f2-5c4e-be3f-4e582bedefac.png" style="display: block;" width="182"/></span>
</td>
</tr>
</table><!-- -->
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
    name: 'Template57',
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
    