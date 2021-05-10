<template>
  <v-row class="align-center pa-0">
    <v-col cols="7" class="pa-0">
      <v-text-field
        hide-details
        solo
        dense
        prepend-inner-icon="mdi-magnify"
        label="Search the book"
        v-model="keyword"
        @keyup.enter="search"
      >
      </v-text-field>
    </v-col>
    <v-col cols="2" class="pa-0 pl-5">
      <v-btn elevation="2" color="white" @click="search">
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from "@vue/composition-api";
import store from "@/store";

export default {
  setup() {
    const keyword = ref("");

    const search = async () => {
      store.dispatch("book/setKeyword", keyword);
      await store.dispatch("book/fetchBooks");
    };

    return {
      keyword,
      search,
    };
  },
};
</script>
