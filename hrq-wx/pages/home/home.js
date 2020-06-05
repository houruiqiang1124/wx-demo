// pages/home/home.js
//获取应用实例
const app = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentIndex: 0,
    posterList: [
      {
        id: '1', 
        image: 'https://mina.qn.woody.club/%E8%87%B3%E5%B0%8A%E5%8D%A11.png'
      },
      {
        id: '2', 
        image: 'https://mina.qn.woody.club/%E8%87%B3%E5%B0%8A%E5%8D%A12.png'
      },
      {
        id: '3', 
        image: 'https://mina.qn.woody.club/%E4%BA%B2%E5%AD%90%E5%8D%A11.png'
      },
      {
        id: '4', 
        image: 'https://mina.qn.woody.club/%E4%BA%B2%E5%AD%90%E5%8D%A12.png'
      },
    ]
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
	//函数
swiperChange(event){
    let {current} = event.detail;
    this.setData({
      currentIndex: current
    })
  },
})