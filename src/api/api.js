import {
    wxRequest
} from '@/utils/wxRequest';

let api = {};

//1本地开发环境aaaaa
//2线上环境
let apiService = 'http://yp.peersafe.cn';

api.imgService = apiService + '/api/v1/public/download?url=static/';
api.fileService = apiService + '/api/v1/public/download?url=';
api.uploadUrl = apiService + '/api/v1/public/upload';

api.apiService = apiService;

/**
 * 注册
 * @param  {Object} params 请求参数，包括手机号、账户类型、验证码、账户密文、加密过的密码、公钥、账户地址、邀请码（选填）
 * @return {Object} 注册结果
 */
api.register = (params) => wxRequest(params, apiService + '/api/v1/user/register');

/**
 * 获取短信验证码
 * @param  {Object} params 请求参数，包括手机号和账户类型）
 * @return {Object} 获取结果
 */
api.getSmsCode = (params) => wxRequest(params, apiService + '/api/v1/public/smsCode');

/** 
 * 获取随机数
 * @param  {Object} params 无
 * @return {Object} 获取的随机数
 */
api.randomBytes = (params) => wxRequest(params, apiService + '/api/v1/public/randomBytes');

/**
 * 登录1  手机号、验证码用户登录或注册登录
 * @param  {Object} params 手机号、验证码
 * @return {Object} 加密后的账户
 */
api.login = (params) => wxRequest(params, apiService + '/api/v1/user/login');

/**
 *  修改密码
 * @param  {Object} params 手机号、类型、新的加密后的钱包密文、新的加密后的密码、旧的加密后的密码、钱包id、publicKeyHex、txjson
 * @return {Object} 修改结果
 */
api.modifyPwd = (params) => wxRequest(params, apiService + '/api/v1/public/modifyPwd');

/**
 * 获取签到信息
 * @param  {Object} params 手机号、类型
 * @return {Object} 签到信息
 */
api.signInfo = (params) => wxRequest(params, apiService + '/api/v1/user/sbReward/signInfo');

/**
 * 签到
 * @param  {Object} params 无
 * @return {Object} 签到结果
 */
api.sign = (params) => wxRequest(params, apiService + '/api/v1/public/sign');

/**
 * 登录2-1  微信登录 小程序 获取unionid
 * @param  {Object} params code、iv、encryptedData
 * @return {Object} unionId
 */
api.getUnionId = (params) => wxRequest(params, apiService + '/api/v1/wechat/appLogin');

/**
 * 登录2-4-1  微信登录 小程序 获取unionid
 * @param  {Object} params code、iv、encryptedData
 * @return {Object} appWxBandPhone
 */
api.appWxBandPhone = (params) => wxRequest(params, apiService + '/api/v1/wechat/appWxBandPhone');

/**
 * 登录2-2  根据wx信息查询是否绑定用户
 * @param  {Object} params unionId
 * @return {Object} true/false
 */
api.getUserInfo = (params) => wxRequest(params, apiService + '/api/v1/user/userInfo');


/**
 * 登录2-3  已绑定手机号 用wx unionid信息登录
 * @param  {Object} params unionid
 * @return {Object} userInfo
 */
api.wxLogin = (params) => wxRequest(params, apiService + '/api/v1/user/wxLogin');

/**
 * 登录2-4  未绑定手机号 手机号、wx绑定登录或注册绑定登录
 * @param  {Object} params unionId
 * @return {Object} userInfo
 */
api.appLogin = (params) => wxRequest(params, apiService + '/api/v1/user/appLogin');

/**
 * 更新用户基本信息
 * @param  {Object} params 用户基本信息
 * @return {Object} updateUserInfo
 */
api.updateUserInfo = (params) => wxRequest(params, apiService + '/api/v1/user/updUserInfo');

/**
 * 查询用户详情信息 (已注册用户)
 * @param  {Object} params 
 * @return {Object} userInfo
 */
api.getUserDetail = (params) => wxRequest(params, apiService + '/api/v1/user/userDetail');

/**
 * 获取推文列表
 * @param  {Object} params 搜索值（可选）
 * @return {Object} 推文列表
 */
api.articleList = (params, res) => wxRequest(params, apiService + '/api/v1/public/articleList', res);

/**
 * 获取推文详情
 * @param  {Object} params 推文id
 * @return {Object} 推文详情
 */
api.articleDetail = (params) => wxRequest(params, apiService + '/api/v1/public/articleDetail');

/**
 * 获取推文评论列表
 * @param  {Object} params 推文id
 * @return {Object} 推文评论列表
 */
api.articleCommentList = (params, res) => wxRequest(params, apiService + '/api/v1/public/article/commentList', res);

