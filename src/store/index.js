import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: 'YooHyeokSchool', email: 'webdevyoo@gmail.com', password: '123qwe' },
      { id: 1, name: 'Codeaholic', email: 'Codeaholic@gmail.com', password: '123qwe' }
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: {},
  mutations: { // 상태 값 변화

    // 로그인 성공
    loginSuccess(state, payload) {
      state.userInfo = payload
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인 실패
    loginFailed(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.userInfo = null;
      state.isLogin = false;
      state.isLoginError = false;
    },

  },

  actions: {
    // 로그인 시도 => 성공 / 실패 호출
    login({ state, commit }, payload) {
      console.log(payload)
      let selectedUser = null;
      // 1. 전체 회원에서 해당 이메일로 회원 탐색한다.
      state.allUsers.forEach(user => {
        if (user.email === payload.email) selectedUser = user;
      })
      // 2. 탐색한 회원의 비밀번호와 입력된 비밀번호를 비교
      // 3. 두 조건이 모두 true 일 경우 로그인 성공
      /* const commitMsg = selectedUser === null || 
      selectedUser.password !== payload.password ? 
      "loginFailed" : "loginSuccess"
      commit(commitMsg) */

      if (selectedUser === null || selectedUser.password !== payload.password ) {
        commit("loginFailed")
        return
      }
      commit("loginSuccess", selectedUser)
      router.push({ name: "mypage" })
    },
    logout({ commit }) {
      commit("logout")
      // router.push({ name: "home" })
      router.push({ name: "home" }).catch(()=> {}); // Avoided redundant 대응 - catch구문
    }
  },
  modules: {}
});
