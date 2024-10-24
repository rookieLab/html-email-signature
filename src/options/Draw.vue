<template>
    <div>
        <div class="relative w-full px-2 py-1 flex justify-center gap-4 bg-white dark:bg-neutral-800 shadow-md z-10 "
            style="position: fixed;">
            <button
                class="absolute top-1 left-1 p-1 flex items-center justify-center space-x-2 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:opacity-50 rounded-md transition-colors"
                title="Back" type="button" @click="handleBack">
                <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
                </svg>
            </button>
            <!-- <div class="flex items-center gap-1">
                <button
                    class="undefined p-1 flex items-center justify-center space-x-2 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:opacity-50 rounded-md transition-colors"
                    title="Zoom Out" type="button">
                    <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z">
                        </path>
                    </svg>
                </button>
                <span class="inline-block w-12 text-center select-none">100% </span>
                <button
                    class="undefined p-1 flex items-center justify-center space-x-2 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:opacity-50 rounded-md transition-colors"
                    title="Zoom In" type="button">
                    <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z">
                        </path>
                    </svg>
                </button>
            </div> -->
            <button
                class="undefined p-1 flex items-center justify-center space-x-2 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:opacity-50 rounded-md transition-colors"
                :disabled="endStrokeArr.length <= 0" title="Undo" type="button" @click="handleUndo">
                <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z">
                    </path>
                </svg>
            </button>
            <button
                class="undefined p-1 flex items-center justify-center space-x-2 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:opacity-50 rounded-md transition-colors"
                :disabled="endStrokeArr.length <= 0" title="Clear all" type="button" @click="handleClear">
                <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z">
                    </path>
                </svg>
            </button>
            <label
                class="px-1 flex items-center gap-1 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-md transition-colors cursor-pointer "
                title="Pen color">
                <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z">
                    </path>
                </svg>
                <label
                    class="relative size-6 border border-neutral-300 dark:border-neutral-700 overflow-hidden rounded-full ">
                    <input id="pen-color" v-model="state.PenColor" @change="changePenColor"
                        class="absolute p-0 -top-2 -left-2 size-10 cursor-pointer" type="color">
                </label>
            </label>
            <div class="flex items-center gap-2" title="Pen width">
                <label for="pen-width">
                    <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.75 20.85C11.53 20.15 11.14 18.22 10.24 17C9.35 15.75 8.12 14.89 6.88 14.06C6 13.5 5.19 12.8 4.54 12C4.26 11.67 3.69 11.06 4.27 10.94C4.86 10.82 5.88 11.4 6.4 11.62C7.31 12 8.21 12.44 9.05 12.96L10.06 11.26C8.5 10.23 6.5 9.32 4.64 9.05C3.58 8.89 2.46 9.11 2.1 10.26C1.78 11.25 2.29 12.25 2.87 13.03C4.24 14.86 6.37 15.74 7.96 17.32C8.3 17.65 8.71 18.04 8.91 18.5C9.12 18.94 9.07 18.97 8.6 18.97C7.36 18.97 5.81 18 4.8 17.36L3.79 19.06C5.32 20 7.88 21.47 9.75 20.85M18.96 7.33L13.29 13H11V10.71L16.67 5.03L18.96 7.33M22.36 6.55C22.35 6.85 22.04 7.16 21.72 7.47L19.2 10L18.33 9.13L20.93 6.54L20.34 5.95L19.67 6.62L17.38 4.33L19.53 2.18C19.77 1.94 20.16 1.94 20.39 2.18L21.82 3.61C22.06 3.83 22.06 4.23 21.82 4.47C21.61 4.68 21.41 4.88 21.41 5.08C21.39 5.28 21.59 5.5 21.79 5.67C22.08 5.97 22.37 6.25 22.36 6.55Z">
                        </path>
                    </svg>
                </label>
                <input id="pen-width"
                    class="w-36 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer "
                    max="20" min="1" step="0.1" type="range" @change="changePenWidth">
                <span class="inline-block w-7 select-none">{{ state.PenSize }}</span>
            </div>
            <button
                class="undefined p-1 flex items-center justify-center space-x-2 bg-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:opacity-50 rounded-md transition-colors"
                style="width: 32px;height: 32px;" title="Undo" type="button" @click="savePdf">
                <svg t="1729757834710" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="1615" width="200" height="200">
                    <path
                        d="M306.176 549.376l1.024 1.024 173.568 152.576c19.968 17.92 50.176 17.408 70.144-0.512l168.448-152.576c20.992-19.968 22.016-53.248 2.048-74.24-19.456-20.48-51.712-22.016-72.704-3.584l-83.456 75.264V72.192c0-29.184-23.552-52.736-52.736-52.736-29.184 0-52.736 23.552-52.736 52.736v472.064L376.32 471.04c-21.504-19.456-54.784-17.408-74.24 4.096-19.456 21.504-17.92 54.784 4.096 74.24z"
                        fill="#040000" p-id="1616"></path>
                    <path
                        d="M969.216 628.224c-30.208 0-54.784 24.576-54.784 54.784v211.968H109.056v-211.968c0-30.208-24.576-54.784-54.784-54.784S0 652.8 0 683.008V901.12c0 56.832 49.664 102.912 110.592 102.912h802.816c60.928 0 110.592-46.08 110.592-102.912v-218.112c0-30.208-24.576-54.784-54.784-54.784z"
                        fill="#040000" p-id="1617"></path>
                </svg>
            </button>
        </div>
        <div class="interviewVideo_main flex flex-col items-center gap-2 pb-20" id="videoContainer">
            <!--此处根据pdf的页数动态生成相应数量的canvas画布-->
            <div v-for="pageIndex in pdfPages" :key="pageIndex" class="relative ">
                <!-- <canvas :id="`pdf-canvas-` + pageIndex" style="display: block;margin: 0 auto;"></canvas> -->
                <canvas :id="`pdf1-canvas-` + pageIndex" width="612" height="792"
                    style="width: 612px; height: 792px;"></canvas>
                <canvas :id="`pdf2-canvas-` + pageIndex" class="absolute top-0 left-0 pad pen" width="612" height="792"
                    @click="changeSignaturePad(pageIndex - 1)"
                    style="touch-action: none; user-select: none; width: 612px; height: 792px;z-index: 66;"></canvas>
            </div>

        </div>
    </div>

