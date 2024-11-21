
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 11.4px;" width="550">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 20px 0px 0px; border-right: 3px solid rgb(73, 132, 204);" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px; font: 15.9px / 20.2px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(73, 132, 204); cursor: pointer;">
                                                                                David
                                                                                Barrett</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 200 11.4px / 14.4px Georgia, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                            Wake Blue ◮ Owner </td>
</tr><!-- --><!-- -->
</table>
</td>
<td style="margin: 0.1px; padding: 0px 0px 0px 20px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 11.4px / 14.4px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(73, 132, 204); font-weight: 600;">◭  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">+543-5090-19</span>  <span style="color: rgb(73, 132, 204); font-weight: 600;">◭  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">barrett@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 2px 0px 0px; font: 11.4px / 14.4px Georgia, serif; color: rgb(0, 0, 1);">
<span style="color: rgb(73, 132, 204); font-weight: 600;">◭  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">+546-5634-33</span>  <span style="color: rgb(73, 132, 204); font-weight: 600;">◭  </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">mysignature.io</span>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 15px 0px 0px; font: 11.4px / 14.4px Georgia, serif; color: rgb(0, 0, 1); cursor: pointer;">
<img alt="created with MySignature.io" src="https://img.mysignature.io/b/c/8/b/c8bbf075-4974-5d7a-a213-eab398531b5a.png?time=1709627817" style="display: block;" valign="top" width="377"/>
</td>
</tr>
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 15px 4px 4px 0px; margin: 0.1px;">
<span><img alt="facebook" height="35" src="https://img.mysignature.io/addons/v2/facebook_v2_shape1_i.png" style="display: block;" width="123"/></span>
</td>
<td style="padding: 15px 4px 4px 0px; margin: 0.1px;">
<span><img alt="twitter" height="35" src="https://img.mysignature.io/addons/v2/twitter_v2_shape1_i.png" style="display: block;" width="123"/></span>
</td>
<td style="padding: 15px 4px 4px 0px; margin: 0.1px;">
<span><img alt="linkedin" height="35" src="https://img.mysignature.io/addons/v2/linkedin_v2_shape1_i.png" style="display: block;" width="123"/></span>
</td>
<td style="padding: 15px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse;" width="388">
<tr>
<td style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Georgia, serif; color: rgb(104, 106, 109); cursor: pointer;">
                                                        IMPORTANT: The contents of this email and any
                                                        attachments
                                                        are
                                                        confidential. It is strictly forbidden to share any
                                                        part of
                                                        this
                                                        message with any third party, without a written
                                                        consent of
                                                        the
                                                        sender. If you received this message by mistake,
                                                        please
                                                        reply to
                                                        this message and follow with its deletion, so that
                                                        we can
                                                        ensure
                                                        such a mistake does not occur in the future.</td>
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
    name: 'Template100',
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
    