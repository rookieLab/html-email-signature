<template>
  <transition appear>
    <div v-show="injectStore.show" id="ap-inject-app" style="display: flex;flex-direction: column; z-index: 9;">
      <div class="header">
        <h1>Email Signature - SignMaker</h1>
        <div class="header-close" @click="closeDialog">
          <el-icon @click="closeDialog">
            <Close />
          </el-icon>
        </div>
      </div>
      <div class="main" style="padding: 0 10px;">
        <div class="template-container" @click="handleSelectTemplate('Template1')">
          <Template1 />
        </div>
        <el-button style="width: 100%;margin-top: 15px;" type="primary" round @click="handleMoreSignature">
          More Signature
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script name="Home" setup>
import { UploadFilled, Close, CloseBold } from '@element-plus/icons-vue'
import { reactive, onMounted, ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import { useInjectStore } from '@/stores'
import Template1 from '@/components/templates/Template1.vue';

const injectStore = useInjectStore()

const closeDialog = () => {
  injectStore.show = false
}

const handleSelectTemplate = (templateName) => {
  console.log('handleSelectTemplate', templateName)
}


const handleMoreSignature = () => {
  window.postMessage({
    type: 'FROM_INJECT',
    action: 'MORE_SIGNATURE',
  }, '*')
}

// import SVGBlibli from "@/components/svg/bili.vue"
// import SVGBlibliActive from "@/components/svg/biliActive.vue"
// import SVGDouyin from "@/components/svg/douyin.vue"
// import SVGDouyinActive from "@/components/svg/douyinActive.vue"
// import SVGxhs from "@/components/svg/xhs.vue"
// import SVGxhsActive from "@/components/svg/xhsActive.vue"


// const douyinStore = useDouyinStore();
// const content = computed({
//   get() { return douyinStore.content },
//   set(val) { douyinStore.content = val }
// })
// const state = reactive({
//   fileName: "",
//   fileType: "",
//   fileBase64: "",
// });


// // 文件上传
// const uploadRef = ref()
// const changeUpload = (uploadFile, uploadFiles) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(uploadFile.raw);
//     reader.onload = () => {
//       state.fileBase64 = reader.result
//       state.fileName = uploadFile.raw.name
//       state.fileType = uploadFile.raw.type // "video/mp4"
//       resolve(false);  // 阻止文件的自动上传
//     };
//     reader.onerror = (error) => {
//       console.error('File reading error:', error);
//       reject(error);
//     };
//     console.log('changeUpload', uploadFile)
//   })
// }


// const closeDialog = () => {
//   douyinStore.close()
// }

// const handleUpload = () => {
//   console.log('inject uploadAll')
//   const base64String = state.fileBase64.split(',')[1]; // 获取 Base64 字符串
//   window.postMessage({
//     to: 'background',
//     action: "upload",
//     data: {
//       title: douyinStore.title,
//       content: douyinStore.content,
//       publishTime: douyinStore.publishTime,
//       fileBase64: base64String,
//       fileName: state.name,
//       fileType: state.type,// "video/mp4"
//       apps: JSON.stringify(douyinStore.socialApps)
//     }
//   }, response => {
//     console.log("Response from background:", response);
//   });
//   window.postMessage({ type: 'FROM_INJECT', upload: true, data: 'all' }, '*');
// }

onMounted(() => {
  chrome.runtime.onMessage.addListener((data) => {
    console.log('page app', data)
    if (data.actionClicked === true) {
      douyinStore.isShow = !douyinStore.isShow;
    }

    if (data.closeIndex) {
      douyinStore.isShow = false
    }
  })
})

</script>
<style scoped>
#ap-inject-app .icon {
  all: initial;
  width: 32px;
  height: 32px;
}

#ap-inject-app .main {
  all: initial;
  text-align: left;
}

#ap-inject-app {
  all: initial;
  background-color: white;
  border: solid #409eff6b 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 360px;
  line-height: 20px;
  border-radius: 7px;
  /* background-color: rgba(236, 240, 253, 100); */
  /* color: rgba(222, 134, 143, 100); */
  font-size: 14px;
  font-family: SourceHanSansSC-bold;
  position: fixed;
  z-index: 1;
  top: 10px;
  bottom: 10px;
  margin: 0;
  right: 50px;
  overflow-x: hidden;
  overflow-y: visible;
}

#ap-inject-app h1 {
  all: initial;
  line-height: 36px;
}

.scripting-enter-active {
  animation: slidein 0.5s linear;
}

.scripting-leave-active {
  animation: slidein 0.5s linear reverse;
}

.scripting-fix-enter-active {
  animation: slidein 0s linear;
}

.scripting-fix-leave-active {
  animation: slidein 0.5s linear reverse;
}

@keyframes slidein {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0px);
  }
}

#ap-inject-app .header {
  all: initial;
  text-align: center;
  height: 36px;
  display: flex;
  justify-content: center;
  border-bottom: solid #33333366 1px;
  margin-bottom: 10px;
  font-size: 16px;
}

#ap-inject-app .header-close {
  all: initial;
  position: absolute;
  right: 10px;
  top: 12px;
}

:deep(.upload-demo .el-upload-dragger) {
  padding: 10px 0;
}

:deep(.upload-demo .el-icon.el-icon--upload) {
  font-size: 50px;
  margin-bottom: 0px;
}


#ap-inject-app .template-container {
  border: solid #409eff6b 1px;
  border-radius: 7px;
  padding: 10px;
}

#ap-inject-app .template-container:hover {
  border-color: red;
}
</style>
