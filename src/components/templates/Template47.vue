<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />

        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.8px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="middle" />

                            <td valign="middle"
                                style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; color: rgb(0, 0, 1);">
                                <SocialShare :data="editing.socialIcons" :design="editing.design"
                                    :styles="{ padding: '4px 15px 0px 0px' }" layout="column" />

                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="left" style="margin: 0.1px; padding: 0px 0px 2px; "
                                            :style="{ fontFamily: fontFamily, fontSize: editing.design?.fontSize * 1.2 + 'px' }">
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
                                        <td align="left" style="margin: 0.1px; padding: 0px 0px 5px "
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
                                    <Contact :data="editing.general?.contacts" :layout="'row-left'"
                                        :styles="{ ...textStyle, padding: '1px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }"
                                        separator=", " />

                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <div v-if="editing.Addons?.social?.enable">
                <SocialShareLarge :data="editing.Addons?.social" />
                <table width="500" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                    </tr>
                </table>
            </div>

            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="30" style="padding: 15px 0px 0px; margin: 0.1px;"><img
                            src="https://img.mysignature.io/addons/v2/hand-leaves.png" alt="Save paper. Don’t print"
                            style="display: block;"></td>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 13.6px / 17.3px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; color: gray;">
                        Save paper. Don’t print</td>
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
    name: 'Template47',
    mixins: [myMixin]
}
</script>
<style scoped></style>