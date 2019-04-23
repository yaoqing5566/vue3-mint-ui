<template>
    <div>
        <!-- swiper -->
        <swiper :options="swiperOption" ref="mySwiper">
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <button @click="toSlide(0)" style="margin-left: 10px">To Slide 1</button>
        <button @click="toSlide(249)" style="margin-left: 10px">To Slide 250</button>
        <button @click="toSlide(499)" style="margin-left: 10px">To Slide 500</button>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                swiperOption: {

                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    virtual: {
                        slides: (function () {
                            const slides = [];
                            for (let i = 0; i < 600; i += 1) {
                                slides.push('Slide ' + (i + 1))
                            }
                            return slides
                        }())
                    }
                }
            }
        },
        methods: {
            toSlide(i) {
                this.$refs.mySwiper.swiper.slideTo(i, 0)
            }
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
