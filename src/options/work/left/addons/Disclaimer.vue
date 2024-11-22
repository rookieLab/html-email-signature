<template>

        <div class="o-editor-accordion__description e--addon" style="">
                <div class="o-content-block__row u-mr-b3 u-mr-t0">
                        <label class="o-content-block__label u-wd-12 u-mr-r1f5">Type</label>
                        <div class="o-content-block__media e--full">
                                <div class="m-select">
                                        <el-select v-model="selectType" placeholder="Select" size="large"
                                                style="width: 240px">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                        :value="item.value" />
                                        </el-select>

                                        <!-- <div class="m-select__active e--round"
                                                @click="$event.currentTarget.nextElementSibling.classList.toggle('u-hide')">
                                                <a class="m-select__text" href="#" use-font-to-item="true">{{ selectType
                                                        }}</a>

                                        </div>
                                        <div class="m-select__list u-hide" id="m-select__list_type">
                                                <div class="e--select m-select__item"
                                                        @click="handleSelectType($event, 'Confidentiality')">
                                                        <div class="m-select__text" href="#" use-font-to-item="true">
                                                                Confidentiality</div>
                                                </div>
                                                <div class="m-select__item"
                                                        @click="handleSelectType($event, 'Data protection')">
                                                        <a class="m-select__text" href="#" use-font-to-item="true">
                                                                Data protection
                                                        </a>
                                                </div>
                                                <div class="m-select__item"
                                                        @click="handleSelectType($event, 'Ecommerce')">
                                                        <a class="m-select__text" href="#"
                                                                use-font-to-item="true">Ecommerce</a>
                                                </div>
                                                <div class="m-select__item" @click="handleSelectType($event, 'GDPR')">
                                                        <a class="m-select__text" href="#"
                                                                use-font-to-item="true">GDPR</a>
                                                </div>
                                                <div class="m-select__item"
                                                        @click="handleSelectType($event, 'UK Companies Act')">
                                                        <a class="m-select__text" href="#" use-font-to-item="true">UK
                                                                Companies Act</a>
                                                </div>
                                                <div class="m-select__item" @click="handleSelectType($event, 'HIPAA')">
                                                        <a class="m-select__text" href="#"
                                                                use-font-to-item="true">HIPAA</a>
                                                </div>
                                                <div class="m-select__item" @click="handleSelectType($event, 'Custom')">
                                                        <a class="m-select__text" href="#"
                                                                use-font-to-item="true">Custom</a>
                                                </div>
                                        </div> -->
                                </div>
                        </div>
                </div>
                <textarea class="o-content-block__textarea" maxlength="3000" rows="9">{{ selectText }}</textarea>
                <div
                        class="o-content-block__row u-mr-b3 u-display-inline-block u-display-flex@sm u-mr-b1@xl u-mr-t4 u-mr-t5@xl">
                        <label class="o-content-block__label u-wd-12 u-mr-t0 u-mr-b2 u-mr-r1f5 u-mr-b0@sm">
                                Font size
                        </label>

                        <div class="o-content-block__media">
                                <el-slider v-model="value2" />
                        </div>

                </div>
                <div class="o-content-block__row u-mr-b1 u-display-inline-block u-display-flex@sm">
                        <label class="o-content-block__label u-wd-12 u-mr-t0 u-mr-b2 u-mr-r1f5 u-mr-b0@sm">Width</label>
                        <div class="o-content-block__media">
                                <el-slider v-model="value2" />
                        </div>
                </div>
                <div class="o-content-block__row e--social u-mr-t2 u-mr-b3 u-mr-t1f5@xl u-mr-b4@xl">
                        <label class="o-content-block__label u-wd-12 u-mr-r1f5 u-mr-va0">Auto width</label>
                        <div class="o-content-block__media">
                                <div class="a-switch e--jc-start">
                                        <input id="disclaimerWithAuto" class="a-switch__icon" type="checkbox">
                                </div>
                        </div>
                </div>
                <div class="o-content-block__row e--social u-mr-t2 u-mr-b1f5@xl">
                        <label class="o-content-block__label u-wd-12 u-mr-r1f5">Font color</label>
                        <div class="o-content-block__media">
                                <div class="m-color-picker">
                                        <div class="">
                                                <a href="#" class="m-color-picker__current-color"
                                                        style="background-color: rgb(186, 198, 217);"></a>
                                        </div>

                                </div>
                        </div>
                </div>
        </div>
        <!-- <div class="o-editor-accordion__icon-close">
                <div class=""><i class="icon_service-site-close"></i></div>
        </div> -->

</template>

<script name="SignOff" setup>
import { provide, ref, reactive, watch } from 'vue'
import { useEditingStore } from '@/stores'
import FontSelect from '@/components/FontSelect.vue'

const editing = useEditingStore()

const options = [
        {
                value: 'Confidentiality',
                label: 'Confidentiality',
        },
        {
                value: 'Data protection',
                label: 'Data protection',
        },
        {
                value: 'Ecommerce',
                label: 'Ecommerce',
        },
        {
                value: 'GDPR',
                label: 'GDPR',
        },
        {
                value: 'UK Companies Act',
                label: 'UK Companies Act',
        },
        {
                value: 'HIPAA',
                label: 'HIPAA',
        },
        {
                value: 'Custom',
                label: 'Custom',
        },
]


// 选择类型
const selectType = ref('Confidentiality')
const selectText = ref('')
let selectTextMap = {
        'Confidentiality': 'IMPORTANT: The contents of this email and any attachments are confidential. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.',
        'Data protection': 'The email can contain computer viruses that may infect your computer. The recipient of this email should scan this email and all of its attachments if there are any. The organization will accept no liability for any damage caused by any virus transmitted via this email. Emails can be intercepted, lost, destroyed, corrupted, contain viruses, or arrive late or incomplete. This is why the sender does not accept liability for any errors or omissions in the contents of this message, which arise as a result of the email transmission.',
        'Ecommerce': 'If you do not wish to receive more information about our products and/or services, you can unsubscribe by replying to this email with the subject line "DO NOT SEND".',
        'GDPR': '[Company name] is compliant with the GDPR regulation on data protection and privacy in the European Union and the European Economic Area. You can request the information on how we collect and process your private data according to the law by contacting the email sender.',
        'UK Companies Act': '[Company name] is a limited company registered in [England and Wales]. Registered number: [1234567]. Registered office: [Company/Organisation], [Street address], [Post town], [Postcode]',
        'HIPAA': 'Confidentiality note: The information in this email either confidential or protected health information. It might be subject to protection by the Health Insurance Portability and Accountability Act of 1996 (HIPAA). This email is intended to whom it is addressed and for their sole use. If you are not the addressee, note that any use, distribution, copying, or printing of the contained data is strictly prohibited and might be subject to penalties. If you have received this email by mistake, please notify the sender at [email or phone number] and delete this email along with all the attachments.',
        'Custom': '',
}
watch(selectType, (newVal) => {
        selectText.value = selectTextMap[newVal]
})




const init = () => {
        selectText.value = selectTextMap[selectType.value]
}
init()

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

:deep(.el-select .el-select__wrapper) {
        border-radius: 20px;
}
</style>
