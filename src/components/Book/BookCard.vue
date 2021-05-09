<template>
  <router-link :to="to">
    <v-card max-width="200">
      <v-img
        :src="book.volumeInfo.imageLinks.thumbnail"
        height="150px"
      ></v-img>

      <v-card-title class="title subtitle-2 font-weight-bold">
        {{ book.volumeInfo.title }}
      </v-card-title>

      <v-card-subtitle class="subtitle subtitle-2 text-truncate pb-0 mt-0">
        {{ book.volumeInfo.subtitle }}
      </v-card-subtitle>

      <div class="px-4 pb-1">
        <star-rating
          read-only
          :rating="book.volumeInfo.averageRating"
          active-color="#d885af"
          :star-size="15"
          text-class="d-none"
        />
      </div>
    </v-card>
  </router-link>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    to: {
      type: String,
      required: true,
      validator: (value) => value.charAt(0) === "/",
    },
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.title {
  height: 60px;
  overflow: hidden;
}

.subtitle {
  height: 30px;
}
</style>
