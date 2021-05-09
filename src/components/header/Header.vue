<template>
  <div>
    <v-app-bar app color="white" elevation="1">
      <v-row>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderAvatar />
      </v-row>
    </v-app-bar>
    <v-main>TEST</v-main>
  </div>
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