/**
 * 评论推文
 * @param  {Object} params 推文id、userid、评论内容
 * @return {Object} 评论结果
 */
api.commentArticle = (params) => wxRequest(params, apiService + '/api/v1/public/article/comment');

/**
 * 获取消息列表
 * @param  {Object} params 类型（小程序端只需要获取展示中的消息列表）
 * @return {Object} 推文评论列表
 */
api.noticeList = (params) => wxRequest(params, apiService + '/api/v1/public/noticeList');

/**
 * 获取消息详情
 * @param  {Object} params 消息id
 * @return {Object} 消息详情
 */
api.noticeDetail = (params) => wxRequest(params, apiService + '/api/v1/public/noticeDetail');

/**
 * 获取积分规则
 * @param  {Object} params 无
 * @return {Object} 积分规则详情
 */
api.scoreRule = params => wxRequest(params, apiService + "/api/v1/public/scoreRule");

/**
 * 获取用户当前可得积分情况
 * @param  {Object} params 无
 * @return {Object} 当前可得积分情况
 */
api.userScoreState = params => wxRequest(params, apiService + "/api/v1/public/userScoreState");

/**
 * 积分记录列表
 * @param  {Object} params page
 * @return {Object} 积分记录列表
 */
api.scoreList = params => wxRequest(params, apiService + "/api/v1/public/scoreList");

/**
 * 实名认证
 * @param  {Object} params 姓名，证件类型，身份证号
 * @return {Object} 返回实名认证的结果
 */
api.realNameAuth = params => wxRequest(params, apiService + "/api/v1/public/realname");

/**
 * 获取实名认证信息
 * @param  {Object} params 无
 * @return {Object} 返回实名认证的信息
 */
api.getRealNameInfo = params => wxRequest(params, apiService + "/api/v1/public/realname");

/** 邀请记录列表
 * @param  {Object} params page
 * @return {Object} 邀请记录列表
 */
api.inviteList = params => wxRequest(params, apiService + "/api/v1/public/inviteList");

/**
 * 分享文章增加积分
 * @param  {Object} params articleId：文章id
 * @return {Object} 增加积分结果
 */
api.shareArticle = params => wxRequest(params, apiService + "/api/v1/public/article/share");

/**
 * 游客分享文章
 * @param  {Object} params articleId：文章id
 * @return {Object} 分享结果
 */
api.visitorShareArticle = params => wxRequest(params, apiService + "/api/v1/public/article/visitorShare");

/** 
 * 获取抽奖信息
 * @return {Object} 抽奖信息
 */
api.userLotteryState = params => wxRequest(params, apiService + "/api/v1/public/userLotteryState");


/**
 * 参与抽奖
 * @param  {Object} params 用户名、手机号、中奖时间
 * @return {Object} 中奖列表
 */
api.confirmLottery = params => wxRequest(params, apiService + "/api/v1/user/lotteryRecord");

/**
 * 确认抽奖结果
 * @param  {Object} params 抽奖id
 * @return {Object} 中奖列表
 */
api.lottery = params => wxRequest(params, apiService + "/api/v1/public/lottery/join");

/**
 * 获取抽奖记录
 * @param  {Object} params 类型
 * @return {Object} 中奖列表
 */
api.joinList = (params, res) => wxRequest(params, apiService + "/api/v1/public/joinList", res);

/** banner列表
 * @return {Object} banner列表
 */
api.bannerList = params => wxRequest(params, apiService + "/api/v1/public/bannerList");

/** 礼品和优惠券列表
 * @return {Object} 礼品和优惠券列表
 */
api.userScoreGoodsList = params => wxRequest(params, apiService + "/api/v1/public/userScoreGoodsList");

/** 礼品和优惠券详情
 * @param  {Object} params giftId
 * @return {Object} 礼品和优惠券详情
 */
api.giftCouponDetail = params => wxRequest(params, apiService + "/api/v1/public/giftCouponDetail");

/** 兑换优惠券
 * @return {Object} 礼品和优惠券列表
 */
api.couponOrder = params => wxRequest(params, apiService + "/api/v1/user/couponOrder");

/** 兑换礼品
 * @return {Object} 兑换礼品
 */
api.giftOrder = params => wxRequest(params, apiService + "/api/v1/user/giftOrder");

/** 提交订单
 * @param  {Object} params addressId：地址， goodsInfo：json格式的字符串 eg:[{"goodsId":11,"goodsAmount":1,"version":1}]，goodsAmount：商品数量，payAmount：支付的价格，payType：//1钱 2余额 3混合 混合支付优先支付余额 （ps:只用1、3；用混合支付做业务上的余额支付，余额不足的地方用rmb支付），sendType：//1购物车提交 2直接提交
 * @return {Object} 提交订单
 */
