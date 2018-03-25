<template>
  <nav id="navbar-top" class="navbar">
    <div class="container">
      <ul class="nav" id="position">
        <li class="dropdown" @mouseenter="active=true" @mouseleave="active=false" :class="{open: active}">
          <div class="item">
            <i class="iconfont">&#xe6fa;</i>
            <span>{{ currentCity }}</span>
          </div>
          <ul class="dropdown-menu">
            <div 
            class="item" v-for="(city, cityIndex) in cities" 
            :key="cityIndex"
            @click.prevent="currentCity = city">
            <a href="">{{ city }}</a>
            </div>
          </ul>
        </li>
      </ul>
      <ul class="nav right">
        <nav-item
        v-for="(item,index) in data"
        :key="index"
        :item="item">

        </nav-item>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavItem from "../components/NavItem.vue";
export default {
  data () {
    return {
      data: null,
      active: false,
      currentCity: '北京',
      cities: ['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'],
    }
  },
  mounted () {
    this.data = [
      {
        class: 'user',
        items: [
          {text: '滚地球，请登录', href: '/', class: 'login'},{text: '免费注册', href: '/'}
        ]
      },

      {items: [{text: '我的订单', href: '/'},]},
      {
        class: 'my-jd',
        items: [{text: '我的京东', href: '/'}],
        children: [
          {items: [
            {text: '待处理订单', href: '/'},
            {text: '返修退换货', href: '/'},
            {text: '降价商品', href: '/'},
            {text: '消息', href: '/'},
            {text: '我的问答', href: '/'},
            {text: '我的关注', href: '/'},
          ]},
          {items: [
            {text: '我的京豆', href: '/'},
            {text: '我的白条', href: '/'},
            {text: '我的优惠券', href: '/'},
            {text: '我的理财', href: '/'},
          ]}
        ]
      },
      {items: [{text: '京东会员', href: '/'},]},
      {items: [{text: '企业采购', href: '/'},]},
      {
        class: 'service',
        items: [{text: '客户服务'}],
        children: [
          {items: [
            {text: '客户', class: 'header'},
            {text: '帮助中心', href: '/'},
            {text: '售后服务', href: '/'},
            {text: '在线客服', href: '/'},
            {text: '意见建议', href: '/'},
            {text: '电话客服', href: '/'},
            {text: '客服邮箱', href: '/'},
            {text: '金融咨询', href: '/'},
            {text: '售全球客服', href: '/'},
          ]},
        
          {items: [
            {text: '商户', class: 'header'},
            {text: '合作招商', href: '/'},
            {text: '学习中心', href: '/'},
            {text: '商家后台', href: '/'},
            {text: '京麦工作台', href: '/'},
            {text: '商家帮助', href: '/'},
            {text: '规则平台', href: '/'},]}
        ]
      },
      {
        class: 'jd-navs',
        items: [{text: '网站导航'}],
        children: [
          {
            items: [
              {text: '特色主题', class: 'header'},
              {text: '京东试用', href: '/'},
              {text: '京东金融', href: '/'},
              {text: '全球售', href: '/'},
              {text: '国际站', href: '/'},
              {text: '京东会员', href: '/'},
              {text: '京东预售', href: '/'},
              {text: '买什么', href: '/'},
              {text: '俄语站', href: '/'},
              {text: '装机大师', href: '/'},
              {text: '0元评测', href: '/'},
              {text: '定期送', href: '/'},
              {text: '港澳售', href: '/'},
              {text: '优惠券', href: '/'},
              {text: '秒杀', href: '/'},
              {text: '闪购', href: '/'},
              {text: '印尼站', href: '/'},
              {text: '京东金融科技', href: '/'},
              {text: 'In货推荐', href: '/'},
              {text: '陪伴计划', href: '/'},
              {text: '出海招商', href: '/'},
            ]
          },
          {
            items: [
              {text: '行业频道', class: 'header'},
              {text: '手机', href: '/'},
              {text: '智能数码', href: '/'},
              {text: '玩3C', href: '/'},
              {text: '电脑办公', href: '/'},
              {text: '家用电器', href: '/'},
              {text: '京东智能', href: '/'},
              {text: '服装城', href: '/'},
              {text: '京东生鲜', href: '/'},
              {text: '家装城', href: '/'},
              {text: '母婴食品', href: '/'},
              {text: '运动户外', href: '/'},
              {text: '农资频道', href: '/'},
              {text: '整车', href: '/'},
              {text: '图书', href: '/'},
            ]
          },
          {
            items: [
              {text: '生活服务', class: 'header'},
              {text: '京东众筹', href: '/'},
              {text: '白条', href: '/'},
              {text: '京东金融App', href: '/'},
              {text: '京东小金库', href: '/'},
              {text: '理财', href: '/'},
              {text: '智能家电', href: '/'},
              {text: '话费', href: '/'},
              {text: '水电煤', href: '/'},
              {text: '彩票', href: '/'},
              {text: '旅行', href: '/'},
              {text: '机票酒店', href: '/'},
              {text: '电影票', href: '/'},
              {text: '京东到家', href: '/'},
              {text: '京东众测', href: '/'},
              {text: '游戏', href: '/'},
            ]
          },
          {
            items: [
              {text: '更多精选',class: 'header'},
              {text: '合作招商',href: '/'},
              {text: '京东通信',href: '/'},
              {text: '京东E卡',href: '/'},
              {text: '企业采购',href: '/'},
              {text: '服务市场',href: '/'},
              {text: '办公生活馆',href: '/'},
              {text: '乡村招募',href: '/'},
              {text: '校园加盟',href: '/'},
              {text: '京友邦',href: '/'},
              {text: '京东社区',href: '/'},
              {text: '智能社区',href: '/'},
              {text: '游戏社区',href: '/'},
              {text: '知识产权维权',href: '/'},
            ]
          },
        ]
      },
      {
        items: [{text: '手机京东'}]
      },
    ];
  },
  components: { NavItem }
}
</script>

