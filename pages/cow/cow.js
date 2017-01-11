Page({
    data: {
        userCount: 4,
        topHeight: 100,
        cowinfo: {},
    },
    // topView: {
    //     topHeight: 300,
    // },
    onclick: function (e) {
        // console.log(e);
// getRandom();
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        var that = this
        wx.getSystemInfo({
            success: function (res) {
                console.log(res);
                that.setData({
                    // topHeight: res.windowHeight,
                })
            }
        })
    },

getRandom: function () {  
    return parseInt(2 + (9 - 2 + 1) * Math.random());  
}, 

getCards: function () {  
    var arr = [];  
    var count = 5;  
    while (count--) {  
        arr.push(parseInt(2 + (13) * Math.random()));  
    }  
    console.log(arr);
    return arr;  
}, 
    caluateCow: function (cardCount) {

        for (var i = 0; i <cardCount.length; i++) {

        }
    },



})
