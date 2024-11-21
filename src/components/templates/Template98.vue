
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 10.2px;">
<tr>
<td align="center" style="margin: 0.1px; padding: 0px 0px 13px; cursor: pointer;">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/2/b/0/2b05670f-e3b9-588a-97d2-acfc0ec5f76a.png?time=1709555010" style="display: block; min-width: 156px;" width="156"/>
</td>
</tr>
<tr>
<td align="center" style="margin: 0.1px; padding: 0px 0px 5px; font: 13.3px / 16.9px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="font-weight: 600; color: rgb(10, 50, 20); cursor: pointer;">JOHNATHAN
                                                        POPE</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td align="center" style="margin: 0.1px; padding: 0px 0px 5px; font: 600 10.2px / 13.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">ENGLISH TEACHER
                                                        |</span> <span style="cursor: pointer;">AMBLETON HIGH
                                                        SCHOOL</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td align="center" style="margin: 0.1px; padding: 5px 20px; font: 10.2px / 13.1px Verdana, Geneva, sans-serif; color: rgb(10, 50, 20); border-bottom: 1px solid rgb(235, 228, 228);">
<span>mobile: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">+1
                                                        729 855
                                                        4555</span>  <span>email: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">pope@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td align="center" style="margin: 0.1px; padding: 5px 20px; font: 10.2px / 13.1px Verdana, Geneva, sans-serif; color: rgb(10, 50, 20); border-bottom: 1px solid rgb(235, 228, 228);">
<span>website: </span><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>  <span>address: </span><span style="color: rgb(0, 0, 1);">10 California st, fl
                                                        6</span>
</td>
</tr><!-- --><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr>
<td style="padding: 15px 10px 0px 0px; margin: 0.1px; cursor: pointer;">
<img alt="Join our Facebook group" src="https://img.mysignature.io/a/v1/9/7/8/9786bb50-268c-5fcb-b51c-2f92e06017aa.png" style="max-width: 490px; display: block;" width="324"/>
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 17px 4px 4px 0px; margin: 0.1px;">
<span><img alt="facebook" height="30" src="https://img.mysignature.io/addons/v2/facebook_v1_shape3_i.png" style="display: block;" width="105"/></span>
</td>
<td style="padding: 17px 4px 4px 0px; margin: 0.1px;">
<span><img alt="instagram" height="30" src="https://img.mysignature.io/addons/v2/instagram_v1_shape3_i.png" style="display: block;" width="105"/></span>
</td>
<td style="padding: 17px 4px 4px 0px; margin: 0.1px;">
<span><img alt="youtube" height="30" src="https://img.mysignature.io/addons/v2/youtube_v1_shape3_i.png" style="display: block;" width="105"/></span>
</td>
<td style="padding: 17px 4px 4px 0px; margin: 0.1px;">
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
    name: 'Template98',
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
    