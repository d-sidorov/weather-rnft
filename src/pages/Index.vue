<template>
  <q-page class="flex flex-center q-pa-md doc-container column q-gutter-y-lg">
    <div class="row q-gutter-lg">
      <q-item
        class="col-xs-3 col-sm-auto q-pa-none"
        v-for="(day, i) in GET_WEATHER"
        :key="i"
        :to="`/detail/${i}`"
      >
        <q-card>
          <q-card-section class="column text-center">
            <span>{{ dateFormat(day.dt) }}</span>
            <span class="text-h5">{{ day.temp.day.toFixed() }}°</span>
            <span class="text-caption">{{ day.temp.night.toFixed() }}°</span>
            <q-img
              :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
              width="60px"
              height="60px"
            ></q-img>
          </q-card-section>
        </q-card>
      </q-item>
    </div>
    <div class="row">
      <div class="col-12">
        <Graph v-if="GET_WEATHER.length > 0" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import Graph from "../components/Graph";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("weather", ["GET_WEATHER"]),
  },
  methods: {
    dateFormat(date) {
      if (date == "") {
        return "";
      }
      return new Date(date * 1000).toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
      });
    },
  },
  components: {
    Graph,
  },
};
</script>
