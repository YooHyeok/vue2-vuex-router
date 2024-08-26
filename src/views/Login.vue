<template>
  <div>

  <v-main fill-height>
    <v-layout align-center row wrap justify-center>
      <v-flex xs3>
        <v-alert
          :value="isError"
          type="error"
        >
          아이디와 비밀번호를 확인해 주세요
        </v-alert>
        <v-alert
          :value="loginSuccess"
          type="success"
        >
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat color="grey lighten-4" >
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="email"
              label="이메일을 입력하세요"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            >
          </v-text-field>
          <v-btn 
            color="primary"
            block 
            depressed 
            large
            @click="login({email, password})"
          >
            로그인
          </v-btn>
          <v-btn block @click="getTest">FakeServer get 테스트</v-btn>
          <v-btn block @click="postTest">FakeServer post 테스트</v-btn>
          </div>
        </v-card>
      </v-flex>

    </v-layout>
  </v-main>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
// const axios = require("axios")
import axios from "axios"
export default {
  data() {
    return {
      email: null,
      password: null,
      /* allUsers: [
        {id: 1, name: 'YooHyeokSchool', email: 'webdevyoo@gmail.com', password: '123qwe'},
        {id: 1, name: 'Codeaholic', email: 'Codeaholic@gmail.com', password: '123qwe'}
      ],
      isError: false,
      loginSuccess: false */
    }
  },
  computed: {
    ...mapState({
      loginSuccess:'isLogin',
      isError:'isLoginError'
    })
  },
  methods: {
    ...mapActions(['login']),
    /* login() {
      let selectedUser = null;
      // 1. 전체 회원에서 해당 이메일로 회원 탐색한다.
      this.allUsers.forEach(user => {
        if (user.email === this.email) selectedUser = user;
      })
      if (selectedUser === null) {
        this.isError = true;
        this.loginSuccess = !this.isError
        return;
      }
      // 2. 탐색한 회원의 비밀번호와 입력된 비밀번호를 비교
      // 3. 두 조건이 모두 true 일 경우 로그인 성공
      this.isError = selectedUser.password !== this.password ? true : false
      this.loginSuccess = !this.isError
      console.log(this.email, this.password)
    } */
   getTest() {
    axios
      .get("https://reqres.in/api/users?page=2")
        .then(function(response){
          console.log(response)
        })
        .catch(function(error){
          console.log(error)
        })
        .then(function(){
          console.log(":then:")
        })
   },
   postTest() {
    axios
      .post("https://reqres.in/api/register", {
          email: "eve.holt@reqres.in",
          password: "cityslicka" // 해당 필드가 없으면 400Error가 출력된다.
        })
        .then(res => {
          console.log(res)
        })
        .catch(error=> {
          console.log(error)
        })
   }
  }
}
</script>