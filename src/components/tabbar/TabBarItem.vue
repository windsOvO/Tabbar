<template>
    <div class="tab-bar-item" @click="itemClick">
<!--        用v-if二选一-->
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
<!--        动态绑定class-->
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
<!--        不能这样绑定，因为slot是会被替换的，要绑一个div，设置class-->
<!--        <slot :class="{active: isActive}" name="item-text"></slot>-->
<!--        插槽最好都包装一层div再写属性，上面也是v-if-->
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data (){
            return {
                // isActive: true
            }
        },
        computed: { // 会变，而且要动态初始化的量-属性
            isActive (){
              return this.$route.path.indexOf(this.path) !== -1
              // indexOf()方法可返回首次出现的位置
              // 没有-1
              // 包不包含此页面的path
            },
            activeStyle (){ // 动态绑定样式
                return this.isActive ? { color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                // console.log('itemClick')
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        /*业界常用高度-49*/
    }
    /*图片大小控制*/
    .tab-bar-item img{
        width: 24px;
        height: 24px;
    }

    /*.active {*/
    /*    color: red;*/
    /*}*/
    /*动态决定就不能写在style里，还得用js*/
</style>
