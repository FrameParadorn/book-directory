import Vue from "vue";
import Vuex from "vuex";
import * as book from "@/store/modules/book.js";
import * as category from "@/store/modules/category.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { book, category },
});
