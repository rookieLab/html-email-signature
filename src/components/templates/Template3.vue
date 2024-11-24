<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;" v-if="editing.Addons?.signOff?.img">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img alt="Best wishes," :src="editing.Addons?.signOff?.img" width="500" />
                </td>
            </tr>
        </table>
        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.8px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="margin: 0.1px; padding: 0px;" valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 0px 0px 2px; font: 15.4px / 19.5px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span style="color: rgb(0, 0, 1); font-weight: 600; cursor: pointer;">
                                                {{ editing.general?.name }}
                                                <!-- VANESSA SLATER -->
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 0px 0px 10px; font: 600 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
                                            <span style="cursor: pointer;">
                                                {{ editing.general?.position }}
                                                <!-- REALTOR in Skyline Realty -->
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;" v-for="c in contacts">
                                        <td
                                            style='margin: 0.1px; padding: 1px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>

                                            <ContactIndex :name="c.name" :key="c.key" :value="c.value" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style='margin: 0.1px; padding: 10px 0px 0px; font: 12.8px / 16.3px "Palatino Linotype", "Book Antiqua", Palatino, serif; color: rgb(0, 0, 1);'>
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
                            <td style="margin: 0.1px; padding: 0px 0px 0px 15px; cursor: pointer;" valign="top">
                                <a :href="editing.Image?.avatarLink" target="_blank">
                                        <img alt="SignMaker" :src="editing.Image?.avatarImg" style="display: block;"
                                            :style="{ minWidth: editing.Image?.avatarWidth }"
                                            :width="editing.Image?.avatarWidth" /></a>
                                        
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td v-for="provider in editing.Addons?.marketplace?.providers.filter(p => p.link !== '')"
                        style="padding: 16px 4px 4px 0px; margin: 0.1px;">
                        <a :href="provider.link" target="_blank"><img :src="provider.img" height="45" width="158"
                                :alt="provider.name" style="display: block;"></a>
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
                        <a :href="editing.Image?.bannerLink" target="_blank">
                            <img :src="editing.Image?.bannerImg" valign="top" :width="editing.Image?.bannerWidth"
                                alt="created with MySignature.io" style="display: block;">
                        </a>
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