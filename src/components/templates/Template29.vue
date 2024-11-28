<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />

        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.8px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="middle" />
                            <td valign="middle"
                                style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; color: rgb(0, 0, 1);">
                                <SocialShare :data="editing.socialIcons" :design="editing.design" layout="column"
                                    :styles="{ padding: '4px 15px 0px 0px' }" />

                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 2px; font: 15.4px / 19.5px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(216, 29, 84); font-weight: 600; cursor: pointer;">Shania
                                                Mason</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 12.8px / 16.3px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;"></span><span
                                                style="cursor: pointer;">Instagram Influencer</span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'" :styles="{ ...textStyle, padding: '0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />


                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(239, 91, 47); font-weight: 600; cursor: pointer;">Download
                                                my </span>&nbsp;<span
                                                style="color: rgb(216, 29, 84); font-weight: 600; cursor: pointer;">MEDIAKIT</span>
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
                    <td style="padding: 14px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/instagram_v3_shape2_b.png" height="43"
                                width="151" alt="instagram" style="display: block;"></span></td>
                    <td style="padding: 14px 4px 4px 0px; margin: 0.1px;"></td>
                    <td style="padding: 14px 4px 4px 0px; margin: 0.1px;"></td>
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

export default {
    name: 'Template29',
    mixins: [myMixin]
}
</script>
<style scoped></style>