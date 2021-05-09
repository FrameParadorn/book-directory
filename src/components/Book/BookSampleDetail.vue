<template>
  <div>
    <h1>ฮัสกี้หน้าโง่กับอาจารย์เหมียวขาวของเขา เล่ม 1</h1>
    <p><b>ผู้เขียน:</b> โร่วเปาปู้ชือโร่ว (rou bao bu chi rou)</p>
    <p><b>สำนักพิมพ์:</b> Rose</p>
    <p><b>หมวดหมู่:</b> หนังสือวาย ยูริ , นิยายวาย นิยายยูริ</p>
    <p><b>publish:</b> 10/10/2010</p>
    <star-rating
      read-only
      :rating="4"
      active-color="#d885af"
      :star-size="15"
      text-class="d-none"
    />
    <v-btn elevation="2" color="#d885af" class="mt-5" dark>
      <v-icon class="mr-2">
        mdi-cart
      </v-icon>
      Buy
    </v-btn>
    <v-btn elevation="2" color="#d885af" outlined class="mt-5 ml-2" dark>
      <v-icon class="mr-2">
        mdi-cart
      </v-icon>
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
