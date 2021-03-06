// index page
const config = require("../../config.js")

Page({
  data: {
    imgUrls: [
      './../../images/banner2.jpg',
      './../../images/banner1.jpg',
      './../../images/banner3.jpg'
    ],
    hotArticles: [],
    hotJobs: [],
    industries: []
  },
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask:true,
    })
    wx.request({
      url: config.service.directionUrl,
      success: function (res) {
        wx.hideLoading();
        that.setData({
          industries: res.data.data
        })
      }
    })
    this.getHotArticle()
    this.getHotApply()
  },
  onReady: function () {
   
  },
  // 获取热门帖子
  getHotArticle: function () {
    const that = this

    wx.request({
      url: config.service.getHotArticleUrl,
      success: function (res) {
        that.setData({
          hotArticles: res.data.data
        })
      }
    })
  },
  // 获取热门内推
  getHotApply: function () {
    const that = this

    wx.request({
      url: config.service.getHotApplyListUrl,
      success: function (res) {
        that.setData({
          hotJobs: res.data.data
        })
      }
    })
  },
  // 跳转到热门内推
  navigateTOHot:function(){
    
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {

  },
})