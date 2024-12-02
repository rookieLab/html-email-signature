<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.6px;">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <Avatar :data="editing.Image" />
                                <!-- <td valign="top" style="margin: 0.1px; padding: 0px 12px 0px 0px; cursor: pointer;"><img
                                        src="https://img.mysignature.io/p/1/e/a/1ea77c83-09b2-52cd-adb1-ab14e4af67ff.png?time=1712664516"
                                        width="149" alt=" &quot;created with MySignature.io&quot;"
                                        style="display: block; min-width: 149px;"></td> -->
                                <td valign="top"
                                    style="border-left: 1px solid rgb(0, 0, 0); margin: 0.1px; padding: 0px 0px 0px 12px; font: 12.6px / 16.1px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                       
                                        <tr>
                                            <td align="left"
                                                style="margin: 0.1px; padding: 0px 0px 8px; line-height: 22.2px;"
                                                :style="{ fontFamily: fontFamily, fontSize: editing.design?.fontSize * 1.3 + 'px' }">
                                                <span v-if="editing.general?.name"
                                                    style="font-weight: 600;  cursor: pointer;"
                                                    :style="{ color: editing.design?.templateColor }">
                                                    {{ editing.general?.name }}&nbsp;
                                                </span>
                                                <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                                                    {{ editing.general?.pronoun }}&nbsp;
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="margin: 0.1px; padding: 0px 0px 8px "
                                                :style="textStyle">
                                                <span v-if="editing.general?.position" style="cursor: pointer;">
                                                    {{ editing.general?.position }}&nbsp;
                                                </span>
                                                <span v-if="editing.general?.company" style="cursor: pointer;">
                                                    {{ editing.general?.company }}&nbsp;
                                                </span>
                                                <span v-if="editing.general?.department" style="cursor: pointer;">
                                                    {{ editing.general?.department }}
                                                </span>
                                            </td>
                                        </tr>
                                        <Contact :data="editing.general?.contacts" :layout="'column'"
                                            :styles="{ ...textStyle, padding: '0px' }"
                                            :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 12px 0px 0px; font: 12.6px / 16.1px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
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
        </div>
        <div>
            <Banner :data="editing?.Image"></Banner>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 20px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><img
                            alt="View my CV and let's explore potential collaborations."
                            src="https://img.mysignature.io/a/v1/5/2/3/5230e021-d3ed-5e35-89b8-113f5ffbcf97.png"
                            style="max-width: 490px; display: block;" width="420"></td>
                </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.Disclaimer?.enable">
            <Disclaimer :data="editing.Addons?.Disclaimer" :styles="{ fontFamily: fontFamily }"></Disclaimer>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.social?.enable">
            <SocialShareLarge :data="editing.Addons?.social" />
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.video?.enable">
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
        <div v-if="editing.Addons?.marketplace?.enable">
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
    name: 'Template16',
    mixins: [myMixin]
}
</script>
<style scoped></style>