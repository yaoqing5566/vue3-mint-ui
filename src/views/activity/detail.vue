<template>
    <div class="activity-detail">
        <div class="item1">
            <div class="a1">
                <div class="img"></div>
                <p class="name">儿童电影</p>
                <div class="item-sign">
                    <p>活动预约时间</p>
                    <div>周五15:10-15:40</div>
                </div>
                <div class="item-sign">
                    <p>剩余名额 <span class="count">25名</span></p>

                </div>
            </div>
            <div class="a2">
                <div class="sub-name">巧虎内容丰富，形式互动，有利于引发孩子的兴趣，激发无限潜能，培养良好的习惯，是陪伴孩子成长的好伙伴。
                </div>
                <p>活动地点<span>四楼大活动室</span></p>
                <p>活动时间<span>周五15:00-17:00</span></p>
                <p>指导教师<span>陆老师</span></p>
            </div>
        </div>
        <div class="item2">
            <div class="name">活动介绍</div>
            <div class="introduce">巧虎内容丰富，形式互动，有利于引发孩子的兴趣，激发无限潜能，培养良好的习惯，是陪伴孩子成长的好伙伴。</div>
        </div>

        <div class="item2" style="border-bottom: none">
            <div class="name">活动材料</div>
            <div class="introduce">巧虎内容丰富，形式互动，有利于引发孩子的兴趣，激发无限潜能，培养良好的习惯，是陪伴孩子成长的好伙伴。</div>
        </div>
        <div class="sign-fixed"><span>我要报名</span></div>
    </div>

</template>

<script>
    import { Toast,InfiniteScroll,Spinner,Indicator} from 'mint-ui';
    import { STATIC_IMAGES } from '../../utils/const_params.js'
    export default {
        name: 'detail',
        components: {

        },
        data () {
            return {

            }
        },
        filters:{
            formatDate(date,str){
                return moment(date).format(str);
            },
        },
        computed:{

        },
        methods:{

        },

        created(){


        }
    }
</script>
<style lang="scss">
    .activity-detail{
        padding: 20px 20px 60px 20px; text-align: left;font-size: 14px;color: #4A4A4A;
        .item1{
            border-bottom:1px solid #D1D1D1; padding-bottom: 5px;
            .a1{min-height: 125px; overflow: hidden }
            .img{background: #e6e6e6 no-repeat center 0px; background-size: cover; width: 160px; height: 125px; float: left; margin: 0 15px 8px 0}
            p{
                color: rgba(0,0,0,0.87); font-size: 14px; font-weight: bold; margin-bottom: 13px;
                &.name{font-size: 16px}
            }
            .item-sign{
                margin-bottom:7px ;
                p{
                    margin-bottom: 0px;
                    .count{ color: #4A4A4A; font-weight: normal }
                }
            }
            .a2{
                padding-top: 10px;
                p{
                    text-align: left; margin-bottom: 8px;
                    span{
                        font-size: 14px;
                        color: #4A4A4A; font-weight: normal; margin-left: 10px;
                    }
                }
                .sub-name{ padding-bottom: 10px}
            }
        }
        .item2{
            padding: 15px 0;border-bottom:1px solid #D1D1D1;
            .name{
                font-size: 16px;color: rgba(0,0,0,0.87); font-weight: bold; margin-bottom: 10px; border-left:7px solid #2196F3; padding-left: 10px;
            }
            .introduce{
                color: #4A4A4A;
                img{ max-width: 100%}
            }
        }
        .sign-fixed{
            position: fixed; left: 0px; bottom: 0px; width: 100%;  height: 50px; line-height: 50px;font-size: 16px;color: #FFFFFF; font-weight: bold;background: #2196F3; text-align: center;
            span{
                display: inline-block; background: url($cssImgPath + "/tj.png") no-repeat 0 center; background-size: 21px 21px; padding-left: 30px;
            }
        }
    }

    @media screen and (max-width: 335px) {
        .activity-detail .item1 p.name,.activity-detail .item2 .name{ font-size: 14px}
        .activity-detail .item1 p{ font-size: 14px; margin-bottom: 10px}
        .activity-detail,.activity-detail  p span,.activity-detail .item1 .a2 p span{font-size: 12px}
    }

</style>