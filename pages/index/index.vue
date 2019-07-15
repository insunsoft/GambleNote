<template>
	<view>
		<!-- 顶部导航条 -->
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<!-- <block slot="backText"></block> -->
			<block slot="content">{{ APPTitle }}</block>
		</cu-custom>
		<!-- 页面开始 -->
		<scroll-view scroll-y class="page bg-white ">
			<!-- 顶部图片 -->
			<view class="flex solid-botto flex solid-bottom padding align-center radius shadow-blur bg-red  bg-img" style="background-image:url(/static/top.png);">
				<view class="flex padding-sm margin-bottom-xs text-bold radius">不是在桌上，就是在赶往桌上的途中......</view>
			</view>
			<!-- 经典语录 标题栏 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text>
					<text class="text-xl text-bold">经典语录</text>
				</view>
			</view>
			<!-- 经典语录 -->
			<view class="uni-swiper-msg " style="height:80upx;background-color: #f9f4dc;">
				<swiper vertical="true" autoplay="true" circular="true" interval="4000">
					<swiper-item v-for="(item, index) in SwiperList" :key="index">
						<view class="text-cut padding-sm  radius insunoverflow text-right" style="width:90% ">{{ item.txt }}</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 用户信息标题栏 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text>
					<text class="text-xl text-bold">当前用户</text>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="cu-list  ">
				<view class="cu-item ">
					<view class="flex solid-bottom padding-sm justify-start bg-white">
						<view class="basis-xs">
							<view class="cu-avatar round lg"><image class="cu-avatar round lg" :src="UserInfo.UserAvatar"></image></view>
						</view>
						<view class="flex-twice">
							<view class="flex p-xs ">
								<view class="flex-sub text-bold text-black padding-xs margin-xs" style="background: #f9f4dc; ">{{ UserInfo.UserName }}</view>
								<view class="flex-sub  text-black padding-xs margin-xs">{{ UserInfo.UserSex }}</view>
								<view class="flex-sub radius text-bold text-red padding-xs margin-xs" style="background: #f9f4dc; ">等级:{{ WinCalc.LevelName }}</view>
							</view>
							<view class="padding-xs  text-black radius  text-bold text-cut">{{ UserInfo.UserMsg }}</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 战况汇总标题栏 -->
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text>
					<text class="text-xl text-bold">战况汇总</text>
				</view>
			</view>
			<!-- 场数统计 -->
			<view class=" bg-white ">
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-title text-orange"></text>
						<text>场数统计</text>
					</view>
				</view>
				<view class="cu-capsule radius  bg-white flex justify-center">
					<view class="cu-tag bg-orange ">胜</view>
					<view class="cu-tag line-orange">{{ WinCalc.WinNum }}场</view>
					<view class="cu-tag bg-orange">败</view>
					<view class="cu-tag line-orange">{{ WinCalc.LoseNum }}场</view>
					<view class="cu-tag bg-orange">平</view>
					<view class="cu-tag line-orange">{{ WinCalc.TiedNum }}场</view>
					<view class="cu-tag bg-orange ">胜率</view>
					<view class="cu-tag line-orange ">{{ WinCalc.WinningProbability }}%</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action">
						<text class="cuIcon-title text-orange"></text>
						<text class="">金额统计</text>
					</view>
				</view>
				<view class="cu-capsule radius  bg-white flex justify-center">
					<view class="cu-tag bg-orange ">赢</view>
					<view class="cu-tag line-orange">{{ WinCalc.WinMoney }}元</view>
					<view class="cu-tag bg-orange  ">输</view>
					<view class="cu-tag line-orange ">{{ WinCalc.LoseMoney }}元</view>
					<view class="cu-tag bg-orange  ">结余</view>
					<view class="cu-tag line-orange ">{{ WinCalc.MoneyResult }}元</view>
				</view>
			</view>
			<!-- 底部高度占位 -->
			<view class="cu-tabbar-height"></view>

			<!-- 中间区域 -->
		</scroll-view>
		<!-- 底部导航 -->
		<view class="cu-bar bg-white tabbar border shop shadow foot">
			<button class="action" @tap="go_page_list()">
				<view class="cuIcon-refund text-orange"><!-- <view class="cu-tag badge"></view> --></view>
				输赢记录
			</button>
			<view class="action" @tap="go_page_feriends()">
				<view class="cuIcon-friendfill"><!-- <view class="cu-tag badge">99</view> --></view>
				牌友列表
			</view>
			<view class="bg-orange submit" @tap="go_show_item">记一笔</view>
			<view class="bg-red submit" @tap="go_show_user">设置</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			APPTitle: '娱乐记账软件',
			UserInfo: {},
			SwiperList: [],
			WinCalc: {}
		};
	},
	onLoad() {
		this.SwiperList = this.$SwiperList;
	},
	onShow() {
		this.UserInfo = this.$UserInfo;
		//console.log(this.UserInfo.UserSex);
		this.WinCalc = this.WinCalculation();
	},
	methods: {
		go_page_list(e) {
			// 转到列表页面
			uni.navigateTo({
				url: '/pages/index/list'
			});
		},

		go_show_item(e) {
			// 转到录入页面
			uni.navigateTo({
				url: '/pages/index/winitem'
			});
		},
		go_page_feriends(e) {
			// 转到录入页面
			uni.navigateTo({
				url: '/pages/index/feriends'
			});
		},
		go_show_user(e) {
			// 转到用户设置页面
			uni.navigateTo({
				url: '/pages/index/user'
			});
		},

		WinCalculation() {
			//计算胜率
			var arrList = this.$WinList;
			var WinNum = 0;
			var LoseNum = 0;
			var TiedNum = 0;
			var WinMoney = 0.0;
			var LoseMoney = 0.0;
			for (var i in arrList) {
				//遍历json对象的每个key/value对,p为key
				//遍历json数组时，这么写p为索引
				switch (arrList[i].LstWIN) {
					case 1:
						if (arrList[i].LstMoney == 0) {
							TiedNum++;
						} else {
							WinNum++;
							WinMoney += parseFloat(arrList[i].LstMoney);
							
						}

						break;
					case 2:
						if (arrList[i].LstMoney == 0) {
							TiedNum++;
						} else {
							LoseNum++;
							LoseMoney += parseFloat(arrList[i].LstMoney);
						}

						break;
					case 3:
						//留待平局扩充

						break;
				}
			}
			var WinningProbability = WinNum ? ((WinNum / (WinNum + LoseNum)) * 100).toFixed(2) : 0;
			var NumResult = WinNum - LoseNum;
			var MoneyResult = WinMoney - LoseMoney;

			//计算级别

			var LevelName = '';

			if (WinningProbability > -100 && WinningProbability <= 5 && MoneyResult < 0) {
				LevelName = '赌魔';
			} else if (WinningProbability > 5 && WinningProbability <= 20 && MoneyResult < 0) {
				LevelName = '赌妖';
			} else if (WinningProbability > 20 && WinningProbability <= 35 && MoneyResult < 0) {
				LevelName = '赌鬼';
			} else if (WinningProbability > 35 && WinningProbability <= 50 && MoneyResult < 0) {
				LevelName = '赌棍';
			} else if (WinningProbability > 35 && WinningProbability <= 50 && MoneyResult >= 0) {
				LevelName = '赌侠';
			} else if (WinningProbability > 50 && WinningProbability <= 65 && MoneyResult >= 0) {
				LevelName = '赌皇';
			} else if (WinningProbability > 65 && WinningProbability <= 80 && MoneyResult >= 0) {
				LevelName = '赌仙';
			} else if (WinningProbability > 80 && tmp <= 95 && WinningProbability >= 0) {
				LevelName = '赌神';
			} else if (WinningProbability > 95 && tmp <= 100 && WinningProbability >= 0) {
				LevelName = '赌圣';
			}else if (WinningProbability > 20 && WinningProbability <= 35 && MoneyResult > 0) {
				LevelName = '赌棍';
			}else if (WinningProbability > 5 && WinningProbability <= 20 && MoneyResult > 0) {
				LevelName = '赌侠';
			}else if (WinningProbability > 0 && WinningProbability <= 5 && MoneyResult > 0) {
				LevelName = '赌皇';
			}else{
				LevelName = '未知';
			}

			var Result = {
				WinNum: WinNum,
				LoseNum: LoseNum,
				TiedNum: TiedNum,
				WinMoney: WinMoney,
				LoseMoney: LoseMoney,
				NumResult: NumResult,
				MoneyResult: MoneyResult,
				WinningProbability: WinningProbability,
				LevelName: LevelName
			};

			return Result;
		}
	}
};
</script>

<style></style>
