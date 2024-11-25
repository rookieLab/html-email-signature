<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.8px;">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                           
                                <Avatar :data="editing.Image" :styles="{ padding: '0px 12px 0px 0px' }" />
                                <td valign="top"
                                    style="border-left: 1px solid rgb(85, 24, 4); margin: 0.1px; padding: 0px 0px 0px 12px; font: 12.8px / 16.3px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 16.6px / 21.2px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                                <span style="font-weight: 600; color: rgb(85, 24, 4); cursor: pointer;">
                                                    Mya Butler ♛
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 12.8px / 16.3px 'Times New Roman', Times, serif; color: rgb(157, 83, 83);">
                                                <span style="color: rgb(157, 83, 83); cursor: pointer;">
                                                    Villegas Fasion
                                                </span>
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td
                                                style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                                <span
                                                    style="color: rgb(85, 24, 4); font-weight: 600;">email:&nbsp;</span><span
                                                    style="color: rgb(157, 83, 83); text-decoration: none; font-family: 'Times New Roman', Times, serif;">mya@villegas.io</span>
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td
                                                style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                                <span
                                                    style="color: rgb(85, 24, 4); font-weight: 600;">website:&nbsp;</span><span
                                                    style="color: rgb(157, 83, 83); text-decoration: none; font-family: 'Times New Roman', Times, serif;">mysignature.io</span>
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td
                                                style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
                                                <span
                                                    style="color: rgb(85, 24, 4); font-weight: 600;">address:&nbsp;</span><span
                                                    style="color: rgb(157, 83, 83);">987 Comfort Blvd, Paris</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 12px 0px 0px; font: 12.8px / 16.3px 'Times New Roman', Times, serif; color: rgb(0, 0, 1);">
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
            <Banner :data="editing.Image"></Banner>
        </div>
        <div>
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
    name: 'Template9',
    mixins: [myMixin]
}
</script>
<style scoped></style>