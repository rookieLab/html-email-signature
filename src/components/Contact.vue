<template>
    <template v-if="layout === 'column'">
        <tr v-for="c in data">
            <td v-if="c.value" style="margin: 0.1px; padding: 2px 0px;" :style="_styles">
                <ContactIndex :title="c.title" :name="c.name" :value="c.value" :nameStyle="_templateStyle" />
            </td>
        </tr>
    </template>
    <template v-else-if="layout === 'row-left'">
        <tr style="cursor: pointer;" v-if="contactArray.length > 0">
            <td align="left" style="margin: 0.1px; padding: 5px 0px 0px; " :style="{ ..._styles, padding: '1px 0px' }">
                <template v-for="(contact, index) in contactArray.slice(0, 2)">
                    <!-- 如果index 是奇数，则margin-right: 10px; -->
                    <template v-if="index % 2 === 1">
                        {{ separator }}
                    </template>
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="_templateStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-if="contactArray.length > 2">
            <td align="left" style="margin: 0.1px; padding: 5px 0px 0px;" :style="{ ..._styles, padding: '1px 0px' }">
                <template v-for="(contact, index) in contactArray.slice(2, 4)">
                    <template v-if="index % 2 === 1">
                        {{ separator }}
                    </template>
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="_templateStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-for="(contact, index) in contactArray.slice(4)" :key="contact.key">
            <td align="left" style="margin: 0.1px; padding: 5px 0px 0px;" :style="{ ..._styles, padding: '1px 0px' }">
                <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                    :nameStyle="_templateStyle" />
            </td>
        </tr>
    </template>
    <template v-else-if="layout === 'row-left-1'">
        <!-- 有一行有两个 -->
        <tr style="cursor: pointer;" v-if="contactArray.length > 0">
            <td align="left" style="margin: 0.1px; padding: 5px 0px 0px; " :style="{ ..._styles, padding: '1px 0px' }">
                <template v-for="(contact, index) in contactArray.slice(0, 2)">
                    <!-- 如果index 是奇数，则margin-right: 10px; -->
                    <template v-if="index % 2 === 1">
                        {{ separator }}
                    </template>
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="_templateStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-for="(contact, index) in contactArray.slice(2)" :key="contact.key">
            <td align="left" style="margin: 0.1px; padding: 5px 0px 0px;" :style="{ ..._styles, padding: '1px 0px' }">
                <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                    :nameStyle="_templateStyle" />
            </td>
        </tr>
    </template>
    <template v-else-if="layout === 'center'">
        <tr style="cursor: pointer;" v-if="contactArray.length > 0">
            <td align="center" style="margin: 0.1px; padding: 5px 0px 0px; " :style="_styles">
                <template v-for="(contact, index) in contactArray.slice(0, 2)">
                    <!-- 如果index 是奇数，则margin-right: 10px; -->
                    <template v-if="index % 2 === 1">
                        &nbsp;&nbsp;
                    </template>
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="_templateStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-if="contactArray.length > 2">
            <td align="center" style="margin: 0.1px; padding: 5px 0px 0px;" :style="_styles">
                <template v-for="(contact, index) in contactArray.slice(2, 4)">
                    <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                        :nameStyle="_templateStyle" />
                </template>
            </td>
        </tr>
        <tr style="cursor: pointer;" v-for="(contact, index) in contactArray.slice(4)" :key="contact.key">
            <td align="center" style="margin: 0.1px; padding: 5px 0px 0px;" :style="_styles">
                <ContactIndex :title="contact.title" :name="contact.name" :value="contact.value"
                    :nameStyle="_templateStyle" />
            </td>
        </tr>
    </template>
</template>

<script setup name="Contact">
import { ref, watch, computed } from 'vue'
import ContactIndex from './contacts/Index.vue'

const props = defineProps({
    layout: {
        type: String,
        default: 'column' // table or tr
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
    },
    templateStyle: {
        type: Object,
        default: {}
    },
    separator: {
        type: String,
        default: ' '
    }
})

const contactArray = computed(() => {
    return props.data.filter((contact) => {
        return contact.value !== ''
    })
})

const defaultTdStyle = {
    margin: '0.1px',
    fontWeight: 'normal',
    padding: '5px 20px',
    color: '#000001',
    borderBottom: '0'
}
const _styles = computed(() => {
    return { ...defaultTdStyle, ...props.styles }
})

const _templateStyle = computed(() => {
    return {
        color: props.design.templateColor,
        fontWeight: 600,
        ...props.templateStyle
    }
})

</script>

<style scoped></style>