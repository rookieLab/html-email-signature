<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />

        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.1px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="top" />

                            <td style="margin: 0.1px; padding: 0px 15px 0px 0px;" valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">

                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 0px 0px 8px; line-height: 22.2px;" :style="{
                                                fontFamily: fontFamily,
                                                fontSize: editing.design?.fontSize * 1.1 + 'px',
                                                padding: '0px'
                                            }">
                                            <span v-if="editing.general?.name"
                                                style="font-weight: 600;  cursor: pointer;"
                                                :style="{ color: editing.design?.templateColor }">
                                                {{ editing.general?.name }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                                                {{ editing.general?.pronoun }}&nbsp;
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="margin: 0.1px;" :style="{
                                            fontFamily: fontFamily,
                                            fontWeight: 500,
                                            fontSize: editing.design?.fontSize * 1 + 'px',
                                            color: editing.design?.color,
                                            padding: '4px 0px'
                                        }">
                                            <span v-if="editing.general?.position" style="cursor: pointer;">
                                                {{ editing.general?.position }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.company" style="cursor: pointer;">
                                                {{ editing.general?.company }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.department" style="cursor: pointer;">
                                                {{ editing.general?.department }}
                                            </span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :layout="'column'"
                                        :styles="{ ...textStyle, padding: '0px 15px 0px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
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
            <table cellpadding="0" style="border-collapse: collapse;" width="500">

                <tr>
                    <td style="padding: 5px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <span><img alt="Let us guide you towards eco-friendly homes!"
                                src="https://img.mysignature.io/a/v1/5/3/f/53ffb60d-bc89-5128-95f9-c7f286d83aed.png"
                                style="display: block;" width="349" /></span>
                    </td>
                </tr>
            </table>
            <div v-if="editing.Addons?.social?.enable">
                <SocialShareLarge :data="editing.Addons?.social" />
                <table width="500" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                    </tr>
                </table>
            </div>
            <table cellpadding="0" style="border-collapse: collapse;" width="500">
                <tr style="cursor: pointer;">
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Verdana, Geneva, sans-serif; color: gray;">
                        Save paper. Don’t print</td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                         </td>
                </tr>
            </table>
        </div>
        <div v-if="editing.Addons?.Disclaimer?.enable">
            <Disclaimer :data="editing.Addons?.Disclaimer" :styles="{ fontFamily: fontFamily }"></Disclaimer>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
                </tr>
            </table>
        </div>

        <div v-if="editing.Addons?.video?.enable">
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
        <div v-if="editing.Addons?.marketplace?.enable">
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
    name: 'Template22',
    mixins: [myMixin]
}
</script>
<style scoped></style>