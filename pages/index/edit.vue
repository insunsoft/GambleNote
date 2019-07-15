<template>
	<view>
		<!-- 顶部导航条 -->
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">编辑</block>
		</cu-custom>
		<!-- 页面开始 -->

		<scroll-view scroll-y class="page bg-white ">
			<view class="cu-bar bg-white justify-end"><view class="content">请输入输赢信息</view></view>

			<!-- <form>	 -->
			<view class="cu-form-group margin-top">
				<view class="title">娱乐类型</view>
				<picker @change="PickerChange" :value="LstType" :range="picker">
					<view class="picker">{{ LstType > -1 ? picker[LstType] : picker[0] }}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">娱乐场所</view>
				<input style="text-align:left" type="text" name="address" :value="LstAddress" @input="inputAddress" />
			</view>
			<view class="cu-form-group">
				<view class="title">日期选择</view>
				<picker mode="date" :value="LstDate" start="2018-09-01" end="2050-09-01" @change="DateChange">
					<view class="picker">{{ LstDate }}</view>
				</picker>
			</view>
			<view class="cu-form-group flex">
				<view class="title">输赢类别</view>

				<view class="flex-sub  cu-tag " :class="LstWIN == 2 ? '' : 'cu-tag bg-orange'" @click="ChangeType(1)">略有所得</view>
				<view class="flex-sub  cu-tag " :class="LstWIN == 1 ? '' : 'cu-tag bg-orange'" @click="ChangeType(2)">少输当赢</view>
			</view>

			<view class="cu-form-group">
				<view class="title">涉及金额</view>
				<input style="text-align:right" type="number" name="Money" :value="LstMoney" @input="inputMoney" />
			</view>
			<view class="cu-form-group">
				<view class="title">上手姓名</view>
				<input style="text-align:left" type="text" name="Friend1" :value="friend1" @input="inputFriend1" />
			</view>
			<view class="cu-form-group">
				<view class="title">对家姓名</view>
				<input style="text-align:left" type="text" name="Friend2" :value="friend2" @input="inputFriend2" />
			</view>
			<view class="cu-form-group">
				<view class="title">下手姓名</view>
				<input style="text-align:left" type="text" name="Friend3" :value="friend3" @input="inputFriend3" />
			</view>
			<view class="cu-form-group">
				<view class="title">围观人员</view>
				<input style="text-align:left" type="text" name="Friend4" :value="friend4" @input="inputFriend4" />
			</view>
			<view class="cu-form-group justify-end">
				<view class="action ">
					<button class="cu-btn line-orange text-orange" @tap="go_back">取消</button>
					<button class="cu-btn bg-orange margin-left" @tap="go_save_list">保存</button>
				</view>
			</view>
			<!-- </form>	 -->
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			picker: this.$GambleList,
			LstType:0,
			LstAddress:'',
			LstDate:'',
			LstWIN :1,
			LstMoney:0,
			index: 0,
			TmpList: {},
			friend1: '',
			friend2: '',
			friend3: '',
			friend4: '',
			friends: '',
			address:'',
			strtemp:''

		};
	},
	onLoad(e) {
		console.log('参数'+ e.pid)
		this.index=e.pid
		this.LstType=this.$WinList[this.index].LstType
		this.LstAddress=this.$WinList[this.index].LstAddress
		this.LstDate=this.$WinList[this.index].LstDate
		this.LstWIN =this.$WinList[this.index].LstWIN
		this.LstMoney =this.$WinList[this.index].LstMoney
		this.strtemp = this.$WinList[this.index].LstFriends

		let tmp  =this.strtemp.split("-");
		this.friend1 = tmp[0]
		this.friend2 = tmp[1]
		this.friend3 = tmp[2]
		this.friend4 = tmp[3]
	},
	methods: {
		PickerChange(e) {
			this.$WinList[this.index].LstType= e.detail.value;

		},
		DateChange(e) {
			this.$WinList[this.index].LstDate = e.detail.value;
		//console.log('date改变==>>'+this.date )
		},
		ChangeType(e) {
			///console.log('首页==>>改变输赢类别==========');
			this.$WinList[this.index].LstWIN = e;

		},
		inputFriend1(e) {
			this.friend1 = e.detail.value;

		},
		inputAddress(e) {
			this.$WinList[this.index].LstAddress= e.detail.value;

		},
		inputFriend2(e) {
			this.friend2 = e.detail.value;
		},
		inputFriend3(e) {
			this.friend3 = e.detail.value;
		},
		inputFriend4(e) {
			this.friend4 = e.detail.value;
		},
		inputMoney(e) {
			//
			this.$WinList[this.index].LstMoney = e.detail.value;

		},
		go_save_list(e) {


			//this.address = (this.address == null || this.address == undefined || this.address == '') ?"未填写":this.address
			this.friend1 = (this.friend1 == null || this.friend1 == undefined || this.friend1 == '') ?"未知":this.friend1
			this.friend2 =(this.friend2 == null || this.friend2 == undefined || this.friend2 == '')?"未知":this.friend2
			this.friend3 =(this.friend3 == null || this.friend3 == undefined || this.friend3 == '')?"未知":this.friend3
			this.friend4 =(this.friend4 == null || this.friend4 == undefined || this.friend4 == '')?" ":this.friend4

			this.friends = this.friend1 + "-" + this.friend2 + "-" + this.friend3 + "-" + this.friend4

			this.$WinList[this.index].LstFriends = this.friends

			try {
				uni.setStorageSync('keyWinList', this.$WinList);
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
				console.log(e);
				uni.showToast({
					title: '保存数据失败！',
					icon: 'success',
					duration: 2000
				});
			}
		},
		go_back(e) {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style>
.cu-form-group .title {
	min-width: calc(4em + 15px);
}
</style>
