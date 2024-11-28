<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 13.1px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" />
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 13.1px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 15.6px / 19.8px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="font-weight: 600; color: rgb(0, 0, 0); cursor: pointer;">Sadie
                                                &amp; Nixon Family Blog</span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'"  :styles="{ ...textStyle, padding: '2px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />


                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 13.1px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(255, 20, 104); font-weight: 400; cursor: pointer;">Listen
                                                to our podcast about relations</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 8px 0px 3px; font: 13.1px / 16.5px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            Follow us:</td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
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
        <div>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 19px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/instagram_v1_shape2_i.png" height="39"
                                width="137" alt="instagram" style="display: block;"></span></td>
                    <td style="padding: 19px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/youtube_v1_shape2_i.png" height="39"
                                width="137" alt="youtube" style="display: block;"></span></td>
                    <td style="padding: 19px 4px 4px 0px; margin: 0.1px;"></td>
                </tr>
            </table>
            <!-- <table width="419" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 13.6px / 17.3px Arial, Helvetica, sans-serif; color: rgb(0, 0, 0); cursor: pointer;">
                        If you do not wish to receive more information about our products and/or services, you can
                        unsubscribe by replying to this email with the subject line "DO NOT SEND".</td>
                </tr>
            </table> -->
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
    name: 'Template14',
    mixins: [myMixin]
}
</script>
<style scoped></style>