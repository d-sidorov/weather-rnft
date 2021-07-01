<template>
  <canvas ref="myChart" :width="getWidth" height="400"></canvas>
</template>

<script>
import { mapGetters } from "vuex";
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    ...mapGetters("weather", ["GET_WEATHER"]),

    getData() {
      return {
        labels: this.getLabels,
        datasets: this.getDatasets,
      };
    },

    getWidth() {
      return window.innerWidth > 1360 ? 1360 : window.innerWidth;
    },

    getLabels() {
      return this.GET_WEATHER.map((item) => {
        return this.dateFormat(item.dt);
      });
    },
    getDatasets() {
      return [
        {
          label: "Температура днем, °C",
          data: this.GET_WEATHER.map((item) => item.temp.day.toFixed()),
          backgroundColor: "rgb(255,99,132)",
          borderColor: "rgb(255,99,132)",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Температура ночью, °C",
          data: this.GET_WEATHER.map((item) => item.temp.night.toFixed()),
          backgroundColor: "rgb(54,162,235)",
          borderColor: "rgb(54,162,235)",
          fill: false,
          tension: 0.4,
        },
      ];
    },
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
  mounted() {
    let ctx = this.$refs.myChart.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "line",
      data: this.getData,
      options: {
        interaction: {
          intersect: false,
        },
      },
    });
  },
};
</script>

<style></style>
