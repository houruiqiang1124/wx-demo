//app.js
let config = require("./config.js");
let api = require("./config/api.js");

App({
	onLaunch: function () {
		// 展示本地存储能力
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 获取用户信息
		// wx.getSetting({
		// 	success: res => {
		// 		console.log(res.authSetting)
		// 		if (res.authSetting['scope.userInfo']) {
		// 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
		// 			wx.getUserInfo({
		// 				success: res => {
		// 					console.log(res);
		// 					// 可以将 res 发送给后台解码出 unionId
		// 					this.globalData.userInfo = res.userInfo
		// 					// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
		// 					// 所以此处加入 callback 以防止这种情况
		// 					if (this.userInfoReadyCallback) {
		// 						this.userInfoReadyCallback(res)
		// 					}
		// 				}
		// 			})
		// 		}
		// 	}
		// })
	},
	
	/**
	 * http请求
	 */
	request: function(params = {}) {
		return new Promise(function (resolve, reject) {
			wx.request({
				url: config.host + params.url,
				data: params.data || {},
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				method: params.method,
				success: function(res) {
					resolve(res.data);
				},
				fail: function(res) {
					console.log(res);
					reject(res);
				}
			})
		})
	},

	globalData: {
		userInfo: null
	}
})