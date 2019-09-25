<template>
    <div class="address">
        <mt-popup v-model="popupVisible" position="bottom" :closeOnClickModal="closeOnClickModal" style="width: 100%">
            <section style="width:100%; height: 100%;">
                <div class="picker-toolbar" style="border-bottom: solid 1px #eaeaea;"><span
                        class="mint-datetime-action mint-datetime-cancel" @click="hidePicker">取消</span> <span
                        class="mint-datetime-action mint-datetime-confirm" @click="saveAddress">确定</span></div>
                <mt-picker :slots="slots" value-key="value" @change="onValuesChange"></mt-picker>
            </section>
        </mt-popup>
    </div>
</template>

<script>
    import Address from './address.js'

    console.log(Address)

    export default {
        props: {
            showAddressPicker: Boolean,
            init: Array
        },
        created() {
            let vm = this
            this.initAddress();

        },
        mounted() {
            let vm = this
            vm.popupVisible = vm.showAddressPicker

        },
        data() {
            return {
                closeOnClickModal: false,
                addressValue:{},
                popupVisible: true,
                selectVal:this.init?this.init:[0,0,0],
                slots: []
            }
        },
        watch: {
            showAddressPicker(old, val) {
                this.popupVisible = !val
            },
            selectVal(val, old) {
                if (old[0] != val[0]) {
                    this.slots[1].values = Address['0_' + val[0]];
                    this.slots[0].defaultIndex = parseInt(val[0])
                    this.slots[2].values = Address['0_' + val[0]+'_0'];
                    this.slots[1].defaultIndex =0
                    this.slots[2].defaultIndex =0
                }
                if (old[1] != val[1]) {
                    this.slots[2].values = Address['0_' + val[0]+'_'+val[1]];
                    this.slots[2].defaultIndex =0;

                }

            }
        },
        methods: {
            initAddress() {//初始化地址组件
                this.slots=[]
                let key="";
                console.log(999,this.selectVal)
                for(let i in this.selectVal){
                    let kk=i==0?'0':'0_'
                    key+=this.selectVal[i]+'_';
                    let nKey=kk+key.substring(0,key.length-3);
                    this.slots.push({
                        flex:1,
                        defaultIndex:this.selectVal[i],
                        values:Address[nKey]
                    })
                }

            },
            saveAddress() { //保存所选地区
                let vm = this
                vm.show = false
                vm.$emit('save-address', vm.addressValue);
            },
            hidePicker() { // 取消选择
                this.$emit('hide-picker', false);
            },
            onValuesChange(picker, values) {
                let cArr = [];
                for (let i in values) {
                    cArr.push(parseInt(values[i].index))
                    this.slots[i].defaultIndex =parseInt(values[i].index)
                }
                console.log(values)
                this.addressValue=values;
                this.selectVal = cArr;

            }
        }
    }

</script>

<style scoped>

</style>
