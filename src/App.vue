<template>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
import Header from "@/components/header/Header.vue";

export default {
  components: {
    Header,
  },
  name: "App",
};
</script>

<style>
.v-application .elevation-1 {
  box-shadow: 0px 2px 1px -1px rgb(120 120 120 / 20%) !important;
}
</style>
