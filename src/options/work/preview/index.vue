<template>
    <div class="u-ps-sticky u-ps-t4" is-edit-signature="false">
        <div class="u-wd-62@xxl u-maxwd-72@xxxl">
            <div class="o-editor-preview u-mr-b0@xl">
                <div class="o-editor-preview__email u-br-20 u-of-hidden u-bs-2">
                    <div class="o-editor-preview__header u-ta-left l-flex-box e--between e--row u-pd-r2 u-pd-r3@xl">
                        <div class="o-editor-preview__title">Signature preview</div>
                        <div class="a-switch e--icons">
                            <input class="a-switch__icon" type="checkbox">
                        </div>
                    </div>
                    <!-- <div class="o-reset-pro-features u-pd-va1"><span>You're using PRO <span
        class="a-pro-icon u-mr-ha0f5">
        <div class="" position="top" tooltip="PRO feature"><i class="icon_service-pro"></i></div>
        </span> design.</span><a class="u-hv-black-dark u-mr-l0f5@sm" href="#">Reset to free
        design.</a></div> -->
                    <div class="o-editor-preview__sign">
                        <div id="signature-preview" class="o-signature-preview u-us-none u-mr-b4 u-of-auto-x">
                            <div>
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0px; cursor: pointer;">
                                            <img width="500"
                                                src="data:image/png;base64,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"
                                                alt="Happy Holidays!">
                                        </td>
                                    </tr>
                                </table>
                                <table cellpadding="0" width="500"
                                    style="border-collapse: collapse; font-size: 13.1px;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0px;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td valign="top" style="margin: 0.1px; padding: 0px;">
                                                        <table cellpadding="0" style="border-collapse: collapse;">
                                                            <tr>
                                                                <td
                                                                    style="margin: 0.1px; padding: 0px 0px 2px; font: 15.6px / 19.8px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                                                                    <span
                                                                        style="color: rgb(0, 0, 1); font-weight: 600; cursor: pointer;">AP-Name</span>&nbsp;
                                                                    <span
                                                                        style="color: rgb(0, 0, 1); cursor: pointer;">AP-Pronoun</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="margin: 0.1px; padding: 0px 0px 2px; font: 600 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                                                                    <span
                                                                        style="cursor: pointer;">AP-Position</span>&nbsp;
                                                                    <span style="cursor: pointer;">AP- Company</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style="margin: 0.1px; padding: 0px 0px 10px; font: 600 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                    AP-Department</td>
                                                            </tr>
                                                            <tr style="cursor: pointer;">
                                                                <td
                                                                    style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                                                                    <span style="color: rgb(0, 0, 1);">Cellphone
                                                                        Title&nbsp;</span>
                                                                    <a href="tel:+1 983 333 3739" target="_blank"
                                                                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;">+1
                                                                        983 333 3739</a>
                                                                </td>
                                                            </tr>
                                                            <tr style="cursor: pointer;">
                                                                <td
                                                                    style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                                                                    <span style="color: rgb(0, 0, 1);">Email
                                                                        Title&nbsp;</span>
                                                                    <a href="mailto:vanessa@skyline.com" target="_blank"
                                                                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;">vanessa@skyline.com</a>
                                                                </td>
                                                            </tr>
                                                            <tr style="cursor: pointer;">
                                                                <td
                                                                    style="margin: 0.1px; padding: 1px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                                                                    <span style="color: rgb(0, 0, 1);">Website
                                                                        Title&nbsp;</span>
                                                                    <a href="https://mysignature.io" target="_blank"
                                                                        style="color: rgb(0, 0, 1); text-decoration: none; font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;">mysignature.io</a>
                                                                </td>
                                                            </tr>
                                                            <!---->
                                                            <tr>
                                                                <td
                                                                    style="margin: 0.1px; padding: 10px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1);">
                                                                    <table cellpadding="0"
                                                                        style="border-collapse: collapse;">
                                                                        <tr>
                                                                            <td
                                                                                style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                                <a href="https://mysignature.io/"
                                                                                    target="_blank"
                                                                                    style="border-radius: 50%; width: 25px; height: 25px; display: block; text-align: center; font-size: 12px; font-family: initial; line-height: 1; background-color: rgb(234, 88, 7);">
                                                                                    <svg viewBox="0 0 1024 1024"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style="position: relative; top: 5px; width: 15px;">
                                                                                        <path
                                                                                            d="M519.85 160.015c0.849 0.003 1.763 0.006 2.74 0.009l10.445 0.047c32.116 0.171 97.222 0.754 168.688 2.734l17.984 0.525 18.156 0.587c3.035 0.103 6.074 0.209 9.114 0.317l18.242 0.685c36.455 1.44 72.559 3.302 104.981 5.708 20 2.453 63.6 2.657 102.6 44.352 30.8 31.68 40.8 103.829 40.8 103.829v0l0.268 2.306c1.612 14.109 9.951 90.704 10.132 167.131v0 79.302c0 84.821-10.2 169.437-10.2 169.437s-10 72.149-40.8 103.829c-39 41.695-82.6 41.899-102.6 44.352-24.317 1.77-50.71 3.251-77.773 4.491l-18.126 0.791c-3.032 0.126-6.069 0.249-9.108 0.37l-18.25 0.689c-97.327 3.504-193.246 4.282-224.543 4.448l-5.095 0.025c-0.718 0.003-1.369 0.006-1.951 0.008h-4.71c-19.049-0.186-268.198-2.748-347.044-10.413-22.8-4.497-74-3.066-113-44.761-30.6-31.68-40.6-103.829-40.6-103.829s-10.2-84.821-10.2-169.437l0.031-87.507c0.349-46.459 3.568-92.038 6.292-122.816l0.935-10.225c1.356-14.348 2.462-24.089 2.82-27.157l0.122-1.034c0 0 9.8-72.149 40.6-103.829 39-41.695 82.6-41.899 102.6-44.352 29.721-2.206 62.534-3.954 95.877-5.339l27.346-1.054c88.16-3.149 175.135-3.956 213.942-4.163l10.445-0.047c0.977-0.003 1.891-0.006 2.74-0.009zM406 369.702v294.114l276.6-146.546-276.6-147.568z"
                                                                                            fill="#ffffff"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                                <a href="https://sdfsadfsad"
                                                                                    target="_blank"
                                                                                    style="border-radius: 50%; width: 25px; height: 25px; display: block; text-align: center; background-color: rgb(234, 88, 7); font-size: 12px; font-family: initial; line-height: 1;">
                                                                                    <svg viewBox="0 0 1024 1024"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style="position: relative; top: 5px; width: 15px;">
                                                                                        <path
                                                                                            d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                                                                                            fill="#ffffff"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                                <a href="https://sdfsadfas"
                                                                                    target="_blank"
                                                                                    style="border-radius: 50%; width: 25px; height: 25px; display: block; text-align: center; background-color: rgb(234, 88, 7); font-size: 12px; font-family: initial; line-height: 1;">
                                                                                    <svg viewBox="0 0 1024 1024"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style="position: relative; top: 5px; width: 15px;">
                                                                                        <path
                                                                                            d="M806.464 32h157.024l-343.040 406.656 403.552 553.344h-316l-247.488-335.616-283.2 335.616h-157.088l366.944-434.944-387.168-525.056h324l223.712 306.752 258.752-306.752zM751.36 894.528h87.008l-561.632-770.176h-93.376l568 770.176z"
                                                                                            fill="#ffffff"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                                <a href="https://asdfsadfas"
                                                                                    target="_blank"
                                                                                    style="border-radius: 50%; width: 25px; height: 25px; display: block; text-align: center; background-color: rgb(234, 88, 7); font-size: 12px; font-family: initial; line-height: 1;">
                                                                                    <svg viewBox="0 0 1024 1024"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style="position: relative; top: 5px; width: 15px;">
                                                                                        <path
                                                                                            d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z"
                                                                                            fill="#ffffff"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                                <a href="https://asdfasf"
                                                                                    target="_blank"
                                                                                    style="border-radius: 50%; width: 25px; height: 25px; display: block; text-align: center; background-color: rgb(234, 88, 7); font-size: 12px; font-family: initial; line-height: 1;">
                                                                                    <svg viewBox="0 0 1024 1024"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style="position: relative; top: 5px; width: 15px;">
                                                                                        <path
                                                                                            d="M740.865 769.637c-316.704 18.968-661.114 133.63-697.431 149.614l42.156-118.881c107.458-49.7 374.035-147.867 702.717-171.31-6.394 24.296-40.963 113.852-47.953 140.023l0.512 0.554v-0.001zM853.779 449.566c0 0-15.473 32.608-30.221 77.321-125.914 7.673-325.442 49.189-422.627 84.398 50.554-46.035 370.241-367.002 370.241-367.002 123.315 84.355 251.829 188.573 251.829 188.573l-169.222 16.71zM105.71 463.632c70.203-31.969 267.046-91.474 455.448-135.591 0 0-362.185 334.393-462.865 437.972l83.119-225.060c-64.62 9.591-93.093 13.427-181.412 31.969l105.668-108.737 0.043-0.554-0.001 0.001zM557.536 104.218c31.286 15.302 147.056 93.988 188.36 123.101-131.967 3.154-389.38 60.058-496.667 95.906 88.021-66.836 251.615-193.091 308.307-219.434v0.427z"
                                                                                            fill="#ffffff"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="margin: 0.1px; padding: 0px 4px 0px 0px; font: 13.1px / 16.5px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(0, 0, 1); cursor: pointer;">
                                                                                <a href="https://asdfasdfasfd"
                                                                                    target="_blank"
                                                                                    style="border-radius: 50%; width: 25px; height: 25px; display: block; text-align: center; background-color: rgb(234, 88, 7); font-size: 12px; font-family: initial; line-height: 1;">
                                                                                    <svg viewBox="0 0 1024 1024"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        style="position: relative; top: 5px; width: 15px;">
                                                                                        <path
                                                                                            d="M520.281 33.802c42.199 0 185.291 11.765 252.766 162.87 22.549 50.851 17.178 137.21 12.745 206.603l-0.128 2.558c-0.512 7.673-0.938 14.706-1.279 21.739 3.197 1.918 8.653 3.836 17.092 3.836 12.788-0.682 28.090-5.115 44.032-12.83 7.033-3.751 14.663-4.433 19.778-4.433 7.757 0 15.302 1.236 21.696 3.836 19.181 6.351 31.286 20.417 31.286 35.72 0.639 19.138-16.624 35.762-51.705 49.786-3.793 1.236-8.908 3.197-14.663 5.072-19.181 5.754-48.55 15.345-56.82 34.526-3.836 9.548-2.6 22.335 5.115 36.999l0.639 0.639c2.558 5.797 65.045 148.122 204.217 171.097 10.869 1.875 18.542 11.509 17.903 21.696 0 3.197-0.639 6.351-1.918 9.591-10.23 24.253-54.262 42.114-134.098 54.176-2.515 3.879-5.115 15.984-6.99 24.296-1.236 7.63-3.154 15.345-5.711 23.572-3.24 11.552-11.509 17.263-23.657 17.263h-1.279c-5.754 0-13.342-1.322-22.933-3.154-15.345-3.197-32.608-5.754-54.262-5.754-12.788 0-25.532 0.639-38.917 3.154-25.575 4.433-47.868 19.778-73.443 37.68-36.359 25.532-77.833 54.901-140.407 54.901-2.558 0-5.072-0.639-7.673-0.639h-6.351c-62.574 0-103.451-28.772-139.768-54.901-25.532-17.903-47.186-33.205-72.761-37.68-13.384-1.918-26.811-3.154-39.556-3.154-23.018 0-40.835 3.793-54.219 6.351-8.994 1.833-16.667 3.154-23.018 3.154-15.941 0-22.293-9.548-24.851-17.903-2.6-8.184-3.836-16.581-5.754-24.168-1.961-7.715-4.476-21.056-7.076-24.296-81.755-9.463-125.744-27.365-135.931-52.258-1.322-2.685-2.217-6.394-2.345-9.591-0.639-10.358 7.033-19.821 17.903-21.696 139.128-23.018 201.616-165.343 204.217-171.353l0.682-1.236c7.673-14.706 9.548-27.493 5.072-37.041-8.312-18.499-37.68-28.048-56.777-34.483-5.158-1.236-10.23-3.154-14.749-5.072-47.186-18.542-53.58-39.641-51.022-54.262 3.836-20.417 28.729-33.802 49.786-33.802 6.223 0 11.509 1.236 16.325 3.154 17.903 8.269 33.631 12.788 47.058 12.788 9.974 0 16.368-2.558 19.821-4.476l-1.961-24.253c-4.177-69.308-9.591-155.624 13.086-206.178 65.6-150.338 208.266-161.847 250.379-161.847l17.86-0.639h2.558l0.004 0.042z"
                                                                                            fill="#ffffff"></path>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td valign="top"
                                                        style="margin: 0.1px; padding: 0px 0px 0px 15px; cursor: pointer;">
                                                        <a href="https://www.image.io" target="_blank">
                                                            <img src="https://img.mysignature.io/p/9/7/8/978bfbea-ac34-57fd-b81a-9e0edf7e0eeb.png?time=1709108740"
                                                                width="134" alt=" 'created with MySignature.io'"
                                                                style="display: block; min-width: 134px;"></a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <!---->
                                </table>
                                <div>
                                    <table cellpadding="0" width="500"
                                        style="width: 500px; color: rgb(0, 0, 1); line-height: 1; font-size: 14.1px; border-collapse: collapse;">
                                        <tr style="cursor: pointer;">
                                            <td width="24" height="24" align="center"
                                                style="padding: 10px 0px 0px; margin: 0.1px; min-width: 24px;">
                                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                    style="width: 15.6px; margin-right: 5px;">
                                                    <path
                                                        d="M153.6 762.013c0.026 28.74 11.455 56.3 31.778 76.623s47.88 31.751 76.622 31.778h499.999c28.74-0.027 56.3-11.455 76.623-31.778s31.751-47.882 31.778-76.623v-347.746h-716.8v347.746zM761.999 153.6h-499.999c-28.742 0.026-56.299 11.455-76.622 31.778s-31.752 47.88-31.778 76.622v87.091h716.8v-87.091c-0.027-28.742-11.455-56.299-31.778-76.622s-47.882-31.752-76.623-31.778zM283.927 283.927c-6.444 0-12.743-1.911-18.102-5.491s-9.534-8.669-12-14.623c-2.466-5.954-3.112-12.504-1.854-18.825s4.36-12.126 8.917-16.682c4.557-4.557 10.362-7.66 16.682-8.917s12.871-0.612 18.825 1.854c5.954 2.466 11.042 6.642 14.622 12s5.491 11.657 5.491 18.102c0 8.641-3.432 16.928-9.543 23.039s-14.397 9.543-23.039 9.543zM381.673 283.927c-6.444 0-12.743-1.911-18.102-5.491s-9.534-8.669-12-14.623c-2.466-5.954-3.112-12.504-1.854-18.825s4.36-12.126 8.917-16.682c4.556-4.557 10.362-7.66 16.682-8.917s12.871-0.612 18.825 1.854c5.954 2.466 11.042 6.642 14.623 12s5.491 11.657 5.491 18.102c0 8.641-3.432 16.928-9.543 23.039s-14.397 9.543-23.039 9.543z"
                                                        fill="#000001"></path>
                                                </svg>
                                            </td>
                                            <td
                                                style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-size: 14.1px; padding: 10px 0px 0px; margin: 0.1px;">
                                                <a href="https://mypag.io/example" target="_blank"
                                                    style="text-decoration: none; font-size: 14.1px; color: rgb(0, 0, 1);">Visit
                                                    my page</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <table width="500" cellpadding="0" style="border-collapse: collapse;">
                                        <tr>
                                            <td
                                                style="margin: 0.1px; padding: 15px 0px 0px; font: 12.1px / 15.3px 'Palatino Linotype', 'Book Antiqua', Palatino, serif; color: rgb(186, 198, 217); cursor: pointer;">
                                                IMPORTANT: The contents of this email and any attachments are
                                                confidential. It is strictly forbidden to share any part of this message
                                                with any third party, without a written consent of the sender. If you
                                                received this message by mistake, please reply to this message and
                                                follow with its deletion, so that we can ensure such a mistake does not
                                                occur in the future.</td>
                                        </tr>
                                    </table>
                                    <table cellpadding="0" style="border-collapse: collapse;"></table>
                                    <table width="500" cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="margin: 0.1px; padding-top: 10px; cursor: pointer;">
                                                <a href="https://mysignature.io/" target="_blank">
                                                    <img src="https://img.mysignature.io/b/9/7/8/978bfbea-ac34-57fd-b81a-9e0edf7e0eeb.png?time=1709108740"
                                                        valign="top" width="317" alt="created with MySignature.io"
                                                        style="display: block;"></a>
                                            </td>
                                        </tr>
                                    </table>
                                    <table width="500" cellspacing="0" cellpadding="0" border="0">
                                        <tr>
                                            <td style="margin: 0.1px; line-height: 1px; font-size: 1px; height: 1px;">
                                                &nbsp;</td>
                                        </tr>
                                    </table>
                                </div>
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; display: block; padding: 15px 0px 0px;"></td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="margin: 0.1px; border-top: 1px solid rgb(238, 238, 238); padding-top: 5px; font-size: 10px; font-family: Arial; cursor: pointer;">
                                            <a href="https://mysignature.io/email-client?utm_source=email_client&amp;utm_medium=free_signature&amp;utm_campaign=branding_line"
                                                target="_blank" style="color: rgb(0, 0, 1); text-decoration: none;">
                                                <img width="250"
                                                    src="https://mysignature.io/images/branding-line/branding-line-1.png"
                                                    alt="Create your own signature"></a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="u-ta-right u-of-hidden u-br-b2 u-ta-right@xl u-mr-t2 u-mr-t3@xl">
                    <span class="l-dp-flex e--reverse e--gap-none">
                        <!-- <button type="button" class="a-btn u-wd-full u-wd-auto@xl">Save and Sign up</button> -->
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script name="Preview" setup>
import { provide, ref, reactive } from 'vue'

import { useEditingStore } from '@/stores/editing'
const editing = useEditingStore()

</script>
<style scoped></style>