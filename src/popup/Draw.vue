<template>
    <div>
        <main class="font-figtree">
            <div
                class="bg-white rounded-[19px] pt-10 pr-8 pb-6 pl-8 flex flex-col items-center justify-between w-[450px] h-[388px] relative ">
                <div class="flex flex-row items-center justify-between self-stretch shrink-0 relative">

                    <img @click="switchView('home')" class=" cursor-pointer" src="/assets/left-arrow.af318377.svg"
                        alt="">
                    <div class="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <div class="text-main-black text-center  text-[22px] font-bold relative">Draw Your Signature
                        </div>
                    </div><svg class="shrink-0 w-8 h-8 relative overflow-visible" width="32" height="32"
                        style="opacity: 0;"></svg>
                </div>
                <div class="flex flex-col gap-6 items-center justify-start shrink-0 relative"><canvas width="386"
                        height="136" class="rounded-[9px] border-solid border-[#dee2e5] border"
                        style="touch-action: none;"></canvas>
                    <div class="flex flex-row gap-[27px] items-start justify-start shrink-0 w-[381px] relative">
                        <div class="flex flex-col gap-2 items-center justify-start flex-1 relative">
                            <div class="text-[#000000] text-center  text-base leading-4 font-bold relative">Width</div>
                            <input id="default-range" type="range" min="1" max="10"
                                class="w-full h-1 rounded-lg cursor-pointer mt-2" value="2">
                        </div>
                        <div class="flex flex-col gap-2 items-center justify-start flex-1 relative">
                            <div class="text-[#000000] text-center  text-base leading-4 font-bold relative">Angle</div>
                            <input id="default-range" type="range" min="0" max="360"
                                class="w-full h-1 rounded-lg cursor-pointer mt-2" value="0">
                        </div>
                        <label for="color"
                            class="rounded-md border-solid border-[#dee2e5] border p-2 flex flex-row gap-[9px] items-center justify-start relative ">
                            <div class="inline-block relative rounded-full w-6 h-6 cursor-pointer"
                                style="background: rgb(0, 0, 0);"></div>
                            <div class="text-black w-16 text-center text-sm leading-4 font-medium relative">#000000
                            </div>
                            <input type="color" id="color" class="absolute top-0 left-0 opacity-0 cursor-pointer"
                                value="#000000">
                        </label>
                    </div>
                </div>
                <div class="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                    <div
                        class="bg-[#e4eff9] hover:bg-red-100 cursor-pointer rounded-lg pt-2 pr-6 pb-2 pl-4 flex flex-row gap-[3px] items-center justify-center flex-1 ">
                        <svg class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.8273 15.3963C13.0226 15.5915 13.3392 15.5915 13.5345 15.3963C13.7297 15.201 13.7297 14.8844 13.5345 14.6891L12.8273 15.3963ZM8.81086 9.96555C8.6156 9.77029 8.29901 9.77029 8.10375 9.96555C7.90849 10.1608 7.90849 10.4774 8.10375 10.6727L8.81086 9.96555ZM14.7153 14.2153C14.9106 14.0201 14.9106 13.7035 14.7153 13.5083C14.5201 13.313 14.2035 13.313 14.0083 13.5083L14.7153 14.2153ZM16.3117 11.2039C16.1173 11.3999 16.1185 11.7165 16.3145 11.911C16.5105 12.1055 16.8271 12.1043 17.0216 11.9083L16.3117 11.2039ZM8.02359 11.4599L11.9599 7.52359L11.2528 6.81649L7.31649 10.7528L8.02359 11.4599ZM8.02359 15.4764C7.45692 14.9097 7.06823 14.5195 6.81502 14.1877C6.57061 13.8673 6.5 13.6607 6.5 13.4681H5.5C5.5 13.9673 5.70773 14.3849 6.02 14.7943C6.32347 15.192 6.7698 15.6368 7.31649 16.1835L8.02359 15.4764ZM7.31649 10.7528C6.7698 11.2995 6.32347 11.7443 6.02 12.1421C5.70773 12.5513 5.5 12.969 5.5 13.4681H6.5C6.5 13.2755 6.57061 13.069 6.81502 12.7487C7.06823 12.4168 7.45692 12.0266 8.02359 11.4599L7.31649 10.7528ZM12.0401 15.4764C11.4734 16.0431 11.0832 16.4318 10.7513 16.685C10.431 16.9294 10.2244 17 10.0318 17V18C10.531 18 10.9487 17.7923 11.3579 17.48C11.7557 17.1765 12.2005 16.7302 12.7472 16.1835L12.0401 15.4764ZM7.31649 16.1835C7.86317 16.7302 8.30801 17.1765 8.70575 17.48C9.11504 17.7923 9.53268 18 10.0318 18V17C9.83924 17 9.63267 16.9294 9.31233 16.685C8.98046 16.4318 8.59027 16.0431 8.02359 15.4764L7.31649 16.1835ZM15.9764 7.52359C16.5431 8.09027 16.9318 8.48046 17.185 8.81233C17.4294 9.13267 17.5 9.33924 17.5 9.53184H18.5C18.5 9.03268 18.2923 8.61504 17.98 8.20575C17.6765 7.80801 17.2302 7.36317 16.6835 6.81649L15.9764 7.52359ZM16.6835 6.81649C16.1368 6.2698 15.692 5.82347 15.2943 5.52C14.8849 5.20773 14.4673 5 13.9681 5V6C14.1607 6 14.3673 6.07061 14.6877 6.31502C15.0195 6.56823 15.4097 6.95692 15.9764 7.52359L16.6835 6.81649ZM11.9599 7.52359C12.5266 6.95692 12.9168 6.56823 13.2487 6.31502C13.569 6.07061 13.7755 6 13.9681 6V5C13.469 5 13.0513 5.20773 12.6421 5.52C12.2443 5.82347 11.7995 6.2698 11.2528 6.81649L11.9599 7.52359ZM13.5345 14.6891L8.81086 9.96555L8.10375 10.6727L12.8273 15.3963L13.5345 14.6891ZM14.0083 13.5083L12.0401 15.4764L12.7472 16.1835L14.7153 14.2153L14.0083 13.5083ZM17.0216 11.9083C17.4621 11.4643 17.8256 11.0839 18.076 10.7269C18.3349 10.3579 18.5 9.97674 18.5 9.53184H17.5C17.5 9.70503 17.4429 9.88805 17.2573 10.1527C17.0633 10.4293 16.7601 10.7521 16.3117 11.2039L17.0216 11.9083Z"
                                fill="#1485E4"></path>
                            <path d="M10.5 18H18.5" stroke="#1485E4" stroke-width="0.75" stroke-linecap="round"></path>
                        </svg>
                        <div class="text-main-blue text-center  text-sm leading-[8px] font-bold relative">Clear All
                        </div>
                    </div>
                    <div
                        class="bg-main-blue hover:bg-blue-600 cursor-pointer rounded-lg pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2 items-center justify-center flex-1 ">
                        <svg class="w-6 h-6" width="25" height="24" viewBox="0 0 25 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.03846 13.6154C6.33584 13.6154 6.57692 13.8565 6.57692 14.1538C6.57692 15.1844 6.57806 15.9031 6.65098 16.4455C6.72181 16.9723 6.85136 17.2512 7.05006 17.45C7.24876 17.6487 7.52774 17.7782 8.05455 17.8491C8.59685 17.9219 9.3156 17.9231 10.3462 17.9231H14.6538C15.6844 17.9231 16.4031 17.9219 16.9455 17.8491C17.4723 17.7782 17.7512 17.6487 17.9499 17.45C18.1487 17.2512 18.2782 16.9723 18.3491 16.4455C18.4219 15.9031 18.4231 15.1844 18.4231 14.1538C18.4231 13.8565 18.6642 13.6154 18.9615 13.6154C19.2589 13.6154 19.5 13.8565 19.5 14.1538V14.1933C19.5 15.1751 19.5 15.9665 19.4164 16.589C19.3295 17.2352 19.1436 17.7793 18.7115 18.2114C18.2793 18.6436 17.7352 18.8295 17.089 18.9164C16.4665 19 15.6751 19 14.6933 19H10.3068C9.3249 19 8.53349 19 7.91105 18.9164C7.26482 18.8295 6.72071 18.6436 6.28856 18.2115C5.85641 17.7793 5.67054 17.2352 5.58366 16.589C5.49997 15.9665 5.49999 15.1751 5.5 14.1933C5.5 14.1801 5.5 14.167 5.5 14.1538C5.5 13.8565 5.74108 13.6154 6.03846 13.6154Z"
                                fill="white"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.5001 15.4103C12.6513 15.4103 12.7955 15.3467 12.8975 15.2351L15.7693 12.0941C15.9699 11.8746 15.9547 11.5341 15.7352 11.3334C15.5158 11.1327 15.1752 11.1479 14.9745 11.3674L13.0386 13.4849V5.53846C13.0386 5.24108 12.7975 5 12.5001 5C12.2027 5 11.9616 5.24108 11.9616 5.53846V13.4849L10.0257 11.3674C9.82505 11.1479 9.48445 11.1327 9.26497 11.3334C9.0455 11.5341 9.03024 11.8746 9.23091 12.0941L12.1027 15.2351C12.2047 15.3467 12.3489 15.4103 12.5001 15.4103Z"
                                fill="white"></path>
                        </svg>
                        <div class="text-white text-center  text-sm leading-[8px] font-bold relative">Download</div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script name="DrawView" setup>
import {useStore} from '@/stores'

const switchView = (view)=>{
    const store = useStore()
    store.switch(view)
}


</script>
<style scoped></style>