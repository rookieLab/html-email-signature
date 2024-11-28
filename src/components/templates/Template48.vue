<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.4px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 9px 0px 0px' }" valign="top" />

                            <td valign="top"
                                style="border-left: 2px solid rgb(235, 62, 145); margin: 0.1px; padding: 0px 0px 0px 9px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 17.3px / 22.1px 'Courier New', Courier, monospace; color: rgb(0, 0, 1);">
                                            <span
                                                style="font: 17.3px / 22.1px 'Courier New', Courier, monospace; color: rgb(235, 62, 145); cursor: pointer;">
                                                Anny Parson
                                            </span><span
                                                style="font: 14.4px / 18.3px 'Courier New', Courier, monospace; color: rgb(0, 0, 1); cursor: pointer;"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px; font: 14.4px / 18.3px 'Courier New', Courier, monospace; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">Anny's Flowers</span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'"
                                        :styles="{ ...textStyle, padding: '0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px 'Courier New', Courier, monospace; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(235, 62, 145); font-weight: 400; cursor: pointer;">Wedding
                                                services</span>&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 14.4px / 18.3px 'Courier New', Courier, monospace; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(235, 62, 145); font-weight: 400; cursor: pointer;">454
                                                6444 8844</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 8px 0px 0px; font: 14.4px / 18.3px 'Courier New', Courier, monospace; color: rgb(0, 0, 1);">
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
        <div>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 9px 10px 0px 0px; margin: 0.1px; cursor: pointer;"><span><img
                                alt="Two Hours Delivery. Order Now"
                                src="https://img.mysignature.io/a/v1/9/e/b/9eb34636-4d7a-5852-ab15-26862e7ac4a3.png"
                                style="max-width: 490px; display: block;" width="313"></span></td>
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
    name: 'Template48',
    mixins: [myMixin]
}
</script>
<style scoped></style>