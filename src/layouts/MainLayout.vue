<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <img src="https://www.rosneft.ru/media/rosneft/img/logo.png" height="40">
        <q-toolbar-title> Weather App </q-toolbar-title>
          <q-btn flat round dense icon="logout" v-if="isAuth" @click="logout"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1">
      <Menu />
    </q-drawer>

    <q-page-container>
      <AuthModal v-if="!isAuth" @getData="GET_WEATHER_API"/>

      <template v-else>
        <router-view />
        <HelloModal />
      </template>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapMutations } from "vuex"
import Menu from "../components/Menu/Menu.vue"
import AuthModal from "../components/Auth.vue"
import HelloModal from '../components/Hello.vue'
import Users from "../json/users.json";

export default {
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    authLogin() {
      return localStorage.getItem("wLogin");
    },

    isAuth() {
      return this.$store.state.isAuth
    }
  },
  methods: {
    ...mapActions("weather", ["GET_WEATHER_API"]),
    ...mapMutations(["AUTH", 'LOGOUT']),

    auth() {
      if (this.authLogin) {
        let user = Users.find(u => u.login == this.authLogin);
        this.AUTH({name: user.name, login: user.login, role: user.role});
        return true;
      } else {
        return false;
      }
    },

    logout() {
      localStorage.removeItem('wLogin');
      localStorage.removeItem('wName');
      this.LOGOUT()
    }
  },
  created() {
    if (this.auth()) this.GET_WEATHER_API();
  },
  components: {
    Menu,
    AuthModal,
    HelloModal
  },
};
</script>
