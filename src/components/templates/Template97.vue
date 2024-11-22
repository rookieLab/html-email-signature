
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.4px;" width="400">
<tr>
<td style="margin: 0.1px; padding: 0px; cursor: pointer;">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/e/3/9/e394c85b-533c-548b-8725-1063d1b2177f.png?time=1709552888" style="display: block; min-width: 143px;" width="143"/>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 10px 10px 0px 0px; font: 17.5px / 22.2px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1); letter-spacing: 0.4pt; cursor: pointer;'>
<span style="font-weight: 600; color: rgb(248, 25, 25); text-transform: uppercase; cursor: pointer;">Lenny
                                                        Logan</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 13.4px / 17.1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1);'>
<span style="cursor: pointer;"></span><!-- --><span style="cursor: pointer;">Chemistry teacher</span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 15px 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td height="1" style='margin: 0.1px; padding: 0px; border-top: 2px solid rgb(248, 25, 25); font: 1px / 1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; width: 30px;'>
</td>
</tr>
</table>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1);'>
<span style="font-weight: 600;">E: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;'>logan@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1);'>
<span style="font-weight: 600;">W: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;'>mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1);'>
<!-- --><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;'></span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1);'>
<!-- --><span style="color: rgb(0, 0, 1);"></span>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 1px 0px; font: 13.4px / 17.1px "Lucida Sans Unicode", "Lucida Grande", sans-serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(7, 7, 7); font-weight: 600; cursor: pointer;">Virtual
                                                        School Tour</span><!-- --><span style="color: rgb(0, 0, 0); font-weight: 600; cursor: pointer;"></span>
</td>
</tr><!-- --><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="padding: 13px 4px 4px 0px; margin: 0.1px;">
<span><img alt="youtube" height="37" src="https://img.mysignature.io/addons/v2/youtube_v1_shape2_i.png" style="display: block;" width="130"/></span>
</td>
<td style="padding: 13px 4px 4px 0px; margin: 0.1px;">
<!-- -->
</td>
<td style="padding: 13px 4px 4px 0px; margin: 0.1px;">
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
    name: 'Template97',
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
    