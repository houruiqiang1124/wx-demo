// pages/authorize/index.js
var app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	rejectLogin: function (e) {
		wx.navigateBack({

		})
	},
	bindGetUserInfo: function (e) {
		if (!e.detail.userInfo) {
			return;
		}
		this.login();
	},
	login: function () {
		let _this = this;
		wx.login({
			success: function (res) {
				console.log(res);
				if (res.code) {
					_this.getUserInfo();
					
					// app.request({
					// 	url: api.getLoginToken,
					// 	method: "post",
					// 	data: {
					// 		code: res.code,
					// 	}
					// }).then(function (res) {
					// 	console.log(res);
					// })
				}
			}
		})
	},

	getUserInfo: function() {
		console.log(22)
		wx.getUserInfo({
			success: res => {
				console.log(res);
				wx.setStorageSync('userInfo', res.userInfo);
				wx.navigateBack({
					delta: 1
				})
				// 可以将 res 发送给后台解码出 unionId
			}
		})
	}
})