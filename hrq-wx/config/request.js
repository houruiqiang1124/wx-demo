const config = require("../config.js");


/**
 * http请求
 * @param {Object} params:{url, method, data} jie'接收一个对象参数，地址，请求方法，入参
 */
const request = (params = {}) => {
	if(!params.method) {
		params.method = "post"
	}
	return new Promise(function (resolve, reject) {
		wx.request({
			url: config.host + params.url,
			data: params.data || {},
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: params.method,
			success: function (res) {
				resolve(res.data);
			},
			fail: function (res) {
				console.log(res);
				reject(res);
			}
		})
	})
}

module.exports = request;