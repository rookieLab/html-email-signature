<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="400" style="border-collapse: collapse; font-size: 11.2px;">
            <tr>
                <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="middle" />
            </tr>
            <tr>
                <td align="left" style="margin: 0.1px; padding: 10px 10px 0px 0px; text-transform: uppercase;" :style="{
                    fontFamily: fontFamily,
                    fontSize: editing.design?.fontSize * 1.4 + 'px',
                }">
                    <span v-if="editing.general?.name" style="font-weight: 600;  cursor: pointer;"
                        :style="{ color: editing.design?.templateColor }">
                        {{ editing.general?.name }}&nbsp;
                    </span>
                    <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                        {{ editing.general?.pronoun }}&nbsp;
                    </span>
                </td>
            </tr>
            <tr>
                <td align="left" style="margin: 0.1px;" :style="{
                    ...textStyle,
                    fontWeight: '500',
                    borderTop: '1px solid rgb(255, 255, 255)',
                    fontSize: editing.design?.fontSize * 1 + 'px',
                    padding: '5px 0px 0px'
                }">
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
            <tr>
                <td style="margin: 0.1px; padding: 15px 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td height="1"
                                style="margin: 0.1px; padding: 0px; border-top: 2px solid rgb(0, 0, 1); font: 1px / 1px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; width: 30px;"
                                :style="{ borderColor: editing.design?.templateColor }">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <Contact :data="editing.general?.contacts" :layout="'column'" :styles="{ ...textStyle, padding: '0px' }"
                :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

            <tr>
                <td
                    style="margin: 0.1px; padding: 12px 0px 0px; font: 11.2px / 14.2px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                    <SocialShare :data="editing.socialIcons" :design="editing.design" />

                </td>
            </tr>
        </table>
        <div>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 11px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><span><img
                                alt="Let's book a meeting "
                                src="https://img.mysignature.io/a/v1/f/0/d/f0d4dc43-321c-51ac-8a43-e6feeb573d7d.png"
                                style="max-width: 490px; display: block;" width="197"></span></td>
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

export default {
    name: 'Template35',
    mixins: [myMixin]
}
</script>
<style scoped></style>