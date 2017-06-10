<template lang="html">
  <div class="fm">
    <header>
      <i class="fa fa-angle-left back"></i>
      <p>听单详情</p>
      <i class="fa fa-share-square-o share"></i>
    </header>
    <div class="title">
      <p>《斗破苍穹》20亿网络点击神作</p>
    </div>
    <div class="intro">
      <p class="tip">简介</p>
      <p class="content">萧炎，主人公，萧家历史上空前绝后的斗气修炼天才。4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在12岁那年，他却“丧失”了修炼能力，只拥有三段斗之气。整整三年时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，进一步提升自己的修为……在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）。他面向的世界更加宽广了。
三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！
总算是结束了，末了留了一个另外的悬念，萧炎的血是热的，安静的生活，并不适合他的骨子，留下的悬念，就当为了让他有着征战的理由。</p>
    </div>
    <div class="list">
      <p>听单列表</p>
      <div class="details" v-for="item in 20">
        <div class="play">
          <i class="fa fa-play"></i>
          <img src="http://fdfs.xmcdn.com/group16/M06/82/33/wKgDbFdNSvKCLUEXAAGexs7WtMY905.jpg" alt="">
        </div>
        <p>斗破苍穹片头</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/FMDetails/index.scss';
</style>
