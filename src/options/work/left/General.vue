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
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="1585">Name</label>
                        <input id="1585" class="a-input__item" maxlength="70" placeholder="Name" type="text"
                            v-model="editing.general.name">
                    </div>
                    <div class="a-input u-mr-t3">
                        <label class="a-input__label u-ws-nowrap u-bg-snow" for="1586">Pronoun</label>
                        <input id="1586" class="a-input__item" maxlength="70" placeholder="Pronoun" type="text"
                            v-model="editing.general.pronoun">
                    </div>
                    <div class="a-input u-mr-t3">
                        <label class="a-input__label u-ws-nowrap u-bg-snow" for="1587">Company</label>
                        <input id="1587" class="a-input__item" maxlength="70" placeholder="Company" type="text"
                            v-model="editing.general.company">
                    </div>
                    <div class="a-input u-mr-t3">
                        <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow" for="1588">Position</label>
                        <input id="1588" class="a-input__item" maxlength="70" placeholder="Position" type="text"
                            v-model="editing.general.position">
                    </div>
                    <div class="">
                        <div class="a-input u-mr-t3">
                            <label class="a-input__label u-ws-nowrap u-bg-snow" for="1589">Department</label>
                            <input id="1589" class="a-input__item" maxlength="70" placeholder="Department" type="text"
                                v-model="editing.general.department">
                        </div>
                    </div>
                </div>
                <div class="o-content-block u-maxwd-full" style="padding-bottom: 20px;">
                    <div
                        class="u-bg-white-medium u-pd-ha2 u-pd-va1 u-pd-va1f5@xl u-pd-ha3@xl u-pd-va2@xl u-display-flex">
                        <h2 class="u-fz-13 u-fw-600 u-lh-1f53 u-cl-black-dark">Contacts</h2>
                    </div>
                    <div class="u-pd-t1 u-pd-t2@xl">
                        <div class="m-added-field u-mr-b4@xl">
                            <div>
                                <div v-for="c in editing.general.contacts" class="u-pd-ha2 u-pd-ha3@xl"
                                    data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1594">{{ c.name }} title</label>
                                                <input id="1594" class="a-input__item u-pd-r3" maxlength="20"
                                                    :placeholder="c.name" type="text" v-model="c.key">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                for="1595">{{ c.name }}</label>
                                            <input id="1595" class="a-input__item" maxlength="100" :placeholder="c.name"
                                                type="text" v-model="c.value">
                                        </div>
                                        <!-- <span class="m-added-field__icon-close icon_service-site-close"></span> -->
                                    </div>
                                </div>
                                <!-- <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1597">Cellphone title</label>
                                                <input id="1597" class="a-input__item u-pd-r3" maxlength="20"
                                                    placeholder="Cellphone title" type="text" value="M:">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                for="1598">Cellphone</label>
                                            <input id="1598" class="a-input__item" maxlength="80"
                                                placeholder="Cellphone" type="text" value="+12023893201">
                                        </div>
                                        <span class="m-added-field__icon-close icon_service-site-close"></span>
                                    </div>
                                </div>
                                <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1600">Address title</label>
                                                <input id="1600" class="a-input__item u-pd-r3" maxlength="20"
                                                    placeholder="Address title" type="text" value="A:">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                for="1601">Address</label>
                                            <input id="1601" class="a-input__item" maxlength="100" placeholder="Address"
                                                type="text" value="Durham, North Carolina">
                                        </div>
                                        <span class="m-added-field__icon-close icon_service-site-close"></span>
                                    </div>
                                </div>
                                <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1603">Phone title</label>
                                                <input id="1603" class="a-input__item u-pd-r3" maxlength="20"
                                                    placeholder="Phone title" type="text" value="P">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-bg-snow" for="1604">Phone
                                                number</label>
                                            <input id="1604" class="a-input__item" maxlength="80"
                                                placeholder="Phone number" type="text" value="">
                                        </div>
                                        <span class="m-added-field__icon-close icon_service-site-close"></span>
                                    </div>
                                </div>
                                <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1606">Website title</label>
                                                <input id="1606" class="a-input__item u-pd-r3" maxlength="20"
                                                    placeholder="Website title" type="text" value="W">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-bg-snow"
                                                for="1608">Website</label>
                                            <input id="1608" class="a-input__item" maxlength="80" placeholder="Website"
                                                type="text" value="">
                                        </div>
                                        <span class="m-added-field__icon-close icon_service-site-close"></span>
                                    </div>
                                </div>
                                <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1610">Skype title</label>
                                                <input id="1610" class="a-input__item u-pd-r3" maxlength="20"
                                                    placeholder="Skype title" type="text" value="S">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-bg-snow" for="1611">Skype</label>
                                            <input id="1611" class="a-input__item" maxlength="80" placeholder="Skype"
                                                type="text" value="">
                                        </div>
                                        <span class="m-added-field__icon-close icon_service-site-close"></span>
                                    </div>
                                </div>
                                <div class="u-pd-ha2 u-pd-ha3@xl" data-draggable="true">
                                    <div class="m-added-field__row u-pd-l2 u-mr-r2">
                                        <div class="u-wd-full u-wd-45p@sm u-pd-r0f5@sm">
                                            <div class="a-input u-mr-t0">
                                                <label class="a-input__label u-ws-nowrap u-display-block u-bg-snow"
                                                    for="1613">Work phone title</label>
                                                <input id="1613" class="a-input__item u-pd-r3" maxlength="20"
                                                    placeholder="Work phone title" type="text" value="w">
                                            </div>
                                        </div>
                                        <div class="a-input u-wd-full u-wd-55p@sm u-pd-l0f5@sm u-mr-t2 u-mr-t0@sm">
                                            <label class="a-input__label u-ws-nowrap u-bg-snow" for="1614">Work
                                                phone</label>
                                            <input id="1614" class="a-input__item" maxlength="80"
                                                placeholder="Work phone" type="text" value="">
                                        </div>
                                        <span class="m-added-field__icon-close icon_service-site-close"></span>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script name="General" setup>
import { provide, ref, reactive } from 'vue'
import { useEditingStore } from '@/stores'
const editing = useEditingStore()

console.log('editing.general.Contacts', editing.general.Contacts)
</script>
<style scoped></style>