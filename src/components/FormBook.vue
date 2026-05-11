<template>
  <div>
    <h1>Créer un Martine</h1>
    <!-- Qui est Martine ? -->

    <form @submit.prevent="addBook">

      <br>
      <label for="name">Nom</label>
      <input type="text" id="name" v-model="book.name">

      <br>
      <label for="comment">Commentaire</label>
      <input type="text" id="comment" v-model="book.comment">

      <br>
      <label for="pageCount">Nombre de pages</label>
      <input type="number" id="pageCount" v-model="book.pageCount" step="1">
      
      <br>
      <label for="colorCover">Couleur de la couverture</label>
      <select name="colorCover" id="colorCover" v-model="book.colorCover">
        <option value="VERT">VERT</option>
        <option value="BLEU">BLEU</option>
        <option value="JAUNE">JAUNE</option>
      </select>

      <br>
      <label for="price">Prix</label>
      <input type="number" id="price" v-model="book.price" step="0.01">

      <br>
      <input type="button" value="Annuler" @click="cancelForm()">
      <input type="submit" value="Créer">
    </form>

    <!-- Affichage du/des message(s) d'erreur(s) -->
    <div class="errorMessage" v-if="error">
      <p>Erreur de création du livre : {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import BookService from '@/services/BookService';

export default {
  name: 'FormBook',
  data() {
    return {
      book: {
        name: "",
        comment: "",
        pageCount: 0,
        colorCover: "JAUNE", // Valeur par défaut
        price: 0
      },
      // Variables pour la gestion des erreurs
      error: false,
      errorMessage: ""
    }
  },
  methods: {
    // Méthode pour ajouter un livre
    async addBook() {
      // Réinitialisation des erreurs
      this.error = false;
      this.errorMessage = "";
      try {
        // Vérification de la validité des champs
        if (this.bookIsValid()) {
          // Vérification du nombre de pages, vérification externe pour différencier les erreurs
          if (this.book.price <= 49) {
            // Appel de l'API pour ajouter le livre
            await BookService.addBook(this.book)
            console.log("Book créée", this.book);
            
            // Redirection vers la liste des livres
            this.endProcess();
          } else {
            // Envoi du message d'erreur
            this.error = true;
            this.errorMessage = "Le nombre de pages doit être inférieur ou égal à 49.";
          }
        }
        else {
          // Envoi du message d'erreur
          this.error = true;
          this.errorMessage = "Informations incomplètes avant création d’un livre.";
        }
      // Gestion en cas d'erreur API
      } catch (error) {
        console.log("error");
        // Envoi du message d'erreur
        this.error = true;
        this.errorMessage = "Erreur lors de la création du livre.";
      }
    },
    // Méthode de redirection vers la liste des livres
    endProcess() {
      this.$router.push({
        name:"list"
      }
      );
    },
    // Méthode de validation des champs
    bookIsValid() {
      return this.book.name !== "" && this.book.comment !== "" && this.book.pageCount > 0 && this.book.colorCover !== "" && this.book.price > 0;
    },
    // Méthode pour annuler la création et revenir à la liste
    cancelForm() {
      this.$router.push({
        name:"list"
      })
    }
  }
}
</script>

<style>
  .errorMessage {
    color: red;
  }
</style>
