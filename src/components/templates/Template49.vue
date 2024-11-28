<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 11.8px;">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <Avatar :data="editing.Image" :styles="{ padding: '0px 12px 0px 0px' }" valign="top" />

                                <td valign="top"
                                    style="border-left: 1px solid rgb(195, 95, 62); margin: 0.1px; padding: 0px 0px 0px 12px; font: 11.8px / 15.1px 'Comic Sans MS', cursive, sans-serif; color: rgb(0, 0, 1);">
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
                                            <td align="left" style="margin: 0.1px; padding: 0px 0px 8px"
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
                                                style="margin: 0.1px; padding: 12px 0px 0px; font: 11.8px / 15.1px 'Comic Sans MS', cursive, sans-serif; color: rgb(0, 0, 1);">
                                                <SocialShare :data="editing.socialIcons" :design="editing.design"
                                                    :styles="{ padding: '0px 4px 0px 0px' }" />

                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <Banner :data="editing?.Image" type="table"></Banner>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; padding-top: 15px; cursor: pointer;"><span><img
                                src="https://img.mysignature.io/b/5/2/f/52f4288e-4dc8-5102-8765-d5a86e57373e.png?time=1685569257"
                                valign="top" width="446" alt="created with MySignature.io"
                                style="display: block;"></span></td>
                </tr>
            </table>
        </div>
        <div>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 11px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><span><img
                                alt="Visit our cosy bakery! It will be delicious!"
                                src="https://img.mysignature.io/a/v1/e/5/2/e5245a3a-5585-5c50-ba51-53b806decd47.png"
                                style="max-width: 490px; display: block;" width="363"></span></td>
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
    name: 'Template49',
    mixins: [myMixin]
}
</script>
<style scoped></style>