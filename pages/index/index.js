//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    money: 0,
  },

  getmoneyTapClick: function () {

    var date = new Date();
    var time = date.getTime();



    var start = Date(Date.parse(date));
    console.log(start, time);

    try {
      var value = wx.getStorageSync('time')
      if (value) {
        var intervalTime = time - value.getTime();
        var timeSec = intervalTime / (1000 * 60);
        if (timeSec > 30) {
          wx.showToast({
            title: '领取金币666',
            duration: 1500
          })
          setTimeout(function () {
            wx.hideToast()
          }, 1500);

          this.cacluateMoney();

          wx.setStorage({
            key: 'time',
            data: date,
          });
        } else {
          wx.showToast({
            title: '距离上次的领取金币不超过30分钟，请稍后再领...',
            duration: 1500
          })

          setTimeout(function () {
            wx.hideToast()
          }, 1500)
        };

      } else {
        wx.showToast({
          title: '领取金币666',
          duration: 1500
        })
        setTimeout(function () {
          wx.hideToast()
        }, 1500);

        this.cacluateMoney();


        wx.setStorage({
          key: 'time',
          data: date,
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  },

  cacluateMoney: function () {
    var totalMoney = this.data.money;
    totalMoney += 666;
    this.setData({
      money: totalMoney,
    });

    wx.setStorage({
      key: 'money',
      data: totalMoney,
    });
  },

  gameStartTapClick: function () {
    wx.navigateTo({
      url: "../cow/cow"
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    wx.getStorage({
      key: 'money',
      success: function (res) {
        // success
        that.setData({
          money: res.data
        })
      },
    })



  }
})
