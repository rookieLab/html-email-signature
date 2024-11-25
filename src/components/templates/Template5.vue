<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 13.4px; background-color: rgb(42, 42, 42);">
            <tr>
                <td
                    style="margin: 0.1px; padding: 20px; font: 13.4px / 17.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" />
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px; font: 13.4px / 17.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 17.5px / 22.2px Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); cursor: pointer;">
                                            <span style="font-weight: 600; cursor: pointer;">Henrik
                                                Ross</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px; font: 13.4px / 17.1px Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); text-transform: uppercase; border-top: 1px solid rgb(255, 255, 255);">
                                            <span style="cursor: pointer;">Co-founder</span>&nbsp;|&nbsp;<span
                                                style="cursor: pointer;">| APEXIN DIGITAL</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 13.4px / 17.1px Arial, Helvetica, sans-serif; color: rgb(255, 255, 255);">
                                            <span
                                                style="color: rgb(255, 255, 255); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">
                                                name@example.com</span>&nbsp;|&nbsp;<span
                                                style="color: rgb(255, 255, 255); text-decoration: none; font-family: Arial, Helvetica, sans-serif;"></span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 13.4px / 17.1px Arial, Helvetica, sans-serif; color: rgb(255, 255, 255);">
                                            <span
                                                style="color: rgb(255, 255, 255); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">mysignature.io</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 13.4px / 17.1px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
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
            <Marketplace :data="editing.Addons?.marketplace" />
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
    name: 'Template5',
    mixins: [myMixin]
}
</script>
<style scoped></style>