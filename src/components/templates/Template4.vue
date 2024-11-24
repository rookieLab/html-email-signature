<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;" v-if="editing.Addons?.signOff?.img">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img width="500" :src="editing.Addons?.signOff?.img" alt="Regards,">
                </td>
            </tr>
        </table>
        <table cellpadding="0"
            style="border-collapse: collapse; font-size: 10.4px; background-color: rgb(239, 238, 238);">
            <tr>
                <td
                    style="margin: 0.1px; padding: 20px 20px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0px 15px 0px 0px; cursor: pointer;">
                                <a :href="editing.Image?.avatarLink" target="_blank">
                                        <img alt="SignMaker" :src="editing.Image?.avatarImg" style="display: block;"
                                            :style="{ minWidth: editing.Image?.avatarWidth }"
                                            :width="editing.Image?.avatarWidth" /></a>

                                <!-- <img src="/assets/avatar/545c5ab2-ee29-555b-8497-3eb03a95737b.png?time=1708958103"
                                    width="112" alt=" &quot;created with MySignature.io&quot;"
                                    style="display: block; min-width: 112px;"> -->
                            </td>
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
                                    <Layout1Contact :contacts="editing.general?.contacts" :layout="layout2" />
                                    <!-- <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span>▝ &nbsp;</span><span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">powell@mysignature.io</span>&nbsp;|&nbsp;<span>▝
                                                &nbsp;</span><span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Arial, Helvetica, sans-serif;">+1
                                                432 403 4257</span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 5px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <span>▝ &nbsp;</span><span use-font-color="true">Florida, 4610 North Street,
                                                32003</span>
                                        </td>
                                    </tr> -->

                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td v-for="icon in editing.socialIcons"
                                                        style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                        <component :is="socialIconsMap[icon.name]" :url="icon.url"
                                                            :shape="editing.design.iconsShape"
                                                            :size="editing.design.iconsSize"
                                                            :color="editing.design.iconsType === 'branded' ? undefined : editing.design.iconsColor"
                                                            :background="editing.design.iconsType === 'branded' ? undefined : editing.design.iconsBackground" />

                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td
                    style="margin: 0.1px; padding: 15px 20px 20px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                    <a :href="editing.Image?.bannerLink" target="_blank">
                        <img :src="editing.Image?.bannerImg" valign="top" :width="editing.Image?.bannerWidth"
                            alt="created with MySignature.io" style="display: block;">
                    </a>
                </td>
            </tr>
        </table>
        <div>
            <table cellpadding="0" width="500"
                style="width: 500px; color: rgb(59, 48, 46); line-height: 1; font-size: 14.1px; border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="34" height="34" align="center"
                        style="padding: 15px 0px 0px; margin: 0.1px; min-width: 34px;">

                        <AddonIndex :name="editing.Addons?.calender?.icon" />

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