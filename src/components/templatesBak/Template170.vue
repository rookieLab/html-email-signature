
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
<img alt="Sincerely," src="https://img.mysignature.io/a/v1/7/c/a/7ca1ae20-ce8f-52d3-99b7-496ce8e780ae.png" width="500"/>
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.3px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;" valign="middle">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/a/0/5/a054dc89-8662-5a85-91d5-84dd375b9645.png?time=1709627628" style="display: block; min-width: 124px;" width="124"/>
</td>
<td style="margin: 0.1px; padding: 0px;" valign="middle">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 0px 2px; font: 15.9px / 20.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(200, 0, 76); font-weight: 600; cursor: pointer;">Eleanor
                                                                                Waters</span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 0px 0px 5px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Owner
                                                                                •</span> <span style="cursor: pointer;">Line
                                                                                Design
                                                                                Studio</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span>m: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">+453-509-309</span>, <span>w: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span>e: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">eleanor@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span>a: </span><span style="color: rgb(0, 0, 1);">FL,
                                                                                Bradenton,
                                                                                4245 Monroe
                                                                                Avenue</span>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 9px 4px 4px 0px; margin: 0.1px;">
<span><img alt="behance" height="40" src="https://img.mysignature.io/addons/v2/behance_v1_shape3_i.png" style="display: block;" width="140"/></span>
</td>
<td style="padding: 9px 4px 4px 0px; margin: 0.1px;">
<span><img alt="pinterest" height="40" src="https://img.mysignature.io/addons/v2/pinterest_v1_shape3_i.png" style="display: block;" width="140"/></span>
</td>
<td style="padding: 9px 4px 4px 0px; margin: 0.1px;">

</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: gray;">
                                                        Please don’t print this email</td>
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
    name: 'Template170',
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
    