<template>
  <q-page class="flex flex-center">
    <div style="width: 500px">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>{{ dateFormat(weather.dt) }}</q-toolbar-title>
      </q-toolbar>
      <q-list bordered>
        <q-item v-ripple>
          <q-item-section class="column">
            <span class="text-caption">Утром</span>
            <span
              ><b>{{ weather.temp.morn.toFixed() }}°</b> ощущается как
              <b>{{ weather.feels_like.morn.toFixed() }}°</b></span
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="column">
            <span class="text-caption">Днем</span>
            <span
              ><b>{{ weather.temp.day.toFixed() }}°</b> ощущается как
              <b>{{ weather.feels_like.day.toFixed() }}°</b></span
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="column">
            <span class="text-caption">Вечером</span>
            <span
              ><b>{{ weather.temp.eve.toFixed() }}°</b> ощущается как
              <b>{{ weather.feels_like.eve.toFixed() }}°</b></span
            >
          </q-item-section> </q-item
        ><q-item>
          <q-item-section class="column">
            <span class="text-caption">Ночью</span>
            <span
              ><b>{{ weather.temp.night.toFixed() }}°</b> ощущается как
              <b>{{ weather.feels_like.night.toFixed() }}°</b></span
            >
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item-label header>Информация</q-item-label>

        <q-item class="text-center">
          <q-item-section class="column">
            <span class="text-caption">Давление</span>
            <span
              >{{
                (weather.pressure * 0.75006375541921).toFixed()
              }}
              мм.рт.ст</span
            >
          </q-item-section>
          <q-item-section class="column">
            <span class="text-caption">Влажность</span>
            <span>{{ weather.humidity }}%</span>
          </q-item-section>
          <q-item-section class="column">
            <span class="text-caption">Ветер</span>
            <span>{{ weather.speed }} м/с</span>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("weather", ["GET_WEATHER_BY_DAY"]),

    weather() {
      return this.GET_WEATHER_BY_DAY(this.$route.params.day);
    },
  },
  methods: {
    dateFormat(date) {
      if (date == "") {
        return "";
      }
      return new Date(date * 1000).toLocaleString("ru", {
        day: "numeric",
        month: "long",
      });
    },
  },
};
</script>

<style scoped>
.q-list {
  font-size: 1.3em;
}
</style>
