<template>

    <ContactEmail v-if="title === 'Email'" :name="name" :value="value" :nameStyle="nameStyle" />
    <ContactPhone v-if="title === 'Cellphone'" :name="name" :value="value" :nameStyle="nameStyle" />
    <ContactSkype v-if="title === 'Skype'" :name="name" :value="value" :nameStyle="nameStyle" />
    <ContactWebsite v-if="title === 'Website'" :name="name" :value="value" :nameStyle="nameStyle" />
    <ContactCellPhone v-if="title === 'Phone'" :name="name" :value="value" :nameStyle="nameStyle" />
    <ContactAddress v-if="title === 'Address'" :name="name" :value="value" :nameStyle="nameStyle" />
</template>

<script name="ContactIndex" setup>
import { ref, watch } from 'vue'
import ContactEmail from './ContactEmail.vue'
import ContactPhone from './ContactPhone.vue'
import ContactSkype from './ContactSkype.vue'
import ContactWebsite from './ContactWebsite.vue'
import ContactCellPhone from './ContactCellPhone.vue'
import ContactAddress from './ContactAddress.vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: 'Email'
    },
    value: {
        type: String,
        default: ''
    },
    nameStyle: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style scoped></style>