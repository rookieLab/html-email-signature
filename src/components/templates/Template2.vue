<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;" v-if="editing.Addons?.signOff?.img">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img width="500" :src="editing.Addons?.signOff?.img" alt="Regards,">
                </td>
            </tr>
        </table>
        <table cellpadding="0" style="border-collapse: collapse; font-size: 11.8px;">
            <tr>
                <td align="center" style="margin: 0.1px; padding: 0px 0px 13px; cursor: pointer;">
                    <img :src="editing.Image?.avatarImg" width="100" alt=" &quot;created with MySignature.io&quot;"
                        style="display: block; min-width: 100px;">
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px 0px 5px; font: 15.4px / 19.6px Georgia, serif; color: rgb(0, 0, 1);">
                    <span style="font-weight: 600; color: rgb(9, 125, 94); cursor: pointer;">
                        {{ editing.general?.name }}
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px 0px 5px; font: 600 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <span style="cursor: pointer;">{{ editing.general?.position }}&nbsp;</span>
                    <span style="cursor: pointer;">{{ editing.general?.company }}</span>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td align="center"
                    style="margin: 0.1px; padding: 5px 20px; font: 11.8px / 15.1px Georgia, serif; color: rgb(9, 125, 94); border-bottom: 1px solid rgb(235, 228, 228);">
                    <span>email:&nbsp;</span>
                    <a href="mailto:nicksterlin@mysignature.io" target="_blank"
                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">nicksterlin@mysignature.io</a>
                    &nbsp;&nbsp;
                    <span>skype:&nbsp;</span>
                    <a href="skype: sterlin?chat" target="_blank"
                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;"> sterlin</a>
                
                    </td>
            </tr>
            <tr style="cursor: pointer;">
                <td align="center"
                    style="margin: 0.1px; padding: 5px 20px; font: 11.8px / 15.1px Georgia, serif; color: rgb(9, 125, 94); border-bottom: 1px solid rgb(235, 228, 228);">
                    <span>website:&nbsp;</span>
                    <a href="https://baidu.com" target="_blank"
                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">baidu.com</a>&nbsp;&nbsp;
                    
                        <span>phone&nbsp;</span>
                    <a href="tel:phone value" target="_blank"
                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">phone value</a>
                
                    </td>
            </tr>
            <tr style="cursor: pointer;">
                <td align="center"
                    style="margin: 0.1px; padding: 5px 20px; font: 11.8px / 15.1px Georgia, serif; color: rgb(9, 125, 94); border-bottom: 1px solid rgb(235, 228, 228);">
                    <span>address&nbsp;</span>
                    <span style="color: rgb(0, 0, 1);">address</span>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td align="center"
                    style="margin: 0.1px; padding: 5px 20px; font: 11.8px / 15.1px Georgia, serif; color: rgb(9, 125, 94); border-bottom: 1px solid rgb(235, 228, 228);">
                    <span>work phone&nbsp;</span>
                    <a href="tel:phone" target="_blank"
                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: Georgia, serif;">phone</a>
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" align="center" style="border-collapse: collapse;">
                        <tr>
                            <td
                                style="margin: 0.1px; padding: 5px 20px; font: 11.8px / 15.1px Georgia, serif; color: rgb(9, 125, 94); border-bottom: 1px solid rgb(235, 228, 228);">
                                <span style="color: rgb(0, 0, 1); font-weight: 600; cursor: pointer;">Join my adventures
                                    for travel </span><span
                                    style="color: rgb(195, 95, 62); font-weight: 600; cursor: pointer;"></span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" align="center" style="border-collapse: collapse;">
                        <tr>
                            <td style="margin: 0.1px; padding: 0px 2.5px; cursor: pointer;"><span
                                    style="border-radius: 50%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(24, 119, 242); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                        style="position: relative; top: 4.6px; width: 13.8px;">
                                        <path
                                            d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                                            fill="#ffffff"></path>
                                    </svg></span></td>
                            <td style="margin: 0.1px; padding: 0px 2.5px; cursor: pointer;"><span
                                    style="border-radius: 50%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(0, 0, 0); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                        style="position: relative; top: 4.6px; width: 13.8px;">
                                        <path
                                            d="M959.851 414.292c-8.556 0.813-17.146 1.239-25.742 1.277-94.288 0.013-182.228-46.466-233.877-123.613v420.932c0 171.822-142.425 311.111-318.116 311.111s-318.116-139.289-318.116-311.111c0-171.822 142.425-311.111 318.116-311.111 6.641 0 13.132 0.584 19.661 0.985v153.312c-6.529-0.766-12.945-1.934-19.661-1.934-89.669 0-162.36 71.090-162.36 158.785s72.691 158.785 162.36 158.785c89.686 0 168.888-69.103 168.888-156.814l1.567-714.895h149.974c14.142 131.528 122.584 234.263 257.455 243.905v170.387z"
                                            fill="#ffffff"></path>
                                    </svg></span></td>
                            <td style="margin: 0.1px; padding: 0px 2.5px; cursor: pointer;"><span
                                    style="border-radius: 50%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(0, 136, 204); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                        style="position: relative; top: 4.6px; width: 13.8px;">
                                        <path
                                            d="M1021.082 142.656l-154.528 733.189c-11.658 51.746-42.061 64.626-85.265 40.247l-235.45-174.558-113.61 109.932c-12.573 12.649-23.088 23.228-47.319 23.228l16.916-241.253 436.382-396.723c18.973-17.019-4.115-26.448-29.488-9.429l-539.477 341.756-232.249-73.135c-50.519-15.869-51.433-50.826 10.515-75.205l908.424-352.106c42.061-15.869 78.864 9.429 65.149 74.055z"
                                            fill="#ffffff"></path>
                                    </svg></span></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/instagram_v1_shape3_i.png" height="28"
                                width="98" alt="instagram" style="display: block;"></span></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/twitter_v1_shape3_i.png" height="28"
                                width="98" alt="twitter" style="display: block;"></span></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/youtube_v1_shape3_i.png" height="28"
                                width="98" alt="youtube" style="display: block;"></span></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"></td>
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
    name: 'Template2',
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
            this.initEditingStore();
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