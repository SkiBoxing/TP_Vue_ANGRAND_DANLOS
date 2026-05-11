<template>
  <!-- Affichage du menu -->
  <BookMenu/>
  <!-- Affichage du contenu principal -->
  <router-view></router-view>
  <!-- Affichage du footer -->
  <Footer/>

  <p>{{ username }}</p>
</template>

<script>
import BookApi from "@/api/BookApi";

// Importation des composants
import Footer from "../components/Footer.vue";
import BookMenu from "../components/BookMenu.vue";

export default {
  name: 'Home',
  components: { Footer, BookMenu },
  // Récupération du nom d'utilisateur depuis le localStorage
  data() {
    return {
      username: localStorage.getItem("User"),
    };
  },
}
</script>