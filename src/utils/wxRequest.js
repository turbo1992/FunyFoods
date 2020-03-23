import wepy from 'wepy';
import util from './util';
import tip from './tip';
import constant from "@/utils/constant";

const wxRequest = async (params = {}, url, response) => {

    let showLoading = params.showLoading == undefined ? true : params.showLoading;

    if (showLoading) {
        tip.loading();
    }
    // console.log("params:" + JSON.stringify(params));
    
    let data = params.query || {};
    // let signData = params.signData || '';
    let timestamp = util.getTimestamp();
    let sign = {};
    let useWxRequest = params.useWxRequest || false;
    let res;

    const phoneNum = wx.getStorageSync('phoneNum');
    const secret = wx.getStorageSync('secret');
    let message = phoneNum;
    let token = wx.getStorageSync(constant.TOKEN);
    let authorization = "Bearer " + token;
    if (util.isBlank(token)) {
        authorization = "";
    }

    if (!util.isBlank(params.urlQuery)) {
        url += params.urlQuery;
    }

    let header = Object.assign({
        'Content-Type': 'application/json',
        'clienttype': "1",
        'timestamp': timestamp,
        'teleNum': phoneNum || '',
        'Authorization': authorization || ''
        // 'signData': secretSignData || ''
    }, sign);
    // console.log("sign:    " + JSON.stringify(sign));
    // console.log("header:    " + JSON.stringify(header));
    //如果是查询列表类型的接口，需要使用原生请求，否则使用wepy的请求
    if (!useWxRequest) {
        await wepy.request({
            url: url,
            method: params.method || 'GET',
            data: data,
            timeout: 60000,
            header: header,
        }).then(success => {
            // console.log("success");
            // console.log(success);
            res = success;
        }, failed => {
            console.log("failed");
            console.log(failed);
            res = {
                statusCode: 404
            };
        });
        if (showLoading) {
            tip.loaded();
        }
        return res;
    } else {
        res = wx.request({
            url: url,
            method: params.method || 'GET',
            data: data,
            timeout: 60000,
            header: header,
            success: function (res) {
                // console.log("success");
                response(res)
            },
            failed: function (res) {
                console.log("failed");
                console.log(failed);
                res = {
                    statusCode: 404
                };
                response(res)
            },
            complete: function () {
                if (showLoading) {
                    tip.loaded();
                }
            }
        })
        return res;
    }
};

module.exports = {
    wxRequest
}