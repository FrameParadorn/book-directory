<template>
  <div>
    <v-row>
      <v-col cols="4">
        <BookSample />
      </v-col>
      <v-col cols="8">
        <BookSampleDetail />
        <BookSampleDescription />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <BookSampleDetailTable />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=12>
        <h4>Recommended For You</h4>
      </v-col>
      <v-col
        class="justify-center"
        cols="12"
        sm="4"
        md="3"
        lg="2"
        v-for="index in [1, 2, 3, 4, 5, 6]"
        :key="index"
      >
        <BookCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BookSample from "@/components/book/BookSample.vue";
import BookSampleDetail from "@/components/book/BookSampleDetail.vue";
import BookSampleDescription from "@/components/book/BookSampleDescription.vue";
import BookSampleDetailTable from "@/components/book/BookSampleDetailTable.vue";
import BookCard from "@/components/book/BookCard.vue";

export default {
  components: {
    BookSample,
    BookSampleDetail,
    BookSampleDescription,
    BookSampleDetailTable,
    BookCard,
  },
};
</script>
