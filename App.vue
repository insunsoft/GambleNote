<script>
import Vue from 'vue';
export default {
	onLaunch: function() {
		//console.log('系统==>>程序启动===========================');

		Vue.prototype.$SwiperList = [
			{
				txt: '输钱是手痞，赢钱靠智商。'
			},
			{
				txt: '摊子还冇散，生意就还有得做。'
			},
			{
				txt: '打牌不怕输，就怕对门坐咂猪！'
			},
			{
				txt: '上手坐咂撩神，下手坐咂碰神，一天都是寡木的'
			},
			{
				txt: '每人320，快点嗦米'
			},
			{
				txt: '嗯不港假话会死啊，到陈可新哪里磕嘎你一口的假牙齿'
			},
			{
				txt: 'money可以少，牌品不能输。'
			}
			
			
		];
		Vue.prototype.$GambleList = ['麻--将', '跑得快', '转溜子', '斗地主', '鬼符子', '跑符子', '其--他'];

		//console.log('系统==>>加载用户信息========================');

		try {
			const value = uni.getStorageSync('keyUserInfo');
			if (value) {
				//console.log('系统==>>本地存储加载成功！======================');
				Vue.prototype.$UserInfo = value;
			} else {
				//console.log('系统==>>本地存储无记录，赋予默认值！======================');
				Vue.prototype.$UserInfo = {
					UserName: '尚未设置',
					UserMsg: '每一次胜利都是ShowTime！',
					UserAvatar: '/static/man.png',
					UserSex: '男'
				};
			}
		} catch (e) {
			// error
			//console.log('系统==>>读取本地缓存错误，赋予默认值！======================');
			Vue.prototype.$UserInfo = {
				UserName: '尚未设置',
				UserMsg: '每一次胜利都是ShowTime！',
				UserAvatar: '/static/man.png',
				UserSex: '男'
			};
		}

		//console.log('系统==>>获取姓名' + this.$UserInfo.UserName);

		try {
			const value = uni.getStorageSync('keyWinList');
			if (value) {
				//console.log('系统==>>本地存储加载成功！======================');
				Vue.prototype.$WinList = value;
			} else {
				//console.log('系统==>>本地存储无记录，赋予默认值！======================');
				Vue.prototype.$WinList = [
					{
						LstWIN: 1,
						LstDate: '2019-07-08',
						LstType: 1,
						LstMoney: 0,
						LstFriends: '未填写-未填写-未填写-未填写',
						LstAddress: '未填写'
					},
					{
						LstWIN: 2,
						LstDate: '2019-07-08',
						LstType: 0,
						LstMoney: 0,
						LstFriends: '未填写-未填写-未填写-未填写',
						LstAddress: '未填写'
					}
				];
			}
		} catch (e) {
			// error
			//console.log('系统==>>读取本地缓存错误，赋予默认值！======================');
			Vue.prototype.$WinList = [
				{
					LstWIN: 1,
					LstDate: '2019-07-08',
					LstType: 1,
					LstMoney: 0,
					LstFriends: '未填写-未填写-未填写-未填写',
					LstAddress: '火箭大酒店'
				},
				{
					LstWIN: 2,
					LstDate: '2019-07-08',
					LstType: 0,
					LstMoney: 0,
					LstFriends: '未填写-未填写-未填写-未填写',
					LstAddress: '火箭大酒店'
				}
			];
		}

		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				}
				// #endif

				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif

				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight;
				// + e.titleBarHeight;
				// #endif
			}
		});
	},
	onShow: function() {
		//console.log('系统==>>返回前台===========================');
	},
	onHide: function() {
		//console.log('系统==>>返回后台===========================');
	}
};
</script>

<style>
/*每个页面公共css */
@import 'colorui/main.css';
@import 'colorui/icon.css';

.nav-list {
	display: flex;
	flex-wrap: wrap;
	padding: 0px 40upx 0px;
	justify-content: space-between;
}

.nav-li {
	padding: 30upx;
	border-radius: 12upx;
	width: 45%;
	margin: 0 2.5% 40upx;
	background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
	background-size: cover;
	background-position: center;
	position: relative;
	z-index: 1;
}

.nav-li::after {
	content: '';
	position: absolute;
	z-index: -1;
	background-color: inherit;
	width: 100%;
	height: 100%;
	left: 0;
	bottom: -10%;
	border-radius: 10upx;
	opacity: 0.2;
	transform: scale(0.9, 0.9);
}

.nav-li.cur {
	color: #fff;
	background: rgb(94, 185, 94);
	box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
}

.nav-title {
	font-size: 32upx;
	font-weight: 300;
}

.nav-title::first-letter {
	font-size: 40upx;
	margin-right: 4upx;
}

.nav-name {
	font-size: 28upx;
	text-transform: Capitalize;
	margin-top: 20upx;
	position: relative;
}

.nav-name::before {
	content: '';
	position: absolute;
	display: block;
	width: 40upx;
	height: 6upx;
	background: #fff;
	bottom: 0;
	right: 0;
	opacity: 0.5;
}

.nav-name::after {
	content: '';
	position: absolute;
	display: block;
	width: 100upx;
	height: 1px;
	background: #fff;
	bottom: 0;
	right: 40upx;
	opacity: 0.3;
}

.nav-name::first-letter {
	font-weight: bold;
	font-size: 36upx;
	margin-right: 1px;
}

.nav-li text {
	position: absolute;
	right: 30upx;
	top: 30upx;
	font-size: 52upx;
	width: 60upx;
	height: 60upx;
	text-align: center;
	line-height: 60upx;
}

.text-light {
	font-weight: 300;
}

@keyframes show {
	0% {
		transform: translateY(-50px);
	}

	60% {
		transform: translateY(40upx);
	}

	100% {
		transform: translateY(0px);
	}
}

@-webkit-keyframes show {
	0% {
		transform: translateY(-50px);
	}

	60% {
		transform: translateY(40upx);
	}

	100% {
		transform: translateY(0px);
	}
}
</style>
