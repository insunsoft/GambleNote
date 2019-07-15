<template>
	<view>
		<!-- 顶部导航条 -->
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">牌友列表</block>
		</cu-custom>
		<scroll-view class="page">
			<view class="cu-list menu">
				<view class="cu-item " v-for="(item, index) in feriends" :key="index">
					<!-- 			<view class="cu-avatar radius margin-left">
						<text>{{item.substr(0,1) }}</text>
					</view> -->
					<view class="cu-item">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey">{{ feriends[index] }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			feriends: {}
		};
	},
	onLoad(e) {
		this.WinCalculation();
	},
	methods: {
		// ListTouch触摸开始
		WinCalculation() {
			var arrList = this.$WinList;
			var user = [];
			for (var i in arrList) {
				var feriend = arrList[i].LstFriends.split('-');

				for (var j in arrList) {
					if (j < 3) {
						if (feriend[j] == '未填写' || feriend[j] == '汇总' || feriend[j] == '') {
						} else {
							console.log(feriend[j] + '===' + j.toString());
							user.push(feriend[j]);
						}
					}
				}
			}
			console.log(user);
			// 			//去重
			let arr = user;
			let result = [];
			let obj = {};

			for (let i of arr) {
				if (!obj[i]) {
					result.push(i);
					obj[i] = 1;
				}
			}

			console.log(result);
			this.feriends = result;
		}
	}
};
</script>

<style></style>
