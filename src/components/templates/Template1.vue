<template>
    <div>
        <table cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                    <img alt="Regards," src="/assets/8c7f336d-810a-5088-bc33-029256f51e61.png" width="500" />
                </td>
            </tr>
        </table>
        <table cellpadding="0" style="border-collapse: collapse; font-size: 12.1px;" width="500">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="margin: 0.1px; padding: 0px; cursor: pointer;" valign="top">
                                <img alt="SignMaker" src="/assets/959bdba5-916e-5669-8de9-cde518a4e6b2.png"
                                    style="display: block; min-width: 138px;" width="138" />
                            </td>
                            <td style="margin: 0.1px; padding: 0px 0px 0px 15px; font: 12.1px / 15.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);"
                                valign="top">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 14.4px / 18.3px Tahoma, Geneva, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="font-weight: 600; color: rgb(0, 0, 0); cursor: pointer;">
                                                {{ editing.general?.name }}
                                            </span><!-- --><!-- --> 
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
                                                        <component :is="socialIconsMap[icon]" />                                          
                                                        <!-- <a :href="icon.url" target="_blank"
                                                            style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: rgb(255, 0, 105); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                viewBox="0 0 1024 1024"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                style="position: relative; top: 4.6px; width: 13.8px;">
                                                                <path
                                                                    d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                                                                    fill="#ffffff"></path>
                                                            </svg></a> -->
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
        <div><!-- -->
            <table cellpadding="0" style="border-collapse: collapse;" width="500">
                <!-- -->
                <tr>
                    <td style="padding: 20px 0px 0px; margin: 0.1px; cursor: pointer;">
                        <span><img alt="Meet me on Google Meet" src="/assets/f54a1792-9dfe-5bb1-89c8-0768acb7d13d.png"
                                style="display: block;" width="203" /></span>
                    </td>
                </tr>
            </table><!-- -->
            <table border="0" cellpadding="0" cellspacing="0" width="500">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">

                         </td>
                </tr>
            </table>
        </div><!-- -->
    </div>
</template>

<script>
import { useStore } from '@/stores/store'
import { useEditingStore } from '@/stores'
import * as iconComponents from '@/components/svg-a'

export default {
    name: 'Template1',
    data() {
        return {
            editing: {},
            socialIconsMap: {},
            general: {
                name: 'Jason Fuller',
                position: 'Creative Manager',
                company: 'BIG BOLD Innovations',
                email: 'jason@example.com',
                phone: '+2-535-656-12',
                website: 'bigboldin.io',
                signoff: 'Regards,'
            },
            socialIcons: ['appstore', 'airbnb']
        }
    },
    methods: {
        saveTemplate() {
            this.store.saveTemplate('Template1', this.data);
        },
        loadTemplateFromStore() {
            const data = this.store.loadTemplateByName('Template1');
            if (data) {
                this.general = data;
            }
        },
        setEditingStore() {
            this.editing.setGeneral(this.general);
        },
        loadSocialIcons() {
            this.editing.socialIcons = this.socialIcons;

            Object.values(iconComponents).map(component => (
                this.socialIconsMap[component.name] = component
            ))
        }
    },
    mounted() {
        this.store = useStore();
        this.editing = useEditingStore()
        this.loadTemplateFromStore();
        this.setEditingStore();

        this.loadSocialIcons();
    }
}
</script>
<style scoped></style>