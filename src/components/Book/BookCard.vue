<template>
  <v-card max-width="200">
    <v-img
      src="http://books.google.com/books/content?id=SJAtjSmwD_EC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70RN3ERLPud4vX6BZMP9fquOcWXTRiWkanA4SVBN4Mn0SqO829gYWPrW4VLD64rcT4BnLgSGt0_rMtMBoTwu8xuTP86-ebIlUrvlrT8Q4bD7XGufbIsbeyD55LTR14vyw5fOGAT&source=gbs_api"
      height="150px"
    ></v-img>

    <v-card-title class="title subtitle-2 font-weight-bold">
      The English Encyclo
    </v-card-title>

    <v-card-subtitle class="caption subtitle-2 text-truncate pb-0 mt-0">
      Being a Collection of Treatises, and a Dictionary of Terms, Illustrative
      of the Arts and Sciences
    </v-card-subtitle>

    <div class="px-4 pb-1">
      <star-rating
        read-only
        :rating="4"
        active-color="#d885af"
        :star-size="15"
        text-class="d-none"
      />
    </div>
  </v-card>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
};
</script>

<style scoped>
.title {
  height: 60px;
  overflow: hidden;
}
</style>
