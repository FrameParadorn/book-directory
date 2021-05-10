<template>
  <div @mouseover="show = true" @mouseleave="show = false">
    <v-icon class="icon mr-3" color="#d885af"> mdi-heart-outline </v-icon>
    <transition name="slide-y-fade">
      <v-card class="box-favorite" v-if="show">
        <HeaderFavoriteItem />
      </v-card>
    </transition>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import HeaderFavoriteItem from "@/components/header/HeaderFavoriteItem.vue";

export default {
  components: {
    HeaderFavoriteItem,
  },
  setup() {
    const show = ref(false);
    return { show };
  },
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 2.5rem;
  cursor: pointer;
}

.box-favorite {
  width: 250px;
  height: 300px;
  position: absolute;
  top: 50px;
  right: 50px;
  padding: 10px;
  overflow-x: scroll;
}
</style>
