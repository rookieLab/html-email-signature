<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 11.8px;">
            <tr>
                <td align="center" style="margin: 0.1px; padding: 0px 0px 13px; cursor: pointer;">
                    <img :src="editing.Image?.avatarImg" width="100" alt="created with MySignature.io"
                        style="display: block; min-width: 100px;">
                </td>
            </tr>
            <tr>
                <td align="center" style="margin: 0.1px; padding: 0px 0px 5px; font: 15.4px / 19.6px Georgia, serif"
                    :style="{ fontFamily: fontFamily }">
                    <span v-if="editing.general?.name" style="font-weight: 600;  cursor: pointer;"
                        :style="{ color: editing.design?.templateColor }">
                        {{ editing.general?.name }}&nbsp;
                    </span>
                    <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                        {{ editing.general?.pronoun }}&nbsp;
                    </span>
                    <span v-if="editing.general?.position" style="cursor: pointer;">
                        {{ editing.general?.position }}
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center" style="margin: 0.1px; padding: 0px 0px 5px;font-weight: 600;" :style="textStyle">
                    <span v-if="editing.general?.company" style="cursor: pointer;">
                        {{ editing.general?.company }}&nbsp;
                    </span>
                    <span style="cursor: pointer;">
                        {{ editing.general?.department }}
                    </span>
                </td>
            </tr>

            <Contact :data="editing.general?.contacts" :layout="'center'" :styles="{ ...textStyle, padding: '5px 20px' }"
                :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" align="center" style="border-collapse: collapse;">
                        <tr>
                            <td
                                style="margin: 0.1px; padding: 5px 20px; font: 11.8px / 15.1px Georgia, serif; color: rgb(9, 125, 94); border-bottom: 1px solid rgb(235, 228, 228);">
                                <span style="color: rgb(0, 0, 1); font-weight: 600; cursor: pointer;">
                                    Join my adventures for travel
                                </span>
                                <span style="color: rgb(195, 95, 62); font-weight: 600; cursor: pointer;"></span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <SocialShare :data="editing.socialIcons" :design="editing.design" />
                </td>
            </tr>
        </table>
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
        <div v-if="editing.Image?.bannerImg">
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
    name: 'Template2',
    mixins: [myMixin]
}
</script>
<style scoped></style>