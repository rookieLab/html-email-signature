<template>
    <div>
        <main
            class="h-screen w-full flex flex-col items-center justify-center text-neutral-900 dark:text-neutral-100 bg-center bg-cover bg-fixed "
            style="background-image: url(&quot;chrome-extension://khfdhbngmnjlcfbchfdfodnlinbloceb/assets/background-DImGTlAJ.webp&quot;);">
            <div class="relative size-full flex flex-col items-center justify-center ">
                <h1 class="absolute top-28 left-1/2 -translate-x-1/2 text-5xl font-bold text-neutral-800 ">Sign <span
                        class="font-black">PDF</span></h1>
                <div class="w-full max-w-screen-lg">
                    <el-upload ref="uploadRef" :on-change="changeUpload" class="upload-demo" drag :multiple="false"
                        :auto-upload="false">
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files with a size less than 500kb
                            </div>
                        </template>
                    </el-upload>
                    <!-- <div class="size-full">
                        <input id="dropzone-file" class="sr-only peer" accept="application/pdf" type="file">
                        <div class="p-10 bg-white rounded-[40px] "><label
                                class="p-4 h-80 w-full flex flex-col items-center justify-center text-lg rounded-3xl border-2 border-dashed border-blue-600 cursor-pointer transition-colors "
                                for="dropzone-file">
                                <div class="mb-5 flex gap-3 items-center"><img alt="drop"
                                        src="chrome-extension://khfdhbngmnjlcfbchfdfodnlinbloceb/assets/drug-and-drop-B4HR23Jl.png">
                                    <span class="text-blue-600">Drag–and–Drop</span>
                                </div>
                                <div
                                    class="w-60 h-12 flex flex-wrap place-content-center bg-fuchsia-700 text-white rounded-full select-none cursor-pointer ">
                                    Select PDF file</div>
                            </label>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="hidden fixed top-0 left-0 p-4 w-screen h-screen bg-white/80 dark:bg-black/80 z-10 "
                role="dialog">
                <div
                    class="w-full h-full flex flex-wrap place-content-center border-4 border-dashed border-gray-400 deark:border-gray-600 text-gray-600 dark:text-gray-400 text-xl text-center pointer-events-none ">
                    Drop PDF file here</div>
            </div>
            <ul class="_toastContainer svelte-yh90az"></ul>
        </main>
    </div>
</template>
<script name="Home" setup>
import { UploadFilled, } from '@element-plus/icons-vue'
import { reactive, onMounted, ref, computed, inject } from 'vue';

const { view, updateView } = inject('view')
const { pdfData, updatePDFData } = inject('pdfData')



function getObjectURL(file) {
    var url = null;
    if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    // let urlkeyvlueitem = { url: url, file: file }
    return url;
}


const changeUpload = (uploadFile, uploadFiles) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        const arrayBufferOfPdfData = e.target.result;
        const myData = new Uint8Array(arrayBufferOfPdfData);
        // const docInitParams = { data: myData };
        updatePDFData(myData)
        updateView('draw')
    };
    reader.readAsArrayBuffer(uploadFile.raw);
}

</script>
<style></style>