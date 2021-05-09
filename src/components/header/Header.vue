<template>
  <v-app-bar app color="white" elevation="1">
    <v-row>
      <v-col cols="5" sm="3" class="pa-0">
        <HeaderLogo />
      </v-col>
      <v-col cols="6" class="d-flex">
        <HeaderSearch />
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <HeaderFavorite />
        <HeaderAvatar />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderAvatar from "./HeaderAvatar.vue";
import HeaderFavorite from "./HeaderFavorite.vue";

export default {
  components: {
    HeaderLogo,
    HeaderSearch,
    HeaderAvatar,
    HeaderFavorite,
  },
};
</script>
