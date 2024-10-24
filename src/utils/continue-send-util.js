function getContinueSendData(
  phoneNumList,
  phoneNumSuccessList,
  phoneNumFailList,
  repeatList,
  oldSuccessAndFailList,
  indexCount,
  content,
  mediaType,
  minNum,
  maxNum,
  excelData,
  sendMessageType,
  allDataImg,
  allDataVideo,
  allDataDocument,
  sendButtonValue,
  button_radio,
  buttonInputValue,
  isDeleteMessage
) {
  return {
    phoneNumList: phoneNumList,
    phoneNumSuccessList: phoneNumSuccessList,
    phoneNumFailList: phoneNumFailList,
    repeatList: repeatList,
    oldSuccessAndFailList: oldSuccessAndFailList,
    indexCount: indexCount,
    content: content,
    mediaType: mediaType,
    minNum: minNum,
    maxNum: maxNum,
    excelData: excelData,
    sendMessageType: sendMessageType,
    allDataImg: allDataImg,
    allDataVideo: allDataVideo,
    allDataDocument: allDataDocument,
    sendButtonValue: sendButtonValue,
    button_radio: button_radio,
    buttonInputValue: buttonInputValue,
    isDeleteMessage: isDeleteMessage
  }
}

export { getContinueSendData }
