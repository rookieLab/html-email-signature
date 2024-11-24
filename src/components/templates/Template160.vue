
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse; font-size: 14.6px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 20px 0px 0px; border-right: 2px solid rgb(171, 1, 206);" valign="middle">
<table cellpadding="0" style="border-collapse: collapse;">
<tr></tr>
<tr>
<td align="center" style='margin: 0.1px; padding: 0px; font: 20.4px / 25.9px "Courier New", Courier, monospace; color: rgb(0, 0, 1);'>
<span style="color: rgb(171, 1, 206); font-weight: 600; cursor: pointer;">Dr.
                                                                                Emma
                                                                                Wilson</span><span style="color: rgb(0, 0, 0); cursor: pointer;"></span>
</td>
</tr>
<tr>
<td align="center" style='margin: 0.1px; padding: 5px 0px 0px; font: 200 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 0);'>
<span style="cursor: pointer;">Associate
                                                                                Professor</span> <span style="cursor: pointer;">Atlantic
                                                                                University</span>
</td>
</tr>
</table>
</td>
<td style="margin: 0.1px; padding: 0px 0px 0px 20px;" valign="middle">
<table cellpadding="0" style="border-collapse: collapse;">
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 1); white-space: nowrap;'>
<span style="color: rgb(171, 1, 206); font-weight: 600;">phone:  </span><span style='color: rgb(0, 0, 0); text-decoration: none; font-family: "Courier New", Courier, monospace;'>+45-875-3885-43</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 1); white-space: nowrap;'>
<span style="color: rgb(171, 1, 206); font-weight: 600;">email  </span><span style='color: rgb(0, 0, 0); text-decoration: none; font-family: "Courier New", Courier, monospace;'>emma.wilson@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 1); white-space: nowrap;'>
<span style="color: rgb(171, 1, 206); font-weight: 600;">website:  </span><span style='color: rgb(0, 0, 0); text-decoration: none; font-family: "Courier New", Courier, monospace;'>mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 1);'>
<span style="color: rgb(0, 0, 0);"></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 1); white-space: nowrap;'>
<span style='color: rgb(0, 0, 0); text-decoration: none; font-family: "Courier New", Courier, monospace;'></span>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 14.6px / 18.5px "Courier New", Courier, monospace; color: rgb(0, 0, 1);'>
<span style="color: rgb(21, 207, 146); font-weight: 600; font-style: italic; cursor: pointer;">Connect
                                                                                with me</span> <span style="color: rgb(2, 1, 1); font-weight: 600; font-style: italic; cursor: pointer;">to
                                                                                discuss research
                                                                                collaborations and
                                                                                opportunities</span>
</td>
</tr>
<tr></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr style="cursor: pointer;">
<td style="padding: 15px 0px 0px; margin: 0.1px;" width="30">
<img alt="Please consider the environment before printing this email" src="https://img.mysignature.io/addons/v2/leaf.png" style="display: block;"/>
</td>
<td style='margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px "Courier New", Courier, monospace; color: gray;'>
                                                        Please consider the environment before printing this
                                                        email
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
    name: 'Template160',
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
    