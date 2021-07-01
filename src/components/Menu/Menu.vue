<template>
<q-scroll-area class="fit q-pa-sm">
  <q-list>
    <q-item-label header class="text-grey-8"> Меню </q-item-label>

    <template v-for="(item, i) in menu" :key="i">

      <q-item :to="item.link" v-if="!item.submenu && (item.access ? item.access == $store.state.role : true)" icon="perm_identity" exact>
        <q-item-section avatar>
          <q-icon :name="item.icon"></q-icon>
        </q-item-section>
        <q-item-section>{{ item.title }}</q-item-section>
      </q-item>

      <q-expansion-item
        expand-separator
        :icon="item.icon"
        :label="item.title"
        v-else-if="item.submenu"
      >
        <q-item
          v-for="(subItem, i) in item.submenu"
          :key="`sub${i}`"
          :to="subItem.link"
        >
          <q-item-section avatar>
            <q-icon :name="subItem.icon"></q-icon>
          </q-item-section>
          <q-item-section>{{ subItem.title }}</q-item-section>
        </q-item>
      </q-expansion-item>
      
    </template>
  </q-list>
</q-scroll-area>
</template>

<script>
import Menu from "../../json/menu.json";
export default {
  computed: {
    menu() {
      return Menu.menu;
    },
  },
};
</script>

<style></style>
