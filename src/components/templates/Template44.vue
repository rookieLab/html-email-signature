<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.6px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="middle" />
                            <td valign="middle"
                                style="margin: 0.1px; padding: 0px; font: 14.6px / 18.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">

                                <SocialShare :data="editing.socialIcons" :design="editing.design" layout="column"
                                    :styles="{ padding: '4px 15px 0px 0px' }" />

                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 0px 0px 2px; line-height: 22.2px;"
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
                                        <td align="left" style="margin: 0.1px; padding: 0px 0px 5px"
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
            <Banner :data="editing?.Image" type="tr" :styles="{ padding: '15px 0px 0px' }" />
        </table>
        <div>
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
    </div>
</template>
<script>

import { myMixin } from './mixin.js'

export default {
    name: 'Template44',
    mixins: [myMixin]
}
</script>
<style scoped></style>