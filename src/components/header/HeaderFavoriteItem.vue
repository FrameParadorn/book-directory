<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="3">
          <img
            src="https://storage.naiin.com/system/application/bookstore/resource/product/202103/524176/1000240357_front_XXL.jpg"
            class="img"
          />
        </v-col>
        <v-col cols="9">
          <h6>ฮัสกี้หน้าโง่กับอาจารย์เหมียวขาวของเขา เล่ม 1</h6>
          <v-icon color="red" @click="removeFavorite"
            >mdi-trash-can-outline</v-icon
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  setup() {
    const removeFavorite = () => {
      console.log("DEBUG");
    };

    return {
      removeFavorite,
    };
  },
};
</script>

<style scoped>
.img {
  width: 40px;
}
</style>
