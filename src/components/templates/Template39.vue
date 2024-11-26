<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" style="border-collapse: collapse; font-size: 14.4px;" width="500">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <Avatar :data="editing.Image" :styles="{ padding: '0px 12px 0px 0px' }" valign="top" />
                                <td style='border-left: 1px solid rgb(176, 70, 70); margin: 0.1px; padding: 0px 0px 0px 12px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'
                                    valign="top">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tr>
                                            <td
                                                style='margin: 0.1px; padding: 0px 0px 8px; font: 18.7px / 23.8px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
                                                <span
                                                    style="font-weight: 600; color: rgb(176, 70, 70); cursor: pointer;">Antoni
                                                    Clements</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style='margin: 0.1px; padding: 0px 0px 8px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
                                                <span style="color: rgb(0, 0, 1); cursor: pointer;">Social
                                                    Worker</span>
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td
                                                style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
                                                <span
                                                    style="color: rgb(176, 70, 70); font-weight: 600;">phone: </span><span
                                                    style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>+57-366-274-45</span>
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td
                                                style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
                                                <span
                                                    style="color: rgb(176, 70, 70); font-weight: 600;">email: </span><span
                                                    style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>a.clements@mysignature.io</span>
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td
                                                style='margin: 0.1px; padding: 0px; font: 14.4px / 18.3px "Trebuchet MS", Helvetica, sans-serif; color: rgb(0, 0, 1);'>
                                                <span
                                                    style="color: rgb(176, 70, 70); font-weight: 600;">skype: </span><span
                                                    style='color: rgb(0, 0, 1); text-decoration: none; font-family: "Trebuchet MS", Helvetica, sans-serif;'>antoni_clements</span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 12px 4px 4px 0px; margin: 0.1px;">
                        <span><img alt="patreon" height="37"
                                src="https://img.mysignature.io/addons/v2/patreon_v3_shape2_i.png"
                                style="display: block;" width="130" /></span>
                    </td>
                    <td style="padding: 12px 4px 4px 0px; margin: 0.1px;">

                    </td>
                    <td style="padding: 12px 4px 4px 0px; margin: 0.1px;">

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

export default {
    name: 'Template39',
    mixins: [myMixin]
}
</script>
<style scoped></style>