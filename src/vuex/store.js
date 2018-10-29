import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //vuex集成到项目中

const state={ //state 仓库/状态 存放共享值,适合一个状态在多处使用的情况
  count:10
}
const mutations={ // mutation存在的意义：写方法修改state状态【同步修改】
    add(state,n){ //传入state对象(默认)，参数
        state.count +=n
    },
    reduce(state,n){
        state.count -=n
    }

}
const getters={ //计算过滤操作
    count:function(state){
        return state.count+=100
    }

}
const actions={ //【异步】修改状态 actions里可以调用mutations里的方法
    //事实上在 vuex 里面 actions 只是一个架构性的概念，并不是必须的，
    //说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。
    //异步竞态怎么处理那是用户自己的事情。
    addAction(context){ //context上下文对象
        context.commit('add',10);
        setTimeout(()=>{context.commit('reduce',1)},3000);
        console.log('我比reduce先执行了')
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
export default new Vuex.Store({  //暴露
  state,
  mutations,
  getters,
  actions
})

