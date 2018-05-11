var myRand = function (n, m) {
    return Math.floor(Math.random() * Math.abs(n - m) + Math.min(m, n));
}

cc.Class({
    extends: cc.Component,

    properties: {
        btn_send: cc.Node,
        editBox: cc.Node,
        item: cc.Node,
        content: cc.Node,
    },
    onLoad: function () {
        this.content.removeAllChildren();
        this.node.on("message", this.onMessage.bind(this));
        this.btn_send.on("touchend", this.onBtnSend.bind(this));
    },
    onMessage: function (data) {
        var msg = data.detail;
        this.pushOnItem(msg);
    },
    pushOnItem: function (str) {
        var item = cc.instantiate(this.item);
        this.content.addChild(item);
        item.lb = item.getChildByName("lb");
        item.lb.getComponent(cc.Label).string = str;
        item.color = new cc.Color(myRand(0, 255), myRand(0, 255), myRand(0, 255));
    },
    onBtnSend: function () {
        var str = this.editBox.getComponent(cc.EditBox).string;
        if (str == "" || !str) {
            return;
        }
        this.pushOnItem(str);
        console.log("0000000000",typeof(window.msgManager.sendMyMsg));
        window.msgManager.sendMyMsg(str);
    },
});
