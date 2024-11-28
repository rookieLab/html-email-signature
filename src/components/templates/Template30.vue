<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.5px;">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <Avatar :data="editing.Image" :styles="{ padding: '0px 12px 0px 0px' }" valign="top" />
                                <!-- width="159" alt=" &quot;created with MySignature.io&quot;"
                                        style="display: block; min-width: 159px;"></td> -->
                                <td valign="top"
                                    style="border-left: 1px solid rgb(110, 76, 55); margin: 0.1px; padding: 0px 0px 0px 12px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 16.2px / 20.6px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                                <span
                                                    style="font-weight: 600; color: rgb(110, 76, 55); cursor: pointer;">Gregory
                                                    Shelton</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                                <span style="color: rgb(0, 0, 1); cursor: pointer;">Travel Blogger
                                                    |</span>&nbsp;
                                                <span style="color: rgb(0, 0, 1); cursor: pointer;">The G Word
                                                    channel</span>
                                            </td>
                                        </tr>
                                        <Contact :data="editing.general?.contacts" :layout="'column'"
                                           :styles="{ ...textStyle, padding: '0px' }"
                                            :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 12px 0px 3px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                                Follow us:</td>
                                        </tr>

                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                                <SocialShare :data="editing.socialIcons" :design="editing.design" />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <Banner :data="editing?.Image" type="table" :styles="{ paddingTop: '15px' }"></Banner>
        </div>
        <div>
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
    name: 'Template30',
    mixins: [myMixin]
}
</script>
<style scoped></style>