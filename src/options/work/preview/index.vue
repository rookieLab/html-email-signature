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
                            <component :is="tempComponents[store.editingTemplate]"></component>
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
import * as tempComponents from '@/components/templates'
import { useEditingStore, useStore } from '@/stores'
// const editing = useEditingStore()
const store = useStore()

</script>
<style scoped></style>