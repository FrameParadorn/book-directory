<template>
  <v-row>
    <v-col
      class="justify-center"
      cols="12"
      sm="4"
      md="3"
      lg="2"
      v-for="book in books"
      :key="book.id"
    >
      <BookCard :to="`/book/${book.id}`" :book="book" />
    </v-col>
  </v-row>
</template>

<script>
import { onMounted, computed } from "@vue/composition-api";
import BookCard from "@/components/book/BookCard.vue";
import store from "@/store";

export default {
  components: {
    BookCard,
  },
  setup() {
    onMounted(async () => {
      await store.dispatch("book/fetchBooks");
    });

    const books = computed(() => store.state.book.books);
    console.log(books)

    return {
      books,
    };
  },
};
</script>
