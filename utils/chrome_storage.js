/** chrome 存储 (storage) */
const chromeStorage = {
  /**
   * 设置登录chrome账户同步存储信息
   *
   * @param {*} storage 存储的对象
   * @param {*} callback 回调函数
   */
  storageSyncSet(storage, callback) {
    chrome.storage.sync.set(storage, callback);
  },
  /**
   * 获取登录chrome账户同步存储信息
   *
   * @param {*} key 属性名称
   * @param {*} callback 回调函数
   */
  storageSyncGet(key, callback) {
    chrome.storage.sync.get(key, callback);
  },
  /**
   * 删除登录chrome账户同步存储信息
   *
   * @param {*} key 属性名称
   * @param {*} callback 回调函数
   */
  storageSyncRemove(key, callback) {
    chrome.storage.sync.remove(key, callback);
  },
  /**
   * 删除chrome账户同步所有存储信息
   *
   * @param {*} callback 回调函数
   */
  storageSyncClear(callback) {
    chrome.storage.sync.clear(callback);
  },
  /**
   * 设置本地存储信息
   *
   * @param {*} storage 存储对象
   * @param {*} callback 回调函数
   */
  storageLocalSet(storage, callback) {
    chrome.storage.local.set(storage, callback);
  },
  /**
   * 获取本地存储信息
   *
   * @param {*} key 属性名称
   * @param {*} callback 回调函数
   */
  storageLocalGet(key, callback) {
    chrome.storage.local.get(key, callback);
  },
  /**
   * 删除本地某个存储的值
   *
   * @param {*} key 属性名称
   * @param {*} callback 回调函数
   */
  storageLocalRemove(key, callback) {
    chrome.storage.local.remove(key, callback);
  },
  /**
   * 删除本地存储所有信息
   *
   * @param {*} callback 回调函数
   */
  storageLocalClear(callback) {
    chrome.storage.local.clear(callback);
  },
  /**
   * storage发生改变的时候触发事件
   *
   * @param {*} [callback=(changes, namespace) => { }] 回调函数(changes:修改storage对象,namespace:local || sync)
   */
  storageChangeEvent(callback) {
    chrome.storage.onChanged.addListener(callback)
  }
};

export default chromeStorage;