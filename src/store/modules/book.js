import { getBooks } from "@/services/BookService";

export const namespaced = true;

export const state = {
  books: [],
  totalPage: 0,
  perPage: 18,
  page: 1,
};

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  SET_TOTAL_PAGE(state, totalItems) {
    state.totalPage = Math.ceil(totalItems / state.perPage);
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
};

export const actions = {
  async fetchBooks({ state, commit }) {
    const books = await getBooks(state.perPage, state.page);
    commit("SET_BOOKS", books.data.items);
    commit("SET_TOTAL_PAGE", books.data.totalItems);
  },
  setPage({ commit, dispatch }, page) {
    commit("SET_PAGE", page);
    dispatch("fetchBooks");
  },
};

export const getters = {
  getBookById(state) {
    return (id) => state.books.find((book) => (book.id = id));
  },
};
