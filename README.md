# chrome-utils
chrome 插件开发工具脚本，采用umd导出的方式。导出对象为chromeUtils。其中包括以下对象

1、chromeTab

2、chromeCookie

3、chromeWindow

4、chromeNotification

5、chromeMessage

6、chromeStorage

7、chromeMenu

#### 代码演示

```
/** 获取当前选项卡对象 **/
chromeUtils.chromeTab.getCurrentTab((tabs)=>{
	console.log(tabs);
})
```

#### API

| 方法名称         | 描述         | 所属对象   | 参数                                                         | 返回结果       |
| ---------------- | ------------ | ---------- | :----------------------------------------------------------- | -------------- |
| createChromeMenu | 创建右键菜单 | chromeMenu | function(createMenuProperties:IMenu,callback:()=>void):number | 创建菜单menuId |

#### 对象描述

createMenuProperties 创建菜单参数

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

// 菜单点击当前页签信息 
interface ITab {
    
}
```



