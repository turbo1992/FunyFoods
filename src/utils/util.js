import wepy from 'wepy'
import constant from "@/utils/constant";
import api from "@/api/api";

let util = {};

util.getTimestamp = () => {
  let timestamp = new Date().getTime();
  return timestamp;
  console.log("当前时间戳为：" + timestamp);
}

util.getCurrentTime = () => {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep; //20160614134947
}

util.objLength = (input) => {
  var type = toString(input);
  var length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
}
//验证是否是手机号码
util.vailPhone = (number) => {
  let flag = false;
  let myreg = /^((1[3,5,8][0-9])|(14[5,7,9])|(16[6])|(17[0,1,3,5,6,7,8])|(19[7-9]))\d{8}$/;
  if (number.length != 11) {
    flag = flag;
  }else if (!myreg.test(number)) {
    flag = flag;
  }else{
    flag = true;
  }
  return flag;
}
//验证是否西班牙手机(6开头 9位数)
util.ifSpanish = (number) => {
  let flag = false;
  let myreg = /^([6|7|9]{1}(\d+){8})$/;
  if (number.length != 9) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}
//浮点型除法
util.div = (a, b) => {
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) { }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) { }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
//浮点型加法函数   
util.accAdd = (arg1, arg2) => {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}
//浮点型乘法
util.mul = (a, b) => {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) { }
  try {
    c += e.split(".")[1].length;
  } catch (f) { }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

// 遍历对象属性和值
util.displayProp = (obj) => {
  var names = "";
  for (var name in obj) {
    names += name + obj[name];
  }
  return names;
}
// 去除字符串所有空格
util.sTrim = (text) => {
  return text.replace(/\s/ig, '')
}
//去除所有:
util.replaceMaohao = (txt) => {
  return txt.replace(/\:/ig, '')
}

//数字、字母以及英文字符组合
util.replaceNormal = (text) => {
  return text.replace(/[^0-9a-zA-Z-/:;\(\)&@'"\?,!\[\]\{\}#%^\*\+=_\\\|~<>\$\.]/g, '');
}

// 333

//只能输入数字
util.replaceNum = (text) => {
  return text.replace(/[^0-9]/g, '');
}

//数字、字母组合
util.replaceNumEn = (text) => {
  return text.replace(/[^0-9a-zA-Z]/g, '');
}

//数字、字母、中文以及英文字符组合
util.replaceNumEnCnChara = (text) => {
  return text.replace(/[^0-9a-zA-Z\u4E00-\u9FA5-/:;\(\)&@'"\?,!\[\]\{\}#%^\*\+=_\\\|~<>\$\.]/g, '');
}

//数字、字母、中文以及中文字符、英文字符组合
util.replaceNumEnCnCharas = (text) => {
  return text.replace(/[^0-9a-zA-Z\u4E00-\u9FA5-/:;\(\)&@'"\?,!\[\]\{\}#%^\*\+=_\\\|~<>\$\.，。？！、：；…“”＆～（）《》｛｝【】‘’—＃＊＄￥·％]/g, '');
}

//数字、字母、中文以及中文字符、英文字符、空格组合
util.replaceNumEnCnSpaceCharas = (text) => {
  return text.replace(/[^0-9a-zA-Z\u4E00-\u9FA5-/:;\s\(\)&@'"\?,!\[\]\{\}#%^\*\+=_\\\|~<>\$\.，。？！、：；…“”＆～（）《》｛｝【】‘’—＃＊＄￥·％]/g, '');
}

//数字、字母、中文以及中文字符、英文字符、空格、换行组合
util.replaceNumEnCnSpaceReturnChara = (text) => {
  return text.replace(/[^0-9a-zA-Z\u4E00-\u9FA5-/:;\s\n\(\)&@'"\?,!\[\]\{\}#%^\*\+=_\\\|~<>\$\.，。？！、：；…“”＆～（）《》｛｝【】‘’—＃＊＄￥·％]/g, '');
}

//中文以及英文字符组合
util.replaceEnCn = (text) => {
  return text.replace(/[^a-zA-Z\u4E00-\u9FA5]/g, '');
}

//数字加小数点
util.replacePriceNum = (text) => {
  var content = text.replace(/[^0-9.]/g, '');
  let index = content.indexOf('.');
  var left = "";
  var right = "";
  if (index > -1) {    
    left = content.substring(0,index);
    right = content.substring((index+1),text.length);
    right = right.replace(/[^0-9]/g, '');
    if (right.length > 2) {
      right = right.substring(0,2);
    }
    content = left + '.' + right;
  } 
  return content;
}

//整数数字
util.replaceGoodsNum = (text) => {
  var content = text.replace(/[^0-9]/g, '');
  return content;
}

//转换星星分数
util.convertStarArray = (score) => {
  //1 全星,0 空星,2半星 
  var arr = []
  for (var i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i-1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}

util.isBlank = (str) => {
  if (Object.prototype.toString.call(str) ==='[object Undefined]'){//空
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' || 
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length==0?true:false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str)=='{}'?true:false
  }else{
    return true
  }

}

//判断文件是否超过指定大小
util.isMoreThanSize = (files, size) => {
  for (let i = 0; i < files.length; i++) {
    let fileSize = files[i].size;
    if (fileSize > size * 1024 * 1024) return true;
  }
  return false;
}

/*
根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，
由十七位数字本体码和一位数字校验码组成。
排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。
校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。

出生日期计算方法。
    15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个19或18,这样就包含了所有1800-1999年出生的人;
    2000年后出生的肯定都是18位的了没有这个烦恼，至于1800年前出生的,那啥那时应该还没身份证号.
下面是正则表达式:
 出生日期1800-2099  (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])
 身份证正则表达式    /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i      
 15位校验规则 6位地址编码+6位出生日期+3位顺序号
 18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位

 校验位规则     公式:∑(ai×Wi)(mod 11)……………………………………(1)
                公式(1)中： 
                i----表示号码字符从由至左包括校验码在内的位置序号； 
                ai----表示第i位置上的号码字符值； 
                Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
                i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
                Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1

*/
//身份证号合法性验证 
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
//返回值 0：成功 1：身份证号格式错误 2：地址编码错误 3：校验位错误
util.identityCodeCheck = (code) => {
  var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
  var tip = "";
  var pass = 0;

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/i.test(code)) {
    pass = 1;
  }

  else if (!city[code.substr(0, 2)]) {
    pass = 2;
  }
  else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (last != code[17]) {
        pass = 3;
      }
    }
  }

  return pass;
}

//查询用户信息详情（已注册用户）
util.getUserDetail = async () => {  
  let globalData = wepy.$instance.globalData;    
  //用openId去服务器查询用户信息
  let openId = wx.getStorageSync(constant.OPEN_ID);
  let userDetailRes = await api.getUserDetail({
    method: "GET",
    showLoading: false,
    query: {
      openId: openId
    }
  });
  //console.log("userDetailRes", userDetailRes);

  try {
    if (
      userDetailRes.statusCode == constant.STATUS_SUCCESS &&
      userDetailRes.data.code == constant.SUCCESS
    ) {
      globalData.userDetail = userDetailRes.data.data;
    } 
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = util;
