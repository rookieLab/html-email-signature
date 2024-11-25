<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.1px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" />
                            <td style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; "
                                :style="{ color: editing.design?.TextColor }" valign="top">

                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0px 0px 5px; " :style="textStyle">
                                            <span v-if="editing.general?.name"
                                                style="font-weight: 600;  cursor: pointer;"
                                                :style="{ color: editing.design?.templateColor }">
                                                {{ editing.general?.name }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                                                {{ editing.general?.pronoun }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.position" style="cursor: pointer;">
                                                {{ editing.general?.position }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0px 0px 5px;" :style="textStyle">
                                            <span v-if="editing.general?.company" style="cursor: pointer;">
                                                <span>
                                                    {{ editing.general?.company }}&nbsp;
                                                </span>
                                            </span>
                                            <span style="cursor: pointer;"><span style="color: rgb(0, 0, 1);">
                                                    {{ editing.general?.department }}
                                                </span></span>
                                        </td>
                                    </tr>
                                    <Contact :data="editing.general?.contacts" :design="editing.design"
                                        :layout="'column'" />
                                    <tr>
                                        <td style="margin: 0.1px; padding: 8px 0px 0px;" :style="textStyle">
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
            <Banner :data="editing.Image"></Banner>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div>
            <Conference :data="editing.Addons?.video"></Conference>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
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
    name: 'Template1',
    mixins: [myMixin]
}
</script>
<style scoped></style>