<template>

        <div class="o-editor-accordion__description e--addon u-of-hidden" style="">
                <!-- editing.Addons.social.type{{ editing.Addons.social.badgeType }} -->
                <div class="l-dp-flex e--gap-x3 u-mr-b4">
                        <div class="l-dp-flex__item u-wd-auto">
                                <input id="brand" class="a-radio" type="radio" value="brand" v-model="type">
                                <label class="a-radio__label" for="brand">
                                        <span
                                                class="u-fz-11 u-fw-600 u-pd-ha1 u-pd-va0f5 u-cl-snow u-bg-black-dark u-border-black-dark u-br-20">Brand</span></label>
                        </div>
                        <div class="l-dp-flex__item u-wd-auto">
                                <input id="invert" class="a-radio" type="radio" value="invert" v-model="type">
                                <label class="a-radio__label" for="invert">
                                        <span
                                                class="u-fz-11 u-fw-600 u-pd-ha1 u-pd-va0f5 u-border-black-dark u-br-20 u-cl-black-dark">Invert</span></label>
                        </div>
                </div>
                <div>
                        <div v-for="badge in badges" class="o-content-block__row e--social u-mr-b3"
                                data-draggable="true">
                                <label class="m-social-addon" :for="badge.name">
                                        <i class="o-content-block__icon-drag e--left-0 icon_service-drag e--empty"></i>
                                        <el-popover placement="right" :width="200" trigger="hover">
                                                <template #reference>
                                                        <img class="m-social-addon__img" :src="badge.img"
                                                                :alt="badge.name">
                                                </template>
                                                <div class="">
                                                        <img v-for="image in type === 'brand' ? badge.brand : badge.invert"
                                                                :src="image" class="m-social-addon__group-item"
                                                                @click="handleBadgeImgChange(badge, image)">
                                                </div>
                                        </el-popover>
                                </label>
                                <span class="o-content-block__media u-mr-l0f5@xl">
                                        <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-bg-snow"
                                                        for="1226">Link</label>
                                                <input id="1226" class="a-input__item u-pd-r3" maxlength="255"
                                                        placeholder="Link" type="text" v-model="badge.link"
                                                        @blur="handleBadgeLinkBlur">

                                        </div>
                                </span>
                        </div>
                </div>
                <div class="o-content-block__row u-mr-b2 u-mr-t4 u-mr-b1@xl u-mr-t5@xl">
                        <div class="u-display-flex">
                                <label class="o-content-block__label u-wd-12 u-mr-r1f5 e--flex">Shape</label>
                                <span class="m-shapes l-dp-flex e--va-center e--gap-none u-wd-60p u-pd-t0f5">
                                        <ShapeSelect v-model="editing.Addons.social.badgeShape" />
                                </span>
                        </div>
                </div>
                <div class="o-content-block__row u-mr-t1 u-display-inline-block u-display-flex@sm u-mr-t0@xl u-mr-b0">
                        <label
                                class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl">Size</label>

                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                                <el-slider :max="65" :min="15" v-model="editing.Addons.social.badgeSize" />
                        </div>
                </div>
                <div class="o-content-block__row u-mr-t1 u-display-inline-block u-display-flex@sm u-mr-t0@xl u-mr-b0">
                        <label
                                class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-b3 u-mr-b2@sm u-mr-b1@xl u-mr-t0@xl">Padding
                                top</label>


                        <div class="o-content-block__media e--full u-mr-b2 u-mr-t1 u-mr-va3@xl ">
                                <el-slider :max="30" :min="5" v-model="editing.Addons.social.paddingTop" />
                        </div>
                </div>
        </div>
        <!-- <div class="o-editor-accordion__icon-close">
                <div class=""><i class="icon_service-site-close"></i></div>
        </div> -->

</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch, computed, onMounted } from 'vue'
import { useEditingStore } from '@/stores'
import ShapeSelect from '@/components/ShapeSelect.vue'

const editing = useEditingStore()


