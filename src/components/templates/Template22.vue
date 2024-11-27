<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />

        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.1px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="top" />

                            <td style="margin: 0.1px; padding: 0px 15px 0px 0px;" valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">
                                                Samantha Wilson

                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 4px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">
                                                Property Specialist

                                            </span> <span style="cursor: pointer;">

                                                Green Leaf Properties


                                            </span><span style="cursor: pointer;"></span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'" :styles="textStyle"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
                                    <tr >
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
            <table cellpadding="0" style="border-collapse: collapse;" width="500">

                <tr>
                    <td style="padding: 5px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <span><img alt="Let us guide you towards eco-friendly homes!"
                                src="https://img.mysignature.io/a/v1/5/3/f/53ffb60d-bc89-5128-95f9-c7f286d83aed.png"
                                style="display: block;" width="349" /></span>
                    </td>
                </tr>
            </table>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
                        <span><img alt="facebook" height="32"
                                src="https://img.mysignature.io/addons/v2/facebook_v2_shape3_b.png"
                                style="display: block;" width="112" /></span>
                    </td>
                    <td style="padding: 18px 4px 4px 0px; margin: 0.1px;">
                        <span><img alt="twitter" height="32"
                                src="https://img.mysignature.io/addons/v2/twitter_v2_shape3_b.png"
                                style="display: block;" width="112" /></span>
                    </td>
                    <td style="padding: 18px 4px 4px 0px; margin: 0.1px;">

                    </td>
                    <td style="padding: 18px 4px 4px 0px; margin: 0.1px;">

                    </td>
                </tr>
            </table>
            <table cellpadding="0" style="border-collapse: collapse;" width="500">
                <tr style="cursor: pointer;">
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: gray;">
                        Save paper. Don’t print</td>
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
    name: 'Template22',
    mixins: [myMixin]
}
</script>
<style scoped></style>