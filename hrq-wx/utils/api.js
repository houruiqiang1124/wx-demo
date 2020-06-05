import {BASE_URL} from './config'
const request = require("./request.js");
// api请求
// 示例
const goodsCategory = data => request({url: `${BASE_URL}/shop/goods/category/all`, method:"post", data });

// 导出
module.exports = {
	goodsCategory
}