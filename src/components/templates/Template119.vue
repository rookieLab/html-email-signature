
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.3px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/2/e/a/2ea3f89b-4f96-5593-aad1-667b87c5eb78.png?time=1685569257" style="display: block; min-width: 142px;" width="142"/>
</td>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px;" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px; font: 15.9px / 20.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Susie
                                                                                Larson</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 4px 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Personal
                                                                                Trainer</span> <span style="cursor: pointer;">Coachyous</span><!-- --><span style="cursor: pointer;"></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(200, 0, 76);">mobile: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">+453-509-309</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(200, 0, 76);">website: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(200, 0, 76);">email: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">rabiawade@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 13.3px / 16.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(200, 0, 76);">address: </span><span style="color: rgb(0, 0, 1);">FL,
                                                                                Bradenton,
                                                                                4245 Monroe Avenue</span>
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
<td style="padding: 9px 4px 4px 0px; margin: 0.1px;">
<span><img alt="instagram" height="40" src="https://img.mysignature.io/addons/v2/instagram_v3_shape3_i.png" style="display: block;" width="140"/></span>
</td>
<td style="padding: 9px 4px 4px 0px; margin: 0.1px;">
<span><img alt="facebook" height="40" src="https://img.mysignature.io/addons/v2/facebook_v3_shape3_i.png" style="display: block;" width="140"/></span>
</td>
<td style="padding: 9px 4px 4px 0px; margin: 0.1px;">
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
    name: 'Template119',
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
    