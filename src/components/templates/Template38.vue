<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <div>
            <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 14.6px;">
                <tr>
                    <td style="margin: 0.1px; padding: 0px;">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <td valign="top"
                                    style="border-left: 1px solid rgb(255, 189, 0); margin: 0.1px; padding: 0px 0px 0px 12px; font: 14.6px / 18.5px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1);">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 18.9px / 24.1px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1);">
                                                <span
                                                    style="font-weight: 600; color: rgb(255, 189, 0); cursor: pointer;">Mandoo</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 0px 0px 8px; font: 14.6px / 18.5px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1);">
                                                <span style="color: rgb(0, 0, 1); cursor: pointer;">Support
                                                    team</span>
                                            </td>
                                        </tr>
                                        <Contact :data="editing.general?.contacts" :layout="'column'"
                                            :styles="textStyle"
                                            :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }" />
                                           <tr >
                                        <td align="left"
                                                style="margin: 0.1px; padding: 10px 0px 0px; font: 11.8px / 15.1px Georgia, serif; color: rgb(0, 0, 1);">
                                                <SocialShare :data="editing.socialIcons" :design="editing.design" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 12px 0px 0px; font: 14.6px / 18.5px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1);">
                                                <table cellpadding="0" style="border-collapse: collapse;">
                                                    <tr>
                                                        <td
                                                            style="margin: 0.1px; padding: 0px 5px 0px 0px; font: 14.6px / 18.5px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1); cursor: pointer;">
                                                            <span
                                                                style="border-radius: 50%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(0, 174, 76); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                    viewBox="0 0 1024 1024"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                                    <path
                                                                        d="M289.336 541.418c0 23.384-18.667 42.271-41.334 42.271-23.111 0-41.777-18.888-41.777-42.271 0-22.935 18.667-41.823 41.777-41.823 22.667 0 41.334 18.888 41.334 41.823zM802.224 540.968c0 23.384-18.667 42.271-41.777 42.271s-41.777-18.888-41.777-42.271c0-23.383 18.667-41.823 41.777-41.823s41.777 18.438 41.777 41.823zM340.001 541.418c0-47.668-38.667-86.793-85.778-86.793-47.556 0-85.778 39.125-85.778 86.793 0 48.119 38.222 86.793 85.778 86.793 47.11 0 85.778-38.675 85.778-86.793zM852.445 540.968c0-47.668-38.222-86.793-85.778-86.793-47.11 0-85.778 39.125-85.778 86.793 0 48.119 38.667 86.793 85.778 86.793 47.556 0 85.778-38.675 85.778-86.793zM377.78 541.418c0 69.254-55.111 125.468-123.555 125.468s-124-56.214-124-125.468c0-68.804 55.556-125.017 124-125.017s123.555 56.214 123.555 125.017zM890.667 540.968c0 69.254-55.556 125.017-124 125.017-68 0-123.555-55.763-123.555-125.017s55.556-125.017 123.555-125.017c68.444 0 124 55.763 124 125.017zM462.224 542.317c0-114.674-92-207.763-205.333-207.763-112.888 0-204.889 93.089-204.889 207.763s92 207.763 204.889 207.763c113.333 0 205.333-93.089 205.333-207.763zM759.112 284.637c-73.333-32.379-156-49.917-247.111-49.917s-181.777 17.539-254.667 49.468c140.889 0.45 254.667 115.573 254.667 258.13 0-139.858 109.778-253.634 247.111-257.682v0.002zM972.001 542.317c0-114.674-91.555-207.763-204.889-207.763s-205.333 93.089-205.333 207.763c0 114.674 92 207.763 205.333 207.763s204.889-93.089 204.889-207.763zM853.778 287.785h170.222c-26.667 31.479-46.223 73.752-51.11 102.983 30.668 42.722 48.889 94.888 48.889 151.549 0 142.556-114.221 257.683-254.667 257.683-79.999 0-151.111-36.877-197.778-94.889 0 0-20.888 25.183-57.333 80.498-6.222-13.041-37.777-58.462-56.889-80.946-46.667 58.462-118.222 95.337-198.223 95.337-140.443 0-254.667-115.125-254.667-257.682 0-56.663 18.222-108.828 48.889-151.549-4.889-29.231-24.444-71.502-51.11-102.983h162.222c87.111-58.911 213.778-95.786 349.778-95.786s254.667 36.875 341.778 95.786v-0.002z"
                                                                        fill="#ffffff"></path>
                                                                </svg></span>
                                                        </td>
                                                        <td
                                                            style="margin: 0.1px; padding: 0px 5px 0px 0px; font: 14.6px / 18.5px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1); cursor: pointer;">
                                                            <span
                                                                style="border-radius: 50%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(0, 174, 76); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                    viewBox="0 0 1024 1024"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                                    <path
                                                                        d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                                                                        fill="#ffffff"></path>
                                                                </svg></span>
                                                        </td>
                                                        <td
                                                            style="margin: 0.1px; padding: 0px 5px 0px 0px; font: 14.6px / 18.5px &quot;Courier New&quot;, Courier, monospace; color: rgb(0, 0, 1); cursor: pointer;">
                                                            <span
                                                                style="border-radius: 50%; width: 22px; height: 22px; display: block; text-align: center; background-color: rgb(0, 174, 76); font-size: 12px; font-family: initial; line-height: 1;"><svg
                                                                    viewBox="0 0 1024 1024"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    style="position: relative; top: 4.4px; width: 13.2px;">
                                                                    <path
                                                                        d="M1018.366 67.964l-465.206 930.414c-7.996 15.991-23.987 25.441-41.432 25.441-3.634 0-7.268-0.726-10.903-1.454-21.079-5.088-35.617-23.261-35.617-45.067v-418.686h-418.686c-21.807 0-39.979-14.538-45.067-35.617s5.088-42.886 23.987-52.336l930.414-465.206c6.542-3.634 13.811-5.088 21.079-5.088 12.357 0 23.987 4.362 32.709 13.811 14.538 13.811 18.173 35.617 8.722 53.79z"
                                                                        fill="#ffffff"></path>
                                                                </svg></span>
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
                </tr>
            </table>
        </div>
        <div>
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
    name: 'Template38',
    mixins: [myMixin]
}
</script>
<style scoped></style>