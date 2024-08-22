<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
    <v-list dense>
      <v-list-item router :to="{name: 'home'}">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isLogin === false" router :to="{name: 'login'}">
        <v-list-item-action>
          <v-icon>login</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>로그인</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isLogin === true" router :to="{name: 'mypage'}">
        <v-list-item-action>
          <v-icon>mypage</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>마이페이지</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small>fa-ellipsis-v</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item  router :to="{ name: 'mypage' }" exact>
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="logout">로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text v-else router :to="{ name: 'login' }">
          Login
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2024</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    data: () => ({ drawer: null }),
    computed: {
      ...mapState(["isLogin"])
    },
    methods: {
      ...mapActions(["logout"])
    }
  }
</script>