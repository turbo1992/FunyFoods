let constant = {};

/**
 * 网络无连接提示语
 * @type {String}
 */
constant.NO_NETWORK = '网络无连接';

/**
 * http请求失败提示语
 * @type {String}
 */
constant.REQUEST_FAILED = '请求失败';

/**
 * http请求成功码
 * @type {Number}
 */
constant.STATUS_SUCCESS = 200;

/**
 * 查询成功
 * @type {String}
 */
constant.SUCCESS = "success";

/**
 * 查询记录未找到
 * @type {String}
 */
constant.RECORD_NOT_FOUND = "recordNotFound";

/**
 * 参数错误
 * @type {String}
 */
constant.PARA_ERROR = "paraErr";

/**
 * 签名错误
 * @type {String}
 */
constant.SIGN_ERROR = "signErr";

/**
 * 用户已经被注册
 * @type {String}
 */
constant.HAD_REGISTERED = "hadRegistered";

/**
 * 短信发送太频繁
 * @type {String}
 */
constant.SMS_SEND_LIMIT = "smsSendLimit";

/**
 * 短信触发流控
 * @type {String}
 */
constant.SMS_BUSINESS_LIMIT_CONTROL = "isv.BUSINESS_LIMIT_CONTROL";

// /**
//  * 短信触发天级流控信息
//  * @type {String}
//  */
// constant.SMS_BUSINESS_DAY_LIMIT_MSG = "触发天级流控Permits:10";

// /**
//  * 短信触发小时级流控信息
//  * @type {String}
//  */
// constant.SMS_BUSINESS_DAY_LIMIT_MSG = "触发小时级流控Permits:5";

/**
 * 查库异常
 * @type {String}
 */
constant.DB_ERROR = "dbErr";

/**
 * 权限不足
 * @type {String}
 */
constant.FORBIDDEN = "forbidden";

/**
 * 库存不足
 * @type {String}
 */
constant.NOT_ENOUGH = "notEnough";

/**
 * 抽奖已经结束
 * @type {String}
 */
constant.LOTTERY_IS_OVER = "lotteryIsOver";

/**
 * 用户code 换取 session_key
 * @type {String}
 */
constant.USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
constant.USER_INFO = "wxUserInfo";

/**
 * 系统信息
 * @type {String}
 */
constant.SYSTEM_INFO = "systemInfo";

/**
 * openId
 * @type {String}
 */
constant.OPEN_ID = "openId";

/**
 * appId
 * @type {String}
 */
constant.APP_ID = "wx1cec6ff8316ed7b6";

/**
 * token
 * @type {String}
 */
constant.TOKEN = "token";

/**
 * expiredTime
 * @type {String}
 */
constant.TOKEN_EXPIRED_TIME = "expiredTime";

/**
 * 加密后的钱包文件
 * @type {String}
 */
constant.WALLET = "wallet";

/**
 * walletID
 * @type {String}
 */
constant.WALLET_ID = "walletId";

/**
 * phoneNum
 * @type {String}
 */
constant.PHONE_NUM = "phoneNum";

/**
 * userId
 * @type {String}
 */
constant.USER_ID = "userId";

/**
 * inviteId
 * @type {String}
 */
constant.INVITE_ID = "inviteId";

/**
 * 许可协议url
 * @type {String}
 */
constant.ARGEEMENT_URL = "https://www.aiwannetwork.com";

/** 
 * 一次获取的记录数量
 * @type {Number}
 */
constant.PAGE_SIZE = 15;

/**
 * 店铺被禁用
 * @type {String}
 */
constant.SHOP_FORBIDDEN = "shopForbidden";

/**
 * 积分消耗或获取的类型：1签到 2邀请用户 3游戏 4分享文章 5评论文章 6消费 7注册 8信息补全 9实名 10礼品兑换 11抽奖
 * @type {Object}
 */
constant.SCOR_TYPE = {
    SIGN: 1,       
    INVITE: 2,
    GAME: 3,       
    SHARE: 4,      
    COMMENT: 5,
    COST: 6,        
    REGISTER: 7,
    INFO: 8,    
    REL_NAME: 9,   
    EXCHANGE: 10,
    LOTTERY: 11     
};

/**
 * 抽奖状态
 * @type {Object}
 */
constant.LOTTERY_STATE = {
    NO_LOTTERY: 1,         //无抽奖
    NO_BET: 2,             //未投注
    EXPIRED: 3,            //已过期
    HAD_BET: 4,            //已投注
    HAD_AWARD: 5,          //已开奖
    OPENING_AWARD: 6       //开奖中
};

/**
 * 身份验证失败提示语
 * @type {Object}
 */
constant.ID_CHECK_FAIL_TIP = {
    1: "身份证格式错误",
    2: "身份证编码错误",
    3: "信息有误，认证失败！"//校验位错误
};

/**
 * 实名认证失败提示语
 * @type {Object}
 */
constant.REAL_AUTH_FAIL_TIP = {
    "hadRegistered": "身份信息被认证",
    "paraErr": "信息有误，认证失败"
};

/**
 * 订单状态
 * @type {Object}
 */
constant.ORDER_STATE = {
    WAIT_PAY: 1,     //待付款
    PAYING: 2,       //支付中
    WAIT_SEND: 3,    //待发货
    WAIT_TAKE: 4,    //待收货
    WAIT_COMMENT: 5, //待评价
    OVER: 6,         //已完成
    CANCEL: 7        //已取消
};

export default constant;