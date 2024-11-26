<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.8px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="margin: 0.1px; padding: 0px;" valign="top" :style="textStyle">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0px 0px 2px;line-height: 19.5px;"
                                            :style="{ fontFamily: fontFamily, }">
                                            <span v-if="editing.general?.name"
                                                style="font-weight: 600;  cursor: pointer;"
                                                :style="{ color: editing.design?.templateColor, fontSize: editing.design?.fontSize * 1.1 + 'px' }">
                                                {{ editing.general?.name }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.pronoun" style="cursor: pointer;">
                                                {{ editing.general?.pronoun }}&nbsp;
                                            </span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0px 0px 10px;;font-weight: 600;"
                                            :style="textStyle">
                                            <span v-if="editing.general?.position" style="cursor: pointer;">
                                                {{ editing.general?.position }}&nbsp;
                                            </span>
                                            <span v-if="editing.general?.company" style="cursor: pointer;">
                                                {{ editing.general?.company }}
                                            </span>
                                            <span style="cursor: pointer;">
                                                {{ editing.general?.department }}
                                            </span>
                                        </td>
                                    </tr>

                                    <Contact :data="editing.general?.contacts" :design="editing.design"
                                        :layout="'column'" />

                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 10px 0px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <SocialShare :data="editing.socialIcons" :design="editing.design" />

                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 0px 0px 15px' }" />
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <Marketplace :data="editing.Addons?.marketplace" />
            <Banner :data="editing.Image"></Banner>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                         </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>

import { myMixin } from './mixin.js'

export default {
    name: 'Template3',
    mixins: [myMixin]
}
</script>
<style scoped></style>