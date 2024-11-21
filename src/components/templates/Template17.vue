
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
<img alt="Best regards," src="https://img.mysignature.io/a/v1/0/b/f/0bfbb707-8d7f-567a-8dd8-2d56918c6dee.png" width="500"/>
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.1px; background-color: rgb(3, 115, 177);">
<tr>
<td style='margin: 0.1px; padding: 20px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<table cellpadding="0" style="border-collapse: collapse;">
<tr><!-- -->
<td style='margin: 0.1px; padding: 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(0, 0, 1);' valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style='margin: 0.1px; padding: 0px 0px 5px; font: 16.8px / 21.4px "Times New Roman", Times, serif; color: rgb(255, 255, 255); cursor: pointer;'>
<span style="font-weight: 600; cursor: pointer;">John
                                                                                Smith</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 5px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255); text-transform: uppercase; border-top: 1px solid rgb(255, 255, 255);'>
<span style="cursor: pointer;">Unemployed</span><!-- --><!-- --><!-- --><!-- -->
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255);'>
<!-- --><span style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Times New Roman", Times, serif;'>+1
                                                                                757 3145
                                                                                2220</span> | <!-- --><span style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Times New Roman", Times, serif;'>
                                                                                johnsmith@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255);'>
<!-- --><span style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Times New Roman", Times, serif;'></span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 10px 0px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255);'>
<span style="color: rgb(255, 255, 255); font-weight: 400; cursor: pointer;">Connect
                                                                                with me on
                                                                                LinkedIn:</span><!-- --><span style="color: rgb(255, 255, 255); font-weight: 400; cursor: pointer;"></span><!-- --><!-- -->
</td>
</tr><!-- -->
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
<td style="padding: 14px 4px 4px 0px; margin: 0.1px;">
<span><img alt="linkedin" height="32" src="https://img.mysignature.io/addons/v2/linkedin_v2_shape1_i.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 14px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
<td style="padding: 14px 4px 4px 0px; margin: 0.1px;">
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
    name: 'Template17',
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
    