<template>
	<view class="">
		<v-sign :width="winWidth + 'px'" :height="winHeight + 'px'" @init="onSignInit"></v-sign>
		<button @click="clear">清空</button>
		<button @click="saveTempFilePath">保存图片</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				winWidth: 0,
				winHeight: 0
			}
		},
		created() {
			// 宽度设为可使用窗口宽度
			const {
				windowWidth
			} = uni.getSystemInfoSync()
			this.winWidth = windowWidth
			this.winHeight = windowWidth
		},
		methods: {
			onSignInit(signCtx) {
				this.signCtx = signCtx
			},
			// 清空
			clear() {
				console.log(this.signCtx.getLineData())
				this.signCtx.clear()
			},
			async saveTempFilePath() {
				const res = await this.signCtx.canvasToTempFilePath()
				console.log(res)
			},
		}
	}
</script>
