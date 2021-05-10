<template>
  <div class="image-container">
    <img :src="image" class="full" />
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
  setup({ book }) {
    const image =
      book?.volumeInfo?.imageLinks?.large || "https://via.placeholder.com/600";

    return {
      image,
    };
  },
};
</script>

<style scoped lang="scss">
.image-container {
  width: 350px;
  height: 500px;

  .full {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
