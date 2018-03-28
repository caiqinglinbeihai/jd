<template>
    <div id="index">
        <div class="fixed top search">
            <div class="bg" :style="{opacity: opacity}"></div>
            <div class="form-search">
                <div class="form-group">
                    <span class="logo">JD</span>
                    <i class="iconfont">&#xe613;</i>
                    <input type="search" class="form-control" placeholder="鼠标垫" maxlength="20">
                </div>
            </div>
            <a class="btn btn-login">登录</a>
        </div>

        <div class="main relative">
            <div class="bg"></div>
            <div class="carousel">

            </div>
            <div class="category">
                <a href="" class="item supermarket">
                    <i class="iconfont">&#xe621;</i>
                    <span class="text">超市</span>
                </a>
                <a href="" class="item gobal">
                    <i class="iconfont">&#xe663;</i>
                    <span class="text">全球购</span>
                </a>
                <a href="" class="item clothes">
                    <i class="iconfont">&#xe614;</i>
                    <span class="text">京东服饰</span>
                </a>
                <a href="" class="item fresh">
                    <i class="iconfont">&#xe601;</i>
                    <span class="text">京东生鲜</span>
                </a>
                <a href="" class="item rank">
                    <i class="iconfont">&#xe602;</i>
                    <span class="text">排行榜</span>
                </a>
                <a href="" class="item bill">
                    <i class="iconfont">&#xe68b;</i>
                    <span class="text">充值缴费</span>
                </a>
                <a href="" class="item bean">
                    <i class="iconfont">&#xe624;</i>
                    <span class="text">领京豆</span>
                </a>
                <a href="" class="item promote">
                    <i class="iconfont">&#xe6b0;</i>
                    <span class="text">领券</span>
                </a>
                <a href="" class="item money">
                    <i class="iconfont">&#xe63f;</i>
                    <span class="text">赚钱</span>
                </a>
                <a href="" class="item logistics">
                    <i class="iconfont">&#xe606;</i>
                    <span class="text">物流查询</span>
                </a>
            </div>
            <div class="seckill">
                <div class="heading">
                    <div class="left">
                        <span class="title">京东秒杀</span>
                        <span class="section">12点场</span>
                        <div class="countdown">
                            <span class="h">01</span>
                            <span class="separator">:</span>
                            <span class="m">55</span>
                            <span class="separator">:</span>
                            <span class="s">22</span>
                        </div>
                    </div>
                    <div class="right">
                        <span>京选轮番秒</span>
                        <i class="iconfont"></i>
                    </div>
                </div>

            </div>
        </div>

        <div class="fixed bottom footer-bar">
            <a href="" class="item home">
                <i class="iconfont">&#xe61e;</i>
                <span class="text">首页</span>
            </a>
            <a href="" class="item">
                <i class="iconfont">&#xe609;</i>
                <span class="text">分类</span>
            </a>
            <a href="" class="item">
                <i class="iconfont">&#xe669;</i>
                <span class="text">发现</span>
            </a>
            <a href="" class="item">
                <i class="iconfont">&#xe62c;</i>
                <span class="text">购物车</span>
            </a>
            <a href="" class="item">
                <i class="iconfont">&#xe758;</i>
                <span class="text">我的</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                opacity: 0,
            }
        },
        mounted () {
            const self = this;
            window.addEventListener('scroll', function (e) {
                let y = window.scrollY > 400 ? 400 : window.scrollY;

                self.opacity = y / 400 * 0.9;
            })
        }
    }
</script>