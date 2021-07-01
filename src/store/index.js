import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import weather from './module-weather'

export default store(function () {
  const Store = createStore({
    modules: {
      weather
    },
    state: {
      isAuth: false,
      role: '',
      login: '',
      name: '',
    },
    mutations: {
      AUTH(state, {login, name, role}) {
        state.isAuth = true;
        state.role = role;
        state.login = login;
        state.name = name;
      },

      LOGOUT(state) {
        state.isAuth = false;
        state.role = null;
        state.login = null;
        state.name = null;
      }
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
