<template>
    <div>
        <main
            class="h-screen w-full flex flex-col items-center justify-center text-neutral-900 dark:text-neutral-100 bg-center bg-cover bg-fixed "
            style="background-image: url(&quot;chrome-extension://khfdhbngmnjlcfbchfdfodnlinbloceb/assets/background-DImGTlAJ.webp&quot;);">
            <div class="relative size-full flex flex-col items-center justify-center ">
                <h1 class="absolute top-28 left-1/2 -translate-x-1/2 text-5xl font-bold text-neutral-800 ">
                    Online Sign PDF
                </h1>
                <div class="w-full max-w-screen-lg">
                    <el-upload ref="uploadRef" :on-change="changeUpload" class="upload-demo p-10 bg-white rounded-[40px] " drag :multiple="false"
                        :auto-upload="false">
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop pdf here or <em>click to upload pdf</em>
                        </div>
                    </el-upload>
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
const { apPdf, updatePDF } = inject('pdfData')



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
        updatePDF(uploadFile.raw.name, e.target.result)
        updateView('draw')
    };
    reader.readAsArrayBuffer(uploadFile.raw);
}

</script>
<style></style>