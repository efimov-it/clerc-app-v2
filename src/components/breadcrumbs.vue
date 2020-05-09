<template>
    <div class="breadcrumbs">
        <div class="breadcrumbs_toMainPage"
             v-if="$store.getters.getPathsCount > 1"
             @click="$store.commit('goPath', 0)">
            <router-link to="/"><i class="icon icon_back" />На главную</router-link>
        </div>

        <div class="breadcrumbs_items">
            <div v-for="(url, index) in $store.getters.getPathArray"
                :key="index"
                class="breadcrumbs_item"
                @click="$store.commit('goPath', index)">
                <router-link :to="url.path">
                    {{url.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.breadcrumbs {
    position: relative;
    padding-top: 15px;
    margin-bottom: 20px;

    &_toMainPage {
        font-size: 10px;
        position: absolute;
        margin-top: -15px;

        .icon {
            width: 3px;
            height: 6px;
            margin-right: 3px;
            display: inline-block;
        }

        a {
            color: #5361ff;
        }
    }

    &_items {
        display: flex;
    }

    &_item {
        font-size: 18px;
        
        &:not(:last-child) {
            margin-right: 20px;

            &::after {
                content: '';
                position: absolute;
                width: 3px;
                height: 3px;
                background-color: #2e2e2e;
                border-radius: 3px;
                margin: 10px 0px 0px 9px;
            }
        }
        
        &:not(:first-child):last-child a {
            color: #5361ff;
            text-decoration: underline;
        }

        &:first-child a{
            font-family: RobotoBold;
        }
    }

    a {
        text-decoration: none;
        user-select: none;
    }
}
</style>