<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0"
            style="border-collapse: collapse; font-size: 10.4px; background-color: rgb(239, 238, 238);">
            <tr>
                <td
                    style="margin: 0.1px; padding: 20px 20px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" />
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 13.5px / 17.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                            <span style="font-weight: 600; cursor: pointer;">
                                                <!-- Gannon Powell -->
                                                {{ editing.general?.name }}
                                            </span>
                                            <span style="font-weight: 600; cursor: pointer;">
                                                &nbsp;{{ editing.general?.pronoun }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); text-transform: uppercase; border-top: 1px solid rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">{{ editing.general?.position }}</span>
                                            <span style="cursor: pointer;"
                                                v-if="editing.general?.company">&nbsp;|&nbsp;{{
                                                    editing.general?.company }}</span>
                                            <span style="cursor: pointer;"
                                                v-if="editing.general?.department">&nbsp;|&nbsp;{{
                                                    editing.general?.department }} </span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :design="editing.design"
                                        :styles="{ padding: '5px 0px 0px' }" :layout="'column'" />
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <SocialShare :data="editing.socialIcons" :design="editing.design" />

                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <Banner :data="editing.Image" type="tr"
                :tdStyle="{ margin: '0.1px', padding: '15px 20px 20px', color: 'rgb(0, 0, 1)', cursor: 'pointer' }">
            </Banner>
            <!-- <tr>
                <td
                    style="margin: 0.1px; padding: 15px 20px 20px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                    <a :href="editing.Image?.bannerLink" target="_blank">
                        <img :src="editing.Image?.bannerImg" valign="top" :width="editing.Image?.bannerWidth"
                            alt="created with MySignature.io" style="display: block;">
                    </a>
                </td>
            </tr> -->
        </table>

        <div>
            <table cellpadding="0" width="500"
                style="width: 500px; color: rgb(59, 48, 46); line-height: 1; font-size: 14.1px; border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="34" height="34" align="center"
                        style="padding: 15px 0px 0px; margin: 0.1px; min-width: 34px;">

                        <Calender :name="editing.Addons?.calender?.icon" />

                    </td>
                    <td
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 14.1px; padding: 15px 0px 0px; margin: 0.1px;">
                        <span>{{ editing.Addons?.calender?.text }}&nbsp;</span>
                        <a :href="editing.Addons?.calender?.link" target="_blank"
                            style="text-decoration: none; font-size: 14.1px; color: rgb(1, 125, 232);">
                            {{ editing.Addons?.calender?.CTA }}
                        </a>
                        <!-- <span style="text-decoration: none; font-size: 14.1px; color: rgb(0, 145, 255);">Projects
                            here</span> -->
                    </td>
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
// 模版：显示data.json 中的数据
// 编辑，需要editingStore 来编辑
// 预览：显示store中的数据

export default {
    name: 'Template4',
    mixins: [myMixin]
}
</script>
<style scoped></style>