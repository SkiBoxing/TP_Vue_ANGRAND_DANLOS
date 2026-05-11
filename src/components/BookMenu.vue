<template>
  <div class="menu">
    Un super Menu

    <!-- Liens de navigation -->
    <nav>
      <RouterLink to="/">Liste</RouterLink>
      <RouterLink to="/form">Formulaire</RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BookMenu"
}
</script>

<style>
  .menu {
    border: 1px solid orange;
  }
</style>
