function browseImageFiles(_this) {
  let fileList = []
  let eList = []
  let allDataImg = []
  let fileNameList = []
  let input = document.createElement('input')
  input.type = 'file'
  input.setAttribute('multiple', '')
  input.setAttribute('accept', 'image/*')
  _this.radio = ''
  chrome.storage.local.set({ radio: _this.radio })
  input.onchange = (_) => {
    try {
      let files = Array.from(input.files)
      loadingMsgBox('Uploading attachment, please wait.', _this)
      if (files.length > 30) {
        numMsgBox("There's a 30 images/videos limit for each send.", _this)
        return
      }
      for (let index = 0; index < files.length; index++) {
        let file = files[index]
        if (file.size > 16777216) {
          sizeMsgBox("There's a 16 MB size limit for each image/video you send.", _this)
          return
        }
        convertFile(file).then((result) => {
          const e = result
          eList.push(e)
          fileList.push(file)
          fileNameList.push(file.name)
        })
      }
      setTimeout(function () {
        let attachmentDivHtml = getHtmlP(fileNameList)
        if (attachmentDivHtml.length > 0) {
          _this.attachmentDivHtml = attachmentDivHtml
          for (let i = 0; i < fileList.length; i++) {
            allDataImg.push({
              e: JSON.stringify(eList[i]),
              fileName: fileList[i].name,
              caption: ''
            })
          }
          _this.radio = 'Image'
          chrome.storage.local.set({ allDataImg, attachmentDivHtml, radio: _this.radio })
        }
        _this.$msgbox.close()
      }, 1000)
    } catch (ex) {
      // _this.$sendLog(902310, { s_status: 1 })
    }
  }
  input.click()
}
function browseVideoFile(_this) {
  let fileList = []
  let eList = []
  let allDataVideo = []
  let fileNameList = []
  let input = document.createElement('input')
  input.type = 'file'
  input.setAttribute('multiple', '')
  input.setAttribute('accept', 'audio/*,video/*')
  _this.radio = ''
  chrome.storage.local.set({ radio: _this.radio })
  input.onchange = (_) => {
    try {
      let files = Array.from(input.files)
      loadingMsgBox('Uploading attachment, please wait.', _this)
      if (files.length > 30) {
        numMsgBox("There's a 30 images/videos limit for each send.", _this)
        return
      }
      for (let index = 0; index < files.length; index++) {
        let file = files[index]
        if (file.size > 16777216) {
          sizeMsgBox("There's a 16 MB size limit for each image/video you send.", _this)
          return
        }
        convertFile(file).then((result) => {
          const e = result
          eList.push(e)
          fileList.push(file)
          fileNameList.push(file.name)
        })
      }
      setTimeout(function () {
        let attachmentDivHtml = getHtmlP(fileNameList)
        if (attachmentDivHtml.length > 0) {
          _this.attachmentDivHtml = attachmentDivHtml
          for (let i = 0; i < fileList.length; i++) {
            allDataVideo.push({
              e: JSON.stringify(eList[i]),
              fileName: fileList[i].name,
              caption: ''
            })
          }
          _this.radio = 'Video'
          chrome.storage.local.set({ allDataVideo, attachmentDivHtml, radio: _this.radio })
        }
        _this.$msgbox.close()
      }, 1000)
    } catch (ex) {
      // _this.$sendLog(902310, { s_status: 2, ex })
    }
  }
  input.click()
}
function browseDocumentFile(_this) {
  let fileList = []
  let eList = []
  let allDataDocument = []
  let fileNameList = []
  let input = document.createElement('input')
  input.type = 'file'
  _this.radio = ''
  chrome.storage.local.set({ radio: _this.radio })
  input.onchange = (_) => {
    try {
      let files = Array.from(input.files)
      loadingMsgBox('Uploading attachment, please wait.', _this)
      for (let index = 0; index < files.length; index++) {
        let file = files[index]
        convertFile(file).then((result) => {
          const e = result
          eList.push(e)
          fileList.push(file)
          fileNameList.push(file.name)
        })
      }
      setTimeout(function () {
        let attachmentDivHtml = getHtmlP(fileNameList)
        if (attachmentDivHtml.length > 0) {
          _this.attachmentDivHtml = attachmentDivHtml
          for (let i = 0; i < fileList.length; i++) {
            allDataDocument.push({
              e: JSON.stringify(eList[i]),
              fileName: fileList[i].name,
              caption: ''
            })
          }
          _this.radio = 'Document'
          chrome.storage.local.set({ allDataDocument, attachmentDivHtml, radio: _this.radio })
        }
        _this.$msgbox.close()
      }, 1000)
    } catch (ex) {
      // _this.$sendLog(902310, { s_status: 3, ex })
    }
  }
  input.click()
}
function convertFile(e) {
  return new Promise((t, n) => {
    const r = new FileReader()
    r.readAsDataURL(e)
    r.onload = () => t(r.result)
    r.onerror = (e) => n(e)
  })
}
function base64ImageToFile(b64Data, filename) {
  var arr = b64Data.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}
function base64ImageToBlob(b64Data) {
  var arr = b64Data.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
function getHtmlP(fileNameList) {
  let html = ''
  for (let i = 0; i < fileNameList.length; i++) {
    html +=
      `<p style="overflow: hidden;text-overflow: ellipsis;width: 240px;white-space: nowrap;margin-bottom: 2px">` +
      fileNameList[i] +
      `</p>`
  }
  return html
}

function loadingMsgBox(message, _this) {
  const h = _this.$createElement
  _this.$confirm('', '', {
    customClass: 'emptyContent deleteConfirmHeader',
    showConfirmButton: false,
    showCancelButton: false,
    showClose: false,
    closeOnPressEscape: false,
    closeOnClickModal: false,
    closeOnHashChange: false,
    center: true,
    message: h('div', null, [
      h('div', { style: { height: '101px' } }, [
        h('div', {
          attrs: { class: 'el-icon-loading loading-green-icon' },
          style: {
            fontSize: '50px',
            margin: '26px auto 30px auto',
            position: 'absolute',
            left: '9%',
            top: '1%'
          }
        }),
        h('span', {
          domProps: { innerHTML: message },
          style: {
            color: 'rgba(48, 49, 51, 100)}',
            fontSize: '18px',
            margin: 'auto auto 0 18px',
            position: 'absolute',
            left: '5%',
            top: '43%',
            width: '100%'
          }
        })
      ])
    ])
  })
}

function numMsgBox(message, _this) {
  _this.$confirm('', message, {
    customClass: 'emptyContent',
    showConfirmButton: false,
    showCancelButton: false,
    center: true,
    type: 'warning'
  })
}

function sizeMsgBox(message, _this) {
  _this.$confirm('', message, {
    customClass: 'emptyContent',
    showConfirmButton: false,
    showCancelButton: false,
    center: true,
    type: 'warning'
  })
}

export { browseImageFiles, browseVideoFile, browseDocumentFile, base64ImageToFile, base64ImageToBlob, numMsgBox }
