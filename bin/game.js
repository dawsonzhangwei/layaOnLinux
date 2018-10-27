// 微信小游戏真机环境中没有全局 window 对象
if (!window && wx) {
	var window = {
		wx: wx,
		screenOrientation: "portrait",
		DEBUG_ENABLED: false,
		loadLib: require,
	};
}

/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";
// 调试标记
window.DEBUG_ENABLED = true;

if (window.wx) {
    require("weapp-adapter.js");
    window.loadLib = require;
} else {
    window.loadLib = function loadLib(url) {
        var script = document.createElement("script");
        script.async = false;
        script.src = url;
        document.body.appendChild(script);
    };
}

//----- 依赖库 -----
function load_js_module(file) {
    var js = window.DEBUG_ENABLED ? file : "min/" + file.replace(".js", ".min.js");
    var path = "libs/" + js;
    window.loadLib(path);
}
load_js_module("laya.core.js");
load_js_module("laya.webgl.js");
load_js_module("laya.ui.js");
load_js_module("laya.html.js");
// load_js_module("fairygui.js");
if (window.wx) {
    load_js_module("laya.wxmini.js");
    // 微信小又默认文件编码是ascii， 这里修改配置文件为需要的 utf8
    Laya.MiniAdpter.getUrlEncode = function (url, type) {
        if (url.indexOf(".fnt") != -1 || url.indexOf(".json") != -1 || url.indexOf(".csv") != -1)
            return "utf8";
        else if (type == "arraybuffer")
            return "";
        return "ascii";
    };
	Laya.MiniAdpter.init();
} else {
    if (window.DEBUG_ENABLED) {
        load_js_module("laya.debugtool.js");
    }
}

//----- 游戏代码 -------
window.loadLib("js/bundle.js");
