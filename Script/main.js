cc.Class({
    extends: cc.Component,

    properties: {
        config: cc.RawAsset, //读取配置文件
        persistRootNode: cc.Node, //常驻节点，用于传递消息或者，保存数据信息

    },
    onLoad: function () {
        this.addLoginUI();
    },
    addLoginUI: function () {
        cc.loader.loadRes("prefab/chat", (error, prefab) => {
            if (error) {
                console.log("load prefab/login error:", JSON.stringify(error));
                return;
            }
            let perfabNode = cc.instantiate(prefab);
            this.node.addChild(perfabNode);
            console.log("load login success.");
        })
    }
});