// badges
const badges = ref([
        {
                name: 'facebook',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/facebook_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/facebook_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/facebook_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/facebook_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/facebook_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/facebook_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/facebook_v3_shape1_i.png',
                ]
        },
        {
                name: 'instagram',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/instagram_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/instagram_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/instagram_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/instagram_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/instagram_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/instagram_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/instagram_v3_shape1_i.png',
                ]
        },
        {
                name: 'twitter',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/twitter_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/twitter_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/twitter_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/twitter_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/twitter_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/twitter_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/twitter_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'linkedin',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/linkedin_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/linkedin_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/linkedin_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/linkedin_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/linkedin_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/linkedin_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/linkedin_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'youtube',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/youtube_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/youtube_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/youtube_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/youtube_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/youtube_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/youtube_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/youtube_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'pinterest',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/pinterest_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/pinterest_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/pinterest_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/pinterest_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/pinterest_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/pinterest_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/pinterest_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'dribbble',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/dribbble_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/dribbble_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/dribbble_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/dribbble_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/dribbble_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/dribbble_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/dribbble_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'behance',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/behance_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/behance_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/behance_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/behance_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/behance_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/behance_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/behance_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'patreon',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/patreon_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/patreon_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/patreon_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/patreon_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/patreon_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/patreon_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/patreon_v3_shape1_i.png',
                ]
        },
        {
                imgName: 'vimeo',
                link: '',
                img: 'https://img.mysignature.io/addons/v2/vimeo_v1_shape1_b.png',
                brand: [
                        'https://img.mysignature.io/addons/v2/vimeo_v1_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v2_shape1_b.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v3_shape1_b.png',
                ],
                invert: [
                        'https://img.mysignature.io/addons/v2/vimeo_v1_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v2_shape1_i.png',
                        'https://img.mysignature.io/addons/v2/vimeo_v3_shape1_i.png',
                ]
        }

])

const updateEditing = () => {
        let data = badges.value.filter(item => item.link).map(item => {
                return { name: item.name, link: item.link, img: item.img }
        })
        editing.Addons.social.data = data
}
const handleBadgeImgChange = (badge, image) => {
        badge.img = image
}

const handleBadgeLinkBlur = () => {
        updateEditing()
}



//  改变Type
const type = ref('brand') // brand | invert
watch(type, (newType) => {
        // console.log(newType)
        editing.Addons.social.badgeType = newType
        updateType(newType)
        updateEditing()
})
const updateType = (newType) => {
        for (let i = 0; i < badges.value.length; i++) {
                badges.value[i].img = newType === 'brand' ? badges.value[i].brand[0] : badges.value[i].invert[0]
        }

}



const initByEditing = () => {
        type.value = editing.Addons.social.badgeType
        updateType(editing.Addons.social.badgeType)

        let m = {}
        editing.Addons.social.data.map(item => m[item.name] = item)
        for (let i = 0; i < badges.value.length; i++) {
                let name = badges.value[i].name
                // console.log('name', name, m[name]?.link)
                m[name]?.img && (badges.value[i].img = m[name]?.img)
                m[name]?.link && (badges.value[i].link = m[name]?.link)
        }
        updateEditing()
}
initByEditing()

</script>
<style scoped>
.slider-demo-block {
        max-width: 600px;
        display: flex;
        align-items: center;
}

.slider-demo-block .el-slider {
        margin-top: 0;
        margin-left: 12px;
}

.slider-demo-block .demonstration {
        font-size: 14px;
        color: var(--el-text-color-secondary);
        line-height: 44px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 0;
}

.slider-demo-block .demonstration+.el-slider {
        flex: 0 0 70%;
}


:deep(#el-color-picker .el-color-picker__trigger) {
        border-radius: 100px;
        background-color: rgb(0, 0, 0);
}

:deep(#el-color-picker .el-color-picker__trigger .el-color-picker__color) {

        display: none;
}

/* :deep(#el-color-picker .el-color-picker__trigger .el-color-picker__color .el-color-picker__color-inner) {
        display: none;
} */
</style>
