<template>
  <v-app-bar app color="white" elevation="1">
    <v-row>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderAvatar />
    </v-row>
  </v-app-bar>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderAvatar from "./HeaderAvatar.vue";

export default {
  components: {
    HeaderLogo,
    HeaderSearch,
    HeaderAvatar,
  },
};
</script>
