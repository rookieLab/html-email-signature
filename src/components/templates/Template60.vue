
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 12.6px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/e/f/9/ef9afb0c-8552-56b0-bb52-1d54fe74732d.png?time=1726132633" style="display: block; min-width: 109px;" width="109"/>
</td>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px;" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px; font: 15.2px / 19.3px Tahoma; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">James
                                                                                Mittow</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 4px 0px; font: 12.6px / 16.1px Tahoma; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Business
                                                                                Developer</span> <span style="cursor: pointer;">SoftSolutions</span><!-- --><span style="cursor: pointer;"></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.6px / 16.1px Tahoma; color: rgb(0, 0, 1);">
<span style="color: rgb(0, 0, 0);">website: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.6px / 16.1px Tahoma; color: rgb(0, 0, 1);">
<span style="color: rgb(0, 0, 0);">email: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma;">james@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.6px / 16.1px Tahoma; color: rgb(0, 0, 1);">
<span style="color: rgb(0, 0, 0);">address: </span><span style="color: rgb(0, 0, 1);">10
                                                                                California
                                                                                st, fl 6</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.6px / 16.1px Tahoma; color: rgb(0, 0, 1);">
<span style="color: rgb(0, 0, 0);">phone: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma;">733
                                                                                663 33 </span>
</td>
</tr>
</table>
</td><!-- -->
</tr>
</table>
</td>
</tr><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
<span><img alt="appstore" height="37" src="https://img.mysignature.io/addons/v2/appstore_shape3_black.png" style="display: block;" width="130"/></span>
</td>
<td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
<span><img alt="googleplay" height="37" src="https://img.mysignature.io/addons/v2/googleplay_shape3_black.png" style="display: block;" width="130"/></span>
</td>
<td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr>
<td style="padding: 11px 10px 0px 0px; margin: 0.1px; cursor: pointer;">
<span><img alt="Check out our case studies &gt;&gt;" src="https://img.mysignature.io/a/v1/9/c/0/9c09c15d-592d-59d1-8a9a-ae78283b4259.png" style="max-width: 490px; display: block;" width="291"/></span>
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
    name: 'Template60',
    data() {
        return {
            editing: {},
            socialIconsMap: {}
        }
    },
    props: {
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
            // 先从props 中获取数据，
            let data = this.data
            console.log(this.$options.name + "data", data)

            // 如果props 中没有数据，看看用户有没有保存过自定义数据
            if (!data) {
                data = this.store.loadTemplateByName(this.$options.name);
            }

            // 使用默认数据
            if (!data) {
                data = this.templates.getTemplate(this.$options.name)
            }
            this.editing.init(data);
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
        this.editing = useEditingStore()
        this.templates = useTemplatesStore()

        this.init()
    }
}
</script>
<style scoped></style>
    