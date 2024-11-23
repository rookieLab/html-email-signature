<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img width="500" :src="editing.Addons?.signOff?.img" alt="Best regards,">
                </td>
            </tr>
        </table>
        <table cellpadding="0"
            style="border-collapse: collapse; font-size: 11.1px; background-color: rgb(255, 192, 104);">
            <tr>
                <td
                    style="margin: 0.1px; padding: 20px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;"><img
                                    src="https://img.mysignature.io/p/f/0/1/f01ae626-b336-56d7-9604-bcd3adf615ff.png?time=1708944713"
                                    width="106" alt=" &quot;created with MySignature.io&quot;"
                                    style="display: block; min-width: 106px;"></td>
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                            <span style="font-weight: 600; cursor: pointer;">Dr. Terrence Baker •
                                                Pediatrician</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); text-transform: uppercase; border-top: 1px solid rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">Mount Sinai
                                                Hospital</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">+1
                                                (684) 555-0102</span>&nbsp;|&nbsp;<span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">+1
                                                (567) 321-7876</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">
                                                name@example.com </span>&nbsp;|&nbsp;<span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span use-font-color="true">654 Health Heights, NY 11542,
                                                USA</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td
                                                        style="margin: 0.1px; padding: 0px 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                        <span
                                                            style="border-radius: 50%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(0, 0, 0); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                viewBox="0 0 1024 1024"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                style="position: relative; top: 4.6px; width: 13.8px;">
                                                                <path
                                                                    d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                                                                    fill="#FFC068"></path>
                                                            </svg></span>
                                                    </td>
                                                    <td
                                                        style="margin: 0.1px; padding: 0px 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                        <span
                                                            style="border-radius: 50%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(0, 0, 0); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                viewBox="0 0 1053 1024"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                style="position: relative; top: 4.6px; width: 13.8px;">
                                                                <path
                                                                    d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                                                                    fill="#FFC068"></path>
                                                            </svg></span>
                                                    </td>
                                                    <td
                                                        style="margin: 0.1px; padding: 0px 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                        <span
                                                            style="border-radius: 50%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(0, 0, 0); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                viewBox="0 0 1024 1024"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                style="position: relative; top: 4.6px; width: 13.8px;">
                                                                <path
                                                                    d="M340.811 240.336v669.632c0 17.697-8.564 34.253-27.974 34.253-6.85 0-13.13-1.712-18.839-4.567l-265.455-133.013c-15.984-7.992-28.543-28.543-28.543-45.669v-650.793c0-14.272 6.85-27.402 22.264-27.402 9.134 0 17.126 4.567 25.118 8.563l291.715 146.143c0.57 0.57 1.712 2.284 1.712 2.854v0zM377.345 297.995l304.845 494.374-304.845-151.852v-342.523zM1023.001 308.27v601.698c0 18.839-10.846 31.969-29.685 31.969-9.705 0-18.839-2.854-26.831-7.422l-251.754-125.591 308.27-500.654zM1021.289 239.766c0 2.284-295.141 481.244-317.975 517.78l-222.64-361.933 184.962-300.849c6.28-10.276 17.697-15.984 29.685-15.984 5.138 0 10.276 1.142 14.843 3.426l308.841 154.135c1.142 0.57 2.284 1.712 2.284 3.426v-0.001z"
                                                                    fill="#FFC068"></path>
                                                            </svg></span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <table width="436" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                        IMPORTANT: The contents of this email and any attachments are confidential. It is strictly
                        forbidden to share any part of this message with any third party, without a written consent of
                        the sender. If you received this message by mistake, please reply to this message and follow
                        with its deletion, so that we can ensure such a mistake does not occur in the future.</td>
                </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
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
    name: 'Template7',
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