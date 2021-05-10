<template>
  <div class="my-5">
    <v-simple-table height="300px">
      <tbody>
        <tr>
          <td>ISBN</td>
          <td>{{ industryIdentifiers[1] || "" }}</td>
        </tr>
        <tr>
          <td>Author</td>
          <td>{{ authors[0] || "" }}</td>
        </tr>
        <tr>
          <td>Publisher</td>
          <td>{{ publisher || "" }}</td>
        </tr>
        <tr>
          <td>Publication Date</td>
          <td>{{ publishedDate || "" }}</td>
        </tr>
        <tr>
          <td>Number of Pages</td>
          <td>{{ pageCount || "" }}</td>
        </tr>
      </tbody>
    </v-simple-table>
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
    const {
      industryIdentifiers,
      authors,
      publisher,
      publishedDate,
      pageCount,
    } = book.volumeInfo;

    return {
      industryIdentifiers,
      authors,
      publisher,
      publishedDate,
      pageCount,
    };
  },
};
</script>

<style>
table td:first-child {
  width: 30%;
  background-color: #f5f5f5;
}
</style>
