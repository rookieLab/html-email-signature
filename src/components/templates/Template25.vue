<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.8px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="top" />
                            <td valign="top"
                                style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 12.8px / 16.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 15.4px / 19.5px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="font-weight: 600; color: rgb(51, 124, 201); cursor: pointer;">John
                                                Smith</span>&nbsp;<span
                                                style="font: 12.8px / 16.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">Realtor</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 12.8px / 16.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;"><span style="color: rgb(0, 0, 1);">ABC
                                                    Realty</span></span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'"
                                        :styles="{ ...textStyle, padding: '2px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />

                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 8px 0px 0px; font: 12.8px / 16.3px Verdana, Geneva, sans-serif; color: rgb(0, 0, 1);">

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
            <table cellpadding="0" width="500"
                style="width: 500px; color: rgb(57, 68, 110); line-height: 1; font-size: 14.1px; border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="27" height="27" align="center"
                        style="padding: 19px 0px 0px; margin: 0.1px; min-width: 27px;"><svg viewBox="0 0 768 1024"
                            xmlns="http://www.w3.org/2000/svg" style="width: 17.55px;">
                            <path
                                d="M160.664 96.406v110.328c0 60.838 49.496 110.332 110.336 110.332v0h224.932c60.836 0 110.332-49.494 110.332-110.332v0-110.328h50.332c60.836 0 110.332 49.492 110.332 110.328v0 706.932c0 60.838-49.496 110.334-110.332 110.334v0h-546.264c-60.838 0-110.332-49.496-110.332-110.334v0-706.932c0-60.836 49.494-110.328 110.332-110.328v0h50.332zM276.148 809.986c-11.716-11.714-30.712-11.714-42.426 0v0l-43.054 43.056-10.93-10.924c-11.716-11.712-30.712-11.708-42.426 0.008-11.712 11.718-11.708 30.714 0.008 42.426v0l32.14 32.128c5.86 5.856 13.534 8.784 21.212 8.784 7.674 0 15.354-2.93 21.21-8.788v0l64.266-64.266c11.716-11.714 11.716-30.71 0-42.424zM608.396 865.462h-224.924c-16.57 0-30 13.432-30 30s13.43 30 30 30v0h224.926c16.566 0 29.998-13.43 29.998-30 0-16.568-13.434-30-30-30v0zM276.148 617.184c-11.716-11.718-30.71-11.714-42.426 0v0l-43.056 43.058-10.928-10.922c-11.718-11.714-30.712-11.708-42.426 0.008-11.712 11.718-11.708 30.712 0.008 42.426v0l32.14 32.126c5.86 5.856 13.536 8.784 21.212 8.784 7.674 0 15.354-2.928 21.212-8.786v0l64.266-64.268c11.714-11.718 11.714-30.712-0.002-42.426zM608.396 672.664h-224.924c-16.57 0-30 13.432-30 30s13.43 30 30 30v0h224.926c16.566 0 29.998-13.432 29.998-30s-13.434-30-30-30v0zM276.148 424.392c-11.716-11.718-30.71-11.714-42.426 0v0l-43.054 43.056-10.926-10.926c-11.718-11.714-30.712-11.714-42.426 0.004-11.714 11.716-11.714 30.712 0.004 42.426v0l32.14 32.134c5.856 5.856 13.532 8.784 21.212 8.784 7.674 0 15.354-2.928 21.212-8.786v0l64.266-64.268c11.714-11.716 11.714-30.71-0.002-42.424zM608.396 479.87h-224.924c-16.57 0-30 13.432-30 30s13.43 30 30 30v0h224.926c16.566 0 29.998-13.43 29.998-30 0-16.568-13.434-30-30-30v0zM383.464 0c59.358 0 109.296 41.138 122.796 96.406v0h40.004v110.328c0 27.754-22.578 50.332-50.332 50.332v0h-224.932c-27.756 0-50.336-22.578-50.336-50.332v0-110.328h39.998c13.502-55.268 63.438-96.406 122.802-96.406z"
                                fill="#337CC9"></path>
                        </svg></td>
                    <td
                        style="font-family: Verdana, Geneva, sans-serif; font-size: 14.1px; padding: 19px 0px 0px; margin: 0.1px;">
                        <span>Book a CALL with me&nbsp;</span><span
                            style="text-decoration: none; font-size: 14.1px; color: rgb(51, 124, 201);">here</span>
                    </td>
                </tr>
            </table>
            <Banner :data="editing?.Image" type="table"></Banner>
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
    </div>
</template>
<script>

import { myMixin } from './mixin.js'
// 模版：显示data.json 中的数据
// 编辑，需要editingStore 来编辑
// 预览：显示store中的数据

export default {
    name: 'Template25',
    mixins: [myMixin]
}
</script>
<style scoped></style>