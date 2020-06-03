const request = require("../utils/request.js");

const BASE_URL = 'https://api.it120.cc/demoTest/';	// 接口请求的基本路径

// api请求
// 示例
const goodsCategory = data => request({url: `${BASE_URL}/shop/goods/category/all`, method:"post", data });

// 导出
module.exports = {
	BASE_URL,
	goodsCategory
}