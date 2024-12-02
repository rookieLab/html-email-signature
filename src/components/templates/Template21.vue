<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />

        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 17.4px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :valign="top" :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" />

                            <td valign="top" style="margin: 0.1px; padding: 0px 15px 0px 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 0px 0px 8px; line-height: 22.2px;" :style="{
                                                fontFamily: fontFamily,
                                                fontSize: editing.design?.fontSize * 1.2 + 'px',
                                                padding: '0px 0px 5px'
                                            }">
                                            <span v-if="editing.general?.name"
                                                style="font-weight: 600;  cursor: pointer;"
                                                :style="{ color: editing.design?.templateColor }">
                                                {{ editing.general?.name }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                                                {{ editing.general?.pronoun }}&nbsp;
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="margin: 0.1px; padding: 4px 0px" :style="{
                                            fontFamily: fontFamily,
                                            fontWeight: 500,
                                            fontSize: editing.design?.fontSize * 1 + 'px',
                                            color: editing.design?.color,
                                            padding: '0px 0px 5px'
                                        }">
                                            <span v-if="editing.general?.position" style="cursor: pointer;">
                                                {{ editing.general?.position }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.company" style="cursor: pointer;">
                                                {{ editing.general?.company }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.department" style="cursor: pointer;">
                                                {{ editing.general?.department }}
                                            </span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'"
                                        :styles="{ ...textStyle, padding: '0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                                            <SocialShare :data="editing.socialIcons" :design="editing.design" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td valign="middle"
                                style="border-left: 3px solid rgb(241, 225, 214); margin: 0.1px; padding: 0px 0px 0px 6px; font: 17.4px / 22.2px &quot;Times New Roman&quot;, Times, serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 4px 0px 0px; cursor: pointer;"><span
                                                style="border-radius: 0%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(241, 225, 214); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                    <path
                                                        d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                                                        fill="#000000"></path>
                                                </svg></span></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 4px 0px 0px; cursor: pointer;"><span
                                                style="border-radius: 0%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(241, 225, 214); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                    viewBox="0 0 1053 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                    <path
                                                        d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                                                        fill="#000000"></path>
                                                </svg></span></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 4px 0px 0px; cursor: pointer;"><span
                                                style="border-radius: 0%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(241, 225, 214); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                    <path
                                                        d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z"
                                                        fill="#000000"></path>
                                                </svg></span></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 14px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><img
                            alt="Join my culinary adventures on Instagram"
                            src="https://img.mysignature.io/a/v1/4/f/0/4f09b08f-cbad-5a1c-b7e3-c072fd1878b5.png"
                            style="max-width: 490px; display: block;" width="334"></td>
                </tr>
            </table>
            <table width="360" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px &quot;Times New Roman&quot;, Times, serif; color: rgb(162, 158, 158); cursor: pointer;">
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
        <div v-if="editing.Addons?.Disclaimer?.enable">
            <Disclaimer :data="editing.Addons?.Disclaimer" :styles="{ fontFamily: fontFamily }"></Disclaimer>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.social?.enable">
            <SocialShareLarge :data="editing.Addons?.social" />
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.video?.enable">
            <Conference :data="editing.Addons?.video"></Conference>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.calender?.enable">
            <Calender :calender="editing.Addons?.calender" :design="editing.design" />
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.marketplace?.enable">
            <Marketplace :data="editing.Addons?.marketplace" />
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">  </td>
                </tr>
            </table>
        </div>
        <div v-if="editing?.Image?.bannerImg">
            <Banner :data="editing?.Image"></Banner>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>

import { myMixin } from './mixin.js'
// 模版：显示data.json 中的数据
// 编辑，需要editingStore 来编辑
// 预览：显示store中的数据

export default {
    name: 'Template21',
    mixins: [myMixin]
}
</script>
<style scoped></style>