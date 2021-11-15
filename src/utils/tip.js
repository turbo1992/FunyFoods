/**
 * 提示与加载工具类
 */

import wepy from 'wepy';

export default class Tips {
  constructor() {
    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */

  static success(title) {
    wepy.showToast({
      title: title,
      image: "/images/toast-success.png",
      mask: true,
      duration: 3000
    });
  }

  /**
   * 弹出确认窗口
   */
  static confirm(content, confirmText = "确定", showCancel = true, cancelText = "取消", payload = {}, title = "提示") {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: content,
        confirmText: confirmText,
        showCancel: showCancel,
        cancelText: cancelText,
        success: res => {
          if (res.confirm) {
            resolve(payload);
          } else if (res.cancel) {
            reject(payload);
          }
        },
        fail: res => {
          reject(payload);
        }
      });
    });
  }

  static toast(title) {
    wepy.showToast({
      title: title,
      icon: 'none',
      mask: true,
      duration: 3000
    });
  }

  /**
   * 警告框alert
   */
  static alert(title) {
    wepy.showToast({
      title: title,
      image: "/images/alert.png",
      mask: true,
      duration: 1500
    });
  }

  /**
   * 错误框
   */

  static error(title) {
    wepy.showToast({
      title: title,
      image: "/images/toast-fail.png",
      mask: true,
      duration: 3000
    });
  }

  /**
   * 弹出加载提示
   */
  static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wepy.showLoading({
      title: title,
      mask: true
    });
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wepy.hideLoading();
    }
  }

  static share(title, url, desc) {
    return {
      title: title,
      path: url,
      desc: desc,
      success: function (res) {
        Tips.toast("分享成功");
      }
    };
  }
}

// test branch

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;
