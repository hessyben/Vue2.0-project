<template>
    <div>
        <router-view></router-view>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <BreadcrumbItem href="#">首页</BreadcrumbItem>
                <BreadcrumbItem href="#">我的申请</BreadcrumbItem>
                <BreadcrumbItem>列表</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <Table stripe  height="500" :columns="columns1" :data="project"></Table>
            </div>
        </div>  
        <Modal
            v-model="modal"
            title="对话框标题"
            :loading="loading"
            @on-ok="asyncOK">
            <p>点击确定后，对话框将在 2秒 后关闭。</p>
        </Modal>
        
    </div>
</template>
<script>
    import {mapState,mapGetters,mapActions} from 'vuex';
    var status = [
        { label:'审批中', value:1 },
        { label:'处理中', value:2 },
        { label:'已完成', value:3 },
        { label:'已拒绝', value:4 }
    ];
    export default {
        data () {
            return {
                loading: true,
                columns1: [
                    {
                        title: '流程编号',
                        key: 'id'
                    },
                    {
                        title: '流程名称',
                        key: 'name'
                    },
                    {
                        title: '流程步骤',
                        key: 'nodeName'
                    },
                    {
                        title: '当前处理人',
                        key: 'handler'
                    },
                    {
                        title: '流程状态',
                        key: 'statusMsg',
                        filters:status,
                        filterMultiple: false,
                        filterMethod (value, row) {
                            return row.status==value;
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({
                                                'name': 'ApplyDetail',
                                                'params':{id:params.row.id}
                                            });
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.$store.commit('CHANGE_MODAL');
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ]
            }
        },
        computed:{
            ...mapState({
                length:state=>state.apply.length
            }),
            ...mapGetters({
                project:'completeProjects',
                modal:'modal'
            })
        },
        created(){
            console.log(this.modal,this.length);
            this.$store.dispatch('LOAD_PROJECT_LIST');
        },
        methods: {
            asyncOK (){
                setTimeout(() => {
                    this.$store.commit('CHANGE_MODAL');
                }, 2000);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        max-height: 80%;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
</style>
