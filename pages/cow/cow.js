var systemCards = {
    cards: [],
    cowNumber: 0,
    cowPoint: 0,
    cowTypeChinses: "",
    robBanker: false,
}

var Person = {
    cards: [],
    cowPoint: 0,
    cowType: 0,
    cowTypeChinese: "",


}

var app = getApp()

// 25 炸弹 24 五小 23 五花 22 四花 21 牛牛 20 牛X 19 没牛

Page({
    data: {
        userCount: 4,
        topHeight: 100,
        timer: 5,
        cowinfo: {},
        userInfo: {},
        person: {},
        cardsDesc: [],
        isShowCountTime: false,
        persons: [],
        userMoney: 0,
        isShowBanker: false,
        robBanker: false,
    },

    onclick: function (e) {

        var getCards = this.personGetCards();
        console.log(getCards);
        var card1 = { "point": 1, "type": 4 };
        var card2 = { "point": 1, "type": 4 };
        var card3 = { "point": 11, "type": 4 };
        var card4 = { "point": 11, "type": 4 };
        var card5 = { "point": 13, "type": 4 };
        // var sum = this.cacluateCow([card1, card2, card3, card4, card5]);
        // var sum = this.cacluateCow(getCards);
        // var getCards1 = this.personGetCards();



        // var person1 = new systemCards();
        var person1 = this.data.persons[0];
        var getCards1 = this.personGetCards();

        person1.cards = [].concat(getCards1);
        var sum1 = this.cacluateCow(getCards1);
        person1.cowType = sum1;
        person1.name = "1号玩家";
        person1.betMoney = 50;
        person1.totalMoney = this.data.userMoney;
        person1.typeChinese = systemCards.cowTypeChinses;
        person1.cowPoint = systemCards.cowPoint;


        var person2 = this.data.persons[1];
        var getCards2 = this.personGetCards();
        var sum2 = this.cacluateCow(getCards2);
        person2.cards = getCards;
        person2.cowType = sum2;
        person2.name = "2号玩家"
        person2.typeChinese = systemCards.cowTypeChinses;
        person2.cowPoint = systemCards.cowPoint;

        var person3 = this.data.persons[2];
        var getCards3 = this.personGetCards();
        var sum3 = this.cacluateCow(getCards3);
        person3.cards = getCards3;
        person3.cowType = sum3;
        person3.name = "3号玩家"
        person3.typeChinese = systemCards.cowTypeChinses;
        person3.cowPoint = systemCards.cowPoint;

        var person4 = this.data.persons[3];
        var getCards4 = this.personGetCards();
        var sum4 = this.cacluateCow(getCards4);
        person4.cards = getCards4;
        person4.cowType = sum4;
        person4.name = "4号玩家"
        person4.typeChinese = systemCards.cowTypeChinses;
        person4.cowPoint = systemCards.cowPoint;

        var person5 = this.data.persons[4];
        var getCards5 = this.personGetCards();
        var sum5 = this.cacluateCow(getCards5);
        person5.cards = getCards5;
        person5.cowType = sum5;
        person5.name = "5号玩家"
        person5.typeChinese = systemCards.cowTypeChinses;
        person5.cowPoint = systemCards.cowPoint;

        var person6 = this.data.persons[5];
        var getCards6 = this.personGetCards();
        var sum6 = this.cacluateCow(getCards6);
        person6.cards = getCards6;
        person6.cowType = sum6;
        person6.name = "5号玩家"
        person6.typeChinese = systemCards.cowTypeChinses;
        person6.cowPoint = systemCards.cowPoint;

        this.sortCards([person1, person2, person3, person4, person5, person6]);


        var cardDesc1 = this.cardsDesc(person1);
        person1.cardsDesc = cardDesc1;

        var cardDesc2 = this.cardsDesc(person2);
        person2.cardsDesc = cardDesc2;

        var cardDesc3 = this.cardsDesc(person3);
        person3.cardsDesc = cardDesc3;

        var cardDesc4 = this.cardsDesc(person4);
        person4.cardsDesc = cardDesc4;

        var cardDesc5 = this.cardsDesc(person5);
        person5.cardsDesc = cardDesc5;

        var cardDesc6 = this.cardsDesc(person6);
        person6.cardsDesc = cardDesc6;



        // var persons = [person1, person2, person3, person4, person5, person6];
        this.setData({
            person: person1,
            persons: this.data.persons,
        });
    },


    robTapClick: function () {
        systemCards.robBanker = true;
        for (var i = 0; i < this.data.persons.length; i++) {
            var person = this.data.persons[0];
            if (i == 0) {
                person.banker = true;
            } else {
                person = false;
            }
        }
    },

    noRobTapClick: function () {
        systemCards.robBanker = true;
    },

    cardsDesc: function (person) {
        var newCards = [];
        for (var i = 0; i < person.cards.length; i++) {
            var card = person.cards[i];
            if (card["type"] == 1) {
                card["desc"] = this.pointDesc(card["point"]) + "♠️"
            } else if (card["type"] == 2) {
                card["desc"] = this.pointDesc(card["point"]) + "♥️"
            } else if (card["type"] == 3) {
                card["desc"] = this.pointDesc(card["point"]) + "♣️"
            } else {
                card["desc"] = this.pointDesc(card["point"]) + "♦️"
            }
            newCards.push(card);
        }
        return newCards;
    },

    pointDesc: function (point) {
        var a = "";
        if (point == 11) {
            a = "J";
        } else if (point == 12) {
            a = "Q";
        } else if (point == 13) {
            a = "K";
        } else if (point == 1) {
            a = "A";
        } else {
            a += point;
        }
        return a;
    },

    sortCards: function (persons) {
        var personArray = [];
        for (var i = 0; i < persons.length; i++) {
            for (var j = i + 1; j < persons.length; j++) {
                var person1 = persons[i];
                var person2 = persons[j];
                if (person1.cowType < person2.cowType) {
                    var temp = person1;
                    persons[i] = persons[j];
                    persons[j] = temp;
                } else if (person1.cowType == person2.cowType) {
                    if (person1.cowType == 20 || person1.cowType == 19) {
                        if (person1.cowPoint < person2.cowPoint) {
                            var temp = person1;
                            persons[i] = persons[j];
                            persons[j] = temp;
                        }
                    }
                }
            }
        }
        for (var i = 0; i < persons.length; i++) {
            console.log(persons[i].name);
        }
        console.log(systemCards.cards.length);
    },

    comparePerson: function (person1, person2) {
        if (person1.cowType > person2.cowType) {
            console.log("1号玩家胜利");
        } else if (person1.cowType == person2.cowType) {
            if (person1.cowType == 20 || person1.cowType == 19) {
                if (person1.cowPoint > person2.cowPoint) {
                    console.log("1号玩家胜利");
                } else if (person1.cowPoint == person2.cowPoint) {
                    console.log("暂时平局吧");
                } else {
                    console.log("2号玩家胜利");
                }
            } else {
                console.log("暂时平局吧");
            }
        } else {
            console.log("2号玩家胜利");
        }
    },

    onLoad: function (options) {

        //创建卡牌
        var cardscards = this.createCards();
        systemCards.cards = cardscards;
        var persons = [{}, {}, {}, {}, {}, {}];
        // 生命周期函数--监听页面加载
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(
            function (userInfo) {
                //更新数据
                that.setData({
                    userInfo: userInfo,
                    persons: persons
                })
            })

        wx.getStorage({
            key: 'money',
            success: function (res) {
                // success
                that.setData({
                    userMoney: res.data
                })
            },
        })

        this.cardCountdown();
    },

    createCards: function () {
        var cards = [],
            cardType = [1, 2, 3, 4], //牌的花色
            cardPoint = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // 牌的点数
        cardPoint.forEach(function (p) {
            cardType.forEach(function (t) {
                var card = {
                };
                card["type"] = t;
                card["point"] = p;
                cards.push(card);
            });
        });
        return this.disorderCards(cards);
    },

    disorderCards: function (cards) {
        var temp, len = cards.length;
        for (var i = 0; i < len; i++) {
            var r = this.getRandom(len);
            temp = cards[i];
            cards[i] = cards[r];
            cards[r] = temp;
        }
        return cards;
    },

    getRandom: function (len) {
        return parseInt((len) * Math.random());
    },

    // 发牌
    personGetCards: function () {
        systemCards.cards = systemCards.cards.length < 5 ? this.createCards() : systemCards.cards;
        return systemCards.cards.splice(0, 5);
    },

    sumWithCards: function (arr) {
        var sum = 0;
        for (var j in arr) {
            var cards = arr[j];
            sum += cards["point"];
        }
        return sum % 10;
    },

    samecountWithCards: function (cards) {
        var sameCards = {};
        for (var i = 0; i < 5; i++) {
            var tempCard = cards[i];
            if (sameCards[tempCard["point"]]) {
                sameCards[tempCard["point"]]++;
            } else {
                sameCards[tempCard["point"]] = 1;
            }
        }
        var tempMax = 0;
        var point = 0;
        for (var i in sameCards) {
            if (tempMax < sameCards[i]) {
                tempMax = sameCards[i];
                point = i;
            }
        }
        // console.log(point + "点牌数一样的，一共有" + tempMax + "张");
        return tempMax;
    },

    cacluateCow: function (cards) {
        var personCards = "";
        for (var i in cards) {
            var card = cards[i];
            personCards += card["point"] + ",";
        }


        var cardsParams = this.clone(cards);
        // var cards2 = cards.splice(0,1);
        // console.log(cards1,cards);


        if (this.isFourSame(cardsParams)) {
            systemCards.cowTypeChinses = "炸弹";
            console.log("玩家的卡牌是" + personCards + ",牌型是炸弹");
            return 25;
        } else if (this.isFiveSmall(cardsParams)) {
            systemCards.cowTypeChinses = "五小";
            console.log("玩家的卡牌是" + personCards + ",牌型是五小");
            return 24;
        } else if (this.isFiveFlower(cardsParams)) {
            systemCards.cowTypeChinses = "五花";
            console.log("玩家的卡牌是" + personCards + ",牌型是五花");
            return 23;
        } else if (this.isFourFlower(cardsParams)) {
            systemCards.cowTypeChinses = "四花";
            console.log("玩家的卡牌是" + personCards + ",牌型是四花");
            return 22;
        } else {
            var a = this.cacluate(cardsParams);
            if (a == 21) {
                systemCards.cowTypeChinses = "牛牛";
                console.log("玩家的卡牌是" + personCards + ",牌型是牛牛");
            } else if (a == 20) {
                systemCards.cowTypeChinses = "牛" + systemCards.cowPoint;
                console.log("玩家的卡牌是" + personCards + ",牌型是牛" + systemCards.cowPoint);
            } else {
                systemCards.cowTypeChinses = "没牛";
                console.log("玩家的卡牌是" + personCards + ",牌型无牛，点数是" + systemCards.cowPoint);
            }
            return a;
        }

    },

    // 炸弹
    isFourSame: function (cards) {
        var count = this.samecountWithCards(cards);
        if (count == 4) {
            return true;
        } else {
            return false;
        }
    },

    // 五小
    isFiveSmall: function (cards) {
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card["point"] > 5) {
                return false;
            }
        }
        return true;
    },

    // 五花
    isFiveFlower: function (cards) {
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card["point"] < 10) {
                return false;
            }
        }
        return true;
    },
    // 四花
    isFourFlower: function (cards) {
        var count = this.changeBigThanTenCards(cards);
        if (count["beferCount"] == 1 && count["afterCount"] == 5) {
            return true;
        } else {
            return false;
        }
    },

    cacluate: function (cards) {
        var newCunrrentCards = [];
        for (var i = 0; i < 3; i++) {
            for (var j = i + 1; j < 4; j++) {
                for (var k = j + 1; k < 5; k++) {
                    var tempCards = [cards[i], cards[j], cards[k]];
                    if (this.sumWithCards(tempCards) == 0) {
                        var tempDeleteCards = []
                        for (var d = 0; d < cards.length; d++) {
                            if (d != i && d != j && d != k) {
                                tempDeleteCards.push(cards[d]);
                            }
                        }
                        var a = this.sumWithCards(tempDeleteCards);
                        if (a == 0) {
                            return 21; // 牛牛
                        } else {
                            systemCards.cowPoint = a;
                            return 20; // 牛a
                        }
                    }
                }
            }
        }
        systemCards.cowPoint = this.sumWithCards(cards);
        return 19;
    },

    changeBigThanTenCards: function (cards) {
        var beferTenCount = 0;
        var afterTenCount = 0;
        console.log(cards);
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (card["point"] == 10) {
                beferTenCount++;
            }
            if (card["point"] >= 10) {
                card["point"] = 10;
                afterTenCount++;
            }
        }
        console.log(cards);
        return { "beferCount": beferTenCount, "afterCount": afterTenCount };
    },


    clone: function (obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0; i < obj.length; ++i) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    },

    cardCountdown: function () {
        var tempTime = this.data.timer;
        // var time = 5;
        var that = this;
        if (tempTime == 0 || systemCards.robBanker) {
            tempTime = 5;
            this.onclick();
            that.setData({
                timer: tempTime,
                isShowCountTime: true,
            });
            return;
        }
        console.log(tempTime);
        var time = setTimeout(function () {
            tempTime -= 1;
            that.setData({
                timer: tempTime,
            });
            that.cardCountdown();
        }, 1000)
    }
})







    // getCards: function () {
    //     var arr = [];
    //     var count = 5;
    //     while (count--) {
    //         arr.push(this.getRandom());
    //     }
    //     console.log(arr);
    //     return arr;
    // },
    // caluateCow: function (cardCount) {
    //     var cards = this.getCards();
    //     var s = 0;
    //     var dict = {};
    //     for (var i = 0; i < cards.length; i++) {
    //         var ci = cards[i];
    //         s += ci;
    //         dict[ci] = dict[ci] === undefined ? 1 : dict[ci] + 1;
    //     }
    //     var point = s % 10;
    //     var exists = false;
    //     for (var i in dict) {
    //         var other = (10 + point - i) % 10;
    //         if (dict[other]) {
    //             if ((other == i && dict[other] >= 2) || (other != i && dict[other] >= 1)) {
    //                 exists = true;
    //                 break;
    //             }
    //         }
    //     }
    //     return exists ? point : -1;
    // },

//  disorderCards: function (cards) {
//         var temp, len = cards.length;
//         var newCards = [];
//         for (var i = 0; i < len; i++) {
//             var r = this.createRandom(cards);
//             newCards.push(cards[r]);
//             cards[r] = {0:0};
//             // temp = cards[i];
//             // cards[i] = cards[r];
//             // cards = temp;
//         }
//         console.log(newCards);
//         return cards;
//     },

//     createRandom: function(cards){
//         var randomInt = parseInt((52) * Math.random());
//         var card = cards[randomInt];
//         while((card[0] == 0)) {
//             randomInt = parseInt((52) * Math.random());
//             card = cards[randomInt];
//         }
//         return randomInt;
//     }
