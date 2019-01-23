<template>
    <div class="invite-parent-box" :style="{'min-height':$store.state.windowHeight+'px'}">
        <div class="invite-item">
            <div class="invite-item-box" v-if="page==1">
                <div class="ico">
                    <img src="images/invite/1.png" width="50"/>
                    <img :src="'images/invite/1.png'" width="50"/>
                    <img src="../../../public/images/invite/1.png" width="50"/>
                    <img :src="STATIC_IMAGES.invite.mon" width="50"/>
                    <div class="bg-img" style="display: inline-block"></div>
                    <div style="display: inline-block; width: 50px; height: 50px; background-size: 100% 100%; background-image: url('./images/invite/1.png')"></div>
                    <div style="display: inline-block; width: 50px; height: 50px; background-size: 100% 100%;" :style="{'background-image':'url('+STATIC_IMAGES.invite.mon+')'}"></div>
                </div>
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
                    您也可以打开孩子通app,选择邀请码进入并输入邀请码<span>123456</span><br />
                    <span style="display: inline-block; padding-top: 5px; font-size: 12px">*点击可复制邀请码</span>
                </div>
            </div>

            <div class="invite-item-box page2" v-if="page==2">
                <div class="tel">
                    <input type="password" placeholder="请输入当前密码"/>
                    <img src="image/icon_eyes 2@2x.png"/>
                </div>
                <div class="text" style="padding: 10px 0 0 0; margin: 0px ">
                    您已成为王凯凯的家人，现在请设置密码，登录孩子app时使用
                </div>
                <div class="but" style="margin-top: 60px">确定</div>
            </div>

            <div class="invite-item-box page3" v-if="page==3">
                <div class="ico"><img src="../../../public/images/invite/1.png" width="60"/></div>
                <div class="name">王凯凯的爸爸</div>
                <div class="explain">您已接受王凯凯爸爸的邀请，成为王凯凯的家人，快下载app一起关照孩子的成长吧！</div>
            </div>

        </div>
        <div class="down-app">下载孩子通app</div>
    </div>
</template>

<script>
    import { Popup,MessageBox  } from 'mint-ui';
    import { STATIC_IMAGES } from '../../utils/const_params.js'
    export default {
        name: 'home',
        components: {
            Popup
        },
        data () {
            return {
                STATIC_IMAGES,
                sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
                auth_time: 0, /*倒计时 计数器*/
                page:1,
                inviteCode:'1asasas111111',
                info:{
                    sender:'',
                    inviteCode:''
                }
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
            MessageBox.confirm('Are you sure?',11111).then(action => {
                alert(111)
            }).catch(cancel=>{
                alert(2222)
            });
            let that=this;
            this.info.sender=this.$route.query.sender;
            this.info.inviteCode=this.$route.query.inviteCode;
            $_get('/2/org/family/invite/h5/page?sender='+that.info.sender+'&inviteCode='+that.info.inviteCode).then(function (response) {
                that.dataTable=response.data
            })
        }
    }
</script>
<style lang="scss">
    .invite-parent-box{
         position: relative; background: rgba(33,150,243,0.5); display: flex; align-items: center; justify-content: center;
    }
    .bg-img{ width: 50px; height: 50px;background: url("../../../public/images/invite/1.png") no-repeat 5px center; background-size: 100% 100%; }
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

    .invite-item-box.page2{
        padding: 80px 10px 60px 10px;
    }
    .invite-item .tel{
        margin: 10px 0 10px 0; background: url("../../assets/image/icon_lock2@3x.png") no-repeat 5px center; background-size:20px auto ;
        img{
            position: absolute; width: 20px; right: 5px; top: 14px;
        }
    }
    .invite-item .page3 .explain{
        text-align: left; margin: 15px 33px 40px 33px;
    }
</style>