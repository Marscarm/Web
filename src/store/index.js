import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store({
 
//   state: {
//     // 存储token
//     Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
//   },
 
//   mutations: {
//     // 修改token，并将token存入localStorage
//     changeLogin (state, user) {
//       state.Authorization = user.Authorization;
//       localStorage.setItem('Authorization', user.Authorization);
//     }
//   }
// });

export default new Vuex.Store({
  state: {
    searchContent:"世界",
    manageSearch:"世界",
    token: false,
    // token: window.sessionStorage.getItem('token'),
  },
  mutations: {
    changeSearch(state,payload){
      state.searchContent=payload;
    },
    changeMS(state,payload){
      state.manageSearch=payload;
    },
    changeTK(state,payload){
      state.token = payload;
    }
    // SET_TOKEN:(state, data) => {
    //   state.token = data;
    //   window.sessionStorage.getItem('token',data);
    // }
  },
  actions: {
  },
  modules: {
  }
})
