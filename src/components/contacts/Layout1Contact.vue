<template>
    <template v-if="layout === 'layout1'" class="layout1-contact">
        <template v-for="contact in contactArray" :key="contact.key">
            <tr style="cursor: pointer;" class="layout1-contact-item">
                <td style="margin: 0.1px; padding: 5px 0px 0px; " :style="baseStyle">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="nameStyle" />
                </td>
            </tr>
        </template>
    </template>
    <template v-else-if="layout === 'layout2'" class="layout2-contact">
        <tr style="cursor: pointer;" v-if="contactArray.length > 0">
            <td style="margin: 0.1px; padding: 5px 0px 0px; " :style="baseStyle">
                <template v-for="(contact, index) in contactArray.slice(0, 2)">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="nameStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-if="contactArray.length > 2">
            <td style="margin: 0.1px; padding: 5px 0px 0px;" :style="baseStyle">
                <template v-for="(contact, index) in contactArray.slice(2, 4)">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="nameStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-for="(contact, index) in contactArray.slice(4)" :key="contact.key">
            <td style="margin: 0.1px; padding: 5px 0px 0px;" :style="baseStyle">
                <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                    :nameStyle="nameStyle" />
            </td>
        </tr>
    </template>
    <template v-else></template>
</template>

<script name="ContactIndex" setup>
import { ref, watch, computed } from 'vue'
import ContactIndex from './Index.vue'

const props = defineProps({
    layout: {
        type: String,
        required: true // Make layout prop required
    },
    contacts: {
        type: Array,
        default: () => ([])
    },
    baseStyle: {
        type: Object,
        default: () => ({
            fontSize: '10.4px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: 'rgb(0, 0, 1)'
        })
    },
    nameStyle: {
        type: Object,
        default: () => ({})
    }
})
const contactArray = computed(() => {
    return props.contacts.filter((contact) => {
        return contact.value !== ''
    })
})

console.log('layout1 baseStyle:', props.baseStyle)
</script>

<style scoped></style>