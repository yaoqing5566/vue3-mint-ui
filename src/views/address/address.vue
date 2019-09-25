<template>
    <div style="padding: 30px">
        <mt-button  size="large" type="primary" @click="showPicker">选择地址</mt-button>
        {{address}}
        <my-address :showAddressPicker="showAddressPicker" @save-address="saveAddress" @hide-picker="hidePicker" :init="initIndex"></my-address>

        <mt-button  size="large" type="primary" @click="openPicker" style="margin: 20px 0">时间选择器</mt-button><br>
        <mt-button  size="large" type="primary" @click="openPicker2">单项选择器</mt-button>
        <mt-popup position="bottom" v-model="popupVisible" style="width: 100%">
            <div class="picker-toolbar" style="border-bottom: solid 1px #eaeaea;"><span
                    class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span> <span
                    class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span></div>
            <mt-picker :slots="slots" value-key="name" :visible-item-count="5" @change="onCityChange"></mt-picker>
        </mt-popup>

        <mt-datetime-picker ref="picker" type="date" v-model="date"  year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"></mt-datetime-picker>

    </div>

</template>

<script>
    import MyAddress from '../../components/address-picker/Address.vue'
    import {Radio, MessageBox, Indicator, Swipe, SwipeItem, DatetimePicker, Popup, Picker , Cell, Button} from 'mint-ui';
    export default {
        components: {
            MyAddress,
            Radio,
            Swipe,
            SwipeItem,
            DatetimePicker,
            Popup,
            Picker
        },
        data() {
            return {
                showAddressPicker: false,
                initIndex: [11,7,6],
                address:{},

                date:new Date('2018-10-18'),
                areaPicker: '',
                changeProvinceId: '',
                popupVisible: false,
                data: {
                    privinceId: 2
                },
                slots: [
                    {
                        flex: 1,
                        values: [
                            {
                                id: 1,
                                name: '安徽'
                            },
                            {
                                id: 2,
                                name: '上海'
                            }
                        ]
                    }
                ],
            }
        },
        methods: {
            hidePicker() {
                // 接受子组件关闭popup事件
                this.showAddressPicker = false
            },
            showPicker() {
                this.showAddressPicker = !this.showAddressPicker
            },
            saveAddress(val) {
                // 从子组件接受返回所选值 val
                console.log(val)
                this.address=val
                this.showAddressPicker = !this.showAddressPicker
            },
            onCityChange (picker, values) {
                this.areaPicker = picker;
                console.log(values)
                this.changeProvinceId = values[0].id;
            },
            openPicker() {
                this.$refs.picker.open();
            },
            openPicker2(){
                this.popupVisible = true;
               // this.areaPicker.setSlotValue(0, this.slots[0].values[1]);
                //设置默认值
                if (this.data.privinceId !== '') {
                    let privinces=this.slots[0].values;
                    let index=this.getArrIndex(privinces,this.data.privinceId);
                    console.log(index)
                    this.areaPicker.setSlotValue(0, privinces[index])
                }
            },
            getArrIndex(arr,id){
                for(var i=0;i<arr.length;i++){
                    if(arr[i].id==id){
                        return i;
                    }
                }
            },
            cancleaddress: function () {
                this.popupVisible = false
            },
            selectaddress: function () {
                this.popupVisible = false
                this.data.privinceId = this.changeProvinceId
                console.log(this.data.privinceId)
            },
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
        height: 200px;
    }
    .swiper-slide {
        line-height: 200px;
        font-size: 36px;
        text-align: center;
    }
</style>
