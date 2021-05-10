<template>
  <div>
    <h1>{{ book.volumeInfo.title }}</h1>
    <p><b>Authors:</b> {{ book.volumeInfo.authors[0] }}</p>
    <p><b>Publisher:</b> {{ book.volumeInfo.publisher }}</p>
    <star-rating
      read-only
      :rating="book.volumeInfo.averageRating"
      active-color="#d885af"
      :star-size="15"
      text-class="d-none"
    />
    <v-btn elevation="2" color="#d885af" class="mt-5" dark>
      <v-icon class="mr-2"> mdi-cart </v-icon>
      Buy
    </v-btn>
    <v-btn elevation="2" color="#d885af" outlined class="mt-5 ml-2" dark>
      <v-icon class="mr-2"> mdi-cart </v-icon>
      Preview E-book
    </v-btn>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
}
</style>
