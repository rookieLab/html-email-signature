<template>
    <button @click="handleClick" class="D_F r_P gl_C ab_C ek_BB b_n o_h G_e J_x A_6DUj i_N W_72FG H_72FG C_sfJow p_R I_T dq34_hP p34_a e34_Z1pAdC9 T34_0 L34_0 W34_6D6F H34_6D6F I34_wzKXL O34_Z20hJ4G h34_1DdG6g lt34_C ly34_2msHci lx34_ZPrgjW lz34_ZaEH55 I4_T C4_1GbO8e ly36_2msHci lx36_jhDhM O36_1grVag h36_Z1ihKFs lt36_C h38_Z1W34hX lt38_C ly38_1f1FRF lx38_jhDhM lz38_ZaEH55 cZIxwby_dRA e_Z1mIQBG E_dm5" tabindex="-1" type="button" aria-label="Make selection underlined" data-iskeynav="true">
         <svg t="1732867091631" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4363" width="20" height="20">
            <path
                d="M869.935 291.002c-47.762 3.412-155.848 10.172-159.594 7.114 4.719 7.555 93.89 59.002 128.349 79.678-10.416 24.308-17.358 48.607-27.772 69.437l-166.651 24.304 131.932 48.604c-180.535 322.883-475.64 253.447-475.64 253.447s-129.522 125.241-145.82 138.87c-16.297 13.634-14.039 25.618-27.772 20.834-13.731-4.784-6.942-17.361-6.942-20.834 38.188-90.267 211.782-447.864 635.348-722.138-319.413 124.985-482.59 350.655-565.914 520.776C165.157 645.127 92.25 381.27 449.848 211.15l79.855 62.492 10.414-100.681c97.212-34.72 215.253-62.494 364.539-83.323-6.943 76.378-20.829 142.341-34.721 201.364z"
                fill="#333333" p-id="4364"></path>
        </svg>
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