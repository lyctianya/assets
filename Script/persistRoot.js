//在此处处理公共消息及，读取本地配置
let Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function () {
        this.loadConfig();
        this.messages = [];
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
            this.connectNet();
        })
        window.msgManager = this;
    },
    connectNet: function () {
        console.log("connect net");
        this.websocket = new WebSocket(Global.systemInfo._serverUrl);
        this.websocket.onmessage = this.onmessage.bind(this);
        this.websocket.onerror = (evt) => {
            this.websocket = null;
            console.log("on error");
            this.scheduleOnce(()=>{
                this.connectNet();
            },2)
        }
        this.websocket.onopen = (evt) => {
            console.log("onopen");
        }
        this.websocket.onclose = (evt) => {
            this.websocket = null;
            console.log("onclose");
        }

    },
    onmessage: function (evt) {
        var mainNode = cc.director.getScene().getChildByName('Canvas');
        mainNode.emit("onMessage",evt);
    },
    sendMyMsg: function (info) {
        console.log("-----info-----",info);
        this.messages.push(JSON.stringify(info));
    },
    update: function () {
        if (this.websocket && this.messages.length > 0) {
            console.log("------sendmsg-----");
            this.websocket.send(this.messages.splice(0, 1));
        }
    }
});