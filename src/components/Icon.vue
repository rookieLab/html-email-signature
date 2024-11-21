<template>
    <td>
        <div @click="handleClick" id=":s3" class="J-JN-M-I J-J5-Ji Xv L3 T-I-ax7 T-I wisestamp-icon-container"
            jslog="147027; u014N:cOuCgd,Kr2w4b,xr6bB;" role="button" tabindex="1" aria-haspopup="true"
            aria-expanded="false" aria-label="更多选项" style="user-select: none;" data-v-app="">
            <div role="button" tabindex="0" class="signatures-panel-button ws-active" height="20" width="20">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="4" fill="currentColor"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.4603 5.50691C16.0451 5.14019 14.9485 8.85978 14.5569 10.3266C14.2958 11.2434 12.5726 14.963 11.5282 15.1726C10.745 15.3297 11.1105 13.9414 11.2149 13.5485C11.5021 12.527 11.946 11.4792 12.2332 10.4838C12.3898 9.88136 12.5987 9.27886 12.2332 8.59782C11.8677 7.91678 10.7711 7.49767 10.3795 7.8382C10.3533 8.10014 10.6144 7.99536 10.6405 8.23111C10.745 9.6456 9.72669 12.265 8.89119 13.339C4.50486 18.9445 7.97739 9.69799 8.47346 8.33589C9.90948 3.7519 4.06101 2.3898 2.72944 6.26654L2.67722 6.50229C2.625 6.63326 2.625 6.79043 2.625 6.97379C2.67722 7.52387 2.83387 8.10014 3.53882 8.30969C3.95657 8.44066 4.37432 8.30969 4.53097 7.86439C4.58319 7.73342 4.66152 7.34051 4.42654 7.28812C4.34821 7.26193 4.37432 7.3667 4.13933 7.23573C3.51271 6.81662 3.51271 5.84744 3.87824 5.24497C4.08712 4.87825 4.45264 4.6687 4.79206 4.51153C5.52312 4.14481 6.61971 4.48534 6.77636 5.37594C7.06356 6.9214 6.04531 8.85978 5.39257 10.9029C4.84428 12.6318 4.06101 17.0323 7.27244 15.3821C8.34292 14.8321 9.15232 13.6009 9.30896 13.5485C9.25672 14.6749 9.72669 16.1679 11.1105 15.9846C13.5125 15.7227 19.3088 8.04775 16.724 5.40213C15.6012 4.24959 13.7998 5.00922 13.4081 5.37594C13.2514 5.50691 13.3298 5.53311 13.4603 5.50691Z"
                        fill="white"></path>
                </svg>
            </div>
        </div>
        <div class="J-J5-Ji a0A"></div>
    </td>
</template>
<script name="Home-Icon" setup>
import { INJECT_BTN_GOOGLE_EMAIL } from "@/service/constants"
import { useInjectStore } from '@/stores'

const injectStore = useInjectStore()

const handleClick = () => {
    console.log('handleClick')
    injectStore.showDialog()
}
</script>