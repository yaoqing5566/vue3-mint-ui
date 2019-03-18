<template>
    <div class="activity" style="overflow-scrolling: touch; -webkit-overflow-scrolling: touch">
        <div class="top-nav">
            <a :class="{'active':classType==1}" @click="changeClassType(1)">小班</a>
            <a :class="{'active':classType==2}" @click="changeClassType(2)">中班</a>
            <a :class="{'active':classType==3}" @click="changeClassType(3)">大班</a>
        </div>
        <div class="page-infinite-wrapper" ref="wrapper" :style="{'height':$store.state.windowHeight-52+'px'}" style="overflow: scroll">
            <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore">
                <ul class="list-box">
                    <li v-for="(item,index) in list" @click="goDetail(item)">
                        <div class="name">{{index+1}},{{item.news_title}}
                            <span class="">new</span>
                            <!--<span class="gray">已报名</span>-->
                        </div>
                        <div class="time">活动时间<span>周一 10:15 - 周二11:00</span></div>
                        <div class="subtext">巧虎内容丰富，形式互动，有利于引发孩子的兴趣，激发无限潜能，培养良好的习惯，是陪伴孩子成长的好伙伴。</div>
                        <div class="img"></div>
                        <div class="line"></div>
                    </li>
                </ul>

                <!--<div slot="top" class="mint-loadmore-top">-->
                    <!--<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">松开刷新</span>-->
                    <!--<span v-show="topStatus === 'loading'">-->
                    <!--正在刷新-->
                    <!--</span>-->
                <!--</div>-->
            </mt-loadmore>
        </div>
    </div>
</template>

<style lang="scss">
    .activity{
        .page-infinite-wrapper{ }
        position: relative; height: 100%; font-size: 14px;
        .top-nav{
            line-height: 50px; z-index: 999; text-align: center;font-size: 14px;color: rgba(0,0,0,0.54);  background: #fff; border-bottom: 1px solid rgba(0,0,0,0.20);
            a{
                display: inline-block; line-height: 50px; margin: 0 10px; width: 20%; text-align: center;
                &.active{
                    color: #5D9CE5; border-bottom:1px solid #2196F3;
                }
            }
        }
        .list-box{
            position: relative; height: 100%;
            li{
                text-align: left; padding: 20px; border-bottom: 4px solid #F6F6F6; position: relative;
                &::after{
                    content: ''; position: absolute; height: 1px; width: 100%; left: 0px; bottom: 0px; background: rgba(0,0,0,0.12);
                }
                &:last-child{
                    border: none;
                    &::after{ display: none}
                }
                .name{
                    font-size: 16px;font-weight: bold; position: relative;
                    span{
                        background: #FB6364;
                        border-radius: 12px; width: 59px; line-height: 22px; color: #fff; text-align: center; position: absolute; right: 0px; padding: 0; height: 23px;
                        &.gray{
                            background: #C2C2C2; font-size: 12px;
                        }
                    }
                }
                .time{
                    padding: 10px 0 0 0;font-size: 16px;font-weight: bold;
                    span{ font-size: 14px;color: #4A4A4A; font-weight: normal; display: inline-block; padding-left: 6px}
                }
                .subtext{
                    font-size: 14px;color: #4A4A4A; padding: 3px 0 0 0;display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2; max-height: 41px; overflow: hidden;
                }
                .img{
                    height: 0px; padding-bottom: 50.714%; margin-top: 6px;  background:#e6e6e6 no-repeat center 0px; background-size: cover;
                }

            }
        }
    }

</style>

<script type="text/babel">
    import { Toast} from 'mint-ui';
    export default {
        data() {
            return {
                list: [],
                topStatus: '',
                bottomStatus:'',
                classType:1,
                pages:{
                    index:1,
                    size:5
                }
            };
        },
        computed:{

        },
        methods: {
            goDetail(){
                this.$router.push({path:'/activity/detail'})
            },
            refreshTop(){
                let _this=this;
                $_get("/Views/web/getNew.aspx?pageIndex=1&pageSize="+_this.pages.size+"&type=1&name=").then(function (res) {
                    console.log(res)
                    if(res.code==1){
                        _this.list.unshift({news_title:"刷新数据"})
                        _this.$refs.loadmore.onTopLoaded();
                    }else{
                        Toast(res.msg);
                    }
                })
            },
            getData(){
                let _this=this;
                $_get("/Views/web/getNew.aspx?pageIndex="+_this.pages.index+"&pageSize="+_this.pages.size+"&type=1&name=").then(function (res) {
                    console.log(res)
                    if(res.code==1){
                        _this.list=_this.list.concat(res.data.list);
                        _this.$refs.loadmore.onTopLoaded();
                    }else{
                        Toast(res.msg);
                    }
                })
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadTop() {
                setTimeout(() => {
                    this.refreshTop();
                    this.topStatus='pull';
                }, 1500);
            },

            loadBottom(){
                setTimeout(() => {
                    this.getData();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            changeClassType(type){
                this.list=[];

            }
        },

        created() {
            this.getData()


        },

        mounted() {

        }
    };
</script>
