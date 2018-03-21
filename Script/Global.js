//万家信息
let playerInfo = {
    _userName: "",
    _pwd: "",
    _nickName: "",
    _age: 18,
    _sex: true,
    _headIcon: "",

    //userName
    set userName(text) {
        this._userName = text;
    },
    get userName() {
        return this._userName;
    },
    //pwd
    set pwd(text) {
        this._pwd = pwd;
    },
    get pwd() {
        return this._pwd;
    },
    //nickName
    set nickName(text) {
        this._nickName = text;
    },
    get nickName() {
        return this._nickName;
    },
    //sex boolean
    set sex(isGirl) {
        this._sex = isGirl
    },
    get sex() {
        return this._sex;
    },
    //age
    set age(num) {
        this._age = num;
    },
    get age() {
        return this._age;
    },
    //headIcon
    set headIcon(url) {
        this._headIcon = url;
    },
    get headIcon() {
        return this._headIcon;
    }
}


//系统信息
let systemInfo = {
    //服务器状态
    _serverUrl: "", //服务器url
    _serverState: "", //服务器状态
    //android 更新地址
    _apkDownloadUrl: "", //apk下载url
    _apkVersion: "", //apk版本号
    //ios更新地址
    _appDownloadUrl: "", //ios更新地址
    _appVersion: "", //ios版本号
    //共用更新地址
    _gameVersion: "", //游戏版本号
    _codeAssetsUrl: "", //代码更新url
    _remoteVersion: "", //远端版本号,
    _remoteVersionUrl: "", //远端版本号url
    _remoteManifestUrl: "", //远端资源清单url
}
let Global = {
    "playerInfo": playerInfo,
    "systemInfo": systemInfo
}


module.exports = Global;