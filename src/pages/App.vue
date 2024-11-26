<template>
  <transition appear>
    <div v-show="inject.show" id="ap-inject-app" style="display: flex;flex-direction: column; z-index: 9;">
      <div class="header">
        <h1>Email Signature - SignMaker</h1>
        <div class="header-close" @click="closeDialog">
          <el-icon @click="closeDialog">
            <Close />
          </el-icon>
        </div>
      </div>
      <div class="main" style="padding: 0 10px;">
        <div class="template-container" v-for="c in inject.savedTemplates" style="position: relative;margin-top: 10px;">
          <component :is="componentNameMap[c.name]" :data="c.data" />
          <div class="mask" @click="handleSelectTemplate($event)"> </div>
        </div>
        <el-button style="width: 100%;margin-top: 15px;" type="primary" round @click="handleMoreSignature">
          More Signature
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script name="INJECT-APP" setup>
import { reactive, onMounted, ref, computed } from 'vue';
import { useInjectStore } from '@/stores'
import * as tempComponents from '@/components/templates'
import { UploadFilled, Close, CloseBold } from '@element-plus/icons-vue'

const inject = useInjectStore()



// 初始化保持的模版
const componentNameMap = {}
Object.entries(tempComponents).forEach(([key, component]) => {
  componentNameMap[component.name] = component
})


const closeDialog = () => {
  inject.show = false
}

const escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
  createHTML: (to_escape) => to_escape
})

const handleSelectTemplate = (e, target) => {
  const firstSibling = e.target.parentNode.firstElementChild
  const textbox = document.querySelector("div[role='textbox']")
  textbox.innerHTML = escapeHTMLPolicy.createHTML(firstSibling.innerHTML);
  console.log('handleSelectTemplate', e.target, firstSibling)
}


const handleMoreSignature = () => {
  window.postMessage({
    type: 'FROM_INJECT',
    action: 'MORE_SIGNATURE',
  }, '*')
}


// 从background 获取保持的数据
// const initSavedTemplates = () => {
//   window.postMessage({
//     type: 'FROM_INJECT',
//     action: 'getSavedTemplates',
//   }, '*')
// }

onMounted(() => {
  // chrome.runtime.onMessage.addListener((data) => {
  //   console.log('page app', data)
  //   if (data.actionClicked === true) {
  //     douyinStore.isShow = !douyinStore.isShow;
  //   }

  //   if (data.closeIndex) {
  //     douyinStore.isShow = false
  //   }
  // })
  // initSavedTemplates()
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

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
  z-index: 999;
}
</style>
