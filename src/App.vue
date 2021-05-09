<template>
  <v-app>
    <Header />
    <v-main>
      <v-row class="ma-0 fill-height" no-gutters>
        <v-col cols="12" md="2">
          <NavBar />
        </v-col>
        <v-col cols="12" md="10" class="pa-5">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/header/Header.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {
    Header,
    NavBar,
    Footer,
  },
  name: "App",
};
</script>

<style>
.v-application .elevation-1 {
  box-shadow: 0px 2px 1px -1px rgb(120 120 120 / 20%) !important;
}

.slide-y-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-y-fade-leave-active {
  transition: all 0.2s;
}
.slide-y-fade-enter,
.slide-y-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
