const request = require("./request.js");


// api请求
const goodsCategory = data => request({url: "/shop/goods/category/all", method:"get", data });

const getGoodList = data => request({ url: "/shop/goods/list", data});

const getBannerList = data => request({ url: "/banner/list", method:"get", data})

module.exports = {

	userLogin: "/user/m/login", // 用户登录
	
	userWxinfo: "/user/wxinfo", // 获取当前用户openid,unionid

	getLoginToken: "/user/wxapp/login", //登录获取Token
	
	goodsList: "/shop/goods/list", // 商品列表
	
	goodsCategory, // 商品分类

	getGoodList, // 商品列表

	getBannerList, // banner
}