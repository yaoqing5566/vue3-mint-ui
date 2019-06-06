<template>
    <div class="activity">
        <input style="border: 1px solid gray; line-height: 50px" type="text" v-model="valData"/>
        <mt-tab-container>
            <mt-tab-container-item>
                <mt-cell v-for="item in arrs" v-on:click.native="changeClick(item)" :title="'content ' + item" />
            </mt-tab-container-item>
        </mt-tab-container>


    </div>
</template>

<style lang="scss">


</style>

<script type="text/babel">
    import { Toast,Indicator} from 'mint-ui';
    export default {
        data() {
            return {
                valData:'',
                arrs:[1,2,3,4,5,6,7,8],
                unWatch:null,
                isEdit:false
            };
        },
        computed:{

        },

        methods: {
            watchFun(){
                this.unWatch = this.$watch('valData', (newVal, oldVal) => {
                    console.log(newVal, oldVal)
                    if(newVal!=oldVal){
                        this.isEdit=true;
                    }else {
                        this.isEdit=false;
                    }
                })
            },
            changeClick(val){
                this.valData=val;
                if(this.isEdit){
                    alert('上一次值改变了')
                }else {
                    alert('上一次值没改变')
                }
                this.isEdit=false;
                this.unWatch();
                this.watchFun();
            }
        },
        watch: {

        },
        created() {
         this.valData=this.arrs[0];
         this.watchFun()

        },



    };
</script>
