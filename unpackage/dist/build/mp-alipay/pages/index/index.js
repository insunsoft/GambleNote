(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/index/index"],{2397:function(n,t,e){"use strict";var i=e("641f"),o=e.n(i);o.a},2644:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},"2ef3":function(n,t,e){"use strict";e.r(t);var i=e("753a"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=o.a},"3a74":function(n,t,e){"use strict";e.r(t);var i=e("2644"),o=e("2ef3");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("2397");var s=e("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"641f":function(n,t,e){},"753a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{APPTitle:"娱乐记账软件",SwiperList:this.$SwiperList,picker:this.$GambleList,WinList:this.$WinList,UserInfo:this.$UserInfo,WinCalc:{}}},onLoad:function(){},onShow:function(){this.UserInfo=this.$UserInfo,this.WinCalc=this.WinCalculation()},methods:{go_page_list:function(t){n.navigateTo({url:"/pages/index/list"})},go_show_Modal:function(t){n.navigateTo({url:"/pages/index/winitem"})},go_show_User:function(t){n.navigateTo({url:"/pages/index/user"})},WinCalculation:function(){var n=this.$WinList,t=0,e=0,i=0,o=0;for(var a in n)1===n[a].LstWIN?(t++,i+=parseFloat(n[a].LstMoney),console.log(a)):(e++,o+=parseFloat(n[a].LstMoney));var s=t?(t/(t+e)*100).toFixed(2):0,u=t-e,r=i-o,c=s,l=r,f="";console.log("当前胜率"+c),c>-100&&c<=5&&l<0?f="赌魔":c>5&&c<=20&&l<0?f="赌妖":c>20&&c<=35&&l<0?f="赌鬼":c>35&&c<=50&&l<0?f="赌棍":c>35&&c<=50&&l>=0?f="赌侠":c>50&&c<=65&&l>=0?f="赌皇":c>65&&c<=80&&l>=0?f="赌仙":c>80&&c<=95&&l>=0?f="赌神":c>95&&c<=100&&l>=0&&(f="赌圣");var d={WinNum:t,LoseNum:e,WinMoney:i,LoseMoney:o,NumResult:u,MoneyResult:r,WinningProbability:s,LevelName:f};return d}}};t.default=e}).call(this,e("c11b")["default"])}},[["c3a4","common/runtime","common/vendor"]]]);