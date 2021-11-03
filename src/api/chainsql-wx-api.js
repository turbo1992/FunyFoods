var chainsqlWechat = require('chainsql-wechat-sdk').ChainsqlWechatAPI;
const chainsqlWechatApi = new chainsqlWechat();
import api from "@/api/api";

function getSignatureForCommon(message, secret) {
    return chainsqlWechatApi.signCommon(message, secret);
}

//
async function generateWallet() {
    //首先从服务器获取随机码
    let res = await api.randomBytes({
        showLoading: false
    });
    if (res.statusCode !== 200) {
        return res;
    }
    let randomServer = res.data.data.randomData.data;
    let randomLocal = chainsqlWechatApi.randomBytes(4);
    randomServer.push.apply(randomServer, randomLocal);
    res.data.wallet = chainsqlWechatApi.generateWallet(randomServer);
    return res;
}

function generateWalletBySecret(secret) {
    return chainsqlWechatApi.generateWalletBySecret(secret);
}

function aesEncryptStr(passwod, content) {
    return chainsqlWechatApi.aesEncrypt(passwod, content);
}

function aesDecryptStr(passwod, aesEncryptStr) {
    return chainsqlWechatApi.aesDecrypt(passwod, aesEncryptStr);
}

function sha256(content) {
    return chainsqlWechatApi.sha256(content);
}

module.exports = {
    getSignatureForCommon: getSignatureForCommon,
    generateWallet: generateWallet,
    generateWalletBySecret: generateWalletBySecret,
    aesEncryptStr: aesEncryptStr,
    aesDecryptStr: aesDecryptStr,
    sha256: sha256,
}
