const sdk = {};

sdk.getVersion = function () {
    try {
        return SDKUtils.getVersion();
    } catch (err) {
    }
};

sdk.getUrlKey = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
};

sdk.checkPhone = function (phone) {
    let flg = false;
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (phone.length === 11) {
        if (!myreg.test(this.phone)) {
            flg = false;
        } else {
            flg = true;
        }
    } else {
        flg = false;
    }
    return flg;
};

sdk.openWithFullScreen = function () {
    try {
        SDKUtils.openWithFullScreen();
    } catch (err) {
    }
};

sdk.openWithTabBar = function () {
    try {
        SDKUtils.openWithTabBar();
    } catch (err) {
    }
};

sdk.getAppVersion = function () {
    try {
        return SDKUtils.getAppVersion()  //app版本号，通用
    } catch (err) {
    }
};

sdk.getOSVersion = function () {
    try {
        return SDKUtils.getOSVersion()  //操作系统版本号，通用
    } catch (err) {
    }
};

sdk.getModel = function () {
    try {
        return SDKUtils.getModel()  //手机型号，通用
    } catch (err) {
    }
};

sdk.clear = function () {
    try {
        return SDKUtils.clear()  //手机型号，通用
    } catch (err) {
    }
};

sdk.getImei = function () {
    try {
        return SDKUtils.getImei()  //手机型号，通用
    } catch (err) {
    }
};

sdk.getImsi = function () {
    try {
        return SDKUtils.getImsi()  //手机型号，通用
    } catch (err) {
    }
};

sdk.getPhone = function () {
    try {
        return SDKUtils.getPhone()  //手机型号，通用
    } catch (err) {
    }
};

sdk.getIdfa = function () {
    try {
        return SDKUtils.getIdfa()  //手机型号，通用
    } catch (err) {
    }
};

sdk.closePop = function () {
    try {
        return SDKUtils.closePop()  //手机型号，通用
    } catch (err) {
    }
};

sdk.down = function (package_str, down_url) {
    try {
        return SDKUtils.down(package_str, down_url);  //手机型号，通用
    } catch (err) {
    }
};

sdk.downStatus = function (package_str) {
    try {
        return SDKUtils.downStatus(package_str);  //手机型号，通用
    } catch (err) {
    }
};

sdk.install = function (package_str) {
    try {
        return SDKUtils.install(package_str);  //手机型号，通用
    } catch (err) {
    }
};

sdk.allInstalled = function () {
    try {
        SDKUtils.getInstalled();
    } catch (err) {
    }
};

sdk.canOpen = function (package_str) {
    try {
        return SDKUtils.canOpen = (package_str);  //手机型号，通用
    } catch (err) {
    }
};

sdk.open = function (package_str) {
    try {
        return SDKUtils.open(package_str);  //手机型号，通用
    } catch (err) {
    }
};


export default sdk;