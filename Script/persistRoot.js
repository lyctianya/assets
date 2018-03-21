//在此处处理公共消息及，读取本地配置
let Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
        this.loadConfig();

    },
    //加载配置文件
    loadConfig: function () {
        cc.loader.loadRes("config/config.json", (err, data) => {
            if (err) {
                console.log("load config error:", JSON.stringify(err));
                return;
            }
            //设置配置文件
            Global.systemInfo._serverUrl = data.serverUrl;
            console.log("serverUrl:", Global.systemInfo._serverUrl);
            console.log("load config success.");
        })
    }

});