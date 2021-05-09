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
          <router-link to="/foo">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.name }}
            ({{ item.length }})
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const menus = ref([
      {
        title: "category",
        items: [
          { name: "Antiques", length: 3, icon: "mdi-account-box" },
          {
            name: "Architecture",
            length: 124,
            icon: "mdi-animation-play-outline",
          },
          {
            name: "Fashion & Textiles",
            length: 131,
            icon: "mdi-android-debug-bridge",
          },
        ],
      },
    ]);
    return { menus };
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

  a {
    text-decoration: none;
    color: gray;
  }
}
</style>
