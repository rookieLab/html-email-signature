<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <!-- <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;"><img width="500"
                        src="https://img.mysignature.io/a/v1/2/3/2/232212d4-d0b2-5e2b-a52f-a960a0eb3535.png"
                        alt="Sincerely,"></td>
            </tr>
        </table> -->
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.1px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: ' 0px' }" />
                            <!-- <td valign="top" style="margin: 0.1px; padding: 0px; cursor: pointer;"><img
                                    src="https://img.mysignature.io/p/7/9/d/79dd604a-a917-50e4-90ed-b8881f375e12.png?time=1709049312"
                                    width="98" alt=" &quot;created with MySignature.io&quot;"
                                    style="display: block; min-width: 98px;"></td> -->
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 14.1px / 17.9px Georgia, serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 16.9px / 21.5px Georgia, serif; color: rgb(0, 0, 1);">
                                            <span style="font-weight: 600; color: rgb(171, 11, 11); cursor: pointer;">
                                                Amy
                                                Williams</span>&nbsp;<span
                                                style="font: 14.1px / 17.9px Georgia, serif; color: rgb(0, 0, 1); cursor: pointer;">Teacher</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 14.1px / 17.9px Georgia, serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;"><span style="color: rgb(0, 0, 1);">
                                                    Fluent
                                                    Bridge Institute</span></span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'"  :styles="{ ...textStyle, padding: '2px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

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
                    <td style="padding: 11px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/youtube_v3_shape2_i.png" height="28"
                                width="98" alt="youtube" style="display: block;"></span></td>
                    <td style="padding: 11px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/instagram_v2_shape2_i.png" height="28"
                                width="98" alt="instagram" style="display: block;"></span></td>
                    <td style="padding: 11px 4px 4px 0px; margin: 0.1px;"></td>
                    <td style="padding: 11px 4px 4px 0px; margin: 0.1px;"></td>
                </tr>
            </table>
            <Banner :data="editing?.Image"></Banner>
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
// 模版：显示data.json 中的数据
// 编辑，需要editingStore 来编辑
// 预览：显示store中的数据

export default {
    name: 'Template12',
    mixins: [myMixin]
}
</script>
<style scoped></style>