(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["common/main"],{"1a7f":function(t,e,o){"use strict";var s=o("c2c8"),n=o.n(s);n.a},"1c16":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(o("66fd"));function n(t){return t&&t.__esModule?t:{default:t}}var r={onLaunch:function(){console.log("系统==>>程序启动==========================="),s.default.prototype.$SwiperList=[{txt:"输钱是手痞，赢钱靠智商。"},{txt:"嗯是一砸撩神！"},{txt:"嗯你不港假话会死啊！"},{txt:"摊子还冇散，就莫港输嗒。"},{txt:"爱情和赌博一样,红了眼的都拿器官下注。"},{txt:"小赌饴情养性,强撸灰飞烟灭。"},{txt:"一切不以赢钱为目的的娱乐都是秀智商。"},{txt:"输了只有自己能够救自己，关键在于你剩多少本。"}],s.default.prototype.$GambleList=["麻--将","跑得快","转溜子","斗地主","鬼符子","跑符子","其--他"],console.log("系统==>>加载用户信息========================");try{var e=t.getStorageSync("keyUserInfo");e?(console.log("系统==>>本地存储加载成功！======================"),s.default.prototype.$UserInfo=e):(console.log("系统==>>本地存储无记录，赋予默认值！======================"),s.default.prototype.$UserInfo={UserName:"尚未设置",UserMsg:"我只是一只小雀神！",UserAvatar:"../../static/man.png",UserSex:"男"})}catch(n){console.log("系统==>>读取本地缓存错误，赋予默认值！======================"),s.default.prototype.$UserInfo={UserName:"尚未设置",UserMsg:"我只是一只小雀神！",UserAvatar:"../../static/man.png",UserSex:"男"}}console.log("系统==>>获取姓名"+this.$UserInfo.UserName);try{var o=t.getStorageSync("keyWinList");o?(console.log("系统==>>本地存储加载成功！======================"),s.default.prototype.$WinList=o):(console.log("系统==>>本地存储无记录，赋予默认值！======================"),s.default.prototype.$WinList=[{LstWIN:1,LstDate:"2019-07-08",LstType:1,LstMoney:0,LstFriends:"无记录",LstAddress:"火箭大酒店"},{LstWIN:2,LstDate:"2019-07-08",LstType:0,LstMoney:0,LstFriends:"无记录",LstAddress:"火箭大酒店"}])}catch(n){console.log("系统==>>读取本地缓存错误，赋予默认值！======================"),s.default.prototype.$WinList=[{LstWIN:1,LstDate:"2019-07-08",LstType:1,LstMoney:0,LstFriends:"无记录",LstAddress:"火箭大酒店"},{LstWIN:2,LstDate:"2019-07-08",LstType:0,LstMoney:0,LstFriends:"无记录",LstAddress:"火箭大酒店"}]}t.getSystemInfo({success:function(t){s.default.prototype.StatusBar=t.statusBarHeight,s.default.prototype.CustomBar=t.statusBarHeight+t.titleBarHeight}})},onShow:function(){console.log("系统==>>返回前台===========================")},onHide:function(){console.log("系统==>>返回后台===========================")}};e.default=r}).call(this,o("c11b")["default"])},a2ef:function(t,e,o){"use strict";o.r(e);var s=o("1c16"),n=o.n(s);for(var r in s)"default"!==r&&function(t){o.d(e,t,function(){return s[t]})}(r);e["default"]=n.a},c2c8:function(t,e,o){},c5c6:function(t,e,o){"use strict";o.r(e);var s=o("a2ef");for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);o("1a7f");var r,a,c=o("2877"),u=Object(c["a"])(s["default"],r,a,!1,null,null,null);e["default"]=u.exports}},[["205d","common/runtime","common/vendor"]]]);