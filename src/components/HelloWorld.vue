<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row type="flex" class="t-hp100">
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <router-link to="/apply">
                        <MenuItem name="1" >
                                <Icon type="ios-navigate" :size="iconSize"></Icon>
                                <span class="layout-text">我的申请</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/project">
                        <MenuItem name="2">
                                <Icon type="ios-keypad" :size="iconSize"></Icon>
                                <span class="layout-text">我的项目</span>
                        </MenuItem>
                    </router-link>
                    <MenuItem name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">选项 3</span>
                    </MenuItem>
                </Menu>
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                    <Button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <router-view></router-view>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 3 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .t-hp100{ height: 100%; }
    a{ color: rgba(255,255,255,.7) }
    a.router-link-active{ color: #2b85e4 }
</style>
