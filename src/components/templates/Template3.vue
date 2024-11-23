<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img alt="Best wishes," :src="editing.Addons?.signOff?.img" width="500" />
                </td>
            </tr>
        </table>
        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.8px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="margin: 0.1px; padding: 0px;" valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 0px 0px 2px; font: 15.4px / 19.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span style="color: rgb(0, 0, 1); font-weight: 600; cursor: pointer;">
                                                {{ editing.general?.name }}
                                                <!-- VANESSA SLATER -->
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 0px 0px 10px; font: 600 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span style="cursor: pointer;">
                                                {{ editing.general?.position }}
                                                <!-- REALTOR in Skyline Realty -->
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style='margin: 0.1px; padding: 1px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span
                                                style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>
                                                {{ editing.general?.phone }}
                                                <!-- +1 983 333 3739 -->
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style='margin: 0.1px; padding: 1px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span
                                                style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>
                                                {{ editing.general?.email }}
                                                <!-- vanessa@skyline.com -->
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style='margin: 0.1px; padding: 1px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span
                                                style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>
                                                {{ editing.general?.website }}
                                                <!-- mysignature.io -->
                                            </span>
                                        </td>
                                    </tr><!-- -->
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 10px 0px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td v-for="icon in editing.socialIcons"
                                                        style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">


                                                        <component :is="socialIconsMap[icon.name]" :url="icon.url"
                                                            :shape="editing.design.iconsShape"
                                                            :size="editing.design.iconsSize"
                                                            :color="editing.design.iconsType === 'branded' ? undefined : editing.design.iconsColor"
                                                            :background="editing.design.iconsType === 'branded' ? undefined : editing.design.iconsBackground" />

                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="margin: 0.1px; padding: 0px 0px 0px 15px; cursor: pointer;" valign="top">
                                <img alt=' "created with MySignature.io"'
                                    src="https://img.mysignature.io/p/9/7/8/978bfbea-ac34-57fd-b81a-9e0edf7e0eeb.png?time=1709108740"
                                    style="display: block; min-width: 134px;" width="134" />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr><!-- -->
        </table>
        <div>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
                        <span><img alt="amazon" height="32"
                                src="https://img.mysignature.io/addons/v2/amazon_shape2_white.png"
                                style="display: block;" width="112" /></span>
                    </td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
                        <span><img alt="ebay" height="32"
                                src="https://img.mysignature.io/addons/v2/ebay_shape2_white.png" style="display: block;"
                                width="112" /></span>
                    </td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
                        <!-- -->
                    </td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;">
                        <!-- -->
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
                        <span><img alt="created with MySignature.io"
                                src="https://img.mysignature.io/b/9/7/8/978bfbea-ac34-57fd-b81a-9e0edf7e0eeb.png?time=1709108740"
                                style="display: block;" valign="top" width="317" /></span>
                    </td>
                </tr>
            </table>
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
    name: 'Template3',
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