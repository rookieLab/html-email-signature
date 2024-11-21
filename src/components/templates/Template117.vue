
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 11.2px; background-color: rgb(0, 0, 0);">
<tr>
<td style='margin: 0.1px; padding: 20px 20px 0px; font: 11.2px / 14.2px "Arial Black", Gadget, sans-serif; color: rgb(0, 0, 1);'>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;" valign="top">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/c/1/e/c1eab45a-59c4-52da-915f-08ae4c7b3ba8.png?time=1685569257" style="display: block; min-width: 100px;" width="100"/>
</td>
<td style='margin: 0.1px; padding: 0px; font: 11.2px / 14.2px "Arial Black", Gadget, sans-serif; color: rgb(0, 0, 1);' valign="top">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style='margin: 0.1px; padding: 0px 0px 5px; font: 14.6px / 18.5px "Arial Black", Gadget, sans-serif; color: rgb(255, 255, 255); cursor: pointer;'>
<span style="font-weight: 600; cursor: pointer;">Claude
                                                                                Boucher</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 5px 0px; font: 11.2px / 14.2px "Arial Black", Gadget, sans-serif; color: rgb(255, 255, 255); text-transform: uppercase; border-top: 1px solid rgb(255, 255, 255);'>
<span style="cursor: pointer;">Fashion
                                                                                Designer</span> | <span style="cursor: pointer;">Claude
                                                                                Boucher</span><!-- --><!-- -->
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 11.2px / 14.2px "Arial Black", Gadget, sans-serif; color: rgb(255, 255, 255);'>
<!-- --><span style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Arial Black", Gadget, sans-serif;'>mysignature.io</span><!-- --><!-- -->
</td>
</tr><!-- -->
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 15px 20px 20px; font: 11.2px / 14.2px "Arial Black", Gadget, sans-serif; color: rgb(0, 0, 1); cursor: pointer;'>
<span><img alt="created with MySignature.io" src="https://img.mysignature.io/b/c/1/e/c1eab45a-59c4-52da-915f-08ae4c7b3ba8.png?time=1685569257" style="display: block;" valign="top" width="382"/></span>
</td>
</tr>
</table>
<div><!-- -->
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
    name: 'Template117',
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
    