<style lang="scss">
  @import '../assets/scss/mixins';

  $navbar-height: 30px;
  $navbar-bg: #e3e4e5;
  $navbar-color: #999;
  $navbar-border-color: #ddd;
  $navbar-link-color: $navbar-color;
  $navbar-link-hover-color: #e33333;
  $navbar-link-active-color: #f01215;

  .nav {
    display: block;
    list-style: none;
    margin: 0;
    padding-left: 0;
    &>li {
      display: block;
    }
  }
  .navbar {
    height: 30px;
    line-height: 30px;
    background: $navbar-bg;
    color: $navbar-color;
    .user {
        .login {
          color: $navbar-link-active-color;
          margin-right: 5px;
        }
    }
    .nav {
      float: left;
      @include clearfix;
      &>li {
        float: left;
        
        position: relative;
        color: $navbar-color;
        margin: 0 5px;   
        &>.item {
          border: 1px solid transparent;
          border-bottom: 0;
          padding-left: 7px;
          padding-right: 7px;
        }
        a {
          color: $navbar-link-color;
          &:hover, &:active {
            color: $navbar-link-hover-color;
          }
        }
      }
      &>li + li:before {
        display: block;
        position: absolute;
        top: 10px;
        left: -5px;
        content: ' ';
        width: 1px;
        height: 10px;
        background: #999;
      }
      .dropdown-menu {
        top: $navbar-height;
      }
    }
  }
  .dropdown-menu {
    position: absolute;
    display: none;
    list-style: none;
    margin: 0;
    padding: 10px 0;
    min-width: 180px;
    line-height: 24px;
    .part {
      padding-left: 15px;
    }
    .part + .part {
      margin-top: 10px;
    }
    a {
      display: inline-block;
      width: 80px;
    }
    .header {
      display: block;
      font-weight: 700;
      // padding-left: 15px;
    }
  }
  .open {
    &>.item {
      background: #fff;
    }
    &>.dropdown-menu {
      display: block;
      background: #fff;
    }
  }
  .jd-navs {
    .dropdown-menu {
      width: 990px;
      right: -67px;
      a {
        padding: 0;
        width: 100px;
      }
      .part {
        float: left;
        width: 320px;
      }
      .part + .part {
        width: 221px;
        margin-top: 0;
      }
    }
  }
  #position {
    .iconfont {
      color: $navbar-link-hover-color;
    }
    .dropdown {
      margin-left: 200px;
    }
    .dropdown-menu {
      padding: 10px;
      width: 322px;
      .item {
        display: block;
        float: left;
        width: 60px;
      }
      
      a {
        float: left;
        padding-left: 8px;
        padding-right: 8px;
        width: auto;
        &:hover,&.active {
          background: $navbar-link-active-color;
          color: #fff;
        }
      }
    }
  }
</style>
