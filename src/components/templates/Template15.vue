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
                                    <Avatar :align="center" :data="editing.Image"
                                        :styles="{ padding: '0px 0px 10px' }" />

                                </table>
                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px 0px 0px 20px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <Contact :data="editing.general?.contacts" :layout="'column'"  :styles="{ ...textStyle, padding: '5px 0px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

                                    <tr>
                                        <td style="margin: 0.1px; padding: 15px 0px 0px;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td
                                                        style="margin: 0.1px; padding: 5px 0px 0px; font: 13.6px / 17.3px 'Arial Black', Gadget, sans-serif; color: rgb(0, 0, 1);">
                                                        <table cellpadding="0" style="border-collapse: collapse;">
                                                            <tr>
                                                                <td align="left"
                                                                    style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                                                                    <SocialShare :data="editing.socialIcons"
                                                                        :design="editing.design" />
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