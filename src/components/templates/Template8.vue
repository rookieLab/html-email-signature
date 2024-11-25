<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.2px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 9px 0px 0px' }" />
                            <td valign="top"
                                style="border-left: 2px solid rgb(9, 125, 94); margin: 0.1px; padding: 0px 0px 0px 9px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 17.1px / 21.7px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="font: 17.1px / 21.7px Arial, Helvetica, sans-serif; color: rgb(9, 125, 94); cursor: pointer;">Giuliana
                                                Thompson</span>&nbsp;&nbsp;<span
                                                style="font: 14.2px / 18.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">Paediatrician</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px; font: 14.2px / 18.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">Apollo Hospital</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 14.2px / 18.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">+1
                                                578 223 5675</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 0px; font: 14.2px / 18.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">name@example.com</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 8px 0px 0px; font: 14.2px / 18.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
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
        <div>
            <Banner :data="editing.Image"></Banner>
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
    name: 'Template8',
    mixins: [myMixin]
}
</script>
<style scoped></style>