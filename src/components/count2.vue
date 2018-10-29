<template>
    <div>
        <p>{{msg}}</p>
        {{count}}
        
    </div>
</template>

<script>
    import store from '@/vuex/store';//引入store
    import {mapState,mapMutations} from 'vuex';//引入mapState和mapMutations
    export default {
        name:'count2',
        data(){
           return{
                msg:'count在vuex store中修改之后这里是否同步改变'
           }
        },
        computed:mapState(['count']),
        store
    }
</script>

<style scoped>

</style>
