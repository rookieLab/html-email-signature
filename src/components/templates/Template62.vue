
<template>
 <div>
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
<img alt="Sincerely," src="https://img.mysignature.io/a/v1/6/b/9/6b9eeae4-dad1-50b4-bb08-2551dfbf722a.png" width="500"/>
</td>
</tr>
</table>
<table cellpadding="0" style="border-collapse: collapse; font-size: 14.4px;" width="400">
<tr>
<td style="margin: 0.1px; padding: 0px; cursor: pointer;">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/2/d/1/2d13c468-ba78-5da5-933d-69b0d142c106.png?time=1685569257" style="display: block; min-width: 174px;" width="174"/>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 10px 10px 0px 0px; font: 18.7px / 23.8px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1); letter-spacing: 0.4pt; cursor: pointer;'>
<span style="font-weight: 600; color: rgb(25, 149, 248); text-transform: uppercase; cursor: pointer;">Amelia
                                                        Morre</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 5px 0px 0px; font: 14.4px / 18.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
<span style="cursor: pointer;"></span><!-- --><span style="cursor: pointer;">Content Writer</span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 15px 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td height="1" style='margin: 0.1px; padding: 0px; border-top: 2px solid rgb(25, 149, 248); font: 1px / 1px "Palatino Linotype", "Book Antiqua", Palatino, serif; width: 30px;'>
</td>
</tr>
</table>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
<span style="font-weight: 600;">E: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>amelia@mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style='margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
<span style="font-weight: 600;">W: </span><span style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>mysignature.io</span>
</td>
</tr>
<tr>
<td style='margin: 0.1px; padding: 1px 0px; font: 14.4px / 18.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
<span style="color: rgb(25, 149, 248); font-weight: 600; cursor: pointer;">S</span> <span style="color: rgb(25, 149, 248); font-weight: 600; cursor: pointer;">amelia.cw</span>
</td>
</tr><!-- --><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr>
<td style="padding: 16px 10px 0px 0px; margin: 0.1px; cursor: pointer;">
<span><img alt="View my reviews at Upwork" src="https://img.mysignature.io/a/v1/7/4/9/749d472c-daa2-5f8a-bc13-b6a1b2522503.png" style="max-width: 490px; display: block;" width="226"/></span>
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
    name: 'Template62',
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
    