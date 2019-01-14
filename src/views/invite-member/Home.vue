<template>
    <div class="invite-parent-box" :style="{'min-height':$store.state.windowHeight+'px'}">
        <div class="invite-item">
            <div class="invite-item-box">
                <div class="ico"><img src="../../../public/images/invite/1.png" width="50"/></div>
                <div class="name">王凯凯的爸爸</div>
                <div class="explain">邀请您一起关注王凯凯的成长</div>
                <div class="tel">
                    <input type="tel" placeholder="请输入手机号"/>
                </div>
                <div class="tel code">
                    <input type="tel" placeholder="请输入验证码" maxlength="6"/>
                    <a v-show="sendAuthCode" @click="getAuthCode()">获取验证码</a>
                    <span v-show="!sendAuthCode" class="auth_text"> <font class="auth_text_blue">{{auth_time}} </font> 秒之重新发送验证码</span>
                </div>
                <div class="but">接受邀请</div>
                <div class="text"  v-clipboard:copy="inviteCode" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    您也可以打开孩子通app,选择邀请码进入并输入<br />
                    邀请码<span>123456</span><br />
                    <span style="display: inline-block; padding-top: 5px">*点击可复制邀请码</span>
                </div>
            </div>
        </div>
        <div class="down-app">下载孩子通app</div>
    </div>
</template>

<script>
    import { Popup } from 'mint-ui';
    export default {
        name: 'home',
        components: {
            Popup
        },
        data () {
            return {
                sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
                auth_time: 0, /*倒计时 计数器*/
                popupVisible:true,
                inviteCode:'1asasas111111'
            }
        },
        methods:{
            getAuthCode:function () {
                this.sendAuthCode = false;
                this.auth_time = 60;
                let auth_timetimer = setInterval(() => {
                    this.auth_time--;
                    if (this.auth_time <= 0) {
                        this.sendAuthCode = true;
                        clearInterval(auth_timetimer);
                    }
                }, 1000);
            },
            // 复制成功
            onCopy(e){
                console.log(e);
            },
            // 复制失败
            onError(e){
                alert("失败");
            },
        },
        created(){
            let that=this;
            // $_get('/Views/admin/readTopNews.aspx?pageIndex=1&pageSize=10&type=0').then(function (response) {
            //     that.dataTable=response.data
            // })
        }
    }
</script>
<style lang="scss">
    .invite-parent-box{
         position: relative; background: rgba(33,150,243,0.5); display: flex; align-items: center; justify-content: center;
    }
    .invite-item{
        width:calc(100% - 40px); padding-bottom: 80px;
        .invite-item-box{
            background: #FFFFFF;
            border-radius: 10px; padding: 10px;}
        .ico{
            padding:23px 0 0 0 ;
        }
        .name{
            font-size: 16px;
            color: rgba(0,0,0,0.87); text-align: center; padding: 15px 0 10px 0;
        }
        .explain{
            font-size: 12px;
            color: rgba(0,0,0,0.54);
        }
        .tel{
            border-bottom: 1px solid  rgba(0,0,0,0.12); text-align: left; margin: 20px 0 0 0; line-height: 40px;
            background: url("../../../public/images/invite/icon_phone@3x.png") no-repeat 6px center; background-size:22px auto ; padding-left: 40px; position: relative;
            input{
                border: 1px; width: 100%; line-height: 40px; font-size: 12px;color: rgba(0,0,0,0.54);
            }
            &.code{
                 margin: 10px 0 10px 0; background: url("../../../public/images/invite/icon_code@3x.png") no-repeat 5px center; background-size:22px auto ;
            }
            a{
                font-size: 13px;
                color: #2196F3; position: absolute; right: 5px; top: 2px;
            }
            span{
                font-size: 13px;color: rgba(0,0,0,0.54);position: absolute; right: 5px; top: 2px;
            }
        }
        .but{
            background: #2196F3;
            border-radius: 50px;line-height: 50px; color: #fff; margin: 26px 10px 0 10px;
        }
        .text{
            margin: 26px 16px 0 16px;font-size: 12px;color: rgba(0,0,0,0.38); text-align: left; line-height: 21px;
            span{
                font-size:14px;
                color: #F96467;
            }
        }
    }

    .page2{ height: 100%; width: 100%}
</style>