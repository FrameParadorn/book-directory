<template>
  <div class="my-10">
    <b class="d-block">Description:</b>
    <p v-html="book.volumeInfo.description"></p>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  text-indent: 30px;
}
</style>
