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

| 方法名称         | 描述         | 所属对象   | 参数 | 返回结果 |
| ---------------- | ------------ | ---------- | ---- | -------- |
| createChromeMenu | 创建右键菜单 | chromeMenu |      |          |
|                  |              |            |      |          |
|                  |              |            |      |          |

