<template>
  <div>
    <v-row>
      <v-col cols="4">
        <BookSample :book="book" />
      </v-col>
      <v-col cols="8">
        <BookSampleDetail :book="book" />
        <BookSampleDescription :book="book" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <BookSampleDetailTable :book="book" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BookSample from "@/components/book/BookSample.vue";
import BookSampleDetail from "@/components/book/BookSampleDetail.vue";
import BookSampleDescription from "@/components/book/BookSampleDescription.vue";
import BookSampleDetailTable from "@/components/book/BookSampleDetailTable.vue";
import store from "@/store";
import { onMounted, computed } from "@vue/composition-api";

export default {
  components: {
    BookSample,
    BookSampleDetail,
    BookSampleDescription,
    BookSampleDetailTable,
  },
  setup(props, context) {
    const { id } = context.root._route.params;
    onMounted(async () => {
      await store.dispatch("book/fetchBook", id);
    });

    const book = computed(() => store.state.book.book);

    return {
      book,
    };
  },
};
</script>
