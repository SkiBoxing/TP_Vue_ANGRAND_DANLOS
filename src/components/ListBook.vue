<template>
  <div>

    <table>
      <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Prix</th>
        <th scope="col">Nombre de pages</th>
        <th scope="col">Couleur de couverture</th>
      </tr>
      </thead>
      <tbody>
      <!-- Rajout d'une classe CSS selon le nombre de pages -->
      <tr v-for="book in bookList" :key="book.id" :class="book.pageCount === 8 ? 'green' : book.pageCount > 10 ? 'red' : 'normal'">
        <!-- Nom mis en majuscules -->
        <td>{{ book.name.toUpperCase() }}</td>
        <td>{{ book.price }} € </td>
        <td>{{ book.pageCount }}</td>
        <td>{{ book.colorCover }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import BookService from '@/services/BookService';

export default {
  name: 'ListBook',
  data() {
    return {
      bookList: [],
    }
  },
  methods: {
    // Méthode pour récupérer tous les livres
    async getAllBooks(){
      try {
        // Appel de l'API
        this.bookList = await BookService.getAllBooks();
        console.log("valeur list book:", this.bookList);
      }
      // Gestion en cas d'erreur
      catch (e) {
        console.log(e);
      }
    }
  },
  // Appel initial pour récupérer les livres
  async mounted() {
    this.getAllBooks();
  }
}
</script>

<style>
  .green {
    background-color: lightgreen;
  }
  .red {
    background-color: lightcoral;
  }
  .normal {
    background-color: lightgray;
  }
</style>