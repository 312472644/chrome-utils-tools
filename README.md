# chrome-utils
chrome 插件开发工具脚本，采用umd导出的方式。导出对象为chromeUtils。其中包括以下对象

1、chromeTab（选项卡）（<font color=blue>权限：tabs</font>）

2、chromeCookie（cookie信息）（<font color=blue>权限：cookies，<all_urls></font> ）

3、chromeWindow（窗口信息）（<font color=blue>权限：tabs</font>）

4、chromeNotification（桌面消息）（<font color=blue>权限：notifications</font>）

5、chromeMessage（选项卡之间消息推送）-

6、chromeStorage（chrome信息存储）（<font color=blue>权限：storage</font>）

7、chromeMenu（右键菜单）（<font color=blue>权限：contextMenus</font> ）

#### 代码演示

```
/** 获取当前选项卡对象 **/
chromeUtils.chromeTab.getCurrentTab((tabs)=>{
	console.log(tabs);
})
```

#### API

tips:<font color=blue>Event表示事件，如果没有特殊说明一般就是指方法。</font>

| 方法名称                                              | 描述                                     | 所属对象           | 参数                                                         |
| ----------------------------------------------------- | ---------------------------------------- | ------------------ | :----------------------------------------------------------- |
| createChromeMenu                                      | 创建右键菜单                             | chromeMenu         | function(menu:<font color=#08979c>IMenu</font>,callback:() => void):<font color=#2f54ebc>number</font> |
| updateChromeMenu                                      | 更新右键菜单                             | chromeMenu         | function(menuId:<font color=#2f54eb>number</font>,menu:<font color=#08979c>IMenu</font>,callback:() => void) |
| removeChromeMenu                                      | 删除右键菜单                             | chromeMenu         | function(menuId:<font color=#2f54eb>number</font>,callback:() => void) |
| removeChromeAllMenu                                   | 删除所有右键菜单                         | chromeMenu         | function(callback:() => void)                                |
|                                                       |                                          |                    |                                                              |
| getCookie                                             | 获取条件匹配cookie信息                   | chromeCookie       | function(details:<font color=#08979c>IGetCookie</font>,callback:(cookie:<font color=#08979c>ICookie</font>) => void) |
| getAllCookie                                          | 获取条件匹配所有cookie信息               | chromeCookie       | function(details:IGetAllCookie,callback:(cookie:<font color=#08979c>ICookie</font>) => void) |
| setCookie                                             | 设置cookie信息                           | chromeCookie       | function(details:<font color=#08979c>ICookie</font>)         |
| removeCookie                                          | 删除cookie信息                           | chromeCookie       | function(details:<font color=#08979c>IGetCookie</font>)      |
| cookieChangeEvent <font color=#c41d7f>Event</font>    | cookie被更改时触发的事件                 | chromeCookie       | function(changeInfo:<font color=#08979c>IChangeCookie</font>) |
|                                                       |                                          |                    |                                                              |
| captureVisibleTab                                     | 可视区域截图                             | chromeTab          | function(windowId?:<font color=#2f54eb>number</font>,options?:<font color=#08979c>IOptions</font>,callback:(dataUrl:<font color=#2f54eb>string</font>) => void) |
| createTab                                             | 创建选项卡                               | chromeTab          | function(createTab:<font color=#08979c>ICreateTab</font>,callback:(tab:<font color=#08979c>ITab</font>) => void) |
| removeTab                                             | 删除选项卡                               | chromeTab          | function(tabId:<font color=#2f54eb>number</font>,callback:() => void) |
| executeScriptOrCss                                    | 动态执行js或css文件                      | chromeTab          | function(tabId:<font color=#2f54eb>number</font>,details:<font color=#08979c>IExecute</font>,type:<font color=#08979c>ExecuteTypeEnum</font>,callback:() => void) |
| getAllInTabs                                          | 获取指定窗口所有选项卡信息，默认当前窗口 | chromeTab          | function(windowId?:<font color=#2f54eb>number</font>,callback:(tabs:<font color=#08979c>ITab</font>[]) = > void) |
| getCurrentTab                                         | 获取当前选项卡                           | chromeTab          | function(callback:(tab:<font color=#08979c>ITab</font>) => void) |
| removeTabEvent <font color=#c41d7f>Event</font>       | 关闭选项卡触发事件                       | chromeTab          | function(tabId:<font color=#2f54eb>number</font>,removeInfo:<font color=#08979c>{isWindowClosing:boolean}</font>) |
| selectTabChangeEvent <font color=#c41d7f>Event</font> | 选项卡改变时触发事件                     | chromeTab          | function(tabId:<font color=#2f54eb>number</font>,selectInfo:<font color=#08979c>{windowId:number}</font>) |
|                                                       |                                          |                    |                                                              |
| createWindow                                          | 创建窗口                                 | chromeWindow       | function(details:<font color=#08979c>ICreateWindow</font>,callback:(window:<font color=#08979c>IWindow</font>) => void) |
| getCurrentWindow                                      | 获取当前窗口                             | chromeWindow       | function(callback:(window:<font color=#08979c>IWindow</font>) => void) |
| removeWindow                                          | 删除窗口                                 | chromeWindow       | function(windowId:<font color=#2f54eb>number</font>,callback:() => void) |
| removeOtherWindow                                     | 删除其他窗口                             | chromeWindow       | function()                                                   |
| createWindowEvent <font color=#c41d7f>Event</font>    | 创建窗口触发事件                         | chromeWindow       | function(window:<font color=#08979c>IWindow</font>)          |
| removeWindowEvent <font color=#c41d7f>Event</font>    | 关闭窗口触发事件                         | chromeWindow       | function(windowId:<font color=#2f54eb>number</font>)         |
|                                                       |                                          |                    |                                                              |
| sendNotification                                      | 桌面消息推送                             | chromeNotification | function(title:<font color=#2f54eb>string</font>,options?:<font color=#08979c>INotification</font>) |
|                                                       |                                          |                    |                                                              |
| sendMessage                                           | 发送消息                                 | chromeMessage      | function(message:<font color=#2f54eb>object</font>,callback:() => <font color=#2f54eb>void</font>) |
| onMessage                                             | 接受消息                                 | chromeMessage      | function(callback: (message:<font color=#08979c>IMessage</font>) => void) |
|                                                       |                                          |                    |                                                              |
| storageSyncSet                                        | 设置同步账户存储信息                     | chromeStorage      | function(storage:<font color=#2f54eb>object</font>,callback:() => void) |
| storageSyncGet                                        | 获取同步账户存储信息                     | chromeStorage      | function(key:<font color=#2f54eb>string</font>,callback:() => void) |
| storageSyncRemove                                     | 删除同步账户存储信息                     | chromeStorage      | function(key:<font color=#2f54eb>string</font>,callback:() => void) |
| storageSyncClear                                      | 删除所有同步账户存储信息                 | chromeStorage      | function(callback:() => void)                                |
| storageLocalSet                                       | 设置本地存储信息                         | chromeStorage      | function(storage:<font color=#2f54eb>object</font>,callback:() => void) |
| storageLocalGet                                       | 获取本地存储信息                         | chromeStorage      | function(key:<font color=#2f54eb>string</font>,callback:() => void) |
| storageLocalRemove                                    | 删除本地存储信息                         | chromeStorage      | function(key:<font color=#2f54eb>string</font>,callback:() => void) |
| storageLocalClear                                     | 删除所有本地存储信息                     | chromeStorage      | function(callback:() => void)                                |
| storageChangeEvent <font color=#c41d7f>Event</font>   | 存储值发生改变触发事件                   | chromeStorage      | function(callback:(storage:<font color=#08979c>IStorageChange</font>) => void) |

#### 对象描述

chromeMenu

```typescript
// 创建菜单选项
interface IMenu {
    type?:'normal' | 'checkbox' | 'radio' | 'separator'; // 右键菜单类型。默认为'normal'
    title?:string; // 右键菜单显示的文字。除非为“separator”类型，否则此参数是必须的。如果类型为"selection"，您可以在字符串中使用%s(占位符)显示选定的文本。
    checked?:boolean; // Checkbox或者radio的初始状态
    contexts?:'all' | 'page' | 'frame' | 'selection' | 'link' | 'editable' | 'image' | 'video' | 'aduio'; // 右键菜单项将会在这个列表指定的上下文类型中显示。默认为“page”。
    onclick?:(info:IMenuInfo,tab:ITab) => void; // 当菜单项被点击时触发的函数
    parentId?:number; // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单。
    documentUrlPatterns?:string[]; // 这使得右键菜单只在匹配此模式的url页面上生效（这个对框架也适用）
    targetUrlPatterns?:string[]; // 类似于documentUrlPatterns，但是您可以针对img/audio/video标签的src属性和anchor标签的href做过滤。
    enabled?:boolean; // 启用或者禁用此菜单项，启用为true，禁用为false。默认为true 
}

// 菜单点击信息
interface IMenuInfo {
    menuItemId:number; // 被点击的右键菜单项的ID
    parentMenuItemId?:number; // 被点击的右键菜单项的父菜单（如果存在）ID
    mediaType?:string; // 点击激活此右键菜单项时，被点击的元素的类型
    linkUrl?:string; // 链接的url（如果被点击的元素是链接）
    srcUrl?:string; // 如果被点击元素有 'src' 属性
    pageUrl:string; // 点击所在页面的URL
    frameUrl?:string; // 框架元素的URL（如果点击的元素是一个框架）
    selectionText?:string; // 如果点击时选择了文本，则为选中的文本内容
    editable:string; // 被点击的元素是否可编辑，比如文本输入框就是可编辑的。
}
```

chromeCookie

```typescript
// 查询cookie
interface IGetCookie {
    url:string; // 获取cookie的url
    name:string; // cookie名称
    storeId?:string; // cookie的存储id，用于从中检索cookie
}

// 查询所有cookie
interface IGetAllCookie {
    url?:string; // 获取cookie的ur
    name?:string; // cookie名称
    domain?:string; // 获取cookie的域名
    path?:string; // 获取cookie路径
    secure?:boolean; // 根据cookie的Secure属性进行筛选
    session?:boolean; // 根据cookie的生命周期是会话的还是持久的进行过滤
    storeId?:string; // cookie的存储id，用于从中检索cookie
}

// cookie更改时接口
interface IChangeCookie {
    removed:boolean; // cookie是否被删除
    cookie:ICookie; // 更改的cookie信息
}

// cookie信息
interface ICookie {
    name:string; // cookie名称
    value:string; // cookie值
    domain:string; // cookie域名
    hostOnly:boolean; //cookie是否为host-only cookie
    path:string; // cookie路径
    secure:boolean; // cookie是否被标记为保密
    httpOnly:boolean; // cookie是否被标记为HttpOnly
    session:boolean; // cookie是否为线程cookie
    expirationDate:number; // cookie过期时间
    storeId:string; //包含该cookie的存储id
}
```

chromeTab

```typescript
// 可是区域截图说明
interface IOtions{
    format?:'jpeg' | 'png'; // 默认是jpeg 
    quality?:number; // 控制结果图像的质量,只对jpeg有效
}

// 选项卡信息
interface ITab {
    id:number; // 标签ID
    index:number; // 窗口内从零开始的标签索引
    windowId:number; // 标签所在窗口的窗口ID
    selected:boolean; // 标签是否被选中
    pinned:boolean; // 标签是否被锁定
    url:string; // 标签所显示的URL
    title?:string; // 标签的标题
    favIconUrl?:string; // 标签收藏夹图标的URL 
    status?:string; // 可以被设置为 loading 或者 complete
    incognito?;boolean; // 可以被设置为 loading 或者 complete
}

// 动态执行文件
interface IExecute {
    code?:string; // 执行的脚本代码
    file?:string; // 执行的脚本文件
    allFrames?:boolean; // 是否给frame执行脚本
}

// 执行文件类型
enum ExecuteTypeEnum {
    'script' = 'script', // 默认为脚本类型
    'css' = 'css'
}
```

chromeWindow

```typescript
// 创建窗口参数
interface ICreateWindow {
    url?: string | string[]; // 创建窗口url地址，可以是字符串也可以是字符串数组
    tabId?:number; // 新视窗选定的选项页id
    left?:number; // 窗口相对于屏幕的左边距离
    width?:number; // 窗口宽度
    height?:number; // 窗口高度
    incognito?:boolean; // 窗口是否隐身
    type?:'normal' | 'popup'; // 指定窗口类型
}

//窗口对象参数
interface IWindow {
    id:number; // 窗口id
    focused:boolean; // 窗口是否聚焦
    top:number; // 窗口上边距
    left:number; // 窗口左边距
    width:number; // 窗口宽度
    height:number; // 窗口高度
    incognito: boolean; // 窗口是否隐藏
    type: 'normal' | 'popup' | 'app'
}
```

chromeNotification

```typescript
// 桌面消息推送
interface INotification {
   icon?:string; // 通知消息图标
   body:string; // 通知消息主体
   onclick?:() => void; // 点击消息事件
   onshow?:() => void; // 消息显示事件
   onclose?:() => void; // 消息隐藏事件
}
```

chromeMessage

```typescript
// 接受到消息
interface IMessage {
    request:string | object; // 接受到消息
    sender:object, // 发送消息的插件信息，包括插件id等
    sendResponse: (string | object) => void; // 接受到消息后回复消息方法
}
```

chromeStorage

```typescript
// storage 改变信息
interface IStorageChange {
    changes:object; // 修改storage对象
    namespace: 'sync' | 'local' // 存储类型
}
```