<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.6px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="middle" />
                            <td valign="middle"
                                style="margin: 0.1px; padding: 0px; font: 12.6px / 16.1px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                <SocialShare :data="editing.socialIcons" :design="editing.design" layout="column" />

                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 2px; font: 15.2px / 19.3px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(15, 15, 15); font-weight: 600; cursor: pointer;">Maya
                                                Beard</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 12.6px / 16.1px 'Times New Roman', Times, serif; color: rgb(0, 0, 0);">
                                            <span style="cursor: pointer;">Preschool Teacher</span>
                                            <span style="cursor: pointer;"></span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'row-left-1'"
                                         :styles="{ ...textStyle, padding: '1px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="30" style="padding: 15px 0px 0px; margin: 0.1px;"><img
                            src="https://img.mysignature.io/addons/v2/green-earth.png"
                            alt="Please don’t print this email" style="display: block;"></td>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 13.6px / 17.3px 'Times New Roman', Times, serif; color: gray;">
                        Please don’t print this email</td>
                </tr>
            </table>
            <Banner :data="editing?.Image" type="table" :styles="{ paddingTop: '10px' }"></Banner>

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

    </div>
</template>
<script>

import { myMixin } from './mixin.js'

export default {
    name: 'Template34',
    mixins: [myMixin]
}
</script>
<style scoped></style>