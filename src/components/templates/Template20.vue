<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 13.1px;">
            <tr>
                <Avatar :data="editing.Image" :styles="{ padding: '0px 0px 13px' }" align="center" />
                <!-- <td align="center" style="margin: 0.1px; padding: 0px 0px 13px; cursor: pointer;"><img
                        src="https://img.mysignature.io/p/3/9/0/390e98a2-420e-52a6-a8a8-ef6aa04f2b12.png?time=1709198100"
                        width="162" alt=" &quot;created with MySignature.io&quot;"
                        style="display: block; min-width: 162px;"></td> -->
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px 0px 5px; font: 17.1px / 21.7px Georgia, serif; color: rgb(0, 0, 1);">
                    <span style="font-weight: 600; color: rgb(116, 166, 119); cursor: pointer;">
                        OLIVIA THOMPSON
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px 0px 5px; font: 600 13.1px / 16.7px Georgia, serif; color: rgb(0, 0, 1);">
                    <span style="cursor: pointer;">FOOD CRITIC &amp; RESTAURANT REVIEWER</span>
                </td>
            </tr>
            <Contact :data="editing.general?.contacts" :layout="'center'"
                :styles="{ ...textStyle, padding: '5px 20px' }"
                :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <SocialShare :data="editing.socialIcons" :design="editing.design"
                        :styles="{ padding: '0px 5px' }" />
                </td>
            </tr>
        </table>
        <div>
            <!-- <Banner :data="editing?.Image" type="table"></Banner> -->
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 7px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><img
                            alt="⭐Check out my latest restaurant reviews⭐"
                            src="https://img.mysignature.io/a/v1/6/7/d/67df7b4b-9506-54b5-a49d-01aef050212a.png"
                            style="max-width: 490px; display: block;" width="372"></td>
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
    name: 'Template20',
    mixins: [myMixin]
}
</script>
<style scoped></style>