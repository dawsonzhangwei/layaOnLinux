## Layaair 引擎游戏空项目

使用 Layaair 的 HTML5 游戏空项目，使用 TypeScript 语言，支持微信小游戏。
* 使用 webpack 打包脚本： 执行`yarn compile`编译一次， 执行`yarn start`开始持续编译服务。
* 使用 Chrome 浏览器调试：使用 VSCode 打开项目根目录，安装Chrome 调试插件即可

### 项目配置
* `src/config.ts` 配置文件
* 开启、关闭调试标记： 修改 `bin/game.js` 中的 `window.DEBUG_ENABLED` 变量值

### 第三方库：
* layaair 引擎，将引擎库的 js 脚本文件解压到 `bin/libs` 目录下
* 添加其他模块，请将 j s脚本库放到 `bin/libs` 下，并修改 `bin/game.js` 脚本

### 第三方库声明文件：
* `libs/LayaAir.d.ts` Layaair 1.7.20.1_beta 引擎声明文件。
* `libs/fairygui.d.ts` FairyGUI 库声明文件。
* `libs/wx.d.ts` 微信小游戏 库声明文件
* 其他类库的声明文件，请放到`libs` 目录下


### 微信小游戏启动方式
使用微信开发者工具打开 `bin` 目录