<template>
	<view>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">输赢记录</block>
		</cu-custom>

		<view class="cu-list menu-avatar comment solids-top" v-for="(item, index) in WinList" :key="index">
			<view class="cu-item padding-xs">
				<view class="cu-avatar radius " :class="item.LstType>-1?addclass(1,item.LstWIN,item.LstMoney):''">
					<text>{{ addwin(item.LstWIN, item.LstMoney) }}</text>
				</view>
				<!-- <view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view> -->
				<view class="content">
					<view class=""></view>
					<view class="cu-tag" :class="item.LstType>-1?addclass(1,item.LstWIN,item.LstMoney):''">{{ picker[item.LstType] }}</view>

					<view class="cu-tag" :class="item.LstType>-1?addclass(1,item.LstWIN,item.LstMoney):''">{{ addwin(item.LstWIN, item.LstMoney) }}</view>
					<view class="cu-tag" :class="item.LstType>-1?addclass(2,item.LstWIN,item.LstMoney):''">{{ item.LstMoney }}元</view>
					<view class="cu-tag" :class="item.LstType>-1?addclass(1,item.LstWIN,item.LstMoney):''">地点</view>
					<view class="cu-tag" :class="item.LstType>-1?addclass(2,item.LstWIN,item.LstMoney):''">{{ item.LstAddress }}</view>
					
					<view class=" bg-grey padding-xs radius margin-top-xs  text-sm">
						<view class="flex">
							<view>参与:</view>
							<view class="flex-sub">{{ item.LstFriends }}</view>
						</view>
					</view>
					<view class="margin-top-xs flex justify-between">
						<view class="text-gray text-df">{{ item.LstDate }}</view>
						<view>
							<button class="cu-btn  sm bg-orange margin-right-xl" @tap="on_edit" :data-index="index">编辑</button>
							<button class="cu-btn  sm bg-grey" @tap="showModal" :data-index="index">删除</button>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName == 'DelDialog' ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">删除输赢记录</view>
					<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="padding-xl">你确定删除该条信息吗？</view>

				<view class="" v-if="lstIndex>-1">
					<!-- <view class="">{{addclass(1,WinList[lstIndex].LstWIN,WinList[lstIndex].LstMoney)}}</view> -->
					<view class="padding-xs text-sm">
						<view class="cu-tag " >日期</view>
						<view class="cu-tag " >{{ WinList[lstIndex].LstDate }}</view> 
					</view> 
					<view class="padding-xs text-sm">
						<view class="cu-tag " >{{ picker[WinList[lstIndex].LstType] }}</view> 
						 <view class="cu-tag " >
							  {{WinList[lstIndex].LstWIN==1?'赢':'输'}}
						
						</view> 
						<view class="cu-tag " >{{ WinList[lstIndex].LstMoney }}元</view>
						<view class="cu-tag " >地点</view>
						<view class="cu-tag " > {{ WinList[lstIndex].LstAddress }}</view>
					</view>

					<view class="margin-top-xs flex justify-between"><view class="text-gray text-df"></view></view>
				</view>

				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="on_del">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			WinList:this.$WinList,
			picker: this.$GambleList,
			modalName: null,
			lstIndex: -1
		};
	},
	onShow() {
		//console.log('系统记录'+this.$WinList[1].LstAddress);
		
		//this.WinList=this.$WinList
		//console.log('页面记录'+this.WinList[1].LstMoney);
	},
	methods: {
		on_edit(e) {
			this.lstIndex = e.currentTarget.dataset.index;
			uni.navigateTo({
				url: '/pages/index/edit?pid=' + this.lstIndex
			});

			console.log(this.lstIndex);
		},
		on_del(e) {
			this.lstIndex = e.currentTarget.dataset.index;
			//console.log(e.currentTarget.dataset.index);
			this.WinList.splice(this.lstIndex, 1);
			//this.$WinList = this.WinList;
			try {
				uni.setStorageSync('keyWinList', this.WinList);
				try {
					this.$WinList = uni.getStorageSync('keyWinList');
					uni.showToast({
						title: '删除成功',
						duration: 2000
					});
					this.WinList = this.$WinList;
				} catch (e) {
					uni.showToast({
						title: '删除失败',
						duration: 2000
					});
					this.WinList = this.$WinList;
				}
			} catch (e) {
				uni.showToast({
					title: '删除失败',
					duration: 2000
				});
				this.WinList = this.$WinList;
			}
			this.modalName = null;
		},
		showModal(e) {
			this.modalName = 'DelDialog';
			this.lstIndex = e.currentTarget.dataset.index;
		},
		hideModal(e) {
			this.modalName = null;
		},
		addwin(type, money) {
			if (type == 1 && money > 0) {
				return '赢';
			}
			if (type == 2 && money > 0) {
				return '输';
			}
			if ((type == 2 || type == 1) && money == 0) {
				return '平';
			}
		},
		addclass(id, type, money) {
			if (id == 1) {
				if (type == 1 && money > 0) {
					return 'bg-orange';
				}else if (type == 2 && money > 0) {
					return 'bg-cyan';
				}else if (type == 2  && money == 0) {
					return 'bg-grey';
				}else if(type == 1  && money == 0) {
					return 'bg-grey';
				}else{
					return '';
				}
				
			} else {
				if (type == 1 && money > 0) {
					return 'line-orange';
				}else if (type == 2 && money > 0) {
					return 'line-cyan';
				}else if (type == 2  && money == 0) {
					return 'line-grey';
				}else  if(type == 1  && money == 0) {
					return 'line-grey';
				}else{
					return '';
				}
			}
		}
	}
};
</script>

<style>
.notice {
	margin: 0rpx 0px;
	background-color: #f9f4dc;
	height: 80upx;
}
</style>
