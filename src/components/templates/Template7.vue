<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0"
            style="border-collapse: collapse; font-size: 11.1px; background-color: rgb(255, 192, 104);">
            <tr>
                <td
                    style="margin: 0.1px; padding: 20px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" />
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 14.4px / 18.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                            <span style="font-weight: 600; cursor: pointer;">Dr. Terrence Baker •
                                                Pediatrician</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); text-transform: uppercase; border-top: 1px solid rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">Mount Sinai
                                                Hospital</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">+1
                                                (684) 555-0102</span>&nbsp;|&nbsp;<span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">+1
                                                (567) 321-7876</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">
                                                name@example.com </span>&nbsp;|&nbsp;<span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Verdana, Geneva, sans-serif;">mysignature.io</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span use-font-color="true">654 Health Heights, NY 11542,
                                                USA</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 11.1px / 14.1px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
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
            <table width="436" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                        IMPORTANT: The contents of this email and any attachments are confidential. It is strictly
                        forbidden to share any part of this message with any third party, without a written consent of
                        the sender. If you received this message by mistake, please reply to this message and follow
                        with its deletion, so that we can ensure such a mistake does not occur in the future.</td>
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
    name: 'Template7',
    mixins: [myMixin]
}
</script>
<style scoped></style>