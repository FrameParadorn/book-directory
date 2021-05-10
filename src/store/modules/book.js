import { getBookAll, getBookOne } from "@/services/BookService";

export const namespaced = true;

export const state = {
  books: [],
  book: {},
  totalPage: 0,
  perPage: 18,
  page: 1,
  keyword: "",
};

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  SET_BOOK(state, book) {
    state.book = book;
  },
  SET_TOTAL_PAGE(state, totalItems) {
    state.totalPage = Math.ceil(totalItems / state.perPage);
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword;
  },
};

export const actions = {
  async fetchBooks({ state, commit }) {
    const books = await getBookAll(state);
    commit("SET_BOOKS", books.data.items);
    commit("SET_TOTAL_PAGE", books.data.totalItems);
  },
  async fetchBook({ commit }, id) {
    const book = await getBookOne(id);
    commit("SET_BOOK", book.data);
  },
  setPage({ commit, dispatch }, page) {
    commit("SET_PAGE", page);
    dispatch("fetchBooks");
  },
  setKeyword({ commit }, keyword) {
    commit("SET_KEYWORD", keyword);
  },
};

export const getters = {
  getBookById(state) {
    return (id) => state.books.find((book) => (book.id = id));
  },
};
