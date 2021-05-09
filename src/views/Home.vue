<template>
  <v-row>
    <v-col
      class="justify-center"
      cols="12"
      sm="4"
      md="3"
      lg="2"
      v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      :key="index"
    >
      <BookCard />
    </v-col>
  </v-row>
</template>

<script>
import BookCard from "@/components/Book/BookCard.vue";

export default {
  components: {
    BookCard,
  },
};
</script>