api.submitOrder = params => wxRequest(params, apiService + "/api/v1/user/order");

/** 查询订单状态
 * @param  {Object} params orderId：订单id
 * @return {Object} 提交订单
 */
api.orderState = params => wxRequest(params, apiService + "/api/v1/user/orderState");

/** 取消订单
 * @param  {Object} params orderId：订单id
 * @return {Object} 取消订单
 */
api.cancelOrder = params => wxRequest(params, apiService + "/api/v1/user/orderCancel");

/** 取消支付，用于通知后台用户取消了支付
 * @param  {Object} params orderId：订单id
 * @return {Object} 取消支付
 */
api.cancelPay = params => wxRequest(params, apiService + "/api/v1/wechat/cancelPay");

/** 确认收货
 * @param  {Object} params orderId：订单id
 * @return {Object} 确认收货
 */
api.receivedOrder = params => wxRequest(params, apiService + "/api/v1/user/receivedOrder");

/**
 * 微信支付 提交wx订单 小程序
 * @param  {Object} params openId、订单号orderId
 * @return {Object} 结果
 */
api.wechatPay = (params) => wxRequest(params, apiService + '/api/v1/wechat/appPay');

/** 添加评论 post
 * @param  {Object} params type：1好评 2中评 3差评，content：内容，imagesArr：图片数组，ordersGoodsId：订单商品id
 * @return {Object} 商品评论
 */
api.addGoodsComment = params => wxRequest(params, apiService + "/api/v1/user/comment");

/** 我的订单
 * @param  {Object} params 
 * @return {Object} 我的订单列表
 */
api.myOrderList = params => wxRequest(params, apiService + "/api/v1/user/order");

/** 修改订单收货地址-未支付订单
 * @param  {Object} params // orderId, 要变更的订单id addressId 变更成的新的地址id
 * @return {Object} 
 */
api.updOrderAddress = params => wxRequest(params, apiService + "/api/v1/user/orderAddress");

/** 订单详情
 * @param  {Object} params orderId
 * @return {Object} 订单详情
 */
api.orderDetail = params => wxRequest(params, apiService + "/api/v1/public/orderDetail");

/**
 * 收货地址列表 get
 * @param  {Object} params  page 第几页 limit 每页获取的条目数 marker 第一页时候的时间
 * @return {Object} 收货地址列表
 */
api.addressList = (params, res) => wxRequest(params, apiService + '/api/v1/user/receiveAddressList', res);

/**
 * 添加新收货人 post 
 * @param  {Object} params 手机号、类型、收货人姓名、收货人手机号、区域、详细地址、邮政编码、是否为默认地址
 * @return {Object} 添加结果
 */
api.addAddress = (params) => wxRequest(params, apiService + '/api/v1/user/receiveAddress');

/**
 * 修改收货地址 put
 * @param  {Object} params 手机号、类型、该地址的id、收货人姓名、收货人手机号、区域、详细地址、邮政编码、是否为默认地址
 * @return {Object} 修改结果
 */
api.updateAddress = (params) => wxRequest(params, apiService + '/api/v1/user/receiveAddress');

/**
 * 删除收货地址 delete
 * @param  {Object} params 该地址的id
 * @return {Object} 删除结果
 */
api.deleteAddress = (params) => wxRequest(params, apiService + '/api/v1/user/receiveAddress');

/**
 * 我的优惠券列表
 * @param  {Object} params type:1未使用 2已使用 3已过期; page limit marker //当前marker为查看第一页时的时间， 当你查看第一页时不需要传marker 后台生成给你返回 后面翻页的时候带回（防止前后端时间不一致造成的数据误差）
 * @return {Object} 优惠券列表
 */
api.myCouponList = (params, res) => wxRequest(params, apiService + '/api/v1/user/myCouponList', res);

/**
 * 获取优惠券列表 get
 * @param  {Object} params type：1可使用|2不可使用 goodsType
 * @return {Object} 优惠券列表
 */
api.couponList = (params) => wxRequest(params, apiService + '/api/v1/user/canUseCouponList');

/**
 * 分类列表 get
 * @param  {Object} params 
 * @return {Object} 分类列表
 */
api.goodsTypeList = (params) => wxRequest(params, apiService + '/api/v1/public/goodsTypeList');

/**
 * 首页二级分类列表pv排序
 * @param  {Object} params 
 * @return {Object} 商品分类列表
 */
api.secondGoodsTypeListByPv = (params) => wxRequest(params, apiService + '/api/v1/public/secondGoodsTypeListByPv');

/**
 * 店铺商品分类列表 get
 * @param  {Object} shopId 店铺id 
 * @return {Object} 店铺商品分类列表
 */
