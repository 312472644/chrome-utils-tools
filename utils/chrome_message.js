/** chrome 消息通信 */
const chromeMessage = {
  /**
   * 发送消息
   *
   * @param {*} message 发送的消息体
   * @param {*} callback 回调函数
   */
  sendMessage(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
        if (typeof callback === "function") {
          callback(response);
        }
      });
    });
  },
  /**
   * 监听消息
   *
   * @param {*} callback request:请求参数，sender:插件信息 sendResponse:回复消息
   */
  onMessage(callback) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      callback(request, sender, sendResponse);
    })
  }
};

export default chromeMessage;