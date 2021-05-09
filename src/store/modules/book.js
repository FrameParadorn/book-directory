import { getBooks } from "@/services/BookService";

export const namespaced = true;

export const state = {
  books: [],
};

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
};

export const actions = {
  async fetchBooks({ commit }) {
    const books = await getBooks();
    commit("SET_BOOKS", books.data.items);
  },
};

export const getters = {
  getBookById(state) {
    return id => state.books.find(book => book.id = id)
  },
};
