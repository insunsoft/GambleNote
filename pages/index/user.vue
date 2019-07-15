<template>
	<view>
		<!-- 顶部导航条 -->
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设置</block>
		</cu-custom>
		<!-- 页面开始 -->

		<scroll-view scroll-y class="page bg-white ">
						<view class="cu-bar bg-white  margin-top solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>
					请您设置好个人相关信息
				</view>
			</view>
			
			<view class="padding-sm">
				<view class="bg-white">
					<view class="flex solid-bottom padding justify-center">
						<view class=" radius"><image class="cu-avatar round xl" :src="UserInfo.UserAvatar"></image></view>
					</view>

					<view class="cu-form-group">
						<view class="title">用户姓名</view>
						<input name="username" :value="UserInfo.UserName" @input="inputUsername" />
					</view>
					<view class="cu-form-group flex">
						<view class="title">性别选择</view>
						<view class="flex-sub  cu-tag " :class="UserInfo.UserSex == '女' ? '' : 'cu-tag bg-orange'" @click="ChangeSex('男')">男</view>
						<view class="flex-sub  cu-tag " :class="UserInfo.UserSex == '男' ? '' : 'cu-tag bg-orange'" @click="ChangeSex('女')">女</view>
					</view>
					<view class="cu-form-group">
						<view class="title">心情留言</view>
						<input style="text-align:left" name="liuyan" :value="UserInfo.UserMsg" @input="inputUsermsg" />
					</view>

					<!-- </form>	 -->
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-orange text-orange" @tap="go_back">取消</button>
						<button class="cu-btn bg-orange margin-left" @tap="go_save_user">保存</button>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white  margin-top solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>
					系统操作
				</view>
			</view>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-orange lg" @tap="go_add">既往收益记录结转</button>
				<!-- <button class="cu-btn bg-red margin-tb-sm lg" @tap="go_clean">清除所有记录</button> -->
			</view>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="padding"></text>提示</view>
				<view class="flex-sub text-center">
					<view class="solid-bottom text-sm padding"><text class="text-black">将以往记录结转成输赢各一条汇总记录，避免数据</text></view>
					<view class="solid-bottom text-sm padding"><text class="text-black">量大导致运行和计算缓慢，建议每年年末操作一次。</text></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			UserInfo: this.$UserInfo
		};
	},
	onLoad() {},
	methods: {
		ChangeSex(e) {
			this.UserInfo.UserSex = e;
			if ('男' == e) {
				this.$UserInfo.UserAvatar = '/static/man.png';
			} else {
				this.$UserInfo.UserAvatar = '/static/woman.png';
			}
		},
		inputUsermsg(e) {
			this.UserInfo.UserMsg = e.detail.value;
			console.log(this.UserInfo.UserMsg);
		},
		inputUsername(e) {
			this.UserInfo.UserName = e.detail.value;
			console.log(this.UserInfo.UserName);
		},
		go_save_user(e) {
			this.$UserInfo = this.UserInfo;

			try {
				uni.setStorageSync('keyUserInfo', this.$UserInfo);
				uni.showToast({
					title: '保存数据成功！',
					icon: 'success',
					duration: 2000,
					success: function(res) {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			} catch (e) {
				// error

				uni.showToast({
					title: '保存数据失败！',
					icon: 'success',
					duration: 2000,
					success: function(res) {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			}
		},
		go_back(e) {
			uni.navigateBack({
				delta: 1
			});
		},
		go_add(e) {
			//计算
			var arrList = this.$WinList;
			var a1 = 0;
			var a2 = 0;
			var b1 = 0.0;
			var b2 = 0.0;
			for (var i in arrList) {
				//遍历json对象的每个key/value对,p为key
				//遍历json数组时，这么写p为索引

				if (arrList[i].LstWIN === 1) {
					a1++;
					b1 += parseFloat(arrList[i].LstMoney);
					console.log(i);
				} else {
					a2++;
					b2 += parseFloat(arrList[i].LstMoney);
				}
			}

			var MoneyResult1 = b1 - b2;

			var now = new Date();
			var year = now.getFullYear(); //得到年份
			var month = now.getMonth() + 1; //得到月份
			var date = now.getDate(); //得到日期
			var nowdate = year + '-' + month + '-' + date;
			this.$WinList = [
				{
					LstWIN: 1,
					LstDate: nowdate,
					LstType: 6,
					LstMoney: b1,
					LstFriends: '汇总---',
					LstAddress: '汇总'
				},
				{
					LstWIN: 2,
					LstDate: nowdate,
					LstType: 6,
					LstMoney: b2,
					LstFriends: '汇总---',
					LstAddress: '汇总'
				}
			];

			try {
				uni.setStorageSync('keyWinList', this.$WinList);
				uni.showToast({
					title: '汇总数据操作成功！',
					icon: 'success',
					duration: 13000,
					success: function(res) {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			} catch (e) {
				// error
				console.log(e);
				uni.showToast({
					title: '保存数据失败！',
					icon: 'success',
					duration: 12000,

					success: function(res) {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			}
		}

		// 		go_clean(e) {
		// 			uni.showModal({
		// 				title: '提示',
		// 				content: '将清除用户信息和所有输赢记录，请慎重使用，本功能仅用于初始化',
		// 				success: function(res) {
		// 					if (res.confirm) {
		// 						console.log('选择了确定');
		//
		// 						try {
		// 							uni.removeStorageSync('keyUserInfo');
		// 							uni.showToast({
		// 								title: '清除用户成功！',
		// 								duration: 3000
		// 							});
		// 						} catch (e) {
		//
		// 							uni.showToast({
		// 								title: '信息清除失败！',
		// 								duration: 3000
		// 							});
		// 						}

		//
		// 						try {
		// 							uni.removeStorageSync('keyWinList');
		// 							uni.showToast({
		// 								title: '清除输赢记录成功！',
		// 								duration: 12000,
		// 								success: function(res) {
		//
		// 								}
		// 							});
		//
		// 							this.$WinList = [
		// 								{
		// 									LstWIN: 1,
		// 									LstDate: '2019-07-08',
		// 									LstType: 1,
		// 									LstMoney: 0,
		// 									LstFriends: '未填写-未填写-未填写-未填写',
		// 									LstAddress: '未填写'
		// 								},
		// 								{
		// 									LstWIN: 2,
		// 									LstDate: '2019-07-08',
		// 									LstType: 0,
		// 									LstMoney: 0,
		// 									LstFriends: '未填写-未填写-未填写-未填写',
		// 									LstAddress: '未填写'
		// 								}
		// 							];
		//
		// 							uni.setStorageSync('keyWinList', this.$WinList);
		//
		// 							uni.navigateBack({
		// 								delta: 1
		// 							});
		// 						} catch (e) {
		// 							uni.showToast({
		// 								title: '输赢记录清除失败！',
		// 								duration: 12000
		// 							});
		// 							uni.navigateBack({
		// 								delta: 1
		// 							});
		// 						}
		// 			} else if (res.cancel) {
		// 				console.log('用户点击取消');
		// 			}
		// 		}
		// 	});
		// }
	}
};
</script>

<style>
.cu-form-group .title {
	min-width: calc(4em + 15px);
}
</style>
