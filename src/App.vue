<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
<!--        alt alternative 文本无法显示的text替代-->
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deepPink">
        <img slot="item-icon" src="./assets/img/tabbar/classfication.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/classfication_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deepPink">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img slot="item-icon" src="./assets/img/tabbar/mine.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/mine_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<!--路径名称太长可以配置路径别名，如@（可利用webpack配置）-->

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  /*style中用@import引用*/
@import "./assets/css/base.css";
</style>
