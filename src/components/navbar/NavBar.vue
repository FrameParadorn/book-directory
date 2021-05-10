<template>
  <div class="navbar pa-7">
    <div
      v-for="(menu, menuIndex) in menus"
      :key="`${menuIndex}-navbar`"
      class="navbar-item pb-5"
    >
      <span class="navbar-title">{{ menu.title }}</span>
      <ul>
        <li
          v-for="(item, itemIndex) in menu.items"
          :key="`${itemIndex}-navbar-item`"
          class="pa-1"
        >
          <div @click="changeCategory(item.name)">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
import store from "@/store";

export default {
  setup() {
    const menus = computed(() => store.state.category.categories);

    const changeCategory = async (categoryName) => {
      store.dispatch("book/setKeyword", categoryName);
      await store.dispatch("book/fetchBooks");
    }

    return { menus, changeCategory };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  color: gray;

  .navbar-title {
    font-weight: thin;
    font-size: 0.9rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    text-decoration: none;
    color: gray;
    cursor: pointer;
  }
}
</style>
