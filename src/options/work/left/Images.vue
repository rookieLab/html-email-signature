<template>
    <div class="o-outer-block u-ps-rel">
        <div class="o-outer-block__wrap u-bs-2 u-of-auto-y media">
            <div class="o-content-block u-pd-b8 u-pd-b6@xl u-maxwd-full">
                <div
                    class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex u-br-t2">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Image</h2>
                </div>
                <div class="u-pd-va4 u-pd-ha2 u-display-flex@xl u-pd-t4f5@xl u-pd-b5@xl u-pd-ha3@xl">
                    <div v-if="editing.Image.avatarImg" class="m-media-preview">
                        <img alt="Logo image" :src="editing.Image.avatarImg" class="m-media-preview__image">
                        <el-icon class="m-media-preview__close icon absolute" @click="editing.Image.avatarImg = ''">
                            <Close />
                        </el-icon>
                    </div>
                    <div v-else class="m-media-preview u-wd-full u-minht-15">
                        <a class="m-media-preview__upload">
                            <el-icon class="m-media-preview__icon icon  u-fz-20" style="width: 30px; height: 30px;">
                                <UploadFilled />
                            </el-icon>
                            <span class="m-media-preview__choose">Upload Image</span>
                            <input type="file" accept=".jpg,.jpeg,.png,.gif,.bmp"
                                class="m-media-preview__input-file"></a>
                    </div>
                    <div class="u-wd-full u-mr-l4@xl l-flex-box e--column e--between">
                        <div class="o-content-block__row u-mr-t0 u-mr-b4 u-display-block u-mr-b3@xl"><label
                                class="o-content-block__label u-mr-b3 u-mr-t3 u-mr-t0@xl">Image width</label>
                            <div class="slider-target slider-ltr slider-horizontal slider-txt-dir-ltr">
                                <div class="slider-base">
                                    <div class="slider-connects">
                                        <div class="slider-connect"
                                            style="transform: translate(0%, 0px) scale(0.633333, 1);"></div>
                                    </div>
                                    <div class="slider-origin"
                                        style="transform: translate(-36.6667%, 0px); z-index: 4;">
                                        <div class="slider-handle slider-handle-lower" data-handle="0" tabindex="0"
                                            role="slider" aria-orientation="horizontal" aria-valuemin="20.0"
                                            aria-valuemax="200.0" aria-valuenow="134.0" aria-valuetext="134 px">
                                            <div class="slider-touch-area"></div>
                                            <div class=" slider-tooltip slider-tooltip-top">134 px</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="a-input u-mr-t0 u-wd-full">
                            <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="1383">Link</label>
                            <input id="1383" v-medel="editing.Image.avatarLink" class="a-input__item u-pd-r5"
                                maxlength="255" placeholder="Link" type="text">
                            <span class="a-pro-icon e--input">
                                <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature">
                                    <i class="icon_service-pro"></i>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Banner</h2>
                </div>
                <div class="u-pd-t3 u-pd-ha2 u-pd-t4@xl u-pd-ha3@xl"><!---->
                    <div v-if="editing.Image.bannerImg" class="m-media-preview u-wd-full">
                        <img alt="Banner image" :src="editing.Image.bannerImg" class="m-media-preview__image e--btn">
                        <el-icon class="m-media-preview__close icon absolute" @click="editing.Image.bannerImg = ''">
                            <Close />
                        </el-icon>
                    </div>
                    <div v-else class="m-media-preview u-wd-full u-minht-15">
                        <a class="m-media-preview__upload">
                            <el-icon class="m-media-preview__icon icon  u-fz-20" style="width: 30px; height: 30px;">
                                <UploadFilled />
                            </el-icon>
                            <span class="m-media-preview__choose">Upload or choose from our gallery</span>
                            <input type="file" accept=".jpg,.jpeg,.png,.gif,.bmp" @change="uploadBanner"
                                class="m-media-preview__input-file"></a>
                    </div>
                    <div class="o-content-block__row u-mr-t2 u-display-inline-block u-display-flex@sm">
                        <label class="o-content-block__label u-mr-b3 u-mr-b1@sm u-mr-b0@xl u-mr-t0@xl">
                            Banner width</label>
                        <div class="o-content-block__wrap u-mr-t0">
                            <!-- <el-slider :max="500" :min="100" v-model="editing.Image.bannerWidth" /> -->
                        </div>
                    </div>
                    <div class="a-input u-mr-t3 u-mr-t3f5@xl">
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="1392">Link</label>
                        <input id="1392" class="a-input__item" v-medel="editing.Image?.avatarLink" maxlength="255"
                            placeholder="Link" type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script name="Image" setup>
import { provide, ref, reactive } from 'vue'
import { UploadFilled, Close } from '@element-plus/icons-vue'
import { useEditingStore, useTemplatesStore } from '@/stores'

const editing = useEditingStore()


// 
const uploadBanner = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        editing.Image.bannerImg = e.target.result;
    };
    reader.readAsDataURL(file);
}

</script>
<style scoped>
.absolute {
    position: absolute;
}
</style>