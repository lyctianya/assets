cc.Class({
    extends: cc.Component,

    properties: {
        eb_useName: cc.Node,
        eb_pwd: cc.Node,
        btn_login: cc.Node,
        btn_register: cc.Node,
        btn_forgetpwd: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.btn_login.on("touchend", this.onLogin.bind(this));
        this.btn_register.on("touchend", this.onRegister.bind(this));
        this.btn_forgetpwd.on("touchend", this.onForgetpwd.bind(this));
    },
    onLogin: function () {
        console.log("You click login");
        let useName = this.eb_useName.getComponent(cc.EditBox).string;
        let pwd = this.eb_pwd.getComponent(cc.EditBox).string;
        console.log(useName, pwd);
    },
    onRegister: function () {

    },
    onForgetpwd: function () {

    }
});