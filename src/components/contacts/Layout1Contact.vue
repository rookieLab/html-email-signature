<template>
    <div v-if="layout === 'layout1'">
        <div v-for="contact in contactArray" :key="contact.key">
            <tr style="cursor: pointer;">
                <td
                    style="margin: 0.1px; padding: 5px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value" />
                </td>
            </tr>
        </div>
    </div>
    <div v-else-if="layout === 'layout2'">
        <tr style="cursor: pointer;" v-if="contactArray.length > 0">
            <td
                style="margin: 0.1px; padding: 5px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                <template v-for="(contact, index) in contactArray.slice(0, 2)">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-if="contactArray.length > 2">
            <td
                style="margin: 0.1px; padding: 5px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                <template v-for="(contact, index) in contactArray.slice(2, 4)">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-for="(contact, index) in contactArray.slice(4)" :key="contact.key">
            <td
                style="margin: 0.1px; padding: 5px 0px 0px; font: 10.4px / 13.2px Arial, Helvetica, sans-serif; color: rgb(0, 0, 1);">
                <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value" />
            </td>
        </tr>
    </div>
    <div v-else></div>
</template>

<script name="ContactIndex" setup>
import { ref, watch, computed } from 'vue'
import ContactIndex from './Index.vue'

const props = defineProps({
    layout: {
        type: String,
        default: 'layout2'
    },
    contacts: {
        type: Array,
        default: () => ([])
    }
})
const contactArray = computed(() => {
    return props.contacts.filter((contact) => {
        return contact.name !== '' || contact.value !== ''
    })
})

// console.log('layout1 contactArray:', contactArray.value)
</script>

<style scoped></style>