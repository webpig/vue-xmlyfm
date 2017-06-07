<template lang="html">
  <div class="hot">
    <div class="banner">
      <mt-swipe :auto="8000" :speed="1000">
        <mt-swipe-item v-for="data in banner" key="data.id">
          <img :src="data.src">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="scroll">
      <ul>
        <li v-for="item in scroll" key="item">
          <i :class="item.className"></i>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="fmlist">
      <header class="header">
        <div class="primary">猜你喜欢</div>
        <div class="more">
          <p>更多<i class="fa fa-angle-right"></i></p>
        </div>
      </header>
      <div class="content">
        <ul>
          <li v-for="item in fmlist" key="item.id">
            <!-- <div class="img">
            </div> -->
            <img :src="item.src" alt="">
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="footer">
        <p>换一批<i class="fa fa-refresh"></i></p>
      </div>
      <header class="header">
        <div class="primary">精品</div>
        <div class="more">
          <p>更多<i class="fa fa-angle-right"></i></p>
        </div>
      </header>
      <div class="content">
        <ul>
          <li v-for="item in fmlist2" key="item.id">
            <!-- <div class="img">
            </div> -->
            <img :src="item.src" alt="">
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="footer">
        <p>换一批<i class="fa fa-refresh"></i></p>
      </div>
      <div class="sortfm">
        <header class="header">
          <div class="primary">有声小说</div>
          <div class="more">
            <p>更多<i class="fa fa-angle-right"></i></p>
          </div>
        </header>
        <div class="content-y">
          <ul>
            <li v-for="item in sortfm" key="item.id">
              <img :src="item.src" alt="">
              <div class="primary">
                <p class="title">{{item.title}}</p>
                <p class="intro">{{item.intro}}</p>
                <p class="num">
                  <span>
                    <i></i>
                    {{item.playNums}}
                  </span>
                  <span>
                    <i></i>
                    {{item.totalStore}}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer">
          <p>换一批<i class="fa fa-refresh"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: [
        {'id': 1, 'src': 'http://fdfs.xmcdn.com/group27/M04/91/97/wKgJR1ju4kmTxwAwABKqFbQdhh0400.jpg'},
        {'id': 2, 'src': 'http://fdfs.xmcdn.com/group26/M03/96/35/wKgJWFju43_A5ODwABKCY6eKp3Y199.jpg'},
        {'id': 3, 'src': 'http://fdfs.xmcdn.com/group26/M04/72/B1/wKgJRlkAbeWznfdyAA5e0f386Qg111.png'},
        {'id': 4, 'src': 'http://fdfs.xmcdn.com/group26/M02/40/40/wKgJRlkP0OTRB6m0ABHugst5h34766.jpg'},
        {'id': 5, 'src': 'http://fdfs.xmcdn.com/group26/M05/B3/9C/wKgJWFjYtOKToDz9ABVrGAfw92o369.jpg'},
        {'id': 6, 'src': 'http://fdfs.xmcdn.com/group27/M08/3D/2F/wKgJR1kP0FXDsC1WABHPXsUdg1g622.jpg'}
      ],
      scroll: [
        {
          className: 'fa fa-trophy',
          text: '必听榜'
        },
        {
          className: 'fa fa-star',
          text: '精品'
        },
        {
          className: 'fa fa-book',
          text: '大咖书房'
        },
        {
          className: 'fa fa-map-marker',
          text: '听南昌'
        },
        {
          className: 'fa fa-music',
          text: '听单'
        },
        {
          className: 'fa fa-user',
          text: '主播榜'
        }
      ],
      fmlist: [
        {'id': 1, 'src': 'http://fdfs.xmcdn.com/group23/M01/15/2B/wKgJL1gYYjzxW7fQAAWaMAvliP8961.jpg', 'text': '摸金天师（紫荆）'},
        {'id': 2, 'src': 'http://fdfs.xmcdn.com/group26/M06/6E/7B/wKgJWFjrCsbRSB78AAJvW7G-1bo491.jpg', 'text': '《凶宅笔录》风水方术相宅术，捉鬼驱邪邪破凶...'},
        {'id': 3, 'src': 'http://fdfs.xmcdn.com/group26/M07/97/56/wKgJRlkDC3Tzw-wkAAKB9PTaP3U935.jpg', 'text': '腾讯传'},
        {'id': 4, 'src': 'http://fdfs.xmcdn.com/group23/M09/E2/4B/wKgJNFiFRh_C5ltxAACfwepPMFM021.jpg', 'text': '神医嫡女'},
        {'id': 5, 'src': 'http://fdfs.xmcdn.com/group7/M03/64/C6/wKgDX1cxh4vQtrYiAAmBcWMpkhM762.jpg', 'text': '无敌天下'},
        {'id': 6, 'src': 'http://fdfs.xmcdn.com/group13/M01/8B/3D/wKgDXVdXITuCCQTnAACq3dFceHY834.jpg', 'text': '修仙狂徒'}
      ],
      fmlist2: [
        {'id': 1, 'src': 'http://fdfs.xmcdn.com/group23/M01/15/2B/wKgJL1gYYjzxW7fQAAWaMAvliP8961.jpg', 'text': '摸金天师（紫荆）'},
        {'id': 2, 'src': 'http://fdfs.xmcdn.com/group26/M06/6E/7B/wKgJWFjrCsbRSB78AAJvW7G-1bo491.jpg', 'text': '《凶宅笔录》风水方术相宅术，捉鬼驱邪邪破凶...'},
        {'id': 3, 'src': 'http://fdfs.xmcdn.com/group20/M09/C5/3F/wKgJLFfD1VGCZ8xxAAHPfIgFCVg830.jpg', 'text': '校花的贴身高手 （下）'}
      ],
      sortfm: [
        {'id': 1, 'src': 'http://fdfs.xmcdn.com/group16/M00/95/B6/wKgDbFY8HO3R9lV0AAPk5Bf2lb4145.jpg', 'title': '超品相师', 'intro': '吾为超品相师，相人，相地，相红颜', 'playNums': '3.2亿', 'totalStore': '1147集'},
        {'id': 2, 'src': 'http://fdfs.xmcdn.com/group23/M01/15/2B/wKgJL1gYYjzxW7fQAAWaMAvliP8961.jpg', 'title': '摸金天师（紫荆）', 'intro': '盗墓小说又一巅峰之作', 'playNums': '8.5亿', 'totalStore': '1150集'},
        {'id': 3, 'src': 'http://fdfs.xmcdn.com/group20/M09/C5/3F/wKgJLFfD1VGCZ8xxAAHPfIgFCVg830.jpg', 'title': '校花的贴身高手（下）'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/Index/hot/hot.scss';
</style>
