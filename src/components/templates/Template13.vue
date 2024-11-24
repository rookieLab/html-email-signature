<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img alt="Happy Holidays!"
                        src="https://img.mysignature.io/a/v1/a/d/2/ad265583-4e96-5468-af4a-5afbef9ddd46.png"
                        width="500" />
                </td>
            </tr>
        </table>
        <table cellpadding="0" style="border-collapse: collapse; font-size: 13.8px;" width="400">
            <tr>
                <td style="margin: 0.1px; padding: 0px; cursor: pointer;">
                    <img alt=' "created with MySignature.io"'
                        src="https://img.mysignature.io/p/6/d/9/6d97983b-3c40-5854-bf98-c9511022f270.png?time=1709109843"
                        style="display: block; min-width: 144px;" width="144" />
                </td>
            </tr>
            <tr>
                <td
                    style='margin: 0.1px; padding: 10px 10px 0px 0px; font: 17.9px / 22.8px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1); letter-spacing: 0.4pt; cursor: pointer;'>
                    <span
                        style="font-weight: 600; color: rgb(32, 142, 192); text-transform: uppercase; cursor: pointer;">Gunner
                        Lee</span>
                </td>
            </tr>
            <tr>
                <td
                    style='margin: 0.1px; padding: 5px 0px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(39, 39, 39);'>
                    <span style="cursor: pointer;">Nurse at Private Clinic
                    </span><span style="cursor: pointer;"></span>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 15px 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td height="1"
                                style='margin: 0.1px; padding: 0px; border-top: 2px solid rgb(32, 142, 192); font: 1px / 1px "Palatino Linotype", "Book Antiqua", Palatino, serif; width: 30px;'>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td
                    style='margin: 0.1px; padding: 1px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                    <span style="font-weight: 600;">E: </span><span
                        style='color: rgb(39, 39, 39); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>lee@mysignature.io</span>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td
                    style='margin: 0.1px; padding: 1px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                    <span style="font-weight: 600;">W: </span><span
                        style='color: rgb(39, 39, 39); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>mysignature.io</span>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td
                    style='margin: 0.1px; padding: 1px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                    <span style="font-weight: 600;">T: </span><span
                        style='color: rgb(39, 39, 39); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>2376-987-021</span>
                </td>
            </tr>
        </table>
        <div>
            <table cellpadding="0" style="border-collapse: collapse;" width="500">
                <tr>
                    <td style="padding: 9px 10px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <span><img alt="View reviews about me"
                                src="https://img.mysignature.io/a/v1/9/b/2/9b23132a-6332-53d5-bcfd-6d0688359d0b.png"
                                style="max-width: 490px; display: block;" width="221" /></span>
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                         </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { shallowRef, ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
import * as iconComponents from '@/components/svg-icon-a'
import jsonData from '@/stores/data.json'

export default {
    name: 'Template13',
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