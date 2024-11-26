<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />

        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.8px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="middle" />
             
                            <td valign="middle"
                                style="margin: 0.1px; padding: 0px; font: 12.8px / 16.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 4px 15px 0px 0px; cursor: pointer;"><span
                                                style="border-radius: 0%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(20, 186, 71); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                    <path
                                                        d="M925.632 863.595c-112.215 83.848-274.638 128.405-414.657 128.405-196.227 0-372.851-73.316-506.469-195.646-10.401-9.519-1.2-22.684 11.402-15.19 144.22 85.063 322.644 136.101 506.869 136.101 124.217 0 260.836-26.127 386.653-80.203 18.803-8.101 34.805 12.759 16.202 26.532v0zM972.239 809.722c-14.402-18.633-94.813-8.911-131.018-4.456-11.002 1.215-12.602-8.304-2.8-15.392 64.209-45.57 169.423-32.405 181.625-17.215 12.402 15.392-3.2 122.127-63.409 173.165-9.201 7.899-18.002 3.646-14.002-6.684 13.802-34.228 44.006-110.785 29.604-129.418v0zM707.403 734.38l0.2 0.203c24.803-22.076 69.409-61.57 94.613-82.835 10.001-8.101 8.201-21.671 0.4-33.013-22.603-31.595-46.606-57.316-46.606-115.646v-194.43c0-82.43 5.601-157.975-54.207-214.684-47.206-45.772-125.617-61.975-185.625-61.975-117.216 0-248.034 44.354-275.438 190.987-3 15.595 8.401 23.899 18.403 26.127l119.416 13.165c11.202-0.608 19.203-11.747 21.403-23.089 10.201-50.43 52.007-74.937 99.014-74.937 25.403 0 54.207 9.316 69.209 32.405 17.202 25.722 15.002 60.759 15.002 90.532v16.203c-71.41 8.101-164.823 13.367-231.632 43.139-77.211 33.823-131.418 102.684-131.418 203.949 0 129.62 80.611 194.43 184.425 194.43 87.612 0 135.419-20.861 203.028-90.937 22.403 32.81 29.604 48.81 70.61 83.241 9.401 5.063 21.003 4.658 29.204-2.835v0zM583.186 430.177c0 48.608 1.2 89.114-23.003 132.253-19.603 35.241-50.607 56.709-85.212 56.709-47.206 0-74.81-36.456-74.81-90.329 0-106.329 94.213-125.57 183.225-125.57v26.937h-0.2z"
                                                        fill="#ffffff"></path>
                                                </svg></span></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 4px 15px 0px 0px; cursor: pointer;"><span
                                                style="border-radius: 0%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(20, 186, 71); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                    <path
                                                        d="M655.829 22.335c-203.066 0-368.28 165.215-368.28 368.28 0 202.469 165.215 367.129 368.28 367.129 202.469 0 367.172-164.703 367.172-367.129 0-203.066-164.703-368.28-367.172-368.28zM0.128 1003.265h179.877v-980.93h-179.877v980.93z"
                                                        fill="#ffffff"></path>
                                                </svg></span></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 4px 15px 0px 0px; cursor: pointer;"><span
                                                style="border-radius: 0%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(20, 186, 71); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                    <path
                                                        d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                                                        fill="#ffffff"></path>
                                                </svg></span></td>
                                    </tr>
                                </table>
                            </td>
                            <td valign="middle" style="margin: 0.1px; padding: 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 2px; font: 15.4px / 19.5px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(20, 186, 71); font-weight: 600; cursor: pointer;">Camelia
                                                Poler</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 0px 0px 5px; font: 12.8px / 16.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                                            <span style="cursor: pointer;">Healthy Nutrition Coach</span><span
                                                style="cursor: pointer;"></span>
                                        </td>
                                    </tr>
                                    <tr style="cursor: pointer;">
                                        <td
                                            style="margin: 0.1px; padding: 1px 0px; font: 12.8px / 16.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">cam@mysignature.io</span>,&nbsp;<span
                                                style="color: rgb(0, 0, 1); text-decoration: none; font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif;">mysignature.io</span>
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
            <table cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td style="padding: 5px 4px 4px 0px; margin: 0.1px;"><span><img
                                src="https://img.mysignature.io/addons/v2/youtube_v2_shape1_b.png" height="35"
                                width="123" alt="youtube" style="display: block;"></span></td>
                    <td style="padding: 5px 4px 4px 0px; margin: 0.1px;"></td>
                    <td style="padding: 5px 4px 4px 0px; margin: 0.1px;"></td>
                </tr>
            </table>
            <table width="500" cellpadding="0" style="border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="30" style="padding: 15px 0px 0px; margin: 0.1px;"><img
                            src="https://img.mysignature.io/addons/v2/hand-leaves.png" alt="Save paper. Don’t print"
                            style="display: block;"></td>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 13.6px / 17.3px &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; color: gray;">
                        Save paper. Don’t print</td>
                </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">&nbsp;</td>
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

export default {
    name: 'Template47',
    mixins: [myMixin]
}
</script>
<style scoped></style>