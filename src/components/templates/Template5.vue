<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 13.4px; background-color: rgb(42, 42, 42);">
            <tr>
                <td style="margin: 0.1px; padding: 20px; ">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" />
                            <td valign="top" style="margin: 0.1px; padding: 0px; " :style="textStyle">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 0px 0px 5px; line-height: 22.2px;"
                                            :style="{ fontFamily: fontFamily, fontSize: editing.design?.fontSize * 1.3 + 'px' }">
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
                                    <Contact :data="editing.general?.contacts" :design="editing.design"
                                        :styles="{ ...textStyle, padding: '5px 0px 0px' }" :layout="'column'" />
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