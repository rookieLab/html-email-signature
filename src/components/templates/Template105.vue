
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 14.4px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr><!-- -->
<td style="border-left: 2px solid rgb(4, 150, 147); margin: 0.1px; padding: 0px 0px 0px 9px;" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style='margin: 0.1px; padding: 0px; font: 17.3px / 22.1px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<span style='font: 17.3px / 22.1px "Times New Roman", Times, serif; color: rgb(4, 150, 147); cursor: pointer;'>Kurt
                                                                                Howard</span><!-- --><!-- -->  <span style='font: 14.4px / 18.3px "Times New Roman", Times, serif; color: rgb(0, 0, 1); cursor: pointer;'>Account
                                                                                manager</span>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 5px 0px; font: 14.4px / 18.3px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<span style="cursor: pointer;">Mulegroup</span><!-- --><!-- -->
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(0, 0, 1);">website: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Times New Roman", Times, serif;'>mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(0, 0, 1);">email: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Times New Roman", Times, serif;'>howard@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(0, 0, 1);">phone: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Times New Roman", Times, serif;'>+7-45-345-099</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(0, 0, 1);">address: </span><span style="color: rgb(0, 0, 1);">5
                                                                                Halsey St
                                                                                Brooklyn, NY 11216</span>
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
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr>
<td style='margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px "Times New Roman", Times, serif; color: rgb(4, 150, 147); cursor: pointer;'>
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
    name: 'Template105',
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
    