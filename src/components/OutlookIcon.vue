<template>
    <button @click="handleClick" type="button" id="addSignature" class="fui-Button r1alrhcs ___w3o4yv0 fhovq9v f1p3nwhy f11589ue f1q5o8ev f1pdflbu fkfq4zb f1t94bn6 f1s2uweq fr80ssc f1ukrpxl fecsdlb fnwyq0v ft1hn21 fuxngvv fy5bs14 fsv2rcd f1h0usnq fs4ktlq f16h9ulv fx2bmrt f1omzyqd f1dfjoow f1j98vj9 fj8yq94 f4xjyn1 f1et0tmh f9ddjv3 f1wi8ngl f18ktai2 fwbmr0d f44c6la">
        <span class="fui-Button__icon rywnvv2">
            <svg t="1732867091631" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4363" width="20" height="20">
                <path
                    d="M869.935 291.002c-47.762 3.412-155.848 10.172-159.594 7.114 4.719 7.555 93.89 59.002 128.349 79.678-10.416 24.308-17.358 48.607-27.772 69.437l-166.651 24.304 131.932 48.604c-180.535 322.883-475.64 253.447-475.64 253.447s-129.522 125.241-145.82 138.87c-16.297 13.634-14.039 25.618-27.772 20.834-13.731-4.784-6.942-17.361-6.942-20.834 38.188-90.267 211.782-447.864 635.348-722.138-319.413 124.985-482.59 350.655-565.914 520.776C165.157 645.127 92.25 381.27 449.848 211.15l79.855 62.492 10.414-100.681c97.212-34.72 215.253-62.494 364.539-83.323-6.943 76.378-20.829 142.341-34.721 201.364z"
                    fill="#333333" p-id="4364"></path>
            </svg>
        </span>
    </button>
</template>
<script name="Home-Icon" setup>
import { useInjectStore } from '@/stores'

const injectStore = useInjectStore()

const handleClick = () => {
    console.log('handleClick')
    injectStore.showDialog()
}
</script>