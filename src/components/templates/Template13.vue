<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 13.8px;" width="400">
            <Avatar :data="editing.Image" />
            <tr>
                <td
                    style='margin: 0.1px; padding: 10px 10px 0px 0px; font: 17.9px / 22.8px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1); letter-spacing: 0.4pt; cursor: pointer;'>
                    <span
                        style="font-weight: 600; color: rgb(32, 142, 192); text-transform: uppercase; cursor: pointer;">Gunner
                        Lee</span>
                </td>
            </tr>
            <tr>
                <td
                    style='margin: 0.1px; padding: 5px 0px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(39, 39, 39);'>
                    <span style="cursor: pointer;">Nurse at Private Clinic
                    </span><span style="cursor: pointer;"></span>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 15px 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td height="1"
                                style='margin: 0.1px; padding: 0px; border-top: 2px solid rgb(32, 142, 192); font: 1px / 1px "Palatino Linotype", "Book Antiqua", Palatino, serif; width: 30px;'>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td
                    style='margin: 0.1px; padding: 1px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                    <span style="font-weight: 600;">E: </span><span
                        style='color: rgb(39, 39, 39); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>lee@mysignature.io</span>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td
                    style='margin: 0.1px; padding: 1px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                    <span style="font-weight: 600;">W: </span><span
                        style='color: rgb(39, 39, 39); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>mysignature.io</span>
                </td>
            </tr>
            <tr style="cursor: pointer;">
                <td
                    style='margin: 0.1px; padding: 1px 0px; font: 13.8px / 17.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                    <span style="font-weight: 600;">T: </span><span
                        style='color: rgb(39, 39, 39); text-decoration: none; font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;'>2376-987-021</span>
                </td>
            </tr>
        </table>
        <div>
            <Banner :data="editing?.Image"></Banner>
            <table cellpadding="0" style="border-collapse: collapse;" width="500">
                <tr>
                    <td style="padding: 9px 10px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <span><img alt="View reviews about me"
                                src="https://img.mysignature.io/a/v1/9/b/2/9b23132a-6332-53d5-bcfd-6d0688359d0b.png"
                                style="max-width: 490px; display: block;" width="221" /></span>
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                         </td>
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
// 模版：显示data.json 中的数据
// 编辑，需要editingStore 来编辑
// 预览：显示store中的数据

export default {
    name: 'Template13',
    mixins: [myMixin]
}
</script>
<style scoped></style>