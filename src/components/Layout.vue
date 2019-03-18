<template>
    <div :style="{'min-height':$store.state.windowHeight+'px'}">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>

</template>

