<template>
    <div class="o-outer-block u-ps-rel">
        <div class="o-outer-block__wrap u-bs-2 u-of-auto-y social">
            <div class="o-content-block u-pd-b8 u-pd-b6@xl u-maxwd-full">
                <div
                    class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex u-br-t2">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Added social icons</h2>
                </div>
                <div class="u-pd-va4 u-pd-ha2 u-pd-va5@xl u-pd-ha3@xl">
                    <div class="a-tooltip" position="top" tooltip="Your current layout does not have a caption field">
                        <div class="a-input u-mr-t0">
                            <label class="a-input__label u-ws-nowrap e--disabled u-bg-snow" for="1396">Caption</label>
                            <input id="1396" class="a-input__item" disabled="" maxlength="50" placeholder="Caption"
                                type="text">
                        </div>
                    </div>
                    <ul class="o-content-block__list">
                        <div>
                            <li v-for="icon in editing.socialIcons" :key="icon.name"
                                class="o-content-block__row e--social u-mr-t2f5 u-mr-b0 draggable-badge"
                                data-draggable="true">
                                <i class="o-content-block__icon-drag e--left-0 icon_service-drag sort-badge"></i>
                                <span class="a-social-logo u-mr-r1 is-brand" :class="`btn-${icon.name?.toLowerCase()}`">
                                    <component :is="socialIconsMap[icon.name]" :url="'#'"></component>
                                </span>
                                <span class="o-content-block__media">
                                    <div class="a-input u-mr-t0">
                                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="1400">
                                            <!-- Youtube -->
                                            {{ icon.name }}
                                        </label>
                                        <input id="1400" class="a-input__item u-pd-r3" maxlength="255"
                                            :placeholder="icon.url" v-model="icon.url" type="text">
                                        <el-icon @click="editing.removeSocialIcon(icon.name)" class="a-input__icon"
                                            style="position: absolute;">
                                            <Close />
                                        </el-icon>
                                    </div>
                                </span>
                            </li>

                        </div>
                    </ul>
                </div>
                <!-- <div class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Custom social icons</h2><span
                        class="a-pro-icon u-mr-lauto">
                        <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature"><i
                                class="icon_service-pro"></i></div>
                    </span>
                </div>
                <div class="u-pd-va4 u-pd-ha2 u-pd-va5@xl u-pd-ha3@xl">
                    <div class="l-flex-box e--between u-fz-13">
                        <div>Use files in PNG or JPEG, up to 3 MB</div><a href="javascript:void(0)"
                            class="u-cl-black-medium u-fw-600">Upload</a><input type="file"
                            accept=".jpg,.jpeg,.png,.gif,.bmp" class="m-media-preview__input-file">
                    </div>
                </div> -->
                <div class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Gallery</h2>
                </div>
                <div class="u-pd-t4 u-pd-ha2 u-pd-ha3@xl">
                    <div class="a-input u-mr-t0"><input id="1412" class="a-input__item u-pd-l3f5" maxlength="100"
                            placeholder="Search" type="text"><i
                            class="a-input__search icon_service-search-regular"></i></div><span
                        class="u-mr-haauto">
                        <div class="m-social-logo-list">
                            <a class="a-social-logo is-brand" :class="`btn-${icon}`" href="#"
                                v-for="icon in socialIcons" :key="icon" @click="editing.addSocialIcon(icon)">
                                <component :is="socialIconsMap[icon]"></component>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script name="Social" setup>
import { provide, ref, reactive } from 'vue'
import { useEditingStore } from '@/stores/editing'
// 自动导入所有 svg 组件
import * as iconComponents from '@/components/svg-icon'
const editing = useEditingStore()


// 创建过滤后的组件映射
const socialIconsMap = {}

Object.values(iconComponents).map(component => (
    socialIconsMap[component.name] = component
))


function unique(arr) {
    return Array.from(new Set(arr))
}
let socialIconsOrder = ['facebook', 'linkedin', 'twitter', 'instagram', 'reddit'].concat(Object.values(iconComponents).map(component => component.name))
const socialIcons = unique(socialIconsOrder)


</script>
<style scoped>
a.a-social-logo svg {
    padding: 6px;
}
</style>
