// pages/class/class.js
const api = require("../../config/api.js");
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		classification: [],
		goodsList: [],
		navHeight: "",
		navId: ""
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.init();
		this.getCategoryList();
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

	init() {
		let wxInfo = wx.getSystemInfoSync();
		this.setData({
			navHeight: wxInfo.windowHeight
		})
	},

	// 分类
	getCategoryList: function () {
		api.goodsCategory().then(res => {
			console.log(res);
			if(res.code == 0) {
				this.setData({
					classification: res.data,
					navId: res.data[0].id
				});
				this.getGoodList(res.data[0].id);
			}
		})
	},

	// 点击导航切换
	navChange: function(e) {
		let id = e.target.dataset.id;
		this.setData({
			navId: id,
			goodsList: []
		});
		this.getGoodList(id);
	},

	// 获取商品
	getGoodList: function (categoryId) {
		let param = {categoryId}
		api.getGoodList(param).then(res => {
			console.log(res);
			if (res.code == 0) {
				this.setData({
					goodsList: res.data
				})
			}
		})
	}
})