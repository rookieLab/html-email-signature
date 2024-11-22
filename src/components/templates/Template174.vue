
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 14.4px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/6/1/e/61eb0596-4be4-5449-8759-df5490fe93d3.png?time=1685569257" style="display: block; min-width: 121px;" width="121"/>
</td>
<td style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 0px 5px; font: 17.3px / 22.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="font-weight: 600; color: rgb(15, 15, 15); cursor: pointer;">Victoria
                                                                                Brookes</span><!-- --><!-- --> <span style="font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(85, 176, 200); cursor: pointer;">Potter
                                                                            </span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 0px 0px 5px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;"><span style="color: rgb(85, 176, 200);">Victoria's
                                                                                    cups</span></span><!-- --><!-- -->
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 2px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(15, 15, 15); font-weight: 600;">email: </span><span style="color: rgb(85, 176, 200); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">brookes@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 2px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(15, 15, 15); font-weight: 600;">website: </span><span style="color: rgb(85, 176, 200); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 2px 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(15, 15, 15); font-weight: 600;">address: </span><span style="color: rgb(85, 176, 200);">517
                                                                                Robinson Lane, Athens</span>
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
<td style="padding: 11px 4px 4px 0px; margin: 0.1px;">
<span><img alt="pinterest" height="32" src="https://img.mysignature.io/addons/v2/pinterest_v1_shape3_i.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 11px 4px 4px 0px; margin: 0.1px;">
<span><img alt="behance" height="32" src="https://img.mysignature.io/addons/v2/behance_v1_shape3_i.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 11px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
<td style="padding: 11px 4px 4px 0px; margin: 0.1px;">
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
    name: 'Template174',
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
    