<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.5px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px' }" />
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 15.1px / 19.1px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="font-weight: 600; color: rgb(234, 127, 76); cursor: pointer;">JULIANA
                                                SILVA</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;"><span style="color: rgb(0, 0, 1);">Real
                                                    Estate Agent</span></span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(234, 127, 76); font-weight: 600;">email&nbsp;</span><span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">
                                                name@example.com </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(234, 127, 76); font-weight: 600;">website&nbsp;</span><span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">mysignature.io</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(234, 127, 76); font-weight: 600;">phone&nbsp;</span><span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">+1
                                                678 909 5432</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 8px 0px 0px; font: 12.5px / 15.9px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
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
        <Banner :data="editing.Image" :tdStyle="{ padding: '15px 0px 0px' }"></Banner>
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
    name: 'Template6',
    mixins: [myMixin]
}
</script>
<style scoped></style>