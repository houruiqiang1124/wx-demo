// pages/home/home.js
//获取应用实例
const app = getApp();
const api = require("../../config/api.js");

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		noticeList: [
			{title: "商城新开张，优惠多多，戳我查看详情", id: 1},
			{ title: "今日份活动，满100减50，行动起来吧", id: 2},
			{ title: "手到快，手慢无，快快下单吧", id: 3},
		],
		bannerList: [],
		goodsList: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getBannerList();
		this.getGoodList();
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

	// 获取banner
	getBannerList: function() {
		api.getBannerList().then(res => {
			console.log(res);
			if(res.code == 0) {
				this.setData({
					bannerList: res.data
				})
			}
		})
	},

	// 爆品推荐
	getGoodList: function() {
		let arr = [];
		api.getGoodList().then(res => {
			console.log(res);
			if (res.code == 0) {
				for(let i = 0; i < res.data.length; i++) {
					if (res.data[i].recommendStatusStr == "推荐") {
						arr.push(res.data[i]);
					}
				}
				this.setData({
					goodsList: arr
				})
			}
		})
	}
})