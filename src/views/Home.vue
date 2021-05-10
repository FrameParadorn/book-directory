<template>
  <div>
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
    <v-row class="align-center">
      <v-col>
        <v-pagination
          :value="page"
          :length="totalPage"
          :total-visible="7"
          @input="changePage"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
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

    const changePage = (page) => {
      store.dispatch("book/setPage", page);
    };

    const books = computed(() => store.state.book.books);
    const totalPage = computed(() => store.state.book.totalPage);
    const page = computed(() => store.state.book.page);

    return {
      books,
      totalPage,
      page,
      changePage,
    };
  },
};
</script>