</template>
<script name="Draw" setup>
import { ref, reactive, onMounted, nextTick, inject, toRefs, toRaw } from "vue";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

let pdfDoc = reactive({}); // 保存加载的pdf文件流
let pdfPages = ref(0); // pdf文件的页数
let pdfURL = ref("./hello.pdf"); //pdf文件的链接
let pdfScale = ref(1.0);
let signaturePads = []
let activeSignaturePad = ref(0);

const { view, updateView } = inject('view')
const { apPdf, updatePDF } = inject('pdfData')
const handleBack = () => {
    updateView('home')
}

const downloadPDF = (pdfBytes) => {
    console.log('download', apPdf.name.value)
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    let name = apPdf.name
    name = name.replace('.pdf', '(signed).pdf'); // 替换文件名
    const a = document.createElement('a');
    a.href = url;
    a.download = name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // 释放内存
}

// 保存PDF
async function savePdf() {
    // const existingPdfBytes = await fetch(pdfURL.value).then(res => res.arrayBuffer())
    const copiedBuffer = apPdf.data.slice(0); // 复制一份，避免删除原数据
    const pdfDoc = await PDFDocument.load(copiedBuffer)
    const pages = pdfDoc.getPages()


    function getCanvasBytes(index) {
        let id = 'pdf2-canvas-' + (index + 1)
        const canvas = document.getElementById(id);
        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const bytes = new Uint8Array(reader.result);
                    resolve(bytes); // 这里是以 Bytes 格式获取的图片
                };
                reader.readAsArrayBuffer(blob);
            }, 'image/png'); // 这里可以指定格式
        });
    }


    for (let i = 0; i < pages.length; i++) {
        let page = pages[i]
        let data = await getCanvasBytes(i)
        const pngImage = await pdfDoc.embedPng(data)
        console.log('render:', data, pngImage)
        page.drawImage(pngImage, {
            x: 0,
            y: 0,
            width: pngImage.width,
            height: pngImage.height,
        })
    }
    const pdfBytes = await pdfDoc.save()
    downloadPDF(pdfBytes)
}



