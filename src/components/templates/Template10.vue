<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 15.7px;">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <Avatar :data="editing.Image" :styles="{ padding: '0px 12px 0px 0px' }" />
                                <td valign="top"
                                    style="border-left: 1px solid rgb(31, 31, 31); margin: 0.1px; padding: 0px 0px 0px 12px; font: 15.7px / 19.9px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 20.4px / 25.9px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                                <span
                                                    style="font-weight: 600; color: rgb(31, 31, 31); cursor: pointer;">
                                                    <!-- Katie Howard -->
                                                    {{ editing.general?.name }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 15.7px / 19.9px Verdana, Geneva, sans-serif; color: rgb(31, 31, 31);">
                                                <span style="color: rgb(31, 31, 31); cursor: pointer;">
                                                    {{ editing.general?.position }}
                                                    <!-- Family Law Attorney -->
                                                </span>
                                            </td>
                                        </tr>
                                        <Contact :data="editing.general?.contacts" :layout="'column'"
                                            :styles="textStyle"
                                            :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
                                        <!-- 
                                        <Layout1Contact :contacts="editing.general?.contacts" layout="layout1"
                                            :baseStyle="textStyle" :nameStyle="{ fontWeight: '600' }" /> -->
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <SocialShareLarge :data="editing.Addons?.social"  />
            <Calender :calender="editing.Addons?.calender" :design="editing.design" />

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
    name: 'Template10',
    mixins: [myMixin]
}
</script>
<style scoped></style>