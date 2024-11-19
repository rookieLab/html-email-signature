<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <!-- <img alt="Regards," src="/assets/8c7f336d-810a-5088-bc33-029256f51e61.png" width="500" /> -->
                    <!-- {{ editing.addons?.signoff }} -->

                    <img alt="Regards," :src="editing.addons?.signoff" width="500" />
                </td>
            </tr>
        </table>
        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.1px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="margin: 0.1px; padding: 0px; cursor: pointer;" valign="top">
                                <a :href="editing.Image?.avatarLink" target="_blank">
                                    <img alt="SignMaker" :src="editing.Image?.avatarImg"
                                        style="display: block; min-width: 138px;" width="138" /></a>
                            </td>
                            <td style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);"
                                valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 14.4px / 18.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="font-weight: 600; color: rgb(0, 0, 0); cursor: pointer;">
                                                {{ editing.general?.name }}
                                            </span>
                                            <span
                                                style="font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                {{ editing.general?.position }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;"><span style="color: rgb(0, 0, 1);">
                                                    {{ editing.general?.company }}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">
                                                {{ editing.general?.email }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <!-- --><span style="color: rgb(0, 0, 1);"></span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <!-- --><span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">
                                                {{ editing.general?.phone }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 2px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <!-- -->
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: Tahoma, Geneva, sans-serif;">
                                                {{ editing.general?.website }}</span>
                                        </td>
                                    </tr><!-- --><!-- -->
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 8px 0px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td v-for="icon in editing.socialIcons"
                                                        style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                        <component :is="socialIconsMap[icon.name]" :url="icon.url" />
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
            </tr><!-- -->
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
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
                        <a :href="editing.Image?.bannerLink" target="_blank">
                            <img :src="editing.Image?.bannerImg" valign="top" width="373"
                                alt="created with MySignature.io" style="display: block;"></a>
                    </td>
                </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
                </tr>
            </table>
        </div>
        <!-- <div>
            <table cellpadding="0" style="border-collapse: collapse;" width="500">
               
                <tr>
                    <td style="padding: 20px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <span><img alt="Meet me on Google Meet" src="/assets/f54a1792-9dfe-5bb1-89c8-0768acb7d13d.png"
                                style="display: block;" width="203" /></span>
                    </td>
                </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;"></td>
                </tr>
            </table>
        </div> -->
    </div>
</template>

<script>
import { useStore } from '@/stores/store'
import { useEditingStore, useTemplatesStore } from '@/stores'
import * as iconComponents from '@/components/svg-a'

export default {
    name: 'Template1',
    data() {
        return {
            editing: {},
            socialIconsMap: {}
        }
    },
    methods: {
        saveTemplate() {
            this.store.saveTemplate('Template1', this.data);
        },
        initEditingStore() {
            let data = this.store.loadTemplateByName('Template1');
            if (!data) {
                data = this.templates.getTemplate("Template1")
            }
            this.editing.init(data);
        },
        loadSocialIcons() {
            this.editing.socialIcons = this.socialIcons;

            Object.values(iconComponents).map(component => (
                this.socialIconsMap[component.name] = component
            ))
        },
        init() {
            this.initEditingStore("Template1");
            this.loadSocialIcons();
        }
    },
    mounted() {
        this.store = useStore();
        this.editing = useEditingStore()
        this.templates = useTemplatesStore()

        this.init()
    }
}
</script>
<style scoped></style>