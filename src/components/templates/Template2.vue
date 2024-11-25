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
                <td align="center"
                    style="margin: 0.1px; padding: 0px 0px 5px; font: 15.4px / 19.6px Georgia, serif; color: rgb(0, 0, 1);">
                    <span style="font-weight: 600; color: rgb(9, 125, 94); cursor: pointer;">
                        {{ editing.general?.name }}
                    </span>
                    <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                        &nbsp;{{ editing.general?.pronoun }}
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center"
                    style="margin: 0.1px; padding: 0px 0px 5px; font: 600 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                    <span style="cursor: pointer;">{{ editing.general?.position }}&nbsp;</span>
                    <span style="cursor: pointer;">{{ editing.general?.company }}</span>
                </td>
            </tr>

            <Contact :data="editing.general?.contacts" :layout="'center'" :styles="textStyle"
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
        <div>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/instagram_v1_shape3_i.png" height="28"
                                width="98" alt="instagram" style="display: block;"></span></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/twitter_v1_shape3_i.png" height="28"
                                width="98" alt="twitter" style="display: block;"></span></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/youtube_v1_shape3_i.png" height="28"
                                width="98" alt="youtube" style="display: block;"></span></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"></td>
                    <td style="padding: 16px 4px 4px 0px; margin: 0.1px;"></td>
                </tr>
            </table>
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