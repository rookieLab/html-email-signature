
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
<img alt="Kind regards," src="https://img.mysignature.io/a/v1/8/4/f/84fd0ddd-0a74-5545-b303-a57e6eb9c2fb.png" width="500"/>
</td>
</tr>
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse; font-size: 14.4px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 12px 0px 0px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/e/3/1/e31d4bd3-fc8a-509a-afd4-ff828210b901.png?time=1685569257" style="display: block; min-width: 120px;" width="120"/>
</td>
<td style='border-left: 1px solid rgb(176, 70, 70); margin: 0.1px; padding: 0px 0px 0px 12px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);' valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style='margin: 0.1px; padding: 0px 0px 8px; font: 18.7px / 23.8px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
<span style="font-weight: 600; color: rgb(176, 70, 70); cursor: pointer;">Antoni
                                                                                    Clements</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 0px 0px 8px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(0, 0, 1); cursor: pointer;">Social
                                                                                    Worker</span><!-- --><!-- --><!-- --><!-- -->
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(176, 70, 70); font-weight: 600;">phone: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>+57-366-274-45</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(176, 70, 70); font-weight: 600;">email: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>a.clements@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(176, 70, 70); font-weight: 600;">skype: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>antoni_clements</span>
</td>
</tr><!-- -->
</table>
</td>
</tr>
</table>
</td>
</tr>
</table><!-- -->
</div>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
<span><img alt="patreon" height="37" src="https://img.mysignature.io/addons/v2/patreon_v3_shape2_i.png" style="display: block;" width="130"/></span>
</td>
<td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
<td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
<!-- -->
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
    name: 'Template39',
    data() {
        return {
            editing: {},
            socialIconsMap: {}
        }
    },
    props: {
        data: {
            type: Object,
            default: () => ({})
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
    