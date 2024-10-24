function createNewWindowPage(url) {
  chrome.windows.create(
    // {
    //   focused: true,
    //   type: 'popup',
    //   url: url,
    //   height: 764 - 100,
    //   width: 1440,
    //   left: 0,
    //   top: 150
    // },
    {
      focused: true,
      type: 'popup',
      url: url,
      height: 980,
      width: 1440,
      left: 10,
      top: 10
    },
    (windows) => {
      console.log(windows)
    }
  )
}

export { createNewWindowPage }
