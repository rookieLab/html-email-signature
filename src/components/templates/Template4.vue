<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0"
            style="border-collapse: collapse; font-size: 10.4px; background-color: rgb(239, 238, 238);">
            <tr>
                <td style="margin: 0.1px; padding: 20px 20px 0px; " :style="textStyle">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" />
                            <td valign="top" style="margin: 0.1px; padding: 0px; font: 10.4px / 13.2px; "
                                :style="textStyle">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 0px 0px 5px;  font: 13.5px / 17.2px"
                                            :style="{ fontFamily: fontFamily }">
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
                                        <td align="left"
                                            style="margin: 0.1px; padding: 5px 0px; text-transform: uppercase; border-top: 1px solid rgb(0, 0, 1);"
                                            :style="textStyle">
                                            <span v-if="editing.general?.position" style="cursor: pointer;">
                                                {{ editing.general?.position }}
                                            </span>
                                            <span v-if="editing.general?.company" style="cursor: pointer;">
                                                &nbsp;|&nbsp;{{ editing.general?.company }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.department" style="cursor: pointer;">
                                                &nbsp;|&nbsp;{{ editing.general?.department }}
                                            </span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :design="editing.design"
                                        :styles="{ ...textStyle, padding: '5px 0px 0px' }" :layout="'column'" />
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
        </table>

        <div>
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
// 模版：显示data.json 中的数据
// 编辑，需要editingStore 来编辑
// 预览：显示store中的数据

export default {
    name: 'Template4',
    mixins: [myMixin]
}
</script>
<style scoped></style>