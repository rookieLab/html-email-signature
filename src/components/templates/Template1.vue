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
                                    <Contact :data="editing.general?.contacts" :design="editing.design" :layout="'column'" />
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
            <table cellpadding="0" width="500"
                style="width: 500px; color: rgb(0, 0, 1); line-height: 1; font-size: 14.1px; border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="24" height="24" align="center"
                        style="padding: 10px 0px 0px; margin: 0.1px; min-width: 24px;"><svg viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg" style="width: 15.6px; margin-right: 5px;">
                            <path
                                d="M153.6 762.013c0.026 28.74 11.455 56.3 31.778 76.623s47.88 31.751 76.622 31.778h499.999c28.74-0.027 56.3-11.455 76.623-31.778s31.751-47.882 31.778-76.623v-347.746h-716.8v347.746zM761.999 153.6h-499.999c-28.742 0.026-56.299 11.455-76.622 31.778s-31.752 47.88-31.778 76.622v87.091h716.8v-87.091c-0.027-28.742-11.455-56.299-31.778-76.622s-47.882-31.752-76.623-31.778zM283.927 283.927c-6.444 0-12.743-1.911-18.102-5.491s-9.534-8.669-12-14.623c-2.466-5.954-3.112-12.504-1.854-18.825s4.36-12.126 8.917-16.682c4.557-4.557 10.362-7.66 16.682-8.917s12.871-0.612 18.825 1.854c5.954 2.466 11.042 6.642 14.622 12s5.491 11.657 5.491 18.102c0 8.641-3.432 16.928-9.543 23.039s-14.397 9.543-23.039 9.543zM381.673 283.927c-6.444 0-12.743-1.911-18.102-5.491s-9.534-8.669-12-14.623c-2.466-5.954-3.112-12.504-1.854-18.825s4.36-12.126 8.917-16.682c4.556-4.557 10.362-7.66 16.682-8.917s12.871-0.612 18.825 1.854c5.954 2.466 11.042 6.642 14.623 12s5.491 11.657 5.491 18.102c0 8.641-3.432 16.928-9.543 23.039s-14.397 9.543-23.039 9.543z"
                                fill="#000001"></path>
                        </svg></td>
                    <td
                        style="font-family: Tahoma, Geneva, sans-serif; font-size: 14.1px; padding: 10px 0px 0px; margin: 0.1px;">
                        <a href="https://mypag.io/example" target="_blank"
                            style="text-decoration: none; font-size: 14.1px; color: rgb(0, 0, 1);">Visit my page</a>
                    </td>
                </tr>
            </table>
            <!-- <table v-if="editing.Image?.bannerImg" width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
                        <a :href="editing.Image?.bannerLink" target="_blank">
                            <img :src="editing.Image?.bannerImg" valign="top" :width="editing.Image?.bannerWidth"
                                alt="created with MySignature.io" style="display: block;">
                        </a>
                    </td>
                </tr>
            </table> -->
            <Banner :data="editing.Image"></Banner>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <div>
            <table cellpadding="0" style="border-collapse: collapse;" width="500">

                <tr>
                    <td style="padding: 20px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <a :href="editing.Addons?.video?.url" target="_blank" :style="meetStyle" style="
                            display: flex;
                            gap: 10px;
                            padding: 10px;
                            display: inline-flex;
                            font-weight: 800;
                        ">
                            <IconsMeet :name="editing.Addons?.video?.type" :color="editing.Addons?.video?.color" />
                            <span> {{ editing.Addons?.video?.text }}</span>
                        </a>
                    </td>
                </tr>
            </table>
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