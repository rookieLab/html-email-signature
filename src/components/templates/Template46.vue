<template>
    <div>
        <SignOff :data="editing.Addons?.signOff" />
        <table cellpadding="0" width="500" style="border-collapse: collapse; font-size: 12.5px;">
            <tr>
                <td style="margin: 0.1px; padding: 0px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <Avatar :data="editing.Image" :styles="{ padding: '0px 15px 0px 0px' }" valign="top" />

                            <td valign="top" style="margin: 0.1px; padding: 0px;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="left"
                                            style="margin: 0.1px; padding: 0px 0px 2px; line-height: 22.2px;" :style="{
                                                fontFamily: fontFamily,
                                                fontSize: editing.design?.fontSize * 1.2 + 'px'
                                            }">
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
                                        <td align="left" style="margin: 0.1px; padding: 0px 0px 8px " :style="{
                                            ...textStyle,
                                            fontSize: editing.design?.fontSize * 1.1 + 'px'
                                        }">
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
                                    <Contact :data="editing.general?.contacts" :layout="'row-left'"
                                        :styles="{ ...textStyle, padding: '1px 0px' }"
                                        :templateStyle="{ fontWeight: '600', color: editing.design?.templateColor }"
                                        separator=", " />

                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 1px 0px; font: 12.5px / 15.9px Georgia, serif; color: rgb(0, 0, 1);">
                                            <span
                                                style="color: rgb(54, 54, 54); font-weight: 400; cursor: pointer;">8.00
                                                am - 8.00 pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; padding: 10px 0px 0px; font: 12.5px / 15.9px Georgia, serif; color: rgb(0, 0, 1);">
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
                style="width: 500px; color: rgb(128, 128, 128); line-height: 1; font-size: 14.1px; border-collapse: collapse;">
                <tr style="cursor: pointer;">
                    <td width="29" height="29" align="center"
                        style="padding: 17px 0px 0px; margin: 0.1px; min-width: 29px;"><svg viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg" style="width: 18.85px;">
                            <path
                                d="M804.178 568.51c45.904-45.896 120.64-45.896 166.569 0.032 45.931 45.933 45.931 120.667 0 166.6v0l-215.133 214.727c-4.791 4.783-10.736 8.242-17.258 10.050v0l-158.494 43.905c-3.461 0.958-6.986 1.427-10.48 1.427-10.439 0-20.615-4.168-28.11-11.847-10.001-10.251-13.628-25.133-9.466-38.833v0l46.95-154.567c1.881-6.189 5.258-11.818 9.837-16.387v0zM757.864 0c21.688 0 39.268 17.58 39.268 39.268v0 39.267h51.047c86.613 0 157.070 70.462 157.070 157.070v0 176.704c0 21.688-17.58 39.268-39.267 39.268s-39.268-17.58-39.268-39.268v0-176.704c0-43.304-35.231-78.535-78.535-78.535v0h-51.047v39.268c0 21.687-17.58 39.267-39.268 39.267s-39.268-17.58-39.268-39.267v0-39.268h-178.668v39.268c0 21.687-17.58 39.267-39.267 39.267s-39.268-17.58-39.268-39.267v0-39.268h-176.704v39.268c0 21.687-17.58 39.267-39.268 39.267s-39.267-17.58-39.267-39.267v0-39.268h-49.085c-43.304 0-78.535 35.231-78.535 78.535v0 612.574c0 43.304 35.231 78.535 78.535 78.535v0h239.532c21.688 0 39.268 17.58 39.268 39.268s-17.58 39.267-39.268 39.267v0h-239.532c-86.608 0-157.070-70.461-157.070-157.070v0-612.574c0-86.608 70.462-157.070 157.070-157.070v0h49.085v-39.267c0-21.688 17.58-39.268 39.267-39.268s39.268 17.58 39.268 39.268v0 39.267h176.704v-39.267c0-21.688 17.58-39.268 39.268-39.268s39.267 17.58 39.267 39.268v0 39.267h178.668v-39.267c0-21.688 17.58-39.268 39.268-39.268zM796.507 687.114l-145.465 145.143-23.335 76.823 79.737-22.088 144.605-144.336-55.542-55.542zM416.236 714.67c21.687 0 39.268 17.581 39.268 39.268s-17.58 39.268-39.268 39.268c-21.687 0-39.267-17.581-39.267-39.268s17.58-39.268 39.267-39.268zM245.422 714.67c21.687 0 39.268 17.581 39.268 39.268s-17.58 39.268-39.268 39.268c-21.687 0-39.267-17.581-39.267-39.268s17.58-39.268 39.267-39.268zM915.217 624.076c-15.31-15.313-40.222-15.313-55.533 0v0l-7.582 7.565 55.534 55.534 7.608-7.592c15.279-15.285 15.279-40.196-0.027-55.507zM587.050 543.856c21.687 0 39.268 17.581 39.268 39.268s-17.58 39.268-39.268 39.268c-21.687 0-39.268-17.58-39.268-39.268s17.581-39.268 39.268-39.268zM416.236 543.856c21.687 0 39.268 17.581 39.268 39.268s-17.58 39.268-39.268 39.268c-21.687 0-39.267-17.58-39.267-39.268s17.58-39.268 39.267-39.268zM245.422 543.856c21.687 0 39.268 17.581 39.268 39.268s-17.58 39.268-39.268 39.268c-21.687 0-39.267-17.58-39.267-39.268s17.58-39.268 39.267-39.268zM416.236 373.042c21.687 0 39.268 17.58 39.268 39.267s-17.58 39.268-39.268 39.268c-21.687 0-39.267-17.58-39.267-39.268s17.58-39.267 39.267-39.267zM245.422 373.042c21.687 0 39.268 17.58 39.268 39.267s-17.58 39.268-39.268 39.268c-21.687 0-39.267-17.58-39.267-39.268s17.58-39.267 39.267-39.267zM757.864 373.042c21.687 0 39.268 17.58 39.268 39.267s-17.581 39.268-39.268 39.268c-21.687 0-39.268-17.58-39.268-39.268s17.581-39.267 39.268-39.267zM587.050 373.042c21.687 0 39.268 17.58 39.268 39.267s-17.58 39.268-39.268 39.268c-21.687 0-39.268-17.58-39.268-39.268s17.581-39.267 39.268-39.267z"
                                fill="#3BABD6"></path>
                        </svg></td>
                    <td style="font-family: Georgia, serif; font-size: 14.1px; padding: 17px 0px 0px; margin: 0.1px;">
                        <span>Book a meeting.&nbsp;</span><span
                            style="text-decoration: none; font-size: 14.1px; color: rgb(59, 171, 214);">Choose a
                            time</span>
                    </td>
                </tr>
            </table>
            <table width="430" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                    <td
                        style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px Georgia, serif; color: rgb(144, 144, 144); cursor: pointer;">
                        IMPORTANT: The contents of this email and any attachments are confidential. It is strictly
                        forbidden to share any part of this message with any third party, without a written consent of
                        the sender. If you received this message by mistake, please reply to this message and follow
                        with its deletion, so that we can ensure such a mistake does not occur in the future.</td>
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
    name: 'Template46',
    mixins: [myMixin]
}
</script>
<style scoped></style>