api.shopGoodsTypeList = (params) => wxRequest(params, apiService + '/api/v1/public/shopGoodsTypeList');

/**
 * 商品列表 get
 * @param  {Object} params 关键词（可选）、一级分类（可选）、二级分类（可选）、类型
 * @return {Object} 商品列表
 */
api.goodsList = (params, res) => wxRequest(params, apiService + '/api/v1/public/goodsList', res);

/**
 * 爆款销量前几显示列表 get
 * @param  {Object} params page、limit
 * @return {Object} 爆款商品列表
 */
api.topGoodsList = (params, res) => wxRequest(params, apiService + '/api/v1/public/topGoodsList', res);

/**
 * 精选品类列表 get
 * @param  {Object} params page、limit
 * @return {Object} 精选品类列表
 */
api.typeGoodsList = (params, res) => wxRequest(params, apiService + '/api/v1/public/typeGoodsList', res);

/**
 * 活动商品列表 get
 * @param  {Object} params page、limit
 * @return {Object} 活动商品列表
 */
api.eventGoodsList = (params, res) => wxRequest(params, apiService + '/api/v1/public/eventGoodsList', res);

/**
 * 商品列表 get
 * @param  {Object} params 
 * @return {Object} 删除结果
 */
api.adGoodsList = (params, res) => wxRequest(params, apiService + '/api/v1/public/adGoodsList', res);

 /* 商品详情 get
 * @param  {Object} 商品id 
 * @return {Object} 商品详情
 */
api.goodsDetail = (params) => wxRequest(params, apiService + '/api/v1/public/goodsDetail');

/**
 * 添加至购物车 post 
 * @param  {Object} params 商品id、数量、商品版本
 * @return {Object} 添加结果
 */
api.addBuyCar = (params) => wxRequest(params, apiService + '/api/v1/user/buyCar');

/**
 * 修改购物车商品数量 put
 * @param  {Object} params 商品id、数量、商品版本
 * @return {Object} 添加结果
 */
api.editBuyCar = (params) => wxRequest(params, apiService + '/api/v1/user/buyCar');

/**
 * 删除购物车商品批量 delete 
 * @param  {Object} params goodsIdArr:数组格式的字符串
 * @return {Object} 删除结果
 */
api.deleteBuyCar = (params) => wxRequest(params, apiService + '/api/v1/user/buyCar');

/**
 * 查看购物车列表 get
 * @param  {Object} params 
 * @return {Object} 查询结果
 */
api.getBuyCar = (params) => wxRequest(params, apiService + '/api/v1/user/buyCar');

/**
 * 用户充值 post
 * @param  {Object} params 
 * @return {Object} 结果
 */
api.userRecharge = (params) => wxRequest(params, apiService + '/api/v1/user/recharge');

/**
 * 待评价商品列表 get
 * @param  {Object} params 
 * @return {Object} 查询结果
 */
api.getWaitComList = (params) => wxRequest(params, apiService + '/api/v1/user/waitCommentList');

/**
 * 用户售后列表 get
 * @param  {Object} params 
 * @return {Object} 查询结果
 */
api.getSaleBackList = (params) => wxRequest(params, apiService + '/api/v1/user/saleBackList');

/**
 * 用户资金明细列表 get
 * @param  {Object} params 
 * @return {Object} 查询结果
 */
api.getBalanceList = (params) => wxRequest(params, apiService + '/api/v1/user/balanceList');


 /* 商品评价列表 get
 * @param  {Object} 商品id 评价类型
 * @return {Object} 商品评论列表
 */
api.goodsCommentList = (params, res) => wxRequest(params, apiService + '/api/v1/public/commentList', res);

/**
 * 查询取货点列表
 * @param  {Object} params  type 店铺类型，1商户，2平台 shop_id 店铺id，类型为平台时暂不需要填写本字段 
 *         page 第几页 limit 每页获取的条目数 marker 第一页时候的时间
 * @return {Object} 取货点列表
 */
api.pickupList = (params, res) => wxRequest(params, apiService + '/api/v1/public/pickupList', res);

/**
 * 查询我的兑换码列表
 * @param  {Object} params  page 第几页 limit 每页获取的条目数 marker 第一页时候的时间 used 按使用情况筛选，0：未兑换，1：已兑换，不填返回所有兑换码
 * @return {Object} 兑换码列表
 */
api.redeemCodeList = (params, res) => wxRequest(params, apiService + '/api/v1/user/redeemCodeList', res);

/**
 * 
 * test1
 */

/**
 * 
 * test2 
 * 
 */

/**
 * 
 * test3
 * 
 */

export default api;
