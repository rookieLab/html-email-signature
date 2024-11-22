
<template>
 <div><!-- -->
<table cellpadding="0" style="border-collapse: collapse; font-size: 13.6px;" width="400">
<tr>
<td style="margin: 0.1px; padding: 0px; cursor: pointer;">
<img alt=' "created with MySignature.io"' src="https://img.mysignature.io/p/1/1/8/1187db6d-5a18-58c1-8259-1ccb4f6b9a5b.png?time=1724157940" style="display: block; min-width: 137px;" width="137"/>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 10px 10px 0px 0px; font: 17.7px / 22.5px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1); letter-spacing: 0.4pt; cursor: pointer;">
<span style="font-weight: 600; color: rgb(47, 54, 117); text-transform: uppercase; cursor: pointer;">Erick
                                                        Griffin</span><!-- --><!-- -->
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 5px 0px 0px; font: 13.6px / 17.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<span style="cursor: pointer;">Dentist</span><!-- --><span style="cursor: pointer;"></span>
</td>
</tr>
<tr>
<td style="margin: 0.1px; padding: 15px 0px;">
<table cellpadding="0" style="border-collapse: collapse;">
<tr>
<td height="1" style="margin: 0.1px; padding: 0px; border-top: 2px solid rgb(47, 54, 117); font: 1px / 1px Tahoma, Geneva, sans-serif; width: 30px;">
</td>
</tr>
</table>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.6px / 17.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<!-- --><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">222
                                                        335 3632</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.6px / 17.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<!-- --><span style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">mysignature.io</span>
</td>
</tr>
<tr style="cursor: pointer;">
<td style="margin: 0.1px; padding: 1px 0px; font: 13.6px / 17.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
<!-- --><span style="color: rgb(0, 0, 1);">101 Hope Ave,
                                                        Boston,
                                                        USA</span>
</td>
</tr><!-- --><!-- -->
</table>
<div>
<table cellpadding="0" style="border-collapse: collapse;" width="500">
<tr>
<td style="padding: 11px 10px 0px 0px; margin: 0.1px; cursor: pointer;">
<span><img alt="Read reviews" src="https://img.mysignature.io/a/v1/a/b/7/ab7ff4a5-1409-55fc-a047-1337e1be0446.png" style="max-width: 490px; display: block;" width="158"/></span>
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
    name: 'Template72',
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
    