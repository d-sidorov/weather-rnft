<template>
  <q-dialog v-model="alert" persistent ref="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">Авторизация</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="login" placeholder="Введите логин"></q-input>
        <span class="text-red" v-if="error_login">{{ error_login }}</span>
        <q-input v-model="password" placeholder="Введите пароль"></q-input>
        <span class="text-red" v-if="error_password">{{ error_password }}</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Войти" color="primary" @click="auth" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
import Users from '../json/users.json';

export default {
  data() {
    return {
      alert: true,
      login: '',
      password: '',
      error_login: '',
      error_password: '',
    };
  },
  methods: {
    ...mapMutations(['AUTH']),

    auth() {
      if (this.login && this.password) {
        let user = Users.find((u) => u.login == this.login);
        if (user) {
          if (user.password == this.password) {

            this.AUTH({
              login: user.login,
              name: user.name,
              role: user.role,
            });
            this.$refs.modal.hide();
            this.$emit('getData');

            localStorage.setItem('wLogin', user.login)
            localStorage.setItem('wName', user.name)

          } else {
            this.error_password = 'Неверный пароль';
          }
        } else {
          this.error_login = 'Логин не существует';
        }
      } else {
        !this.login
          ? (this.error_login = 'Введите логин')
          : (this.error_login = '');
        !this.password
          ? (this.error_password = 'Введите пароль')
          : (this.error_password = '');
      }
    },
  },
};
</script>

<style></style>