// 是有开启undo 和 clear
const endStrokeArr = ref([])
const addEndStroke = (pad) => {
    pad.addEventListener("endStroke", () => {
        endStrokeArr.value.push(0)
    });
}
const popEndStroke = () => {
    return endStrokeArr.value.pop();
}
const clearEndStroke = () => {
    endStrokeArr.value = []
}



const state = reactive({
    PenColor: "",
    PenSize: 2.5
});
const changePenWidth = (e, value) => {
    // console.log('changePenWidth:', e, value, x)
    const min = 1
    let max = e.target.value
    for (let i = 0; i < signaturePads.length; i++) {
        let pad = signaturePads[i]
        pad.minWidth = Math.min(min, max);
        pad.maxWidth = Math.max(min, max);
    }
    state.PenSize = max
}
function hexToRgb(hex) {
    console.log('hexToRgb:', hex)
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r},${g},${b})`
}
const changePenColor = (e) => {
    let hexColor = e.target.value
    let color = hexToRgb(hexColor)
    console.log('changePenColor:', hexColor, color)
    for (let i = 0; i < signaturePads.length; i++) {
        let pad = signaturePads[i]
        pad.penColor = color
    }
}


onMounted(() => {
    let data = apPdf.data
    const copiedBuffer = data.slice(0); // 复制一份，避免删除原数据
    loadFile({ data: copiedBuffer });
    // loadFile(pdfURL.value);
});



const addSignaturePad = (canvas) => {
    let pad = new SignaturePad(canvas, {
        backgroundColor: 'rgba(0,0,0,0)'
    });
    addEndStroke(pad)
    signaturePads.push(pad)
}
const changeSignaturePad = (index) => {
    activeSignaturePad = index
}


const handleClear = () => {
    for (let i = 0; i < signaturePads.length; i++) {
        let pad = signaturePads[i]
        pad.clear();
    }
    clearEndStroke()
}
const handleUndo = () => {
    let pad = signaturePads[activeSignaturePad]
    const data = pad.toData();
    if (data && data.length > 0) {
        // remove the last dot or line
        const removed = data.pop();
        // undoData.push(removed);
        pad.fromData(data);
    }
    popEndStroke()
}


//获取pdf文档流与pdf文件的页数
const loadFile = async (data) => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdf.worker.min.js'
    // "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";
    const loadingTask = pdfjsLib.getDocument(data);
    loadingTask.promise.then((pdf) => {
        console.log(pdf);
        pdfDoc = pdf;
        pdfPages.value = pdf.numPages;
        nextTick(() => {
            renderPage(1);
        });
    });
};
//渲染pdf文件
const renderPage = (num) => {
    pdfDoc.getPage(num).then((page) => {
        // const canvasId = "pdf-canvas-" + num;
        const canvas = document.getElementById("pdf1-canvas-" + num);
        const canvas2 = document.getElementById("pdf2-canvas-" + num);
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        const bsr =
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1;
        const ratio = dpr / bsr;
        const viewport = page.getViewport({ scale: pdfScale.value });
        // canvas.width = viewport.width * ratio;
        // canvas.height = viewport.height * ratio;
        // canvas.style.width = viewport.width + "px";
        // canvas.style.height = viewport.height + "px";
        addSignaturePad(canvas2)
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
        };
        page.render(renderContext);
        if (num < pdfPages.value) {
            renderPage(num + 1);
        }
    });
};
</script>
<style>
#videoContainer {
    height: 842px;
    padding-top: 45px;
}

.pen {
    cursor: url("data:image/svg xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path transform='rotate(90, 12, 12)' d=' M20.71, 7.04C20.37, 7.38 20.04, 7.71 20.03, 8.04C20, 8.36 20.34, 8.69 20.66, 9C21.14, 9.5 21.61, 9.95 21.59, 10.44C21.57, 10.93 21.06, 11.44 20.55, 11.94L16.42, 16.08L15, 14.66L19.25, 10.42L18.29, 9.46L16.87, 10.87L13.12, 7.12L16.96, 3.29C17.35, 2.9 18, 2.9 18.37, 3.29L20.71, 5.63C21.1, 6 21.1, 6.65 20.71, 7.04M3, 17.25L12.56, 7.68L16.31, 11.43L6.75, 21H3V17.25Z' /></svg>"), default;

}

.pad {
    border: solid red 1px;

}
</style>