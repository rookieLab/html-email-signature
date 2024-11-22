
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
<img alt="Regards," src="https://img.mysignature.io/a/v1/7/c/1/7c10b5cd-24c7-56ee-9599-25e8d86538b1.png" width="500"/>
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse; font-size: 12.1px;" width="500">
<tr>
<td style="margin: 0.1px; padding: 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/2/1/7/217b1092-f3c5-56a2-af6d-b61160fb697b.png?time=1709215116" style="display: block; min-width: 117px;" width="117"/>
</td>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px;" valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Samantha
                                                                                Wilson</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 4px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Property
                                                                                Specialist</span> <span style="cursor: pointer;">Green
                                                                                Leaf
                                                                                Properties</span><!-- --><span style="cursor: pointer;"></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(91, 86, 210);">w: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(91, 86, 210);">e: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">wilson@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(91, 86, 210);">p: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">+3
                                                                                455-56-02</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="color: rgb(91, 86, 210);">a: </span><span style="color: rgb(0, 0, 1);">Richmond
                                                                                Staten
                                                                                Island, NY 10306 USA</span>
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
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<!-- -->
<tr>
<td style="padding: 5px 0px 0px; margin: 0.1px; cursor: pointer;">
<span><img alt="Let us guide you towards eco-friendly homes!" src="https://img.mysignature.io/a/v1/5/3/f/53ffb60d-bc89-5128-95f9-c7f286d83aed.png" style="display: block;" width="349"/></span>
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
<span><img alt="facebook" height="32" src="https://img.mysignature.io/addons/v2/facebook_v2_shape3_b.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
<span><img alt="twitter" height="32" src="https://img.mysignature.io/addons/v2/twitter_v2_shape3_b.png" style="display: block;" width="112"/></span>
</td>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
<td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr style="cursor: pointer;"><!-- -->
<td style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: gray;">
                                                        Save paper. Don’t print</td>
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
    name: 'Template22',
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
    