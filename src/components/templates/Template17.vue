<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0"
            style="border-collapse: collapse; font-size: 13.1px; background-color: rgb(3, 115, 177);">
            <tr>
                <td
                    style='margin: 0.1px; padding: 20px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'>
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style='margin: 0.1px; padding: 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(0, 0, 1);'
                                valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 0px 0px 5px; font: 16.8px / 21.4px "Times New Roman", Times, serif; color: rgb(255, 255, 255); cursor: pointer;'>
                                            <span style="font-weight: 600; cursor: pointer;">John
                                                Smith</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 5px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255); text-transform: uppercase; border-top: 1px solid rgb(255, 255, 255);'>
                                            <span style="cursor: pointer;">Unemployed</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style='margin: 0.1px; padding: 5px 0px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255);'>
                                            <span
                                                style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Times New Roman", Times, serif;'>+1
                                                757 3145
                                                2220</span> | <span
                                                style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Times New Roman", Times, serif;'>
                                                johnsmith@mysignature.io</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style='margin: 0.1px; padding: 5px 0px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255);'>
                                            <span
                                                style='color: rgb(255, 255, 255); text-decoration: none; font-family: "Times New Roman", Times, serif;'></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 10px 0px 0px; font: 13.1px / 16.5px "Times New Roman", Times, serif; color: rgb(255, 255, 255);'>
                                            <span
                                                style="color: rgb(255, 255, 255); font-weight: 400; cursor: pointer;">Connect
                                                with me on
                                                LinkedIn:</span><span
                                                style="color: rgb(255, 255, 255); font-weight: 400; cursor: pointer;"></span>
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
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    
                    <td style="padding: 14px 4px 4px 0px; margin: 0.1px;">
                        <span><img alt="linkedin" height="32"
                                src="https://img.mysignature.io/addons/v2/linkedin_v2_shape1_i.png"
                                style="display: block;" width="112" /></span>
                    </td>
                    <td style="padding: 14px 4px 4px 0px; margin: 0.1px;">

                    </td>
                    <td style="padding: 14px 4px 4px 0px; margin: 0.1px;">

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
    name: 'Template17',
    mixins: [myMixin]
}
</script>
<style scoped></style>