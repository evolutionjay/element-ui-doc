# element-ui-doc
>饿了么官网性能优化css

## 项目本意

你们是不是觉得 element-ui 官网在 mac 的 Safari 上有时候非常卡
顿缓慢呢?
我感觉到了, 所以建立这个项目修复这个问题.


# 使用

安装 http://tampermonkey.net 脚本

新建一个脚本

```javascript
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://element-cn.eleme.io/
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  var url =
    "https://rawgit.com/evolutionjay/element-ui-doc/master/dist/custom.css";
  var head = document.head || document.getElementsByTagName("head")[0]; //获取head元素
  function includeLinkStyle(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    head.appendChild(link);
  }
  includeLinkStyle(url);
})();
```

That's all.
