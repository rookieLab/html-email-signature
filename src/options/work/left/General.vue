<template>

    <div class="o-outer-block u-ps-rel">
        <div class="o-outer-block__wrap u-bs-2 u-of-auto-y general">
            <div class="o-content-block u-maxwd-full">
                <div
                    class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex u-br-t2">
                    <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">General</h2>
                </div>
                <div class="u-pd-va4 u-pd-ha2 u-pd-va5@xl u-pd-ha3@xl">
                    <div class="a-input u-mr-t0">
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="2137">Name</label>
                        <input id="2137" class="a-input__item" maxlength="70" placeholder="Name" type="text"
                            v-model="editing.general.name">
                    </div>
                    <div class="a-input u-mr-t3">
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="2138">Pronoun</label>
                        <input id="2138" class="a-input__item" maxlength="70" placeholder="Pronoun" type="text"
                            v-model="editing.general.pronoun">
                    </div>
                    <div class="a-input u-mr-t3">
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="2139">Company</label>
                        <input id="2139" class="a-input__item" maxlength="70" placeholder="Company" type="text"
                            v-model="editing.general.company">
                    </div>
                    <div class="a-input u-mr-t3">
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="2140">Position</label>
                        <input id="2140" class="a-input__item" maxlength="70" placeholder="Position" type="text"
                            v-model="editing.general.position">
                    </div>
                    <div class="">
                        <div class="a-input u-mr-t3">
                            <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                for="2141">Department</label>
                            <input id="2141" class="a-input__item" maxlength="70" placeholder="Department" type="text"
                                v-model="editing.general.department">
                        </div>
                    </div>
                </div>
                <div class="o-content-block u-maxwd-full">
                    <div
                        class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                        <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Contacts</h2>
                    </div>
                    <div class="u-pd-t1 u-pd-t2@xl">
                        <div class="m-added-field u-mr-b4@xl">
                            <div>
                                <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true"
                                    v-for="contact in editing.general.Contacts">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <!-- <i class="m-added-field__icon-drag icon_service-drag sort"></i> -->
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="2146">{{ contact.name }} title</label>
                                                <input id="2146" class="a-input__item u-pd-r3" maxlength="20"
                                                    :placeholder="contact.name" type="text" :value="contact.name">
                                                <el-icon class="a-input__icon" style="position: absolute;">
                                                    <Football />
                                                </el-icon>
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                for="2147">{{ contact.name }}</label>
                                            <input id="2147" class="a-input__item" maxlength="80"
                                                :placeholder="contact.name" type="text">
                                        </div>
                                        <span class="m-added-field__icon-close">
                                            <el-icon>
                                                <Close />
                                            </el-icon>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div
                            class="o-content-block__row l-dp-flex e--ha-end e--gap-none u-mr-lauto u-mq-mr-b5 u-mr-t2 u-wd-23 u-pd-ha2 u-pd-ha3@xl">
                            <div class="m-select">
                                <!-- <div>
                                    <div class="l-dp-flex e--ha-end e--gap-none u-mr-b1 u-mr-t1">
                                        <a class="a-link l-dp-flex e--va-center e--gap-none u-text-13 u-cl-black-dark"
                                            href="#">Add field <i
                                                class="icon_service-plus u-hv-black-dark u-mr-l1 u-fz-20"></i>
                                        </a>
                                    </div>
                                </div> -->
                                <div class="m-select__list u-hide e--no-select">
                                    <div class="e--no-arrow m-select__item">
                                        <span class="m-select__text" use-font-to-item="true">Phone</span>
                                    </div>
                                    <div class="e--no-arrow m-select__item">
                                        <span class="m-select__text" use-font-to-item="true">Address</span>
                                    </div>
                                    <div class="e--no-arrow m-select__item">
                                        <span class="m-select__text" use-font-to-item="true">Skype</span>
                                    </div>
                                    <div class="e--no-arrow m-select__item">
                                        <span class="m-select__text" use-font-to-item="true">Work phone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="o-content-block u-maxwd-full">
                    <div
                        class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                        <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Custom fields</h2><span
                            class="a-pro-icon u-mr-lauto">
                            <div class="a-tooltip u-fw-300" position="top" tooltip="PRO feature"><i
                                    class="icon_service-pro"></i></div>
                        </span>
                    </div>
                    <div class="u-pd-b8 u-pd-t1 u-pd-b6@xl u-pd-t2@xl">
                        <div class="m-added-field">
                            <div></div>
                        </div>
                        <div class="l-dp-flex e--ha-end e--gap-none u-pd-ha2 u-pd-ha3@xl"><a
                                class="a-link l-dp-flex e--va-center e--gap-none u-text-13 u-cl-black-dark" href="#">Add
                                field <i class="icon_service-plus u-hv-black-dark u-mr-l1 u-fz-20"></i></a></div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

</template>

<script name="General" setup>
import { provide, ref, reactive } from 'vue'
import { useEditingStore } from '@/stores/editing'
const editing = useEditingStore()

</script>
<style scoped></style>