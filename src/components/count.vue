<template>
    <div>
        <h2> {{msg}}</h2>
        <br>
        <p>直接引用vuex store里的值  {{$store.state.count}} </p>
        <p>mapState引用store里的值，通过计算属性直接插值使用store里的值    {{count}}  </p>
       <div>
           <p>操作store里的数据，需要再使用store里的方法，$store.commit('add',n) //commit 提交方法已经传参</p>
           <button @click="$store.commit('add',10)">add</button>
           <button @click="$store.commit('reduce',1)">reduce</button>
            <button @click="add(20)">mapMutations简写add并传参</button>
           <button @click="reduce(10)">mapMutations简写reduce并传参</button>
       </div>
    </div>
</template>

<script>
import store from "@/vuex/store"; //引入store
import { mapState, mapMutations,mapGetters } from "vuex"; //引入mapState和mapMutations

export default {
  name: "count",
  data() {
    return {
      msg: "hello vuex && 访问状态对象"
    };
  },
  computed:{
      ...mapState(["count"]),//扩展
      ...mapGetters(['count'])
  }, //最实用写法 数组形式
  //computed:{
  //组件里使用vuex store里数据的方法二，通过计算属性引用store里的值
  // count(){
  //     return this.$store.state.count
  // },
  //组件里使用vuex store里数据的方法三， 通过mapState引用store里的值
  //mapState(){
  //count:state=>$state.count  //mapState 写法1箭头函数
  //    ['count']   //mapState 写法2用数组形式赋值
  // }
  // },
  methods: mapMutations(["add", "reduce"]), //数组形式
  store //使用store  {{$store.state.count}}使用数据
};
</script>

<style scoped>
</style>
