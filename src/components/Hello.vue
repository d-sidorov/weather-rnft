<template>
  <q-dialog v-model="show" persistent ref="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">Привет, {{getName}}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Привет" color="primary" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  computed: {
    getName() {
      return this.$store.state.name;
    }
  }
}
</script>

<style>

</style>