<template>
    <div>
        <ContactEmail v-if="title === 'Email'" :name="name" :value="value" />
        <ContactPhone v-if="title === 'Cellphone'" :name="name" :value="value" />
        <ContactSkype v-if="title === 'Skype'" :name="name" :value="value" />
        <ContactWebsite v-if="title === 'Website'" :name="name" :value="value" />
        <ContactCellPhone v-if="title === 'Phone'" :name="name" :value="value" />
        <ContactAddress v-if="title === 'Address'" :name="name" :value="value" />
    </div>
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
    }
})

</script>

<style scoped></style>