<template>
  <div>

  <v-main fill-height >
    <v-layout align-center row wrap justify-center >
      <v-flex xs3>
        <v-card>
          <v-toolbar flat dark height="30">
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
          </div>
        </v-card>
      </v-flex>

    </v-layout>
  </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  }
}
</script>