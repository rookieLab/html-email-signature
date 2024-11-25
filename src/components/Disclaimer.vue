<template>
    <table :width="_width" cellpadding="0" style="border-collapse: collapse;">
        <tr>
            <td :style="_styles"> {{ _text }}</td>
        </tr>
    </table>
</template>

<script setup name="Banner">
import { ref, watch, computed, shallowRef } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'table' // table or tr
    },
    data: {
        type: Array,
        default: []
    },
    design: {
        type: Object,
        default: {}
    },
    styles: {
        type: Object,
        default: {}
    }
})

const defaultStyle = { margin: '0.1px', padding: '15px 0px 0px', color: 'rgb(0, 0, 1)', cursor: 'pointer' }
const _styles = computed(() => {
    return {
        ...defaultStyle, ...props.styles,
        color: props.data.color,
        fontSize: props.data.fontSize + 'px',
    }
})
const _width = computed(() => {
    return props.data.autoWidth ? '100%' : props.data.width
})

let selectTextMap = {
    'Confidentiality': 'IMPORTANT: The contents of this email and any attachments are confidential. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.',
    'Data protection': 'The email can contain computer viruses that may infect your computer. The recipient of this email should scan this email and all of its attachments if there are any. The organization will accept no liability for any damage caused by any virus transmitted via this email. Emails can be intercepted, lost, destroyed, corrupted, contain viruses, or arrive late or incomplete. This is why the sender does not accept liability for any errors or omissions in the contents of this message, which arise as a result of the email transmission.',
    'Ecommerce': 'If you do not wish to receive more information about our products and/or services, you can unsubscribe by replying to this email with the subject line "DO NOT SEND".',
    'GDPR': '[Company name] is compliant with the GDPR regulation on data protection and privacy in the European Union and the European Economic Area. You can request the information on how we collect and process your private data according to the law by contacting the email sender.',
    'UK Companies Act': '[Company name] is a limited company registered in [England and Wales]. Registered number: [1234567]. Registered office: [Company/Organisation], [Street address], [Post town], [Postcode]',
    'HIPAA': 'Confidentiality note: The information in this email either confidential or protected health information. It might be subject to protection by the Health Insurance Portability and Accountability Act of 1996 (HIPAA). This email is intended to whom it is addressed and for their sole use. If you are not the addressee, note that any use, distribution, copying, or printing of the contained data is strictly prohibited and might be subject to penalties. If you have received this email by mistake, please notify the sender at [email or phone number] and delete this email along with all the attachments.',
    'Custom': '',
}
const _text = computed(() => {
    return selectTextMap[props.data.type]
})


</script>

<style scoped></style>