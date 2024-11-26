<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 13.6px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="middle"
                                style="margin: 0.1px; padding: 0px 20px 0px 0px; border-right: 2px solid rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <Avatar :align="center" :data="editing.Image" :styles="{ padding: '0px 0px 10px' }" />
                                    <!-- <tr>
                                        <td align="center"
                                            style="margin: 0.1px; padding: 0px 0px 10px; cursor: pointer;"><img
                                                src="https://img.mysignature.io/p/b/9/6/b965d2dd-7d06-5ac0-978f-850927afddc8.png?time=1709120995"
                                                width="155" alt=" &quot;created with MySignature.io&quot;"
                                                style="display: block; min-width: 155px; margin: 0px auto;"></td>
                                    </tr> -->
                                </table>
                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px 0px 0px 20px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1); white-space: nowrap;">
                                            <span
                                                style="color: rgb(14, 14, 40); text-decoration: none; font-family: &quot;Arial Black&quot;, Gadget, sans-serif;">mayo@mysignature.io</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1); white-space: nowrap;">
                                            <span
                                                style="color: rgb(14, 14, 40); text-decoration: none; font-family: &quot;Arial Black&quot;, Gadget, sans-serif;">+1
                                                987 223 7332</span></td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="color: rgb(14, 14, 40);">Rochester, Minnesota,
                                                USA</span></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 15px 0px 0px;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td
                                                        style="margin: 0.1px; padding: 5px 0px 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1);">
                                                        <table cellpadding="0" style="border-collapse: collapse;">
                                                            <tr>
                                                                <td
                                                                    style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                    <span
                                                                        style="border-radius: 15%; width: 26px; height: 26px; display: block; text-align: center; background-color: rgb(0, 0, 1); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                            viewBox="0 0 1024 1024"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            style="position: relative; top: 5.2px; width: 15.6px;">
                                                                            <path
                                                                                d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z"
                                                                                fill="#94E7FF"></path>
                                                                        </svg></span></td>
                                                                <td
                                                                    style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                    <span
                                                                        style="border-radius: 15%; width: 26px; height: 26px; display: block; text-align: center; background-color: rgb(0, 0, 1); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                            viewBox="0 0 1024 1024"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            style="position: relative; top: 5.2px; width: 15.6px;">
                                                                            <path
                                                                                d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                                                                                fill="#94E7FF"></path>
                                                                        </svg></span></td>
                                                                <td
                                                                    style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.6px / 17.3px &quot;Arial Black&quot;, Gadget, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                    <span
                                                                        style="border-radius: 15%; width: 26px; height: 26px; display: block; text-align: center; background-color: rgb(0, 0, 1); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                            viewBox="0 0 1053 1024"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            style="position: relative; top: 5.2px; width: 15.6px;">
                                                                            <path
                                                                                d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                                                                                fill="#94E7FF"></path>
                                                                        </svg></span></td>
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
                </td>
            </tr>
        </table>
        <div>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 7px 0px 0px; margin: 0.1px; cursor: pointer;"><span><img
                                src="https://img.mysignature.io/a/v1/b/e/0/be0c3368-848b-5af4-bf39-590a96ab3e63.png"
                                alt="Meet me on Skype" width="165" style="display: block;"></span></td>
                </tr>
            </table>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 7px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><span><img
                                alt="Book Your Appointment Today"
                                src="https://img.mysignature.io/a/v1/6/7/0/67044215-58e5-51b0-adf1-5c0d4e8f00c5.png"
                                style="max-width: 490px; display: block;" width="258"></span></td>
                </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.Disclaimer.enable">
            <Disclaimer :data="editing.Addons?.Disclaimer" :styles="{ fontFamily: fontFamily }"></Disclaimer>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.social.enable">
            <SocialShareLarge :data="editing.Addons?.social" />
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.video.enable">
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
        <div v-if="editing.Addons?.marketplace.enable">
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
    name: 'Template15',
    mixins: [myMixin]
}
</script>
<style scoped></style>